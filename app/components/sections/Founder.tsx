"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Founder() {
    return (
        <section id="founder" className="py-32 bg-background">
            <div className="container mx-auto px-6">
                <div className="max-w-5xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="md:col-span-2"
                        >
                            <div className="relative aspect-square rounded-[2rem] overflow-hidden bg-secondary">
                                <Image
                                    src="/erwan-headshot.png"
                                    alt="Erwan — Founder of Katana Intelligence"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="md:col-span-3"
                        >
                            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-foreground/60 text-sm font-medium tracking-tight mb-6">
                                Not an agency. One operator.
                            </span>

                            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-foreground mb-6 leading-[1.1]">
                                Hey, I&apos;m Erwan.
                            </h2>

                            <p className="text-xl text-foreground/70 leading-relaxed mb-6">
                                Founder of Katana Intelligence. An aspiring entrepreneur who
                                fell in love with automation in every shape and form — now
                                building systems that simplify operations and help others
                                scale with less manual work.
                            </p>

                            <p className="text-lg text-foreground/60 leading-relaxed">
                                When you work with Katana, you work with me directly.
                                No account managers, no handoffs, no 50-person agency overhead.
                                Just sharp systems, built personally, with the tools I use every day:
                                <span className="text-foreground/90"> OpenClaw</span> and
                                <span className="text-foreground/90"> Claude Cowork</span>.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
