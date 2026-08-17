import Link from 'next/link';
import Image from 'next/image';
import { getSiteContent } from '@/lib/firebase/firestore';
import { SocialIcon } from '@/lib/site-icons';
import type { FooterContent } from '@/types/site-content';

const defaultContent: FooterContent = {
  tagline: "A good DJ is the key to your event's success. Chichi The DJ is a professional, experienced, and disciplined DJ based in Seattle, WA.",
  sections: [
    {
      title: "Company",
      links: [
        { name: "About", href: "/#about" },
        { name: "Services", href: "/#services" },
        { name: "Gallery", href: "/#gallery" },
        { name: "FAQ", href: "/faq" },
      ],
    },
    {
      title: "Content",
      links: [
        { name: "Shop", href: "/shop" },
        { name: "Blog", href: "/blog" },
        { name: "Events", href: "/events" },
        { name: "Mixes", href: "/mixes" },
      ],
    },
    {
      title: "Connect",
      links: [
        { name: "Contact Us", href: "/#booking" },
        { name: "Book Now", href: "/#booking" },
        { name: "WhatsApp", href: "https://wa.me/13609953309" },
      ],
    },
  ],
  socialLinks: [
    { name: "Facebook", href: "https://www.facebook.com/chichithedjofficial/", icon: "Facebook" },
    { name: "Instagram", href: "https://www.instagram.com/chichithedjofficial/", icon: "Instagram" },
    { name: "YouTube", href: "https://www.youtube.com/channel/UCrvISDSSEbE4XMWshYQncbQ", icon: "YouTube" },
    { name: "TikTok", href: "https://www.tiktok.com/@chichithedj", icon: "TikTok" },
    { name: "Snapchat", href: "https://snapchat.com/t/KpqWfo23", icon: "Snapchat" },
    { name: "Mixcloud", href: "https://www.mixcloud.com/chichithedjofficial/", icon: "Mixcloud" },
    { name: "HearThis.at", href: "https://hearthis.at/chichi-the-dj/", icon: "HearThisAt" },
  ],
};

export default async function Footer() {
  const content = (await getSiteContent<FooterContent>('footer')) || defaultContent;
  const sections = content.sections?.length ? content.sections : defaultContent.sections;
  const socialLinks = content.socialLinks?.length ? content.socialLinks : defaultContent.socialLinks;
  const tagline = content.tagline || defaultContent.tagline;

  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="col-span-1 md:col-span-4">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/chichithedjlogo.jpg"
                alt="Chichi The DJ Logo"
                width={80}
                height={80}
                className="rounded-full"
              />
            </Link>
            <p className="max-w-xs text-sm">
              {tagline}
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
                  <SocialIcon name={social.icon} className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>

          <div className="col-span-1 md:col-span-8 grid grid-cols-3 gap-8">
            {sections.map((section) => (
              <div key={section.title}>
                <h5 className="font-bold text-white mb-4 uppercase tracking-wider">{section.title}</h5>
                <ul className="space-y-3">
                  {section.links.map((link) => (
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
