import { BookingForm } from "@/components/booking-form";
import { getEvents, getSiteContent } from "@/lib/firebase/firestore";
import { Mail, Phone, MapPin, MessageCircle, Info } from 'lucide-react';
import Link from "next/link";
import type { ContactInfoContent } from '@/types/site-content';

const defaultContact: ContactInfoContent = {
  address: 'Seattle, WA',
  phone: '+1 (360) 995-3309',
  emails: ['actualizeevents@gmail.com', 'hi@chichithedj.us'],
  whatsappNumber: 'https://wa.me/13609953309',
  whatsappCatalogUrl: 'https://wa.me/c/13609953309',
  digitalCardUrl: 'https://hihello.com/p/8c4fc279-227c-43b6-a2d4-919b387b0614',
  digitalCardQrUrl: '/chichi-contact-qr.jpg',
  bookingPolicyText: 'Reservations are first come, first served upon making a down payment. Your date is not secured until a deposit is received.',
};

export default async function Booking() {
  const [events, contact] = await Promise.all([
    getEvents(),
    getSiteContent<ContactInfoContent>('contact-info'),
  ]);
  const info = contact || defaultContact;

  return (
    <section id="booking" className="py-16 sm:py-24 bg-gray-900/50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white uppercase tracking-wider">Get In Touch!</h2>
            <p className="mt-4 text-lg text-gray-400">
              We look forward to bringing life to your special event! Email or call to get your customized quote. Thank you for considering us.
            </p>

            <div className="mt-8 space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Address</h3>
                  <p className="text-gray-400">{info.address || defaultContact.address}</p>
                  <p className="text-gray-400">Online booking available</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Phone</h3>
                  <a
                    href={`tel:+${(info.phone || defaultContact.phone).replace(/\D/g, '')}`}
                    className="text-gray-400 hover:text-primary transition-colors"
                  >
                    {info.phone || defaultContact.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Email</h3>
                  {(info.emails?.length ? info.emails : defaultContact.emails).map((email) => (
                    <a key={email} href={`mailto:${email}`} className="block text-gray-400 hover:text-primary transition-colors">
                      {email}
                    </a>
                  ))}
                </div>
              </div>

              {/* WhatsApp button */}
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <MessageCircle className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">WhatsApp</h3>
                  <Link
                    href={info.whatsappNumber || defaultContact.whatsappNumber}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-1 px-4 py-2 rounded-full bg-green-600 text-white text-sm font-semibold hover:bg-green-500 transition-colors"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Chat on WhatsApp
                  </Link>
                </div>
              </div>
            </div>

            {/* Booking policy note */}
            <div className="mt-8 flex items-start gap-3 bg-primary/5 border border-primary/20 rounded-lg p-4">
              <Info className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <p className="text-sm text-gray-400">
                <span className="text-white font-semibold">Booking Policy:</span> {info.bookingPolicyText || defaultContact.bookingPolicyText}
              </p>
            </div>
          </div>

          <div className="bg-gray-900 p-8 rounded-lg shadow-lg">
            <h3 className="text-3xl font-bold text-white mb-6">Request a Quote</h3>
            <BookingForm events={events} />
          </div>
        </div>
      </div>
    </section>
  );
}
