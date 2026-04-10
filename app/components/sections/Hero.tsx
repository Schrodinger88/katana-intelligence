"use client";

import { motion } from "framer-motion";
import Button from "../ui/Button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-background pt-28 pb-20">

            {/* Ambient gradient background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    className="absolute top-[-20%] left-[10%] w-[600px] h-[600px] bg-accent/8 rounded-full blur-[120px]"
                    animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute bottom-[0%] right-[10%] w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px]"
                    animate={{ x: [0, -20, 0], y: [0, 30, 0] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-10 container mx-auto px-6 text-center max-w-5xl"
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="mb-8"
                >
                    <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/20 text-foreground/60 text-sm font-medium tracking-tight border border-white/10">
                        AI-powered growth for service businesses
                    </span>
                </motion.div>

                <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight text-foreground mb-4 leading-[1.05] whitespace-nowrap">
                    We build your growth engine.
                </h1>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight text-foreground/40 mb-10 leading-[1.05]">
                    You focus on the work.
                </h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="text-lg md:text-xl text-foreground/60 max-w-2xl mx-auto mb-12 leading-relaxed"
                >
                    Website, AI responder, lead generation, SEO, and marketing - all built for free.
                    You only pay when we deliver real, qualified leads.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                >
                    <Link href="https://cal.com/erwin-peter/15min" target="_blank">
                        <Button variant="primary" className="h-14 px-10 text-lg rounded-full gap-2 group">
                            Book a Free Call
                            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                        </Button>
                    </Link>
                    <Button
                        variant="outline"
                        className="h-14 px-8 text-lg rounded-full gap-2"
                        onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
                    >
                        See How It Works
                    </Button>
                </motion.div>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="w-6 h-10 rounded-full border-2 border-foreground/20 flex items-start justify-center p-1.5"
                >
                    <motion.div className="w-1.5 h-1.5 rounded-full bg-foreground/40" />
                </motion.div>
            </motion.div>
        </section>
    );
}
