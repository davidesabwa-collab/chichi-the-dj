import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import type { Mix } from '@/types/mix';
import { PlayCircle, Youtube, Disc } from 'lucide-react';
import { getMixes } from '@/lib/firebase/firestore';

const PlatformIcon = ({ platform }: { platform: Mix['platform'] }) => {
    switch (platform) {
        case 'YouTube':
            return <Youtube className="h-4 w-4" />;
        case 'Mixcloud':
            return <Disc className="h-4 w-4" />; 
        default:
            return <Disc className="h-4 w-4" />;
    }
}

export default async function Mixes() {
  const allMixes = await getMixes();
  const recentMixes = allMixes.slice(0, 8); // Show 8 most recent mixes

  return (
    <section id="mixes" className="py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-8 text-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-white uppercase tracking-wider font-space-grotesk">
                Latest Mixes
            </h2>
            <p className="mt-2 text-gray-400 max-w-2xl mx-auto">
                Experience ad-free and high quality mixes from various platforms, all in one place.
            </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {recentMixes.map((mix) => (
            <div key={mix.id} className="group">
                <div 
                    className="relative w-full aspect-video overflow-hidden rounded-lg mb-2"
                >
                    <Image
                        src={mix.coverUrl}
                        alt={`Cover for ${mix.title}`}
                        fill
                        className="object-cover rounded-md"
                        data-ai-hint={`${mix.genre} music abstract`}
                    />
                     <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                       <Link href={mix.platformUrl || '#'} target="_blank" rel="noopener noreferrer">
                            <PlayCircle className="h-12 w-12 text-white" />
                       </Link>
                    </div>
                </div>
                <div>
                    <h3 className="font-semibold text-base text-gray-100 group-hover:underline">
                        {mix.platformUrl && mix.platformUrl !== '#' ? (
                            <Link href={mix.platformUrl} target="_blank" rel="noopener noreferrer">{mix.title}</Link>
                        ) : (
                            <span>{mix.title}</span>
                        )}
                    </h3>
                    <div className="flex items-center gap-2 text-xs text-gray-500 mt-1">
                        <PlatformIcon platform={mix.platform} />
                        <span>{mix.genre}</span>
                        <span>&middot;</span>
                        <span>{mix.date}</span>
                    </div>
                </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-black transition-colors uppercase tracking-widest font-bold">
                <Link href="/mixes">View All Mixes</Link>
            </Button>
        </div>

      </div>
    </section>
  );
}
