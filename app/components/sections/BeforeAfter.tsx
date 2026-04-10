"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { X, Check, MessageSquare, Phone, Send } from "lucide-react";

const comparisons = [
    {
        category: "Lead Response",
        before: { text: "Missed calls go to voicemail. Leads wait hours - or never hear back.", stat: "~4 hr avg response" },
        after: { text: "AI answers instantly. Quotes sent in minutes. Follow-ups are automatic.", stat: "< 30 sec response" },
    },
    {
        category: "Admin Work",
        before: { text: "Evenings spent on emails, invoices, and scheduling. Weekends too.", stat: "20+ hrs/week wasted" },
        after: { text: "Automated workflows handle the busywork. You focus on delivery.", stat: "2 hrs/week max" },
    },
    {
        category: "Online Presence",
        before: { text: "Outdated website. No SEO. Competitors rank above you on Google.", stat: "Page 3+ on Google" },
        after: { text: "Premium site + AI SEO + local optimization. Customers find you first.", stat: "Top 3 results" },
    },
    {
        category: "Growth",
        before: { text: "Word-of-mouth only. Feast-or-famine months. No predictable pipeline.", stat: "Inconsistent leads" },
        after: { text: "Multi-channel lead engine running 24/7. Predictable, compounding growth.", stat: "30-50 leads/month" },
    },
];

const chatbotReplies: Record<string, string> = {
    default: "Hi! I'm the Katana AI assistant. Ask me anything about our services - website builds, lead generation, AI SEO, or automation. How can I help?",
    pricing: "Great question! We build everything for free - website, AI responder, lead engine. You only pay $899/mo once we deliver your first 10 qualified leads. Zero risk.",
    services: "We offer 6 core services: AI Responder, Lead Generation, Admin Automation, Website Design, AI SEO, and Performance Marketing. All integrated into one system.",
    leads: "Our AI lead engine runs 24/7 across multiple channels. Most clients see 30-50 qualified leads per month within 60 days of launch.",
    seo: "We specialize in AI SEO - GEO, AEO, and semantic content optimization. We help your business show up in AI-generated answers, not just traditional links.",
};

function getChatbotReply(message: string): string {
    const lower = message.toLowerCase();
    if (lower.includes("price") || lower.includes("cost") || lower.includes("pay") || lower.includes("how much")) return chatbotReplies.pricing;
    if (lower.includes("service") || lower.includes("what do") || lower.includes("offer")) return chatbotReplies.services;
    if (lower.includes("lead") || lower.includes("client") || lower.includes("customer")) return chatbotReplies.leads;
    if (lower.includes("seo") || lower.includes("google") || lower.includes("rank")) return chatbotReplies.seo;
    return "That's a great question! For a detailed answer tailored to your business, I'd recommend booking a free 15-minute call with Erwin. He can walk you through exactly how Katana can help. Want me to send you the booking link?";
}

