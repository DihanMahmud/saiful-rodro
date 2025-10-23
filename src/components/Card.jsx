"use client";

import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { useRef, useState } from "react";

export default function Card({ items }) {
  const [visibleCount, setVisibleCount] = useState(6);
  const [hoveredCard, setHoveredCard] = useState(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const showMoreItems = () => {
    setVisibleCount((prevCount) => prevCount + 6);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 60,
      scale: 0.8,
      rotateX: 45,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.8,
      },
    },
  };

  const overlayVariants = {
    hidden: { opacity: 0.7 },
    hover: {
      opacity: 0.9,
      background:
        "linear-gradient(135deg, rgba(0,0,0,0.6) 0%, rgba(124,252,0,0.1) 100%)",
    },
  };

  const contentVariants = {
    hidden: { y: 20, opacity: 0 },
    hover: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
  };

  return (
    <div ref={ref}>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {items.slice(0, visibleCount).map((item, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{
              scale: 1.05,
              y: -10,
              rotateY: 5,
              rotateX: -5,
              zIndex: 10,
            }}
            whileTap={{ scale: 0.98 }}
            onHoverStart={() => setHoveredCard(index)}
            onHoverEnd={() => setHoveredCard(null)}
            className="relative rounded-xl h-80 bg-cover bg-center overflow-hidden group cursor-pointer"
            style={{
              backgroundImage: `url(${item.image})`,
              perspective: "1000px",
            }}
          >
            {/* Animated Background Overlay */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-b from-transparent to-black rounded-xl"
              variants={overlayVariants}
              initial="hidden"
              whileHover="hover"
            />

            {/* Glow Effect */}
            <motion.div
              className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100"
              style={{
                background:
                  "linear-gradient(45deg, transparent, rgba(124, 252, 0, 0.1), transparent)",
                filter: "blur(1px)",
              }}
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />

            {/* Shimmer Effect */}
            <motion.div
              className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              style={{
                background:
                  "linear-gradient(45deg, transparent, rgba(255,255,255,0.1), transparent)",
                transform: "skewX(-25deg)",
              }}
            />

            {/* Border Glow */}
            <motion.div
              className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-[#7cfc00]/30"
              style={{
                boxShadow:
                  hoveredCard === index
                    ? "0 0 30px rgba(124, 252, 0, 0.3)"
                    : "none",
              }}
            />

            {/* Content */}
            <motion.div
              className="absolute bottom-0 left-0 right-0 p-6 text-white z-10"
              variants={contentVariants}
              initial="hidden"
              whileHover="hover"
            >
              <motion.h3
                className="text-xl font-bold mb-3 line-clamp-1"
                initial={{ y: 10, opacity: 0.8 }}
                whileHover={{ y: 0, opacity: 1 }}
              >
                {item.name}
              </motion.h3>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={`/${item.url}`}
                  className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#7cfc00] to-[#5dd400] text-black rounded-lg font-semibold hover:shadow-lg hover:shadow-[#7cfc00]/25 transition-all duration-300 group/btn"
                >
                  Learn More
                  <motion.svg
                    className="ml-2 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </motion.svg>
                </Link>
              </motion.div>
            </motion.div>

            {/* Floating Particles */}
            {hoveredCard === index && (
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-[#7cfc00] rounded-full"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                      y: [0, -20, 0],
                      opacity: [0, 1, 0],
                      scale: [0, 1, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                  />
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </motion.div>

      <div className="w-full flex justify-center py-8">
        {items.length > visibleCount && (
          <motion.button
            id="view-more"
            className="relative px-8 py-3 font-semibold text-lg rounded-lg border-2 border-[#7cfc00] text-[#7cfc00] overflow-hidden group"
            onClick={showMoreItems}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.span
              className="absolute inset-0 bg-[#7cfc00] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"
              initial={false}
            />
            <span className="relative z-10 group-hover:text-black transition-colors duration-300">
              View More
            </span>
          </motion.button>
        )}
      </div>
    </div>
  );
}
