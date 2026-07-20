"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    rating: 5,
    quote: "Saiful built our AI chatbot — support tickets dropped 40%. He understood our business, not just the code.",
    author: "Business Owner",
    role: "Ecommerce Store",
  },
  {
    rating: 5,
    quote: "Our new website increased online orders by 60%. Professional, fast, and always responsive.",
    author: "Restaurant Owner",
    role: "Food & Beverage",
  },
  {
    rating: 5,
    quote: "He delivered on time and within budget. Rare find. Our internal tool saves us 10 hours per week.",
    author: "Operations Manager",
    role: "Retail Business",
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      id="testimonials"
      ref={ref}
      className="section relative overflow-hidden"
    >
      <div className="section-container">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          <span className="eyebrow mx-auto">What clients say</span>
          <h2 className="mt-4 text-display-md text-ink">
            Real results from real businesses.
          </h2>
        </motion.div>

        {/* Testimonials */}
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{
                duration: 0.5,
                delay: 0.1 + index * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="card-surface card-surface-hover flex flex-col p-7"
            >
              {/* Stars */}
              <div className="flex gap-1">
                {[...Array(t.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    fill="currentColor"
                    className="text-accent"
                  />
                ))}
              </div>

              <Quote
                size={24}
                strokeWidth={1.5}
                className="mt-4 text-brand/40"
              />
              <p className="mt-4 text-sm leading-relaxed text-ink-muted">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-6 border-t border-border pt-5">
                <div className="text-sm font-semibold text-ink">
                  {t.author}
                </div>
                <div className="mt-0.5 text-xs text-ink-subtle">
                  {t.role}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
