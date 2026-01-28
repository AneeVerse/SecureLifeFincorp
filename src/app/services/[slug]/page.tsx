import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Check, ArrowRight } from "lucide-react";
import { notFound } from "next/navigation";

const servicesData = [
    {
        slug: "personal-financial-planning",
        title: "Personal Financial Planning",
        subtitle: "Your Path to Financial Freedom",
        description: "Customized strategies to help individuals secure financial stability and meet life goals.",
        longDescription: "Our personal financial planning services are designed to help you take control of your financial future. We work closely with you to understand your unique circumstances, goals, and risk tolerance to create a comprehensive plan that addresses all aspects of your financial life.",
        image: "/images/service/pexels-photo-4308045.jpeg",
        features: [
            "Comprehensive financial assessment",
            "Goal-based investment strategies",
            "Retirement planning & projections",
            "Debt management solutions",
            "Emergency fund planning",
            "Estate planning guidance"
        ],
        benefits: [
            { title: "Clarity", description: "Get a clear picture of your current financial situation and future potential." },
            { title: "Confidence", description: "Make informed decisions backed by professional analysis and advice." },
            { title: "Growth", description: "Maximize your wealth growth through strategic planning and investments." }
        ]
    },
    {
        slug: "business-financial-planning",
        title: "Business Financial Planning",
        subtitle: "Empowering Your Business Success",
        description: "Helping business owners optimize cash-flow and navigate financial challenges.",
        longDescription: "Our business financial planning services provide comprehensive solutions to help your business thrive. From cash flow optimization to strategic growth planning, we partner with you to ensure your business finances are structured for success.",
        image: "/images/service/pexels-photo-6476260.jpeg",
        features: [
            "Cash flow analysis & optimization",
            "Business budgeting & forecasting",
            "Tax-efficient business structures",
            "Risk management strategies",
            "Growth & expansion planning",
            "Succession planning"
        ],
        benefits: [
            { title: "Efficiency", description: "Streamline your financial operations for maximum efficiency." },
            { title: "Stability", description: "Build a stable financial foundation that supports sustainable growth." },
            { title: "Scalability", description: "Prepare your finances for scaling and expansion opportunities." }
        ]
    },
    {
        slug: "insurance-services",
        title: "Insurance Services",
        subtitle: "Protection for What Matters Most",
        description: "Ensuring you and your business are protected against unforeseen risks.",
        longDescription: "Our comprehensive insurance services provide the protection you need for peace of mind. We analyze your unique situation to recommend coverage that adequately protects you, your family, and your assets against life's uncertainties.",
        image: "/images/service/pexels-photo-7567432.jpeg",
        features: [
            "Life insurance solutions",
            "Health & medical coverage",
            "Property & casualty insurance",
            "Business liability insurance",
            "Disability income protection",
            "Long-term care planning"
        ],
        benefits: [
            { title: "Security", description: "Rest easy knowing you're protected against unexpected events." },
            { title: "Customized", description: "Coverage tailored to your specific needs and circumstances." },
            { title: "Support", description: "Expert guidance through claims and policy management." }
        ]
    },
    {
        slug: "tax-investment-options",
        title: "Tax & Investment Options",
        subtitle: "Maximize Returns, Minimize Taxes",
        description: "Diverse options tailored to your risk profile and financial goals.",
        longDescription: "Our tax and investment services help you build wealth while minimizing your tax burden. We offer a wide range of investment options and tax-efficient strategies designed to align with your financial objectives and risk tolerance.",
        image: "/images/service/pexels-photo-8297031.jpeg",
        features: [
            "Tax planning & optimization",
            "Investment portfolio management",
            "Retirement account strategies",
            "Capital gains management",
            "Tax-loss harvesting",
            "Estate tax planning"
        ],
        benefits: [
            { title: "Savings", description: "Reduce your tax liability through strategic planning and deductions." },
            { title: "Growth", description: "Grow your investments with professionally managed portfolios." },
            { title: "Flexibility", description: "Adapt your strategy as your life circumstances change." }
        ]
    }
];

