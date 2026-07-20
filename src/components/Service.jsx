"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Brain,
  Globe,
  Server,
} from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "AI-Powered Web Applications",
    description: "Automate workflows, reduce manual work, and serve your customers 24/7 with intelligent web apps.",
    features: ["Custom AI chatbots", "Workflow automation", "Data processing"],
    price: "From $1,500",
  },
  {
    icon: Server,
    title: "Custom Business Tools",
    description: "CRM, dashboards, and internal tools built exactly for your business needs — no generic templates.",
    features: ["Custom dashboards", "Internal tools", "API integrations"],
    price: "From $800",
  },
  {
    icon: Globe,
    title: "Ecommerce & Online Presence",
    description: "Sell online with a professional, fast, mobile-friendly website that converts visitors into customers.",
    features: ["Ecommerce stores", "Landing pages", "SEO optimized"],
    price: "From $1,500",
  },
];

export default function Service() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.08 });

  return (
    <section
      id="skills"
      ref={ref}
      className="section relative overflow-hidden bg-surface"
    >
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          <span className="eyebrow">How I can help</span>
          <h2 className="mt-4 text-display-md text-ink">
            Services built around your business goals.
          </h2>
          <p className="mt-4 text-body-lg text-ink-muted">
            I build software that solves real problems — from AI-powered apps to custom tools and ecommerce platforms.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <div key={service.title} className="card-surface p-6">
              <div className="grid h-10 w-10 place-items-center rounded-lg bg-brand/10 text-brand">
                <service.icon size={20} strokeWidth={1.75} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-ink">{service.title}</h3>
              <p className="mt-2 text-sm text-ink-muted">{service.description}</p>
              <ul className="mt-4 space-y-1">
                {service.features.map((f) => (
                  <li key={f} className="text-xs text-ink-subtle">• {f}</li>
                ))}
              </ul>
              <p className="mt-4 text-sm font-semibold text-brand">{service.price}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
