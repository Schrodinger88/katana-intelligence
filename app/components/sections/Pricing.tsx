"use client";

import { motion } from "framer-motion";
import Button from "../ui/Button";
import Link from "next/link";
import { Check } from "lucide-react";

const plans = [
    {
        name: "Starter",
        price: "2,500",
        period: "/month",
        description: "Perfect for small businesses ready to stop doing everything manually.",
        features: [
            "1 core automation workflow",
            "Email & calendar automation",
            "Basic lead capture setup",
            "Weekly performance reports",
            "Slack/email support",
        ],
        cta: "Get Started",
        highlighted: false,
    },
    {
        name: "Growth",
        price: "5,000",
        period: "/month",
        description: "For businesses serious about scaling with AI-powered systems.",
        features: [
            "3 automation workflows",
            "Full admin automation suite",
            "Lead gen & outreach sequences",
            "Landing page or website redesign",
            "Bi-weekly strategy calls",
            "Priority support",
        ],
        cta: "Most Popular",
        highlighted: true,
    },
    {
        name: "Enterprise",
        price: "Custom",
        period: "",
        description: "Full-service automation partner for established businesses.",
        features: [
            "Unlimited automation workflows",
            "Complete website build",
            "Advanced AI agent deployment",
            "Custom integrations & APIs",
            "Dedicated account manager",
            "24/7 priority support",
        ],
        cta: "Let's Talk",
        highlighted: false,
    },
];

export default function Pricing() {
    return (
        <section id="pricing" className="py-32 bg-background">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-foreground mb-6">
                        Simple pricing.
                    </h2>
                    <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
                        No hidden fees. No long-term contracts. Cancel anytime.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.8 }}
                            className={`rounded-[2rem] p-10 flex flex-col ${
                                plan.highlighted
                                    ? "bg-primary text-primary-invert ring-2 ring-primary"
                                    : "bg-secondary"
                            }`}
                        >
                            <div className="mb-8">
                                <h3 className={`text-xl font-semibold mb-2 ${
                                    plan.highlighted ? "text-primary-invert" : "text-foreground"
                                }`}>
                                    {plan.name}
                                </h3>
                                <div className="flex items-baseline gap-1 mb-4">
                                    <span className={`text-4xl font-bold ${
                                        plan.highlighted ? "text-primary-invert" : "text-foreground"
                                    }`}>
                                        {plan.price === "Custom" ? "" : "$"}{plan.price}
                                    </span>
                                    {plan.period && (
                                        <span className={
                                            plan.highlighted ? "text-primary-invert/60" : "text-foreground/50"
                                        }>
                                            {plan.period}
                                        </span>
                                    )}
                                </div>
                                <p className={`text-sm leading-relaxed ${
                                    plan.highlighted ? "text-primary-invert/70" : "text-foreground/60"
                                }`}>
                                    {plan.description}
                                </p>
                            </div>

                            <ul className="space-y-3 mb-10 flex-1">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <Check className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                                            plan.highlighted ? "text-primary-invert" : "text-primary"
                                        }`} />
                                        <span className={`text-sm ${
                                            plan.highlighted ? "text-primary-invert/80" : "text-foreground/70"
                                        }`}>
                                            {feature}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            <Link href="https://cal.com" target="_blank">
                                <Button
                                    variant={plan.highlighted ? "secondary" : "primary"}
                                    className="w-full rounded-full h-12"
                                >
                                    {plan.cta}
                                </Button>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
