// "use client";

// import { motion } from "framer-motion";

// const stats = [
//     { value: "20+", label: "Businesses automated" },
//     { value: "500+", label: "Hours saved monthly" },
//     { value: "6+", label: "Industries served" },
//     { value: "< 14", label: "Days to deploy" },
// ];

// export default function SocialProof() {
//     return (
//         <section className="relative overflow-hidden bg-background py-16 md:py-20">
//             <div className="container mx-auto px-6">
//                 {/* Stats Grid */}
//                 <motion.div
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ duration: 0.8 }}
//                     className="mx-auto max-w-4xl"
//                 >
//                     <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
//                         {stats.map((stat, i) => (
//                             <motion.div
//                                 key={i}
//                                 initial={{ opacity: 0, y: 15 }}
//                                 whileInView={{ opacity: 1, y: 0 }}
//                                 viewport={{ once: true }}
//                                 transition={{ delay: i * 0.1, duration: 0.6 }}
//                                 className="text-center"
//                             >
//                                 <p className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
//                                     {stat.value}
//                                 </p>
//                                 <p className="mt-1.5 text-sm text-foreground/40">
//                                     {stat.label}
//                                 </p>
//                             </motion.div>
//                         ))}
//                     </div>
//                 </motion.div>

//                 {/* Differentiator line */}
//                 <motion.div
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ duration: 0.8, delay: 0.3 }}
//                     className="mx-auto mt-14 max-w-3xl text-center"
//                 >
//                     <p className="text-lg leading-relaxed text-foreground/50 md:text-xl">
//                         We&apos;re workflow specialists first, AI specialists second.
//                         Tool-agnostic, industry-agnostic, but <span className="text-foreground/80 font-medium">results-obsessed</span>.
//                     </p>
//                 </motion.div>
//             </div>
//         </section>
//     );
// }
