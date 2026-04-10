import type { Metadata } from "next";
import { Inter } from "next/font/google";
import SmoothScrolling from "./components/SmoothScrolling";
import "./globals.css";
import {
  bookingUrl,
  contactEmail,
  founderName,
  siteName,
  siteUrl,
} from "@/lib/site";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: siteName,
  title: {
    default:
      "Katana Intelligence | AI Automation, Lead Generation & SEO for Service Businesses",
    template: `%s | ${siteName}`,
  },
  description:
    "Katana Intelligence builds AI-powered automation systems, websites, lead generation engines, and AI SEO for service businesses. Free setup — you only pay for qualified leads. Book a free strategy call.",
  keywords: [
    "AI automation agency",
    "AI lead generation",
    "AI SEO",
    "GEO optimization",
    "AEO optimization",
    "AI answering service",
    "business automation",
    "service business growth",
    "lead generation for contractors",
    "AI chatbot for business",
    "website design for service businesses",
    "performance marketing",
    "admin automation",
    "AI responder",
    "semantic content optimization",
    "local SEO",
    "small business automation",
  ],
  authors: [{ name: founderName, url: siteUrl }],
  creator: siteName,
  publisher: siteName,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName,
    title:
      "Katana Intelligence | AI Automation & Lead Generation for Service Businesses",
    description:
      "AI-powered growth engine for service businesses. We build your website, AI responder, lead generation, SEO, and marketing — all for free. You only pay for qualified leads.",
    images: [
      {
        url: `${siteUrl}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: "Katana Intelligence — AI Automation for Service Businesses",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Katana Intelligence | AI Automation & Lead Generation",
    description:
      "AI-powered growth engine for service businesses. Free setup, pay only for qualified leads.",
    creator: "@ErwinPeter88",
    images: [`${siteUrl}/twitter-image`],
  },
  alternates: {
    canonical: siteUrl,
  },
  category: "technology",
  verification: {
    google: undefined,
  },
};

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: siteName,
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/opengraph-image`,
      },
      founder: {
        "@type": "Person",
        name: founderName,
        jobTitle: "Founder",
        url: "https://x.com/ErwinPeter88",
      },
      description:
        "AI automation agency that builds growth engines for service businesses — AI responders, lead generation, websites, AI SEO, and performance marketing.",
      sameAs: [
        "https://x.com/ErwinPeter88",
        "https://linkedin.com/in/erwan-pierre-01b0b6348",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "sales",
        email: contactEmail,
        url: bookingUrl,
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: siteName,
      publisher: { "@id": `${siteUrl}/#organization` },
    },
    {
      "@type": "WebPage",
      "@id": `${siteUrl}/#webpage`,
      url: siteUrl,
      name: "Katana Intelligence | AI Automation & Lead Generation for Service Businesses",
      isPartOf: { "@id": `${siteUrl}/#website` },
      about: { "@id": `${siteUrl}/#organization` },
      description:
        "AI-powered automation, lead generation, website design, AI SEO, and performance marketing for service businesses. Free setup — pay only for qualified leads.",
    },
    {
      "@type": "Service",
      "@id": `${siteUrl}/#service`,
      name: "AI Growth Engine",
      provider: { "@id": `${siteUrl}/#organization` },
      serviceType: "AI Automation & Lead Generation",
      description:
        "Complete AI-powered growth system including AI responder, lead generation, admin automation, website design, AI SEO (GEO/AEO), and performance marketing.",
      offers: {
        "@type": "Offer",
        price: "899",
        priceCurrency: "USD",
        description:
          "$0 until first 10 qualified leads. Then $899/month flat.",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What kind of businesses do you work with?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We work with service-based businesses, agencies, consultants, and SMBs that are spending too much time on admin, struggling with inconsistent leads, or need a better web presence.",
          },
        },
        {
          "@type": "Question",
          name: "How long does it take to see results?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most clients see their first automations live within 2 weeks. Lead generation systems typically show measurable results within 30 days.",
          },
        },
        {
          "@type": "Question",
          name: "What counts as a qualified lead?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A real person in your service area who requested a quote, booked a call, or explicitly asked about your services. Bots, spam, duplicates, and out-of-area inquiries don't count.",
          },
        },
        {
          "@type": "Question",
          name: "Do you handle AI SEO and marketing too?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes — AI SEO (GEO, AEO), semantic content optimization, E-E-A-T signals, and performance marketing are all included and integrated with your lead engine.",
          },
        },
        {
          "@type": "Question",
          name: "Can I cancel anytime?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. No long-term contracts. Month-to-month basis — our results keep you around, not a contract.",
          },
        },
      ],
    },
    {
      "@type": "ProfessionalService",
      "@id": `${siteUrl}/#business`,
      name: siteName,
      url: siteUrl,
      image: `${siteUrl}/opengraph-image`,
      description:
        "Operator-led AI automation, websites, SEO, and lead generation infrastructure for service businesses.",
      areaServed: {
        "@type": "Country",
        name: "Canada and United States",
      },
      founder: {
        "@type": "Person",
        name: founderName,
      },
      sameAs: [
        "https://x.com/ErwinPeter88",
        "https://linkedin.com/in/erwan-pierre-01b0b6348",
      ],
      makesOffer: {
        "@type": "Offer",
        itemOffered: { "@id": `${siteUrl}/#service` },
      },
    },
    {
      "@type": "ItemList",
      "@id": `${siteUrl}/#services`,
      itemListElement: [
        "ai-responder",
        "lead-generation",
        "admin-automation",
        "website-design",
        "ai-seo",
        "performance-marketing",
      ].map((slug, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `${siteUrl}/services/${slug}`,
      })),
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} antialiased bg-background text-foreground overflow-x-hidden`}
      >
        <SmoothScrolling />
        {children}
      </body>
    </html>
  );
}
