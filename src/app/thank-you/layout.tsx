import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Thank You",
    description: "Thank you for contacting SecureLife Fincorp. We have received your request and will get back to you shortly.",
    robots: {
        index: false,
        follow: false,
    },
};

export default function ThankYouLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
