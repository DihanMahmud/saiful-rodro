"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { Check } from "lucide-react";

const packages = [
  {
    name: "Starter",
    bestFor: "Landing page or simple business tool",
    price: "$800",
    timeline: "1–2 weeks",
    features: [
      "Custom design (1 page)",
      "Mobile-optimized",
      "Fast loading",
      "Contact form",
      "Basic analytics",
      "Hosting setup",
      "2 rounds of revisions",
    ],
    support: "30 days email support",
    cta: "Start a landing page →",
    popular: false,
  },
  {
    name: "Business",
    bestFor: "Full web app with AI features",
    price: "$1,500",
    timeline: "3–4 weeks",
    features: [
      "Custom design (5–7 pages)",
      "Mobile-optimized",
      "Fast loading",
      "SEO foundation",
      "Contact forms",
      "Google Analytics",
      "Hosting setup",
      "Training session",
      "3 rounds of revisions",
    ],
    support: "60 days support + 2 hours content edits",
    cta: "Start a business website →",
    popular: true,
  },
  {
    name: "Growth",
    bestFor: "Ecommerce or complex system",
    price: "$3,000",
    timeline: "4–6 weeks",
    features: [
      "Storefront design (up to 50 products)",
      "Payment gateway setup",
      "Shipping integration",
      "Inventory management",
      "Abandoned cart recovery",
      "Mobile-optimized",
      "Analytics dashboard",
      "Training session",
      "3 rounds of revisions",
    ],
    support: "90 days post-launch + monthly check-ins",
    cta: "Start an ecommerce store →",
    popular: false,
  },
];

export default function Pricing() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.12 });

  return (
    <section
      id="pricing"
      ref={ref}
      className="section relative overflow-hidden bg-surface"
    >
      {/* Top hairline */}
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
        >
          <span className="eyebrow">Transparent pricing</span>
          <h2 className="mt-4 text-display-md text-ink">
            Pick the package that fits. Or build your own.
          </h2>
          <p className="mt-4 text-body-lg text-ink-muted">
            Every project is scoped to your goals. These are starting points —
            your final proposal will be tailored to what you actually need.
          </p>
        </motion.div>

        {/* Pricing cards */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{
                duration: 0.5,
                delay: 0.15 + index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`relative flex flex-col rounded-2xl border p-6 ${
                pkg.popular
                  ? "border-brand bg-brand-soft shadow-glow-soft"
                  : "border-border bg-card"
              }`}
            >
              {/* Popular badge */}
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center rounded-full bg-brand px-4 py-0.5 text-xs font-semibold text-brand-fg">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Package head */}
              <div>
                <h3 className="text-lg font-semibold text-ink">{pkg.name}</h3>
                <div className="mt-2 text-xs text-ink-subtle">{pkg.bestFor}</div>
              </div>

              {/* Price */}
              <div className="mt-6">
                <div className="text-3xl font-bold tracking-tight text-ink">
                  {pkg.price}
                </div>
                <div className="mt-1 text-xs text-ink-subtle">{pkg.timeline}</div>
              </div>

              {/* Features */}
              <ul className="mt-6 flex-1 space-y-3">
                {pkg.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex gap-2.5 text-sm text-ink-muted"
                  >
                    <Check
                      size={16}
                      strokeWidth={2.5}
                      className="mt-0.5 shrink-0 text-brand"
                    />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Support */}
              <div className="mt-6 border-t border-border pt-4 text-xs text-ink-subtle">
                {pkg.support}
              </div>

              {/* CTA */}
              <Link
                href="#contact"
                className={`mt-6 inline-flex items-center justify-center gap-1.5 rounded-lg px-4 py-3 text-sm font-medium transition-all duration-200 ${
                  pkg.popular
                    ? "bg-brand text-brand-fg hover:bg-brand-hover"
                    : "border border-border-strong text-ink hover:border-brand hover:text-brand"
                }`}
              >
                {pkg.cta}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Trust strip */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <div className="mx-auto flex max-w-lg flex-wrap justify-center gap-x-4 gap-y-2 text-xs text-ink-subtle">
            <span className="inline-flex items-center gap-1.5">
              <Check size={12} strokeWidth={2.5} className="text-brand" />{" "}
              Fixed price
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Check size={12} strokeWidth={2.5} className="text-brand" />{" "}
              30-day guarantee
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Check size={12} strokeWidth={2.5} className="text-brand" />{" "}
              Weekly demos
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Check size={12} strokeWidth={2.5} className="text-brand" />{" "}
              Cancel anytime
            </span>
          </div>
          <p className="mt-6 text-sm text-ink-muted">
            Not sure which package?{" "}
            <Link href="#contact" className="link-underline text-ink">
              Book a free 20-min call
            </Link>{" "}
            and we'll figure it out together.
          </p>
        </motion.div>
      </div>
    </section>
  );
}