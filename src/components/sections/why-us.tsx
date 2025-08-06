import { Award, ShieldCheck, Sparkles, Users } from "lucide-react";

const whyUsItems = [
    {
        icon: Award,
        title: "Quality",
        description: "Chichi the DJ’s talent has a universal approach to music, rock solid turntable skills, polished MC styles, and non-stop passion for his craft."
    },
    {
        icon: ShieldCheck,
        title: "Integrity",
        description: "Chichi The DJ’s experience, discipline, and hard work takes all events beyond client’s expectation. Our number one priority is to ensure that our customers get the entertainment they want are happy."
    },
    {
        icon: Sparkles,
        title: "Contemporary",
        description: "Besides vast experience in event organizing, hospitality, DJ’ing, and music knowledge, Chichi The DJ is a recent graduate with an associate degree in Business Management & Cybersecurity."
    },
    {
        icon: Users,
        title: "Experience",
        description: "Jump on the floor and dance! Chichi The DJ is always fully dedicated to making your party the talk of the town! We just can’t wait to make the magic happen at your party!"
    }
];

export default function WhyUs() {
    return (
        <section id="why-us" className="py-16 sm:py-24 bg-black text-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-wider">Why Chichi The DJ?</h2>
                    <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto">It’s all about that beat! The party starts here!</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {whyUsItems.map((item, index) => (
                        <div key={index} className="text-center p-6 border border-gray-800 rounded-lg hover:bg-gray-900/50 hover:border-primary/30 transition-all duration-300">
                           <div className="flex justify-center mb-4">
                             <div className="bg-primary/10 p-4 rounded-full">
                                <item.icon className="h-8 w-8 text-primary" />
                             </div>
                           </div>
                            <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                            <p className="text-gray-400">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
