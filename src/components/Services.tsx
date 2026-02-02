'use client';

import Image from 'next/image';
import { ArrowRight, Flame, Shield, Cpu, Heart, User, DollarSign, Cog, Users, LucideIcon } from 'lucide-react';

interface ServiceItem {
    title: string;
    description: string;
    bestFor: string;
    image: string;
    icon: LucideIcon;
    tags: string[];
}

const services: ServiceItem[] = [
    {
        title: "Fire Insurance",
        description: "Protects business premises, inventory, and equipment against fire-related risks.",
        bestFor: "Offices, shops, factories, warehouses",
        image: "/images/service/fire.png",
        icon: Flame,
        tags: ["Property", "Business"],
    },
    {
        title: "Theft & Burglary Insurance",
        description: "Covers loss of stock, goods, and assets due to theft or break-ins.",
        bestFor: "Trading, retail, storage businesses",
        image: "/images/service/thef.png",
        icon: Shield,
        tags: ["Property", "Security"],
    },
    {
        title: "Cyber Insurance",
        description: "Covers financial and operational losses from data breaches, cyber incidents, and system downtime.",
        bestFor: "IT, services, digitally dependent businesses",
        image: "/images/service/cyber.png",
        icon: Cpu,
        tags: ["Digital", "Business"],
    },
    {
        title: "Health Insurance",
        description: "Group health coverage for employees to manage medical costs and meet compliance needs.",
        bestFor: "Businesses with growing teams",
        image: "/images/service/health.png",
        icon: Heart,
        tags: ["Employee", "Compliance"],
    },
    {
        title: "Personal Insurance",
        description: "Financial protection for business owners and key individuals.",
        bestFor: "Founders, partners, directors",
        image: "/images/service/personal.png",
        icon: User,
        tags: ["Personal", "Key Person"],
    },
    {
        title: "Financial & Liability Insurance",
        description: "Protection against third-party claims, professional risks, and legal exposure.",
        bestFor: "Client-facing and service businesses",
        image: "/images/service/financial.png",
        icon: DollarSign,
        tags: ["Liability", "Professional"],
    },
    {
        title: "Machinery Insurance",
        description: "Covers machinery and equipment against breakdown and operational damage.",
        bestFor: "Manufacturing and logistics units",
        image: "/images/service/machinary.png",
        icon: Cog,
        tags: ["Industrial", "Equipment"],
    },
    {
        title: "Employee Insurance",
        description: "Coverage for employee-related risks such as workplace accidents and liabilities.",
        bestFor: "Businesses with on-site staff",
        image: "/images/service/employe.png",
        icon: Users,
        tags: ["Workforce", "Compliance"],
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
