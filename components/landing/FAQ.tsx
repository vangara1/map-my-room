"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/common/Card";
import { FAQ_ITEMS } from "@/lib/constants";
import { ChevronDown } from "lucide-react";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-dark-950 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4 text-white">
            Frequently Asked Questions
          </h2>
          <p className="text-dark-300 text-lg">
            Get answers to common questions about Map My Room
          </p>
        </motion.div>

        <motion.div
          className="space-y-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {FAQ_ITEMS.map((item, index) => (
            <motion.div key={index} layout>
              <Card
                className="p-6 cursor-pointer"
                glass
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
              >
                <div className="flex items-start justify-between">
                  <h3 className="font-semibold text-white">{item.question}</h3>
                  <ChevronDown
                    className={`h-5 w-5 text-gold-500 transition-transform flex-shrink-0 ml-4 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </div>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-dark-300 text-sm mt-4 pt-4 border-t border-dark-700"
                    >
                      {item.answer}
                    </motion.p>
                  )}
                </AnimatePresence>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
