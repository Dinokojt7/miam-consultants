"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import siteData from "@/lib/data/site-data.json";

export default function TestimonialsSection() {
  const { testimonials } = siteData;
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const prev = () => {
    setDirection(-1);
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  };
  const next = () => {
    setDirection(1);
    setCurrent((c) => (c + 1) % testimonials.length);
  };

  const t = testimonials[current];

  return (
    <section id="testimonials" className="w-full py-20 px-4 sm:px-8" style={{ backgroundColor: "#F4F4F4" }}>
      <div className="max-w-3xl mx-auto text-center">
        {/* Client */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.4 }}
          >
            {/* Company name */}
            <p className="text-xs font-bold tracking-[0.3em] uppercase mb-1" style={{ color: "#C8102E" }}>
              {t.companyType}
            </p>
            <p className="text-2xl sm:text-3xl font-black uppercase tracking-tight mb-2" style={{ color: "#1C2B3A" }}>
              {t.company}
            </p>

            <div className="w-12 h-px mx-auto mb-8" style={{ backgroundColor: "#C8102E" }} />

            {/* Headline */}
            <h3 className="text-xl sm:text-2xl md:text-3xl font-black uppercase leading-tight mb-2" style={{ color: "#1C2B3A" }}>
              {t.headline}
            </h3>
            <p className="text-sm font-bold uppercase tracking-wide text-gray-500 mb-8">{t.subheadline}</p>

            {/* Quote */}
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-6 italic">
              &ldquo;{t.quote}&rdquo;
            </p>
            <p className="text-sm font-bold" style={{ color: "#1C2B3A" }}>
              {t.author}
            </p>
            <p className="text-xs text-gray-400 mt-0.5 mb-10">{t.role}</p>
          </motion.div>
        </AnimatePresence>

        {/* Arrows + Dots */}
        <div className="flex items-center justify-center gap-6 mb-10">
          <button
            onClick={prev}
            className="w-10 h-10 border flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition-colors"
            style={{ borderColor: "#1C2B3A", color: "#1C2B3A" }}
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <div className="flex items-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                className="w-2 h-2 rounded-full transition-all"
                style={{ backgroundColor: i === current ? "#C8102E" : "#d1d5db" }}
              />
            ))}
          </div>
          <button
            onClick={next}
            className="w-10 h-10 border flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition-colors"
            style={{ borderColor: "#1C2B3A", color: "#1C2B3A" }}
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* CTA */}
        <a
          href="/#contact"
          className="inline-flex items-center justify-center h-12 px-8 border text-xs font-bold tracking-widest uppercase hover:bg-[#1C2B3A] hover:text-white transition-colors"
          style={{ borderColor: "#1C2B3A", color: "#1C2B3A" }}
        >
          READ CASE STUDY
        </a>
      </div>
    </section>
  );
}
