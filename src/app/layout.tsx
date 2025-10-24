import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WebHavenTech — IT Solutions & Web Development",
  description:
    "WebHavenTech provides professional IT solutions: web development, e‑commerce, cloud migration, DevOps, cybersecurity, and managed IT services.",
  keywords: [
    "IT services",
    "web development",
    "Next.js development",
    "React developer",
    "ecommerce development",
    "cloud migration",
    "DevOps",
    "cybersecurity",
    "managed IT services",
    "software development",
    "website design",
    "SEO",
  ],
  authors: [{ name: "WebHavenTech", url: "https://your-domain.com" }],
  creator: "WebHavenTech",
  applicationName: "WebHavenTech",
  metadataBase: new URL("https://your-domain.com"), // ← replace with your real site URL
  openGraph: {
    title: "WebHavenTech — IT Solutions & Web Development",
    description:
      "Professional IT & web development services: modern websites, cloud, DevOps and cybersecurity.",
    url: "https://your-domain.com", // ← replace
    siteName: "WebHavenTech",
    images: [
      {
        url: "https://your-domain.com/og-image.jpg", // ← replace or add to /public
        width: 1200,
        height: 630,
        alt: "WebHavenTech IT & Web Development",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WebHavenTech — IT Solutions & Web Development",
    description:
      "Modern web & IT solutions: websites, e‑commerce, cloud migration, DevOps and cybersecurity.",
    images: ["https://your-domain.com/og-image.jpg"], // ← replace
    creator: "@your_twitter_handle", // ← replace or remove
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "name": "WebHavenTech",
        "url": "https://your-domain.com",
        "logo": "https://your-domain.com/logo.png",
        "sameAs": [
          "https://www.linkedin.com/company/your-company",
          "https://www.facebook.com/your-page",
          "https://twitter.com/your_twitter_handle",
        ],
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "telephone": "+91-XXXXXXXXXX",
            "contactType": "customer service",
            "areaServed": "IN",
            "availableLanguage": ["English", "Hindi"],
          },
        ],
        "description":
          "WebHavenTech provides web development, cloud migration, DevOps, cybersecurity and managed IT services for businesses.",
      },
      {
        "@type": "WebSite",
        "url": "https://your-domain.com",
        "name": "WebHavenTech",
        "description":
          "Professional IT & web development services: websites, e‑commerce, cloud migration, DevOps and cybersecurity.",
        "publisher": {
          "@id": "https://your-domain.com#organization",
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://your-domain.com/search?q={search_term_string}",
          "query-input": "required name=search_term_string",
        },
      },
    ],
  };

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Structured data for better SEO (replace domain/logo/social links) */}
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
