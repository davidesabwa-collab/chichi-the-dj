import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center text-center text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://placehold.co/1920x1080"
          alt="Chichi The DJ performing"
          fill
          className="object-cover"
          priority
          data-ai-hint="dj music festival"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>
      <div className="relative z-10 flex flex-col items-center p-4">
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold uppercase tracking-tighter drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]">
          <span className="text-primary">Chichi</span> The DJ
        </h1>
        <p className="mt-4 text-lg md:text-xl max-w-2xl text-foreground/80 drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]">
          Curating electrifying mixes for your soul.
        </p>
        <Button asChild size="lg" className="mt-8 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_hsl(var(--primary))]">
          <Link href="#bookings">Book Chichi</Link>
        </Button>
      </div>
    </section>
  );
}
