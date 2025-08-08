'use client';

import { useEffect, useState, useMemo } from 'react';
import Image from 'next/image';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { getMixes } from '@/lib/firebase/firestore';
import type { Mix } from '@/types/mix';
import { useMusicPlayer } from '@/context/music-player-context';
import { PlayCircle, Youtube, Disc, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Skeleton } from '@/components/ui/skeleton';
import Link from 'next/link';

const PlatformIcon = ({ platform }: { platform: Mix['platform'] }) => {
  switch (platform) {
    case 'YouTube': return <Youtube className="h-4 w-4" />;
    case 'Mixcloud': return <Disc className="h-4 w-4" />;
    default: return <Disc className="h-4 w-4" />;
  }
};

const MixCard = ({ mix }: { mix: Mix }) => {
  const { playMix } = useMusicPlayer();
  return (
    <div className="group">
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
  );
};

const MixesPage = () => {
  const [mixes, setMixes] = useState<Mix[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [genreFilter, setGenreFilter] = useState('all');

  useEffect(() => {
    const fetchMixes = async () => {
      setIsLoading(true);
      const mixesData = await getMixes();
      setMixes(mixesData);
      setIsLoading(false);
    };
    fetchMixes();
  }, []);

  const genres = useMemo(() => {
    const allGenres = mixes.map(mix => mix.genre);
    return ['all', ...Array.from(new Set(allGenres))];
  }, [mixes]);

  const filteredMixes = useMemo(() => {
    return mixes
      .filter(mix =>
        mix.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .filter(mix =>
        genreFilter === 'all' ? true : mix.genre === genreFilter
      );
  }, [mixes, searchTerm, genreFilter]);

  return (
    <div className="flex flex-col min-h-screen bg-black">
      <Header />
      <main className="flex-1">
        <section id="mixes-list" className="py-24 sm:py-32">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h1 className="text-5xl sm:text-6xl font-bold text-white uppercase tracking-wider font-space-grotesk">
                All Mixes
              </h1>
              <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
                Explore the full collection of mixes by Chichi The DJ. Ad-free and in high quality.
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
                <Input
                  placeholder="Search mixes..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={genreFilter} onValueChange={setGenreFilter}>
                <SelectTrigger className="w-full md:w-[200px]">
                  <SelectValue placeholder="Filter by genre" />
                </SelectTrigger>
                <SelectContent>
                  {genres.map(genre => (
                    <SelectItem key={genre} value={genre} className="capitalize">{genre}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {isLoading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {Array.from({ length: 12 }).map((_, i) => (
                  <div key={i} className="space-y-2">
                    <Skeleton className="h-40 w-full" />
                    <Skeleton className="h-6 w-3/4" />
                    <Skeleton className="h-4 w-1/2" />
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {filteredMixes.map((mix) => (
                  <MixCard key={mix.id} mix={mix} />
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default MixesPage;
