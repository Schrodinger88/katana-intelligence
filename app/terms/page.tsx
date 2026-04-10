import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { siteUrl } from "@/lib/site";

export const metadata: Metadata = {
    title: "Terms of Service - Katana Intelligence",
    description: "The terms under which Katana Intelligence provides its services.",
    alternates: {
        canonical: `${siteUrl}/terms`,
    },
};

export default function TermsPage() {
    return (
        <main className="bg-black min-h-screen selection:bg-primary selection:text-black">
            <Navbar />
            <section className="py-32 bg-background">
                <div className="container mx-auto px-6 max-w-3xl">
                    <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground mb-4">
                        Terms of Service
                    </h1>
                    <p className="text-foreground/40 text-sm mb-12">Last updated: April 2026</p>

                    <div className="space-y-8 text-foreground/70 leading-relaxed">
                        <section>
                            <h2 className="text-2xl font-semibold text-foreground mb-3">1. Overview</h2>
                            <p>
                                These terms govern your use of the Katana Intelligence website and any services
                                provided by Katana Intelligence (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;),
                                operated by Erwin Peter. By booking a call, signing up, or using our services,
                                you agree to these terms.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-foreground mb-3">2. Our services</h2>
                            <p>
                                Katana Intelligence builds websites, AI responders, automation systems, and
                                lead-generation engines, and provides AI SEO and performance marketing services.
                                The specific scope of your engagement is agreed in writing before we start building.
                                We reserve the right to update our service offerings at any time.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-foreground mb-3">3. Performance pricing</h2>
                            <p className="mb-3">
                                Our default plan is performance-based with the following structure:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong className="text-foreground">Setup phase:</strong> $0. We build your website, AI responder, automation systems, and lead engine at no cost.</li>
                                <li><strong className="text-foreground">Free trial period:</strong> No fees are charged until we deliver your first 10 qualified leads.</li>
                                <li><strong className="text-foreground">Monthly fee:</strong> After the trial threshold, pricing moves to a flat $899/month.</li>
                            </ul>
                            <p className="mt-3">
                                A &quot;qualified lead&quot; is defined as a real person in your service area who
                                requested a quote, booked a call, or explicitly asked for your services. Bots,
                                spam submissions, duplicates, and out-of-area inquiries do not count. This
                                definition is confirmed in writing before we begin.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-foreground mb-3">4. Payment terms</h2>
                            <p>
                                Invoices are sent monthly and are due within 14 days of receipt. We accept
                                bank transfer, credit card, and other standard payment methods. Late payments
                                may result in temporary suspension of services until the balance is settled.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-foreground mb-3">5. Cancellation</h2>
                            <p>
                                There are no long-term contracts. You can cancel at any time with 30 days&apos;
                                written notice. Upon cancellation:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mt-2">
                                <li>We transfer full ownership of your website, content, and data to you.</li>
                                <li>We provide export files for any automations we built.</li>
                                <li>We remove our infrastructure and access within 30 days.</li>
                                <li>Any outstanding balance for delivered leads remains payable.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-foreground mb-3">6. Client responsibilities</h2>
                            <p>As a client, you agree to:</p>
                            <ul className="list-disc pl-6 space-y-2 mt-2">
                                <li>Respond to qualified leads within a reasonable timeframe (we recommend within 24 hours).</li>
                                <li>Provide accurate business information for website content, SEO, and marketing materials.</li>
                                <li>Grant the access needed for us to deliver services (CRM, email, ad accounts, etc.).</li>
                                <li>Not engage in deceptive, fraudulent, or illegal business practices.</li>
                            </ul>
                            <p className="mt-3">
                                Leads that go unanswered for more than 48 hours still count as qualified
                                if they meet the agreed definition.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-foreground mb-3">7. Intellectual property</h2>
                            <p>
                                Upon full payment, you own all website content, copy, and creative assets
                                we produce for your business. We retain the right to use general methodologies,
                                frameworks, and non-proprietary tools across other engagements. We may reference
                                your project in our portfolio unless you request otherwise in writing.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-foreground mb-3">8. Liability</h2>
                            <p>
                                Our total liability under any engagement is capped at the fees you have paid
                                us in the preceding three months. We are not liable for indirect, incidental,
                                special, or consequential damages, including lost profits or lost data. We
                                make no guarantees about specific lead volumes or revenue outcomes, though we
                                work to optimize results continuously.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-foreground mb-3">9. Dispute resolution</h2>
                            <p>
                                If a dispute arises, both parties agree to attempt good-faith resolution
                                via email before pursuing any formal action. If we cannot resolve the issue
                                within 30 days, either party may pursue mediation or legal remedies under
                                applicable law.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-foreground mb-3">10. Changes to these terms</h2>
                            <p>
                                We may update these terms from time to time. Active clients will be notified
                                of material changes via email at least 14 days before they take effect. Continued
                                use of our services after changes take effect constitutes acceptance.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-foreground mb-3">11. Contact</h2>
                            <p>
                                Questions about these terms? Email{" "}
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
