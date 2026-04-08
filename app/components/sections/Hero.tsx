"use client";

import { motion } from "framer-motion";
import Button from "../ui/Button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden bg-background pt-28 pb-16">

            {/* Subtle Background Blobs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] animate-pulse" />
                <div className="absolute bottom-[10%] right-[20%] w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[100px]" />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
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
                    <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-foreground/60 text-sm font-medium tracking-tight">
                        Pay only when we deliver leads
                    </span>
                </motion.div>

                <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight text-foreground mb-8 leading-[1.1]">
                    Stop missing calls. <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground to-foreground/50">
                        Stop losing quotes.
                    </span>
                </h1>

                <p className="text-xl text-foreground/60 max-w-2xl mx-auto mb-12 leading-relaxed">
                    We build your website, AI responder, and lead engine — then handle your
                    SEO, ASO, and marketing. All for free, until we deliver 10 qualified leads.
                    Sharp systems, surgical results.
                </p>

                <div className="flex flex-wrap justify-center gap-2 mb-10 max-w-2xl mx-auto">
                    {["Never miss a call", "Follow-ups on autopilot", "Rank on Google", "Quotes sent in minutes"].map((tag) => (
                        <span key={tag} className="text-xs md:text-sm text-foreground/50 px-3 py-1 rounded-full bg-secondary/60">
                            {tag}
                        </span>
                    ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Link href="https://cal.com/erwin-peter/30min" target="_blank">
                        <Button variant="primary" className="h-14 px-10 text-lg rounded-full gap-2">
                            Get Your Free Audit <ArrowRight className="w-5 h-5" />
                        </Button>
                    </Link>
                    <Link href="#services">
                        <Button variant="secondary" className="h-14 px-8 text-lg rounded-full gap-2">
                            See What We Build
                        </Button>
                    </Link>
                </div>

                <p className="text-sm text-foreground/40 mt-6">
                    Not ready to book? <Link href="mailto:hello@katanaintelligence.com?subject=Send%20me%20the%20lead%20leak%20checklist" className="underline hover:text-foreground/70 transition-colors">Get the free &ldquo;Lead Leak&rdquo; checklist</Link> instead.
                </p>
            </motion.div>
        </section>
    );
}
