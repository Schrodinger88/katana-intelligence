import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { siteUrl } from "@/lib/site";

export const metadata: Metadata = {
    title: "Privacy Policy - Katana Intelligence",
    description: "How Katana Intelligence collects, uses, and protects your data.",
    alternates: {
        canonical: `${siteUrl}/privacy`,
    },
};

export default function PrivacyPage() {
    return (
        <main className="bg-black min-h-screen selection:bg-primary selection:text-black">
            <Navbar />
            <section className="py-32 bg-background">
                <div className="container mx-auto px-6 max-w-3xl">
                    <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground mb-4">
                        Privacy Policy
                    </h1>
                    <p className="text-foreground/40 text-sm mb-12">Last updated: April 2026</p>

                    <div className="space-y-8 text-foreground/70 leading-relaxed">
                        <section>
                            <h2 className="text-2xl font-semibold text-foreground mb-3">1. Who we are</h2>
                            <p>
                                Katana Intelligence (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) is an AI automation
                                agency operated by Erwin Peter. We build websites, AI responders, lead generation
                                systems, and marketing infrastructure for service businesses. This policy explains
                                how we handle your information when you visit our website, book a call, or become a client.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-foreground mb-3">2. What we collect</h2>
                            <p className="mb-3">We collect different types of information depending on how you interact with us:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong className="text-foreground">Website visitors:</strong> Basic analytics data (pages visited, time on site, device type) through privacy-respecting analytics. We do not use invasive tracking cookies.</li>
                                <li><strong className="text-foreground">Call bookings:</strong> Your name, email, phone number, and any details you share about your business through Cal.com.</li>
                                <li><strong className="text-foreground">Clients:</strong> Business data required to deliver our services - CRM records, inbox access tokens, website analytics credentials, ad account access, and similar operational data.</li>
                                <li><strong className="text-foreground">AI interactions:</strong> If you use our AI chatbot or caller demo, conversation data is processed in real-time and not stored permanently.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-foreground mb-3">3. How we use it</h2>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>To deliver the services you hire us for: website builds, AI responders, lead engines, AI SEO, and marketing.</li>
                                <li>To communicate with you about your project, send reports, and provide support.</li>
                                <li>To improve our services and optimize your campaigns based on performance data.</li>
                                <li>We <strong className="text-foreground">never sell</strong> your data to third parties.</li>
                                <li>We <strong className="text-foreground">never use</strong> client data to train AI models.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-foreground mb-3">4. Third-party services</h2>
                            <p className="mb-3">
                                We use trusted third-party providers to deliver our services. Each has its own privacy policy,
                                and we only share the minimum data necessary for them to function:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong className="text-foreground">Hosting & infrastructure:</strong> Vercel, cloud providers</li>
                                <li><strong className="text-foreground">Scheduling:</strong> Cal.com</li>
                                <li><strong className="text-foreground">AI processing:</strong> Anthropic, OpenAI (for client AI responders)</li>
                                <li><strong className="text-foreground">Automation:</strong> n8n, Make, and custom integrations</li>
                                <li><strong className="text-foreground">Marketing:</strong> Google Ads, Meta Ads (when running paid campaigns for clients)</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-foreground mb-3">5. Data security</h2>
                            <p>
                                We take reasonable measures to protect your information. All data is transmitted over
                                encrypted connections (HTTPS/TLS). Access credentials for client systems are stored
                                securely and only accessed when needed for service delivery. We regularly review our
                                security practices and limit access to data on a need-to-know basis.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-foreground mb-3">6. Data retention</h2>
                            <p>
                                We retain client data for the duration of our engagement plus 30 days. After cancellation,
                                we transfer all your data and assets to you and permanently delete our copies within
                                30 days unless required by law to retain them longer.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-foreground mb-3">7. Your rights</h2>
                            <p>You have the right to:</p>
                            <ul className="list-disc pl-6 space-y-2 mt-2">
                                <li>Request access to all personal data we hold about you</li>
                                <li>Request correction of inaccurate data</li>
                                <li>Request deletion of your data</li>
                                <li>Withdraw consent for data processing at any time</li>
                                <li>Request a copy of your data in a portable format</li>
                            </ul>
                            <p className="mt-3">
                                To exercise any of these rights, email us at{" "}
                                <a href="mailto:erwin@katanaintelligence.com" className="text-primary hover:underline">
                                    erwin@katanaintelligence.com
                                </a>. We will respond within 30 days.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-foreground mb-3">8. Cookies</h2>
                            <p>
                                Our website uses only essential cookies required for the site to function properly.
                                We do not use advertising cookies or third-party tracking cookies.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-foreground mb-3">9. Changes to this policy</h2>
                            <p>
                                We may update this policy from time to time. If we make significant changes,
                                we will notify active clients via email. The &quot;last updated&quot; date at the
                                top of this page reflects the most recent revision.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-foreground mb-3">10. Contact</h2>
                            <p>
                                Questions about this policy? Email{" "}
                                <a href="mailto:erwin@katanaintelligence.com" className="text-primary hover:underline">
                                    erwin@katanaintelligence.com
                                </a>.
                            </p>
                        </section>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
