'use client';

import { useMusicPlayer } from '@/context/music-player-context';
import { X, ExternalLink, Pause, Play, Youtube, Disc } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

function PlatformIcon({ platform }: { platform: string }) {
    if (platform === 'YouTube') return <Youtube className="h-4 w-4 text-red-500" />;
    return <Disc className="h-4 w-4 text-primary" />;
}

export default function MusicPlayer() {
    const { currentMix, isPlaying, togglePlayPause, dismissPlayer } = useMusicPlayer();

    if (!currentMix) return null;

    const isYouTube = currentMix.platform === 'YouTube';
    const embedUrl = isYouTube
        ? `${currentMix.platformUrl}?autoplay=1&enablejsapi=1`
        : null;

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-gray-950 border-t border-gray-800 shadow-2xl shadow-black/50 animate-in slide-in-from-bottom duration-300">
            <div className="container mx-auto px-4 py-3 flex items-center gap-4">
                {/* Cover */}
                <div className="relative w-12 h-12 rounded overflow-hidden flex-shrink-0">
                    <Image
                        src={currentMix.coverUrl}
                        alt={currentMix.title}
                        fill
                        className="object-cover"
                    />
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                    <p className="text-white text-sm font-semibold truncate">{currentMix.title}</p>
                    <div className="flex items-center gap-2 mt-0.5">
                        <PlatformIcon platform={currentMix.platform} />
                        <span className="text-xs text-gray-400">{currentMix.genre}</span>
                        <span className="text-xs text-gray-600">&middot;</span>
                        <span className="text-xs text-gray-400">{currentMix.platform}</span>
                    </div>
                </div>

                {/* Hidden YouTube iframe for audio (YouTube only) */}
                {isYouTube && embedUrl && (
                    <iframe
                        src={embedUrl}
                        allow="autoplay"
                        className="w-0 h-0 absolute opacity-0 pointer-events-none"
                        title={currentMix.title}
                    />
                )}

                {/* Controls */}
                <div className="flex items-center gap-2 flex-shrink-0">
                    {/* Play/Pause (cosmetic for non-YouTube; real toggle for YouTube via context) */}
                    <button
                        onClick={togglePlayPause}
                        className="w-9 h-9 rounded-full bg-primary text-black flex items-center justify-center hover:bg-primary/90 transition-colors"
                        aria-label={isPlaying ? 'Pause' : 'Play'}
                    >
                        {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                    </button>

                    {/* Open on platform */}
                    <Link
                        href={currentMix.platformUrl || '#'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 rounded-full bg-gray-800 text-gray-300 flex items-center justify-center hover:bg-gray-700 transition-colors"
                        aria-label="Open on platform"
                    >
                        <ExternalLink className="h-4 w-4" />
                    </Link>

                    {/* Dismiss */}
                    <button
                        onClick={dismissPlayer}
                        className="w-9 h-9 rounded-full bg-gray-800 text-gray-400 flex items-center justify-center hover:bg-gray-700 transition-colors"
                        aria-label="Close player"
                    >
                        <X className="h-4 w-4" />
                    </button>
                </div>
            </div>

            {/* Progress bar (static visual) */}
            <div className="h-0.5 bg-gray-800 w-full">
                <div className={`h-full bg-primary ${isPlaying ? 'w-1/3' : 'w-0'} transition-all duration-1000`} />
            </div>
        </div>
    );
}
