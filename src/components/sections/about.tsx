import Image from 'next/image';
import { Card } from '@/components/ui/card';

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-5 gap-12 items-center">
          <div className="md:col-span-2">
            <Card className="overflow-hidden border-2 border-primary/50 shadow-lg shadow-primary/20">
              <Image
                src="https://placehold.co/600x800"
                alt="Portrait of Chichi The DJ"
                width={600}
                height={800}
                className="object-cover w-full h-full"
                data-ai-hint="dj portrait"
              />
            </Card>
          </div>
          <div className="md:col-span-3">
            <h2 className="text-4xl sm:text-5xl font-bold uppercase tracking-tighter">
              Who is <span className="text-primary">Chichi The DJ?</span>
            </h2>
            <div className="mt-6 space-y-4 text-foreground/80 text-lg">
              <p>
                Chichi The DJ is more than just a selector of music—she’s a conductor of vibes.
              </p>
              <p>
                Her journey began with a simple desire to make people move, and has evolved into a full-blown movement of rhythm, soul, and bass.
              </p>
              <p>
                Whether spinning Afrobeat, Amapiano, hip-hop, or house, Chichi knows exactly how to take the crowd on an unforgettable ride.
              </p>
              <p>
                From clubs to festivals and private events, she’s become a name synonymous with energy and flawless transitions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
