import Link from "next/link";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Music", href: "#music" },
  { name: "Events", href: "#events" },
  { name: "Gallery", href: "#gallery" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-primary hover:text-primary/90 transition-colors">
          Chichi The DJ
        </Link>
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="transition-colors hover:text-primary"
            >
              {link.name}
            </Link>
          ))}
        </nav>
        <div className="flex items-center space-x-4">
            <Button asChild>
                <Link href="#bookings">Book Chichi</Link>
            </Button>
        </div>
      </div>
    </header>
  );
}
