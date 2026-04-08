"use client";

import { motion } from "framer-motion";
import Button from "../ui/Button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Contact() {
    return (
        <section className="py-24 bg-background relative overflow-hidden text-center">
            {/* Background glow */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto"
                >
                    <h2 className="text-5xl md:text-7xl font-semibold tracking-tight text-foreground mb-8">
                        Ready to stop<br />doing it all yourself?
                    </h2>
                    <p className="text-xl text-foreground/60 mb-12 max-w-2xl mx-auto">
                        Book a free 30-minute strategy call. We&apos;ll map out exactly
                        how to automate your biggest time drains — no strings attached.
                    </p>

                    <Link href="https://cal.com/erwin-peter/30min" target="_blank">
                        <Button variant="primary" className="h-16 px-12 text-xl rounded-full shadow-2xl hover:scale-105 gap-2">
                            Book Your Free Call <ArrowRight className="w-5 h-5" />
                        </Button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
