import { BookingForm } from '@/components/booking-form';
import { CheckCircle } from 'lucide-react';

const services = [
  'Club Nights',
  'Corporate Events',
  'Private Parties',
  'Weddings',
  'International Gigs',
];

export default function Services() {
  return (
    <section id="bookings" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold uppercase tracking-tighter">
              Book <span className="text-primary">Chichi</span>
            </h2>
            <p className="mt-4 text-lg text-foreground/80">
              Ready to bring electrifying energy to your event? Fill out the form to secure your date.
            </p>
            <ul className="mt-8 space-y-4">
              {services.map((service) => (
                <li key={service} className="flex items-center text-xl">
                  <CheckCircle className="h-6 w-6 text-accent mr-3" />
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-card p-8 rounded-lg border border-primary/30 shadow-2xl shadow-primary/20">
            <h3 className="text-2xl font-bold mb-6 text-center">Booking Inquiry</h3>
            <BookingForm />
          </div>
        </div>
      </div>
    </section>
  );
}
