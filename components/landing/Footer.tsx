"use client";

import React from "react";
import Link from "next/link";
import { FOOTER_LINKS, SITE_NAME } from "@/lib/constants";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-950 border-t border-dark-800 px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-gold-500 font-bold text-lg mb-4">{SITE_NAME}</h3>
            <p className="text-dark-400 text-sm">
              Premium hotel management SaaS for budget properties.
            </p>
          </div>

          {Object.entries(FOOTER_LINKS).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-white mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-dark-400 hover:text-gold-500 text-sm transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-dark-800 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-dark-400 text-sm">
              © {currentYear} {SITE_NAME}. All rights reserved.
            </p>
            <div className="flex gap-6 mt-4 sm:mt-0">
              <a
                href="#"
                className="text-dark-400 hover:text-gold-500 text-sm transition-colors"
              >
                Twitter
              </a>
              <a
                href="#"
                className="text-dark-400 hover:text-gold-500 text-sm transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="#"
                className="text-dark-400 hover:text-gold-500 text-sm transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
