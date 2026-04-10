"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Button from "../ui/Button";
import { ArrowRight } from "lucide-react";

export default function Founder() {
    return (
        <section id="founder" className="relative overflow-hidden bg-background py-12 md:py-16">
            <div className="container mx-auto px-6">
                <div className="mx-auto max-w-4xl">
                    <div className="grid grid-cols-1 items-center gap-6 rounded-[2rem] border border-white/6 bg-white/[0.025] p-5 md:grid-cols-[120px_1fr] md:gap-8 md:p-6">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="mx-auto w-full max-w-[120px]"
                        >
                            <div className="group relative aspect-square overflow-hidden rounded-[1.5rem] bg-secondary/40">
                                <Image
                                    src="/erwan-headshot.png"
                                    alt="Erwin - Founder of Katana Intelligence"
                                    fill
                                    className="object-cover opacity-80 transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/10 to-transparent" />
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                            className="text-center md:text-left"
                        >
                            <span className="mb-3 inline-block text-[11px] font-medium uppercase tracking-[0.28em] text-foreground/25">
                                Founder
                            </span>

                            <h2 className="mb-2 text-lg font-medium tracking-tight text-foreground/72 md:text-xl">
                                Erwin Peter
                            </h2>

                            <div className="mb-4 flex flex-wrap justify-center gap-2 md:justify-start">
                                <span className="rounded-full border border-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-foreground/35">
                                    Proudly Canadian
                                </span>
                                <span className="rounded-full border border-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-foreground/35">
                                    English
                                </span>
                                <span className="rounded-full border border-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-foreground/35">
                                    Francais
                                </span>
                            </div>

                            <p className="mb-3 text-sm leading-relaxed text-foreground/50 md:max-w-2xl">
                                I&apos;m a professional automation workflow specialist with a real passion
                                for building systems that remove bottlenecks, recover time, and create
                                cleaner growth for service businesses.
                            </p>

                            <p className="mb-5 text-sm leading-relaxed text-foreground/38 md:max-w-2xl">
                                Je conçois des systèmes d&apos;automatisation utiles, rapides et
                                solides pour les entreprises de service.
                            </p>

                            <Link href="https://cal.com/erwin-peter/15min" target="_blank">
                                <Button variant="outline" className="h-10 rounded-full px-5 text-sm gap-2 group border-white/10 text-foreground/70 hover:text-foreground">
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
