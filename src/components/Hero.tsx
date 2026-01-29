'use client';

import Image from 'next/image';

export function Hero() {
    // Contact modal is now handled globally in the Footer/Layout via 'open-contact' event

    return (
        <>
            <section
                className="w-full flex items-center justify-center p-4 sm:p-5 pt-[80px] md:pt-[100px] bg-white dark:bg-[#0a0a0a] transition-colors duration-300"
                style={{
                    height: 'clamp(550px, calc(100svh - 20px), 100svh)',
                    maxHeight: '100svh'
                }}
            >
                <div className="w-full max-w-[1400px] relative h-full">
                    <div
                        className="w-full h-full bg-brand-green rounded-[32px] sm:rounded-[40px] relative overflow-hidden px-5 sm:px-6 md:px-20 pt-4 md:pt-20 pb-2 md:pb-0 flex flex-col items-center md:items-start justify-center md:justify-start"
                    >
                        {/* Text Content - Vertically centered on mobile */}
                        <div className="max-w-[700px] z-10 text-center md:text-left relative flex-shrink-0">
                            <h1
                                className="font-bold leading-[1.15] text-black"
                                style={{ fontSize: 'clamp(1.4rem, 5vw, 4.5rem)', marginBottom: 'clamp(0.4rem, 1vh, 1.5rem)' }}
                            >
                                A perfect <span className="bg-white text-black px-2 sm:px-3 md:px-4 rounded-lg inline-block">insurance</span> plan created just for you.
                            </h1>
                            <p
                                className="leading-relaxed text-black/80 max-w-[350px] sm:max-w-[500px] mx-auto md:mx-0"
                                style={{ fontSize: 'clamp(0.7rem, 2vw, 1.125rem)', marginBottom: 'clamp(0.6rem, 1.5vh, 2.5rem)' }}
                            >
                                Customized strategies to help you secure financial stability, protect your assets, and grow your wealth.
                            </p>

                            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-2 sm:gap-3 md:gap-5">
                                <button
                                    onClick={() => window.dispatchEvent(new CustomEvent('open-contact'))}
                                    className="bg-black text-white rounded-[10px] sm:rounded-[14px] font-semibold transition-all hover:bg-neutral-800 hover:-translate-y-0.5 active:scale-95"
                                    style={{ padding: 'clamp(0.5rem, 1.2vh, 1.125rem) clamp(1.25rem, 4vw, 2.25rem)', fontSize: 'clamp(0.7rem, 2vw, 1.125rem)' }}
                                >
                                    Get insurance
                                </button>
                                <button
                                    onClick={() => window.dispatchEvent(new CustomEvent('open-contact'))}
                                    className="bg-transparent text-black border border-black rounded-[10px] sm:rounded-[14px] font-semibold transition-all hover:bg-black/5 hover:-translate-y-0.5 active:scale-95"
                                    style={{ padding: 'clamp(0.5rem, 1.2vh, 1.125rem) clamp(1.25rem, 4vw, 2.25rem)', fontSize: 'clamp(0.7rem, 2vw, 1.125rem)' }}
                                >
                                    Contact us
                                </button>
                            </div>
                        </div>

                        {/* Hero Image - Fixed at bottom */}
                        <div className="absolute bottom-0 left-0 right-0 flex items-end justify-center md:justify-end md:right-10 lg:right-20 pointer-events-none">
                            <Image
                                src="/images/hero-bg.png"
                                alt="Insurance Illustration"
                                width={1000}
                                height={580}
                                priority
                                className="w-auto object-contain object-bottom"
                                style={{
                                    height: 'clamp(140px, 32vh, 650px)',
                                    maxHeight: '45%'
                                }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Modal is handled globally */}
        </>
    );
}
