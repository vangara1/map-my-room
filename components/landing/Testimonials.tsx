"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/common/Card";
import { TESTIMONIALS } from "@/lib/constants";

export function Testimonials() {
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
          <h2 className="text-4xl font-bold mb-4 text-white">
            Loved by Hotel Owners
          </h2>
          <p className="text-dark-300 text-lg">
            See what our customers have to say
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {TESTIMONIALS.map((testimonial) => (
            <motion.div key={testimonial.author} variants={itemVariants}>
              <Card className="p-6" glass>
                <p className="text-dark-200 mb-6 italic">\"{ testimonial.quote}\"</p>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-gold-500/20 flex items-center justify-center text-gold-500 font-semibold">
                    {testimonial.author[0]}
                  </div>
                  <div>
                    <p className="font-semibold text-white text-sm">
                      {testimonial.author}
                    </p>
                    <p className="text-dark-400 text-xs">{testimonial.role}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
