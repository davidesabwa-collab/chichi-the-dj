import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const mixes = [
  {
    title: 'Lagos To The Max Vol 06',
    coverUrl: 'https://placehold.co/600x400',
    aiHint: 'abstract purple',
    genre: 'Afrobeats',
    date: '6 months ago',
    views: '574 views'
  },
  {
    title: 'The Shuffle Vol 02',
    coverUrl: 'https://placehold.co/600x400',
    aiHint: 'abstract blue',
    genre: 'Urban',
    date: '1 year ago',
    views: '783 views'
  },
  {
    title: 'Hip Hop Saved My Life Vol 05',
    coverUrl: 'https://placehold.co/600x400',
    aiHint: 'abstract orange',
    genre: 'Hip Hop',
    date: '2 years ago',
    views: '565 views'
  },
    {
    title: 'Lagos To The Max Vol 05',
    coverUrl: 'https://placehold.co/600x400',
    aiHint: 'abstract red',
    genre: 'Afrobeats',
    date: '2 years ago',
    views: '418 views'
  }
];

export default function Mixes() {
  return (
    <section id="mixes" className="py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-8">
            <h2 className="text-4xl sm:text-5xl font-bold text-white">
                Mixes
            </h2>
            <p className="mt-2 text-gray-400">Experience ad-free and high quality mixes. <br />
                <Link href="#" className="text-gray-400 underline-offset-4 hover:underline hover:text-white transition-colors">
                    Check out mixes
                </Link>
            </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {mixes.map((mix) => (
            <Link href="#" key={mix.title} className="group">
                <div className="relative w-full aspect-video overflow-hidden rounded-lg mb-2">
                    <Image
                        src={mix.coverUrl}
                        alt={`Cover for ${mix.title}`}
                        fill
                        className="object-cover rounded-md group-hover:opacity-80 transition-opacity"
                        data-ai-hint={mix.aiHint}
                    />
                </div>
                <div>
                    <h3 className="font-semibold text-base text-gray-100 group-hover:underline">{mix.title}</h3>
                    <p className="text-xs text-gray-500">
                        {mix.genre} &middot; {mix.date} &middot; {mix.views}
                    </p>
                </div>
            </Link>
          ))}
        </div>
        <div className="mt-12">
             <Button variant="link" className="text-white p-0 h-auto text-lg hover:no-underline hover:text-gray-300">
                Load More Mixes
            </Button>
        </div>
        <hr className="mt-12 border-gray-800" />
      </div>
    </section>
  );
}
