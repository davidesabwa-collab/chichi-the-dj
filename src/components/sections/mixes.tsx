import Image from 'next/image';
import Link from 'next/link';
import { Card } from '@/components/ui/card';

const mixes = [
  {
    title: 'Lagos To The Max Vol 06',
    coverUrl: 'https://placehold.co/400x400',
    aiHint: 'abstract purple',
    genre: 'Afrobeats',
    date: '8 months ago',
    views: '575 views'
  },
  {
    title: 'The Shuffle Vol 02',
    coverUrl: 'https://placehold.co/400x400',
    aiHint: 'abstract blue',
    genre: 'Urban',
    date: '1 year ago',
    views: '761 views'
  },
  {
    title: 'Hip Hop Saved My Life Vol 05',
    coverUrl: 'https://placehold.co/400x400',
    aiHint: 'abstract orange',
    genre: 'Hip Hop',
    date: '2 years ago',
    views: '984 views'
  },
    {
    title: 'Lagos To The Max Vol 05',
    coverUrl: 'https://placehold.co/400x400',
    aiHint: 'abstract red',
    genre: 'Afrobeats',
    date: '2 years ago',
    views: '415 views'
  }
];

export default function Mixes() {
  return (
    <section id="mixes" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="mb-8">
            <h2 className="text-4xl sm:text-5xl font-bold">
            Mixes
            </h2>
            <p className="mt-2 text-foreground/70">Experience ad-free and high quality mixes.</p>
            <Link href="#" className="mt-1 inline-block text-primary underline-offset-4 hover:underline">
                Check out mixes
            </Link>
        </div>

        <div className="space-y-6">
          {mixes.map((mix) => (
            <Link href="#" key={mix.title}>
                <Card className="flex items-center gap-4 p-3 border-transparent hover:bg-secondary/50 transition-colors">
                <div className="w-24 h-24 relative flex-shrink-0">
                    <Image
                    src={mix.coverUrl}
                    alt={`Cover for ${mix.title}`}
                    width={100}
                    height={100}
                    className="object-cover rounded-md w-full h-full"
                    data-ai-hint={mix.aiHint}
                    />
                </div>
                <div className="flex-grow">
                    <h3 className="font-semibold text-lg">{mix.title}</h3>
                    <p className="text-sm text-foreground/70">
                        {mix.genre} &middot; {mix.date} &middot; {mix.views}
                    </p>
                </div>
                </Card>
            </Link>
          ))}
        </div>
        <div className="mt-8">
             <Link href="#" className="text-primary underline-offset-4 hover:underline text-lg">
                Load More Mixes
            </Link>
        </div>
      </div>
    </section>
  );
}
