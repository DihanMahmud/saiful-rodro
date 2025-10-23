"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion, useInView } from "framer-motion";
import {
  Code2,
  Cpu,
  Database,
  Globe,
  Layout,
  Server,
  Wrench,
} from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

const services = [
  {
    title: "Full-Stack Development",
    description:
      "End-to-end web application development using modern technologies.",
    icon: <Globe className="h-8 w-8 text-white" />,
    skills: [
      "JavaScript (ES6)",
      "React",
      "Remix",
      "Next.js",
      "Node.js",
      "Express.js",
      "NestJS",
      "MongoDB",
      "PostgreSQL",
    ],
    pricing: {
      hourly: "$30",
      project: "From $800",
    },
  },
  {
    title: "Frontend Specialization",
    description: "Creating responsive and interactive user interfaces.",
    icon: <Layout className="h-8 w-8 text-white" />,
    skills: [
      "HTML",
      "CSS",
      "Tailwind CSS",
      "React",
      "Remix",
      "Next.js",
      "React Router",
      "Redux Toolkit",
    ],
    pricing: {
      hourly: "$25",
      project: "From $500",
    },
  },
  {
    title: "Backend Development",
    description: "Building robust server-side applications and APIs.",
    icon: <Server className="h-8 w-8 text-white" />,
    skills: [
      "Node.js",
      "Express.js",
      "NestJS",
      "MongoDB",
      "PostgreSQL",
      "Prisma",
    ],
    pricing: {
      hourly: "$40",
      project: "From $1,000",
    },
  },
  {
    title: "Database Management",
    description:
      "Designing and optimizing database solutions for various needs.",
    icon: <Database className="h-8 w-8 text-white" />,
    skills: ["MongoDB", "PostgreSQL", "MySQL", "Prisma", "Mongoose"],
    pricing: {
      hourly: "$30",
      project: "From $600",
    },
  },
  {
    title: "DevOps & Deployment",
    description: "Streamlining development processes and managing deployments.",
    icon: <Wrench className="h-8 w-8 text-white" />,
    skills: [
      "Git",
      "GitHub",
      "Docker",
      "CI/CD",
      "Github Actions",
      "AWS",
      "Microsoft Azure",
      "Vercel",
      "Netlify",
      "Render",
      "DigitalOcean",
    ],
    pricing: {
      hourly: "$30",
      project: "From $900",
    },
  },
  {
    title: "AI Integration",
    description: "Incorporating AI capabilities into software solutions.",
    icon: <Code2 className="h-8 w-8 text-white" />,
    skills: [
      "OpenAI",
      "DeepSeek",
      "Gemini",
      "Langchain",
      "Custom AI Solutions",
    ],
    pricing: {
      hourly: "$40",
      project: "From $1,000",
    },
  },
  {
    title: "Microservices Architecture",
    description:
      "Designing and implementing scalable microservices-based systems.",
    icon: <Cpu className="h-8 w-8 text-white" />,
    skills: ["Go", "Node.js", "Docker", "Kubernetes", "API Gateway"],
    pricing: {
      hourly: "$50",
      project: "From $1,500",
    },
  },
];

