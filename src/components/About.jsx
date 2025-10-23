"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  { name: "JavaScript", level: 95 },
  { name: "Python", level: 85 },
  { name: "Node.js", level: 90 },
  { name: "Langchain", level: 70 },
  { name: "React", level: 60 },
  { name: "PostgreSQL", level: 88 },
  { name: "MongoDB", level: 92 },
  { name: "Express", level: 90 },
  { name: "Docker", level: 80 },
  { name: "AWS", level: 75 },
];

export default function About() {
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

  const titleVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 12,
      },
    },
  };

  const lineVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const progressVariants = {
    hidden: { width: 0 },
    visible: (level) => ({
      width: `${level}%`,
      transition: {
        duration: 1.5,
        ease: "easeOut",
        delay: 0.5,
      },
    }),
  };

  return (
    <div
      id="about"
      ref={ref}
      className="max-w-screen-2xl bg-gradient-to-br from-[#333] to-[#2a2a2a] mx-auto px-6 md:px-12 py-24 md:py-32 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute w-64 h-64 bg-[#7cfc00]/5 rounded-full blur-3xl"
          style={{ left: "80%", top: "20%" }}
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
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="relative z-10"
      >
        <motion.h1
          variants={titleVariants}
          className="uppercase text-2xl sm:text-4xl text-[#7CFC00] pb-7 font-bold tracking-wider"
        >
          About
          <motion.div
            className="h-1 w-16 bg-[#7CFC00] mt-2 rounded-sm origin-left"
            variants={lineVariants}
          />
        </motion.h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Text Content */}
          <motion.div variants={textVariants} className="lg:w-2/3">
            <div className="text-justify leading-relaxed text-gray-300">
              <motion.p
                className="mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                I am{" "}
                <span className="text-[#7cfc00] font-semibold">
                  Saiful Islam
                </span>
                , a GenAI Software Engineer passionate about building
                intelligent, scalable, and impactful software solutions. I hold
                a BSc in Computer Science and Engineering from Sonargaon
                University, where I achieved a CGPA of 3.87. I specialize in
                full-stack and AI-driven web development using{" "}
                <span className="text-[#7cfc00]">
                  JavaScript (ES6+), Node.js, Express.js, Next.js, Python and
                  Langchain
                </span>
                .
              </motion.p>

              <motion.p
                className="mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                My expertise spans databases such as{" "}
                <span className="text-[#7cfc00]">
                  MongoDB, PostgreSQL, and MySQL
                </span>
                , as well as deployment tools including{" "}
                <span className="text-[#7cfc00]">
                  Docker, Kubernetes, and CI/CD pipelines
                </span>
                . I'm currently deepening my knowledge of system design and
                microservices to build highly scalable architectures.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ delay: 0.7, duration: 0.8 }}
              >
                I'm driven by a love for solving complex problems and
                continuously exploring innovations in{" "}
                <span className="text-[#7cfc00]">
                  Generative AI, LangChain, and LLM{" "}
                </span>
                , integration to enhance user experiences and business
                efficiency.
              </motion.p>
            </div>
          </motion.div>

          {/* Skills Progress Bars */}
          <motion.div variants={textVariants} className="lg:w-1/3">
            <h3 className="text-xl font-semibold text-[#7cfc00] mb-6">
              Technical Skills
            </h3>
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  variants={skillVariants}
                  custom={index}
                  className="space-y-2"
                >
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300 font-medium">
                      {skill.name}
                    </span>
                    <span className="text-[#7cfc00] text-sm">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-[#7cfc00] to-[#5dd400] rounded-full"
                      variants={progressVariants}
                      custom={skill.level}
                      initial="hidden"
                      animate={isInView ? "visible" : "hidden"}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
