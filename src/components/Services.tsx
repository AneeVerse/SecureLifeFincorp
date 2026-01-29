'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const services = [
    {
        number: "01",
        title: "Personal Financial Planning",
        slug: "personal-financial-planning",
        description: "Customized strategies to help individuals secure financial stability and meet life goals.",
        image: "/images/service/pexels-photo-4308045.jpeg",
    },
    {
        number: "02",
        title: "Business Financial Planning",
        slug: "business-financial-planning",
        description: "Helping business owners optimize cash-flow and navigate financial challenges.",
        image: "/images/service/pexels-photo-6476260.jpeg",
    },
    {
        number: "03",
        title: "Insurance Services",
        slug: "insurance-services",
        description: "Ensuring you and your business are protected against unforeseen risks.",
        image: "/images/service/pexels-photo-7567432.jpeg",
    },
    {
        number: "04",
        title: "Tax & Investment Options",
        slug: "tax-investment-options",
        description: "Diverse options tailored to your risk profile and financial goals.",
        image: "/images/service/pexels-photo-8297031.jpeg",
    },
];

export function Services() {
    return (
        <section id="our-solutions" className="w-full py-20 bg-white dark:bg-black transition-colors duration-300">
            <div className="max-w-[1250px] mx-auto px-5">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-2 border-b border-neutral-100 dark:border-white/10 pb-12">
                    <div className="space-y-4 max-w-3xl">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-[2px] bg-brand-green"></div>
                            <span className="text-black/50 dark:text-white/50 font-bold uppercase tracking-[0.2em] text-xs">
                                Our Solutions
                            </span>
                        </div>
                        <h2 className="text-3xl md:text-5xl lg:text-5xl font-bold leading-[1.1] text-black dark:text-white tracking-tight">
                            Comprehensive Financial Solutions for You & <span className="bg-brand-green px-2 rounded-lg inline-block text-black">Your Business</span>
                        </h2>
                    </div>
                    <div className="flex-shrink-0">
                        <button
                            onClick={() => window.scrollTo({ top: document.getElementById('our-solutions')?.offsetTop ? document.getElementById('our-solutions')!.offsetTop - 80 : 0, behavior: 'smooth' })}
                            className="bg-black text-white px-10 py-5 rounded-2xl font-bold text-sm uppercase tracking-widest hover:bg-brand-green hover:text-black transition-all duration-300 shadow-xl shadow-black/5 active:scale-95"
                        >
                            Our expertise
                        </button>
                    </div>
                </div>

                {/* Services Grid - Horizontal Scroll on Mobile, 4 Columns on Desktop */}
                <div className="flex lg:grid lg:grid-cols-4 gap-6 overflow-x-auto lg:overflow-x-visible pb-8 lg:pb-0 scrollbar-hide px-5 -mx-5 lg:px-0 lg:mx-0 snap-x snap-mandatory">
                    {services.map((service, index) => (
                        <div key={index}
                            onClick={() => window.dispatchEvent(new CustomEvent('open-contact'))}
                            className="group relative flex-shrink-0 w-[85vw] sm:w-[45vw] lg:w-auto h-[420px] rounded-[32px] overflow-hidden flex flex-col justify-end p-8 border border-neutral-100 dark:border-white/5 shadow-sm hover:shadow-2xl transition-all duration-500 snap-center cursor-pointer"
                        >
                            {/* Background Image */}
                            <Image
                                src={service.image}
                                alt={service.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />

                            {/* Dark Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/90 group-hover:via-black/40 group-hover:to-black/95 transition-all duration-500"></div>

                            {/* Content */}
                            <div className="relative z-10 space-y-4">
                                <span className="text-brand-green font-bold text-sm tracking-widest uppercase block translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
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
                                    <span className="text-brand-green text-xs font-bold uppercase tracking-widest">Read More</span>
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
