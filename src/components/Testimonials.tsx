import Image from 'next/image';
import { Twitter } from 'lucide-react';

const testimonials = [
    {
        name: "Priya Sharma",
        handle: "@priyasharma",
        image: "https://images.unsplash.com/photo-1611432579699-484f7990b127?q=80&w=150&h=150&auto=format&fit=crop",
        text: "SecureLife Fincorp transformed my financial outlook. Their expertise in personal planning is unmatched and highly recommended."
    },
    {
        name: "Rajesh Patel",
        handle: "@rajeshpatel",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=150&h=150&auto=format&fit=crop",
        text: "Managing business finances became seamless with their guidance. A true partner in growth and sustainable success."
    },
    {
        name: "Ananya Gupta",
        handle: "@ananyagupta",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=150&h=150&auto=format&fit=crop",
        text: "Excellent insurance services that gave me real peace of mind. They really care about protecting what matters most."
    },
    {
        name: "Vikram Singh",
        handle: "@vikramsingh",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&h=150&auto=format&fit=crop",
        text: "Professional, knowledgeable, and always available. SecureLife is the only company I trust with my investment portfolio."
    },
    {
        name: "Arun Mehta",
        handle: "@arunmehta",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&h=150&auto=format&fit=crop",
        text: "The team at SecureLife helped us navigate complex tax situations with ease. Their insights are invaluable for any business."
    },
    {
        name: "Neha Kapoor",
        handle: "@nehakapoor",
        image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?q=80&w=150&h=150&auto=format&fit=crop",
        text: "I finally feel in control of my financial future. Their customized strategies are practical and easy to follow."
    },
    {
        name: "Rohan Deshmukh",
        handle: "@rohandeshmukh",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=150&h=150&auto=format&fit=crop",
        text: "Their transition from planning to execution is flawless. A dedicated team that delivers on its promises."
    },
    {
        name: "Kavita Reddy",
        handle: "@kavitareddy",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=150&h=150&auto=format&fit=crop",
        text: "Highly impressed by the depth of their market analysis. They empower you to make informed decisions for long-term wealth."
    }
];

export function Testimonials() {
    const row1 = [...testimonials, ...testimonials];
    const row2 = [...[...testimonials].reverse(), ...[...testimonials].reverse()];

    return (
        <section className="w-full py-24 bg-neutral-50 dark:bg-[#0a0a0a] overflow-hidden transition-colors duration-300">
            <div className="max-w-[1250px] mx-auto px-5 mb-16 text-center space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white">
                    Don't take our word for it, <span className="bg-brand-green px-3 rounded-lg text-black">take theirs.</span>
                </h2>
                <p className="text-neutral-500 max-w-2xl mx-auto">
                    Join thousands of satisfied clients who have secured their financial future with SecureLife Fincorp.
                </p>
            </div>

            <div className="flex flex-col gap-8">
                {/* Row 1: Left Scroll */}
                <div className="relative flex overflow-x-auto lg:overflow-hidden group scrollbar-hide snap-x snap-mandatory">
                    <div className="flex gap-4 md:gap-8 animate-marquee-left min-w-full px-5 lg:px-0">
                        {row1.map((item, i) => (
                            <TestimonialCard key={i} item={item} />
                        ))}
                    </div>
                </div>

                {/* Row 2: Right Scroll */}
                <div className="relative flex overflow-x-auto lg:overflow-hidden group scrollbar-hide snap-x snap-mandatory">
                    <div className="flex gap-4 md:gap-8 animate-marquee-right min-w-full px-5 lg:px-0">
                        {row2.map((item, i) => (
                            <TestimonialCard key={i} item={item} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

function TestimonialCard({ item }: { item: typeof testimonials[0] }) {
    return (
        <div className="flex-shrink-0 w-[300px] md:w-[400px] bg-white dark:bg-black p-6 md:p-8 rounded-[24px] md:rounded-[32px] border border-neutral-100 dark:border-white/5 shadow-sm hover:shadow-md transition-all snap-center">
            <div className="flex justify-between items-start mb-6">
                <div className="flex gap-4">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden">
                        <Image src={item.image} alt={item.name} fill className="object-cover" />
                    </div>
                    <div>
                        <h4 className="font-bold text-black dark:text-white">{item.name}</h4>
                        <p className="text-sm text-neutral-400">{item.handle}</p>
                    </div>
                </div>
                <Twitter className="w-5 h-5 text-brand-green" />
            </div>
            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed whitespace-normal">
                {item.text}
            </p>
        </div>
    );
}
