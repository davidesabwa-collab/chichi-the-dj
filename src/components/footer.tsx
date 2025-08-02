import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Mail, MapPin, Phone, Twitter, Instagram, Youtube } from 'lucide-react';
import { Icons } from './icons';

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#booking" },
];

const socialLinks = [
    { name: "Twitter", href: "#", icon: Twitter },
    { name: "Instagram", href: "#", icon: Instagram },
    { name: "YouTube", href: "#", icon: Youtube },
]

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border/50 text-foreground/70">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & About */}
          <div className="md:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Icons.logo className="h-10 w-10 text-primary" />
              <span className="text-xl font-bold text-foreground">CHICHI THE DJ</span>
            </Link>
            <p className="text-sm max-w-xs">
              The party starts here! Experienced, disciplined, and hardworking DJ for your event.
            </p>
             <div className="flex space-x-4 mt-6">
                {socialLinks.map((social) => (
                    <Link key={social.name} href={social.href} className="text-foreground/70 hover:text-primary transition-colors">
                        <social.icon className="h-6 w-6" />
                        <span className="sr-only">{social.name}</span>
                    </Link>
                ))}
             </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4 text-lg">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-foreground mb-4 text-lg">Get In Touch</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                <span>Seattle, WA</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                <a href="tel:+13609953309" className="hover:text-primary transition-colors">+1 (360) 995-3309</a>
              </li>
               <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                <div className="flex flex-col">
                    <a href="mailto:hi@chichithedj.us" className="hover:text-primary transition-colors">hi@chichithedj.us</a>
                    <a href="mailto:actualizeevents@gmail.com" className="hover:text-primary transition-colors">actualizeevents@gmail.com</a>
                </div>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
             <h3 className="font-semibold text-foreground mb-4 text-lg">Business Hours</h3>
             <div className="space-y-2 text-sm">
                <p>Mon – Friday: 9am – 9pm</p>
                <p>Sat, Sun: 10am – 10pm</p>
             </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border/50 flex flex-col sm:flex-row justify-between items-center text-sm">
          <p>&copy; {new Date().getFullYear()} Chichi The DJ. All Rights Reserved.</p>
          <div className="flex gap-4 mt-4 sm:mt-0">
             <Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link>
             <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
