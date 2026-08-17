import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { getSiteContent } from '@/lib/firebase/firestore';
import type { HeroContent } from '@/types/site-content';
import HeroCarousel from './hero-carousel';

const defaultContent: HeroContent = {
    headline: 'Experience The Beat',
    subtext: "No ads, no noise, just Chichi The DJ’s best mixes, exclusive tracks, playlists, and more, all in one smooth spot.",
    images: [
        { src: "https://images.unsplash.com/photo-1544785349-c4a5301826fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyMHx8ZGp8ZW58MHx8fHwxNzU0NjUyOTM2fDA&ixlib=rb-4.1.0&q=80&w=1080", alt: "DJ performing", aiHint: "dj performing" },
        { src: "https://images.unsplash.com/photo-1651065699236-6a6885503943?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw3fHxkanxlbnwwfHx8fDE3NTQ2NTI5MzZ8MA&ixlib=rb-4.1.0&q=80&w=1080", alt: "Arap Trap Art", aiHint: "concert crowd" },
        { src: "https://images.unsplash.com/photo-1618409698966-6caa2b95733a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw4fHxkanxlbnwwfHx8fDE3NTQ2NTI5MzZ8MA&ixlib=rb-4.1.0&q=80&w=1080", alt: "Graffiti background", aiHint: "graffiti art" },
    ],
};

export default async function Hero() {
    const content = (await getSiteContent<HeroContent>('hero')) || defaultContent;
    const images = content.images?.length ? content.images : defaultContent.images;

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
                <Link href="#mixes">Play Mixes</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-gray-500 text-white hover:bg-gray-800">
                Create Account
            </Button>
            </div>
        </div>
      </div>

      <HeroCarousel images={images} />
    </section>
  );
}
