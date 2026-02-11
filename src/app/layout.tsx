import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.securelifefincorp.com'),
  title: {
    default: "SecureLife Fincorp - A perfect insurance plan",
    template: "%s | SecureLife Fincorp",
  },
  description: "SecureLife Fincorp offers personalized insurance plans including life, health, motor, and business financial planning. Secure your future with our expert financial solutions.",
  keywords: ["insurance", "life insurance", "health insurance", "financial planning", "SecureLife Fincorp", "investment options"],
  authors: [{ name: "SecureLife Fincorp" }],
  creator: "SecureLife Fincorp",
  publisher: "SecureLife Fincorp",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/images/website-logo.png",
    shortcut: "/images/website-logo.png",
    apple: "/images/website-logo.png",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.securelifefincorp.com",
    title: "SecureLife Fincorp - A perfect insurance plan",
    description: "SecureLife Fincorp offers personalized insurance plans including life, health, motor, and business financial planning.",
    siteName: "SecureLife Fincorp",
    images: [
      {
        url: "/images/website-logo.png",
        width: 1200,
        height: 630,
        alt: "SecureLife Fincorp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SecureLife Fincorp - A perfect insurance plan",
    description: "SecureLife Fincorp offers personalized insurance plans including life, health, motor, and business financial planning.",
    images: ["/images/website-logo.png"],
  },
  alternates: {
    canonical: "https://www.securelifefincorp.com",
  },
};

import { ThemeProvider } from "@/components/ThemeProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Meta Pixel Code */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1552203242725116');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=1552203242725116&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {/* End Meta Pixel Code */}

        {/* Structured Data */}
        <Script id="json-ld-org" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "SecureLife Fincorp",
            "url": "https://www.securelifefincorp.com",
            "logo": "https://www.securelifefincorp.com/images/website-logo.png",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+91 98765 43210",
              "contactType": "customer service",
              "areaServed": "IN",
              "availableLanguage": ["en", "Hindi"]
            },
            "sameAs": [
              "https://www.facebook.com/securelifefincorp",
              "https://www.instagram.com/securelifefincorp",
              "https://www.linkedin.com/company/securelifefincorp"
            ]
          })}
        </Script>
        <Script id="json-ld-website" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "SecureLife Fincorp",
            "url": "https://www.securelifefincorp.com",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://www.securelifefincorp.com/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          })}
        </Script>
      </head>
      <body className={outfit.variable}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
