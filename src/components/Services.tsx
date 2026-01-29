'use client';

import Image from 'next/image';
import { ArrowRight, Flame, Shield, Cpu, Heart, User, DollarSign, Cog, Users, LucideIcon } from 'lucide-react';

interface ServiceItem {
    title: string;
    description: string;
    image: string;
    icon: LucideIcon;
    tags: string[];
}

const services: ServiceItem[] = [
    {
        title: "Fire Insurance",
        description: "Comprehensive protection for your assets against fire-related damages and losses.",
        image: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=2069&auto=format&fit=crop",
        icon: Flame,
        tags: ["Property", "Business"],
    },
    {
        title: "Theft Insurance",
        description: "Secure your valuable property and business inventory against burglary and theft.",
        image: "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=2070&auto=format&fit=crop",
        icon: Shield,
        tags: ["Property", "Personal"],
    },
    {
        title: "Cyber Insurance",
        description: "Cutting-edge protection against digital threats, data breaches, and cyber-attacks.",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
        icon: Cpu,
        tags: ["Business", "Digital"],
    },
    {
        title: "Health Insurance",
        description: "Premium healthcare coverage ensuring access to the best medical facilities.",
        image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=2070&auto=format&fit=crop",
        icon: Heart,
        tags: ["Personal", "Family"],
    },
    {
        title: "Personal Insurance",
        description: "Tailored life and accident coverage to safeguard your family's future.",
        image: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=2031&auto=format&fit=crop",
        icon: User,
        tags: ["Life", "Family"],
    },
    {
        title: "Financial Insurance",
        description: "Protection against credit risks, market fluctuations, and commercial liabilities.",
        image: "https://images.unsplash.com/photo-1560472355-536de3962603?q=80&w=2070&auto=format&fit=crop",
        icon: DollarSign,
        tags: ["Business", "Investment"],
    },
    {
        title: "Machinery Insurance",
        description: "Specialized coverage for industrial equipment and plant machinery breakdowns.",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
        icon: Cog,
        tags: ["Industrial", "Business"],
    },
    {
        title: "Employee Insurance",
        description: "Group health and worker's compensation plans to protect your workforce.",
        image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop",
        icon: Users,
        tags: ["Business", "Group"],
    },
];

export function Services() {
    return (
        <section id="our-solutions" className="w-full py-24 bg-white dark:bg-black transition-colors duration-300">
            <div className="max-w-[1250px] mx-auto px-5">
                {/* Centered Header */}
                <div className="text-center mb-14">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.2] text-black dark:text-white tracking-tight">
                        Insurance Solutions for <span className="text-brand-green">Every Risk</span> — Choose your coverage type below.
                    </h2>
                </div>

                {/* Simple 4x2 Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <div
                                key={index}
                                onClick={() => window.dispatchEvent(new CustomEvent('open-contact'))}
                                className="group bg-gray-50 dark:bg-[#111] rounded-3xl overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-gray-100 dark:border-white/5"
                            >
                                {/* Image */}
                                <div className="relative h-[180px] overflow-hidden">
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
                                <div className="p-5">
                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {service.tags.map((tag, i) => (
                                            <span
                                                key={i}
                                                className="px-3 py-1 bg-black/5 dark:bg-white/10 text-gray-700 dark:text-gray-300 text-xs font-medium rounded-full"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Description */}
                                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed line-clamp-2 mb-5">
                                        {service.description}
                                    </p>

                                    {/* CTA Button */}
                                    <button className="w-full bg-brand-green text-black font-bold py-3 rounded-xl text-sm flex items-center justify-center gap-2 hover:brightness-105 active:scale-[0.98] transition-all shadow-lg shadow-brand-green/20">
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
