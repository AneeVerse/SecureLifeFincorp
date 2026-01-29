'use client';

import { AlertTriangle, Shield, ArrowRight } from 'lucide-react';

const painPoints = [
    {
        hook: '75% of Mumbai MSMEs are underinsured',
        detail: 'Most small business owners discover gaps in their coverage only after a major loss. Don\'t be one of them.',
    },
    {
        hook: 'If Your Network Goes Down for 1 Day, Can Your Business Survive?',
        detail: 'Cyber attacks, data breaches, and IT failures can halt operations instantly. Digital protection is no longer optional.',
    },
    {
        hook: 'Hackers Don\'t Target Corporates First — They Target MSMEs',
        detail: 'Small businesses are easier targets with weaker defenses. Cyber insurance protects your data, clients, and reputation.',
    },
    {
        hook: 'One Fire Incident Can Wipe Out Years of Hard Work',
        detail: 'Fire, theft, or natural disasters can destroy inventory, equipment, and your livelihood in hours.',
    },
];

export function PainPoints() {
    return (
        <section className="w-full py-24 bg-black text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 left-0 w-96 h-96 bg-brand-green rounded-full blur-[150px]"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-500 rounded-full blur-[150px]"></div>
            </div>

            <div className="max-w-[1250px] mx-auto px-5 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/20 rounded-full px-4 py-2 mb-6">
                        <AlertTriangle className="w-4 h-4 text-red-500" />
                        <span className="text-red-400 text-sm font-medium">Business Risk Alert</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight max-w-3xl mx-auto">
                        Are You Prepared for the <span className="text-red-400">Unexpected?</span>
                    </h2>
                </div>

                {/* Pain Points Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                    {painPoints.map((point, index) => (
                        <div
                            key={index}
                            className="group bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-brand-green/50 hover:bg-white/10 transition-all duration-300"
                        >
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-xl bg-red-500/20 flex items-center justify-center flex-shrink-0">
                                    <span className="text-red-400 font-bold">{index + 1}</span>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-white mb-2 leading-tight">
                                        "{point.hook}"
                                    </h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        {point.detail}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="text-center">
                    <button
                        onClick={() => window.dispatchEvent(new CustomEvent('open-contact'))}
                        className="inline-flex items-center gap-3 bg-brand-green text-black font-bold px-8 py-4 rounded-xl shadow-lg shadow-brand-green/30 hover:brightness-105 active:scale-[0.98] transition-all"
                    >
                        <Shield className="w-5 h-5" />
                        Protect Your Business Now
                        <ArrowRight className="w-5 h-5" />
                    </button>
                    <p className="text-gray-500 text-sm mt-4">Free consultation • No obligations • Expert advice</p>
                </div>
            </div>
        </section>
    );
}
