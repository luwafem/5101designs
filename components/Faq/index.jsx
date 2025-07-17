"use client";
import { useState } from "react";
import { motion } from "framer-motion";
// Assuming Hero2 is a component defined elsewhere or not directly used in this snippet's rendering logic.

export default function FAQSection() {
  const faqs = [
    {
      question: "What makes your platform different?",
      answer:
        "We combine deep strategy, polished design, and scalable code all under one roof. This integrated approach minimizes handoffs and delays, ensuring a cohesive and efficient development process from concept to launch.",
    },
    {
      question: "Can I cancel anytime?",
      answer:
        "Yes, you can cancel your subscription at any time without hidden fees or penalties. We believe in flexibility, allowing you to scale our services up or down as your needs evolve.",
    },
    {
      question: "Is there a free trial available?",
      answer:
        "We offer a limited-time free trial with access to all core features so you can explore our capabilities risk-free. This allows you to experience the quality of our work firsthand before making a commitment.",
    },
    {
      question: "Do you offer customer support?",
      answer:
        "Absolutely! Our dedicated support team is available 24/7 via chat and email to help with any issues or questions. We pride ourselves on prompt and effective assistance, ensuring your success.",
    },
    {
      question: "What is your typical project timeline?",
      answer:
        "Project timelines vary based on complexity, but we prioritize efficient delivery without compromising quality. We establish clear milestones and communicate regularly to keep you informed every step of the way.",
    },
    {
      question: "How do you ensure project security?",
      answer:
        "Security is paramount. We implement industry-leading encryption, adhere to best coding practices, and conduct regular security audits to protect your data and intellectual property.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      className="relative py-16 px-6 md:px-12 overflow-hidden font-inter text-gray-800 bg-white" // Consistent padding and background color
    >
      {/* Background image placeholder: Add your actual background image here. */}
      {/* Example: <img src="/images/faq-abstract-bg.jpg" alt="Abstract background" className="absolute inset-0 w-full h-full object-cover z-0 opacity-80" /> */}
      

      {/* Glassmorphic overlay for visual effect and text readability */}
      <div className="absolute inset-0 bg-white bg-opacity-70 z-10" /> {/* Consistent overlay */}

      <div className="relative z-20 max-w-7xl mx-auto flex flex-col md:flex-row md:items-start gap-12 lg:gap-20"> {/* Two-column layout for desktop */}
        {/* Left Column: Visual Element / Title */}
        <div className="w-full md:w-2/5 flex flex-col items-center md:items-start text-center md:text-left">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 drop-shadow-sm" // Consistent heading style and margin
          >
            Frequently Asked Questions
          </motion.h2>
          <p className="text-lg text-gray-700 mb-2 max-w-lg md:max-w-none mx-auto md:mx-0 drop-shadow-sm"> {/* Consistent text color and drop shadow */}
            Find quick answers to the most common questions about our services and process.
          </p>

          {/* Abstract Techy Visual Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true, amount: 0.5 }}
            // Apply glassmorphic card styling to the visual element
            className="w-full h-64 md:h-96 lg:h-80 bg-blue-200/20 backdrop-blur-md border border-white/70 rounded-2xl shadow-md overflow-hidden flex items-center justify-center p-8 mt-12 md:mt-0" // Consistent card style and shadow
          >
            {/* Replace with a sophisticated SVG or 3D element placeholder */}
            <svg className="w-2/3 h-2/3 text-blue-500 opacity-70 animate-pulse-subtle" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"> {/* Text color to blue-500 */}
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5" />
              <path d="M2 12l10 5 10-5" />
            </svg>
             {/* A CSS animation for subtle pulsing */}
             <style jsx>{`
               @keyframes pulse-subtle {
                 0%, 100% { opacity: 0.7; }
                 50% { opacity: 0.9; }
               }
               .animate-pulse-subtle {
                 animation: pulse-subtle 3s infinite ease-in-out;
               }
             `}</style>
          </motion.div>
        </div>

        {/* Right Column: FAQ Accordions */}
        <div className="w-full md:w-3/5 space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
              // Apply consistent glassmorphic card styling
              className="bg-blue-200/20 backdrop-blur-md border border-white/70 rounded-2xl shadow-md overflow-hidden transition-all hover:scale-[1.01]" // Consistent card style, removed custom boxShadow
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left px-6 py-4 font-semibold text-lg text-gray-800 flex justify-between items-center hover:bg-white/30 transition-colors" // Adjusted hover background
              >
                {faq.question}
                <span className="text-2xl text-blue-500 ml-4">{openIndex === index ? "−" : "+"}</span> {/* Consistent blue-500 for icon */}
              </button>
              {openIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="px-6 pb-4 text-gray-700 leading-relaxed" // Consistent text color
                >
                  {faq.answer}
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}