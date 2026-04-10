import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { servicePages, siteName, siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Katana Intelligence services: AI responder, lead generation, admin automation, website design, AI SEO, and performance marketing for service businesses.",
  alternates: {
    canonical: `${siteUrl}/services`,
  },
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-black selection:bg-primary selection:text-black">
      <Navbar />
      <section className="bg-background px-6 pb-16 pt-32 md:pb-24 md:pt-36">
        <div className="container mx-auto max-w-6xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.18em] text-foreground/40">
            {siteName} Services
          </p>
          <h1 className="mb-6 max-w-4xl text-4xl font-semibold tracking-tight text-foreground md:text-6xl">
            Growth systems for service businesses that need leads, speed, and
            cleaner operations.
          </h1>
          <p className="mb-14 max-w-3xl text-lg leading-relaxed text-foreground/60 md:text-xl">
            Every service is built to work as part of one acquisition and
            conversion system. Explore each service page for a deeper breakdown
            of deliverables, outcomes, and fit.
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            {servicePages.map((service) => (
              <article
                key={service.slug}
                className="rounded-[2rem] border border-white/8 bg-secondary/20 p-7 md:p-8"
              >
                <p className="mb-3 text-sm uppercase tracking-[0.16em] text-foreground/35">
                  {service.shortName}
                </p>
                <h2 className="mb-4 text-2xl font-semibold text-foreground">
                  <Link
                    href={`/services/${service.slug}`}
                    className="transition-colors hover:text-primary"
                  >
                    {service.title}
                  </Link>
                </h2>
                <p className="mb-6 leading-relaxed text-foreground/62">
                  {service.metaDescription}
                </p>
                <ul className="mb-8 space-y-3 text-sm text-foreground/60">
                  {service.deliverables.slice(0, 3).map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/services/${service.slug}`}
                  className="text-sm font-medium text-primary transition-opacity hover:opacity-80"
                >
                  View service page
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
