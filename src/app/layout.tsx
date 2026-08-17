import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"
import { Inter, Space_Grotesk } from 'next/font/google'
import { MusicPlayerProvider } from '@/context/music-player-context';
import MusicPlayer from '@/components/music-player';
import { getSiteContent } from '@/lib/firebase/firestore';
import type { SiteConfigContent } from '@/types/site-content';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk' });

const SITE_URL = "https://www.chichithedj.us";
const defaultSiteConfig: SiteConfigContent = {
  name: "Chichi The DJ Official",
  description: "Official website for Chichi The DJ. Professional, experienced, and disciplined DJ for weddings, corporate events, private parties, and more. Listen to exclusive mixes and book your next event.",
};

export async function generateMetadata(): Promise<Metadata> {
  const content = (await getSiteContent<SiteConfigContent>('site-config')) || defaultSiteConfig;
  const name = content.name || defaultSiteConfig.name;
  const description = content.description || defaultSiteConfig.description;

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: name,
      template: `%s | ${name}`,
    },
    description,
    openGraph: {
      title: name,
      description,
      url: SITE_URL,
      siteName: name,
      images: [
        {
          url: '/chichithedj-og.jpg',
          width: 1200,
          height: 630,
          alt: 'Chichi The DJ performing at an event',
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: name,
      description,
      images: ['/chichithedj-og.jpg'],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    keywords: ['DJ', 'Chichi The DJ', 'Seattle DJ', 'Wedding DJ', 'Corporate Event DJ', 'Party DJ', 'Afrobeat Mix', 'Amapiano Mix', 'Dancehall Mix'],
    creator: 'Chichi The DJ',
    verification: {
      google: '7bFShrNF84NlU4xA2utzxAGUSz434IIbIM-b6jnK3To',
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const content = (await getSiteContent<SiteConfigContent>('site-config')) || defaultSiteConfig;
  const description = content.description || defaultSiteConfig.description;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MusicGroup',
    name: 'Chichi The DJ',
    url: SITE_URL,
    sameAs: [
      'https://www.youtube.com/@chichithedj',
      'https://www.instagram.com/chichithedj',
      'https://www.facebook.com/chichithedj',
    ],
    logo: `${SITE_URL}/chichithedjlogo.jpg`,
    image: `${SITE_URL}/chichithedj-og.jpg`,
    description,
    genre: ['Afrobeat', 'Amapiano', 'Dancehall', 'Reggae', 'Hip Hop', 'R&B'],
  };


  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <MusicPlayerProvider>
          {children}
          <MusicPlayer />
          <Toaster />
        </MusicPlayerProvider>
      </body>
    </html>
  );
}
