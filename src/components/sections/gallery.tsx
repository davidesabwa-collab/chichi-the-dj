import Image from 'next/image';

const images = [
  { src: 'https://placehold.co/600x400', alt: 'Event photo 1', aiHint: 'dj concert' },
  { src: 'https://placehold.co/600x400', alt: 'Event photo 2', aiHint: 'crowd dancing' },
  { src: 'https://placehold.co/600x400', alt: 'Event photo 3', aiHint: 'nightclub lights' },
  { src: 'https://placehold.co/600x400', alt: 'Event photo 4', aiHint: 'wedding party' },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-black tracking-tighter">
                My Portfolio
            </h2>
            <p className="mt-2 text-lg max-w-2xl mx-auto text-foreground/70">A glimpse into the moments we create.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div key={index} className="relative aspect-square group overflow-hidden rounded-lg">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                data-ai-hint={image.aiHint}
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/50 transition-colors" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
