"use client";

import Link from 'next/link';
import Image from 'next/image';
import { ThemeToggle } from './ThemeToggle';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Handle scroll for sticky effect
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        // Initial check
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isMobileMenuOpen]);

    return (
        <>
            <nav className={`fixed top-0 left-0 w-full z-[1000] px-5 py-4 transition-all duration-300 border-b ${isScrolled
                    ? 'bg-white/90 dark:bg-black/90 backdrop-blur-md border-black/5 dark:border-white/10 shadow-sm'
                    : 'bg-transparent border-transparent'
                }`}>
                <div className="max-w-[1250px] mx-auto flex justify-between items-center">
                    {/* Logo Area */}
                    <Link href="/" className="flex items-center gap-2 group z-[1001]">
                        <div className="relative w-8 h-8 overflow-hidden rounded-lg">
                            <Image
                                src="/images/website-logo.png"
                                alt="SecureLife Logo"
                                fill
                                className="object-contain transition-transform group-hover:scale-110"
                            />
                        </div>
                        <span className="text-xl font-bold text-black dark:text-white tracking-tight">
                            SecureLife <span className="text-black dark:text-white">Fincorp</span>
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-10">
                        <ul className="flex list-none gap-8">
                            <li><Link href="/" className="text-[11px] font-bold uppercase tracking-[0.2em] text-black dark:text-white hover:text-brand-green transition-colors">Home</Link></li>
                            <li><Link href="/about" className="text-[11px] font-bold uppercase tracking-[0.2em] text-black dark:text-white hover:text-brand-green transition-colors">About</Link></li>
                            <li><Link href="/services" className="text-[11px] font-bold uppercase tracking-[0.2em] text-black dark:text-white hover:text-brand-green transition-colors">Services</Link></li>
                            <li><Link href="/contact" className="text-[11px] font-bold uppercase tracking-[0.2em] text-black dark:text-white hover:text-brand-green transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Right Side Tools */}
                    <div className="flex items-center gap-4 z-[1001]">
                        <ThemeToggle />

                        <Link href="/contact" className="hidden sm:block">
                            <button className="bg-black dark:bg-brand-green text-white dark:text-black px-6 py-3 rounded-xl text-[10px] font-bold uppercase tracking-widest hover:scale-105 transition-all active:scale-95 shadow-lg">
                                Get Started
                            </button>
                        </Link>

                        {/* Mobile Toggle Button */}
                        <button
                            className="lg:hidden p-2 text-black dark:text-white focus:outline-none"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            aria-label="Toggle Menu"
                        >
                            {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay - Full Screen Slide Down */}
            <div className={`lg:hidden fixed inset-0 w-full h-screen bg-white dark:bg-[#0a0a0a] z-[999] transition-all duration-500 ease-in-out flex flex-col pt-32 px-10 ${isMobileMenuOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-full invisible'
                }`}>
                <div className="flex flex-col gap-10">
                    <ul className="list-none space-y-8">
                        <li>
                            <Link
                                onClick={() => setIsMobileMenuOpen(false)}
                                href="/"
                                className="text-4xl font-bold text-black dark:text-white hover:text-brand-green transition-colors"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                onClick={() => setIsMobileMenuOpen(false)}
                                href="/about"
                                className="text-4xl font-bold text-black dark:text-white hover:text-brand-green transition-colors"
                            >
                                About
                            </Link>
                        </li>
                        <li>
                            <Link
                                onClick={() => setIsMobileMenuOpen(false)}
                                href="/services"
                                className="text-4xl font-bold text-black dark:text-white hover:text-brand-green transition-colors"
                            >
                                Services
                            </Link>
                        </li>
                        <li>
                            <Link
                                onClick={() => setIsMobileMenuOpen(false)}
                                href="/contact"
                                className="text-4xl font-bold text-black dark:text-white hover:text-brand-green transition-colors"
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>

                    <div className="pt-10 border-t border-black/5 dark:border-white/5">
                        <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                            <button className="w-full bg-brand-green text-black py-5 rounded-2xl font-bold text-xl shadow-xl active:scale-95 transition-transform">
                                Get Started Now
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
