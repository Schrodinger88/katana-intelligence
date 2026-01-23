"use client";

import { motion } from "framer-motion";
import { Bot, Workflow, BrainCircuit, Database } from "lucide-react";

const services = [
    {
        icon: Bot,
        title: "AI Agents",
        description: "Autonomous workers that handle support, sales, and operations.",
        colSpan: "md:col-span-2"
    },
    {
        icon: Workflow,
        title: "Orchestration",
        description: "Connect APIs and data sources into a unified flow.",
        colSpan: "md:col-span-1"
    },
    {
        icon: BrainCircuit,
        title: "Cognitive Logic",
        description: "Systems that reason, plan, and execute complex tasks without supervision.",
        colSpan: "md:col-span-1"
    },
    {
        icon: Database,
        title: "Data Pipelines",
        description: "Clean, structured, and actionable data at scale.",
        colSpan: "md:col-span-2"
    }
];

export default function Services() {
    return (
        <section id="services" className="py-32 bg-background">
            <div className="container mx-auto px-6">
                <div className="mb-20">
                    <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-foreground mb-6">
                        Intelligence,<br />
                        <span className="text-foreground/40">Architected.</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.8 }}
                            className={`group bg-secondary rounded-[2rem] p-10 hover:bg-secondary/80 transition-colors duration-300 relative overflow-hidden ${service.colSpan}`}
                        >
                            <div className="relative z-10 flex flex-col h-full justify-between gap-12">
                                <div>
                                    <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 text-foreground group-hover:scale-110 transition-transform duration-500">
                                        <service.icon size={24} />
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-2xl font-semibold text-foreground mb-3">
                                        {service.title}
                                    </h3>
                                    <p className="text-foreground/60 text-lg leading-relaxed">
                                        {service.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
