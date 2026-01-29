'use client';

import { Building2, Shield, TrendingUp, Users } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';

const stats = [
    {
        value: 5000,
        suffix: '+',
        label: 'Businesses Protected',
        icon: Building2,
    },
    {
        value: 500,
        suffix: 'Cr+',
        label: 'Claims Settled',
        icon: TrendingUp,
    },
    {
        value: 15,
        suffix: '+',
        label: 'Years Experience',
        icon: Shield,
    },
    {
        value: 50,
        suffix: '+',
        label: 'Insurance Partners',
        icon: Users,
    },
];

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLDivElement>(null);
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !hasAnimated) {
                    setHasAnimated(true);
                    let start = 0;
                    const duration = 2000;
                    const increment = value / (duration / 16);

                    const timer = setInterval(() => {
                        start += increment;
                        if (start >= value) {
                            setCount(value);
                            clearInterval(timer);
                        } else {
                            setCount(Math.floor(start));
                        }
                    }, 16);
                }
            },
            { threshold: 0.5 }
        );

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [value, hasAnimated]);

    return (
        <div ref={ref} className="text-4xl md:text-5xl font-black text-brand-green">
            {suffix === 'Cr+' ? '₹' : ''}{count}{suffix}
        </div>
    );
}

export function TrustStats() {
    return (
        <section className="w-full py-16 bg-black text-white">
            <div className="max-w-[1250px] mx-auto px-5">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                    {stats.map((stat, index) => {
                        const Icon = stat.icon;
                        return (
                            <div key={index} className="text-center group">
                                <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-brand-green/10 flex items-center justify-center group-hover:bg-brand-green/20 transition-colors">
                                    <Icon className="w-7 h-7 text-brand-green" />
                                </div>
                                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                                <p className="text-gray-400 text-sm mt-2 font-medium">{stat.label}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
