import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
    title: "Terms of Service — Katana Intelligence",
    description: "The terms under which Katana Intelligence provides its services.",
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
                            <h2 className="text-2xl font-semibold text-foreground mb-3">1. Our services</h2>
                            <p>
                                Katana Intelligence builds websites, AI responders, automation
                                systems, and lead-generation engines, and provides SEO, ASO, and
                                performance marketing services. The specific scope of your
                                engagement is agreed in writing before we start building.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-foreground mb-3">2. Performance pricing</h2>
                            <p>
                                Our default plan is performance-based: no fees are charged until we
                                deliver your first 10 qualified leads. After that threshold, a flat
                                $599/month covers up to 10 leads, plus $25 per additional qualified
                                lead in the same month. A &ldquo;qualified lead&rdquo; is a real
                                person in your service area who requested a quote, booked a call,
                                or explicitly asked for your services. Bots, spam, duplicates, and
                                out-of-area inquiries do not count.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-foreground mb-3">3. Cancellation</h2>
                            <p>
                                There are no long-term contracts. You can cancel at any time with
                                30 days&apos; notice. Upon cancellation, we transfer ownership of
                                your website and data and remove our automation infrastructure.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-foreground mb-3">4. Client responsibilities</h2>
                            <p>
                                You agree to respond to qualified leads in a reasonable timeframe,
                                provide accurate business information, and grant the access needed
                                for us to deliver the services. Leads that go unanswered for more
                                than 48 hours still count as qualified.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-foreground mb-3">5. Liability</h2>
                            <p>
                                Our total liability under any engagement is capped at the fees you
                                have paid us in the preceding three months. We are not liable for
                                indirect or consequential damages.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-foreground mb-3">6. Contact</h2>
                            <p>
                                Questions? Email{" "}
                                <a href="mailto:hello@katanaintelligence.com" className="text-primary hover:underline">
                                    hello@katanaintelligence.com
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
