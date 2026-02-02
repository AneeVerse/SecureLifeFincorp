"use client";

import Link from 'next/link';
import { useState } from 'react';

const expertiseItems = [
    {
        number: "01.",
        title: "Identifying Real Business Risks",
        description: "We understand how risk flows through your business and identify what actually needs protection.",
    },
    {
        number: "02.",
        title: "Structuring the Right Mix",
        description: "We help structure the right mix of coverage that fits your operations, not just generic packages.",
    },
    {
        number: "03.",
        title: "Coordinating Multiple Policies",
        description: "Coordinating multiple policies logically so there are no gaps or overlaps in your protection.",
    },
    {
        number: "04.",
        title: "Claims Support When It Matters",
        description: "Assisting during claims when support matters most — we're there when you need us.",
    },
];

export function Expertise() {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const offset = 80;
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section className="w-full py-24 bg-white dark:bg-[#0a0a0a] transition-colors duration-300">
            <div className="max-w-[1250px] mx-auto px-5 grid md:grid-cols-2 gap-16 items-start">
                {/* Left Side: Header */}
                <div className="space-y-8">
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-[2px] bg-brand-green"></div>
                            <span className="text-black/50 dark:text-white/50 font-bold uppercase tracking-[0.2em] text-xs">
                                Our Expertise
                            </span>
                        </div>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-black dark:text-white">
                            Understanding How Risk Flows <span className="bg-brand-green px-2 rounded-lg inline-block text-black">Through Your Business.</span>
                        </h2>
                        <p className="text-neutral-600 dark:text-neutral-400 text-lg leading-relaxed max-w-md">
                            This approach reduces confusion, gaps, and long-term cost — giving you practical protection that works.
                        </p>
                    </div>

                    <button
                        onClick={() => scrollToSection('our-solutions')}
                        className="bg-black text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-brand-green hover:text-black transition-all duration-300 transform hover:-translate-y-1"
                    >
                        View All Solutions
                    </button>
                </div>

                {/* Right Side: List Items */}
                <div className="divide-y divide-neutral-200 dark:divide-white/10">
                    {expertiseItems.map((item, index) => (
                        <div key={index} className="py-8 first:pt-0 last:pb-0 flex gap-6 group">
                            <span className="text-2xl font-bold text-neutral-300 dark:text-neutral-700 transition-colors duration-300 group-hover:text-brand-green">
                                {item.number}
                            </span>
                            <div className="space-y-3">
                                <h3 className="text-2xl md:text-3xl font-bold text-black dark:text-white transition-colors duration-300 group-hover:text-brand-green">
                                    {item.title}
                                </h3>
                                <p className="text-neutral-600 dark:text-neutral-400 text-lg leading-relaxed max-w-md">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
