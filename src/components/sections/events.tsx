import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Card } from '@/components/ui/card';

const pastEvents = [
  {
    name: 'VibeCheck Fest',
    date: 'AUG 15, 2024',
    imageUrl: 'https://placehold.co/600x800',
    aiHint: 'festival poster'
  },
  {
    name: 'Club Neon',
    date: 'JUL 28, 2024',
    imageUrl: 'https://placehold.co/600x800',
    aiHint: 'club flyer'
  },
  {
    name: 'Rhythm & Bass',
    date: 'JUN 10, 2024',
    imageUrl: 'https://placehold.co/600x800',
    aiHint: 'concert poster'
  },
];

export default function Events() {
  return (
    <section id="events" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl sm:text-5xl font-bold text-center uppercase tracking-tighter">
          Past <span className="text-primary">Performances</span>
        </h2>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {pastEvents.map((event) => (
            <Card
              key={event.name}
              className="group overflow-hidden bg-card border-border/50 text-center transform transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="relative">
                <Image
                  src={event.imageUrl}
                  alt={`Poster for ${event.name}`}
                  width={600}
                  height={800}
                  className="object-cover w-full h-80 transition-transform duration-500 group-hover:scale-105"
                  data-ai-hint={event.aiHint}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              </div>
              <div className="p-6">
                <p className="text-sm font-bold text-accent">{event.date}</p>
                <h3 className="mt-2 text-2xl font-bold">{event.name}</h3>
              </div>
            </Card>
          ))}
        </div>
        <div className="mt-16 text-center">
          <Button asChild size="lg" variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground hover:shadow-2xl hover:shadow-accent/40 transition-all duration-300">
            <Link href="#bookings">Hire Me For Your Event</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
