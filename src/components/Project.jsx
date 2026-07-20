"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const projects = [
  {
    id: 1,
    name: "AI Customer Support Chatbot",
    industry: "Ecommerce",
    problem: "Manual support tickets overwhelming small team",
    solution: "Built AI chatbot with RAG for instant, accurate answers",
    result: "40% reduction in support tickets, 24/7 availability",
    category: "AI & Automation",
    featured: true,
  },
  {
    id: 2,
    name: "Restaurant Online Ordering System",
    industry: "Food & Beverage",
    problem: "Missing out on online orders, relying on phone calls",
    solution: "Custom ecommerce platform with real-time order tracking",
    result: "60% increase in online orders, reduced phone dependency",
    category: "Ecommerce",
    featured: true,
  },
  {
    id: 3,
    name: "Internal Business Dashboard",
    industry: "Retail",
    problem: "Scattered data across spreadsheets, no visibility",
    solution: "Centralized dashboard with real-time analytics",
    result: "10 hours/week saved on manual reporting",
    category: "Business Tools",
    featured: false,
  },
  {
    id: 4,
    name: "AI-Powered Content Generator",
    industry: "Marketing Agency",
    problem: "Slow content creation process, high costs",
    solution: "Custom AI tool for generating blog posts and social media content",
    result: "3x faster content production, 50% cost reduction",
    category: "AI & Automation",
    featured: false,
  },
  {
    id: 5,
    name: "Ecommerce Store Redesign",
    industry: "Fashion Retail",
    problem: "Outdated website, poor mobile experience, low conversions",
    solution: "Modern, mobile-first redesign with optimized checkout",
    result: "45% increase in mobile conversions, faster load times",
    category: "Ecommerce",
    featured: false,
  },
];

const categories = ["All", "Ecommerce", "AI & Automation", "Business Tools"];

function ProjectCard({ project, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{
        duration: 0.5,
        delay: 0.1 + index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group card-surface card-surface-hover flex flex-col overflow-hidden"
    >
      <div className="card-surface p-6">
        <span className="pill">{project.industry}</span>
        <h3 className="mt-3 text-lg font-semibold text-ink">{project.name}</h3>
        <div className="mt-3 space-y-2 text-sm text-ink-muted">
          <p>
            <span className="font-medium text-ink">Problem:</span>{" "}
            {project.problem}
          </p>
          <p>
            <span className="font-medium text-ink">Solution:</span>{" "}
            {project.solution}
          </p>
          <p>
            <span className="font-medium text-brand">Result:</span>{" "}
            {project.result}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function Project() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.08 });
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section
      id="work"
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
          className="max-w-2xl"
        >
          <span className="eyebrow">Client success stories</span>
          <h2 className="mt-4 text-display-md text-ink">
            Businesses I&apos;ve helped grow.
          </h2>
          <p className="mt-4 text-body-lg text-ink-muted">
            From AI automation to ecommerce — here are some projects that
            delivered real results for my clients.
          </p>
        </motion.div>

        {/* Category filter */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-10 flex flex-wrap gap-2"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-brand text-brand-fg"
                  : "border border-border bg-card text-ink-muted hover:border-brand hover:text-brand"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-ink-muted">
            Ready to achieve similar results?{" "}
            <a
              href="#contact"
              className="link-underline font-medium text-ink"
            >
              Let&apos;s talk about your project.
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
