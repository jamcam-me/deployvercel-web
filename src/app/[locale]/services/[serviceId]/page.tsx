import { promises as fs } from 'fs'; // Import promises from fs
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import { services } from '@/data/services';
import { Locale } from '@/lib/i18n';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getTranslations } from 'next-intl/server'; // Use server-side translations

interface ServiceDetailPageProps {
  params: {
    locale: Locale;
    serviceId: string;
  };
}

// Function to get markdown content
async function getServiceContent(locale: Locale, serviceId: string) {
  const filePath = path.join(process.cwd(), `src/content/services/${locale}/${serviceId}.md`);
  
  try {
    const fileContents = await fs.readFile(filePath, 'utf8'); // Use async readFile
    const { data, content } = matter(fileContents);
    const processedContent = await remark().use(html).process(content);
    const contentHtml = processedContent.toString();

    return {
      data,
      contentHtml,
    };
  } catch (error) {
    console.error(`Error reading service content for ${serviceId} in ${locale}:`, error);
    return null; // Return null if file not found or error
  }
}

export async function generateStaticParams() {
  const paths = services.flatMap(service => {
    // Only generate static params for advisory services if they are the target
    if (service.category === 'advisory') { 
      return [{ locale: 'en', serviceId: service.id }, { locale: 'de', serviceId: service.id }];
    }
    return [];
  });
  return paths;
}

export default async function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const { locale, serviceId } = params;
  const t = await getTranslations('services'); // Access the 'services' namespace directly

  const serviceData = services.find(s => s.id === serviceId);

  if (!serviceData) {
    notFound(); // Display 404 if service not found
  }

  const serviceContent = await getServiceContent(locale, serviceId);

  if (!serviceContent) {
    notFound(); // Display 404 if content not found
  }

  return (
    <>
      {/* Hero Section */}
      <div className="relative h-[40vh] w-full">
        <Image
          src="/images/ai_cyber_illustration.png" // Default hero image
          alt={serviceData.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-cyber-navy/70 to-evergreen-intel/50 z-10" />
        <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center px-4 sm:px-8">
          <h1 className="font-cinzel uppercase font-bold text-executive-gold tracking-wider text-4xl md:text-5xl lg:text-6xl mb-6">
            {serviceData.title}
          </h1>
          <p className="font-futura text-light-stone text-lg md:text-xl max-w-2xl">
            {serviceData.description}
          </p>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="container-custom section py-12">
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <div dangerouslySetInnerHTML={{ __html: serviceContent.contentHtml }} />
        </div>
      </div>
    </>
  );
}