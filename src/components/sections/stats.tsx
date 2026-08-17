import { getSiteContent } from '@/lib/firebase/firestore';
import type { StatsContent } from '@/types/site-content';

const defaultStats: StatsContent = {
    stats: [
        { value: '10+', label: 'Years of Experience' },
        { value: '500+', label: 'Events Hosted' },
        { value: '50+', label: 'Music Genres' },
        { value: '3', label: 'Radio Stations Featured' },
    ],
};

export default async function Stats() {
    const content = (await getSiteContent<StatsContent>('stats')) || defaultStats;
    const stats = content.stats?.length ? content.stats : defaultStats.stats;

    return (
        <section className="bg-primary py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {stats.map((stat, i) => (
                        <div key={`${stat.label}-${i}`}>
                            <p className="text-4xl md:text-5xl font-extrabold text-black">{stat.value}</p>
                            <p className="mt-1 text-sm font-semibold text-black/70 uppercase tracking-widest">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
