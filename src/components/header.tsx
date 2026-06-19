'use client';
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetClose,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import Image from "next/image";

const navLinks = [
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Mixes", href: "/mixes" },
  { name: "Events", href: "/events" },
  { name: "Shop", href: "/shop" },
  { name: "Blog", href: "/blog" },
  { name: "Gallery", href: "/gallery" },
  { name: "FAQ", href: "/faq" },
];

export default function Header() {
  return (
    <header className="fixed top-0 z-50 w-full bg-black/80 backdrop-blur-sm text-white border-b border-gray-800">
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image 
            src="/chichithedjlogo.png" 
            alt="Chichi The DJ Logo"
            width={48} 
            height={48}
            className="rounded-full"
          />
        </Link>
        
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => 
             <Link key={link.name} href={link.href} className="text-sm font-medium text-gray-300 hover:text-primary transition-colors uppercase tracking-wider">
                {link.name}
            </Link>
          )}
        </nav>

        <div className="flex items-center gap-4">
             <Button asChild variant="default" size="sm" className="hidden lg:inline-flex rounded-full uppercase tracking-widest font-bold">
                <Link href="/contact">
                  Book Now
                </Link>
            </Button>
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="ghost" size="icon" className="lg:hidden text-white">
                        <Menu className="h-6 w-6" />
                        <span className="sr-only">Toggle Menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent className="w-full sm:w-[320px] bg-black text-white p-0 border-l border-gray-800">
                    <SheetHeader className="p-6">
                      <SheetTitle>
                        <VisuallyHidden>Mobile Navigation Menu</VisuallyHidden>
                      </SheetTitle>
                    </SheetHeader>
                    <div className="p-6 flex flex-col h-full pt-0">
                        <div className="flex flex-col space-y-4 flex-grow">
                           {navLinks.map((link) => 
                              <SheetClose asChild key={link.name}>
                                  <Link href={link.href} className="text-2xl py-2 font-semibold text-gray-300 hover:text-primary transition-colors">
                                      {link.name}
                                  </Link>
                              </SheetClose>
                            )}
                        </div>
                         <div className="mt-8">
                            <Button asChild variant="default" size="lg" className="w-full rounded-md uppercase tracking-widest font-bold">
                               <Link href="/contact">
                                 Book Now
                               </Link>
                            </Button>
                        </div>
                    </div>
                </SheetContent>
            </Sheet>
        </div>
      </div>
    </header>
  );
}
