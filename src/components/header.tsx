'use client';
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LogIn, Menu, Search, ChevronDown } from "lucide-react";
import { Icons } from "@/components/icons";
import {
  Sheet,
  SheetContent,
  SheetClose,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Input } from "@/components/ui/input";

const navLinks = [
  { name: "Mixes", href: "#mixes" },
  { 
    name: "Music", 
    isAccordion: true,
    subLinks: [
      { name: "Remixes", href: "#" },
      { name: "Playlists", href: "#" },
    ]
  },
  { name: "Shop", href: "#shop" },
  { name: "Blogs", href: "#" },
  { name: "Events", href: "#" },
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
                <SheetContent className="w-full sm:w-[400px] bg-background p-0">
                    <div className="flex h-20 items-center justify-between px-6 border-b border-border">
                        <Link href="/" className="flex items-center gap-2">
                            <Icons.logo className="h-8 w-8 text-primary" />
                        </Link>
                        <div className="flex items-center gap-2">
                             <Button variant="outline" size="sm">
                                <LogIn className="mr-2 h-4 w-4" />
                                Log in
                            </Button>
                            <SheetClose asChild>
                                <Button variant="ghost" size="icon">
                                    <Icons.close className="h-6 w-6" />
                                    <span className="sr-only">Close</span>
                                </Button>
                            </SheetClose>
                        </div>
                    </div>
                    <div className="p-6">
                        <div className="flex flex-col space-y-2">
                            {navLinks.map((link) => (
                                link.isAccordion ? (
                                    <Accordion key={link.name} type="single" collapsible className="w-full -my-2">
                                        <AccordionItem value="music" className="border-b-0">
                                            <AccordionTrigger className="py-3 text-lg font-semibold text-primary hover:no-underline">
                                                <div className="flex items-center gap-2">
                                                    <span>{link.name}</span>
                                                    <ChevronDown className="h-5 w-5 transition-transform duration-200" />
                                                </div>
                                            </AccordionTrigger>
                                            <AccordionContent className="pb-2">
                                                <div className="flex flex-col space-y-2 pl-4 bg-secondary/30 rounded-lg py-2">
                                                    {link.subLinks?.map((subLink) => (
                                                        <Button key={subLink.name} variant="link" asChild className="justify-start text-base py-3 text-foreground/80 hover:text-primary">
                                                            <Link href={subLink.href}>{subLink.name}</Link>
                                                        </Button>
                                                    ))}
                                                </div>
                                            </AccordionContent>
                                        </AccordionItem>
                                    </Accordion>
                                ) : (
                                    <Button key={link.name} variant="ghost" asChild className="justify-start text-lg py-3">
                                        <Link href={link.href}>{link.name}</Link>
                                    </Button>
                                )
                            ))}
                        </div>
                        <div className="mt-8">
                             <div className="relative">
                                <Input placeholder="Search..." className="pr-10 h-12 text-base" />
                                <Button size="icon" variant="ghost" className="absolute right-1 top-1/2 -translate-y-1/2 h-9 w-9">
                                    <Search className="h-5 w-5" />
                                </Button>
                             </div>
                        </div>

                        <div className="mt-6 flex flex-col gap-4">
                            <Button size="lg" className="w-full text-base">Play Mixes</Button>
                            <Button size="lg" variant="outline" className="w-full text-base">Create Account</Button>
                        </div>
                    </div>
                </SheetContent>
            </Sheet>
        </div>
      </div>
    </header>
  );
}
