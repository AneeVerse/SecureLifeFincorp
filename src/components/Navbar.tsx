"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';
import { ThemeToggle } from './ThemeToggle';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const router = useRouter();
    const pathname = usePathname();

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

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isMobileMenuOpen]);

    const scrollToSection = (e: React.MouseEvent, id: string) => {
        e.preventDefault();
        const element = document.getElementById(id);

        if (element) {
            const offset = 80; // Navbar height
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
            setIsMobileMenuOpen(false);
        } else {
            // If element doesn't exist (e.g. on contact page), go home with hash
            if (id === 'top') {
                if (pathname === '/') {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                } else {
                    router.push('/');
                }
            } else {
                router.push(`/#${id}`);
            }
            setIsMobileMenuOpen(false);
        }
    };

    return (
        <>
            <nav className={`fixed top-0 left-0 w-full z-[1000] px-5 py-4 transition-all duration-300 border-b ${isScrolled
                ? 'bg-white/90 dark:bg-black/90 backdrop-blur-md border-black/5 dark:border-white/10 shadow-sm'
                : 'bg-transparent border-transparent'
                }`}>
                <div className="max-w-[1250px] mx-auto flex justify-between items-center">
                    {/* Logo Area */}
                    <div
                        onClick={(e) => scrollToSection(e, 'top')}
                        className="flex items-center gap-2 group z-[1001] cursor-pointer"
                    >
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
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-10">
                        <ul className="flex list-none gap-8">
                            <li><button onClick={(e) => scrollToSection(e, 'top')} className="text-[11px] font-bold uppercase tracking-[0.2em] text-black dark:text-white hover:text-brand-green transition-colors cursor-pointer">Home</button></li>
                            <li><button onClick={(e) => scrollToSection(e, 'about-us')} className="text-[11px] font-bold uppercase tracking-[0.2em] text-black dark:text-white hover:text-brand-green transition-colors cursor-pointer">About</button></li>
                            <li><button onClick={(e) => scrollToSection(e, 'our-solutions')} className="text-[11px] font-bold uppercase tracking-[0.2em] text-black dark:text-white hover:text-brand-green transition-colors cursor-pointer">Services</button></li>
                            <li><button onClick={() => window.dispatchEvent(new CustomEvent('open-contact'))} className="text-[11px] font-bold uppercase tracking-[0.2em] text-black dark:text-white hover:text-brand-green transition-colors cursor-pointer">Contact</button></li>
                        </ul>
                    </div>

                    {/* Right Side Tools */}
                    <div className="flex items-center gap-4 z-[1001]">
                        <ThemeToggle />

                        <button
                            onClick={() => window.dispatchEvent(new CustomEvent('open-contact'))}
                            className="hidden sm:block bg-black dark:bg-brand-green text-white dark:text-black px-6 py-3 rounded-xl text-[10px] font-bold uppercase tracking-widest hover:scale-105 transition-all active:scale-95 shadow-lg"
                        >
                            Get Started
                        </button>

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
                            <button
                                onClick={(e) => scrollToSection(e, 'top')}
                                className="text-4xl font-bold text-black dark:text-white hover:text-brand-green transition-colors text-left w-full"
                            >
                                Home
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={(e) => scrollToSection(e, 'about-us')}
                                className="text-4xl font-bold text-black dark:text-white hover:text-brand-green transition-colors text-left w-full"
                            >
                                About
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={(e) => scrollToSection(e, 'our-solutions')}
                                className="text-4xl font-bold text-black dark:text-white hover:text-brand-green transition-colors text-left w-full"
                            >
                                Services
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => {
                                    setIsMobileMenuOpen(false);
                                    window.dispatchEvent(new CustomEvent('open-contact'));
                                }}
                                className="text-4xl font-bold text-black dark:text-white hover:text-brand-green transition-colors text-left"
                            >
                                Contact
                            </button>
                        </li>
                    </ul>

                    <div className="pt-10 border-t border-black/5 dark:border-white/5">
                        <button
                            onClick={() => {
                                setIsMobileMenuOpen(false);
                                window.dispatchEvent(new CustomEvent('open-contact'));
                            }}
                            className="w-full bg-brand-green text-black py-5 rounded-2xl font-bold text-xl shadow-xl active:scale-95 transition-transform"
                        >
                            Get Started Now
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
