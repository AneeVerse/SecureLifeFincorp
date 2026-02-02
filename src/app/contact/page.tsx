"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from "lucide-react";

export default function ContactPage() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        countryCode: '+91',
        phone: '',
        businessType: '',
        selectedServices: [] as string[],
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState<string | null>(null);

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
                    firstName: formData.fullName,
                    email: formData.email,
                    phone: `${formData.countryCode} ${formData.phone}`,
                    extraInfo: `Business: ${formData.businessType} | Services: ${formData.selectedServices.join(', ')}`,
                    message: formData.message,
                    source: 'contact-page-high-intent'
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Failed to send message');
            }

            // Redirect to thank you page
            router.push('/thank-you');

        } catch (err) {
            setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const serviceOptions = [
        'Fire', 'Theft', 'Cyber', 'Health',
        'Personal', 'Financial', 'Machinery', 'Employee'
    ];

    const businessTypes = [
        'Manufacturing', 'Retail', 'IT', 'Logistics',
        'Healthcare', 'Real Estate', 'Education', 'Other'
    ];

    const countryCodes = [
        { code: '+91', label: '🇮🇳 India (+91)' },
        { code: '+1', label: '🇺🇸 USA (+1)' },
        { code: '+44', label: '🇬🇧 UK (+44)' },
        { code: '+971', label: '🇦🇪 UAE (+971)' },
        { code: '+61', label: '🇦🇺 Australia (+61)' },
    ];

    return (
        <main className="bg-white dark:bg-black min-h-screen transition-colors duration-300 font-outfit">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-40 pb-20 px-5 bg-neutral-50 dark:bg-[#0a0a0a] border-b border-neutral-100 dark:border-white/5 transition-colors duration-300">
                <div className="max-w-[1250px] mx-auto text-center space-y-6">
                    <div className="flex items-center justify-center gap-3">
                        <div className="w-12 h-[2px] bg-brand-green"></div>
                        <span className="text-black/50 dark:text-white/50 font-bold uppercase tracking-[0.2em] text-xs">Contact Us</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold text-black dark:text-white tracking-tight leading-tight max-w-4xl mx-auto">
                        Let's Start a <span className="text-brand-green italic">Conversation</span> About Your Future.
                    </h1>
                    <p className="text-lg text-neutral-500 dark:text-neutral-400 max-w-2xl mx-auto leading-relaxed">
                        Our team of expert advisors is ready to help you navigate your financial journey. Reach out today for a personalized consultation.
                    </p>
                </div>
            </section>

            {/* Contact Content */}
            <section className="py-24 px-5 bg-white dark:bg-black transition-colors duration-300">
                <div className="max-w-[1250px] mx-auto grid lg:grid-cols-[1fr_450px] gap-20 items-stretch">

                    {/* Form Side */}
                    <div className="bg-white dark:bg-[#0a0a0a] rounded-[50px] border border-neutral-100 dark:border-white/5 p-8 md:p-12 shadow-sm transition-colors duration-300">
                        {isSubmitted ? (
                            <div className="flex flex-col items-center justify-center h-full min-h-[400px] text-center">
                                <div className="w-20 h-20 bg-brand-green rounded-full flex items-center justify-center mb-6 animate-bounce">
                                    <CheckCircle size={40} className="text-black" />
                                </div>
                                <h3 className="text-2xl font-bold text-black dark:text-white mb-3">Message Sent!</h3>
                                <p className="text-neutral-500 dark:text-neutral-400 max-w-md">
                                    Thank you for reaching out. Our team will get back to you within 24 hours.
                                </p>
                            </div>
                        ) : (
                            <div className="space-y-10">
                                <div className="space-y-4">
                                    <h2 className="text-3xl font-bold text-black dark:text-white">Send us a message</h2>
                                    <p className="text-neutral-500 dark:text-neutral-400 italic">Expected response time: within 24 hours.</p>
                                </div>

                                <form className="space-y-8" onSubmit={handleSubmit}>
                                    <div className="grid md:grid-cols-2 gap-8">
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold uppercase tracking-widest text-black dark:text-white ml-1">Full Name</label>
                                            <input
                                                type="text"
                                                name="fullName"
                                                placeholder="John Doe"
                                                required
                                                value={formData.fullName}
                                                onChange={handleChange}
                                                className="w-full bg-neutral-50 dark:bg-[#151515] border border-neutral-100 dark:border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-green transition-colors dark:text-white"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold uppercase tracking-widest text-black dark:text-white ml-1">Email Address</label>
                                            <input
                                                type="email"
                                                name="email"
                                                placeholder="john@example.com"
                                                required
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="w-full bg-neutral-50 dark:bg-[#151515] border border-neutral-100 dark:border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-green transition-colors dark:text-white"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-8">
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold uppercase tracking-widest text-black dark:text-white ml-1">Phone Number</label>
                                            <div className="flex items-stretch bg-neutral-50 dark:bg-[#151515] border border-neutral-100 dark:border-white/10 rounded-2xl focus-within:border-brand-green transition-colors overflow-hidden">
                                                <div className="relative border-r border-neutral-100 dark:border-white/10">
                                                    <select
                                                        name="countryCode"
                                                        value={formData.countryCode}
                                                        onChange={handleChange}
                                                        className="h-full pl-4 pr-10 py-4 bg-transparent text-black dark:text-white text-sm focus:outline-none appearance-none cursor-pointer"
                                                    >
                                                        {countryCodes.map(c => (
                                                            <option key={c.label} value={c.code} className="dark:bg-[#151515]">{c.label.split(' ')[0]} {c.code}</option>
                                                        ))}
                                                    </select>
                                                    <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-neutral-400">
                                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                                    </div>
                                                </div>
                                                <input
                                                    type="tel"
                                                    name="phone"
                                                    placeholder="0000 000 000"
                                                    required
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    className="flex-1 bg-transparent px-6 py-4 focus:outline-none dark:text-white"
                                                />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold uppercase tracking-widest text-black dark:text-white ml-1">Business Type</label>
                                            <div className="relative">
                                                <select
                                                    name="businessType"
                                                    required
                                                    value={formData.businessType}
                                                    onChange={handleChange}
                                                    className="w-full bg-neutral-50 dark:bg-[#151515] border border-neutral-100 dark:border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-green transition-colors appearance-none dark:text-white cursor-pointer"
                                                >
                                                    <option value="" disabled>Select Business Type</option>
                                                    {businessTypes.map(type => (
                                                        <option key={type} value={type} className="dark:bg-[#151515]">{type}</option>
                                                    ))}
                                                </select>
                                                <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-neutral-400">
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <label className="text-sm font-bold uppercase tracking-widest text-black dark:text-white ml-1">Our Insurance Services (Select all that apply)</label>
                                        <div className="flex flex-wrap gap-3">
                                            {serviceOptions.map(service => (
                                                <button
                                                    key={service}
                                                    type="button"
                                                    onClick={() => toggleService(service)}
                                                    className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all border ${formData.selectedServices.includes(service)
                                                        ? 'bg-brand-green border-brand-green text-black'
                                                        : 'bg-neutral-50 dark:bg-[#151515] border-neutral-100 dark:border-white/10 text-neutral-500 dark:text-neutral-400 hover:border-brand-green'
                                                        }`}
                                                >
                                                    {service}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-bold uppercase tracking-widest text-black dark:text-white ml-1">Tell us more</label>
                                        <textarea
                                            name="message"
                                            placeholder="Tell us about your requirements..."
                                            rows={4}
                                            value={formData.message}
                                            onChange={handleChange}
                                            className="w-full bg-neutral-50 dark:bg-[#151515] border border-neutral-100 dark:border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-green transition-colors resize-none dark:text-white"
                                        />
                                    </div>

                                    {/* Error Message */}
                                    {error && (
                                        <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-2xl text-red-600 dark:text-red-400">
                                            {error}
                                        </div>
                                    )}

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="bg-black dark:bg-brand-green text-white dark:text-black px-12 py-5 rounded-2xl font-bold text-lg hover:bg-brand-green dark:hover:bg-white hover:text-black transition-all duration-300 flex items-center gap-3 active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <div className="w-5 h-5 border-2 border-white/30 dark:border-black/30 border-t-white dark:border-t-black rounded-full animate-spin" />
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                Send Message <Send className="w-5 h-5" />
                                            </>
                                        )}
                                    </button>
                                </form>
                            </div>
                        )}
                    </div>

                    {/* Info Side */}
                    <div className="space-y-8">
                        <div className="bg-[#0a0a0a] dark:bg-[#050505] text-white p-12 rounded-[50px] space-y-12 h-full border border-white/5 shadow-2xl transition-colors duration-300">
                            <div className="space-y-8">
                                <h3 className="text-3xl font-bold text-brand-green italic">Contact Information</h3>
                                <p className="text-neutral-400">Discover quick answers to common queries or reach out directly.</p>
                            </div>

                            <div className="space-y-10">
                                <div className="flex gap-6 items-start group">
                                    <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 flex-shrink-0 group-hover:bg-brand-green/20 transition-all">
                                        <Mail className="w-6 h-6 text-brand-green" />
                                    </div>
                                    <div className="space-y-2">
                                        <h5 className="font-bold text-white text-lg">Email Us</h5>
                                        <p className="text-neutral-400">support@securelifefincorp.com</p>
                                        <p className="text-neutral-400">info@securelifefincorp.com</p>
                                    </div>
                                </div>

                                <div className="flex gap-6 items-start group">
                                    <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 flex-shrink-0 group-hover:bg-brand-green/20 transition-all">
                                        <Phone className="w-6 h-6 text-brand-green" />
                                    </div>
                                    <div className="space-y-2">
                                        <h5 className="font-bold text-white text-lg">Call Us</h5>
                                        <p className="text-neutral-400">+91 97022 13322</p>
                                        <p className="text-neutral-400">+91 98335 12513</p>
                                    </div>
                                </div>

                                <div className="flex gap-6 items-start group">
                                    <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 flex-shrink-0 group-hover:bg-brand-green/20 transition-all">
                                        <MapPin className="w-6 h-6 text-brand-green" />
                                    </div>
                                    <div className="space-y-2">
                                        <h5 className="font-bold text-white text-lg">Visit Us</h5>
                                        <p className="text-neutral-400 leading-relaxed">
                                            Sector 10, Kharghar, <br />
                                            Navi Mumbai, Maharashtra, India.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-6 items-start group">
                                    <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 flex-shrink-0 group-hover:bg-brand-green/20 transition-all">
                                        <Clock className="w-6 h-6 text-brand-green" />
                                    </div>
                                    <div className="space-y-2">
                                        <h5 className="font-bold text-white text-lg">Working Hours</h5>
                                        <p className="text-neutral-400">Mon - Fri: 9:00 AM - 6:00 PM</p>
                                        <p className="text-neutral-400">Sat - Sun: Closed</p>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-8 flex justify-center">
                                <div className="inline-flex items-center gap-3 bg-brand-green/10 px-6 py-3 rounded-2xl border border-brand-green/20">
                                    <div className="w-2 h-2 rounded-full bg-brand-green animate-pulse"></div>
                                    <span className="text-brand-green text-sm font-bold uppercase tracking-wider">Live Support Available</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
