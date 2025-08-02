import Link from 'next/link';
import { Instagram, Twitter } from 'lucide-react';
import { Icons } from '@/components/icons';

const socialLinks = [
  { name: 'Instagram', icon: Instagram, href: '#' },
  { name: 'Twitter', icon: Twitter, href: '#' },
  { name: 'TikTok', icon: Icons.tiktok, href: '#' },
];

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border/50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-primary">Chichi The DJ</h3>
            <a
              href="mailto:bookings@chichithedj.us"
              className="text-foreground/70 hover:text-primary transition-colors"
            >
              bookings@chichithedj.us
            </a>
          </div>
          <div className="flex items-center space-x-6">
            {socialLinks.map((social) => (
              <Link key={social.name} href={social.href} passHref>
                <social.icon className="h-7 w-7 text-foreground/70 transition-all duration-300 hover:text-accent hover:scale-110 hover:drop-shadow-[0_0_8px_hsl(var(--accent))]" />
              </Link>
            ))}
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-border/50 text-center text-sm text-foreground/50">
          <p>© {new Date().getFullYear()} Chichi The DJ. All rights reserved.</p>
          <p>Site built with energy and rhythm.</p>
        </div>
      </div>
    </footer>
  );
}
