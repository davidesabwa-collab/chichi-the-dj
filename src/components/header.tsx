import { getSiteContent } from '@/lib/firebase/firestore';
import type { HeaderContent } from '@/types/site-content';
import HeaderClient from './header-client';

const defaultNavLinks = [
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Mixes", href: "/mixes" },
  { name: "Events", href: "/events" },
  { name: "Shop", href: "/shop" },
  { name: "Blog", href: "/blog" },
  { name: "Gallery", href: "/gallery" },
  { name: "FAQ", href: "/faq" },
];

export default async function Header() {
  const content = await getSiteContent<HeaderContent>('header');
  const navLinks = content?.navLinks?.length ? content.navLinks : defaultNavLinks;

  return <HeaderClient navLinks={navLinks} />;
}
