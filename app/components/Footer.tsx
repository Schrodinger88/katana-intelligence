"use client";

import Link from "next/link";

function scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Footer() {
    return (
        <footer className="relative overflow-hidden border-t border-white/10 bg-[linear-gradient(180deg,rgba(8,10,10,0.92)_0%,rgba(23,28,27,0.96)_38%,rgba(48,58,56,1)_100%)] py-16">
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
                <div className="absolute -left-24 top-8 h-56 w-56 rounded-full bg-primary/10 blur-3xl" />
                <div className="absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-secondary/20 blur-3xl" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(218,240,238,0.12),transparent_34%),linear-gradient(120deg,transparent,rgba(255,255,255,0.03),transparent)]" />
            </div>
            <div className="container relative mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-start gap-12">

                    <div className="max-w-sm">
                        <h3 className="font-bold text-2xl tracking-tight text-foreground mb-4">
                            Katana.
                        </h3>
                        <p className="text-foreground/58 leading-relaxed">
                            AI automation that works while you sleep.
                            We handle admin, leads, and websites for growing businesses.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-24">
                        <div>
                            <h4 className="font-semibold text-foreground mb-4">Services</h4>
                            <ul className="space-y-3 text-foreground/60">
                                <li><button onClick={() => scrollTo("services")} className="hover:text-foreground transition-colors">Admin Automation</button></li>
                                <li><button onClick={() => scrollTo("services")} className="hover:text-foreground transition-colors">Lead Generation</button></li>
                                <li><button onClick={() => scrollTo("services")} className="hover:text-foreground transition-colors">Website Design</button></li>
                                <li><button onClick={() => scrollTo("services")} className="hover:text-foreground transition-colors">AI SEO</button></li>
                                <li><button onClick={() => scrollTo("services")} className="hover:text-foreground transition-colors">Performance Marketing</button></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold text-foreground mb-4">Company</h4>
                            <ul className="space-y-3 text-foreground/60">
                                <li><button onClick={() => scrollTo("process")} className="hover:text-foreground transition-colors">How It Works</button></li>
                                <li><button onClick={() => scrollTo("pricing")} className="hover:text-foreground transition-colors">Pricing</button></li>
                                <li><button onClick={() => scrollTo("faq")} className="hover:text-foreground transition-colors">FAQ</button></li>
                                <li><a href="https://cal.com/erwin-peter/15min" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Contact</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold text-foreground mb-4">Connect</h4>
                            <ul className="space-y-3 text-foreground/60">
                                <li><a href="https://x.com/ErwinPeter88" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Twitter / X</a></li>
                                <li><a href="https://linkedin.com/in/erwan-pierre-01b0b6348" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">LinkedIn</a></li>
                                <li><a href="mailto:erwin@katanaintelligence.com" className="hover:text-foreground transition-colors">Email</a></li>
                            </ul>
                        </div>
                    </div>

                </div>

                <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-sm text-foreground/40 gap-4">
                    <p>&copy; {new Date().getFullYear()} Katana Intelligence. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="/privacy" className="hover:text-foreground/60 transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-foreground/60 transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
