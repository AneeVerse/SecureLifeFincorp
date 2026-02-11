import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Us",
    description: "Get in touch with SecureLife Fincorp for personalized insurance plans and financial consulting. Our expert advisors are ready to help you secure your future.",
    alternates: {
        canonical: "https://www.securelifefincorp.com/contact",
    },
};

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
