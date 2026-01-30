'use client';

import Image from 'next/image';
import Link from 'next/link';

const blogPosts = [
    {
        category: "Fire Insurance",
        title: "Protect your business from fire hazards",
        description: "Learn how fire insurance safeguards your property and assets from unexpected fire-related damages.",
        image: "/images/service/fire.png",
    },
    {
        category: "Cyber Insurance",
        title: "Why cyber insurance is essential today",
        description: "Understand how cyber insurance protects your business from data breaches and digital threats.",
        image: "/images/service/cyber.png",
    },
    {
        category: "Health Insurance",
        title: "Choosing the right health coverage",
        description: "A comprehensive guide to selecting health insurance plans that fit your family's needs.",
        image: "/images/service/health.png",
    }
];

export function Blog() {
    return (
        <section className="w-full py-16 bg-white dark:bg-[#0a0a0a] transition-colors duration-300">
            <div className="max-w-[1250px] mx-auto px-5">

                {/* Header */}
                <div className="text-center space-y-3 mb-12">
                    <div className="inline-block bg-brand-green/10 px-4 py-1 rounded-full">
                        <span className="text-brand-green font-bold uppercase tracking-widest text-[10px]">
                            Articles
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-black dark:text-white tracking-tight max-w-2xl mx-auto leading-tight">
                        Insurance <span className="bg-brand-green px-3 rounded-lg inline-block text-black">insights and tips</span>
                    </h2>
                </div>

                {/* Blog Grid - Horizontal Scroll on Mobile, Grid on Desktop */}
                <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 overflow-x-auto md:overflow-x-visible pb-8 md:pb-0 scrollbar-hide px-5 -mx-5 md:px-0 md:mx-0 snap-x snap-mandatory">
                    {blogPosts.map((post, index) => (
                        <div key={index} className="group flex-shrink-0 w-[85vw] sm:w-[45vw] md:w-auto flex flex-col bg-neutral-50 dark:bg-[#0a0a0a] rounded-[28px] overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-neutral-100 dark:border-white/5 snap-center">
                            {/* Image */}
                            <div className="relative h-[200px] w-full overflow-hidden">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-6 flex-grow space-y-3">
                                <div className="inline-block bg-neutral-200/50 dark:bg-white/5 px-3 py-1 rounded-md">
                                    <span className="text-[10px] font-bold text-neutral-600 dark:text-neutral-400 uppercase tracking-wider">{post.category}</span>
                                </div>

                                <h3 className="text-xl font-bold text-black dark:text-white leading-snug group-hover:text-brand-green transition-colors line-clamp-2">
                                    {post.title}
                                </h3>

                                <p className="text-neutral-500 dark:text-neutral-400 leading-relaxed text-xs line-clamp-2">
                                    {post.description}
                                </p>

                                <div className="pt-3 mt-auto border-t border-neutral-200/60 dark:border-white/5">
                                    <button
                                        onClick={() => window.dispatchEvent(new CustomEvent('open-contact'))}
                                        className="inline-flex items-center text-[10px] font-bold uppercase tracking-widest text-black dark:text-white hover:text-brand-green transition-colors"
                                    >
                                        Learn More
                                        <span className="ml-2 w-4 h-[1px] bg-current transition-all group-hover:w-6"></span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center">
                    <button
                        onClick={() => window.dispatchEvent(new CustomEvent('open-contact'))}
                        className="px-8 py-3 bg-black text-white rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-brand-green hover:text-black transition-all duration-300 active:scale-95 shadow-lg shadow-black/10"
                    >
                        View more
                    </button>
                </div>
            </div>
        </section>
    );
}
