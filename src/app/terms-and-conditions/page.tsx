import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata = {
    title: 'Terms and Conditions | SecureLife Fincorp',
    description: 'Terms and Conditions for using SecureLife Fincorp services and website.',
    alternates: {
        canonical: 'https://www.securelifefincorp.com/terms-and-conditions',
    },
};

export default function TermsAndConditionsPage() {
    return (
        <main className="min-h-screen bg-white dark:bg-[#0a0a0a] text-gray-900 dark:text-white transition-colors duration-300">
            {/* Header */}
            <div className="bg-gradient-to-br from-brand-green/10 to-transparent dark:from-brand-green/5 pt-28 pb-16">
                <div className="max-w-4xl mx-auto px-5">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-brand-green hover:underline mb-6 font-medium"
                    >
                        <ArrowLeft size={18} />
                        Back to Home
                    </Link>
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                        Terms and <span className="text-brand-green">Conditions</span>
                    </h1>
                    <p className="text-neutral-600 dark:text-neutral-400">
                        Last updated: February 2, 2026
                    </p>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-4xl mx-auto px-5 py-16">
                <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">1. Introduction</h2>
                        <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                            Welcome to SecureLife Fincorp. These Terms and Conditions govern your use of our website and services. By accessing or using our services, you agree to be bound by these terms. If you disagree with any part of these terms, you may not access our services.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">2. Definitions</h2>
                        <ul className="list-disc pl-6 space-y-2 text-neutral-600 dark:text-neutral-400">
                            <li><strong className="text-gray-900 dark:text-white">"Company"</strong> refers to SecureLife Fincorp, its subsidiaries, and affiliates.</li>
                            <li><strong className="text-gray-900 dark:text-white">"Services"</strong> means all insurance products, financial advisory services, and related offerings provided by the Company.</li>
                            <li><strong className="text-gray-900 dark:text-white">"User"</strong> or <strong className="text-gray-900 dark:text-white">"You"</strong> refers to anyone who accesses or uses our website or services.</li>
                            <li><strong className="text-gray-900 dark:text-white">"Policy"</strong> refers to any insurance policy issued by or through the Company.</li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">3. Eligibility</h2>
                        <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                            To use our services, you must be at least 18 years old and legally capable of entering into binding contracts. By using our services, you represent and warrant that you meet these eligibility requirements.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">4. Insurance Services</h2>
                        <div className="space-y-3 text-neutral-600 dark:text-neutral-400">
                            <p className="leading-relaxed">
                                SecureLife Fincorp offers various insurance products including but not limited to:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Fire Insurance</li>
                                <li>Theft Insurance</li>
                                <li>Cyber Insurance</li>
                                <li>Health Insurance</li>
                                <li>Personal Accident Insurance</li>
                                <li>Financial Protection Plans</li>
                                <li>Machinery Breakdown Insurance</li>
                                <li>Employee Benefits Insurance</li>
                            </ul>
                            <p className="leading-relaxed">
                                All insurance policies are subject to their specific terms, conditions, and exclusions as stated in the policy documents.
                            </p>
                        </div>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">5. Premium Payments</h2>
                        <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                            Premium payments must be made as per the schedule specified in your policy documents. Failure to pay premiums on time may result in policy lapse or cancellation. The Company reserves the right to modify premium rates in accordance with applicable regulations.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">6. Claims Process</h2>
                        <div className="space-y-3 text-neutral-600 dark:text-neutral-400">
                            <p className="leading-relaxed">
                                In the event of a claim, you must:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Notify us promptly within the timeframe specified in your policy</li>
                                <li>Provide all necessary documentation and evidence</li>
                                <li>Cooperate fully with our investigation process</li>
                                <li>Not admit liability or make any payments without our prior consent</li>
                            </ul>
                        </div>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">7. User Responsibilities</h2>
                        <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                            You agree to provide accurate, current, and complete information when using our services. You are responsible for maintaining the confidentiality of your account information and for all activities conducted under your account.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">8. Intellectual Property</h2>
                        <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                            All content on this website, including text, graphics, logos, images, and software, is the property of SecureLife Fincorp and is protected by intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written permission.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">9. Limitation of Liability</h2>
                        <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                            To the maximum extent permitted by law, SecureLife Fincorp shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of our services. Our total liability shall not exceed the amount of premiums paid by you in the preceding 12 months.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">10. Dispute Resolution</h2>
                        <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                            Any disputes arising from these terms or our services shall be resolved through arbitration in accordance with the Arbitration and Conciliation Act, 1996. The seat of arbitration shall be Mumbai, India, and the proceedings shall be conducted in English.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">11. Governing Law</h2>
                        <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                            These Terms and Conditions shall be governed by and construed in accordance with the laws of India. The courts of Mumbai shall have exclusive jurisdiction over any disputes.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">12. Modifications</h2>
                        <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                            SecureLife Fincorp reserves the right to modify these Terms and Conditions at any time. Changes will be effective immediately upon posting on our website. Your continued use of our services after any modifications constitutes acceptance of the revised terms.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">13. Contact Information</h2>
                        <div className="bg-neutral-100 dark:bg-white/5 rounded-2xl p-6 border border-neutral-200 dark:border-white/10">
                            <p className="text-neutral-600 dark:text-neutral-400 mb-4">
                                If you have any questions about these Terms and Conditions, please contact us:
                            </p>
                            <div className="space-y-2 text-neutral-700 dark:text-neutral-300">
                                <p><strong>Email:</strong> legal@securelifefincorp.com</p>
                                <p><strong>Phone:</strong> +91 98765 43210</p>
                                <p><strong>Address:</strong> SecureLife Fincorp, Mumbai, Maharashtra, India</p>
                            </div>
                        </div>
                    </section>

                </div>
            </div>
        </main>
    );
}
