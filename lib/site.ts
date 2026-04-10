export const siteUrl = "https://katanaintelligence.com";
export const siteName = "Katana Intelligence";
export const founderName = "Erwin Peter";
export const bookingUrl = "https://cal.com/erwin-peter/15min";
export const contactEmail = "erwin@katanaintelligence.com";

export type ServicePage = {
  slug: string;
  name: string;
  shortName: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  heroSummary: string;
  intro: string;
  deliverables: string[];
  outcomes: string[];
  faq: Array<{ question: string; answer: string }>;
};

export const servicePages: ServicePage[] = [
  {
    slug: "ai-responder",
    name: "AI Responder for Service Businesses",
    shortName: "AI Responder",
    title: "AI Responder That Answers Calls, Forms, and Messages in Seconds",
    metaTitle:
      "AI Responder for Service Businesses | Katana Intelligence",
    metaDescription:
      "24/7 AI responder for service businesses. Instantly answer calls, web forms, and messages, qualify leads, send quotes, and book appointments automatically.",
    heroSummary:
      "An always-on AI responder that turns missed calls and slow follow-up into booked jobs.",
    intro:
      "Katana Intelligence builds AI responder systems for owner-led service businesses that need faster lead response without hiring more admin staff. We connect inbound calls, contact forms, SMS, DM inboxes, and booking flows so every lead gets an immediate next step.",
    deliverables: [
      "Instant response flows for calls, forms, and messages",
      "Lead qualification logic tied to your service area and job types",
      "Automated quote requests, appointment booking, and follow-up",
      "CRM, calendar, and inbox integration with your existing stack",
    ],
    outcomes: [
      "Shorter response time and fewer missed opportunities",
      "Higher booking rate from inbound leads",
      "Less manual back-and-forth for your team",
      "Cleaner handoff from inquiry to sales conversation",
    ],
    faq: [
      {
        question: "Can the AI responder work with our current phone and form setup?",
        answer:
          "Yes. We usually layer on top of your existing phone, form, calendar, and CRM stack rather than forcing a full migration.",
      },
      {
        question: "Does it only answer questions, or can it actually book jobs?",
        answer:
          "It can qualify, route, send next steps, collect job details, and book calls or appointments when the workflow supports it.",
      },
    ],
  },
  {
    slug: "lead-generation",
    name: "Lead Generation for Service Businesses",
    shortName: "Lead Generation",
    title: "Lead Generation Systems for Contractors and Service Businesses",
    metaTitle:
      "Lead Generation for Service Businesses | Katana Intelligence",
    metaDescription:
      "Lead generation systems for contractors, home services, agencies, and local service businesses. Build predictable inbound and outbound lead flow with full tracking.",
    heroSummary:
      "A full lead generation engine built for operators who need predictable demand, not random spikes.",
    intro:
      "We design lead generation systems around the economics of local and service-based businesses. That includes the website, offer, funnels, qualification logic, follow-up, tracking, and channel mix required to produce qualified leads consistently.",
    deliverables: [
      "Inbound funnel architecture and conversion tracking",
      "Outbound sequences and referral or reactivation flows where needed",
      "Lead scoring, qualification rules, and source attribution",
      "Reporting that ties traffic, leads, bookings, and pipeline together",
    ],
    outcomes: [
      "More qualified leads instead of low-intent traffic",
      "Clear visibility into what channels create revenue",
      "Lower leakage between inquiry and booked call",
      "A repeatable growth system you can scale month over month",
    ],
    faq: [
      {
        question: "What counts as a qualified lead?",
        answer:
          "A real person in your service area who requested a quote, booked a call, or clearly asked about your service. Spam, duplicates, and out-of-area inquiries do not count.",
      },
      {
        question: "Do you only run ads?",
        answer:
          "No. We combine the right mix of organic search, AI SEO, paid media, landing pages, automations, and follow-up based on the business model.",
      },
    ],
  },
  {
    slug: "admin-automation",
    name: "Admin Automation for Small Businesses",
    shortName: "Admin Automation",
    title: "Admin Automation That Removes Repetitive Work From Your Week",
    metaTitle:
      "Admin Automation for Small Businesses | Katana Intelligence",
    metaDescription:
      "Admin automation for service businesses and SMBs. Automate scheduling, invoicing, onboarding, follow-up, CRM updates, and recurring back-office work.",
    heroSummary:
      "Automation for the work that steals your evenings: follow-up, scheduling, invoicing, and admin handoffs.",
    intro:
      "Most service businesses do not need more software. They need fewer repetitive tasks. We map the bottlenecks inside your operating workflow and automate the pieces that create delays, dropped tasks, and unnecessary overhead.",
    deliverables: [
      "Workflow design for scheduling, invoicing, follow-up, and onboarding",
      "Automation with n8n, Make, APIs, and business tools you already use",
      "Alerts, internal routing, and exception handling for edge cases",
      "Documentation and ongoing optimization after launch",
    ],
    outcomes: [
      "More owner time recovered each week",
      "Fewer dropped tasks and manual errors",
      "Faster client onboarding and internal handoffs",
      "A more scalable operating system without more admin payroll",
    ],
    faq: [
      {
        question: "What kinds of tasks can you automate?",
        answer:
          "Scheduling, reminders, invoice workflows, CRM updates, lead routing, client onboarding, reporting, and most repetitive handoffs between systems.",
      },
      {
        question: "Will we lose control if the process is automated?",
        answer:
          "No. Good automations include checkpoints, alerts, and human approval where it matters. The goal is leverage, not black-box operations.",
      },
    ],
  },
  {
    slug: "website-design",
    name: "Website Design for Service Businesses",
    shortName: "Website Design",
    title: "Website Design for Service Businesses That Need More Booked Calls",
    metaTitle:
      "Website Design for Service Businesses | Katana Intelligence",
    metaDescription:
      "Conversion-focused website design for service businesses. Fast, mobile-first, SEO-ready websites built to turn visitors into quotes, calls, and booked jobs.",
    heroSummary:
      "A conversion-focused website that supports SEO, paid traffic, and lead qualification instead of just looking polished.",
    intro:
      "We build websites for businesses that rely on trust, speed, and clarity to win work. The site is structured to rank, answer real buyer questions, and push visitors toward a phone call, form submission, or booking action without friction.",
    deliverables: [
      "Homepage and service-page messaging aligned to buyer intent",
      "Fast, mobile-first build with technical SEO foundations in place",
      "Conversion copy, CTAs, and section structure tuned for lead capture",
      "Analytics, event tracking, and booking flow integration",
    ],
    outcomes: [
      "Higher conversion from organic and paid traffic",
      "Stronger trust signals for buyers comparing multiple providers",
      "Better crawlability and coverage for local and service queries",
      "A site that works as the center of your marketing stack",
    ],
    faq: [
      {
        question: "Do you write the copy and structure the site for SEO?",
        answer:
          "Yes. We handle both the site build and the search-facing structure, including metadata, internal links, semantic sections, and conversion copy.",
      },
      {
        question: "Can the website connect to our CRM and booking tools?",
        answer:
          "Yes. We wire the site into the systems that handle booking, lead routing, and follow-up so the website is part of the operating workflow.",
      },
    ],
  },
  {
    slug: "ai-seo",
    name: "AI SEO Agency for Service Businesses",
    shortName: "AI SEO",
    title: "AI SEO for Service Businesses: Technical SEO, GEO, AEO, and Local Visibility",
    metaTitle: "AI SEO Agency for Service Businesses | Katana Intelligence",
    metaDescription:
      "AI SEO agency for service businesses. Improve visibility in Google, local search, and AI-generated answers with technical SEO, semantic content, GEO, and AEO.",
    heroSummary:
      "Search optimization built for both classic rankings and AI-generated answers.",
    intro:
      "Katana Intelligence combines technical SEO, service-page strategy, semantic content structure, local search signals, and answer-engine optimization to help service businesses show up where customers actually look. That means Google results, local intent queries, and AI answer surfaces.",
    deliverables: [
      "Technical SEO fixes for metadata, schema, crawlability, and internal links",
      "Service and location content strategy built around buyer-intent searches",
      "GEO and AEO improvements for AI overviews and answer engines",
      "Ongoing measurement tied to leads, calls, and conversion events",
    ],
    outcomes: [
      "Stronger visibility for high-intent searches",
      "Better coverage in AI-generated answers and summaries",
      "Clearer topical authority across your service pages",
      "Search traffic that converts into qualified leads, not vanity clicks",
    ],
    faq: [
      {
        question: "What is AI SEO?",
        answer:
          "AI SEO is search optimization that helps your business appear in both traditional search results and AI-generated answers. It includes technical SEO, semantic content structure, entity clarity, and strong trust signals.",
      },
      {
        question: "Do you handle local SEO too?",
        answer:
          "Yes. For service businesses, local intent is usually a major part of the strategy, so we improve the pages and signals that support local discovery and conversion.",
      },
    ],
  },
  {
    slug: "performance-marketing",
    name: "Performance Marketing for Service Businesses",
    shortName: "Performance Marketing",
    title: "Performance Marketing That Connects Ads, Landing Pages, and Follow-Up",
    metaTitle:
      "Performance Marketing for Service Businesses | Katana Intelligence",
    metaDescription:
      "Performance marketing for service businesses with landing pages, ad management, tracking, and lead follow-up tied into one measurable growth system.",
    heroSummary:
      "Paid acquisition that is only useful if the funnel, landing page, and follow-up system are connected.",
    intro:
      "We manage performance marketing as part of a full acquisition system. Ads alone do not create durable growth. We connect campaign structure, landing pages, tracking, lead qualification, and follow-up so the business can measure cost per lead and cost per booked job clearly.",
    deliverables: [
      "Campaign strategy across Google, Meta, and conversion-focused landing pages",
      "Tracking for calls, forms, booked calls, and qualified lead events",
      "Messaging alignment between ad, page, offer, and follow-up flow",
      "Optimization based on lead quality, not just click volume",
    ],
    outcomes: [
      "Better efficiency from paid spend",
      "Fewer leaks between click, lead, and booking",
      "Improved decision-making from accurate attribution",
      "A tighter growth loop between campaigns and sales outcomes",
    ],
    faq: [
      {
        question: "Can you run ads without rebuilding the whole system first?",
        answer:
          "Yes, but performance improves when landing pages, conversion tracking, and follow-up are fixed. We usually prioritize the blockers that prevent ad spend from converting.",
      },
      {
        question: "How do you measure success?",
        answer:
          "We care about qualified leads, bookings, and pipeline outcomes, not vanity metrics. The reporting is built around what the business can actually act on.",
      },
    ],
  },
];

export function getServicePage(slug: string) {
  return servicePages.find((service) => service.slug === slug);
}
