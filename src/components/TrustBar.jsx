"use client";

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Shield, Zap, Heart } from "lucide-react";

// =========================================================
// Counter — same pattern used in the hero, kept consistent
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
// Tech Logos — placeholder text logos for technologies used.
// Greyscale → brand color on hover.
// =========================================================
const techLogos = [
  "Node.js",
  "Python",
  "LangChain",
  "OpenAI",
  "PostgreSQL",
  "MongoDB",
  "Docker",
  "AWS",
  "Next.js",
  "TypeScript",
];

function TechMarquee() {
  const items = [...techLogos, ...techLogos];

  return (
    <div
      className="relative overflow-hidden"
      style={{
        maskImage:
          "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
      }}
    >
      <div className="flex w-max animate-marquee gap-12 py-2">
        {items.map((name, i) => (
          <div
            key={`${name}-${i}`}
            className="flex shrink-0 items-center gap-2 text-ink-subtle transition-colors duration-300 hover:text-brand"
          >
            <div className="grid h-7 w-7 place-items-center rounded-md border border-border bg-surface-2 text-[10px] font-bold">
              {name.charAt(0)}
            </div>
            <span className="text-sm font-medium tracking-tight">{name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// =========================================================
// Trust section — tech stack + stats + values
// =========================================================
export default function TrustBar() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  const stats = [
    { value: 15, suffix: "+", label: "Businesses Helped" },
    { value: 98, suffix: "%", label: "Client Satisfaction" },
    { value: 40, suffix: "%", label: "Avg Efficiency Gain" },
    { value: 5, suffix: "h", label: "Response Time" },
  ];

  const values = [
    {
      icon: Shield,
      heading: "Done Right, Not Just Done",
      description:
        "Every solution is built to perform — no shortcuts, no workarounds. Quality that stands the test of time.",
    },
    {
      icon: Zap,
      heading: "On Time, Every Time",
      description:
        "Deadlines aren't suggestions. You get honest timelines and consistent follow-through.",
    },
    {
      icon: Heart,
      heading: "Your Success Is My Success",
      description:
        "I measure my work by your results. Your growth is the metric that matters most.",
    },
  ];

  return (
    <section
      ref={ref}
      className="section relative overflow-hidden bg-surface"
    >
      <div className="section-container">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          <span className="eyebrow">What I bring</span>
          <h2 className="mt-4 text-display-md text-ink">
            Trusted by local businesses.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-body-lg text-ink-muted">
            Results-focused solutions that help businesses grow.
            That&apos;s the commitment I bring to every client.
          </p>
        </motion.div>

        {/* Tech marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-12"
        >
          <p className="mb-4 text-center text-xs uppercase tracking-wider text-ink-subtle">
            Technologies I work with
          </p>
          <TechMarquee />
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-16 grid grid-cols-2 gap-x-6 gap-y-8 border-y border-border py-10 sm:grid-cols-4"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center sm:text-left">
              <div className="text-3xl font-bold tracking-tight text-ink md:text-4xl">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="mt-1 text-sm text-ink-subtle">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Values strip */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1, delayChildren: 0.4 } },
          }}
          className="mt-12 grid gap-4 md:grid-cols-3"
        >
          {values.map((v) => {
            const Icon = v.icon;
            return (
              <motion.div
                key={v.heading}
                variants={{
                  hidden: { opacity: 0, y: 12 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
                  },
                }}
                className="card-surface card-surface-hover p-6"
              >
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-brand-soft text-brand">
                  <Icon size={20} strokeWidth={1.75} />
                </div>
                <h3 className="mt-4 text-base font-semibold text-ink">
                  {v.heading}
                </h3>
                <p className="mt-2 text-sm text-ink-muted">
                  {v.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
