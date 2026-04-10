import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import {
  bookingUrl,
  getServicePage,
  servicePages,
  siteName,
  siteUrl,
} from "@/lib/site";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return servicePages.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServicePage(slug);

  if (!service) {
    return {};
  }

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: {
      canonical: `${siteUrl}/services/${service.slug}`,
    },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `${siteUrl}/services/${service.slug}`,
      images: [`${siteUrl}/opengraph-image`],
    },
    twitter: {
      title: service.metaTitle,
      description: service.metaDescription,
      images: [`${siteUrl}/twitter-image`],
    },
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServicePage(slug);

  if (!service) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: siteUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Services",
            item: `${siteUrl}/services`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: service.shortName,
            item: `${siteUrl}/services/${service.slug}`,
          },
        ],
      },
      {
        "@type": "Service",
        "@id": `${siteUrl}/services/${service.slug}#service`,
        name: service.name,
        serviceType: service.shortName,
        provider: {
          "@type": "ProfessionalService",
          name: siteName,
          url: siteUrl,
        },
        areaServed: ["Canada", "United States"],
        url: `${siteUrl}/services/${service.slug}`,
        description: service.metaDescription,
      },
      {
        "@type": "FAQPage",
        mainEntity: service.faq.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
    ],
  };

  return (
    <main className="min-h-screen bg-black selection:bg-primary selection:text-black">
      <Navbar />
      <section className="bg-background px-6 pb-16 pt-32 md:pb-24 md:pt-36">
        <div className="container mx-auto max-w-5xl">
          <nav className="mb-8 text-sm text-foreground/40">
            <Link href="/" className="transition-colors hover:text-foreground/60">
              Home
            </Link>
            <span className="px-2">/</span>
            <Link
              href="/services"
              className="transition-colors hover:text-foreground/60"
            >
              Services
            </Link>
            <span className="px-2">/</span>
            <span className="text-foreground/65">{service.shortName}</span>
          </nav>

          <p className="mb-4 text-sm font-medium uppercase tracking-[0.18em] text-foreground/40">
            {service.shortName}
          </p>
          <h1 className="mb-6 max-w-4xl text-4xl font-semibold tracking-tight text-foreground md:text-6xl">
            {service.title}
          </h1>
          <p className="mb-6 max-w-3xl text-lg leading-relaxed text-foreground/68 md:text-xl">
            {service.heroSummary}
          </p>
          <p className="mb-12 max-w-3xl leading-relaxed text-foreground/58">
            {service.intro}
          </p>

          <div className="mb-16 grid gap-6 md:grid-cols-2">
            <div className="rounded-[2rem] border border-white/8 bg-secondary/20 p-7">
              <h2 className="mb-5 text-2xl font-semibold text-foreground">
                What is included
              </h2>
              <ul className="space-y-4 text-foreground/62">
                {service.deliverables.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[2rem] border border-white/8 bg-secondary/10 p-7">
              <h2 className="mb-5 text-2xl font-semibold text-foreground">
                Business outcomes
              </h2>
              <ul className="space-y-4 text-foreground/62">
                {service.outcomes.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mb-16 rounded-[2rem] border border-white/8 bg-primary p-8 text-primary-invert md:p-10">
            <h2 className="mb-4 text-2xl font-semibold">
              Want this built into your business?
            </h2>
            <p className="mb-8 max-w-2xl text-primary-invert/75">
              Book a free strategy call and we will map the fastest route from
              your current bottlenecks to a working system.
            </p>
            <Link
              href={bookingUrl}
              target="_blank"
              className="inline-flex h-12 items-center rounded-full bg-black px-6 text-sm font-medium text-white transition-opacity hover:opacity-85"
            >
              Book a free call
            </Link>
          </div>

          <div className="max-w-4xl">
            <h2 className="mb-8 text-3xl font-semibold tracking-tight text-foreground">
              Frequently asked questions
            </h2>
            <div className="space-y-5">
              {service.faq.map((item) => (
                <article
                  key={item.question}
                  className="rounded-[1.5rem] border border-white/8 bg-secondary/10 p-6"
                >
                  <h3 className="mb-3 text-lg font-semibold text-foreground">
                    {item.question}
                  </h3>
                  <p className="leading-relaxed text-foreground/62">
                    {item.answer}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Footer />
    </main>
  );
}
