"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CircleCheck } from "lucide-react";

const steps = [
  {
    number: 1,
    title: "Discovery",
    duration: "Free",
    description:
      "We talk about your business, your challenges, and your goals. No technical jargon — just a conversation.",
    purpose: "Understand what success looks like for you",
  },
  {
    number: 2,
    title: "Planning",
    duration: "2-3 days",
    description:
      "I propose a clear solution with fixed pricing, timeline, and milestones. You know exactly what you're getting.",
    purpose: "No surprises — full transparency before we start",
  },
  {
    number: 3,
    title: "Building",
    duration: "2-6 weeks",
    description:
      "You see progress every week with working demos. Not just a big reveal at the end.",
    purpose: "Stay in the loop, give feedback early",
  },
  {
    number: 4,
    title: "Launch & Support",
    duration: "30 days free",
    description:
      "I deploy your project and support you for 30 days — free. Any issues, I'm just a message away.",
    purpose: "Peace of mind after launch",
  },
];

export default function Process() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.12 });

  return (
    <section
      id="process"
      ref={ref}
      className="section relative overflow-hidden"
    >
      {/* Soft top hairline */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"
      />

      <div className="section-container">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          <span className="eyebrow">How we'll work together</span>
          <h2 className="mt-4 text-display-md text-ink">
            No surprises. Just results.
          </h2>
          <p className="mt-4 text-body-lg" style={{ color: "rgb(var(--color-ink-muted))" }}>
            A straightforward process designed to keep you informed and in control every step of the way.
          </p>
        </motion.div>

        {/* Steps grid */}
        <div className="relative mt-16">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
            {steps.map((step, index) => {
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 16 }}
                  animate={
                    inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }
                  }
                  transition={{
                    duration: 0.5,
                    delay: 0.2 + index * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="card-surface card-surface-hover relative p-7"
                >
                  {/* Step number */}
                  <div className="absolute -top-3 -right-3 grid h-8 w-8 place-items-center rounded-full bg-brand text-sm font-bold text-brand-fg shadow-glow-soft">
                    {step.number}
                  </div>

                  <div className="mt-5 flex items-center gap-2">
                    <h3 className="text-lg font-semibold text-ink">
                      {step.title}
                    </h3>
                  </div>

                  <span className="pill mt-2 inline-flex">{step.duration}</span>

                  <p className="mt-4 text-sm leading-relaxed text-ink-muted">
                    {step.description}
                  </p>

                  <p className="mt-3 text-xs italic text-ink-subtle">
                    {step.purpose}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Guarantee strip */}
        <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-ink-muted">
          <span className="inline-flex items-center gap-1.5"><CircleCheck size={16} className="text-brand" /> Fixed pricing</span>
          <span className="inline-flex items-center gap-1.5"><CircleCheck size={16} className="text-brand" /> Weekly demos</span>
          <span className="inline-flex items-center gap-1.5"><CircleCheck size={16} className="text-brand" /> 30-day support included</span>
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-ink-muted">
            Every project is different, but this is the general flow.{" "}
            <span className="font-medium text-ink">
              I adapt to your needs, not the other way around.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
