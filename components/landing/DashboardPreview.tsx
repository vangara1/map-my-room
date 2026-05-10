"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/common/Card";

export function DashboardPreview() {
  return (
    <section className="py-20 bg-dark-950 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4 text-white">Intuitive Dashboard</h2>
          <p className="text-dark-300 text-lg max-w-2xl mx-auto">
            Beautiful, responsive interface designed for hotel managers
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Card className="overflow-hidden">
            <div className="bg-gradient-to-br from-dark-900 to-dark-950 p-8 min-h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="inline-block p-4 rounded-lg bg-gold-500/10 mb-4">
                  <svg
                    className="h-16 w-16 text-gold-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
                <p className="text-dark-400">
                  Interactive dashboard preview coming soon
                </p>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
