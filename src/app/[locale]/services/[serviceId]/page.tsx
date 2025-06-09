import { promises as fs } from 'fs'; // Import promises from fs
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import { services } from '@/data/services';
import { Locale } from '@/lib/i18n';
import { notFound } from 'next/navigation';
import { getTranslations, setRequestLocale } from 'next-intl/server'; // Import setRequestLocale
import Hero from '@/components/home/Hero'; // Import the Hero component

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
  // Set the locale for the request to enable static rendering
  setRequestLocale(locale);
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
      <Hero
        locale={locale}
        imageUrl="/images/Services-portfolio.png"
        altText={serviceData.title}
        overlayClass="bg-gradient-to-b from-cyber-navy/70 to-evergreen-intel/50"
        contentPosition="justify-center"
        heightClass="h-[80vh]"
      >
          <h1 className="font-futura uppercase font-bold text-executive-gold tracking-wider text-2xl md:text-3xl lg:text-4xl pb-8"> {/* Added font-bold back to h1 */}
            {serviceData.title}
          </h1>
          <p className="font-futura text-light-stone text-xl md:text-2xl max-w-2xl mx-auto text-center"> {/* Removed font-bold */}
            {serviceData.description}
          </p>
      </Hero>

      {/* Main Content Area */}
      <div className="container-custom section pt-4 pb-20"> {/* Further reduced padding by half */}
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <div dangerouslySetInnerHTML={{ __html: serviceContent.contentHtml }} />
        </div>
      </div>
    </>
  );
}