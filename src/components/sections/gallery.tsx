import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

const galleryImages = [
    {
        src: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
        alt: 'Live concert crowd energy',
        aiHint: 'concert crowd energy',
    },
    {
        src: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
        alt: 'DJ performing on stage',
        aiHint: 'dj on stage',
    },
    {
        src: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
        alt: 'DJ booth and equipment setup',
        aiHint: 'dj equipment booth',
    },
    {
        src: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
        alt: 'Dance floor under colorful lights',
        aiHint: 'dance floor lights',
    },
    {
        src: 'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
        alt: 'Crowd at an outdoor festival',
        aiHint: 'outdoor festival crowd',
    },
    {
        src: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
        alt: 'Wedding reception celebration',
        aiHint: 'wedding reception',
    },
    {
        src: 'https://images.unsplash.com/photo-1531058020387-3be344556be6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
        alt: 'Corporate event celebration',
        aiHint: 'corporate event',
    },
    {
        src: 'https://images.unsplash.com/photo-1505236858219-8359eb29e329?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
        alt: 'Party lights and atmosphere',
        aiHint: 'party lights atmosphere',
    },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-16 sm:py-24 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-wider">Event Gallery</h2>
          <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto">
            A glimpse into the unforgettable moments we've helped create.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {galleryImages.map((image, index) => (
            <div key={index} className="relative aspect-square overflow-hidden rounded-lg group">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transform group-hover:scale-110 transition-transform duration-300"
                data-ai-hint={image.aiHint}
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300" />
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-black transition-colors uppercase tracking-widest font-bold">
            <Link href="https://www.facebook.com/chichithedjofficial/" target="_blank" rel="noopener noreferrer">
              View More on Facebook
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
