"use client";

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { personalStats } from "@/data";

// =========================================================
// Animation primitives — used across the hero for a coherent
// entrance. One-time only; respects prefers-reduced-motion via
// Framer's built-in handling.
// =========================================================
const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: (delay = 0) => ({
    opacity: 1,
    transition: { duration: 0.5, delay },
  }),
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: (delay = 0) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      delay,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

// =========================================================
// Stat counter — count-up animation triggered on scroll-into-view
// =========================================================
function Counter({ value, suffix = "", duration = 1.4 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(count, value, {
      duration,
      ease: [0.22, 1, 0.36, 1],
    });
    const unsubscribe = rounded.on("change", (v) => setDisplay(v));
    return () => {
      controls.stop();
      unsubscribe();
    };
  }, [inView, value, count, rounded, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {display}
      {suffix}
    </span>
  );
}

// =========================================================
// Profile Image — professional headshot with brand glow
// =========================================================
function ProfileImage() {
  return (
    <div className="relative w-full max-w-md mx-auto lg:mx-0">
      {/* Soft radial glow behind the image */}
      <div
        aria-hidden
        className="absolute -inset-16 -z-10 rounded-full bg-hero-glow blur-3xl opacity-80"
      />

      {/* Floating tech badge */}
      <motion.div
        aria-hidden
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-4 top-8 z-20 hidden rounded-lg border border-border bg-card/95 p-3 shadow-elevated backdrop-blur-md md:block"
      >
        <div className="flex items-center gap-2.5">
          <div className="grid h-7 w-7 place-items-center rounded-md bg-brand/15 text-brand">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-3.5 w-3.5"
            >
              <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
          </div>
          <div className="text-xs">
            <div className="font-medium text-ink">LangChain</div>
            <div className="text-ink-subtle">AI Framework</div>
          </div>
        </div>
      </motion.div>

      {/* Main profile image */}
      <motion.div
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="relative overflow-hidden rounded-2xl border border-border shadow-glow"
      >
        <Image
          src="/profile.png"
          alt="Saiful Islam — AI-Enabled Software Engineer"
          width={480}
          height={560}
          priority
          className="h-auto w-full object-cover"
        />
      </motion.div>
    </div>
  );
}

// =========================================================
// Hero — the page's single most important section
// =========================================================
export default function Home() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      ref={ref}
      id="home"
      className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28"
    >
      {/* Background ambient — single soft glow, no particles */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-hero-glow"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"
      />

      <div className="section-container relative">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* ===== Left column — copy & conversion ===== */}
          <div className="lg:col-span-7">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={0}
            >
              <span className="eyebrow">
                <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                AI & Web Development for Local Businesses
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={0.1}
              className="mt-6 text-display-xl text-ink"
            >
              I help you save time and grow revenue with smart, custom{" "}
              <span className="text-brand">software</span>.
            </motion.h1>

            <motion.div
              variants={fadeIn}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={0.25}
              className="mt-6 inline-flex items-center gap-2.5 rounded-full border border-border bg-surface/60 px-3 py-1.5 text-sm backdrop-blur-sm"
            >
              <span className="h-2 w-2 rounded-full bg-brand animate-pulse" />
              <span className="font-medium text-ink">Available for new projects</span>
              <span className="text-ink-subtle">
                — let&apos;s talk
              </span>
            </motion.div>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={0.3}
              className="mt-6 max-w-xl text-body-lg text-ink-muted"
            >
              From idea to launch — I handle everything so you can focus on your
              business. I build AI-powered web applications, custom business tools,
              and ecommerce platforms that help local businesses save time and grow revenue.
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={0.45}
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <Link href="#contact" className="btn-primary animate-pulse-cta">
                Book a Free Consultation
                <span aria-hidden className="ml-1">→</span>
              </Link>
              <Link href="#work" className="btn-ghost">
                See My Work
              </Link>
            </motion.div>

            <motion.p
              variants={fadeIn}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={0.6}
              className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-ink-subtle"
            >
              <span className="inline-flex items-center gap-1.5">
                <CheckIcon /> 15+ businesses helped
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckIcon /> 24h response time
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckIcon /> Remote & on-site
              </span>
            </motion.p>

            {/* Stats row */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={0.7}
              className="mt-12 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-border pt-8 sm:grid-cols-4"
            >
              {personalStats.map((stat) => (
                <div key={stat.label} className="stat-chip">
                  <div className="text-2xl font-bold tracking-tight text-ink md:text-3xl">
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-xs text-ink-subtle">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ===== Right column — profile image ===== */}
          <motion.div
            variants={scaleIn}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={0.4}
            className="lg:col-span-5"
          >
            <ProfileImage />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-3.5 w-3.5 text-brand"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
