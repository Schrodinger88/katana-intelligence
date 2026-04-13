"use client";

import { motion } from "framer-motion";
import Button from "../ui/Button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-background px-0 pt-28 pb-16 sm:pb-20">

            {/* Ambient gradient background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    className="absolute top-[-20%] left-[10%] h-[600px] w-[600px] rounded-full bg-accent/8 blur-[120px]"
                    animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute right-[10%] bottom-[0%] h-[500px] w-[500px] rounded-full bg-primary/6 blur-[120px]"
                    animate={{ x: [0, -20, 0], y: [0, 30, 0] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent via-primary/5 to-secondary/20"
                    animate={{ opacity: [0.45, 0.8, 0.45] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center px-6 text-center"
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="mb-8"
                >
                    <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/20 text-foreground/60 text-sm font-medium tracking-tight border border-white/10">
                        AI automation that actually delivers
                    </span>
                </motion.div>

                <h1 className="mx-auto max-w-5xl text-center text-4xl font-semibold leading-[1.02] tracking-tight text-foreground sm:text-5xl md:text-7xl lg:text-8xl text-balance">
                    We don&apos;t just talk AI.
                </h1>
                <p className="mx-auto mb-8 max-w-4xl text-center text-4xl font-semibold leading-[1.05] tracking-tight text-foreground/40 sm:text-5xl md:mb-10 md:text-7xl lg:text-8xl text-balance">
                    We deliver it.
                </p>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-foreground/60 md:mb-12 md:text-xl"
                >
                    We help businesses identify AI opportunities that will actually transform their operations,
                    then we build it, deploy it, and train your team to use it. You only pay for results.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="flex flex-col items-center justify-center gap-4 sm:flex-row"
                >
                    <Link href="https://cal.com/erwin-peter/15min" target="_blank">
                        <Button variant="primary" className="h-14 px-10 text-lg rounded-full gap-2 group">
                            Get in Touch
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

                <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-foreground/42">
                    <span>AI Automation</span>
                    <span>Custom AI Solutions</span>
                    <span>Workflow Optimization</span>
                    <span>Team Training</span>
                </div>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-6 left-1/2 -translate-x-1/2 sm:bottom-8"
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
