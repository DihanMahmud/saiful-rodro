"use client";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaSquareXTwitter,
} from "react-icons/fa6";
import saiful from "../../public/saiful-Photoroom.png";

// Typewriter Hook
const useTypewriter = (text, speed = 100) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    // Reset state when text changes
    setDisplayedText("");
    setIsComplete(false);

    let i = 0;
    const timer = setInterval(() => {
      if (i < text.length) {
        setDisplayedText(text.substring(0, i + 1));
        i++;
      } else {
        setIsComplete(true);
        clearInterval(timer);
      }
    }, speed);

    return () => clearInterval(timer);
  }, [text, speed]);

  return { displayedText, isComplete };
};

export default function Home() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });
  const { displayedText: nameText, isComplete } = useTypewriter(
    "Saiful Islam",
    150
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, rotateX: 45 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const socialVariants = {
    hidden: { opacity: 0, x: 50, scale: 0 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  // Particle component
  const Particles = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-[#7cfc00] rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0.2, 1, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 4 + Math.random() * 3,
            repeat: Infinity,
            repeatType: "reverse",
            delay: Math.random() * 2,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );

  return (
    <div
      ref={ref}
      className="sm:height max-w-screen-2xl mx-auto px-6 md:px-12 flex sm:flex-row flex-col justify-center items-center mt-24 z-0 relative overflow-hidden"
    >
      <Particles />

      {/* Gradient Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-72 h-72 bg-gradient-to-r from-[#7cfc00]/10 to-transparent rounded-full blur-3xl"
          style={{ left: "10%", top: "20%" }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.7, 0.3],
            x: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute w-96 h-96 bg-gradient-to-l from-[#7cfc00]/5 to-transparent rounded-full blur-3xl"
          style={{ right: "10%", bottom: "10%" }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.5, 0.2],
            x: [0, -40, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </div>

      <motion.div
        className="w-full pt-16 pb-6 sm:py-5 sm:w-1/2 flex flex-col gap-3 sm:gap-5 lg:p-10 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div
          className="text-2xl sm:text-3xl md:text-5xl"
          variants={itemVariants}
        >
          <span>I'm </span>
          <span className="mohona text-[#7cfc00] text-3xl sm:text-4xl md:text-6xl relative">
            {nameText}
            <motion.span
              className="inline-block w-0.5 h-8 sm:h-12 md:h-16 bg-[#7cfc00] ml-1"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            />
          </span>
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="text-xl sm:text-2xl md:text-3xl text-gray-300"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={isComplete ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.5 }}
          >
            GenAI Software Developer
          </motion.span>
        </motion.p>

        <motion.div variants={itemVariants}>
          <motion.div
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 30px rgba(124, 252, 0, 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="#contact"
              className="w-fit px-6 py-3 text-[#7CFC00] border-2 border-[#7CFC00] rounded-lg font-semibold relative overflow-hidden group transition-all duration-300"
            >
              <motion.span
                className="absolute inset-0 bg-[#7CFC00] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"
                initial={false}
              />
              <span className="relative z-10 group-hover:text-black transition-colors duration-300">
                Contact Me
              </span>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>

      <div className="w-full relative sm:w-1/2">
        <motion.div
          variants={imageVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative"
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.3, ease: "easeOut" },
          }}
        >
          <Image
            src={saiful}
            alt="Saiful-Islam"
            className="w-full h-auto max-h-[calc(100vh-8rem)] object-contain relative z-10"
          />
        </motion.div>

        <motion.div
          variants={socialVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ delay: 1.5 }}
          className="absolute bottom-14 right-0 flex flex-col justify-center items-center gap-4 z-20"
        >
          <motion.span
            className="inline-block h-16 w-1 bg-[#7cfc00] rounded"
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ delay: 1.8, duration: 0.8 }}
          />

          {[
            { href: "https://www.facebook.com/jsdev.saiful", icon: FaFacebook },
            { href: "https://x.com/dev_saiful", icon: FaSquareXTwitter },
            {
              href: "https://www.linkedin.com/in/dev-saiful/",
              icon: FaLinkedin,
            },
            { href: "https://github.com/dev-saiful", icon: FaGithub },
          ].map((social, index) => {
            const IconComponent = social.icon;
            return (
              <motion.div
                key={social.href}
                whileHover={{
                  scale: 1.2,
                  color: "#7cfc00",
                  rotate: 360,
                  boxShadow: "0 0 15px rgba(124, 252, 0, 0.5)",
                }}
                whileTap={{ scale: 0.9 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  rotate: { duration: 0.6, ease: "easeInOut" },
                }}
                className="p-2 rounded-full hover:bg-[#7cfc00]/10 transition-all duration-300"
                style={{
                  transitionDelay: `${2 + index * 0.1}s`,
                  transformOrigin: "center",
                }}
                initial={{ opacity: 0, x: 20 }}
                animate={
                  isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }
                }
              >
                <Link href={social.href} target="_blank">
                  <motion.div
                    style={{
                      display: "inline-block",
                      transformOrigin: "center",
                    }}
                  >
                    <IconComponent size={24} />
                  </motion.div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
