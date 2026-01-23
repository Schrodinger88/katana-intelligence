"use client";

import { motion } from "framer-motion";
import Button from "../ui/Button";
import Link from "next/link";

export default function Contact() {
    return (
        <section className="py-32 bg-background relative overflow-hidden text-center">

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto"
                >
                    <h2 className="text-5xl md:text-7xl font-semibold tracking-tight text-foreground mb-8">
                        Ready to evolve?
                    </h2>
                    <p className="text-xl text-foreground/60 mb-12 max-w-2xl mx-auto">
                        Join the forward-thinking enterprises that are already operating at speed.
                    </p>

                    <Link href="https://calendly.com" target="_blank">
                        <Button variant="primary" className="h-16 px-12 text-xl rounded-full shadow-2xl hover:scale-105">
                            Start Now
                        </Button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
