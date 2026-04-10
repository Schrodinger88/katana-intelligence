"use client";

import { motion } from "framer-motion";
import Button from "../ui/Button";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";

const features = [
    "Free website build & full automation setup",
    "AI Responder 24/7 (up to 1,000 conversations/mo)",
    "AI SEO & performance marketing included",
    "Fully managed on our infrastructure",
    "Secure integration with your existing tools",
    "Ongoing optimization and support",
];

export default function Pricing() {
    return (
        <section id="pricing" className="relative overflow-hidden bg-background py-20 md:py-24">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-12 text-center md:mb-14"
                >
                    <span className="mb-6 inline-block rounded-full border border-white/10 bg-secondary/20 px-4 py-1.5 text-sm font-medium tracking-tight text-foreground/60">
                        Pay for results, not promises
                    </span>
                    <h2 className="mb-5 text-3xl font-semibold tracking-tight text-foreground md:text-5xl">
                        One plan. <span className="text-foreground/40">Zero risk.</span>
                    </h2>
                    <p className="mx-auto max-w-2xl text-lg text-foreground/60 md:text-xl">
                        We build everything for free. You only pay when we actually deliver leads.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="mx-auto grid max-w-6xl grid-cols-1 gap-6 lg:grid-cols-[1.2fr_0.8fr]"
                >
                    <div className="relative overflow-hidden rounded-[2rem] bg-primary p-8 text-primary-invert md:p-12">
                        {/* Subtle shimmer */}
                        <div className="absolute inset-0 overflow-hidden pointer-events-none">
                            <motion.div
                                className="absolute -top-1/2 -left-1/2 w-full h-full bg-white/5 rotate-12"
                                animate={{ x: ["-100%", "200%"] }}
                                transition={{ duration: 4, repeat: Infinity, repeatDelay: 6, ease: "easeInOut" }}
                            />
                        </div>

                        <div className="relative z-10">
                            <div className="mb-8">
                                <h3 className="text-xl font-semibold text-primary-invert mb-2">
                                    Performance Plan
                                </h3>
                                <div className="flex items-baseline gap-2 mb-2">
                                    <span className="text-5xl md:text-6xl font-bold text-primary-invert">
                                        $899
                                    </span>
                                    <span className="text-primary-invert/60 text-lg">
                                        /month
                                    </span>
                                </div>
                                <p className="text-primary-invert/70 text-sm mb-4">
                                    $0 until we deliver your first <strong>10 qualified leads</strong>.
                                    After that, it moves to a flat <strong>$899/month</strong>.
                                </p>
                                <p className="text-primary-invert/80 leading-relaxed">
                                    Built for owner-led service businesses that want a full lead system
                                    without retainers, setup fees, or deadweight overhead.
                                </p>
                            </div>

                            <ul className="space-y-3 mb-10">
                                {features.map((feature, i) => (
                                    <motion.li
                                        key={i}
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.05, duration: 0.4 }}
                                        className="flex items-start gap-3"
                                    >
                                        <Check className="w-5 h-5 mt-0.5 flex-shrink-0 text-primary-invert" />
                                        <span className="text-primary-invert/90">{feature}</span>
                                    </motion.li>
                                ))}
                            </ul>

                            <Link href="https://cal.com/erwin-peter/15min" target="_blank">
                                <Button
                                    variant="secondary"
                                    className="w-full rounded-full h-14 text-lg gap-2 group"
                                >
                                    Get Your Free Audit
                                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                                </Button>
                            </Link>

                            <p className="text-center text-primary-invert/60 text-xs mt-6">
                                No setup fees. No long-term contracts. Cancel anytime.
                            </p>
                        </div>
                    </div>

                    <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-secondary/20 p-8 md:p-10">
                        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(218,240,238,0.18),transparent_45%)]" />
                        <div className="relative z-10">
                            <div className="mb-8">
                                <span className="mb-4 inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-foreground/50">
                                    Enterprise
                                </span>
                                <h3 className="mb-2 text-2xl font-semibold text-foreground">
                                    Custom growth infrastructure
                                </h3>
                                <div className="mb-4 text-4xl font-bold tracking-tight text-foreground">
                                    Custom
                                </div>
                                <p className="leading-relaxed text-foreground/60">
                                    For multi-location operators, higher ad spend, internal sales teams,
                                    or businesses that need custom reporting, routing logic, and deeper systems work.
                                </p>
                            </div>

                            <ul className="mb-10 space-y-3">
                                {[
                                    "Custom lead qualification and routing rules",
                                    "Advanced attribution, dashboards, and CRM syncing",
                                    "Multi-location SEO, GEO/AEO, and paid media strategy",
                                    "Higher conversation volumes and priority support",
                                    "Quarterly growth planning with custom build scope",
                                ].map((feature, i) => (
                                    <motion.li
                                        key={feature}
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.05 + i * 0.05, duration: 0.4 }}
                                        className="flex items-start gap-3"
                                    >
                                        <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                                        <span className="text-foreground/80">{feature}</span>
                                    </motion.li>
                                ))}
                            </ul>

                            <Link href="https://cal.com/erwin-peter/15min" target="_blank">
                                <Button variant="outline" className="h-14 w-full rounded-full text-base gap-2 group">
                                    Talk through your setup
                                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
