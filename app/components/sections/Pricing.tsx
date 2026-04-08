"use client";

import { motion } from "framer-motion";
import Button from "../ui/Button";
import Link from "next/link";
import { Check } from "lucide-react";

const features = [
    "Free website build & full automation setup",
    "AI Responder 24/7 included (fair-use limit)",
    "Fully managed on our infrastructure",
    "Secure integration with your existing tools",
    "Powered by OpenClaw & Claude Cowork",
    "Ongoing optimization and support",
];

export default function Pricing() {
    return (
        <section id="pricing" className="py-32 bg-background">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-foreground/60 text-sm font-medium tracking-tight mb-6">
                        Pay for results, not promises
                    </span>
                    <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-foreground mb-6">
                        One plan. <span className="text-foreground/40">Zero risk.</span>
                    </h2>
                    <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
                        We build everything for free. You only pay when we actually deliver leads.
                    </p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-2xl mx-auto rounded-[2rem] p-10 md:p-14 bg-primary text-primary-invert ring-2 ring-primary"
                >
                    <div className="mb-8">
                        <h3 className="text-xl font-semibold text-primary-invert mb-2">
                            Performance Plan
                        </h3>
                        <div className="flex items-baseline gap-2 mb-2">
                            <span className="text-5xl md:text-6xl font-bold text-primary-invert">
                                $599
                            </span>
                            <span className="text-primary-invert/60 text-lg">
                                /month
                            </span>
                        </div>
                        <p className="text-primary-invert/70 text-sm mb-4">
                            Only billed once we generate <strong>10 qualified leads</strong>.
                            Then <strong>$25</strong> per additional lead.
                        </p>
                        <p className="text-primary-invert/80 leading-relaxed">
                            Free website and automation setup. AI included up to a fair limit.
                            Fully managed on our infrastructure and integrated securely with your
                            existing tools.
                        </p>
                    </div>

                    <ul className="space-y-3 mb-10">
                        {features.map((feature, i) => (
                            <li key={i} className="flex items-start gap-3">
                                <Check className="w-5 h-5 mt-0.5 flex-shrink-0 text-primary-invert" />
                                <span className="text-primary-invert/90">{feature}</span>
                            </li>
                        ))}
                    </ul>

                    <Link href="https://cal.com/erwin-peter/30min" target="_blank">
                        <Button
                            variant="secondary"
                            className="w-full rounded-full h-14 text-lg"
                        >
                            Get Your Free Audit
                        </Button>
                    </Link>

                    <p className="text-center text-primary-invert/60 text-xs mt-6">
                        No setup fees. No long-term contracts. Cancel anytime.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
