"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const pageVariants = {
  initial: { opacity: 0, y: 10 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -10 },
};

const pageTransition = {
  type: "tween",
  ease: "easeOut",
  duration: 0.3,
};

const LoadingSpinner = () => (    <motion.div
    className="fixed inset-0 bg-bg flex items-center justify-center z-50"
    initial={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.2 }}
  >
    <div className="relative">
      <motion.div
        className="w-16 h-16 border-4 border-border border-t-brand rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute inset-2 w-8 h-8 border-2 border-border-strong border-b-brand rounded-full"
        animate={{ rotate: -360 }}
        transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute inset-6 w-4 h-4 bg-brand rounded-full"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 1, repeat: Infinity }}
      />
    </div>
    <motion.p
      className="absolute mt-24 text-brand font-semibold"
      animate={{ opacity: [1, 0.5, 1] }}
      transition={{ duration: 1.5, repeat: Infinity }}
    >
      Loading...
    </motion.p>
  </motion.div>
);

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollTop = document.documentElement.scrollTop;
          const scrollHeight =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;
          const progress =
            scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
          setScrollProgress(progress);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gray-700 z-50"
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="h-full bg-gradient-to-r from-brand to-brand-hover"
        style={{ width: `${scrollProgress}%` }}
        transition={{ duration: 0.1 }}
      />
    </motion.div>
  );
};

export default function PageTransition({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      requestAnimationFrame(() => {
        setIsLoading(false);
      });
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      const fallbackTimer = setTimeout(handleLoad, 800);

      return () => {
        window.removeEventListener("load", handleLoad);
        clearTimeout(fallbackTimer);
      };
    }
  }, []);

  return (
    <div className="bg-bg min-h-screen">
      <ScrollProgress />
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingSpinner key="loading" />
        ) : (
          <motion.div
            key="content"
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
            className="min-h-screen"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
