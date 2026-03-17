"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="w-full bg-white py-20 px-4 sm:px-8 lg:px-16 xl:px-24">
      <div className="max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-[1.05] tracking-tight mb-8" style={{ color: "#1C2B3A" }}>
            ACCOUNTANCY IS MORE<br />
            THAN JUST NUMBERS.<br />
            IT IS THE LANGUAGE OF{" "}
            <span className="relative inline-block">
              BUSINESS
              <span className="absolute left-0 -bottom-1 h-1 w-full" style={{ backgroundColor: "#C8102E" }} />
            </span>
            .
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="space-y-5 max-w-2xl"
        >
          <p className="text-base text-gray-600 leading-relaxed">
            At Miam Consultants, we do the interpreting so you&apos;re free to do the innovating and elevating. Our client-focused approach means we&apos;re able to offer a bespoke service that gives you freedom to focus on growth and profitability.
          </p>
          <p className="text-base text-gray-600 leading-relaxed">
            We are an accounting firm that specializes in uplifting small, medium and large entities. From the bottom line to whatever you may have in the pipeline, it is our mission to help give you the control and the time you need to build a more sustainable and scalable business.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
