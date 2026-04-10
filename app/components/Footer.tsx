"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { servicePages } from "@/lib/site";

export default function Footer() {
    const pathname = usePathname();
    const router = useRouter();

    function scrollTo(id: string) {
        if (pathname !== "/") {
            router.push(`/#${id}`);
            return;
        }

        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }

    return (
        <footer className="relative overflow-hidden border-t border-white/8 bg-[linear-gradient(180deg,rgba(7,8,8,0.98)_0%,rgba(12,14,14,0.98)_42%,rgba(18,22,21,0.98)_100%)] py-16">
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute -left-20 top-10 h-48 w-48 rounded-full bg-primary/4 blur-3xl" />
                <div className="absolute -right-16 bottom-0 h-56 w-56 rounded-full bg-white/[0.03] blur-3xl" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.04),transparent_24%)]" />
            </div>
            <div className="container relative mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-start gap-12">

                    <div className="max-w-sm">
                        <div className="mb-4 flex items-center gap-2.5">
                            <h3 className="font-bold text-2xl tracking-tight text-foreground">
                                Katana.
                            </h3>
                            <Image
                                src="/maple-leaf.png"
                                alt=""
                                width={16}
                                height={16}
                                className="h-4 w-4 opacity-85"
                            />
                        </div>
                        <p className="text-foreground/58 leading-relaxed">
                            Proudly Canadian automation systems, websites, AI SEO,
                            and lead generation for service businesses.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-24">
                        <div>
                            <h4 className="font-semibold text-foreground mb-4">Services</h4>
                            <ul className="space-y-3 text-foreground/60">
                                {servicePages.map((service) => (
                                    <li key={service.slug}>
                                        <Link href={`/services/${service.slug}`} className="hover:text-foreground transition-colors">
                                            {service.shortName}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold text-foreground mb-4">Company</h4>
                            <ul className="space-y-3 text-foreground/60">
                                <li><Link href="/services" className="hover:text-foreground transition-colors">All Services</Link></li>
                                <li><button onClick={() => scrollTo("process")} className="hover:text-foreground transition-colors">How It Works</button></li>
                                <li><button onClick={() => scrollTo("pricing")} className="hover:text-foreground transition-colors">Pricing</button></li>
                                <li><button onClick={() => scrollTo("faq")} className="hover:text-foreground transition-colors">FAQ</button></li>
                                <li><a href="https://cal.com/erwin-peter/15min" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Contact</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold text-foreground mb-4">Connect</h4>
                            <ul className="space-y-3 text-foreground/60">
                                <li><a href="https://x.com/ErwinPeter88" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Twitter / X</a></li>
                                <li><a href="https://linkedin.com/in/erwan-pierre-01b0b6348" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">LinkedIn</a></li>
                                <li><a href="mailto:erwin@katanaintelligence.com" className="hover:text-foreground transition-colors">Email</a></li>
                            </ul>
                        </div>
                    </div>

                </div>

                <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-sm text-foreground/40 gap-4">
                    <p>&copy; {new Date().getFullYear()} Katana Intelligence. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="/privacy" className="hover:text-foreground/60 transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-foreground/60 transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
