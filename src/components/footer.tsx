import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Icons } from '@/components/icons';
import { Twitter, Instagram, Youtube, Twitch } from 'lucide-react';

const quickLinks = [
  { name: "Mixes", href: "#mixes" },
  { name: "Shop", href: "#shop" },
  { name: "Blogs", href: "#" },
  { name: "Events", href: "#" },
];

const musicLinks = [
  { name: "Remixes", href: "#" },
  { name: "Playlists", href: "#" },
];

const socialLinks = [
    { name: "Twitter", href: "#", icon: Twitter },
    { name: "Instagram", href: "#", icon: Instagram },
    { name: "YouTube", href: "#", icon: Youtube },
    { name: "Twitch", href: "#", icon: Twitch },
]

export default function Footer() {
  return (
    <footer className="bg-secondary/30 text-foreground/70 border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & About */}
          <div className="md:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Icons.logo className="h-10 w-10 text-primary" />
              <span className="text-xl font-bold text-foreground">DJ G400</span>
            </Link>
            <p className="text-sm max-w-xs">
              The official hub for DJ G400. Ad-free mixes, exclusive tracks, merch, and more.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4 text-lg">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Music */}
          <div>
            <h3 className="font-semibold text-foreground mb-4 text-lg">Music</h3>
            <ul className="space-y-3">
              {musicLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & CTA */}
          <div>
             <h3 className="font-semibold text-foreground mb-4 text-lg">Follow Me</h3>
             <div className="flex space-x-4 mb-6">
                {socialLinks.map((social) => (
                    <Link key={social.name} href={social.href} className="text-foreground/70 hover:text-primary transition-colors">
                        <social.icon className="h-6 w-6" />
                        <span className="sr-only">{social.name}</span>
                    </Link>
                ))}
             </div>
             <Button variant="outline" className="w-full">
                Book Now
             </Button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border/50 flex flex-col sm:flex-row justify-between items-center text-sm">
          <p>&copy; {new Date().getFullYear()} DJ G400. All Rights Reserved.</p>
          <div className="flex gap-4 mt-4 sm:mt-0">
             <Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link>
             <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
