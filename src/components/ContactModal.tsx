'use client';

import { useState, useEffect } from 'react';
import { X, Shield, Clock, CheckCircle } from 'lucide-react';

interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        countryCode: '+91',
        phone: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState<string | null>(null);

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    // Close on escape key
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleEscape);
        return () => window.removeEventListener('keydown', handleEscape);
    }, [onClose]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...formData,
                    phone: `${formData.countryCode} ${formData.phone}`,
                    source: 'hero'
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Failed to send message');
            }

            setIsSubmitted(true);

            // Reset after showing success
            setTimeout(() => {
                setIsSubmitted(false);
                setFormData({ firstName: '', lastName: '', email: '', countryCode: '+91', phone: '', message: '' });
                onClose();
            }, 2500);

        } catch (err) {
            setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const countryCodes = [
        { code: '+91', label: '🇮🇳 India (+91)' },
        { code: '+1', label: '🇺🇸 USA (+1)' },
        { code: '+44', label: '🇬🇧 UK (+44)' },
        { code: '+971', label: '🇦🇪 UAE (+971)' },
        { code: '+61', label: '🇦🇺 Australia (+61)' },
        { code: '+1', label: '🇨🇦 Canada (+1)' },
        { code: '+65', label: '🇸🇬 Singapore (+65)' },
        { code: '+49', label: '🇩🇪 Germany (+49)' },
        { code: '+33', label: '🇫🇷 France (+33)' },
        { code: '+81', label: '🇯🇵 Japan (+81)' },
        { code: '+86', label: '🇨🇳 China (+86)' },
        { code: '+7', label: '🇷🇺 Russia (+7)' },
        { code: '+55', label: '🇧🇷 Brazil (+55)' },
        { code: '+27', label: '🇿🇦 South Africa (+27)' },
        { code: '+966', label: '🇸🇦 Saudi Arabia (+966)' },
        { code: '+60', label: '🇲🇾 Malaysia (+60)' },
        { code: '+62', label: '🇮🇩 Indonesia (+62)' },
        { code: '+66', label: '🇹🇭 Thailand (+66)' },
        { code: '+84', label: '🇻🇳 Vietnam (+84)' },
        { code: '+82', label: '🇰🇷 South Korea (+82)' },
    ];

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            onClick={onClose}
        >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

            {/* Modal Container */}
            <div
                className="relative w-full max-w-[900px] max-h-[90vh] overflow-hidden rounded-[24px] shadow-2xl animate-modal-in"
                onClick={e => e.stopPropagation()}
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white md:text-gray-600 md:bg-gray-100 md:hover:bg-gray-200"
                    aria-label="Close modal"
                >
                    <X size={20} />
                </button>

                <div className="flex flex-col md:flex-row">
                    {/* Left Panel - Brand Info */}
                    <div className="bg-brand-green p-6 md:p-10 md:w-[40%] text-black">
                        <h3 className="text-xl md:text-2xl font-bold mb-2">
                            Need Insurance?
                        </h3>
                        <p className="text-black/70 text-sm md:text-base mb-6 md:mb-8">
                            Our experts will guide you through the entire insurance process.
                        </p>

                        <div className="space-y-4 md:space-y-5">
                            <div className="flex items-start gap-3">
                                <div className="p-2 bg-white rounded-lg flex-shrink-0">
                                    <Shield size={18} className="text-brand-green" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-sm md:text-base">100% Secure Process</h4>
                                    <p className="text-black/60 text-xs md:text-sm">Your data is protected with us</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <div className="p-2 bg-white rounded-lg flex-shrink-0">
                                    <Clock size={18} className="text-brand-green" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-sm md:text-base">24/7 Customer Support</h4>
                                    <p className="text-black/60 text-xs md:text-sm">We&apos;re here whenever you need</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <div className="p-2 bg-white rounded-lg flex-shrink-0">
                                    <CheckCircle size={18} className="text-brand-green" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-sm md:text-base">Quick Approval</h4>
                                    <p className="text-black/60 text-xs md:text-sm">Get your policy within 24 hours</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Panel - Form */}
                    <div className="bg-white dark:bg-[#1a1a1a] p-6 md:p-10 md:w-[60%]">
                        {isSubmitted ? (
                            <div className="flex flex-col items-center justify-center h-full min-h-[300px] text-center">
                                <div className="w-16 h-16 bg-brand-green rounded-full flex items-center justify-center mb-4 animate-bounce-in">
                                    <CheckCircle size={32} className="text-black" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Thank You!</h3>
                                <p className="text-gray-600 dark:text-gray-400">We&apos;ll get back to you shortly.</p>
                            </div>
                        ) : (
                            <>
                                <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-1">
                                    Get Free Consultation
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 text-sm mb-6">
                                    Fill out the form and our expert will contact you shortly
                                </p>

                                <form onSubmit={handleSubmit} className="space-y-4">
                                    {/* Name Row */}
                                    <div className="grid grid-cols-2 gap-3 md:gap-4">
                                        <div>
                                            <input
                                                type="text"
                                                name="firstName"
                                                placeholder="First Name*"
                                                required
                                                value={formData.firstName}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-[#0a0a0a] text-gray-900 dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent transition-all text-sm"
                                            />
                                        </div>
                                        <div>
                                            <input
                                                type="text"
                                                name="lastName"
                                                placeholder="Last Name*"
                                                required
                                                value={formData.lastName}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-[#0a0a0a] text-gray-900 dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent transition-all text-sm"
                                            />
                                        </div>
                                    </div>

                                    {/* Email */}
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email Address*"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-[#0a0a0a] text-gray-900 dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent transition-all text-sm"
                                    />

                                    {/* Phone */}
                                    <div className="flex items-stretch border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-[#0a0a0a] focus-within:ring-2 focus-within:ring-brand-green focus-within:border-transparent transition-all overflow-hidden group">
                                        <div className="relative border-r border-gray-300 dark:border-gray-600">
                                            <select
                                                name="countryCode"
                                                value={formData.countryCode}
                                                onChange={handleChange}
                                                className="h-full pl-3 pr-8 py-3 bg-transparent text-gray-900 dark:text-white text-sm focus:outline-none appearance-none cursor-pointer"
                                            >
                                                {countryCodes.map(c => (
                                                    <option key={c.label} value={c.code} className="dark:bg-[#0a0a0a]">{c.label.split(' ')[0]} {c.code}</option>
                                                ))}
                                            </select>
                                            <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                            </div>
                                        </div>
                                        <input
                                            type="tel"
                                            name="phone"
                                            placeholder="Phone Number*"
                                            required
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="flex-1 px-4 py-3 bg-transparent text-gray-900 dark:text-white placeholder:text-gray-400 focus:outline-none text-sm"
                                        />
                                    </div>

                                    {/* Message */}
                                    <textarea
                                        name="message"
                                        placeholder="Your Message (optional)"
                                        rows={3}
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-[#0a0a0a] text-gray-900 dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent transition-all text-sm resize-none"
                                    />

                                    {/* Error Message */}
                                    {error && (
                                        <div className="p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl text-red-600 dark:text-red-400 text-sm">
                                            {error}
                                        </div>
                                    )}

                                    {/* Submit Button */}
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full bg-brand-green text-black font-semibold py-3.5 rounded-xl hover:brightness-95 transition-all active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                                                Submitting...
                                            </>
                                        ) : (
                                            <>
                                                Get Free Consultation
                                                <span className="text-lg">→</span>
                                            </>
                                        )}
                                    </button>
                                </form>
                            </>
                        )}
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes modal-in {
                    from {
                        opacity: 0;
                        transform: scale(0.95) translateY(10px);
                    }
                    to {
                        opacity: 1;
                        transform: scale(1) translateY(0);
                    }
                }
                @keyframes bounce-in {
                    0% {
                        transform: scale(0);
                    }
                    50% {
                        transform: scale(1.2);
                    }
                    100% {
                        transform: scale(1);
                    }
                }
                .animate-modal-in {
                    animation: modal-in 0.3s ease-out forwards;
                }
                .animate-bounce-in {
                    animation: bounce-in 0.4s ease-out forwards;
                }
            `}</style>
        </div>
    );
}
