'use client';

import Image from 'next/image';
import { Check, Clock, Users, FileCheck, Headphones, MapPin, UserCheck, Phone } from 'lucide-react';

const benefits = [
    {
        icon: FileCheck,
        title: 'Business-First Approach',
        description: 'We focus on understanding your business first, not pushing products.',
    },
    {
        icon: Check,
        title: 'Clear Explanation',
        description: 'Clear explanation before any decision. No confusing jargon.',
    },
    {
        icon: Phone,
        title: 'No Pushy Sales Calls',
        description: 'We respect your time and decision-making process.',
    },
    {
        icon: Headphones,
        title: 'Support Beyond Policy',
        description: 'Support beyond policy issuance — we\'re there when you need us.',
    },
    {
        icon: Users,
        title: 'Multi-Sector Experience',
        description: 'Experience across multiple business sectors and industries.',
    },
    {
        icon: UserCheck,
        title: 'Decide Correctly',
        description: 'Our role is to help you decide correctly — not quickly.',
    },
];

export function WhySecureLife() {
    return (
        <section className="w-full py-24 bg-white dark:bg-black transition-colors">
            <div className="max-w-[1250px] mx-auto px-5">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left - Image */}
                    <div className="relative order-2 lg:order-1">
                        <div className="relative aspect-square max-w-[500px] mx-auto">
                            <Image
                                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2032&auto=format&fit=crop"
                                alt="Business Protection"
                                fill
                                className="object-cover rounded-3xl"
                            />
                            {/* Floating Badge */}
                            <div className="absolute -bottom-6 -right-6 bg-brand-green text-black p-6 rounded-2xl shadow-xl">
                                <div className="text-3xl font-black">100%</div>
                                <div className="text-sm font-medium">Focused on<br />Your Business</div>
                            </div>
                        </div>
                    </div>

                    {/* Right - Content */}
                    <div className="order-1 lg:order-2">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black dark:text-white tracking-tight mb-6">
                            Why <span className="text-brand-green">SecureLife</span> Fincorp?
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 text-lg mb-10">
                            Our role is to help you decide correctly — not quickly. We prioritize your business needs over sales targets.
                        </p>

                        {/* Benefits Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            {benefits.map((benefit, index) => {
                                const Icon = benefit.icon;
                                return (
                                    <div key={index} className="flex items-start gap-4 group">
                                        <div className="w-10 h-10 rounded-xl bg-brand-green/10 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-green group-hover:scale-110 transition-all duration-300">
                                            <Icon className="w-5 h-5 text-brand-green group-hover:text-black transition-colors" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-black dark:text-white mb-1">{benefit.title}</h4>
                                            <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{benefit.description}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
