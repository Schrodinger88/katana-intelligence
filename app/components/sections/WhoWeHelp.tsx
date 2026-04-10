const audiences = [
  "Contractors and home service companies",
  "Local agencies and consultants",
  "Multi-location operators",
  "Clinics, med spas, and professional services",
];

const searchCoverage = [
  "AI automation agency for service businesses",
  "lead generation for contractors and local businesses",
  "AI SEO, GEO, and AEO for local search visibility",
  "conversion-focused website design for service businesses",
];

export default function WhoWeHelp() {
  return (
    <section className="relative overflow-hidden bg-background py-20 md:py-24">
      <div className="container mx-auto px-6">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.18em] text-foreground/40">
              Who We Help
            </p>
            <h2 className="mb-5 max-w-3xl text-3xl font-semibold tracking-tight text-foreground md:text-5xl">
              AI automation, websites, and search growth for service businesses
              that need more qualified leads.
            </h2>
            <p className="max-w-2xl text-lg leading-relaxed text-foreground/60 md:text-xl">
              Katana Intelligence works with owner-led businesses across Canada
              and the United States that need faster response times, cleaner
              operations, and a website that converts search traffic into booked
              calls.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-1">
            <div className="rounded-[2rem] border border-white/8 bg-secondary/25 p-6">
              <h3 className="mb-4 text-lg font-semibold text-foreground">
                Best fit clients
              </h3>
              <ul className="space-y-3 text-foreground/65">
                {audiences.map((audience) => (
                  <li key={audience} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                    <span>{audience}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[2rem] border border-white/8 bg-secondary/15 p-6">
              <h3 className="mb-4 text-lg font-semibold text-foreground">
                Core search themes
              </h3>
              <ul className="space-y-3 text-foreground/65">
                {searchCoverage.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
