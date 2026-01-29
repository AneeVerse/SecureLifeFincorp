"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Plus, Minus } from 'lucide-react';

const faqs = [
    {
        question: "What types of business insurance do you offer?",
        answer: "We offer comprehensive coverage including Fire, Theft, Cyber, Health, Personal, Financial, Machinery, and Employee insurance. Our one-stop solution protects your business, people, and profits under a single risk management strategy."
    },
    {
        question: "How quickly can I get coverage for my business?",
        answer: "We provide quick approval with policies issued within 24 hours. Our streamlined process requires minimal paperwork, and our team handles everything from documentation to policy issuance."
    },
    {
        question: "What documents are required to get a quote?",
        answer: "Basic requirements include your business registration, GST certificate, and details about your operations and assets. Our advisors will guide you through the exact requirements based on your industry and coverage needs."
    },
    {
        question: "Do you provide claims support?",
        answer: "Yes, absolutely. Every client gets a dedicated relationship manager who provides end-to-end claims support. We have settled over ₹500 Crore in claims and pride ourselves on hassle-free claim processing."
    },
    {
        question: "Are there tax benefits for business insurance?",
        answer: "Yes, business insurance premiums are tax-deductible under Section 37(1) of the Income Tax Act. This means you can reduce your taxable income while protecting your business assets and employees."
    }
];


export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="w-full py-20 bg-white dark:bg-black transition-colors duration-300">
            <div className="max-w-[1250px] mx-auto px-5">
                <div className="grid lg:grid-cols-[1fr_400px] gap-12 lg:gap-20 items-start">

                    {/* Left Column: FAQ List */}
                    <div className="space-y-12">
                        <div className="space-y-4">
                            <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white leading-tight">
                                Frequently Asked <span className="bg-brand-green px-3 rounded-lg inline-block text-black">Questions</span>
                            </h2>
                            <p className="text-neutral-500 max-w-lg leading-relaxed">
                                Discover quick answers to common queries in our comprehensive Frequently Asked Questions section
                            </p>
                        </div>

                        <div className="divide-y divide-neutral-100 border-t border-neutral-100">
                            {faqs.map((faq, index) => (
                                <div key={index} className="py-6 overflow-hidden transition-all duration-300">
                                    <button
                                        onClick={() => toggleFAQ(index)}
                                        className="w-full flex justify-between items-center text-left group"
                                    >
                                        <span className={`text-xl font-bold transition-colors duration-300 ${openIndex === index ? 'text-brand-green' : 'text-black dark:text-white group-hover:text-brand-green'}`}>
                                            {faq.question}
                                        </span>
                                        <div className={`w-8 h-8 rounded-full border border-black/10 flex items-center justify-center transition-all duration-300 ${openIndex === index ? 'bg-brand-green text-black border-brand-green rotate-180' : 'text-black'}`}>
                                            {openIndex === index ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                                        </div>
                                    </button>

                                    <div
                                        className={`grid transition-all duration-300 ease-in-out ${openIndex === index ? 'grid-rows-[1fr] mt-4 opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                                    >
                                        <div className="overflow-hidden">
                                            <p className="text-neutral-500 leading-relaxed max-w-2xl">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: CTA Card */}
                    <div className="bg-[#FFFCEB] rounded-[40px] p-10 text-center space-y-8 sticky top-32 border border-yellow-100/50">
                        <div className="relative w-24 h-24 mx-auto">
                            <Image
                                src="/images/658d4f870fcc780457477c85_faq-cta-icon.svg"
                                alt="FAQ Icon"
                                fill
                                className="object-contain"
                            />
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-2xl md:text-3xl font-bold text-black">
                                You have different Questions?
                            </h3>
                            <p className="text-neutral-600 leading-relaxed text-sm lg:text-base">
                                Discover quick answers to common queries. Providing insights into all aspects of SecureLife.
                            </p>
                        </div>

                        <button className="w-full bg-[#0D121F] text-white py-4 rounded-xl font-bold text-lg transition-transform duration-300 hover:scale-[1.02] active:scale-[0.98]">
                            Get Started
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
}
