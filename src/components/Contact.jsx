"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { Globe, Mail, Phone, Send } from "lucide-react";

const channels = [
  {
    icon: Send,
    label: "Book a Consultation",
    value: "Free 15-minute call",
    href: "#",
    primary: true,
  },
  {
    icon: Mail,
    label: "Email",
    value: "hello@saifulislam.com",
    href: "mailto:hello@saifulislam.com",
  },
];

const secondaryInfo = [
  {
    icon: Globe,
    label: "Location",
    value: "Narayanganj, Dhaka, Bangladesh",
    subtext: "Available for remote work worldwide",
  },
  {
    icon: Mail,
    label: "Working hours",
    value: "Sun–Thu • 10:00–19:00 BST (GMT+6)",
    subtext: "Flexible for anyone worldwide",
  },
  {
    icon: Phone,
    label: "Response time",
    value: "Within 24 hours, every business day",
    subtext: "Usually faster!",
  },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.12 });

  return (
    <section
      id="contact"
      ref={ref}
      className="section relative overflow-hidden bg-surface scroll-mb-20"
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
          <span className="eyebrow">Book your free consultation</span>
          <h2 className="mt-4 text-display-md text-ink">
            Let&apos;s talk about your project.
          </h2>
          <p className="mt-4 text-body-lg text-ink-muted">
            Have a project in mind? Need a technical partner? Let&apos;s discuss
            how I can help bring your vision to life.
          </p>
        </motion.div>

        {/* Primary channels */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
          }}
          className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-2"
        >
          {channels.map((ch) => {
            const Icon = ch.icon;
            return (
              <motion.div
                key={ch.label}
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
                  },
                }}
                className={`group flex flex-col items-center gap-3 rounded-2xl p-5 text-center transition-all duration-200 ${
                  ch.primary
                    ? "border-brand bg-brand-soft"
                    : "border-border bg-card hover:border-brand hover:border-border-strong"
                }`}
              >
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-brand/10 text-brand transition-all duration-300 group-hover:scale-105 group-hover:bg-brand/20">
                  <Icon size={22} strokeWidth={1.75} />
                </div>
                <span className="text-xs font-medium uppercase tracking-wider text-ink-subtle">
                  {ch.label}
                </span>
                <span className="text-base font-semibold text-ink">
                  {ch.value}
                </span>
                <Link
                  href={ch.href}
                  target={ch.external ? "_blank" : undefined}
                  rel={ch.external ? "noopener noreferrer" : undefined}
                  className="text-sm font-medium text-brand transition-colors duration-200 hover:underline"
                >
                  Tap to open →
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Secondary info */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 grid gap-4 md:grid-cols-3"
        >
          {secondaryInfo.map((info) => {
            const Icon = info.icon;
            return (
              <motion.div
                key={info.label}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="card-surface p-5"
              >
                <div className="grid h-9 w-9 place-items-center rounded-lg bg-brand-soft text-brand">
                  <Icon size={20} strokeWidth={1.75} />
                </div>
                <h4 className="mt-3 text-sm font-medium text-ink">
                  {info.label}
                </h4>
                <p className="mt-1 text-sm font-medium text-ink">
                  {info.value}
                </p>
                {info.subtext && (
                  <p className="mt-1 text-xs text-ink-subtle">
                    {info.subtext}
                  </p>
                )}
              </motion.div>
            );
          })}
        </motion.div>

        {/* Trust message */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 rounded-2xl border border-border bg-brand-soft/50 p-6 text-center"
        >
          <h3 className="text-base font-semibold text-ink">
            No commitment. Just a conversation.
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-ink-muted">
            I&apos;ll review your project needs and give you honest advice —
            even if we don&apos;t work together. No sales pitch, no pressure.
            Just a straightforward conversation about what&apos;s best for your
            project.
          </p>
          <Link
            href="mailto:hello@saifulislam.com"
            className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:underline"
          >
            Book a free consultation
            <span aria-hidden>→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
