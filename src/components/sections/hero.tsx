import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Hero() {
  return (
    <section id="home" className="relative h-[calc(100vh-80px)] w-full flex items-center justify-center text-center text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://placehold.co/1920x1080"
          alt="DJ G400 performing"
          fill
          className="object-cover"
          priority
          data-ai-hint="dj music festival"
        />
        <div className="absolute inset-0 bg-black/70" />
         <div 
          className="absolute bottom-0 left-0 right-0 h-48 bg-repeat-x z-10" 
          style={{ 
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='100' height='20' viewBox='0 0 100 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 10 L50 0 L100 10 L50 20 Z' fill='rgba(200,50,50,0.5)'/%3E%3C/svg%3E\")",
            backgroundSize: '50px 20px',
            opacity: 0.5,
         }}
        />
      </div>
      <div className="relative z-10 flex flex-col items-center p-4">
        <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-tight">
          Mr 400 Miles
        </h1>
        <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-tight mt-2">
          Above The Competition
        </h1>
        <p className="mt-6 text-lg md:text-xl max-w-xl text-foreground/70">
          No ads, no noise, just DJ G400&apos;s best mixes, exclusive tracks, playlists, blogs, events, merch, and more, all in one smooth spot.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full max-w-xs">
          <Button size="lg" className="w-full">
            Play Mixes
          </Button>
          <Button size="lg" variant="outline" className="w-full">
           Create Account
          </Button>
        </div>
      </div>
    </section>
  );
}
