import Link from 'next/link';
import { ArrowLeft, Shield, Lock, Eye, UserCheck } from 'lucide-react';

export const metadata = {
    title: 'Privacy Policy | SecureLife Fincorp',
    description: 'Privacy Policy for SecureLife Fincorp - Learn how we collect, use, and protect your personal information.',
    alternates: {
        canonical: 'https://www.securelifefincorp.com/privacy-policy',
    },
};

export default function PrivacyPolicyPage() {
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
                        Privacy <span className="text-brand-green">Policy</span>
                    </h1>
                    <p className="text-neutral-600 dark:text-neutral-400">
                        Last updated: February 2, 2026
                    </p>
                </div>
            </div>

            {/* Trust Badges */}
            <div className="max-w-4xl mx-auto px-5 -mt-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                        { icon: Shield, label: 'Data Protected' },
                        { icon: Lock, label: 'Encrypted' },
                        { icon: Eye, label: 'Transparent' },
                        { icon: UserCheck, label: 'Your Control' },
                    ].map((item, i) => (
                        <div key={i} className="bg-white dark:bg-white/5 border border-neutral-200 dark:border-white/10 rounded-xl p-4 flex items-center gap-3">
                            <div className="w-10 h-10 bg-brand-green/10 rounded-lg flex items-center justify-center">
                                <item.icon className="w-5 h-5 text-brand-green" />
                            </div>
                            <span className="text-sm font-semibold text-neutral-700 dark:text-neutral-300">{item.label}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Content */}
            <div className="max-w-4xl mx-auto px-5 py-16">
                <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">1. Introduction</h2>
                        <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                            SecureLife Fincorp ("we," "our," or "us") is committed to protecting your privacy and personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our insurance services.
                        </p>
                        <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                            We comply with applicable data protection laws including the Information Technology Act, 2000 and the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">2. Information We Collect</h2>
                        <div className="space-y-4 text-neutral-600 dark:text-neutral-400">
                            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">2.1 Personal Information</h3>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Full name, date of birth, and gender</li>
                                <li>Contact information (email, phone number, address)</li>
                                <li>Identity documents (PAN, Aadhaar, passport)</li>
                                <li>Financial information for premium payments</li>
                                <li>Health information (for health-related insurance)</li>
                                <li>Employment details and income information</li>
                            </ul>

                            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 pt-4">2.2 Technical Information</h3>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>IP address and browser type</li>
                                <li>Device information and operating system</li>
                                <li>Pages visited and time spent on our website</li>
                                <li>Cookies and similar tracking technologies</li>
                            </ul>
                        </div>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">3. How We Use Your Information</h2>
                        <ul className="list-disc pl-6 space-y-2 text-neutral-600 dark:text-neutral-400">
                            <li>To process and underwrite insurance applications</li>
                            <li>To administer and manage your insurance policies</li>
                            <li>To process claims and payments</li>
                            <li>To communicate with you about your policies and services</li>
                            <li>To comply with legal and regulatory requirements</li>
                            <li>To detect and prevent fraud</li>
                            <li>To improve our products and services</li>
                            <li>To send promotional communications (with your consent)</li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">4. Information Sharing</h2>
                        <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                            We may share your information with:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-neutral-600 dark:text-neutral-400">
                            <li><strong className="text-gray-900 dark:text-white">Insurance Partners:</strong> Underwriters and reinsurers for policy issuance and claims</li>
                            <li><strong className="text-gray-900 dark:text-white">Service Providers:</strong> Third parties who assist with our operations</li>
                            <li><strong className="text-gray-900 dark:text-white">Regulatory Bodies:</strong> IRDAI and other government authorities as required</li>
                            <li><strong className="text-gray-900 dark:text-white">Legal Requirements:</strong> When required by law or legal process</li>
                            <li><strong className="text-gray-900 dark:text-white">Business Transfers:</strong> In the event of merger, acquisition, or sale</li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">5. Data Security</h2>
                        <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                            We implement robust security measures to protect your personal information:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                            {[
                                { title: 'Encryption', desc: 'SSL/TLS encryption for data in transit' },
                                { title: 'Access Control', desc: 'Role-based access to sensitive data' },
                                { title: 'Monitoring', desc: '24/7 security monitoring and audits' },
                                { title: 'Secure Storage', desc: 'Data stored in secure, encrypted databases' },
                            ].map((item, i) => (
                                <div key={i} className="bg-neutral-50 dark:bg-white/5 rounded-xl p-4 border border-neutral-200 dark:border-white/10">
                                    <h4 className="font-bold text-gray-900 dark:text-white mb-1">{item.title}</h4>
                                    <p className="text-sm text-neutral-600 dark:text-neutral-400">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">6. Your Rights</h2>
                        <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                            You have the following rights regarding your personal information:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-neutral-600 dark:text-neutral-400">
                            <li><strong className="text-gray-900 dark:text-white">Access:</strong> Request a copy of your personal data</li>
                            <li><strong className="text-gray-900 dark:text-white">Correction:</strong> Request correction of inaccurate information</li>
                            <li><strong className="text-gray-900 dark:text-white">Deletion:</strong> Request deletion of your data (subject to legal requirements)</li>
                            <li><strong className="text-gray-900 dark:text-white">Withdrawal of Consent:</strong> Withdraw consent for marketing communications</li>
                            <li><strong className="text-gray-900 dark:text-white">Data Portability:</strong> Request transfer of your data</li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">7. Cookies Policy</h2>
                        <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                            Our website uses cookies to enhance your browsing experience. Cookies are small text files stored on your device that help us:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-neutral-600 dark:text-neutral-400">
                            <li>Remember your preferences and settings</li>
                            <li>Analyze website traffic and usage patterns</li>
                            <li>Provide personalized content and recommendations</li>
                            <li>Enable certain website functionalities</li>
                        </ul>
                        <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                            You can manage cookie preferences through your browser settings. Disabling certain cookies may affect website functionality.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">8. Data Retention</h2>
                        <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                            We retain your personal information for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required by law. For insurance policies, we typically retain records for 8 years after policy termination.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">9. Third-Party Links</h2>
                        <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                            Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies before providing any personal information.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">10. Children's Privacy</h2>
                        <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                            Our services are not intended for children under 18 years of age. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">11. Updates to This Policy</h2>
                        <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                            We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">12. Contact Us</h2>
                        <div className="bg-neutral-100 dark:bg-white/5 rounded-2xl p-6 border border-neutral-200 dark:border-white/10">
                            <p className="text-neutral-600 dark:text-neutral-400 mb-4">
                                If you have any questions about this Privacy Policy or wish to exercise your rights, please contact our Data Protection Officer:
                            </p>
                            <div className="space-y-2 text-neutral-700 dark:text-neutral-300">
                                <p><strong>Email:</strong> privacy@securelifefincorp.com</p>
                                <p><strong>Phone:</strong> +91 98765 43210</p>
                                <p><strong>Address:</strong> Data Protection Officer, SecureLife Fincorp, Mumbai, Maharashtra, India</p>
                            </div>
                        </div>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">13. Grievance Redressal</h2>
                        <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                            In accordance with Information Technology Act 2000 and rules made thereunder, if you have any grievance with respect to processing of your information, you may contact our Grievance Officer at grievance@securelifefincorp.com. We will address your concerns within 30 days of receiving your complaint.
                        </p>
                    </section>

                </div>
            </div>
        </main>
    );
}
