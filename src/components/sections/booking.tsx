import { BookingForm } from "@/components/booking-form";
import { getEvents } from "@/lib/firebase/firestore";
import { Mail, Phone, MapPin } from 'lucide-react';

export default async function Booking() {
  const events = await getEvents();

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
                            <p className="text-gray-400">Seattle, WA</p>
                            <p className="text-gray-400">Online booking</p>
                        </div>
                    </div>
                     <div className="flex items-start gap-4">
                        <div className="bg-primary/10 p-3 rounded-full">
                           <Phone className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-white">Phone</h3>
                            <p className="text-gray-400">+1(360)9953309</p>
                        </div>
                    </div>
                     <div className="flex items-start gap-4">
                        <div className="bg-primary/10 p-3 rounded-full">
                           <Mail className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-white">Email</h3>
                            <p className="text-gray-400">actualizeevents@gmail.com</p>
                            <p className="text-gray-400">hi@chichithedj.us</p>
                        </div>
                    </div>
                </div>
            </div>
          <div className="bg-gray-900 p-8 rounded-lg shadow-lg">
            <h3 className="text-3xl font-bold text-white mb-6">Request a Quote</h3>
            <BookingForm events={events}/>
          </div>
        </div>
      </div>
    </section>
  );
}
