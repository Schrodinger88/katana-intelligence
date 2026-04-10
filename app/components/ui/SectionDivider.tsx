"use client";

import { motion } from "framer-motion";

interface SectionDividerProps {
    from?: string;
    to?: string;
}

export default function SectionDivider({ from = "transparent", to = "transparent" }: SectionDividerProps) {
    return (
        <div className="relative h-24 md:h-32 overflow-hidden">
            <div
                className="absolute inset-0"
                style={{
                    background: `linear-gradient(to bottom, ${from}, ${to})`,
                }}
            />
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2 }}
                className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px"
                style={{
                    background: "linear-gradient(to right, transparent, rgba(255,255,255,0.06) 30%, rgba(255,255,255,0.06) 70%, transparent)",
                }}
            />
        </div>
    );
}
