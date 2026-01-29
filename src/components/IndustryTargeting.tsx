'use client';

import { Factory, Stethoscope, Truck, Briefcase, ArrowRight } from 'lucide-react';

const industries = [
    {
        title: 'Manufacturing & Trading',
        description: 'Protect equipment, inventory, and production lines with comprehensive fire, machinery breakdown, and business interruption cover.',
        icon: Factory,
        risks: ['Equipment Damage', 'Fire & Explosion', 'Stock Loss'],
    },
    {
        title: 'Healthcare & Pharma',
        description: 'Specialized coverage for medical facilities, pharmaceutical businesses, and healthcare professionals against liability and compliance risks.',
        icon: Stethoscope,
        risks: ['Professional Liability', 'Compliance Risk', 'Equipment Cover'],
    },
    {
        title: 'Logistics & Warehousing',
        description: 'Cargo insurance, warehouse protection, and fleet coverage to keep your supply chain secure and operations running smoothly.',
        icon: Truck,
        risks: ['Cargo Damage', 'Theft Protection', 'Fleet Insurance'],
    },
    {
        title: 'Professional Services',
        description: 'E&O insurance, cyber liability, and professional indemnity for CAs, lawyers, IT consultants, and service businesses.',
        icon: Briefcase,
        risks: ['Cyber Attacks', 'Data Breach', 'Professional Errors'],
    },
];

export function IndustryTargeting() {
    return (
        <section className="w-full py-24 bg-gray-50 dark:bg-[#0a0a0a] transition-colors">
            <div className="max-w-[1250px] mx-auto px-5">
                {/* Header */}
                <div className="text-center mb-14">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black dark:text-white tracking-tight">
                        Tailored Coverage for <span className="text-brand-green">Your Industry</span>
                    </h2>
                    <p className="text-gray-500 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
                        We understand the unique risks facing MSMEs in Mumbai & Navi Mumbai. Get industry-specific protection.
                    </p>
                </div>

                {/* Industry Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {industries.map((industry, index) => {
                        const Icon = industry.icon;
                        return (
                            <div
                                key={index}
                                onClick={() => window.dispatchEvent(new CustomEvent('open-contact'))}
                                className="group bg-white dark:bg-[#111] rounded-3xl p-8 border border-gray-100 dark:border-white/5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                            >
                                <div className="flex items-start gap-5">
                                    <div className="w-14 h-14 rounded-2xl bg-brand-green/10 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-green group-hover:scale-110 transition-all duration-300">
                                        <Icon className="w-7 h-7 text-brand-green group-hover:text-black transition-colors" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-black dark:text-white mb-2 group-hover:text-brand-green transition-colors">
                                            {industry.title}
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
                                            {industry.description}
                                        </p>
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {industry.risks.map((risk, i) => (
                                                <span key={i} className="px-3 py-1 bg-black/5 dark:bg-white/10 text-gray-700 dark:text-gray-300 text-xs font-medium rounded-full">
                                                    {risk}
                                                </span>
                                            ))}
                                        </div>
                                        <div className="flex items-center gap-2 text-brand-green text-sm font-semibold opacity-0 translate-x-[-10px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                                            Get Industry Quote <ArrowRight className="w-4 h-4" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
