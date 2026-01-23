"use client";

import { motion } from "framer-motion";

const steps = [
    {
        id: "01",
        title: "Audit",
        description: "We map your operational DNA to find inefficiencies."
    },
    {
        id: "02",
        title: "Architect",
        description: "Designing the neural pathways of your new workflow."
    },
    {
        id: "03",
        title: "Deploy",
        description: "Seamless integration of agents into your slack/teams."
    },
    {
        id: "04",
        title: "Scale",
        description: "Feedback loops that improve system performance over time."
    }
];

export default function Process() {
    return (
        <section id="process" className="py-32 bg-secondary/30">
            <div className="container mx-auto px-6">
                <div className="max-w-2xl mb-24">
                    <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-foreground mb-6">
                        The Protocol.
                    </h2>
                    <p className="text-xl text-foreground/60">
                        A rigorous framework for digital transformation.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">

                    {/* Connecting Line (Desktop) */}
                    <div className="absolute top-8 left-0 right-0 h-px bg-foreground/10 hidden md:block" />

                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="relative p-6 pt-12"
                        >
                            <div className="w-4 h-4 rounded-full bg-foreground absolute top-6 left-6 md:left-0 md:-translate-y-1/2 md:translate-x-0 hidden md:block ring-4 ring-background" />

                            <span className="text-sm font-bold text-foreground/30 mb-4 block tracking-wider">
                                {step.id}
                            </span>
                            <h3 className="text-xl font-semibold text-foreground mb-3">
                                {step.title}
                            </h3>
                            <p className="text-foreground/60 leading-relaxed">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
