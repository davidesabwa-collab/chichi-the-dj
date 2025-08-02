import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Award, ShieldCheck, Briefcase, Star } from "lucide-react";

const benefits = [
    {
        icon: Award,
        title: "Quality",
        description: "Universal approach to music, rock solid turntable skills, polished MC styles, and non-stop passion for the craft."
    },
    {
        icon: ShieldCheck,
        title: "Integrity",
        description: "Experience, discipline, and hard work take all events beyond client’s expectation. Our priority is customer happiness."
    },
    {
        icon: Briefcase,
        title: "Contemporary",
        description: "A recent graduate in Business Management & Cybersecurity, bringing a professional understanding to every event."
    },
    {
        icon: Star,
        title: "Experience",
        description: "Fully dedicated to making your party the talk of the town! We can't wait to make the magic happen at your party!"
    }
];

export default function WhyUs() {
    return (
        <section id="why-us" className="py-16 sm:py-24 bg-background border-y border-border/50">
            <div className="container mx-auto px-4">
                 <div className="text-center mb-12">
                    <h2 className="text-4xl sm:text-5xl font-black tracking-tighter">
                        Why Chichi The DJ?
                    </h2>
                    <p className="mt-2 text-lg max-w-2xl mx-auto text-foreground/70">
                        We don't just play music. We create experiences.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {benefits.map((benefit, index) => (
                        <Card key={index} className="bg-card border-border/50 text-center p-6 flex flex-col items-center">
                            <div className="p-4 bg-primary/10 rounded-full mb-4">
                                <benefit.icon className="h-10 w-10 text-primary"/>
                            </div>
                            <CardHeader className="p-0">
                                <CardTitle className="text-2xl font-bold">{benefit.title}</CardTitle>
                            </CardHeader>
                            <CardDescription className="mt-2 text-base text-foreground/80">
                                {benefit.description}
                            </CardDescription>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
