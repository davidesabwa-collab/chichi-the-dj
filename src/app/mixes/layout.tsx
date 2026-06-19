import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Mixes',
    description: 'Stream the full collection of DJ mixes by Chichi The DJ — Afrobeat, Amapiano, Reggae, Dancehall, Gospel, Soukous, R&B, and more. Ad-free and high quality.',
    keywords: ['DJ mixes', 'Afrobeat mix', 'Amapiano mix', 'Chichi The DJ mixes', 'Seattle DJ mixes', 'free DJ mixes online'],
    openGraph: {
        title: 'All Mixes | Chichi The DJ Official',
        description: 'Stream the full collection of DJ mixes — Afrobeat, Amapiano, Reggae, Dancehall, Gospel, Soukous, R&B, and more.',
        url: 'https://www.chichithedj.us/mixes',
    },
};

export default function MixesLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
