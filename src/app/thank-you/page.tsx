'use client';

import Link from 'next/link';
import { CheckCircle, ArrowRight, Phone, Mail, Clock, Shield } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function ThankYouPage() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <main className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#0d1a0f] to-[#0a0a0a] text-white flex items-center justify-center px-5 py-20">
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-green/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-brand-green/5 rounded-full blur-[100px]" />
            </div>

            <div className={`relative z-10 max-w-2xl mx-auto text-center space-y-8 transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                {/* Success Icon */}
                <div className={`flex justify-center transition-all duration-500 delay-200 ${mounted ? 'scale-100' : 'scale-0'}`}>
                    <div className="relative">
                        <div className="absolute inset-0 bg-brand-green rounded-full blur-2xl opacity-30 animate-pulse" />
                        <div className="relative w-24 h-24 bg-brand-green rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(0,210,106,0.4)]">
                            <CheckCircle size={48} className="text-black" strokeWidth={2.5} />
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="space-y-4">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                        Thank You<span className="text-brand-green">!</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-neutral-300 font-medium">
                        Your request has been submitted successfully.
                    </p>
                    <p className="text-neutral-400 max-w-lg mx-auto leading-relaxed">
                        Our team of expert advisors will review your information and get back to you within 15 minutes during business hours.
                    </p>
                </div>

                {/* Info Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6">
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 space-y-3">
                        <div className="w-12 h-12 bg-brand-green/20 rounded-xl flex items-center justify-center mx-auto">
                            <Clock className="w-6 h-6 text-brand-green" />
                        </div>
                        <div>
                            <h3 className="font-bold text-white">Quick Response</h3>
                            <p className="text-sm text-neutral-400">Within 15 minutes</p>
                        </div>
                    </div>

                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 space-y-3">
                        <div className="w-12 h-12 bg-brand-green/20 rounded-xl flex items-center justify-center mx-auto">
                            <Phone className="w-6 h-6 text-brand-green" />
                        </div>
                        <div>
                            <h3 className="font-bold text-white">Expert Call</h3>
                            <p className="text-sm text-neutral-400">Free consultation</p>
                        </div>
                    </div>

                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 space-y-3">
                        <div className="w-12 h-12 bg-brand-green/20 rounded-xl flex items-center justify-center mx-auto">
                            <Shield className="w-6 h-6 text-brand-green" />
                        </div>
                        <div>
                            <h3 className="font-bold text-white">Secure Process</h3>
                            <p className="text-sm text-neutral-400">Your data is protected</p>
                        </div>
                    </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                    <Link
                        href="/"
                        className="inline-flex items-center justify-center gap-2 bg-brand-green text-black font-bold px-8 py-4 rounded-xl hover:brightness-110 transition-all active:scale-[0.98] shadow-lg shadow-brand-green/20"
                    >
                        Back to Home
                        <ArrowRight size={18} />
                    </Link>
                    <Link
                        href="/#our-solutions"
                        className="inline-flex items-center justify-center gap-2 bg-white/10 text-white font-bold px-8 py-4 rounded-xl hover:bg-white/20 transition-all active:scale-[0.98] border border-white/10"
                    >
                        Explore Services
                    </Link>
                </div>

                {/* Contact Info */}
                <div className="pt-8 border-t border-white/10">
                    <p className="text-neutral-500 text-sm mb-4">Need immediate assistance?</p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                        <a href="tel:+919876543210" className="flex items-center gap-2 text-neutral-300 hover:text-brand-green transition-colors">
                            <Phone size={16} />
                            <span>+91 98765 43210</span>
                        </a>
                        <a href="mailto:support@securelifefincorp.com" className="flex items-center gap-2 text-neutral-300 hover:text-brand-green transition-colors">
                            <Mail size={16} />
                            <span>support@securelifefincorp.com</span>
                        </a>
                    </div>
                </div>
            </div>
        </main>
    );
}
