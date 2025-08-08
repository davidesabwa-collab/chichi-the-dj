
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import type { Mix } from '@/types/mix';
import { useMusicPlayer } from '@/context/music-player-context';
import { PlayCircle, Youtube, Disc } from 'lucide-react';

interface MixesProps {
  mixes: Mix[];
}

const PlatformIcon = ({ platform }: { platform: Mix['platform']}) => {
    switch (platform) {
        case 'YouTube':
            return <Youtube className="h-4 w-4" />;
        case 'Mixcloud':
            return <Disc className="h-4 w-4" />; // Using Disc as a placeholder
        default:
            return <Disc className="h-4 w-4" />;
    }
}


export default function Mixes({ mixes }: MixesProps) {
  const { playMix } = useMusicPlayer();

  return (
    <section id="mixes" className="py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-8">
            <h2 className="text-4xl sm:text-5xl font-bold text-white">
                Mixes
            </h2>
            <p className="mt-2 text-gray-400">Experience ad-free and high quality mixes.
            </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {mixes.map((mix) => (
            <div key={mix.id} className="group">
                <div 
                    className="relative w-full aspect-video overflow-hidden rounded-lg mb-2 cursor-pointer"
                    onClick={() => mix.audioUrl && playMix(mix)}
                >
                    <Image
                        src={mix.coverUrl}
                        alt={`Cover for ${mix.title}`}
                        fill
                        className="object-cover rounded-md group-hover:opacity-80 transition-opacity"
                        data-ai-hint={`${mix.genre} music abstract`}
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <PlayCircle className="h-12 w-12 text-white" />
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

        <div className="mt-12 space-y-8">
            <iframe 
                width="100%" 
                height="120" 
                src="https://player-widget.mixcloud.com/widget/iframe/?hide_cover=1&feed=%2Fchichithedjofficial%2F" 
                frameBorder="0" 
                allow="encrypted-media; fullscreen; autoplay; idle-detection; speaker-selection; web-share;"
                title="Mixcloud Player"
            ></iframe>
            <iframe style={{borderRadius: "10px"}} scrolling="no" id="hearthis_at_user_chichi-the-dj" width="100%" height="350" src="https://app.hearthis.at/chichi-the-dj/embed/?hcolor=ba1010&css=&skin=black" frameBorder="0" allowTransparency></iframe>
        </div>
        
        <hr className="mt-12 border-gray-800" />
      </div>
    </section>
  );
}
