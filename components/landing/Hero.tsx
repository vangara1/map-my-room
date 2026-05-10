"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="relative min-h-screen bg-dark-950 overflow-hidden flex items-center justify-center pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-gold-500/5 via-dark-950 to-dark-950" />

      <motion.div
        className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-sm font-medium mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-gold-500"></span>
            </span>
            Now in Beta
          </div>
        </motion.div>

        <motion.h1
          className="text-5xl sm:text-7xl font-bold mb-6 bg-gradient-to-b from-white via-dark-100 to-dark-300 bg-clip-text text-transparent"
          variants={itemVariants}
        >
          Smart Room Management for Budget Hotels
        </motion.h1>

        <motion.p
          className="text-lg sm:text-xl text-dark-300 mb-8 max-w-2xl mx-auto"
          variants={itemVariants}
        >
          Visualize, optimize, and manage your hotel like never before. Real-time occupancy tracking, revenue analytics, and seamless guest management.
        </motion.p>

        <motion.div className="flex flex-col sm:flex-row gap-4 justify-center" variants={itemVariants}>
          <Link
            href="/login"
            className="px-8 py-4 bg-gradient-to-r from-gold-500 to-gold-600 text-dark-950 font-semibold rounded-lg hover:shadow-glow transition-all inline-flex items-center justify-center gap-2"
          >
            Get Started Free
            <ArrowRight className="h-5 w-5" />
          </Link>
          <Link
            href="/features"
            className="px-8 py-4 border border-gold-500 text-gold-500 font-semibold rounded-lg hover:bg-gold-500/10 transition-all inline-flex items-center justify-center"
          >
            Learn More
          </Link>
        </motion.div>

        <motion.div
          className="mt-12 p-6 rounded-xl bg-glass backdrop-blur-glass border border-dark-700"
          variants={itemVariants}
        >
          <p className="text-dark-400 text-sm mb-4">Trusted by 500+ hotels</p>
          <div className="flex items-center justify-center gap-6 flex-wrap">
            {["4.9 ⭐ Reviews", "99.9% Uptime", "ISO 27001 Certified"].map((item) => (
              <div key={item} className="text-dark-300 text-sm font-medium">
                {item}
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
