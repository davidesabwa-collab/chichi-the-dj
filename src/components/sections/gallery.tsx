import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

const galleryImages = [
    { src: 'https://placehold.co/600x400', alt: 'Wedding reception party', aiHint: 'wedding reception' },
    { src: 'https://placehold.co/600x400', alt: 'Corporate event celebration', aiHint: 'corporate event' },
    { src: 'https://placehold.co/600x400', alt: 'Private party dancing', aiHint: 'private party dance' },
    { src: 'https://placehold.co/600x400', alt: 'Graduation party fun', aiHint: 'graduation celebration' },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-16 sm:py-24 bg-black text-white">
      <div className="container mx-auto px-4">
         <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-wider">Event Gallery</h2>
            <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto">A glimpse into the unforgettable moments we've helped create.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div key={index} className="relative aspect-square overflow-hidden rounded-lg group">
              <Image 
                src={image.src} 
                alt={image.alt}
                layout="fill"
                objectFit="cover"
                data-ai-hint={image.aiHint}
                className="transform group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300"></div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-black transition-colors uppercase tracking-widest font-bold">
                <Link href="#">View Full Gallery</Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
