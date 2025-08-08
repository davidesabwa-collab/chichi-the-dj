import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"
import { Inter, Space_Grotesk } from 'next/font/google'
import { MusicPlayerProvider } from '@/context/music-player-context';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk' });


const siteConfig = {
  name: "Chichi The DJ Official",
  url: "https://www.chichithedj.us",
  description: "Official website for Chichi The DJ. Professional, experienced, and disciplined DJ for weddings, corporate events, private parties, and more. Listen to exclusive mixes and book your next event.",
}

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
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
    title: siteConfig.name,
    description: siteConfig.description,
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MusicGroup',
    name: 'Chichi The DJ',
    url: siteConfig.url,
    sameAs: [
      'https://www.youtube.com/@chichithedj',
      'https://www.instagram.com/chichithedj',
      'https://www.facebook.com/chichithedj',
    ],
    logo: `${siteConfig.url}/chichithedjlogo.png`,
    image: `${siteConfig.url}/chichithedj-og.jpg`,
    description: siteConfig.description,
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
          <Toaster />
        </MusicPlayerProvider>
      </body>
    </html>
  );
}
