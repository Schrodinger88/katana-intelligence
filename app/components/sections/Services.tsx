"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Bot, BarChart3, Globe, MessageSquare, Search, TrendingUp, ArrowRight } from "lucide-react";
import Link from "next/link";
import Button from "../ui/Button";

const services = [
    {
        slug: "ai-responder",
        icon: MessageSquare,
        title: "AI Responder",
        subtitle: "Never miss a lead again",
        description: "Your AI answers every call, DM, and form submission the second it comes in. Nights, weekends, holidays - it never sleeps. Leads get instant replies, quotes go out in minutes, and follow-ups happen automatically.",
        features: ["Instant call answering & routing", "Automated quote generation", "Smart follow-up sequences", "Works with your existing tools"],
        visual: (
            <div className="relative w-full h-full min-h-[300px] flex items-center justify-center">
                <div className="space-y-3 w-full max-w-sm">
                    {[
                        { time: "9:03 AM", msg: "Hi, I need a quote for kitchen remodeling", from: "lead" },
                        { time: "9:03 AM", msg: "Hi! I'd love to help. What's the size of your kitchen? I can get you a quote within minutes.", from: "ai" },
                        { time: "9:04 AM", msg: "About 200 sq ft, modern style", from: "lead" },
                        { time: "9:04 AM", msg: "Great - I'm putting together your estimate now. Can I book a quick call with our team for tomorrow?", from: "ai" },
                    ].map((message, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ delay: i * 0.3, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                            className={`flex ${message.from === "ai" ? "justify-end" : "justify-start"}`}
                        >
                            <div className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm ${
                                message.from === "ai"
                                    ? "bg-primary text-primary-invert rounded-br-sm"
                                    : "bg-white/10 text-foreground/80 rounded-bl-sm"
                            }`}>
                                <p>{message.msg}</p>
                                <p className={`text-[10px] mt-1 ${message.from === "ai" ? "text-primary-invert/50" : "text-foreground/30"}`}>{message.time}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        ),
    },
    {
        slug: "lead-generation",
        icon: BarChart3,
        title: "Lead Generation",
        subtitle: "Qualified leads on autopilot",
        description: "We don't just drive traffic - we build a full pipeline. Outbound campaigns, inbound funnels, and referral systems all wired together. You wake up to booked calls, not empty inboxes.",
        features: ["Automated outbound campaigns", "Inbound funnel optimization", "Lead scoring & qualification", "Pay only for qualified leads"],
        visual: (
            <div className="relative w-full h-full min-h-[300px] flex items-center justify-center">
                <div className="w-full max-w-sm space-y-4">
                    {[
                        { label: "Leads this month", value: "47", change: "+12", up: true },
                        { label: "Booked calls", value: "23", change: "+8", up: true },
                        { label: "Conversion rate", value: "48.9%", change: "+5.2%", up: true },
                    ].map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                            className="flex items-center justify-between bg-white/5 border border-white/10 rounded-xl px-5 py-4"
                        >
                            <div>
                                <p className="text-foreground/40 text-xs">{stat.label}</p>
                                <p className="text-foreground text-2xl font-bold">{stat.value}</p>
                            </div>
                            <span className="text-green-400 text-sm font-medium bg-green-400/10 px-2 py-0.5 rounded-full">{stat.change}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        ),
    },
    {
        slug: "admin-automation",
        icon: Bot,
        title: "Admin Automation",
        subtitle: "Reclaim 20+ hours a week",
        description: "Emails, scheduling, invoicing, follow-ups, data entry - we automate every repetitive task that eats your week. Your operations run on autopilot while you focus on high-value work.",
        features: ["Email & calendar automation", "Invoice generation & sending", "Client onboarding workflows", "Custom integrations with your stack"],
        visual: (
            <div className="relative w-full h-full min-h-[300px] flex items-center justify-center">
                <div className="w-full max-w-sm space-y-3">
                    {[
                        { task: "Send invoice #1847 to client", status: "Done", time: "2s ago" },
                        { task: "Schedule follow-up with John D.", status: "Done", time: "5m ago" },
                        { task: "Update CRM with new lead info", status: "Done", time: "12m ago" },
                        { task: "Send weekly report to team", status: "Running", time: "now" },
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.15, duration: 0.5 }}
                            className="flex items-center justify-between bg-white/5 border border-white/10 rounded-xl px-4 py-3"
                        >
                            <div className="flex items-center gap-3">
                                <div className={`w-2 h-2 rounded-full ${item.status === "Done" ? "bg-green-400" : "bg-yellow-400 animate-pulse"}`} />
                                <span className="text-foreground/70 text-sm">{item.task}</span>
                            </div>
                            <span className="text-foreground/30 text-xs">{item.time}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        ),
    },
    {
        slug: "website-design",
        icon: Globe,
        title: "Website Design",
        subtitle: "Sites that convert, not just look good",
        description: "Premium websites built to turn visitors into customers. Fast, mobile-first, SEO-ready - designed around your business goals, not a template. Built free, hosted on our infrastructure.",
        features: ["Conversion-optimized design", "Mobile-first & blazing fast", "SEO-ready from day one", "Free build, we host everything"],
        visual: (
            <div className="relative w-full h-full min-h-[300px] flex items-center justify-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full max-w-sm"
                >
                    <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
                        <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-white/5">
                            <div className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
                            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
                            <div className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
                            <div className="ml-3 flex-1 bg-white/5 rounded-full h-5 flex items-center px-3">
                                <span className="text-[10px] text-foreground/30">yourbusiness.com</span>
                            </div>
                        </div>
                        <div className="p-6 space-y-4">
                            <div className="h-3 bg-white/10 rounded-full w-3/4" />
                            <div className="h-2 bg-white/5 rounded-full w-full" />
                            <div className="h-2 bg-white/5 rounded-full w-5/6" />
                            <div className="mt-4 flex gap-2">
                                <div className="h-8 bg-primary/20 rounded-full w-24" />
                                <div className="h-8 bg-white/5 rounded-full w-20" />
                            </div>
                            <div className="grid grid-cols-3 gap-2 mt-4">
                                <div className="h-16 bg-white/5 rounded-lg" />
                                <div className="h-16 bg-white/5 rounded-lg" />
                                <div className="h-16 bg-white/5 rounded-lg" />
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        ),
    },
    {
        slug: "ai-seo",
        icon: Search,
        title: "AI SEO",
        subtitle: "Lead conversions by targeting AI answers over links",
        description: "We get you ranking on Google and AI answers for the searches your customers actually type. AI SEO (GEO, AEO), technical SEO, local SEO, and semantic content optimization - all done in-house, fully integrated with your lead engine.",
        features: ["GEO & AEO (AI answer optimization)", "SCO (Semantic Content Optimization)", "E-E-A-T signals for AI trust", "ROAS & CRO tracking"],
        visual: (
            <div className="relative w-full h-full min-h-[300px] flex items-center justify-center">
                <div className="w-full max-w-sm space-y-3">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="bg-white/5 border border-white/10 rounded-xl px-4 py-3"
                    >
                        <div className="flex items-center gap-2 mb-3">
                            <Search className="w-4 h-4 text-foreground/30" />
                            <span className="text-foreground/50 text-sm">plumber near me</span>
                        </div>
                        {[
                            { pos: "#1", name: "Your Business", highlight: true },
                            { pos: "#2", name: "competitor-a.com", highlight: false },
                            { pos: "#3", name: "competitor-b.com", highlight: false },
                        ].map((result, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3 + i * 0.15, duration: 0.4 }}
                                className={`flex items-center gap-3 py-2 ${i > 0 ? "border-t border-white/5" : ""}`}
                            >
                                <span className={`text-xs font-bold ${result.highlight ? "text-green-400" : "text-foreground/30"}`}>{result.pos}</span>
                                <span className={`text-sm ${result.highlight ? "text-foreground font-medium" : "text-foreground/40"}`}>{result.name}</span>
                                {result.highlight && <span className="ml-auto text-[10px] text-green-400 bg-green-400/10 px-2 py-0.5 rounded-full">You</span>}
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        ),
    },
    {
        slug: "performance-marketing",
        icon: TrendingUp,
        title: "Performance Marketing",
        subtitle: "Ads that actually pay for themselves",
        description: "Paid ads, landing pages, and conversion tracking - all wired into the same system as your AI responder. Every dollar is tracked, every lead is followed up, nothing slips through the cracks.",
        features: ["Google & Meta ad management", "Custom landing pages", "Full conversion tracking", "Integrated with your lead engine"],
        visual: (
            <div className="relative w-full h-full min-h-[300px] flex items-center justify-center">
                <div className="w-full max-w-sm">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="bg-white/5 border border-white/10 rounded-xl p-5"
                    >
                        <p className="text-foreground/40 text-xs mb-4">Campaign Performance</p>
                        <div className="flex items-end gap-1 h-32 mb-4">
                            {[30, 45, 35, 55, 70, 60, 85, 90, 75, 95, 88, 100].map((h, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ height: 0 }}
                                    animate={{ height: `${h}%` }}
                                    transition={{ delay: i * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                                    className="flex-1 bg-primary/30 rounded-sm hover:bg-primary/50 transition-colors"
                                />
                            ))}
                        </div>
                        <div className="flex justify-between text-xs text-foreground/30">
                            <span>Jan</span>
                            <span>Jun</span>
                            <span>Dec</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        ),
    },
];

export default function Services() {
    const [active, setActive] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    const activeService = services[active];

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 1023px)");
        const syncMobile = () => setIsMobile(mediaQuery.matches);

        syncMobile();
        mediaQuery.addEventListener("change", syncMobile);

        return () => mediaQuery.removeEventListener("change", syncMobile);
    }, []);

    return (
        <section id="services" className="relative overflow-hidden bg-background py-20 md:py-24">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-12 md:mb-14"
                >
                    <h2 className="mb-5 text-3xl font-semibold tracking-tight text-foreground md:text-5xl">
                        Everything you need to grow.<br />
                        <span className="text-foreground/40">Nothing you don&apos;t.</span>
                    </h2>
                    <p className="max-w-2xl text-lg text-foreground/60 md:text-xl">
                        Six services. One system. Every piece talks to every other piece -
                        so your leads, website, ads, and AI all work together.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2 lg:gap-12">
                    {/* Left: Service Tabs */}
                    <div className="space-y-3">
                        {services.map((service, index) => (
                            <div key={index}>
                                <motion.button
                                    onClick={() => setActive(index)}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.05, duration: 0.5 }}
                                    className={`group flex w-full items-center gap-4 rounded-2xl p-4 text-left transition-all duration-300 md:p-5 ${
                                        active === index
                                            ? "bg-secondary/80"
                                            : "bg-transparent hover:bg-secondary/30"
                                    }`}
                                >
                                    <div className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl transition-colors duration-300 ${
                                        active === index ? "bg-primary/20" : "bg-white/5"
                                    }`}>
                                        <service.icon size={20} className={`transition-colors duration-300 ${
                                            active === index ? "text-primary" : "text-foreground/40"
                                        }`} />
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <h3 className={`text-base font-semibold transition-colors duration-300 md:text-lg ${
                                            active === index ? "text-foreground" : "text-foreground/60"
                                        }`}>
                                            {service.title}
                                        </h3>
                                        <p className={`text-sm transition-colors duration-300 ${
                                            active === index ? "text-foreground/50" : "text-foreground/30"
                                        }`}>
                                            {service.subtitle}
                                        </p>
                                    </div>
                                    <ArrowRight className={`h-4 w-4 flex-shrink-0 transition-all duration-300 ${
                                        active === index ? "translate-x-0 text-foreground/40 opacity-100" : "-translate-x-2 text-foreground/20 opacity-0"
                                    }`} />
                                </motion.button>

                                {isMobile && active === index && (
                                    <div className="pt-3">
                                        <AnimatePresence mode="wait">
                                            <motion.div
                                                key={`mobile-${active}`}
                                                initial={{ opacity: 0, y: 16 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -8 }}
                                                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                                                className="rounded-[2rem] border border-white/5 bg-secondary/50 p-6"
                                            >
                                                <div className="mb-6">
                                                    {activeService.visual}
                                                </div>

                                                <p className="mb-5 text-base leading-relaxed text-foreground/70">
                                                    {activeService.description}
                                                </p>

                                                <div className="mb-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                                                    {activeService.features.map((f, i) => (
                                                        <motion.div
                                                            key={i}
                                                            initial={{ opacity: 0 }}
                                                            animate={{ opacity: 1 }}
                                                            transition={{ delay: i * 0.08 }}
                                                            className="flex items-center gap-2 text-sm text-foreground/50"
                                                        >
                                                            <div className="h-1 w-1 flex-shrink-0 rounded-full bg-primary" />
                                                            {f}
                                                        </motion.div>
                                                    ))}
                                                </div>

                                                <div className="flex flex-wrap gap-3">
                                                    <Link href={`/services/${activeService.slug}`}>
                                                        <Button variant="outline" className="h-11 rounded-full px-6 text-sm gap-2 group">
                                                            View service page
                                                            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                                        </Button>
                                                    </Link>
                                                    <Link href="https://cal.com/erwin-peter/15min" target="_blank">
                                                        <Button variant="ghost" className="h-11 rounded-full px-4 text-sm gap-2">
                                                            Book a strategy call
                                                        </Button>
                                                    </Link>
                                                </div>
                                            </motion.div>
                                        </AnimatePresence>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Right: Active Service Detail */}
                    <div className="hidden lg:sticky lg:top-28 lg:block">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={active}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                                className="rounded-[2rem] border border-white/5 bg-secondary/50 p-8 md:p-10"
                            >
                                {/* Visual */}
                                <div className="mb-8">
                                    {activeService.visual}
                                </div>

                                {/* Description */}
                                <p className="text-foreground/70 text-lg leading-relaxed mb-6">
                                    {activeService.description}
                                </p>

                                {/* Features */}
                                <div className="mb-8 grid grid-cols-2 gap-3">
                                    {activeService.features.map((f, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: i * 0.1 }}
                                            className="flex items-center gap-2 text-sm text-foreground/50"
                                        >
                                            <div className="w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                                            {f}
                                        </motion.div>
                                    ))}
                                </div>

                                <div className="flex flex-wrap gap-3">
                                    <Link href={`/services/${activeService.slug}`}>
                                        <Button variant="outline" className="rounded-full h-11 px-6 text-sm gap-2 group">
                                            View service page
                                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                        </Button>
                                    </Link>
                                    <Link href="https://cal.com/erwin-peter/15min" target="_blank">
                                        <Button variant="ghost" className="rounded-full h-11 px-4 text-sm gap-2">
                                            Book a strategy call
                                        </Button>
                                    </Link>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
}
