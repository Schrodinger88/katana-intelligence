"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScrolling() {
    useEffect(() => {
        // Force scroll to top on page load
        window.scrollTo(0, 0);
        if ("scrollRestoration" in window.history) {
            window.history.scrollRestoration = "manual";
        }

        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: "vertical",
            gestureOrientation: "vertical",
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 2,
        });

        lenis.scrollTo(0, { immediate: true });

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        const rafId = requestAnimationFrame(raf);

        return () => {
            cancelAnimationFrame(rafId);
            lenis.destroy();
        };
    }, []);

    return null;
}