function ChatbotDemo() {
    const [messages, setMessages] = useState<{ text: string; from: "user" | "ai" }[]>([
        { text: chatbotReplies.default, from: "ai" },
    ]);
    const [input, setInput] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages, isTyping]);

    const sendMessage = () => {
        if (!input.trim() || isTyping) return;
        const userMsg = input.trim();
        setMessages((prev) => [...prev, { text: userMsg, from: "user" }]);
        setInput("");
        setIsTyping(true);
        setTimeout(() => {
            setMessages((prev) => [...prev, { text: getChatbotReply(userMsg), from: "ai" }]);
            setIsTyping(false);
        }, 800 + Math.random() * 600);
    };

    return (
        <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden flex flex-col h-[380px]">
            <div className="px-5 py-3 border-b border-white/5 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-sm font-medium text-foreground/70">Katana AI Chatbot</span>
                <span className="text-[10px] text-foreground/30 ml-auto">Live demo</span>
            </div>
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
                {messages.map((msg, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className={`flex ${msg.from === "ai" ? "justify-start" : "justify-end"}`}
                    >
                        <div className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm ${
                            msg.from === "ai"
                                ? "bg-white/10 text-foreground/80 rounded-bl-sm"
                                : "bg-primary text-primary-invert rounded-br-sm"
                        }`}>
                            {msg.text}
                        </div>
                    </motion.div>
                ))}
                {isTyping && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex justify-start"
                    >
                        <div className="bg-white/10 rounded-2xl rounded-bl-sm px-4 py-3 flex gap-1">
                            <motion.div animate={{ y: [0, -4, 0] }} transition={{ duration: 0.6, repeat: Infinity, delay: 0 }} className="w-1.5 h-1.5 rounded-full bg-foreground/40" />
                            <motion.div animate={{ y: [0, -4, 0] }} transition={{ duration: 0.6, repeat: Infinity, delay: 0.15 }} className="w-1.5 h-1.5 rounded-full bg-foreground/40" />
                            <motion.div animate={{ y: [0, -4, 0] }} transition={{ duration: 0.6, repeat: Infinity, delay: 0.3 }} className="w-1.5 h-1.5 rounded-full bg-foreground/40" />
                        </div>
                    </motion.div>
                )}
                <div ref={messagesEndRef} />
            </div>
            <div className="p-3 border-t border-white/5">
                <div className="flex gap-2">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                        placeholder="Try: What are your prices?"
                        className="flex-1 bg-white/5 border border-white/10 rounded-full px-4 py-2.5 text-sm text-foreground placeholder:text-foreground/30 outline-none focus:border-white/20 transition-colors"
                    />
                    <button
                        onClick={sendMessage}
                        className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary/30 transition-colors"
                    >
                        <Send className="w-4 h-4 text-primary" />
                    </button>
                </div>
            </div>
        </div>
    );
}

function CallerDemo() {
    const [callState, setCallState] = useState<"idle" | "ringing" | "connected" | "ended">("idle");
    const [transcript, setTranscript] = useState<string[]>([]);

    const callerScript = [
        { speaker: "AI", text: "Good morning! Thanks for calling Katana Intelligence. How can I help you today?" },
        { speaker: "Caller", text: "Hi, I'm looking for help with lead generation for my plumbing business." },
        { speaker: "AI", text: "Absolutely! We specialize in that. Can I ask - how many leads are you currently getting per month?" },
        { speaker: "Caller", text: "Maybe 5-10, mostly word of mouth." },
        { speaker: "AI", text: "Got it. Most of our clients in home services go from that range to 30-50 qualified leads monthly. Want me to book you a free 15-minute strategy call with Erwin?" },
        { speaker: "Caller", text: "Yeah, that sounds great." },
        { speaker: "AI", text: "Perfect! I've sent a booking link to your phone. You'll get a confirmation within seconds. Anything else I can help with?" },
    ];

    const startCall = () => {
        setCallState("ringing");
        setTranscript([]);
        setTimeout(() => {
            setCallState("connected");
            let i = 0;
            const interval = setInterval(() => {
                if (i < callerScript.length) {
                    setTranscript((prev) => [...prev, `${callerScript[i].speaker}: ${callerScript[i].text}`]);
                    i++;
                } else {
                    clearInterval(interval);
                    setTimeout(() => setCallState("ended"), 1500);
                }
            }, 2000);
        }, 1500);
    };

    return (
        <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden flex flex-col h-[380px]">
            <div className="px-5 py-3 border-b border-white/5 flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-foreground/50" />
                <span className="text-sm font-medium text-foreground/70">Katana AI Caller</span>
                <span className={`text-[10px] ml-auto px-2 py-0.5 rounded-full ${
                    callState === "connected" ? "bg-green-500/10 text-green-400" :
                    callState === "ringing" ? "bg-yellow-500/10 text-yellow-400" :
                    "text-foreground/30"
                }`}>
                    {callState === "idle" ? "Demo" : callState === "ringing" ? "Ringing..." : callState === "connected" ? "Connected" : "Call ended"}
                </span>
            </div>
            <div className="flex-1 overflow-y-auto p-4">
                {callState === "idle" && (
                    <div className="h-full flex flex-col items-center justify-center gap-4">
                        <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center">
                            <Phone className="w-7 h-7 text-green-400" />
                        </div>
                        <p className="text-foreground/50 text-sm text-center max-w-[200px]">
                            See how our AI handles incoming calls for your business
                        </p>
                        <button
                            onClick={startCall}
                            className="px-6 py-2.5 bg-green-500/20 text-green-400 rounded-full text-sm font-medium hover:bg-green-500/30 transition-colors"
                        >
                            Simulate a Call
                        </button>
                    </div>
                )}
                {callState === "ringing" && (
                    <div className="h-full flex flex-col items-center justify-center gap-4">
                        <motion.div
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center"
                        >
                            <Phone className="w-7 h-7 text-green-400" />
                        </motion.div>
                        <p className="text-foreground/50 text-sm">Incoming call...</p>
                    </div>
                )}
                {(callState === "connected" || callState === "ended") && (
                    <div className="space-y-3">
                        <p className="text-[10px] text-foreground/30 text-center mb-4">Live transcript</p>
                        {transcript.map((line, i) => {
                            const isAI = line.startsWith("AI:");
                            return (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 8 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className={`flex ${isAI ? "justify-start" : "justify-end"}`}
                                >
                                    <div className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm ${
                                        isAI
                                            ? "bg-white/10 text-foreground/80 rounded-bl-sm"
                                            : "bg-primary/20 text-foreground/70 rounded-br-sm"
                                    }`}>
                                        <span className="text-[10px] text-foreground/30 block mb-1">{isAI ? "AI Agent" : "Caller"}</span>
                                        {line.replace(/^(AI|Caller): /, "")}
                                    </div>
                                </motion.div>
                            );
                        })}
                        {callState === "ended" && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="text-center pt-4"
                            >
                                <p className="text-green-400 text-xs mb-3">Call completed - lead booked!</p>
                                <button
                                    onClick={() => { setCallState("idle"); setTranscript([]); }}
                                    className="px-4 py-2 bg-white/5 text-foreground/50 rounded-full text-xs hover:bg-white/10 transition-colors"
                                >
                                    Try Again
                                </button>
                            </motion.div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}

