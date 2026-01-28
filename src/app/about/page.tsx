import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Image from "next/image";
import { Target, Users, Rocket } from "lucide-react";

export default function AboutPage() {
    return (
        <main className="bg-white dark:bg-black min-h-screen transition-colors duration-300">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-40 pb-20 px-5 bg-neutral-50 dark:bg-[#0a0a0a] relative overflow-hidden transition-colors duration-300">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-green/10 -z-10 rounded-bl-[200px]"></div>
                <div className="max-w-[1250px] mx-auto grid lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8 animate-fade-in text-black dark:text-white">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-[2px] bg-brand-green"></div>
                            <span className="text-black/50 dark:text-white/50 font-bold uppercase tracking-[0.2em] text-xs">
                                Empowerment
                            </span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight">
                            Empowering Small Businesses Through <span className="text-brand-green">Financial Expertise</span>
                        </h1>
                    </div>
                    <div className="relative h-[500px] rounded-[40px] overflow-hidden shadow-2xl">
                        <Image
                            src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop"
                            alt="Team collaborating"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* Our Story Section */}
            <section className="py-24 px-5 bg-white dark:bg-black transition-colors duration-300">
                <div className="max-w-[1250px] mx-auto grid lg:grid-cols-[450px_1fr] gap-20 items-start">
                    <div className="space-y-6 sticky top-32 text-black dark:text-white">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-[2px] bg-brand-green"></div>
                            <span className="text-black/50 dark:text-white/50 font-bold uppercase tracking-[0.2em] text-xs">Our Story</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold">
                            The Journey of SecureLife Fincorp
                        </h2>
                    </div>
                    <div className="space-y-12">
                        <div className="relative h-[400px] rounded-[40px] overflow-hidden shadow-xl mb-12 border border-black/5 dark:border-white/5">
                            <Image
                                src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1200&auto=format&fit=crop"
                                alt="Office space"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="prose prose-xl max-w-none space-y-8 text-neutral-600 dark:text-neutral-400">
                            <p className="text-xl leading-relaxed">
                                Founded in Navi Mumbai, SecureLife Fincorp emerged from a deep commitment to support small businesses. Our journey reflects a dedication to fostering financial empowerment amidst challenges, continuously evolving to serve our clients better and adapting our services to meet the demands of an ever-changing economic landscape.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Who We Are & Expertise (Explicit Dark Section) */}
            <section className="py-24 px-5 bg-[#0a0a0a] dark:bg-[#050505] text-white transition-colors duration-300 border-y border-white/5">
                <div className="max-w-[1250px] mx-auto space-y-32">
                    {/* Who We Are */}
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div className="space-y-8">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-[2px] bg-brand-green"></div>
                                <span className="text-brand-green font-bold uppercase tracking-[0.2em] text-sm">Who We Are</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                                Your Partners in <span className="text-brand-green">Financial Success</span>
                            </h2>
                            <div className="space-y-6 text-neutral-400 text-lg">
                                <p className="text-white font-semibold text-xl">Helping clients achieve financial stability and wealth through tailored strategies.</p>
                                <p>
                                    SecureLife Fincorp is dedicated to assisting entrepreneurs navigate financial complexities. Our expert advisors utilize proven methodologies to ensure a secure financial future, helping clients optimize cash-flow and leverage comprehensive insurance solutions for lasting peace of mind and growth.
                                </p>
                            </div>
                        </div>
                        <div className="relative h-[550px] rounded-[40px] overflow-hidden border border-white/10">
                            <Image
                                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200&auto=format&fit=crop"
                                alt="Advisor meeting"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    {/* Expertise */}
                    <div className="grid lg:grid-cols-[1fr_500px] gap-20 items-center">
                        <div className="relative h-[450px] rounded-[40px] overflow-hidden order-last lg:order-first border border-white/5">
                            <Image
                                src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1200&auto=format&fit=crop"
                                alt="Expertise"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="space-y-8">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-[2px] bg-brand-green"></div>
                                <span className="text-brand-green font-bold uppercase tracking-[0.2em] text-sm">Our Expertise</span>
                            </div>
                            <h2 className="text-4xl font-bold leading-tight">Years of Experience and <span className="text-brand-green">Proven Results</span></h2>
                            <p className="text-neutral-400 text-lg leading-relaxed">
                                With years of experience in financial consulting and insurance services, SecureLife Fincorp has successfully guided countless small businesses to achieve financial stability. Our client-centric approach and proven track record underline our commitment to excellence and innovation in the financial industry.
                            </p>
                            <div className="grid grid-cols-2 gap-8 pt-6">
                                <div className="space-y-2">
                                    <div className="text-4xl font-bold text-brand-green">10+</div>
                                    <div className="text-sm text-neutral-500 uppercase tracking-widest font-bold">Years Experience</div>
                                </div>
                                <div className="space-y-2">
                                    <div className="text-4xl font-bold text-brand-green">500+</div>
                                    <div className="text-sm text-neutral-500 uppercase tracking-widest font-bold">Clients Served</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Values */}
            <section className="py-24 px-5 bg-white dark:bg-black transition-colors duration-300">
                <div className="max-w-[1250px] mx-auto grid md:grid-cols-2 gap-12">
                    {/* Mission */}
                    <div className="bg-neutral-50 dark:bg-[#0a0a0a] p-12 rounded-[50px] space-y-8 border border-neutral-100 dark:border-white/5 hover:shadow-2xl transition-all duration-500">
                        <div className="w-16 h-16 bg-brand-green rounded-2xl flex items-center justify-center">
                            <Target className="text-black w-8 h-8" />
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-3xl font-bold text-black dark:text-white italic">Mission</h3>
                            <h4 className="text-xl font-bold text-neutral-800 dark:text-neutral-200">Our Commitment to Financial Security</h4>
                            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                                At SecureLife Fincorp, our mission is to empower small business owners by providing expert financial consulting and insurance services. We are committed to delivering tailored solutions that inspire confidence and foster financial security in an ever-changing economic environment.
                            </p>
                        </div>
                    </div>

                    {/* Vision */}
                    <div className="bg-black dark:bg-[#050505] p-12 rounded-[50px] space-y-8 border border-white/5 hover:shadow-2xl transition-all duration-500 group">
                        <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center group-hover:bg-brand-green transition-colors">
                            <Rocket className="text-black w-8 h-8" />
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-3xl font-bold text-brand-green italic">Values</h3>
                            <h4 className="text-xl font-bold text-white">Our Vision for Financial Empowerment</h4>
                            <p className="text-neutral-400 leading-relaxed">
                                We envision a future where every entrepreneur is equipped with the financial knowledge and resources to thrive. Our goal is to lead the industry in comprehensive financial planning and insurance solutions, transforming the way businesses manage their finances and enhance their capabilities.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
