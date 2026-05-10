"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/common/Card";
import { FEATURES } from "@/lib/constants";
import {
  LayoutGrid,
  BarChart3,
  TrendingUp,
  Users2,
  Calendar,
  UserCheck,
} from "lucide-react";

const iconMap = {
  "layout-grid": LayoutGrid,
  "bar-chart-3": BarChart3,
  "trending-up": TrendingUp,
  "users-2": Users2,
  calendar: Calendar,
  "user-check": UserCheck,
};

export function Features() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section className="py-20 bg-dark-950 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4 text-white">Powerful Features</h2>
          <p className="text-dark-300 text-lg max-w-2xl mx-auto">
            Everything you need to manage your hotel efficiently
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {FEATURES.map((feature) => {
            const IconComponent = iconMap[feature.icon as keyof typeof iconMap];
            return (
              <motion.div key={feature.title} variants={itemVariants}>
                <Card
                  className="p-6 hover hover:scale-105 transition-transform"
                  glass
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-gold-500/10">
                      <IconComponent className="h-6 w-6 text-gold-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-dark-400 text-sm">{feature.description}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
