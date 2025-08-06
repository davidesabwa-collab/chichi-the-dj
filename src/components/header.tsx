'use client';
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, Search, User } from "lucide-react";
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
    isDropdown: true,
    subLinks: [
      { name: "Remixes", href: "#" },
      { name: "Playlists", href: "#" },
    ]
  },
  { name: "Shop", href: "#shop" },
  { name: "Blogs", href: "#" },
  { name: "Events", href: "#events" },
];

export default function Header() {
  return (
    <header className="fixed top-0 z-50 w-full bg-gradient-to-b from-black to-[#1a1a1a] text-white">
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Icons.logo className="h-10 w-10 text-primary" />
        </Link>
        
        <nav className="hidden lg:flex items-center space-x-6">
          {navLinks.map((link) => 
            link.isDropdown ? (
              <div key={link.name} className="relative group">
                <button className="text-sm font-medium text-gray-300 hover:text-white transition-colors flex items-center gap-1">
                  {link.name}
                </button>
                <div className="absolute top-full left-0 mt-2 w-48 bg-gray-900 border border-gray-800 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 invisible group-hover:visible">
                  {link.subLinks?.map(subLink => (
                    <Link key={subLink.name} href={subLink.href} className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-white">
                      {subLink.name}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
             <Link key={link.name} href={link.href} className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
                {link.name}
            </Link>
            )
          )}
           <form className="relative">
            <Input
              type="search"
              placeholder="Search..."
              className="bg-background h-9 rounded-md pl-4 pr-10 text-sm border-gray-700 focus:ring-primary focus:border-primary"
            />
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          </form>
        </nav>

        <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="hidden lg:inline-flex rounded-md border-gray-600 hover:bg-white hover:text-black">
                <User className="mr-2 h-4 w-4" />
                Log in
            </Button>
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="ghost" size="icon" className="lg:hidden text-white">
                        <Menu className="h-6 w-6" />
                        <span className="sr-only">Toggle Menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent className="w-full sm:w-[320px] bg-black text-white p-0 border-gray-800">
                    <div className="p-6">
                        <div className="relative mb-6">
                            <Input
                            type="search"
                            placeholder="Search..."
                            className="bg-gray-900 h-10 rounded-md pl-4 pr-10 text-sm border-gray-700"
                            />
                            <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                        </div>
                        <div className="flex flex-col space-y-1">
                           {navLinks.map((link) => 
                            link.isDropdown ? (
                                <Accordion type="single" collapsible key={link.name} className="w-full">
                                    <AccordionItem value="item-1" className="border-b-0">
                                        <AccordionTrigger className="py-3 text-lg font-semibold text-gray-300 hover:text-white transition-colors hover:no-underline">
                                            {link.name}
                                        </AccordionTrigger>
                                        <AccordionContent className="pb-1 pl-4">
                                            {link.subLinks?.map(subLink => (
                                                <SheetClose asChild key={subLink.name}>
                                                    <Link href={subLink.href} className="block text-md py-2 text-gray-400 hover:text-white transition-colors">
                                                        {subLink.name}
                                                    </Link>
                                                </SheetClose>
                                            ))}
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            ) : (
                                <SheetClose asChild key={link.name}>
                                    <Link href={link.href} className="text-lg py-3 font-semibold text-gray-300 hover:text-white transition-colors">
                                        {link.name}
                                    </Link>
                                </SheetClose>
                            ))}
                        </div>
                         <div className="mt-8">
                            <Button variant="outline" size="lg" className="w-full rounded-md border-gray-600 hover:bg-white hover:text-black">
                                <User className="mr-2 h-4 w-4" />
                                Log in
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
