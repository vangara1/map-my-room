"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/common/Card";
import { Button } from "@/components/common/Button";
import { PRICING_PLANS } from "@/lib/constants";
import { Check } from "lucide-react";

export function PricingSection() {
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
          <h2 className="text-4xl font-bold mb-4 text-white">Simple Pricing</h2>
          <p className="text-dark-300 text-lg max-w-2xl mx-auto">
            No hidden fees. Choose the plan that works for you.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {PRICING_PLANS.map((plan) => (
            <motion.div key={plan.name} variants={itemVariants}>
              <Card
                className={`p-8 flex flex-col ${
                  plan.popular
                    ? "border-gold-500 ring-1 ring-gold-500/50 lg:scale-105"
                    : ""
                }`}
                glass
              >
                {plan.popular && (
                  <div className="mb-4 inline-block px-3 py-1 rounded-full bg-gold-500/20 text-gold-500 text-xs font-semibold">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold text-white mb-2">
                  {plan.name}
                </h3>
                <p className="text-dark-400 text-sm mb-6">{plan.description}</p>

                <div className="mb-8">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-gold-500">
                      ${plan.price}
                    </span>
                    <span className="text-dark-400">/month</span>
                  </div>
                </div>

                <Button
                  variant={plan.popular ? "primary" : "outline"}
                  className="w-full mb-8"
                >
                  {plan.cta}
                </Button>

                <div className="space-y-4">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3">
                      <Check className="h-4 w-4 text-gold-500 flex-shrink-0" />
                      <span className="text-dark-300 text-sm">{feature}</span>
                    </div>
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