export function generateStaticParams() {
    return servicesData.map((service) => ({
        slug: service.slug,
    }));
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const service = servicesData.find((s) => s.slug === slug);

    if (!service) {
        notFound();
    }

    // Get other services for the "More Services" section
    const otherServices = servicesData.filter((s) => s.slug !== slug).slice(0, 3);

    return (
        <main>
            <Navbar />

            {/* Hero Section */}
            <section className="w-full min-h-[70vh] flex items-center justify-center pt-[100px] pb-16 bg-white dark:bg-[#0a0a0a] transition-colors duration-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-green/5 to-transparent dark:from-brand-green/10"></div>
                <div className="max-w-[1250px] mx-auto px-5 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Content */}
                        <div className="space-y-6">
                            <Link href="/services" className="inline-flex items-center gap-2 text-sm font-medium text-neutral-500 hover:text-brand-green transition-colors">
                                <ArrowLeft className="w-4 h-4" />
                                Back to Services
                            </Link>
                            <div className="space-y-4">
                                <span className="inline-block bg-brand-green/10 text-brand-green px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
                                    {service.subtitle}
                                </span>
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black dark:text-white leading-tight">
                                    {service.title}
                                </h1>
                                <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-lg">
                                    {service.longDescription}
                                </p>
                            </div>
                            <div className="flex flex-wrap gap-4 pt-4">
                                <Link href="/contact">
                                    <button className="bg-black dark:bg-white text-white dark:text-black px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-widest hover:bg-brand-green hover:text-black transition-all duration-300 shadow-lg">
                                        Get Started
                                    </button>
                                </Link>
                                <Link href="/contact">
                                    <button className="border-2 border-black dark:border-white text-black dark:text-white px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-widest hover:border-brand-green hover:text-brand-green transition-all duration-300">
                                        Contact Us
                                    </button>
                                </Link>
                            </div>
                        </div>

                        {/* Image */}
                        <div className="relative h-[400px] lg:h-[500px] rounded-[32px] overflow-hidden shadow-2xl">
                            <Image
                                src={service.image}
                                alt={service.title}
                                fill
                                className="object-cover"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="w-full py-20 bg-neutral-50 dark:bg-[#111] transition-colors duration-300">
                <div className="max-w-[1250px] mx-auto px-5">
                    <div className="text-center mb-16">
                        <span className="inline-block bg-brand-green/10 text-brand-green px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
                            What We Offer
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white">
                            Key Features
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {service.features.map((feature, index) => (
                            <div key={index} className="bg-white dark:bg-black/50 p-6 rounded-2xl border border-neutral-100 dark:border-white/10 hover:border-brand-green/50 transition-all duration-300 hover:shadow-lg group">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-brand-green/10 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-green transition-colors duration-300">
                                        <Check className="w-5 h-5 text-brand-green group-hover:text-black transition-colors duration-300" />
                                    </div>
                                    <p className="text-lg font-semibold text-black dark:text-white pt-1.5">{feature}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="w-full py-20 bg-white dark:bg-[#0a0a0a] transition-colors duration-300">
                <div className="max-w-[1250px] mx-auto px-5">
                    <div className="text-center mb-16">
                        <span className="inline-block bg-brand-green/10 text-brand-green px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
                            Why Choose Us
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white">
                            Benefits of Our Service
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {service.benefits.map((benefit, index) => (
                            <div key={index} className="text-center p-8 rounded-3xl bg-gradient-to-b from-brand-green/5 to-transparent border border-brand-green/10 hover:border-brand-green/30 transition-all duration-300">
                                <div className="w-16 h-16 rounded-2xl bg-brand-green mx-auto mb-6 flex items-center justify-center text-2xl font-bold text-black">
                                    {index + 1}
                                </div>
                                <h3 className="text-2xl font-bold text-black dark:text-white mb-3">{benefit.title}</h3>
                                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="w-full py-20 bg-brand-green">
                <div className="max-w-[1250px] mx-auto px-5 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold text-black mb-6">
                        Ready to Get Started?
                    </h2>
                    <p className="text-black/70 text-lg mb-10 max-w-2xl mx-auto">
                        Contact us today to schedule a consultation and discover how our {service.title.toLowerCase()} services can help you achieve your goals.
                    </p>
                    <Link href="/contact">
                        <button className="bg-black text-white px-10 py-5 rounded-2xl font-bold text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 shadow-xl">
                            Schedule a Consultation
                        </button>
                    </Link>
                </div>
            </section>

            {/* More Services */}
            <section className="w-full py-20 bg-white dark:bg-[#0a0a0a] transition-colors duration-300">
                <div className="max-w-[1250px] mx-auto px-5">
                    <div className="text-center mb-16">
                        <span className="inline-block bg-brand-green/10 text-brand-green px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
                            Explore More
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white">
                            Other Services
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {otherServices.map((otherService, index) => (
                            <Link key={index} href={`/services/${otherService.slug}`} className="group relative h-[300px] rounded-[24px] overflow-hidden">
                                <Image
                                    src={otherService.image}
                                    alt={otherService.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                                <div className="absolute bottom-0 left-0 right-0 p-6">
                                    <h3 className="text-xl font-bold text-white mb-2">{otherService.title}</h3>
                                    <div className="flex items-center gap-2 text-brand-green text-sm font-semibold opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                                        Learn More <ArrowRight className="w-4 h-4" />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
