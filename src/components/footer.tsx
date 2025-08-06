import Link from 'next/link';
import { Icons } from './icons';
import { Twitter, Youtube, Instagram } from 'lucide-react';

const footerLinks = {
  "Chichi the DJ": [
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#booking" },
  ],
  "Music": [
    { name: "Mixes", href: "#mixes" },
    { name: "Playlists", href: "#" },
    { name: "Remixes", href: "#" },
  ],
  "Shop": [
    { name: "Clothing", href: "#shop" },
    { name: "Wallpapers", href: "#" },
  ],
  "Other": [
    { name: "Events", href: "#events" },
    { name: "Newsletter", href: "#" },
    { name: "Downloads", href: "#" },
  ],
   "Blogs": [
    { name: "Blogs", href: "#" },
  ],
};


const socialLinks = [
    { name: "Twitter", href: "#", icon: Twitter },
    { name: "YouTube", href: "#", icon: Youtube },
    { name: "Instagram", href: "#", icon: Instagram },
]

export default function Footer() {
  return (
    <footer className="bg-gradient-to-t from-black via-gray-900/80 to-[#1a1a1a] text-gray-400">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
          <div className="col-span-2 md:col-span-1">
            <Icons.logo className="h-24 w-24 text-primary" />
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h5 className="font-bold text-gray-100 mb-4">{title}</h5>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="hover:text-primary transition-colors text-sm">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <hr className="my-8 border-gray-800" />

        <div className="flex flex-col sm:flex-row justify-between items-center text-sm">
          <p className="text-center sm:text-left">
            &copy; {new Date().getFullYear()} Chichi The DJ. All Rights Reserved.
          </p>
          <div className="flex items-center gap-4 mt-4 sm:mt-0">
             <span className="hidden sm:inline">Follow Chichi The DJ</span>
             <div className="flex gap-4">
                {socialLinks.map((social) => (
                    <Link key={social.name} href={social.href} className="text-gray-400 hover:text-primary transition-colors">
                        <social.icon className="h-5 w-5" />
                        <span className="sr-only">{social.name}</span>
                    </Link>
                ))}
             </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