export default function Service() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
      rotateY: 15,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateY: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const iconVariants = {
    animate: {
      rotate: [0, 10, -10, 0],
      scale: [1, 1.1, 1],
      transition: {
        duration: 3,
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  };

  return (
    <section
      className="max-w-screen-2xl mx-auto px-6 pb-12 md:px-12 text-gray-100 pt-24 relative overflow-hidden"
      id="services"
      ref={ref}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute w-80 h-80 bg-gradient-to-r from-[#7cfc00]/5 to-transparent rounded-full blur-3xl"
          style={{ left: "10%", top: "30%" }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
            x: [0, 30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute w-64 h-64 bg-gradient-to-l from-[#7cfc00]/8 to-transparent rounded-full blur-3xl"
          style={{ right: "5%", bottom: "20%" }}
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

      <div className="mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1
            className="uppercase text-2xl sm:text-4xl text-[#7CFC00] font-bold tracking-wider relative"
            whileHover={{
              scale: 1.05,
              textShadow: "0 0 20px rgba(124, 252, 0, 0.8)",
            }}
          >
            Services & Pricing
            <motion.div
              className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-40 h-1 bg-gradient-to-r from-transparent via-[#7cfc00] to-transparent"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            />
          </motion.h1>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                scale: 1.05,
                y: -10,
                rotateY: 5,
                boxShadow: "0 20px 40px rgba(124, 252, 0, 0.1)",
              }}
              className="relative group"
            >
              <Card className="flex flex-col bg-gradient-to-br from-[#222] to-[#1a1a1a] border-gray-700/50 hover:border-[#7cfc00]/30 transition-all duration-500 h-full relative overflow-hidden">
                {/* Glow Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#7cfc00]/5 via-transparent to-[#7cfc00]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background:
                      "radial-gradient(circle at 50% 0%, rgba(124, 252, 0, 0.1), transparent 70%)",
                  }}
                />

                <CardHeader className="relative z-10">
                  <div className="flex items-center gap-3 mb-2">
                    <motion.div
                      variants={iconVariants}
                      animate="animate"
                      style={{ animationDelay: `${index * 0.5}s` }}
                    >
                      {service.icon}
                    </motion.div>
                    <CardTitle className="text-xl text-gray-100 group-hover:text-[#7cfc00] transition-colors duration-300">
                      {service.title}
                    </CardTitle>
                  </div>
                  <CardDescription className="text-gray-300">
                    {service.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="flex-grow relative z-10">
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-200 mb-2">
                      Skills:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {service.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skillIndex}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Badge className="bg-gray-700 text-gray-200 hover:bg-[#7cfc00]/20 hover:text-[#7cfc00] transition-all duration-300">
                            {skill}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  <div className="mt-auto">
                    <h4 className="font-semibold text-gray-200 mb-2">
                      Pricing:
                    </h4>
                    <motion.p
                      className="text-gray-300"
                      whileHover={{ x: 5, color: "#7cfc00" }}
                    >
                      Hourly:{" "}
                      <span className="font-bold text-[#7cfc00]">
                        {service.pricing.hourly}
                      </span>
                    </motion.p>
                    <motion.p
                      className="text-gray-300"
                      whileHover={{ x: 5, color: "#7cfc00" }}
                    >
                      Project-based:{" "}
                      <span className="font-bold text-[#7cfc00]">
                        {service.pricing.project}
                      </span>
                    </motion.p>
                  </div>
                </CardContent>

                <div className="p-6 pt-0 relative z-10">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button className="w-full bg-gradient-to-r from-[#7cfc00] to-[#5dd400] text-black hover:from-[#5dd400] hover:to-[#7cfc00] font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-[#7cfc00]/25 relative overflow-hidden group/btn">
                      <motion.span
                        className="absolute inset-0 bg-white/20 transform -translate-x-full group-hover/btn:translate-x-full transition-transform duration-500"
                        initial={false}
                      />
                      <Link
                        href="mailto:dev-saiful@outlook.com"
                        className="relative z-10"
                      >
                        Request Quote
                      </Link>
                    </Button>
                  </motion.div>
                </div>

                {/* Floating Particles on Hover */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-[#7cfc00] rounded-full"
                      style={{
                        left: `${20 + i * 15}%`,
                        top: `${20 + (i % 3) * 20}%`,
                      }}
                      animate={{
                        y: [0, -10, 0],
                        opacity: [0.3, 1, 0.3],
                        scale: [1, 1.5, 1],
                      }}
                      transition={{
                        duration: 2 + i * 0.3,
                        repeat: Infinity,
                        delay: i * 0.2,
                      }}
                    />
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
