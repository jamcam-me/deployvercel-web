import React from 'react';
import { ContentBlock } from '../ContentBlock';
import { ImageGalleryItem } from '../ContentBlock/types';

interface ImageGalleryProps {
  images: ImageGalleryItem[];
  title?: string;
  subtitle?: string;
  alignment?: 'left' | 'center' | 'right';
}

export const ImageGallery: React.FC<ImageGalleryProps> = ({
  images,
  title,
  subtitle,
  alignment = 'center',
}) => {
  return (
    <ContentBlock title={title} subtitle={subtitle} alignment={alignment}>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8">
        {images.map((item, index) => (
          <div key={index} className="bri-card p-4">
            <a href={item.link || '#'} target="_blank" rel="noopener noreferrer" className="block">
              <img 
                src={item.image} 
                alt={item.alt} 
                className="w-full h-48 object-cover rounded-lg mb-2" 
              />
            </a>
            <h3 className="font-futura text-light-stone text-lg font-semibold">{item.alt}</h3>
            {item.caption && <p className="font-futura text-soft-steel text-sm">{item.caption}</p>}
          </div>
        ))}
      </div>
    </ContentBlock>
  );
};