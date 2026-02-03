"use client";

import { motion } from "framer-motion";
import Button from "../ui/Button";
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden bg-background pt-32 pb-20">

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
                        New: Autonomous Workflows 2.0
                    </span>
                </motion.div>

                <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight text-foreground mb-8 leading-[1.1]">
                    Surgically precise <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground to-foreground/50">
                        automation.
                    </span>
                </h1>

                <p className="text-xl text-foreground/60 max-w-2xl mx-auto mb-12 leading-relaxed">
                    Katana builds the intelligent infrastructure that powers modern enterprises.
                    Seamless, invisible, and rigorously efficient.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Link href="https://calendly.com" target="_blank">
                        <Button variant="primary" className="h-14 px-10 text-lg rounded-full">
                            Book a Strategy Call
                        </Button>
                    </Link>
                    <Button variant="secondary" className="h-14 px-8 text-lg rounded-full gap-2">
                        <Play className="w-4 h-4 fill-current" /> Watch Demo
                    </Button>
                </div>
            </motion.div>

            {/* Optional: Abstract 3D shape or clean image could go here */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="mt-24 w-full max-w-6xl mx-auto px-6 relative"
            >
                <div className="aspect-[16/9] rounded-[2rem] bg-secondary overflow-hidden shadow-2xl ring-1 ring-black/5 border border-white/20 relative group">
                    {/* Placeholder for Product UI or Image */}
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-tr from-gray-100 to-white">
                        <span className="text-foreground/20 font-medium">App Interface / Dashboard Preview</span>
                    </div>

                    {/* Overlay reflection */}
                    <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />
                </div>
            </motion.div>

        </section>
    );
}
