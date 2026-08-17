'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import type { Mix } from '@/types/mix';
import type { MixcloudMixItem } from '@/types/site-content';
import { PlayCircle, Youtube, Disc, ExternalLink } from 'lucide-react';
import { useMusicPlayer } from '@/context/music-player-context';

const defaultMixcloudMixes: MixcloudMixItem[] = [
    { title: 'Best Afrobeat Vibes - 2026', duration: '38:55', slug: 'best-afrobeat-vibes-2026' },
    { title: '2026 Soukous Party 3', duration: '1:46:12', slug: '2026-soukous-party-3' },
    { title: 'Kikuyu Ngogoyo Mix VOL1', duration: '1:50:44', slug: 'kikuyu-ngogoyo-mix-vol1' },
    { title: 'Piriton Mugithi Mix', duration: '24:18', slug: 'piriton-mugithi-mix' },
    { title: '2025/2026 Donjo Maber Luo Ohangla Hits', duration: '2:41:13', slug: '2025-2026-donjo-maber-luo-ohangla-hits' },
    { title: 'New Kalenjin Mix — Kale Marathon VOL 2', duration: '1:22:46', slug: 'new-kalenjin-mix-kale-marathon-vol-2' },
    { title: 'The Collectors Classic Soul Mix VOL 1', duration: '1:05:57', slug: 'the-collectors-classic-soul-mix-vol-1' },
    { title: 'Best Soukouss Heat Mix Vol 1', duration: '1:03:14', slug: 'best-soukouss-heat-mix-vol-1' },
];

function PlatformIcon({ platform }: { platform: Mix['platform'] }) {
    if (platform === 'YouTube') return <Youtube className="h-4 w-4 text-red-400" />;
    return <Disc className="h-4 w-4 text-primary" />;
}

function MixCard({ mix }: { mix: Mix }) {
    const { playMix, currentMix, isPlaying } = useMusicPlayer();
    const isCurrentlyPlaying = currentMix?.id === mix.id && isPlaying;

    return (
        <div className="group">
            <div className="relative w-full aspect-video overflow-hidden rounded-lg mb-2">
                <Image
                    src={mix.coverUrl}
                    alt={`Cover for ${mix.title}`}
                    fill
                    className="object-cover rounded-md"
                    data-ai-hint={`${mix.genre} music abstract`}
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity gap-3">
                    <button
                        onClick={() => playMix(mix)}
                        aria-label="Play mix"
                        className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-black hover:scale-110 transition-transform"
                    >
                        <PlayCircle className="h-7 w-7" />
                    </button>
                    {mix.platformUrl && mix.platformUrl !== '#' && (
                        <Link href={mix.platformUrl} target="_blank" rel="noopener noreferrer" aria-label="Open on platform">
                            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors">
                                <ExternalLink className="h-4 w-4" />
                            </div>
                        </Link>
                    )}
                </div>
                {isCurrentlyPlaying && (
                    <div className="absolute top-2 left-2 bg-primary text-black text-xs font-bold px-2 py-0.5 rounded-full">
                        ▶ Playing
                    </div>
                )}
            </div>
            <div>
                <h3 className="font-semibold text-sm text-gray-100 line-clamp-2 group-hover:underline cursor-pointer" onClick={() => playMix(mix)}>
                    {mix.title}
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
}

interface MixesSectionProps {
    mixes: Mix[];
    mixcloudMixes?: MixcloudMixItem[];
}

export default function MixesSection({ mixes, mixcloudMixes }: MixesSectionProps) {
    const recentMixes = mixes.slice(0, 8);
    const resolvedMixcloudMixes = mixcloudMixes?.length ? mixcloudMixes : defaultMixcloudMixes;

    return (
        <section id="mixes" className="py-16 sm:py-24">
            <div className="container mx-auto px-4">
                {/* HearThis & YouTube Mixes */}
                <div className="mb-8 text-center">
                    <h2 className="text-4xl sm:text-5xl font-bold text-white uppercase tracking-wider font-space-grotesk">
                        Latest Mixes
                    </h2>
                    <p className="mt-2 text-gray-400 max-w-2xl mx-auto">
                        Ad-free, high quality mixes from multiple platforms — all in one place. Hit play to listen right here.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {recentMixes.map((mix) => (
                        <MixCard key={mix.id} mix={mix} />
                    ))}
                </div>

                <div className="text-center mt-8">
                    <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-black transition-colors uppercase tracking-widest font-bold">
                        <Link href="/mixes">View All Mixes</Link>
                    </Button>
                </div>

                {/* Mixcloud Section */}
                <div className="mt-20 border-t border-gray-800 pt-16">
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
                        <div>
                            <div className="flex items-center gap-2 mb-2">
                                <Disc className="h-5 w-5 text-primary" />
                                <span className="text-primary text-sm font-semibold uppercase tracking-widest">Also on Mixcloud</span>
                            </div>
                            <h3 className="text-3xl font-bold text-white">Mixcloud Sessions</h3>
                            <p className="mt-1 text-gray-400">Long-form sets and exclusive sessions on Mixcloud.</p>
                        </div>
                        <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-black transition-colors uppercase tracking-widest font-bold flex-shrink-0">
                            <Link href="https://www.mixcloud.com/chichithedjofficial/" target="_blank" rel="noopener noreferrer">
                                Open Mixcloud Profile
                            </Link>
                        </Button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {resolvedMixcloudMixes.map((m) => (
                            <Link
                                key={m.slug}
                                href={`https://www.mixcloud.com/chichithedjofficial/${m.slug}/`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center gap-3 bg-gray-900 border border-gray-800 rounded-lg p-4 hover:border-primary/40 transition-colors"
                            >
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                    <Disc className="h-5 w-5 text-primary" />
                                </div>
                                <div className="min-w-0">
                                    <p className="text-sm font-semibold text-gray-100 truncate group-hover:text-primary transition-colors">{m.title}</p>
                                    <p className="text-xs text-gray-500">{m.duration}</p>
                                </div>
                                <ExternalLink className="h-4 w-4 text-gray-600 flex-shrink-0 group-hover:text-primary transition-colors ml-auto" />
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
