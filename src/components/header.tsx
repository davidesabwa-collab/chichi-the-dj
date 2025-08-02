'use client';
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Icons } from "@/components/icons";
import {
  Sheet,
  SheetContent,
  SheetClose,
  SheetTrigger,
} from "@/components/ui/sheet"

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#booking" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Icons.logo className="h-8 w-8 text-primary" />
          <span className="font-bold text-lg hidden sm:block">CHICHI THE DJ</span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
             <Link key={link.name} href={link.href} className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
                {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-2">
            <Button asChild>
                <Link href="#booking">Free Consultation</Link>
            </Button>
             <Sheet>
                <SheetTrigger asChild>
                    <Button variant="ghost" size="icon" className="md:hidden">
                        <Menu className="h-6 w-6" />
                        <span className="sr-only">Toggle Menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent className="w-full sm:w-[320px] bg-background p-0">
                    <div className="flex h-20 items-center justify-between px-6 border-b border-border">
                        <Link href="/" className="flex items-center gap-2">
                            <Icons.logo className="h-8 w-8 text-primary" />
                             <span className="font-bold text-lg">CHICHI THE DJ</span>
                        </Link>
                        <SheetClose asChild>
                            <Button variant="ghost" size="icon">
                                <Icons.close className="h-6 w-6" />
                                <span className="sr-only">Close</span>
                            </Button>
                        </SheetClose>
                    </div>
                    <div className="p-6">
                        <div className="flex flex-col space-y-2">
                           {navLinks.map((link) => (
                                <SheetClose asChild key={link.name}>
                                    <Link href={link.href} className="text-lg py-2 font-semibold text-foreground/80 hover:text-primary transition-colors">
                                        {link.name}
                                    </Link>
                                </SheetClose>
                            ))}
                        </div>
                         <div className="mt-8">
                            <SheetClose asChild>
                                <Button asChild className="w-full" size="lg">
                                    <Link href="#booking">Free Consultation</Link>
                                </Button>
                            </SheetClose>
                        </div>
                    </div>
                </SheetContent>
            </Sheet>
        </div>
      </div>
    </header>
  );
}
