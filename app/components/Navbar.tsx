"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X } from "lucide-react";
import Button from "./ui/Button";
import { cn } from "@/lib/utils";

const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Process", href: "#process" },
    { name: "Pricing", href: "#pricing" },
    { name: "FAQ", href: "#faq" },
];

export default function Navbar() {
    const pathname = usePathname();
    const router = useRouter();
    const [hidden, setHidden] = useState(false);
    const { scrollY } = useScroll();
    const [lastY, setLastY] = useState(0);

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = lastY;
        if (latest > previous && latest > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }
        setLastY(latest);
    });

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const scrollTo = (href: string) => {
        if (pathname !== "/") {
            router.push(`/${href}`);
            return;
        }
        const id = href.replace("#", "");
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <>
            <div className="fixed top-6 inset-x-0 z-50 flex justify-center pointer-events-none">
                <motion.nav
                    variants={{
                        visible: { y: 0, opacity: 1, scale: 1 },
                        hidden: { y: -100, opacity: 0, scale: 0.9 }
                    }}
                    animate={hidden ? "hidden" : "visible"}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className={cn(
                        "pointer-events-auto",
                        "bg-surface-glass backdrop-blur-xl border border-white/20 shadow-premium",
                        "rounded-full px-6 py-3 flex items-center justify-between gap-8 h-14",
                        "min-w-[320px] max-w-[90vw] md:min-w-[600px]"
                    )}
                >
                    {/* Logo */}
                    <Link href="/" className="font-bold text-lg tracking-tight text-foreground flex items-center gap-2">
                        Katana.
                    </Link>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center gap-6">
                        {navLinks.map((link) => (
                            <button
                                key={link.name}
                                onClick={() => scrollTo(link.href)}
                                className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
                            >
                                {link.name}
                            </button>
                        ))}
                    </div>

                    {/* CTA & Mobile Toggle */}
                    <div className="flex items-center gap-2">
                        <Link href="https://cal.com/erwin-peter/15min" target="_blank" className="hidden md:block">
                            <Button variant="primary" className="h-9 px-4 text-xs rounded-full">
                                Book a Call
                            </Button>
                        </Link>

                        <button
                            className="md:hidden text-foreground p-1"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                        </button>
                    </div>
                </motion.nav>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.95 }}
                        className="fixed inset-x-4 top-24 z-40 bg-surface rounded-3xl p-6 shadow-2xl border border-white/10 flex flex-col gap-4 md:hidden"
                    >
                        {navLinks.map((link) => (
                            <button
                                key={link.name}
                                onClick={() => {
                                    scrollTo(link.href);
                                    setIsMobileMenuOpen(false);
                                }}
                                className="text-lg font-medium text-foreground p-2 rounded-xl hover:bg-secondary transition-colors text-left"
                            >
                                {link.name}
                            </button>
                        ))}
                        <Link href="https://cal.com/erwin-peter/15min" target="_blank" onClick={() => setIsMobileMenuOpen(false)}>
                            <Button variant="primary" className="w-full rounded-full">
                                Book a Call
                            </Button>
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
