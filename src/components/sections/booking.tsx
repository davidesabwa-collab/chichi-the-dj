import { BookingForm } from "@/components/booking-form";
import { Mail, Phone } from "lucide-react";

export default function Booking() {
    return (
        <section id="booking" className="py-16 sm:py-24 bg-background">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-4xl sm:text-5xl font-black tracking-tighter text-primary text-glow">
                            Get In Touch!
                        </h2>
                        <p className="mt-4 text-lg text-foreground/80 max-w-xl">
                           We look forward to bringing life to your special event! Email or call to get your customized quote. Thank you for considering us.
                        </p>
                        <div className="mt-8 space-y-4">
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-secondary/10 rounded-md">
                                    <Phone className="h-6 w-6 text-secondary"/>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg">Phone</h3>
                                    <a href="tel:+13609953309" className="text-foreground/80 hover:text-secondary transition-colors">
                                        +1 (360) 995-3309
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-secondary/10 rounded-md">
                                    <Mail className="h-6 w-6 text-secondary"/>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg">Email</h3>
                                     <a href="mailto:hi@chichithedj.us" className="text-foreground/80 hover:text-secondary transition-colors">
                                        hi@chichithedj.us
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                       <BookingForm />
                    </div>
                </div>
            </div>
        </section>
    )
}
