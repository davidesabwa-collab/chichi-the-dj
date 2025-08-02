import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { PlayCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative h-[calc(100vh-80px)] w-full flex items-center justify-center text-center text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://placehold.co/1920x1080"
          alt="Chichi The DJ performing"
          fill
          className="object-cover"
          priority
          data-ai-hint="dj performing crowd"
        />
        <div className="absolute inset-0 bg-background/80" />
      </div>
      <div className="relative z-10 flex flex-col items-center p-4">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter text-glow">
          CHICHI THE DJ
        </h1>
        <p className="mt-4 text-lg md:text-xl max-w-2xl text-foreground/80 font-medium">
          A good DJ is the key to your event’s success. Professional, experienced, and disciplined to make every event unforgettable.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full max-w-md">
          <Button size="lg" className="w-full" asChild>
           <Link href="#booking">Book Us Today</Link>
          </Button>
          <Button size="lg" variant="outline" className="w-full border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground">
            <PlayCircle className="mr-2 h-5 w-5"/>
            Watch Us Work
          </Button>
        </div>
      </div>
    </section>
  );
}
