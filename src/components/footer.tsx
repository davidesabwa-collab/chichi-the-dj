import Link from 'next/link';
import { Youtube, Instagram, Facebook } from 'lucide-react';
import Image from 'next/image';

const footerSections = {
  "Company": [
    { name: "About", href: "/#about" },
    { name: "Services", href: "/#services" },
    { name: "Gallery", href: "/#gallery" },
    { name: "FAQ", href: "/faq" },
  ],
  "Content": [
    { name: "Shop", href: "/shop" },
    { name: "Blog", href: "/blog" },
    { name: "Events", href: "/events" },
    { name: "Mixes", href: "/mixes" },
  ],
  "Connect": [
    { name: "Contact Us", href: "/#booking" },
    { name: "Book Now", href: "/#booking" },
    { name: "WhatsApp", href: "https://wa.me/13609953309" },
  ],
};

const socialLinks = [
    {
        name: "Facebook",
        href: "https://www.facebook.com/chichithedjofficial/",
        icon: ({ className }: { className?: string }) => <Facebook className={className} />,
    },
    {
        name: "Instagram",
        href: "https://www.instagram.com/chichithedjofficial/",
        icon: ({ className }: { className?: string }) => <Instagram className={className} />,
    },
    {
        name: "YouTube",
        href: "https://www.youtube.com/channel/UCrvISDSSEbE4XMWshYQncbQ",
        icon: ({ className }: { className?: string }) => <Youtube className={className} />,
    },
    {
        name: "TikTok",
        href: "https://www.tiktok.com/@chichithedj",
        icon: ({ className }: { className?: string }) => (
            <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.93a8.16 8.16 0 0 0 4.77 1.52V7.01a4.85 4.85 0 0 1-1-.32z" />
            </svg>
        ),
    },
    {
        name: "Mixcloud",
        href: "https://www.mixcloud.com/chichithedjofficial/",
        icon: ({ className }: { className?: string }) => (
            <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M11.57 2C6.29 2 2 6.29 2 11.57s4.29 9.57 9.57 9.57c1.97 0 3.8-.6 5.32-1.62l-1.42-1.42a7.52 7.52 0 0 1-3.9 1.09c-4.18 0-7.57-3.39-7.57-7.57s3.39-7.57 7.57-7.57c1.97 0 3.76.75 5.11 1.99l1.42-1.42A9.52 9.52 0 0 0 11.57 2zm9.57 9.57c0 .87-.11 1.71-.32 2.51l1.82 1.82c.38-1.35.59-2.78.36-2.51V11.57zm-4.29-.86a3.28 3.28 0 0 0-3.28 3.28 3.28 3.28 0 0 0 3.28 3.28 3.28 3.28 0 0 0 3.28-3.28 3.28 3.28 0 0 0-3.28-3.28zm0 4.86a1.57 1.57 0 0 1-1.57-1.57 1.57 1.57 0 0 1 1.57-1.57 1.57 1.57 0 0 1 1.57 1.57 1.57 1.57 0 0 1-1.57 1.57z" />
            </svg>
        ),
    },
    {
        name: "HearThis.at",
        href: "https://hearthis.at/chichi-the-dj/",
        icon: ({ className }: { className?: string }) => (
            <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" />
            </svg>
        ),
    },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="col-span-1 md:col-span-4">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/chichithedjlogo.png"
                alt="Chichi The DJ Logo"
                width={80}
                height={80}
                className="rounded-full"
              />
            </Link>
            <p className="max-w-xs text-sm">
              A good DJ is the key to your event's success. Chichi The DJ is a professional, experienced, and disciplined DJ based in Seattle, WA.
            </p>
            <div className="flex items-center gap-3 mt-6">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>

          <div className="col-span-1 md:col-span-8 grid grid-cols-3 gap-8">
            {Object.entries(footerSections).map(([title, links]) => (
              <div key={title}>
                <h5 className="font-bold text-white mb-4 uppercase tracking-wider">{title}</h5>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        target={link.href.startsWith('http') ? '_blank' : undefined}
                        rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="hover:text-primary hover:underline transition-colors text-sm"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
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
