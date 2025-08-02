import Image from 'next/image';
import { Card } from '@/components/ui/card';

const galleryImages = [
  { src: 'https://placehold.co/600x400', alt: 'DJ booth shot', aiHint: 'dj booth' },
  { src: 'https://placehold.co/400x600', alt: 'Crowd dancing', aiHint: 'club crowd' },
  { src: 'https://placehold.co/600x400', alt: 'Chichi The DJ smiling', aiHint: 'dj smiling' },
  { src: 'https://placehold.co/400x600', alt: 'Festival stage view', aiHint: 'festival stage' },
  { src: 'https://placehold.co/600x400', alt: 'Behind the scenes shot', aiHint: 'dj equipment' },
  { src: 'https://placehold.co/600x400', alt: 'Colorful stage lights', aiHint: 'stage lights' },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-16 sm:py-24 bg-background/95">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl sm:text-5xl font-bold text-center uppercase tracking-tighter">
          <span className="text-primary">Gallery</span>
        </h2>
        <div className="mt-12 columns-2 md:columns-3 gap-4">
          {galleryImages.map((image, index) => (
            <div key={index} className="mb-4 break-inside-avoid group overflow-hidden rounded-lg">
              <Image
                src={image.src}
                alt={image.alt}
                width={600}
                height={400}
                className="w-full h-auto object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                data-ai-hint={image.aiHint}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
