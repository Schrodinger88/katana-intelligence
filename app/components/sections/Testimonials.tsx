// "use client";

// import { motion } from "framer-motion";
// import { Star } from "lucide-react";

// const testimonials = [
//     {
//         quote: "Katana uncovered critical inefficiencies and clear opportunities for AI automation. They delivered the clarity, direction, and practical roadmap we needed to drive real operational efficiency.",
//         name: "Sarah M.",
//         role: "Operations Director",
//         company: "Construction Firm",
//     },
//     {
//         quote: "They quickly understood our complex workflows and identified where AI could improve efficiency. Their practical solutions addressed key bottlenecks, and we're already seeing measurable improvements.",
//         name: "James T.",
//         role: "Managing Director",
//         company: "Professional Services",
//     },
//     {
//         quote: "We tried AI tools on our own and got nowhere. Katana focused on what was actually worth building, trained our team, and now the systems run without us touching them.",
//         name: "Laura K.",
//         role: "Founder",
//         company: "Digital Agency",
//     },
// ];

// export default function Testimonials() {
//     return (
//         <section className="relative overflow-hidden bg-background py-20 md:py-24">
//             <div className="container mx-auto px-6">
//                 <motion.div
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ duration: 0.8 }}
//                     className="mb-12 md:mb-14"
//                 >
//                     <h2 className="mb-5 text-3xl font-semibold tracking-tight text-foreground md:text-5xl">
//                         Real results.<br />
//                         <span className="text-foreground/40">Real businesses.</span>
//                     </h2>
//                     <p className="max-w-2xl text-lg text-foreground/60 md:text-xl">
//                         Don&apos;t take our word for it. Here&apos;s what our clients say.
//                     </p>
//                 </motion.div>

//                 <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
//                     {testimonials.map((testimonial, i) => (
//                         <motion.div
//                             key={i}
//                             initial={{ opacity: 0, y: 20 }}
//                             whileInView={{ opacity: 1, y: 0 }}
//                             viewport={{ once: true }}
//                             transition={{ delay: i * 0.1, duration: 0.6 }}
//                             className="rounded-[2rem] border border-white/8 bg-white/[0.025] p-7 md:p-8"
//                         >
//                             {/* Stars */}
//                             <div className="mb-5 flex gap-1">
//                                 {Array.from({ length: 5 }).map((_, j) => (
//                                     <Star key={j} className="h-4 w-4 fill-primary text-primary" />
//                                 ))}
//                             </div>

//                             {/* Quote */}
//                             <p className="mb-6 text-base leading-relaxed text-foreground/70">
//                                 &ldquo;{testimonial.quote}&rdquo;
//                             </p>

//                             {/* Attribution */}
//                             <div>
//                                 <p className="text-sm font-semibold text-foreground">
//                                     {testimonial.name}
//                                 </p>
//                                 <p className="text-sm text-foreground/40">
//                                     {testimonial.role}, {testimonial.company}
//                                 </p>
//                             </div>
//                         </motion.div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// }
