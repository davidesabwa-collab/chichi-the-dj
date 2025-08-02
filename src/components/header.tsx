'use client';
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LogIn, Menu } from "lucide-react";
import { Icons } from "@/components/icons";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Mixes", href: "#mixes" },
  { name: "Shop", href: "#shop" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Icons.logo className="h-8 w-8 text-primary" />
        </Link>
        <div className="flex items-center space-x-4">
            <Button variant="outline" className="hidden sm:flex">
                <LogIn className="mr-2 h-4 w-4" />
                Login
            </Button>
             <Sheet>
                <SheetTrigger asChild>
                    <Button variant="ghost" size="icon">
                        <Menu className="h-6 w-6" />
                        <span className="sr-only">Toggle Menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent>
                    <div className="flex flex-col pt-12">
                        {navLinks.map((link) => (
                            <Button key={link.name} variant="ghost" asChild className="justify-start text-lg py-6">
                                <Link
                                href={link.href}
                                >
                                {link.name}
                                </Link>
                            </Button>
                        ))}
                         <Button variant="outline" className="flex sm:hidden mt-4 text-lg py-6">
                            <LogIn className="mr-2 h-4 w-4" />
                            Login
                        </Button>
                    </div>
                </SheetContent>
            </Sheet>
        </div>
      </div>
    </header>
  );
}
