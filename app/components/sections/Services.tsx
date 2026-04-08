"use client";

import { motion } from "framer-motion";
import { Bot, BarChart3, Globe, MessageSquare } from "lucide-react";

const services = [
    {
        icon: MessageSquare,
        title: "AI Responder 24/7",
        description: "Built on OpenClaw and Claude Cowork, our AI answers every call, DM, and form the second it hits — so you never lose a lead to a missed reply again.",
        colSpan: "md:col-span-2"
    },
    {
        icon: BarChart3,
        title: "Lead Generation",
        description: "Automated outreach that books calls while you sleep. Pay only when we deliver real, qualified leads.",
        colSpan: "md:col-span-1"
    },
    {
        icon: Bot,
        title: "Admin Automation",
        description: "Emails, scheduling, invoicing, follow-ups — we cut the busywork that eats your week.",
        colSpan: "md:col-span-1"
    },
    {
        icon: Globe,
        title: "Website Design",
        description: "Premium sites that turn traffic into booked jobs. Built free, hosted on our infrastructure, tuned for conversion.",
        colSpan: "md:col-span-2"
    }
];

export default function Services() {
    return (
        <section id="services" className="py-32 bg-background">
            <div className="container mx-auto px-6">
                <div className="mb-20">
                    <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-foreground mb-6">
                        What we do<br />
                        <span className="text-foreground/40">for you.</span>
                    </h2>
                    <p className="text-xl text-foreground/60 max-w-2xl">
                        We handle the systems, so you can handle the business.
                        Every service is fully done-for-you.
                    </p>
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
                                    <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                                        <service.icon size={24} className="text-primary" />
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
