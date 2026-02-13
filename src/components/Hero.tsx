'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { ArrowRight, CheckCircle } from 'lucide-react';
import useGeoLocation from '../hooks/useGeoLocation';

export function Hero() {
    const router = useRouter();
    const userGeo = useGeoLocation();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        businessType: '',
        otherBusiness: '',
        riskConcerns: [] as string[]
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const businessOptions = ['Manufacturing', 'Retail', 'IT', 'Other'];
    const riskOptions = [
        'fire', 'theft', 'cyber', 'health',
        'personal', 'financial', 'machinery', 'employee'
    ];

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleCheckboxChange = (risk: string) => {
        setFormData(prev => ({
            ...prev,
            riskConcerns: prev.riskConcerns.includes(risk)
                ? prev.riskConcerns.filter(r => r !== risk)
                : [...prev.riskConcerns, risk]
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            const finalBusinessType = formData.businessType === 'Other' ? formData.otherBusiness : formData.businessType;
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    firstName: formData.firstName,
                    lastName: formData.lastName,
                    email: formData.email,
                    phone: formData.phone,
                    businessType: finalBusinessType,
                    mainRiskConcern: formData.riskConcerns,
                    source: 'hero-direct-form',
                    userLocation: userGeo ? `${userGeo.city}, ${userGeo.region}, ${userGeo.country}` : 'Unknown',
                    userPincode: userGeo ? userGeo.pincode : 'Unknown',
                    userIp: userGeo ? userGeo.ip : 'Unknown',
                }),
            });
            if (response.ok) {
                router.push('/thank-you');
            }
        } catch (err) {
            console.error(err);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section
            className="w-full min-h-screen lg:h-[100dvh] flex items-center justify-center p-3 sm:p-5 pt-[80px] md:pt-[90px] pb-8 bg-white dark:bg-[#0a0a0a] transition-colors duration-300"
        >
            <div className="w-full max-w-[1400px] h-full lg:h-full relative flex flex-col items-stretch">
                <div
                    className="w-full min-h-full lg:h-full bg-brand-green rounded-[32px] sm:rounded-[40px] relative overflow-hidden px-4 sm:px-6 md:px-20 py-10 sm:py-16 md:py-20 flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-10 lg:gap-10"
                >
                    {/* Left Content - Original Style */}
                    <div className="max-w-[650px] z-10 text-center md:text-left relative flex-shrink-0">
                        <h1
                            className="font-bold leading-[1.15] text-black"
                            style={{ fontSize: 'clamp(1.5rem, 5vw, 3.5rem)', marginBottom: 'clamp(0.4rem, 1vh, 1.5rem)' }}
                        >
                            Get the right <span className="bg-white text-black px-2 sm:px-3 md:px-4 rounded-lg inline-block">business insurance</span> without confusion, overspending, or gaps.
                        </h1>
                        <p
                            className="leading-relaxed text-black/80 max-w-[500px] sm:max-w-[550px] mx-auto md:mx-0"
                            style={{ fontSize: 'clamp(0.8rem, 2vw, 1.125rem)', marginBottom: 'clamp(0.6rem, 1.5vh, 2rem)' }}
                        >
                            We help Mumbai & Navi Mumbai business owners choose insurance that fits their business size, industry, and real risks — so coverage works when it's actually needed.
                        </p>

                        <div className="hidden md:flex flex-col sm:flex-row justify-center md:justify-start gap-2.5 sm:gap-3 md:gap-5">
                            <button
                                onClick={() => window.dispatchEvent(new CustomEvent('open-contact'))}
                                className="bg-black text-white rounded-[10px] sm:rounded-[14px] font-semibold transition-all hover:bg-neutral-800 hover:-translate-y-0.5 active:scale-95 px-6 py-3 sm:px-8 sm:py-3.5 text-sm sm:text-base"
                            >
                                Check coverage for my business
                            </button>
                            <button
                                onClick={() => window.dispatchEvent(new CustomEvent('open-contact'))}
                                className="bg-transparent text-black border border-black rounded-[10px] sm:rounded-[14px] font-semibold transition-all hover:bg-black/5 hover:-translate-y-0.5 active:scale-95 px-6 py-3 sm:px-8 sm:py-3.5 text-sm sm:text-base"
                            >
                                Get a quick quote
                            </button>
                        </div>
                    </div>

                    {/* Right Content - Form in project theme (Black) */}
                    <div className="z-20 w-full lg:max-w-[465px] max-w-[440px] relative group shrink-0">
                        <div className="bg-black rounded-[24px] md:rounded-[32px] p-4 sm:p-5 md:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-white/10">
                            <div className="mb-3 md:mb-5 text-center lg:text-left">
                                <h3 className="text-lg md:text-2xl font-bold text-white flex items-center justify-center lg:justify-start gap-2">
                                    Quick Quote
                                    <div className="w-1.5 h-1.5 rounded-full bg-brand-green animate-pulse"></div>
                                </h3>
                                <p className="text-gray-400 text-[10px] md:text-sm mt-0.5 md:mt-1.5 uppercase tracking-widest font-bold">Protect your business today</p>
                            </div>

                            {isSubmitted ? (
                                <div className="py-16 text-center space-y-4">
                                    <div className="w-16 h-16 bg-brand-green rounded-full flex items-center justify-center mx-auto text-black shadow-[0_0_20px_rgba(0,210,106,0.4)]">
                                        <CheckCircle size={32} />
                                    </div>
                                    <h4 className="text-xl font-bold text-white tracking-tight">Request Received!</h4>
                                    <p className="text-gray-400 text-sm">We'll contact you within 24–48 hours.</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-2 md:space-y-3">
                                    <div className="grid grid-cols-2 gap-2 md:gap-3">
                                        <input
                                            type="text"
                                            name="firstName"
                                            placeholder="first name"
                                            required
                                            value={formData.firstName}
                                            onChange={handleChange}
                                            className="w-full px-3 py-2 md:px-4 md:py-3 bg-white/5 border border-white/10 rounded-xl text-xs md:text-[13px] focus:outline-none focus:border-brand-green transition-all text-white placeholder:text-gray-500"
                                        />
                                        <input
                                            type="text"
                                            name="lastName"
                                            placeholder="last name"
                                            required
                                            value={formData.lastName}
                                            onChange={handleChange}
                                            className="w-full px-3 py-2 md:px-4 md:py-3 bg-white/5 border border-white/10 rounded-xl text-xs md:text-[13px] focus:outline-none focus:border-brand-green transition-all text-white placeholder:text-gray-500"
                                        />
                                    </div>
                                    <div className="grid grid-cols-2 gap-2 md:gap-3">
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full px-3 py-2 md:px-4 md:py-3 bg-white/5 border border-white/10 rounded-xl text-xs md:text-[13px] focus:outline-none focus:border-brand-green transition-all text-white placeholder:text-gray-500"
                                        />
                                        <input
                                            type="tel"
                                            name="phone"
                                            placeholder="phone"
                                            required
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full px-3 py-2 md:px-4 md:py-3 bg-white/5 border border-white/10 rounded-xl text-xs md:text-[13px] focus:outline-none focus:border-brand-green transition-all text-white placeholder:text-gray-500"
                                        />
                                    </div>
                                    <div className="space-y-2 md:space-y-3">
                                        <select
                                            name="businessType"
                                            required
                                            value={formData.businessType}
                                            onChange={handleChange}
                                            className="w-full px-3 py-2 md:px-4 md:py-3 bg-white/5 border border-white/10 rounded-xl text-xs md:text-[13px] focus:outline-none focus:border-brand-green transition-all text-white cursor-pointer appearance-none"
                                        >
                                            <option value="" disabled className="bg-black text-gray-500">Business type</option>
                                            {businessOptions.map(opt => (
                                                <option key={opt} value={opt} className="bg-black text-white">{opt}</option>
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
                                                className="w-full px-3 py-2 md:px-4 md:py-2.5 bg-white/5 border border-white/10 rounded-xl text-xs md:text-sm focus:outline-none focus:border-brand-green transition-all text-white placeholder:text-gray-500 animate-in fade-in slide-in-from-top-1 duration-200"
                                            />
                                        )}
                                    </div>

                                    <div className="space-y-2 mt-2">
                                        <p className="text-white/60 text-[10px] md:text-xs font-semibold uppercase tracking-wider px-1">Main Risk Concern?</p>
                                        <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 px-1">
                                            {riskOptions.map((risk) => (
                                                <label
                                                    key={risk}
                                                    className="flex items-center gap-2 cursor-pointer group select-none"
                                                >
                                                    <div className="relative flex items-center justify-center">
                                                        <input
                                                            type="checkbox"
                                                            className="peer appearance-none w-3.5 h-3.5 md:w-3.5 md:h-3.5 rounded border border-white/20 bg-white/5 checked:bg-brand-green checked:border-brand-green transition-all cursor-pointer"
                                                            checked={formData.riskConcerns.includes(risk)}
                                                            onChange={() => handleCheckboxChange(risk)}
                                                        />
                                                        <svg
                                                            className="absolute w-2.5 h-2.5 md:w-2.5 md:h-2.5 text-black opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity"
                                                            fill="none"
                                                            viewBox="0 0 24 24"
                                                            stroke="currentColor"
                                                            strokeWidth="4"
                                                        >
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                                        </svg>
                                                    </div>
                                                    <span className="text-white/80 text-[11px] md:text-sm">
                                                        {risk}
                                                    </span>
                                                </label>
                                            ))}
                                        </div>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full bg-brand-green text-black font-extrabold py-3 md:py-4 rounded-xl shadow-[0_10px_30px_rgba(0,210,106,0.3)] hover:brightness-105 active:scale-[0.98] transition-all text-sm md:text-base flex items-center justify-center gap-2 mt-3 md:mt-4 disabled:opacity-70"
                                    >
                                        {isSubmitting ? 'Sending Request...' : 'Get Instant Quote'}
                                        {!isSubmitting && <ArrowRight size={16} />}
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>


                    {/* Illustration - Original placement but reduced scale for space */}
                    <div className="absolute bottom-0 left-[-5%] lg:left-[15%] pointer-events-none z-0">
                        {/* <Image
                            src="/images/hero-bg.png"
                            alt="Insurance Illustration"
                            width={1000}
                            height={580}
                            priority
                            className="w-auto object-contain object-bottom opacity-10 xl:opacity-100"
                            style={{
                                height: 'clamp(180px, 32vh, 420px)',
                                maxHeight: '45%'
                            }}
                        /> */}
                    </div>
                </div>
            </div>
        </section>
    );
}
