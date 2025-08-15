import React from 'react';
import { ContentBlock } from '../ContentBlock';
import { TestimonialItem } from '../ContentBlock/types';

interface TestimonialProps {
  testimonials: TestimonialItem[];
  title?: string;
  subtitle?: string;
  alignment?: 'left' | 'center' | 'right';
}

export const Testimonial: React.FC<TestimonialProps> = ({
  testimonials,
  title,
  subtitle,
  alignment = 'center',
}) => {
  return (
    <ContentBlock title={title} subtitle={subtitle} alignment={alignment}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bri-card">
            <blockquote className="text-light-stone italic mb-4">"{testimonial.quote}"</blockquote>
            <div className="flex items-center justify-start">
              {testimonial.image && (
                <img 
                  src={testimonial.image} 
                  alt={testimonial.author} 
                  className="w-12 h-12 rounded-full mr-4 object-cover" 
                />
              )}
              <div>
                <p className="font-futura font-bold text-executive-gold">{testimonial.author}</p>
                {testimonial.role && <p className="font-futura text-soft-steel text-sm">{testimonial.role}</p>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </ContentBlock>
  );
};