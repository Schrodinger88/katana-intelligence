"use client";

import { motion } from "framer-motion";
import Button from "../ui/Button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Contact() {
    return (
        <section className="py-32 bg-background relative overflow-hidden text-center">
            {/* Animated background glow */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px]"
                    animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="max-w-4xl mx-auto"
                >
                    <motion.h2
                        className="text-5xl md:text-7xl font-semibold tracking-tight text-foreground mb-4"
                    >
                        Ready to stop
                    </motion.h2>
                    <motion.h2
                        className="text-5xl md:text-7xl font-semibold tracking-tight text-foreground/40 mb-8"
                    >
                        doing it all yourself?
                    </motion.h2>

                    <p className="text-xl text-foreground/60 mb-12 max-w-2xl mx-auto leading-relaxed">
                        Book a free 15-minute strategy call. We&apos;ll map out exactly
                        how to automate your biggest time drains — no strings attached.
                    </p>

                    <Link href="https://cal.com/erwin-peter/15min" target="_blank">
                        <Button variant="primary" className="h-16 px-12 text-xl rounded-full gap-3 group">
                            Book Your Free Call
                            <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
                        </Button>
                    </Link>

                    <p className="text-sm text-foreground/30 mt-8">
                        15 minutes. No sales pitch. Just clarity.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
