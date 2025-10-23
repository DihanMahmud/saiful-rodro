"use client";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaSquareXTwitter,
} from "react-icons/fa6";
import { IoCallOutline, IoLocationOutline } from "react-icons/io5";
import { MdOutlineMarkEmailUnread } from "react-icons/md";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const lineVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: { duration: 1, ease: "easeInOut" },
    },
  };

  const socialVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
      },
    },
  };

  return (
    <div
      id="contact"
      ref={ref}
      className="max-w-screen-2xl py-16 mx-auto relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute w-72 h-72 bg-gradient-to-r from-[#7cfc00]/10 to-transparent rounded-full blur-3xl"
          style={{ left: "20%", top: "10%" }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute w-96 h-96 bg-gradient-to-l from-[#7cfc00]/5 to-transparent rounded-full blur-3xl"
          style={{ right: "10%", bottom: "20%" }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="relative z-10"
      >
        {/* Title Section */}
        <motion.div
          className="flex gap-4 items-center mb-12"
          variants={itemVariants}
        >
          <motion.span
            className="w-full h-1 bg-gradient-to-r from-transparent via-[#7cfc00] to-[#7cfc00] rounded-sm origin-left"
            variants={lineVariants}
          />
          <motion.h1
            className="text-4xl text-[#7cfc00] font-bold tracking-wider whitespace-nowrap"
            whileHover={{
              scale: 1.1,
              textShadow: "0 0 20px rgba(124, 252, 0, 0.8)",
            }}
          >
            Contact
          </motion.h1>
          <motion.span
            className="w-full h-1 bg-gradient-to-l from-transparent via-[#7cfc00] to-[#7cfc00] rounded-sm origin-right"
            variants={lineVariants}
          />
        </motion.div>

        {/* Contact Cards */}
        <motion.div
          className="bg-gradient-to-br from-[#554e4e]/80 to-[#3a3a3a]/80 backdrop-blur-sm rounded-2xl p-8 sm:p-12 border border-gray-600/30 relative overflow-hidden"
          variants={itemVariants}
        >
          {/* Animated Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-[#7cfc00] rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>

          <div className="flex flex-col justify-center items-center gap-6 relative z-10">
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full">
              <motion.div
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 30px rgba(124, 252, 0, 0.2)",
                }}
                whileTap={{ scale: 0.95 }}
                className="flex-1"
              >
                <Link
                  href="mailto:dev-saiful@outlook.com"
                  className="flex items-center justify-center gap-3 p-4 rounded-xl border-2 border-[#7cfc00]/50 hover:border-[#7cfc00] bg-gradient-to-r hover:from-[#7cfc00]/10 hover:to-transparent transition-all duration-300 group"
                >
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                    className="text-[#7cfc00] group-hover:scale-110 transition-transform duration-300"
                  >
                    <MdOutlineMarkEmailUnread size={24} />
                  </motion.div>
                  <span className="font-medium group-hover:text-[#7cfc00] transition-colors duration-300">
                    dev-saiful@outlook.com
                  </span>
                </Link>
              </motion.div>

              <motion.div
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 30px rgba(124, 252, 0, 0.2)",
                }}
                whileTap={{ scale: 0.95 }}
                className="flex-1"
              >
                <Link
                  href="https://t.me/dev_saiful"
                  target="_blank"
                  className="flex items-center justify-center gap-3 p-4 rounded-xl border-2 border-[#7cfc00]/50 hover:border-[#7cfc00] bg-gradient-to-r hover:from-[#7cfc00]/10 hover:to-transparent transition-all duration-300 group"
                >
                  <motion.div
                    animate={{
                      rotate: [0, 15, -15, 0],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                    className="text-[#7cfc00] group-hover:scale-110 transition-transform duration-300"
                  >
                    <IoCallOutline size={24} />
                  </motion.div>
                  <span className="font-medium group-hover:text-[#7cfc00] transition-colors duration-300">
                    @dev_saiful
                  </span>
                </Link>
              </motion.div>
            </div>

            <motion.div
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 30px rgba(124, 252, 0, 0.2)",
              }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto"
            >
              <div className="flex items-center justify-center gap-3 p-4 rounded-xl border-2 border-[#7cfc00]/50 hover:border-[#7cfc00] bg-gradient-to-r hover:from-[#7cfc00]/10 hover:to-transparent transition-all duration-300 group">
                <motion.div
                  animate={{
                    y: [0, -5, 5, 0],
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                  className="text-[#7cfc00] group-hover:scale-110 transition-transform duration-300"
                >
                  <IoLocationOutline size={24} />
                </motion.div>
                <span className="font-medium group-hover:text-[#7cfc00] transition-colors duration-300">
                  Dhaka, Bangladesh
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Social Media Section */}
        <motion.div
          className="flex gap-4 items-center mt-12"
          variants={itemVariants}
        >
          <motion.span
            className="w-full h-1 bg-gradient-to-r from-transparent via-[#7cfc00] to-[#7cfc00] rounded-sm origin-left"
            variants={lineVariants}
          />

          <div className="flex justify-center items-center gap-4">
            {[
              null,
              {
                href: "https://www.facebook.com/jsdev.saiful",
                icon: FaFacebook,
                bg: "bg-[#1877f2]/20",
                hover: "hover:bg-[#1877f2]/40",
              },
              {
                href: "https://x.com/dev_saiful",
                icon: FaSquareXTwitter,
                bg: "bg-gray-800/50",
                hover: "hover:bg-gray-700/70",
              },
              {
                href: "https://www.linkedin.com/in/dev-saiful/",
                icon: FaLinkedin,
                bg: "bg-[#0077b5]/20",
                hover: "hover:bg-[#0077b5]/40",
              },
              {
                href: "https://github.com/dev-saiful",
                icon: FaGithub,
                bg: "bg-[#333]/50",
                hover: "hover:bg-[#333]/70",
              },
            ].map((social, index) => {
              if (!social) return null;
              const IconComponent = social.icon;
              return (
                <motion.div
                  key={social.href}
                  variants={socialVariants}
                  whileHover={{
                    scale: 1.2,
                    rotate: 360,
                    boxShadow: "0 0 20px rgba(124, 252, 0, 0.5)",
                  }}
                  whileTap={{ scale: 0.9 }}
                  className={`p-3 rounded-full ${social.bg} ${social.hover} border border-[#7cfc00]/30 hover:border-[#7cfc00] transition-all duration-300`}
                  style={{ transitionDelay: `${index * 0.1}s` }}
                >
                  <Link href={social.href} target="_blank">
                    <IconComponent
                      size={28}
                      className="text-gray-300 hover:text-[#7cfc00] transition-colors duration-300"
                    />
                  </Link>
                </motion.div>
              );
            })}
          </div>

          <motion.span
            className="w-full h-1 bg-gradient-to-l from-transparent via-[#7cfc00] to-[#7cfc00] rounded-sm origin-right"
            variants={lineVariants}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
