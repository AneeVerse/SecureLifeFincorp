import Image from 'next/image';
import { Target, ShieldCheck, Star, CheckCircle } from 'lucide-react';

export function WhoWeAre() {
    return (
        <section id="about-us" className="w-full py-24 bg-[#0a0a0a] text-white overflow-hidden">
            <div className="max-w-[1250px] mx-auto px-5 flex flex-col lg:grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">

                {/* Text Content - Moved up on mobile */}
                <div className="space-y-10 order-1 lg:order-2">
                    <div className="space-y-6">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-[2px] bg-brand-green"></div>
                            <span className="text-brand-green font-bold uppercase tracking-[0.2em] text-sm">
                                Who We Are
                            </span>
                        </div>

                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                            Insurance Advisory for <span className="text-brand-green">Practical Decisions</span>
                        </h2>

                        <div className="space-y-4 text-neutral-400 text-base leading-relaxed max-w-xl">
                            <p className="font-semibold text-white text-lg">
                                SecureLife Fincorp is an insurance advisory firm focused on helping businesses make informed, practical insurance decisions.
                            </p>
                            <p>
                                We work with MSMEs, professionals, and growing companies across Mumbai & Navi Mumbai to structure insurance that is relevant to actual operations, easy to understand, and designed to work at claim time.
                            </p>
                            <p className="text-brand-green font-medium">
                                No unnecessary policies. No pressure to buy.
                            </p>
                        </div>
                    </div>

                    <div className="space-y-6 pt-4">
                        {/* Feature 1 */}
                        <div className="flex gap-4 items-start">
                            <div className="w-6 h-6 rounded-full bg-brand-green/20 flex items-center justify-center flex-shrink-0 mt-1">
                                <CheckCircle className="w-4 h-4 text-brand-green" />
                            </div>
                            <p className="text-neutral-300">
                                <span className="font-semibold text-white">Relevant to actual operations</span> — Coverage that matches what your business actually does
                            </p>
                        </div>

                        {/* Feature 2 */}
                        <div className="flex gap-4 items-start">
                            <div className="w-6 h-6 rounded-full bg-brand-green/20 flex items-center justify-center flex-shrink-0 mt-1">
                                <CheckCircle className="w-4 h-4 text-brand-green" />
                            </div>
                            <p className="text-neutral-300">
                                <span className="font-semibold text-white">Easy to understand</span> — Clear explanations, no jargon
                            </p>
                        </div>

                        {/* Feature 3 */}
                        <div className="flex gap-4 items-start">
                            <div className="w-6 h-6 rounded-full bg-brand-green/20 flex items-center justify-center flex-shrink-0 mt-1">
                                <CheckCircle className="w-4 h-4 text-brand-green" />
                            </div>
                            <p className="text-neutral-300">
                                <span className="font-semibold text-white">Designed to work at claim time</span> — When it matters most
                            </p>
                        </div>
                    </div>
                </div>

                {/* Left Side: Image Visuals - Moved down on mobile */}
                <div className="relative order-2 lg:order-1 w-full">
                    {/* Decorative background shape */}
                    <div className="absolute top-10 left-[-20px] w-full h-full bg-brand-green/10 rounded-[40px] rotate-[-6deg] z-0 border border-brand-green/20"></div>

                    {/* Main Image */}
                    <div className="relative z-10 rounded-[32px] overflow-hidden shadow-2xl border border-white/10">
                        <Image
                            src="/images/who we are.jpg"
                            alt="Team meeting"
                            width={600}
                            height={700}
                            className="object-cover h-[280px] sm:h-[400px] lg:h-[600px] w-full"
                        />
                    </div>

                    {/* Floating Review Card - Hidden on small mobile to prevent overflow */}
                    <div className="hidden sm:block absolute bottom-10 -right-4 lg:-right-10 z-20 bg-white p-6 rounded-2xl shadow-xl max-w-[240px] animate-fade-in-up">
                        <div className="flex -space-x-3 mb-4">
                            {[
                                "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&h=100&auto=format&fit=crop",
                                "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&h=100&auto=format&fit=crop",
                                "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&h=100&auto=format&fit=crop",
                                "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&h=100&auto=format&fit=crop"
                            ].map((url, i) => (
                                <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-neutral-200 overflow-hidden relative">
                                    <Image src={url} alt="user" fill className="object-cover" />
                                </div>
                            ))}
                            <div className="w-10 h-10 rounded-full border-2 border-white bg-black text-white flex items-center justify-center text-xs font-bold">
                                100+
                            </div>
                        </div>
                        <p className="text-black font-bold text-lg mb-1">Trusted by MSMEs</p>
                        <div className="flex gap-1">
                            {[1, 2, 3, 4, 5].map((s) => (
                                <Star key={s} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
