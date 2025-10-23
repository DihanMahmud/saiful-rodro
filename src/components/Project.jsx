"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Card from "./Card";

const items = [
  {
    image: "/NasaAPI.png",
    name: "NASA Mission Control",
    url: "nasa-mission-control",
  },
  {
    image: "/CodeCollab.png",
    name: "Code Collab",
    url: "code-collab",
  },
  {
    image: "/nasstore.png",
    name: "NasStore",
    url: "nasstore",
  },
  {
    image: "/IteliTalk.png",
    name: "InteliTalk",
    url: "intelitalk",
  },
  {
    image: "/shoppingCart.png",
    name: "Basic Shopping Cart",
    url: "basic-shopping-cart",
  },
  {
    url: "travel-recommendation-website",
    name: "Travel Recommendation Website",
    image: "/laptop.png",
  },
  {
    url: "health-census-website",
    name: "Health Census Website",
    image: "/health.png",
  },
  {
    url: "tasklist",
    name: "TaskList",
    image: "/tasklist.png",
  },
  {
    url: "loan-calculator",
    name: "Loan Calculator",
    image: "/loan.png",
  },
  {
    url: "robofriends",
    name: "RoboFriends",
    image: "/robofriends.png",
  },
  {
    url: "number-guessing-game",
    name: "Number Guessing Game",
    image: "/img.jpeg",
  },
  {
    url: "profile-scroller",
    name: "Profile Scroller",
    image: "/img.jpeg",
  },
];


export default function Project() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  return (
    <div
      id="portfolio"
      ref={ref}
      className="max-w-screen-2xl px-6 md:px-12 mx-auto pt-24 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute w-96 h-96 bg-gradient-to-r from-[#7cfc00]/5 to-transparent rounded-full blur-3xl"
          style={{ left: "70%", top: "10%" }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2],
            x: [0, 40, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </div>

      <motion.div
        className="text-center mb-16 relative z-10"
        initial={{ opacity: 0, y: -30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1
          className="uppercase text-2xl sm:text-4xl text-[#7cfc00] font-bold tracking-wider relative"
          whileHover={{
            scale: 1.05,
            textShadow: "0 0 20px rgba(124, 252, 0, 0.8)",
          }}
        >
          Portfolio
          <motion.div
            className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-[#7cfc00] to-transparent"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          />
        </motion.h1>
      </motion.div>

      <Card items={items} />
    </div>
  );
}
