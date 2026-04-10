"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Button from "../ui/Button";
import { ArrowRight } from "lucide-react";

export default function Founder() {
    return (
        <section id="founder" className="py-32 bg-secondary/20">
            <div className="container mx-auto px-6">
                <div className="max-w-5xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-center">
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
                            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/40 text-foreground/60 text-sm font-medium tracking-tight mb-6 border border-white/10">
                                Not an agency. One operator.
                            </span>

                            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-foreground mb-6 leading-[1.1]">
                                Hey, I&apos;m Erwin.
                            </h2>

                            <p className="text-xl text-foreground/70 leading-relaxed mb-6">
                                Founder of Katana Intelligence. I build automation systems,
                                websites, and growth engines for service businesses - the kind
                                of operator work most agencies overcharge for and underdeliver on.
                            </p>

                            <p className="text-lg text-foreground/60 leading-relaxed mb-4">
                                When you work with Katana, you work with me directly.
                                No account managers, no handoffs, no 50-person agency overhead.
                                Beyond automation, I also handle
                                <span className="text-foreground/90"> AI SEO</span>,
                                <span className="text-foreground/90"> GEO/AEO</span>, and
                                <span className="text-foreground/90"> performance marketing</span> -
                                so the leads we generate turn into a system that compounds.
                            </p>

                            <p className="text-base text-foreground/40 leading-relaxed mb-8 italic">
                                Think of it as hiring a full-time growth team - except it&apos;s
                                one guy and a swarm of AI agents working for heavily below
                                minimum wage. They don&apos;t complain, they don&apos;t take
                                lunch breaks, and they definitely don&apos;t call in sick on Mondays.
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
