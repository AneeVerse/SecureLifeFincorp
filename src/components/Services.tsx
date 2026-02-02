'use client';

import Image from 'next/image';
import { ArrowRight, Cpu, Flame, Scale, Heart, TrendingDown, Truck, Banknote, Ship, Package, LucideIcon } from 'lucide-react';

interface ServiceItem {
    title: string;
    subtitle: string;
    description: string;
    bestFor: string;
    image: string;
    icon: LucideIcon;
    tags: string[];
}

const services: ServiceItem[] = [
    {
        title: "Cyber Insurance",
        subtitle: "Digital Protection",
        description: "Covers losses from data breaches, hacking, ransomware attacks, legal liabilities and recovery costs.",
        bestFor: "Businesses with online presence, customer data, payments or digital services",
        image: "/images/service/cyber.png",
        icon: Cpu,
        tags: ["Digital", "Data Security"],
    },
    {
        title: "Property Insurance",
        subtitle: "Fire, Burglary & Allied Perils",
        description: "Covers damage to your business property, stock, equipment and contents due to fire, flood, earthquake, storms, riots, burglary and theft.",
        bestFor: "Retail shops, offices, warehouses, small factories",
        image: "/images/service/fire.png",
        icon: Flame,
        tags: ["Property", "Business"],
    },
    {
        title: "Liability Insurance",
        subtitle: "Third-Party Protection",
        description: "Protects against third-party claims including Public Liability, Product Liability, Professional E&O, and D&O Insurance.",
        bestFor: "Manufacturers, service businesses, consultants, IT firms",
        image: "/images/service/financial.png",
        icon: Scale,
        tags: ["Liability", "Legal"],
    },
    {
        title: "Group Health & Employee",
        subtitle: "Workforce Coverage",
        description: "Group Health Insurance for medical coverage and Workmen's Compensation for workplace injuries — legally required in many cases.",
        bestFor: "Businesses with teams and on-site staff",
        image: "/images/service/health.png",
        icon: Heart,
        tags: ["Employee", "Compliance"],
    },
    {
        title: "Business Interruption",
        subtitle: "Loss of Profit Insurance",
        description: "Covers loss of income if operations are disrupted due to fire, natural disasters or insured perils. Helps pay salaries, rent and ongoing costs.",
        bestFor: "All businesses dependent on continuous operations",
        image: "/images/service/personal.png",
        icon: TrendingDown,
        tags: ["Income", "Recovery"],
    },
    {
        title: "Commercial Vehicle",
        subtitle: "Fleet Insurance",
        description: "Covers damage, theft and third-party liabilities for business vehicles including delivery vans, cars and trucks — mandated by law.",
        bestFor: "Businesses with delivery or transport vehicles",
        image: "/images/service/machinary.png",
        icon: Truck,
        tags: ["Vehicle", "Transport"],
    },
    {
        title: "Money & Fidelity",
        subtitle: "Cash & Employee Trust",
        description: "Money Insurance covers loss of cash in transit or premises. Fidelity Guarantee protects against employee dishonesty or fraud.",
        bestFor: "Cash-handling businesses, retail, trading",
        image: "/images/service/thef.png",
        icon: Banknote,
        tags: ["Cash", "Security"],
    },
    {
        title: "Marine & Cargo",
        subtitle: "Transit Insurance",
        description: "Insures goods in transit against damage or loss for businesses that import, export or transport goods.",
        bestFor: "Import/export businesses, traders, manufacturers",
        image: "/images/service/employe.png",
        icon: Ship,
        tags: ["Transit", "Trade"],
    },
];

export function Services() {
    return (
        <section id="our-solutions" className="w-full py-24 bg-white dark:bg-black transition-colors duration-300">
            <div className="max-w-[1250px] mx-auto px-5">
                {/* Centered Header */}
                <div className="text-center mb-6">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.2] text-black dark:text-white tracking-tight">
                        Insurance Solutions for <span className="text-brand-green">Every Risk</span>
                    </h2>
                </div>
                <div className="text-center mb-14">
                    <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
                        Choose your coverage type below. Select one or more coverage types that apply to your business. Final recommendations are shared after reviewing your details.
                    </p>
                </div>

                {/* Simple 4x2 Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <div
                                key={index}
                                onClick={() => {
                                    // Convert title like "Fire Insurance" to "fire" to match serviceOptions
                                    const serviceKey = service.title.split(' ')[0].toLowerCase();
                                    window.dispatchEvent(new CustomEvent('open-contact', { detail: { service: serviceKey } }));
                                }}
                                className="group bg-gray-50 dark:bg-[#111] rounded-3xl overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-gray-100 dark:border-white/5 flex flex-col h-full"
                            >
                                {/* Image */}
                                <div className="relative h-[180px] overflow-hidden flex-shrink-0">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                                    {/* Title on Image */}
                                    <div className="absolute bottom-4 left-4 right-4">
                                        <div className="flex items-center gap-2 mb-1">
                                            <div className="w-8 h-8 rounded-lg bg-brand-green flex items-center justify-center">
                                                <Icon className="w-4 h-4 text-black" />
                                            </div>
                                        </div>
                                        <h3 className="text-xl font-bold text-white">{service.title}</h3>
                                        <p className="text-white/80 text-sm">{service.subtitle}</p>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-5 flex flex-col flex-grow">
                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2 mb-3 h-[28px]">
                                        {service.tags.map((tag, i) => (
                                            <span
                                                key={i}
                                                className="px-3 py-1 bg-black/5 dark:bg-white/10 text-gray-700 dark:text-gray-300 text-xs font-medium rounded-full"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Description - Fixed height */}
                                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-3 min-h-[60px]">
                                        {service.description}
                                    </p>

                                    {/* Best For - Fixed height */}
                                    <p className="text-brand-green text-xs font-semibold mb-4 min-h-[32px]">
                                        Best for: {service.bestFor}
                                    </p>

                                    {/* CTA Button - Always at bottom */}
                                    <button className="w-full bg-brand-green text-black font-bold py-3 rounded-xl text-sm flex items-center justify-center gap-2 hover:brightness-105 active:scale-[0.98] transition-all shadow-lg shadow-brand-green/20 mt-auto">
                                        Get Free Consultation
                                        <ArrowRight className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
