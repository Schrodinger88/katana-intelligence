"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Button from "../ui/Button";
import { ArrowRight } from "lucide-react";

export default function Founder() {
    return (
        <section id="founder" className="relative overflow-hidden bg-secondary/20 py-20 md:py-24">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-transparent via-primary/4 to-transparent" />
            <div className="container mx-auto px-6">
                <div className="max-w-5xl mx-auto">
                    <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-5 md:gap-12">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="md:col-span-2"
                        >
                            <div className="relative aspect-square rounded-[2rem] overflow-hidden bg-secondary group">
                                <Image
                                    src="/erwan-headshot.png"
                                    alt="Erwin - Founder of Katana Intelligence"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    priority
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                            className="md:col-span-3"
                        >
                            <span className="mb-6 inline-block rounded-full border border-white/10 bg-secondary/40 px-4 py-1.5 text-sm font-medium tracking-tight text-foreground/60">
                                Not an agency. One operator.
                            </span>

                            <h2 className="mb-4 text-3xl font-semibold leading-[1.1] tracking-tight text-foreground md:text-5xl">
                                Hey, I&apos;m Erwin.
                            </h2>

                            <p className="mb-4 text-lg leading-relaxed text-foreground/70 md:text-xl">
                                Founder of Katana Intelligence.
                            </p>

                            <p className="mb-4 text-lg leading-relaxed text-foreground/60">
                                I design and implement automation systems, websites, and growth
                                infrastructure for service businesses.
                            </p>

                            <p className="mb-4 text-lg leading-relaxed text-foreground/60">
                                No layers, no handoffs just direct execution. Every system is built
                                to reduce manual work, increase qualified lead flow, and compound over time.
                            </p>

                            <p className="mb-4 text-lg leading-relaxed text-foreground/60">
                                I integrate AI SEO, GEO/AEO, and performance marketing so acquisition
                                and conversion operate as one system.
                            </p>

                            <p className="mb-8 text-lg leading-relaxed text-foreground/50">
                                Katana isn&apos;t an agency it&apos;s a lean, operator-led growth engine powered by AI.
                                Think of it as a full growth team without the overhead, meetings, or delays.
                            </p>

                            <Link href="https://cal.com/erwin-peter/15min" target="_blank">
                                <Button variant="outline" className="rounded-full h-12 px-6 text-sm gap-2 group">
                                    Let&apos;s talk
                                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                </Button>
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
