import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
    title: "Privacy Policy — Katana Intelligence",
    description: "How Katana Intelligence collects, uses, and protects your data.",
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
                            <h2 className="text-2xl font-semibold text-foreground mb-3">1. What we collect</h2>
                            <p>
                                When you book a call or email us, we collect your name, email, phone
                                number, and anything you choose to share about your business. When you
                                become a client, we collect the operational data needed to build and
                                run your automation systems (CRM records, inbox access, website
                                analytics, ad accounts, etc.).
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-foreground mb-3">2. How we use it</h2>
                            <p>
                                We use your data solely to deliver the services you&apos;ve hired us
                                for: building your website, running your AI responder, generating
                                leads, and optimizing your marketing. We never sell your data, and
                                we don&apos;t use client data to train third-party models.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-foreground mb-3">3. Third-party tools</h2>
                            <p>
                                We rely on trusted providers (Google, Anthropic, Cal.com, Vercel,
                                n8n, and similar) to deliver our services. Each has its own privacy
                                policy; we only share the minimum data needed for them to function.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-foreground mb-3">4. Your rights</h2>
                            <p>
                                You can request access to, correction of, or deletion of your data
                                at any time by emailing hello@katanaintelligence.com. We will
                                respond within 30 days.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-foreground mb-3">5. Contact</h2>
                            <p>
                                Questions about this policy? Email{" "}
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
