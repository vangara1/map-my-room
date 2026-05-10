"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="py-20 bg-dark-950 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="bg-gradient-to-r from-gold-500/10 to-gold-600/10 border border-gold-500/30 rounded-2xl p-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Ready to Transform Your Hotel?
          </motion.h2>

          <motion.p
            className="text-dark-300 text-lg mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Join 500+ hotels already using Map My Room to optimize their operations and increase revenue.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Link
              href="/login"
              className="px-8 py-4 bg-gradient-to-r from-gold-500 to-gold-600 text-dark-950 font-semibold rounded-lg hover:shadow-glow transition-all inline-flex items-center justify-center gap-2"
            >
              Start Free Trial
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 border border-gold-500 text-gold-500 font-semibold rounded-lg hover:bg-gold-500/10 transition-all"
            >
              Schedule Demo
            </Link>
          </motion.div>

          <p className="text-dark-400 text-sm mt-8">
            ✓ 14-day free trial • ✓ No credit card required • ✓ Cancel anytime
          </p>
        </motion.div>
      </div>
    </section>
  );
}