export default function BeforeAfter() {
    const [showAfter, setShowAfter] = useState(false);

    return (
        <section className="py-32 bg-secondary/20">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-foreground mb-6">
                        See the difference.
                    </h2>
                    <p className="text-xl text-foreground/60 max-w-2xl mx-auto mb-10">
                        What changes when your business runs on Katana.
                    </p>

                    {/* Toggle */}
                    <div className="inline-flex items-center bg-secondary/60 border border-white/10 rounded-full p-1">
                        <button
                            onClick={() => setShowAfter(false)}
                            className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                                !showAfter
                                    ? "bg-red-500/20 text-red-400 shadow-sm"
                                    : "text-foreground/40 hover:text-foreground/60"
                            }`}
                        >
                            Without Katana
                        </button>
                        <button
                            onClick={() => setShowAfter(true)}
                            className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                                showAfter
                                    ? "bg-green-500/20 text-green-400 shadow-sm"
                                    : "text-foreground/40 hover:text-foreground/60"
                            }`}
                        >
                            With Katana
                        </button>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                    {comparisons.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            className={`rounded-[2rem] p-8 border transition-all duration-500 ${
                                showAfter
                                    ? "bg-green-500/5 border-green-500/10"
                                    : "bg-red-500/5 border-red-500/10"
                            }`}
                        >
                            <span className="text-xs font-bold text-foreground/30 tracking-widest mb-4 block uppercase">
                                {item.category}
                            </span>

                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={showAfter ? "after" : "before"}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className="flex items-start gap-3 mb-4">
                                        {showAfter ? (
                                            <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                <Check className="w-3.5 h-3.5 text-green-400" />
                                            </div>
                                        ) : (
                                            <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                <X className="w-3.5 h-3.5 text-red-400" />
                                            </div>
                                        )}
                                        <p className="text-foreground/70 text-lg leading-relaxed">
                                            {showAfter ? item.after.text : item.before.text}
                                        </p>
                                    </div>
                                    <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                                        showAfter
                                            ? "bg-green-500/10 text-green-400"
                                            : "bg-red-500/10 text-red-400"
                                    }`}>
                                        {showAfter ? item.after.stat : item.before.stat}
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>

                {/* AI Demo Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="max-w-5xl mx-auto mt-16"
                >
                    <div className="text-center mb-10">
                        <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground mb-3">
                            Try it yourself.
                        </h3>
                        <p className="text-foreground/50">
                            Chat with our AI or hear how it handles a phone call - live.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="flex items-center gap-2 mb-3">
                                <MessageSquare className="w-4 h-4 text-foreground/40" />
                                <span className="text-sm font-medium text-foreground/60">AI Chatbot</span>
                            </div>
                            <ChatbotDemo />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                        >
                            <div className="flex items-center gap-2 mb-3">
                                <Phone className="w-4 h-4 text-foreground/40" />
                                <span className="text-sm font-medium text-foreground/60">AI Caller</span>
                            </div>
                            <CallerDemo />
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
