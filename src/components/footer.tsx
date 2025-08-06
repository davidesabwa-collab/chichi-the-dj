
import Link from 'next/link';
import { Icons } from './icons';
import { Twitter, Youtube, Instagram, Facebook } from 'lucide-react';

const footerSections = {
  "Company": [
    { name: "About", href: "/#about" },
    { name: "Services", href: "/#services" },
    { name: "Gallery", href: "/#gallery" },
  ],
  "Content": [
    { name: "Shop", href: "/shop" },
    { name: "Blog", href: "/blog" },
    { name: "Events", href: "/events" },
    { name: "Mixes", href: "/#mixes" },
  ],
  "Connect": [
    { name: "Contact Us", href: "/#booking" },
    { name: "Book Now", href: "/#booking" },
    { name: "FAQ", href: "#" },
  ],
};

const socialLinks = [
    { name: "Facebook", href: "#", icon: Facebook },
    { name: "Twitter", href: "#", icon: Twitter },
    { name: "YouTube", href: "#", icon: Youtube },
    { name: "Instagram", href: "#", icon: Instagram },
]

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="col-span-1 md:col-span-4">
            <Link href="/" className="inline-block mb-4">
              <Icons.logo className="h-20 w-20 text-primary" />
            </Link>
            <p className="max-w-xs text-sm">
                A good DJ is the key to your event’s success. Chichi The DJ is a professional, experienced, and disciplined DJ.
            </p>
          </div>

          <div className="col-span-1 md:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            {Object.entries(footerSections).map(([title, links]) => (
                <div key={title}>
                <h5 className="font-bold text-white mb-4 uppercase tracking-wider">{title}</h5>
                <ul className="space-y-3">
                    {links.map((link) => (
                    <li key={link.name}>
                        <Link href={link.href} className="hover:text-primary hover:underline transition-colors text-sm">
                        {link.name}
                        </Link>
                    </li>
                    ))}
                </ul>
                </div>
            ))}
             <div>
                <h5 className="font-bold text-white mb-4 uppercase tracking-wider">Follow Us</h5>
                 <div className="flex items-center gap-4">
                    {socialLinks.map((social) => (
                        <Link key={social.name} href={social.href} className="text-gray-400 hover:text-primary transition-colors">
                            <social.icon className="h-6 w-6" />
                            <span className="sr-only">{social.name}</span>
                        </Link>
                    ))}
                 </div>
             </div>
          </div>
        </div>

        <hr className="my-8 border-gray-800" />

        <div className="flex flex-col sm:flex-row justify-between items-center text-sm">
          <p className="text-center sm:text-left mb-4 sm:mb-0">
            &copy; {new Date().getFullYear()} Chichi The DJ. All Rights Reserved.
          </p>
           <p>
            <Link href="/login" className="hover:text-primary hover:underline transition-colors text-sm">
                Admin Login
            </Link>
           </p>
        </div>
      </div>
    </footer>
  );
}

    