"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Code2, Rocket, Brain } from "lucide-react";

const journey = [
  {
    year: "2021",
    title: "Started Coding Journey",
    description: "Began exploring software development with a passion for solving complex problems.",
    icon: Code2,
  },
  {
    year: "2022",
    title: "Full-Stack Mastery",
    description: "Mastered the MERN stack and built multiple production-ready applications.",
    icon: Rocket,
  },
  {
    year: "2023",
    title: "AI/GenAI Focus",
    description: "Dove deep into AI/ML, mastering LangChain, OpenAI APIs, and RAG systems.",
    icon: Brain,
  },
  {
    year: "2024",
    title: "AI-Enabled Engineer",
    description: "Specialized in building intelligent systems that combine AI with scalable backends.",
    icon: Award,
  },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section
      id="about"
      ref={ref}
      className="section relative overflow-hidden"
    >
      {/* Soft top glow */}
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
          className="max-w-3xl"
        >
          <span className="eyebrow">About me</span>
          <h2 className="mt-4 text-display-lg text-ink">
            I&apos;m Saiful —{" "}
            <span className="text-ink-muted">
              I help local businesses solve problems with AI and code.
            </span>
          </h2>
        </motion.div>

        <div className="mt-12 grid gap-12 lg:grid-cols-2">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-6"
          >
            <div className="space-y-4 text-body text-ink-muted">
              <p>
                I started my journey because I saw local businesses struggling with manual processes,
                outdated systems, and missing out on what AI can do. Today, I help businesses like yours
                build smart tools that save time, reduce costs, and grow revenue — all without the
                technical headaches.
              </p>
            </div>

            {/* Quick facts */}
            <div className="flex flex-wrap gap-3">
              {[
                { label: "📍 Based in Dhaka", icon: null },
                { label: "🏢 15+ Businesses Helped", icon: null },
                { label: "💼 Available for Projects", icon: null },
                { label: "🌐 Remote & On-site", icon: null },
              ].map((fact) => (
                <span
                  key={fact.label}
                  className="rounded-full border border-border bg-surface-2 px-4 py-2 text-sm text-ink-muted"
                >
                  {fact.label}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Journey timeline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <h3 className="text-lg font-semibold text-ink mb-6">My Journey</h3>
            <div className="space-y-6">
              {journey.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="flex flex-col items-center">
                      <div className="grid h-10 w-10 place-items-center rounded-full border border-border text-ink-muted">
                        <Icon size={18} strokeWidth={1.75} />
                      </div>
                      {index < journey.length - 1 && (
                        <div className="h-8 w-px bg-border" />
                      )}
                    </div>
                    <div className="pb-6">
                      <div className="text-xs font-medium text-brand">{item.year}</div>
                      <div className="mt-1 text-sm font-semibold text-ink">{item.title}</div>
                      <div className="mt-1 text-sm text-ink-muted">{item.description}</div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Why work with me */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12"
        >
          <h3 className="text-lg font-semibold text-ink">Why work with me?</h3>
          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            <div className="card-surface p-4">
              <p className="text-sm text-ink-muted">I speak business, not just code. You won&apos;t need a technical translator.</p>
            </div>
            <div className="card-surface p-4">
              <p className="text-sm text-ink-muted">I respond within 24 hours, always. No ghosting, no radio silence.</p>
            </div>
            <div className="card-surface p-4">
              <p className="text-sm text-ink-muted">I treat your project like my own business. Your success is my success.</p>
            </div>
          </div>
        </motion.div>

        {/* Certifications - Hidden (data kept in data.js for SEO)
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16"
        >
          <h3 className="text-lg font-semibold text-ink mb-6">Certifications</h3>
          <div className="grid gap-4 sm:grid-cols-3">
            {certifications.map((cert) => (
              <div
                key={cert.name}
                className="card-surface card-surface-hover flex items-center gap-4 p-5"
              >
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-brand-soft text-brand">
                  <GraduationCap size={24} strokeWidth={1.75} />
                </div>
                <div>
                  <div className="text-sm font-semibold text-ink">{cert.name}</div>
                  <div className="mt-0.5 text-xs text-ink-subtle">{cert.issuer}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
        */}
      </div>
    </section>
  );
}
