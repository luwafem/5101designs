"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const Hero = ({
  backgroundVideo = "/assets/videos/crispy.mp4",
  demoVideo = "/assets/videos/demo.mp4",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [submissionError, setSubmissionError] = useState(false);

  const videoRef = useRef(null);
  const heroRef = useRef(null);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmissionError(false);
    setFormSubmitted(false);

    try {
      const response = await fetch('https://formspree.io/f/mldleoga', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
      } else {
        const data = await response.json();
        console.error('Form submission failed:', response.status, data);
        setSubmissionError(true);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmissionError(true);
    }
  };

  return (
    <section
      ref={heroRef}
      className="relative h-screen w-full text-gray-800 overflow-hidden"
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src={backgroundVideo} type="video/mp4" />
      </video>

      {/* Consistent Glassmorphic Overlay */}
      <div className="absolute inset-0 bg-white bg-opacity-70 z-10" />
      {/* Subtle gradient at the bottom for smooth transition */}
      <div className="absolute inset-x-0 bottom-0 h-60 bg-gradient-to-t from-white/90 to-transparent z-10" />

      {/* Main content wrapper with vertical centering and no top margin */}
      <div className="relative z-20 flex flex-col justify-center h-full px-6 md:px-16 max-w-8xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 mx-auto mr-1">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <motion.h1
              className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 drop-shadow-sm text-gray-800"
              custom={0}
              variants={fadeUp}
            >
              Design clarity for <br /> fast-moving companies
            </motion.h1>

            <motion.p
              className="text-lg md:text-2xl max-w-3xl text-gray-700 mb-6 drop-shadow-sm"
              custom={1}
              variants={fadeUp}
            >
              Area5101 is a bold, independent design agency helping ambitious
              startups and VC-backed companies build powerful brand presence and
              accelerate product-market fit beautifully.
            </motion.p>

            <motion.p
              className="italic text-gray-600 max-w-xl mb-10 drop-shadow-sm"
              custom={2}
              variants={fadeUp}
            >
              “We don’t just design, we create experiences that move markets.”
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-6 mb-6"
              initial="hidden"
              animate="visible"
            >
              {[{ label: "Projects Delivered", value: 100 },
              { label: "VC-backed Clients", value: 10 },
              { label: "Awards Won", value: 5 }].map(({ label, value }, i) => (
                <motion.div
                  key={label}
                  className="bg-white/40 backdrop-blur-md rounded-lg px-4 py-2 font-semibold text-sm md:text-base text-center border border-white/70 shadow-md"
                  custom={3 + i}
                  variants={fadeUp}
                >
                  <div className="text-2xl font-bold text-blue-600">
                    <CountUp end={value} duration={2} />+
                  </div>
                  <div className="text-sm text-gray-700">{label}</div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="flex items-center gap-6 mb-12"
              custom={6}
              variants={fadeUp}
            >
              <button
                onClick={() => setIsOpen(true)}
                className="inline-flex items-center justify-center gap-2 text-white font-semibold py-3 px-8 rounded-full border border-blue-300 bg-blue-500/80 hover:bg-blue-600/90 transition-all duration-300 shadow-lg"
              >
                Watch Demo
              </button>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 text-blue-500 font-semibold py-3 px-8 rounded-full border border-blue-500 hover:bg-blue-500/80 hover:text-white transition-all duration-300 shadow-md"
              >
                Contact Us
              </a>
            </motion.div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            className="bg-white/40 backdrop-blur-md p-8 md:p-10 rounded-xl mx-auto w-full max-w-md shadow-lg space-y-5 border border-white/70"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={7}
            action="https://formspree.io/f/mldleoga"
            method="POST"
          >
            <h3 className="text-gray-800 text-xl font-semibold mb-6 text-center drop-shadow-sm">Book a Meeting or an Audit</h3>
            {formSubmitted && (
              <p className="text-green-600 text-sm mb-4 text-center drop-shadow-sm">
                Thank you! Your message has been sent.
              </p>
            )}
            {submissionError && (
              <p className="text-red-500 text-sm mb-4 text-center drop-shadow-sm">
                There was an error submitting your form. Please try again.
              </p>
            )}
            <div className="flex flex-col gap-6">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="px-4 py-3 rounded-md bg-white/20 placeholder-gray-600 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500/80 border border-transparent hover:border-blue-300/50 transition-colors"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="px-4 py-3 rounded-md bg-white/20 placeholder-gray-600 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500/80 border border-transparent hover:border-blue-300/50 transition-colors"
                required
              />
              <textarea
                name="message"
                placeholder="What would you like audited?"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="px-4 py-3 rounded-md bg-white/20 placeholder-gray-600 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500/80 border border-transparent hover:border-blue-300/50 transition-colors"
                required
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 text-white font-semibold py-3 px-8 rounded-full bg-blue-500/80 hover:bg-blue-600/90 transition-all duration-300 shadow-md"
              >
                Submit
              </button>
            </div>
          </motion.form>
        </div>

        {/* Scroll Down Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce z-50">
          <span className="text-gray-700 text-sm mt-2 opacity-70 drop-shadow-sm">Scroll Down</span>
          <svg
            className="w-8 h-8 text-gray-700 opacity-70"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>

      {/* Demo Video Modal (Existing functionality) */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl h-auto aspect-video rounded-xl overflow-hidden shadow-2xl border border-white/20"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-white text-3xl z-10 p-2 rounded-full bg-black/30 hover:bg-black/50 transition"
              onClick={() => setIsOpen(false)}
              aria-label="Close demo video"
            >
              &times;
            </button>
            <video
              ref={videoRef}
              src={demoVideo}
              controls
              autoPlay
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;