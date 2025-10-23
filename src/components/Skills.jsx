"use client";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import Icon from "./Icon";

const skills = [
  { name: "Azure", icon: "/azure.svg", category: "Cloud" },
  { name: "AWS", icon: "/aws.svg", category: "Cloud" },
  { name: "C++", icon: "/cpp.svg", category: "Language" },
  { name: "Golang", icon: "/golang.svg", category: "Language" },
  { name: "CSS", icon: "/css.svg", category: "Frontend" },
  { name: "Docker", icon: "/docker.png", category: "DevOps" },
  { name: "Express", icon: "/express.svg", category: "Backend" },
  { name: "Git", icon: "/git.svg", category: "Tool" },
  { name: "GitHub", icon: "/github.svg", category: "Tool" },
  { name: "HTML", icon: "/html.svg", category: "Frontend" },
  { name: "MongoDB", icon: "/mongodb.svg", category: "Database" },
  { name: "MySQL", icon: "/mysql.svg", category: "Database" },
  { name: "Node.js", icon: "/nodejs.svg", category: "Backend" },
  {
    name: "Javascript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    category: "Language",
  },
  { name: "PostgreSQL", icon: "/postgresql.svg", category: "Database" },
  { name: "Postman", icon: "/postman.svg", category: "Tool" },
  { name: "Prisma", icon: "/prisma.svg", category: "Backend" },
];

// Advanced animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.15,
      duration: 0.8,
    },
  },
};

const titleVariants = {
  hidden: {
    opacity: 0,
    y: -50,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
      duration: 1.2,
    },
  },
};

const skillVariants = {
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.7,
    rotateX: 45,
  },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 12,
      delay: index * 0.1,
      duration: 0.8,
    },
  }),
};

const skillHoverVariants = {
  hover: {
    scale: 1.15,
    y: -15,
    rotateY: 15,
    rotateX: -5,
    zIndex: 10,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 15,
    },
  },
  tap: {
    scale: 0.95,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 20,
    },
  },
};

const glowVariants = {
  initial: {
    boxShadow: "0 0 0 rgba(124, 252, 0, 0)",
  },
  hover: {
    boxShadow: [
      "0 0 20px rgba(124, 252, 0, 0.3)",
      "0 0 40px rgba(124, 252, 0, 0.6)",
      "0 0 20px rgba(124, 252, 0, 0.3)",
    ],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
};

const floatingVariants = {
  animate: {
    y: [-5, 5, -5],
    rotate: [-1, 1, -1],
    transition: {
      duration: 4,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
    },
  },
};

export default function Skills() {
  const ref = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  return (
    <div
      className="max-w-screen-2xl mx-auto px-6 pt-12 md:px-12 relative overflow-hidden"
      ref={ref}
    >
      {/* Background animated elements */}
      <div className="absolute inset-0 -z-10">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-[#7CFC00]/5 to-transparent blur-3xl"
            style={{
              left: `${20 + i * 30}%`,
              top: `${10 + i * 20}%`,
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.3, 0.1],
              x: [0, 50, 0],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <motion.div
        variants={titleVariants}
        initial="hidden"
        animate={controls}
        className="text-center relative"
      >
        <motion.h1
          className="uppercase text-2xl sm:text-4xl text-[#7CFC00] pb-7 font-bold tracking-wider"
          whileHover={{
            scale: 1.05,
            textShadow: "0 0 20px rgba(124, 252, 0, 0.8)",
          }}
        >
          My Skills
          <motion.div
            className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-[#7CFC00] to-transparent"
            initial={{ scaleX: 0 }}
            animate={controls}
            variants={{
              visible: {
                scaleX: 1,
                transition: { delay: 0.8, duration: 0.8 },
              },
            }}
          />
        </motion.h1>
      </motion.div>

      <motion.div
        className="flex flex-col justify-center items-center gap-8"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        {Array.from({ length: Math.ceil(skills.length / 5) }).map(
          (_, rowIndex) => (
            <motion.div
              key={rowIndex}
              className="flex gap-8 lg:flex-nowrap flex-wrap justify-center"
              variants={{
                hidden: { opacity: 0, x: rowIndex % 2 === 0 ? -100 : 100 },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: {
                    type: "spring",
                    stiffness: 80,
                    damping: 20,
                    staggerChildren: 0.1,
                  },
                },
              }}
            >
              {skills
                .slice(rowIndex * 5, rowIndex * 5 + 5)
                .map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    variants={skillVariants}
                    custom={skillIndex}
                    className="relative group"
                  >
                    <motion.div
                      variants={skillHoverVariants}
                      whileHover="hover"
                      whileTap="tap"
                      className="relative perspective-1000"
                    >
                      <motion.div
                        variants={floatingVariants}
                        animate="animate"
                        style={{ animationDelay: `${skillIndex * 0.5}s` }}
                        className="relative"
                      >
                        <motion.div
                          variants={glowVariants}
                          initial="initial"
                          whileHover="hover"
                          className="absolute inset-0 rounded-xl -z-10"
                        />

                        {/* Skill category badge */}
                        <motion.div
                          className="absolute -top-2 -right-2 bg-[#7CFC00] text-black text-xs px-2 py-1 rounded-full font-semibold opacity-0 group-hover:opacity-100 z-20"
                          initial={{ scale: 0, rotate: -180 }}
                          whileHover={{
                            scale: 1,
                            rotate: 0,
                            transition: { type: "spring", stiffness: 300 },
                          }}
                        >
                          {skill.category}
                        </motion.div>

                        <motion.div
                          className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-1 border border-gray-700/50 group-hover:border-[#7CFC00]/50 transition-colors duration-300"
                          whileHover={{
                            background:
                              "linear-gradient(135deg, rgba(124, 252, 0, 0.1), rgba(0, 0, 0, 0.8))",
                          }}
                        >
                          <Icon name={skill.name} icon={skill.icon} />
                        </motion.div>

                        {/* Ripple effect */}
                        <motion.div
                          className="absolute inset-0 rounded-xl bg-[#7CFC00]/20 opacity-0"
                          whileHover={{
                            opacity: [0, 1, 0],
                            scale: [1, 1.2, 1.4],
                          }}
                          transition={{ duration: 0.6 }}
                        />
                      </motion.div>
                    </motion.div>
                  </motion.div>
                ))}
            </motion.div>
          )
        )}
      </motion.div>

      {/* Particle effect */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#7CFC00] rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              repeatType: "reverse",
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </div>
  );
}
