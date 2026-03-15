"use client";

import { motion } from "framer-motion";
import { Clock, Users, TrendingUp, DollarSign } from "lucide-react";

const results = [
    {
        icon: Clock,
        metric: "160+",
        unit: "hours",
        description: "Saved per month across our clients",
    },
    {
        icon: Users,
        metric: "500+",
        unit: "leads",
        description: "Generated monthly through automation",
    },
    {
        icon: TrendingUp,
        metric: "3.2x",
        unit: "ROI",
        description: "Average return on investment",
    },
    {
        icon: DollarSign,
        metric: "$2M+",
        unit: "revenue",
        description: "Influenced by our client systems",
    },
];

export default function Results() {
    return (
        <section id="results" className="py-32 bg-secondary/30">
            <div className="container mx-auto px-6">
                <div className="max-w-2xl mb-20">
                    <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-foreground mb-6">
                        Real numbers.
                    </h2>
                    <p className="text-xl text-foreground/60">
                        Results our clients see within the first 90 days.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {results.map((result, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.8 }}
                            className="bg-background rounded-[2rem] p-8 text-center border border-white/5"
                        >
                            <result.icon className="w-8 h-8 text-primary mx-auto mb-4" />
                            <p className="text-4xl md:text-5xl font-bold text-foreground mb-1">
                                {result.metric}
                            </p>
                            <p className="text-sm text-foreground/40 uppercase tracking-wider mb-3">
                                {result.unit}
                            </p>
                            <p className="text-foreground/60 text-sm leading-relaxed">
                                {result.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
