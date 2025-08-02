import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { PlayCircle } from 'lucide-react';

const mixes = [
  {
    title: 'Midnight Sessions Vol. 1',
    imageUrl: 'https://placehold.co/600x600',
    aiHint: 'abstract neon'
  },
  {
    title: 'Afrobeats & Chill',
    imageUrl: 'https://placehold.co/600x600',
    aiHint: 'tropical pattern'
  },
  {
    title: 'Electric Femme Energy',
    imageUrl: 'https://placehold.co/600x600',
    aiHint: 'electric lightning'
  },
];

export default function Music() {
  return (
    <section id="music" className="py-16 sm:py-24 bg-background/95">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl sm:text-5xl font-bold text-center uppercase tracking-tighter">
          Latest <span className="text-primary">Mixes</span>
        </h2>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {mixes.map((mix) => (
            <Card
              key={mix.title}
              className="group relative overflow-hidden bg-card border-2 border-primary/30 hover:border-primary transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/40"
            >
              <Image
                src={mix.imageUrl}
                alt={`Cover art for ${mix.title}`}
                width={600}
                height={600}
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                data-ai-hint={mix.aiHint}
              />
              <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center p-4 text-center transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                <PlayCircle className="w-20 h-20 text-accent mb-4 transform transition-transform duration-300 group-hover:scale-110" />
              </div>
               <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="text-xl font-bold text-white drop-shadow-md">{mix.title}</h3>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
