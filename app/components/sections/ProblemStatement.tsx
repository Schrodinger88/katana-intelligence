"use client";

import { motion } from "framer-motion";
import Button from "../ui/Button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ProblemStatement() {
    return (
        <section className="relative overflow-hidden bg-black py-20 md:py-28">
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            </div>

            <div className="container mx-auto px-6">
                <div className="mx-auto max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="mb-10"
                    >
                        <p className="text-xl leading-relaxed text-foreground/70 md:text-2xl md:leading-relaxed">
                            You bought the AI tools. Read the case studies. Attended the webinars.
                            But months later, the tools sit unused. The pilots never scaled.
                            Your team is still doing the same manual work they were doing before.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.15 }}
                        className="mb-10"
                    >
                        <p className="text-xl leading-relaxed text-foreground/45 md:text-2xl md:leading-relaxed">
                            You&apos;re not behind. You just need a partner who starts with your workflows,
                            not with the technology. One who builds what actually matters -
                            and stays until it sticks.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <p className="text-lg font-semibold text-primary md:text-xl">
                            Stop paying to experiment. Start paying for results.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.45 }}
                        className="mt-10"
                    >
                        <Link href="https://cal.com/erwin-peter/15min" target="_blank">
                            <Button variant="outline" className="h-12 rounded-full px-8 text-base gap-2 group">
                                Get in Touch
                                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
