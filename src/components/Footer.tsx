"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Facebook, Twitter, Instagram, PinIcon as Pinterest } from 'lucide-react';
import { ContactModal } from './ContactModal';

export function Footer() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [preSelectedService, setPreSelectedService] = useState<string | null>(null);

    // Listen for global open-contact event
    useEffect(() => {
        const handleOpen = (e: Event) => {
            const customEvent = e as CustomEvent<{ service?: string }>;
            if (customEvent.detail?.service) {
                setPreSelectedService(customEvent.detail.service);
            } else {
                setPreSelectedService(null);
            }
            setIsModalOpen(true);
        };
        window.addEventListener('open-contact', handleOpen);
        return () => window.removeEventListener('open-contact', handleOpen);
    }, []);

    return (
        <>
            <footer className="w-full relative mt-40">
                {/* Upper CTA Section (Overlapping) */}
                <div className="max-w-[1250px] mx-auto px-5 relative z-20 -mb-28">
                    <div className="bg-brand-green rounded-[40px] px-6 py-16 md:p-20 text-center space-y-8 relative overflow-hidden shadow-2xl">
                        {/* Modern Grid Pattern Overlay (Centered & Fading) */}
                        <div className="absolute inset-0 opacity-[0.12] pointer-events-none"
                            style={{
                                backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
                                backgroundSize: '40px 40px',
                                maskImage: 'radial-gradient(circle, black 40%, transparent 90%)',
                                WebkitMaskImage: 'radial-gradient(circle, black 40%, transparent 90%)'
                            }}>
                        </div>

                        <div className="relative z-10 space-y-4">
                            <span className="text-black/60 font-bold uppercase tracking-widest text-[10px] md:text-sm">
                                Let's work together
                            </span>
                            <h2 className="text-3xl md:text-6xl font-bold text-black tracking-tight">
                                Make Informed Decisions
                            </h2>
                            <p className="text-black/70 max-w-xl mx-auto text-base md:text-lg font-medium">
                                Whether you're reviewing existing insurance or planning coverage for the first time, we help you make informed decisions with clarity.
                            </p>
                        </div>

                        <button
                            onClick={() => window.dispatchEvent(new CustomEvent('open-contact'))}
                            className="relative z-10 bg-[#0D121F] text-white px-8 md:px-10 py-4 md:py-5 rounded-2xl font-bold text-base md:text-lg transition-transform hover:scale-105 active:scale-95 shadow-xl"
                        >
                            Get a Structured Recommendation
                        </button>
                    </div>
                </div>

                {/* Main Footer Section */}
                <div className="bg-[#050A18] dark:bg-black pt-48 pb-10 text-white transition-colors duration-300">
                    <div className="max-w-[1250px] mx-auto px-5">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-10">

                            {/* Logo & Info */}
                            <div className="space-y-8">
                                <div className="text-2xl font-bold tracking-tight">
                                    SecureLife<span className="text-brand-green">Fincorp</span>
                                </div>
                                <p className="text-neutral-400 leading-relaxed text-sm md:text-base">
                                    Reaching financial success with the use of cutting-edge tools to boost money management, suited solutions, and expert insights.
                                </p>
                                <div className="flex gap-4">
                                    <Link href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-green hover:text-black transition-all">
                                        <Facebook className="w-5 h-5" />
                                    </Link>
                                    <Link href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-green hover:text-black transition-all">
                                        <Pinterest className="w-5 h-5" />
                                    </Link>
                                    <Link href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-green hover:text-black transition-all">
                                        <Twitter className="w-5 h-5" />
                                    </Link>
                                    <Link href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-green hover:text-black transition-all">
                                        <Instagram className="w-5 h-5" />
                                    </Link>
                                </div>
                            </div>

                            {/* Quick Links */}
                            <div className="sm:pl-8">
                                <h4 className="text-xl font-bold mb-8 relative inline-block">
                                    Quick Links
                                    <div className="absolute -bottom-2 left-0 w-8 h-[2px] bg-brand-green"></div>
                                </h4>
                                <ul className="space-y-4 text-neutral-400 text-sm">
                                    <li><Link href="/#" className="hover:text-brand-green transition-colors">Home</Link></li>
                                    <li><Link href="/#about-us" className="hover:text-brand-green transition-colors">About Us</Link></li>
                                    <li><Link href="/#our-solutions" className="hover:text-brand-green transition-colors">Our Services</Link></li>
                                    <li><button onClick={() => window.dispatchEvent(new CustomEvent('open-contact'))} className="hover:text-brand-green transition-colors text-left">Contact</button></li>
                                </ul>
                            </div>

                            {/* Our Services */}
                            <div className="lg:pl-8">
                                <h4 className="text-xl font-bold mb-8 relative inline-block">
                                    Our Services
                                    <div className="absolute -bottom-2 left-0 w-8 h-[2px] bg-brand-green"></div>
                                </h4>
                                <ul className="space-y-4 text-neutral-400 text-sm">
                                    <li><Link href="/#our-solutions" className="hover:text-brand-green transition-colors">Fire Insurance</Link></li>
                                    <li><Link href="/#our-solutions" className="hover:text-brand-green transition-colors">Theft Insurance</Link></li>
                                    <li><Link href="/#our-solutions" className="hover:text-brand-green transition-colors">Cyber Insurance</Link></li>
                                    <li><Link href="/#our-solutions" className="hover:text-brand-green transition-colors">Health Insurance</Link></li>
                                </ul>
                            </div>

                            {/* Newsletter */}
                            <div className="space-y-8">
                                <div>
                                    <h4 className="text-xl font-bold mb-8 relative inline-block">
                                        Don't miss a thing
                                        <div className="absolute -bottom-2 left-0 w-8 h-[2px] bg-brand-green"></div>
                                    </h4>
                                    <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                                        Get special offers and updates by subscribing.
                                    </p>
                                    <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                                        <input
                                            type="email"
                                            placeholder="Email"
                                            onFocus={() => window.dispatchEvent(new CustomEvent('open-contact'))}
                                            onClick={() => window.dispatchEvent(new CustomEvent('open-contact'))}
                                            readOnly
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-sm focus:outline-none focus:border-brand-green transition-colors cursor-pointer"
                                        />
                                        <button
                                            onClick={() => window.dispatchEvent(new CustomEvent('open-contact'))}
                                            className="w-full bg-brand-green text-black font-bold py-4 rounded-xl hover:bg-white transition-colors active:scale-[0.98]"
                                        >
                                            Subscribe
                                        </button>
                                    </form>
                                </div>
                            </div>

                        </div>

                        {/* Bottom Bar */}
                        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-neutral-500 text-xs md:text-sm font-medium border-t border-white/5 pt-10">
                            <p className="text-center md:text-left">
                                Copyright © 2026 SecureLife Fincorp | Designed By <a href="https://www.aneeverse.com/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-brand-green transition-colors">Aneeverse</a>
                            </p>
                            <div className="flex gap-8">
                                <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
                                <Link href="/terms-and-conditions" className="hover:text-white transition-colors">Terms & Conditions</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <ContactModal
                isOpen={isModalOpen}
                onClose={() => {
                    setIsModalOpen(false);
                    setPreSelectedService(null);
                }}
                preSelectedService={preSelectedService}
            />
        </>
    );
}
