"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
    {
        quote: "Katana automated our entire onboarding process. What used to take 3 hours per client now takes 10 minutes.",
        name: "Sarah Chen",
        role: "Operations Director",
        company: "Meridian Consulting",
    },
    {
        quote: "Our lead pipeline went from inconsistent to completely predictable. We added 40+ qualified leads per month on autopilot.",
        name: "Marcus Williams",
        role: "Founder",
        company: "Apex Growth Agency",
    },
    {
        quote: "The website they built converts at 3x what our old one did. Clean, fast, and it actually communicates what we do.",
        name: "Priya Patel",
        role: "CEO",
        company: "NovaTech Solutions",
    },
];

export default function Testimonials() {
    return (
        <section id="testimonials" className="py-32 bg-background">
            <div className="container mx-auto px-6">
                <div className="mb-20">
                    <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-foreground mb-6">
                        Don&apos;t take<br />
                        <span className="text-foreground/40">our word for it.</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.8 }}
                            className="bg-secondary rounded-[2rem] p-10 flex flex-col justify-between"
                        >
                            <div>
                                <div className="flex gap-1 mb-6">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                                    ))}
                                </div>
                                <p className="text-foreground/80 text-lg leading-relaxed mb-8">
                                    &ldquo;{testimonial.quote}&rdquo;
                                </p>
                            </div>
                            <div>
                                <p className="font-semibold text-foreground">{testimonial.name}</p>
                                <p className="text-foreground/50 text-sm">
                                    {testimonial.role}, {testimonial.company}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
