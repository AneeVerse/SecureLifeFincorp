'use client';

import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const services = [
    {
        number: "01",
        title: "Fire Insurance",
        slug: "fire-insurance",
        description: "Comprehensive protection for your assets against fire-related damages and losses.",
        image: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=2069&auto=format&fit=crop",
    },
    {
        number: "02",
        title: "Theft Insurance",
        slug: "theft-insurance",
        description: "Secure your valuable property and business inventory against burglary and theft.",
        image: "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=2070&auto=format&fit=crop",
    },
    {
        number: "03",
        title: "Cyber Insurance",
        slug: "cyber-insurance",
        description: "Cutting-edge protection against digital threats, data breaches, and cyber-attacks.",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
    },
    {
        number: "04",
        title: "Health Insurance",
        slug: "health-insurance",
        description: "Premium healthcare coverage ensuring access to the best medical facilities worldwide.",
        image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=2070&auto=format&fit=crop",
    },
    {
        number: "05",
        title: "Personal Insurance",
        slug: "personal-insurance",
        description: "Tailored life and accident coverage to safeguard your family's future.",
        image: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=2031&auto=format&fit=crop",
    },
    {
        number: "06",
        title: "Financial Insurance",
        slug: "financial-insurance",
        description: "Protection against credit risks, market fluctuations, and commercial liabilities.",
        image: "https://images.unsplash.com/photo-1560472355-536de3962603?q=80&w=2070&auto=format&fit=crop",
    },
    {
        number: "07",
        title: "Machinery Insurance",
        slug: "machinery-insurance",
        description: "Specialized coverage for industrial equipment and plant machinery breakdowns.",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
    },
    {
        number: "08",
        title: "Employee Insurance",
        slug: "employee-insurance",
        description: "Group health and worker's compensation plans to protect your workforce.",
        image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop",
    },
];

export function Services() {
    return (
        <section id="our-solutions" className="w-full py-24 bg-white dark:bg-black transition-colors duration-300">
            <div className="max-w-[1250px] mx-auto px-5">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16 border-b border-neutral-100 dark:border-white/10 pb-12">
                    <div className="space-y-4 max-w-2xl">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-[2px] bg-brand-green"></div>
                            <span className="text-black/50 dark:text-white/50 font-bold uppercase tracking-[0.2em] text-xs">
                                Our Solutions
                            </span>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-bold leading-[1.1] text-black dark:text-white tracking-tight">
                            Insurance Solutions for <span className="text-brand-green italic underline decoration-1 underline-offset-8">Every Risk</span>.
                        </h2>
                    </div>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <div key={index}
                            onClick={() => window.dispatchEvent(new CustomEvent('open-contact'))}
                            className="group relative h-[450px] rounded-[32px] overflow-hidden flex flex-col justify-end p-8 border border-neutral-100 dark:border-white/5 shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer"
                        >
                            {/* Background Image */}
                            <Image
                                src={service.image}
                                alt={service.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />

                            {/* Dark Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/90 group-hover:via-black/50 group-hover:to-black/95 transition-all duration-500"></div>

                            {/* Content */}
                            <div className="relative z-10 space-y-4">
                                <span className="text-brand-green font-black text-4xl opacity-10 group-hover:opacity-100 transition-all duration-500 absolute -top-20 right-0">
                                    {service.number}
                                </span>

                                <h3 className="text-2xl font-bold text-white transition-transform duration-500 group-hover:-translate-y-2">
                                    {service.title}
                                </h3>

                                <div className="overflow-hidden max-h-0 group-hover:max-h-32 transition-all duration-500 ease-in-out">
                                    <p className="text-white/70 text-sm leading-relaxed pb-4">
                                        {service.description}
                                    </p>
                                </div>

                                <div className="pt-2 flex justify-between items-center transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                    <span className="text-brand-green text-xs font-bold uppercase tracking-widest">Get Quote</span>
                                    <div className="w-10 h-10 rounded-full bg-brand-green flex items-center justify-center shadow-lg">
                                        <ArrowRight className="w-5 h-5 text-black" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
