"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

const faqs = [
  {
    question: "How much does a project cost?",
    answer: "Projects start at $800 for simple tools and landing pages. Most business applications range from $1,500-$3,000. I provide fixed pricing after our discovery call — no hidden fees.",
  },
  {
    question: "How long does it take?",
    answer: "Simple projects: 1-2 weeks. Complex web applications: 3-6 weeks. You'll see progress every week with working demos, so there are no surprises.",
  },
  {
    question: "What if I need changes after launch?",
    answer: "Every project includes 30 days of free support after launch. After that, I offer affordable maintenance plans. I'm always just a message away.",
  },
  {
    question: "Do you work with local businesses in Dhaka?",
    answer: "Absolutely! I'm based in Narayanganj, Dhaka. I work with businesses locally, nationally, and internationally. Remote collaboration is my specialty.",
  },
  {
    question: "What's your process?",
    answer: "We start with a free discovery call to understand your needs. Then I propose a solution with fixed pricing. You see progress weekly, and I support you for 30 days after launch.",
  },
  {
    question: "Do you offer ongoing support?",
    answer: "Yes! After the initial 30-day free support period, I offer monthly maintenance plans starting at $100/month. This covers updates, bug fixes, and minor enhancements.",
  },
];

export default function FAQ() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.12 });
  const [open, setOpen] = useState(null);

  const toggle = (i) => setOpen(open === i ? null : i);

  return (
    <section
      id="faq"
      ref={ref}
      className="section relative overflow-hidden"
    >
      <div className="section-container">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="eyebrow">Questions clients ask</span>
          <h2 className="mt-4 text-display-md text-ink">
            Everything you need to know before we start.
          </h2>
        </motion.div>

        {/* FAQ accordion */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.04, delayChildren: 0.15 } },
          }}
          className="mx-auto mt-14 max-w-2xl"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.question}
              variants={{
                hidden: { opacity: 0, y: 8 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
                },
              }}
              className="border-b border-border py-4"
            >
              <button
                onClick={() => toggle(index)}
                aria-expanded={open === index}
                className="flex w-full items-center justify-between gap-4 text-left"
              >
                <span className="text-base font-medium text-ink">
                  {faq.question}
                </span>
                <ChevronDown
                  size={16}
                  strokeWidth={2}
                  className={`shrink-0 text-ink-subtle transition-transform duration-200 ${
                    open === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`mt-2 text-sm leading-relaxed text-ink-muted ${
                  open === index ? "block" : "hidden"
                }`}
              >
                {faq.answer}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Still have questions */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-ink-muted">
            Still have questions?{" "}
            <Link href="#contact" className="link-underline text-ink">
              Send me a message
            </Link>{" "}
            — I&apos;m always happy to chat.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
