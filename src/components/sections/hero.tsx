import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { getSiteContent } from '@/lib/firebase/firestore';
import type { HeroContent } from '@/types/site-content';

const defaultContent: HeroContent = {
    headline: 'Unforgettable Music For Your Wedding & Event',
    subtext: "Professional DJ services for weddings, corporate events, and private celebrations — from the first dance to the last song.",
};

export default async function Hero() {
    const content = (await getSiteContent<HeroContent>('hero')) || defaultContent;

  return (
    <section id="home" className="w-full text-center text-white pt-20">
      <div className="container mx-auto px-4 py-10 sm:py-20">
        <div className="flex flex-col items-center">
            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-100">
                {content.headline || defaultContent.headline}
            </h1>
            <p className="mt-4 text-lg max-w-2xl text-gray-300">
                {content.subtext || defaultContent.subtext}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-white text-black hover:bg-gray-200" asChild>
                <Link href="/#booking">Book Now</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-gray-500 text-white hover:bg-gray-800" asChild>
                <Link href="/services">View Services</Link>
            </Button>
            </div>
        </div>
      </div>
    </section>
  );
}
