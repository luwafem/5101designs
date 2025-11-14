"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function ProcessSection() {
  const steps = [
    {
      title: "Discovery & Research",
      description:
        "We dive deep to understand your market, audience, and business needs to create a foundation for your product.",
    },
    {
      title: "Design",
      description:
        "From wireframes to pixel-perfect UIs and scalable code, we craft digital experiences that perform and impress.",
    },
    {
      title: "Build",
      description:
        "We bring your product to life with clean, scalable code fast and reliably.",
    },
    {
      title: "Launch",
      description:
        "We launch with confidence, gather feedback, and iterate for long-term growth and engagement.",
    },
    {
      title: "Evolve",
      description:
        "We continuously improve your product based on real data and user insights.",
    },
  ];

  // Variants for the pulsating animation on the step circles
  const pulseVariants = {
    initial: { scale: 1 },
    pulse: {
      scale: [1, 1.05, 1], // Subtle scale increase and return
      transition: {
        duration: 1.5,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "loop",
      },
    },
  };

  return (
    <section
      className="relative py-20 px-6 md:px-12 overflow-hidden font-inter text-gray-800 bg-white" // Consistent bg-white
    >
      {/* Background image placeholder: Add your actual background image here for the glassmorphic effect */}
      {/* Example: <img src="/images/process-abstract-bg.jpg" alt="Abstract background" className="absolute inset-0 w-full h-full object-cover z-0 opacity-80" /> */}
      

      {/* Glassmorphic overlay for visual effect and content readability */}
      {/* Adjusted opacity for consistency and to allow background to show through */}
      <div className="absolute inset-0 bg-white bg-opacity-70 z-10" />

      <div className="relative z-20 max-w-7xl mx-auto">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center text-4xl md:text-5xl font-bold text-gray-800 mb-6 drop-shadow-sm" // Added drop-shadow-sm for consistency
        >
          Our Process
        </motion.h2>
        {/* Section Sub-description */}
        <p className="text-center text-lg text-gray-700 mb-16 max-w-2xl mx-auto drop-shadow-sm"> {/* text-gray-700 for consistency */}
          Modular. Flexible. Proven. Your Path to Success.
        </p>

        {/* Top row (steps 1-3) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mt-16 place-items-center">
          {steps.slice(0, 3).map((step, idx) => (
            <motion.div
              key={idx} // Using index as key, consider unique IDs for steps if available
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: idx * 0.15 }} // Staggered delay
              viewport={{ once: true, amount: 0.3 }}
              // Glassmorphic card styling consistent with ServiceCard
              className="relative w-full max-w-xs mx-auto md:max-w-none flex flex-col items-center text-center p-6 rounded-2xl bg-blue-200/20 backdrop-blur-md border border-white/70 shadow-md transition-all duration-300 hover:scale-[1.02]" // Consistent colors and border with ServiceCard
              style={{
                minHeight: '260px' // Ensure consistent height for all cards
              }}
            >
              {/* Pulsating Step Number Circle */}
              <motion.div
                variants={pulseVariants}
                initial="initial"
                animate="pulse"
                className="w-16 h-16 rounded-lg bg-blue-500 flex items-center justify-center mb-6 shadow-md" // bg-blue-500 for consistency with buttons
              >
                <span className="text-white text-3xl font-extrabold">{idx + 1}</span>
              </motion.div>

              <div className="flex-grow flex flex-col justify-between items-center">
                <h3 className="text-2xl font-semibold mb-2 text-gray-800">
                  {step.title}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom row (steps 4-5) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mt-8 lg:max-w-4xl mx-auto place-items-center">
          {steps.slice(3, 5).map((step, idx) => (
            <motion.div
              key={idx + 3} // Unique key for remaining items (starts from 3 + current index)
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: (idx + 3) * 0.15 }} // Continue stagger delay
              viewport={{ once: true, amount: 0.3 }}
              // Glassmorphic card styling consistent with ServiceCard
              className="relative w-full max-w-xs mx-auto md:max-w-none flex flex-col items-center text-center p-6 rounded-2xl bg-blue-200/20 backdrop-blur-md border border-white/70 shadow-md transition-all duration-300 hover:scale-[1.02]" // Consistent colors and border with ServiceCard
              style={{
                minHeight: '260px' // Ensure consistent height for all cards
              }}
            >
              {/* Pulsating Step Number Circle */}
              <motion.div
                variants={pulseVariants}
                initial="initial"
                animate="pulse"
                className="w-16 h-16 rounded-lg bg-blue-500 flex items-center justify-center mb-6 shadow-md" // bg-blue-500 for consistency
              >
                <span className="text-white text-3xl font-extrabold">{idx + 4}</span> {/* Corrected number for bottom row */}
              </motion.div>

              <div className="flex-grow flex flex-col justify-between items-center">
                <h3 className="text-2xl font-semibold mb-2 text-gray-800">
                  {step.title}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}