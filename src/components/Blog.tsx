import Image from 'next/image';
import Link from 'next/link';

const blogPosts = [
    {
        category: "Insurance",
        title: "Understanding your insurance needs",
        description: "Explore how to choose the right coverage that fits your life perfectly.",
        image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=800&auto=format&fit=crop",
    },
    {
        category: "Tips",
        title: "Tips for homeowners insurance",
        description: "Essential tips to ensure your home is properly covered against risks.",
        image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800&auto=format&fit=crop",
    },
    {
        category: "Finance",
        title: "Life Insurance basics explained",
        description: "A guide to understanding different types of life insurance and benefits.",
        image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=800&auto=format&fit=crop",
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
                                    <Link href="/blog" className="inline-flex items-center text-[10px] font-bold uppercase tracking-widest text-black dark:text-white hover:text-brand-green transition-colors">
                                        Learn More
                                        <span className="ml-2 w-4 h-[1px] bg-current transition-all group-hover:w-6"></span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View More Button */}
                <div className="text-center">
                    <Link href="/blog">
                        <button className="px-8 py-3 bg-black text-white rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-brand-green hover:text-black transition-all duration-300 active:scale-95 shadow-lg shadow-black/10">
                            View more
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
