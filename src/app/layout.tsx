import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"
import { Inter } from 'next/font/google'
import { MusicPlayerProvider } from '@/context/music-player-context';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Chichi The DJ Official',
  description: 'A good DJ is the key to your event’s success. Chichi The DJ is a professional, experienced, and disciplined DJ.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
       <body className={`${inter.variable} font-sans antialiased`}>
        <MusicPlayerProvider>
          {children}
          <Toaster />
        </MusicPlayerProvider>
      </body>
    </html>
  );
}
