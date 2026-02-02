'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { X, Shield, Clock, CheckCircle, ArrowRight } from 'lucide-react';

interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
    preSelectedService?: string | null;
}

export function ContactModal({ isOpen, onClose, preSelectedService }: ContactModalProps) {
    const router = useRouter();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        countryCode: '+91',
        phone: '',
        businessType: '',
        otherBusiness: '',
        selectedServices: [] as string[],
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState<string | null>(null);

    // Pre-select service when modal opens with a service
    useEffect(() => {
        if (isOpen && preSelectedService) {
            setFormData(prev => ({
                ...prev,
                selectedServices: prev.selectedServices.includes(preSelectedService)
                    ? prev.selectedServices
                    : [...prev.selectedServices, preSelectedService]
            }));
        }
    }, [isOpen, preSelectedService]);

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
            const finalBusinessType = formData.businessType === 'Other' ? formData.otherBusiness : formData.businessType;
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    firstName: formData.firstName,
                    lastName: formData.lastName,
                    email: formData.email,
                    phone: `${formData.countryCode} ${formData.phone}`,
                    businessType: finalBusinessType,
                    mainRiskConcern: formData.selectedServices,
                    message: formData.message,
                    source: 'high-intent-modal'
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Failed to send message');
            }

            // Redirect to thank you page
            onClose();
            router.push('/thank-you');

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

    const toggleService = (service: string) => {
        setFormData(prev => ({
            ...prev,
            selectedServices: prev.selectedServices.includes(service)
                ? prev.selectedServices.filter(s => s !== service)
                : [...prev.selectedServices, service]
        }));
    };

    const businessOptions = ['Manufacturing', 'Retail', 'IT', 'Other'];
    const serviceOptions = [
        'fire', 'theft', 'cyber', 'health',
        'personal', 'financial', 'machinery', 'employee'
    ];

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-[2000] flex items-center justify-center p-2 sm:p-4 md:p-6"
            onClick={onClose}
        >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/80 backdrop-blur-md transition-opacity duration-300" />

            {/* Modal Container */}
            <div
                className="relative w-full max-w-[1000px] bg-white dark:bg-[#0d0d0d] rounded-[24px] md:rounded-[32px] overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.3)] animate-modal-in flex flex-col md:flex-row transition-colors duration-300"
                onClick={e => e.stopPropagation()}
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 transition-colors text-gray-500 dark:text-gray-400"
                    aria-label="Close modal"
                >
                    <X size={18} />
                </button>

                {/* Left Panel - Brand Info - Hidden on mobile */}
                <div className="hidden md:flex bg-gradient-to-br from-brand-green to-[#00B85F] p-6 md:p-10 md:w-[38%] text-black flex-col justify-between relative overflow-hidden">
                    <div className="absolute -top-24 -left-24 w-64 h-64 rounded-full bg-white/20 blur-3xl pointer-events-none" />

                    <div className="relative z-10">
                        <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center mb-8 shadow-xl transform -rotate-3 hover:rotate-0 transition-transform duration-300">
                            <Shield size={24} className="text-brand-green" />
                        </div>
                        <h3 className="text-3xl lg:text-4xl font-bold mb-4 tracking-tight leading-tight">
                            Secure your Future today.
                        </h3>
                        <p className="text-black/70 text-sm mb-6 leading-relaxed font-medium">
                            Join 5,000+ businesses who trust SecureLife for their financial protection.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="p-2 bg-white/30 rounded-xl backdrop-blur-sm border border-white/40">
                                    <Clock size={18} className="text-black" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-sm">Quick Approval</h4>
                                    <p className="text-black/60 text-xs">Policy within 24 hours</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-2 bg-white/30 rounded-xl backdrop-blur-sm border border-white/40">
                                    <Shield size={18} className="text-black" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-sm">Fully Regulated</h4>
                                    <p className="text-black/60 text-xs">Safe & Secure Process</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 relative z-10">
                        <div className="p-3 bg-black rounded-xl border border-white/10">
                            <p className="text-brand-green text-[10px] font-bold uppercase tracking-widest mb-0.5">Response Time</p>
                            <p className="text-white text-sm font-medium italic">&lt; 15 Minutes</p>
                        </div>
                    </div>
                </div>

                {/* Right Panel - Form */}
                <div className="p-6 sm:p-8 md:p-10 w-full md:w-[62%] max-h-[85vh] md:max-h-[90vh] overflow-y-auto scrollbar-hide bg-white dark:bg-[#0d0d0d] transition-colors duration-300">
                    {isSubmitted ? (
                        <div className="flex flex-col items-center justify-center h-full min-h-[300px] text-center space-y-4">
                            <div className="w-16 h-16 bg-brand-green rounded-full flex items-center justify-center shadow-lg shadow-brand-green/20 animate-bounce-in">
                                <CheckCircle size={32} className="text-black" />
                            </div>
                            <div className="space-y-1">
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Success!</h3>
                                <p className="text-gray-500 dark:text-gray-400 text-sm max-w-xs mx-auto">
                                    We'll contact you shortly.
                                </p>
                            </div>
                        </div>
                    ) : (
                        <div className="space-y-4 sm:space-y-5 md:space-y-6">
                            <div className="space-y-1.5">
                                <h3 className="text-2xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white tracking-tight">
                                    Get Free Consultation
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-sm md:text-base">
                                    Provide your details to get started with our expert advisors.
                                </p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 md:space-y-5">
                                {/* Name Row */}
                                <div className="grid grid-cols-2 md:grid-cols-2 gap-3 md:gap-4">
                                    <div className="space-y-1">
                                        <label className="text-[10px] sm:text-xs md:text-xs font-bold uppercase tracking-widest text-gray-700 dark:text-gray-400 ml-1">FIRST NAME</label>
                                        <input
                                            type="text"
                                            name="firstName"
                                            placeholder="first name"
                                            required
                                            value={formData.firstName}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 md:py-3.5 border border-gray-200 dark:border-white/5 rounded-xl md:rounded-2xl bg-gray-50 dark:bg-[#151515] text-gray-900 dark:text-white text-sm md:text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green transition-all"
                                        />
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-[10px] sm:text-xs md:text-xs font-bold uppercase tracking-widest text-gray-700 dark:text-gray-400 ml-1">LAST NAME</label>
                                        <input
                                            type="text"
                                            name="lastName"
                                            placeholder="last name"
                                            required
                                            value={formData.lastName}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 md:py-3.5 border border-gray-200 dark:border-white/5 rounded-xl md:rounded-2xl bg-gray-50 dark:bg-[#151515] text-gray-900 dark:text-white text-sm md:text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green transition-all"
                                        />
                                    </div>
                                </div>

                                {/* Email & Phone Row */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                                    <div className="space-y-1">
                                        <label className="text-[10px] sm:text-xs md:text-xs font-bold uppercase tracking-widest text-gray-700 dark:text-gray-400 ml-1">EMAIL ADDRESS</label>
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 md:py-3.5 border border-gray-200 dark:border-white/5 rounded-xl md:rounded-2xl bg-gray-50 dark:bg-[#151515] text-gray-900 dark:text-white text-sm md:text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green transition-all"
                                        />
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-[10px] sm:text-xs md:text-xs font-bold uppercase tracking-widest text-gray-700 dark:text-gray-400 ml-1">PHONE NUMBER</label>
                                        <div className="flex items-stretch border border-gray-100 dark:border-white/5 rounded-xl md:rounded-2xl bg-gray-50 dark:bg-[#151515] focus-within:ring-2 focus-within:ring-brand-green/20 focus-within:border-brand-green transition-all overflow-hidden">
                                            <div className="flex items-center border-r border-gray-200 dark:border-white/5">
                                                <span className="px-4 text-gray-900 dark:text-white text-sm md:text-sm font-medium">+91</span>
                                            </div>
                                            <input
                                                type="tel"
                                                name="phone"
                                                placeholder="phone"
                                                required
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="flex-1 px-4 py-3 md:py-3.5 bg-transparent text-gray-900 dark:text-white text-sm md:text-sm placeholder:text-gray-400 focus:outline-none"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Business Type */}
                                <div className="grid grid-cols-1 gap-3 md:gap-4">
                                    <div className="space-y-2">
                                        <label className="text-[10px] sm:text-xs md:text-xs font-bold uppercase tracking-widest text-gray-700 dark:text-gray-400 ml-1">BUSINESS TYPE</label>
                                        <div className="space-y-3">
                                            <select
                                                name="businessType"
                                                required
                                                value={formData.businessType}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 md:py-3.5 border border-gray-200 dark:border-white/5 rounded-xl md:rounded-2xl bg-gray-50 dark:bg-[#151515] text-gray-900 dark:text-white text-sm md:text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green transition-all cursor-pointer"
                                            >
                                                <option value="" disabled>Select Type</option>
                                                {businessOptions.map(type => (
                                                    <option key={type} value={type} className="dark:bg-[#151515]">{type}</option>
                                                ))}
                                            </select>

                                            {formData.businessType === 'Other' && (
                                                <input
                                                    type="text"
                                                    name="otherBusiness"
                                                    placeholder="please specify business type"
                                                    required
                                                    value={formData.otherBusiness}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-2 md:py-3.5 border border-gray-100 dark:border-white/5 rounded-xl md:rounded-2xl bg-gray-50 dark:bg-[#151515] text-gray-900 dark:text-white text-xs md:text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green transition-all animate-in fade-in slide-in-from-top-1 duration-200"
                                                />
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {/* Service Chips - Replace Risk Concerns */}
                                <div className="space-y-2.5">
                                    <label className="text-[10px] sm:text-xs md:text-xs font-bold uppercase tracking-widest text-gray-700 dark:text-gray-400 ml-1">Our Insurance Services</label>
                                    <div className="flex flex-wrap gap-1.5">
                                        {serviceOptions.map(service => (
                                            <button
                                                key={service}
                                                type="button"
                                                onClick={() => toggleService(service)}
                                                className={`px-3.5 py-1.5 md:px-5 md:py-2.5 rounded-full text-xs md:text-sm font-bold transition-all border ${formData.selectedServices.includes(service)
                                                    ? 'bg-brand-green border-brand-green text-black'
                                                    : 'bg-gray-50 dark:bg-white/5 border-gray-100 dark:border-white/5 text-gray-500 dark:text-gray-400'
                                                    }`}
                                            >
                                                {service}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Submit Button */}
                                <div className="pt-1 md:pt-4">
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full bg-black dark:bg-brand-green text-white dark:text-black font-bold py-3 md:py-4 rounded-xl md:rounded-2xl hover:brightness-95 transition-all shadow-xl active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-sm md:text-lg group"
                                    >
                                        {isSubmitting ? 'Submitting...' : 'Book Consultation'}
                                        {!isSubmitting && <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />}
                                    </button>
                                </div>
                            </form>
                        </div>
                    )}
                </div>
            </div>

            <style jsx>{`
                @keyframes modal-in {
                    from { opacity: 0; transform: scale(0.95) translateY(20px); }
                    to { opacity: 1; transform: scale(1) translateY(0); }
                }
                @keyframes bounce-in {
                    0% { transform: scale(0); }
                    50% { transform: scale(1.1); }
                    100% { transform: scale(1); }
                }
                .animate-modal-in { animation: modal-in 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
                .animate-bounce-in { animation: bounce-in 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards; }
                .scrollbar-hide::-webkit-scrollbar { display: none; }
                .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
            `}</style>
        </div>
    );
}

const countryCodes = [
    { code: '+91', label: '🇮🇳 +91' },
    { code: '+1', label: '🇺🇸 +1' },
    { code: '+44', label: '🇬🇧 +44' },
    { code: '+971', label: '🇦🇪 +971' },
    { code: '+61', label: '🇦🇺 +61' },
];
