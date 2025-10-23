"use client";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { memo, useCallback, useEffect, useMemo, useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { MdOutlineCancel } from "react-icons/md";

const menuVariants = {
  closed: {
    x: "100%",
    opacity: 0,
    transition: {
      type: "tween",
      duration: 0.3,
      ease: "easeInOut",
    },
  },
  open: {
    x: "0%",
    opacity: 1,
    transition: {
      type: "tween",
      duration: 0.3,
      ease: "easeInOut",
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
};

const linkVariants = {
  closed: {
    x: 20,
    opacity: 0,
  },
  open: {
    x: 0,
    opacity: 1,
    transition: {
      type: "tween",
      duration: 0.2,
      ease: "easeOut",
    },
  },
};

const navbarVariants = {
  hidden: { y: -100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "tween",
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    const isScrolled = window.scrollY > 10;
    setScrolled(isScrolled);
  }, []);

  useEffect(() => {
    let ticking = false;

    const optimizedHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", optimizedHandleScroll, { passive: true });
    return () => window.removeEventListener("scroll", optimizedHandleScroll);
  }, [handleScroll]);

  const toggleMenu = useCallback(
    () => setIsMenuOpen(!isMenuOpen),
    [isMenuOpen]
  );
  const closeMenu = useCallback(() => setIsMenuOpen(false), []);

  const navLinks = useMemo(
    () => [
      { href: "#about", label: "About" },
      { href: "#portfolio", label: "Portfolio" },
      { href: "#services", label: "Services" },
      { href: "#contact", label: "Contact" },
      { href: "/blog", label: "Blog" },
    ],
    []
  );

  const mobileNavLinks = useMemo(
    () => [
      ...navLinks,
      {
        href: "https://drive.google.com/file/d/1uphppbUFY0wiKEd7QVzvIzCJCL4FnGf2/view?usp=sharing",
        label: "Resume",
        external: true,
      },
    ],
    [navLinks]
  );

  return (
    <motion.div
      className={`w-full fixed top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#222]/95 backdrop-blur-md shadow-lg" : "bg-[#222]"
      }`}
      variants={navbarVariants}
      initial="hidden"
      animate="visible"
      style={{ willChange: "transform" }}
    >
      <div className="max-w-screen-2xl mx-auto h-24 flex justify-between items-center px-6 md:px-12">
        <motion.h1
          className="text-xl sm:text-3xl lg:text-4xl font-semibold"
          whileHover={{
            scale: 1.05,
            textShadow: "0 0 20px rgba(124, 252, 0, 0.5)",
          }}
          transition={{ type: "tween", duration: 0.2 }}
          style={{ willChange: "transform" }}
        >
          <Link href="/">Saiful Islam</Link>
        </motion.h1>
        <div className="block md:hidden">
          <motion.button
            onClick={toggleMenu}
            className="text-2xl relative z-50"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.1 }}
            style={{ willChange: "transform" }}
          >
            <motion.div
              animate={isMenuOpen ? { rotate: 180 } : { rotate: 0 }}
              transition={{ duration: 0.2 }}
              style={{ willChange: "transform" }}
            >
              {isMenuOpen ? (
                <MdOutlineCancel className="text-xl sm:text-3xl text-[#7cfc00]" />
              ) : (
                <CiMenuFries className="text-xl sm:text-3xl" />
              )}
            </motion.div>
          </motion.button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-5 font-medium">
          {navLinks.map((link, index) => (
            <motion.div
              key={link.href}
              whileHover={{ y: -2 }}
              transition={{ type: "tween", duration: 0.2 }}
              style={{ willChange: "transform" }}
            >
              <Link href={link.href}>
                <span className="hover:text-[#7cfc00] transition-colors duration-300 relative">
                  {link.label}
                  <motion.div
                    className="absolute -bottom-1 left-0 h-0.5 bg-[#7cfc00]"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.2 }}
                    style={{ willChange: "width" }}
                  />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="absolute top-0 w-2/3 h-screen bg-[#111]/95 right-0 flex flex-col items-center justify-center text-xl backdrop-blur-lg md:hidden"
              style={{ willChange: "transform" }}
            >
              <motion.div className="flex flex-col gap-8 items-center">
                {mobileNavLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    variants={linkVariants}
                    whileHover={{
                      scale: 1.1,
                      color: "#7cfc00",
                      textShadow: "0 0 10px rgba(124, 252, 0, 0.5)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.1 }}
                    style={{ willChange: "transform" }}
                  >
                    <Link
                      onClick={closeMenu}
                      href={link.href}
                      {...(link.external && {
                        target: "_blank",
                        rel: "noopener noreferrer",
                      })}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.1 }}
          style={{ willChange: "transform" }}
        >
          <Link
            href="https://drive.google.com/file/d/1uphppbUFY0wiKEd7QVzvIzCJCL4FnGf2/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit hidden md:block px-4 py-2 rounded-md text-[#333] font-medium text-lg bg-[#7cfc00] hover:bg-[#7cfc00]/90 transition-all duration-300 hover:shadow-lg hover:shadow-[#7cfc00]/25"
          >
            Resume
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default memo(Navbar);
