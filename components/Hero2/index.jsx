"use client";

import { motion, AnimatePresence } from "framer-motion"; // Import AnimatePresence
import { useState, useEffect, useRef } from "react"; // Import useState, useEffect, useRef

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Amina Yusuf",
      role: "Founder, ZenPay",
      quote:
        "They helped us go from idea to polished MVP in just a few weeks. Every pixel and line of code was on point. Their speed and precision were truly remarkable.",
      image:
        "https://randomuser.me/api/portraits/women/65.jpg",
    },
    {
      name: "David Chen",
      role: "CTO, SnapNova",
      quote:
        "Working with this team felt like having an internal product squad fast, reliable, and deeply collaborative. They integrated seamlessly with our existing processes.",
      image:
        "https://randomuser.me/api/portraits/men/45.jpg",
    },
    {
      name: "Sophia Okafor",
      role: "Product Manager, Boltstack",
      quote:
        "Their process is seamless. Strategy, design, code all tightly aligned. Our users love the end result and the continuous improvements they deliver.",
      image:
        "https://randomuser.me/api/portraits/women/75.jpg",
    },
    {
      name: "Michael Adebayo",
      role: "CEO, InnovateX",
      quote:
        "Exceptional creativity and technical expertise! Our new platform is not just visually stunning, but incredibly robust and user-friendly. A truly collaborative partnership.",
      image:
        "https://randomuser.me/api/portraits/men/30.jpg",
    },
    {
      name: "Grace Lim",
      role: "Marketing Director, BloomTech",
      quote:
        "The team understood our vision perfectly and delivered a brand presence that exceeded all expectations. Their attention to detail transformed our marketing efforts.",
      image:
        "https://randomuser.me/api/portraits/women/40.jpg",
    },
  ];

  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const [direction, setDirection] = useState(0); // 0: initial, 1: next, -1: prev
  const autoplayRef = useRef(null);

  // Variants for the main center testimonial and flanking cards
  const testimonialVariants = {
    // Current (center) card
    center: {
      x: '0%',
      opacity: 1,
      scale: 1,
      zIndex: 10,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        scale: { duration: 0.4 },
        opacity: { duration: 0.4 },
      },
    },
    // Previous (left) card - recedes and is smaller/less opaque
    left: {
      x: '-40%', // Shift further left
      opacity: 0.4, // Lower opacity
      scale: 0.8, // Smaller size
      zIndex: 5, // Lower z-index
      filter: 'blur(1px)', // Subtle blur
      pointerEvents: 'none', // Disable direct clicks on flanking cards
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        scale: { duration: 0.4 },
        opacity: { duration: 0.4 },
        filter: { duration: 0.4 },
      },
    },
    // Next (right) card - recedes and is smaller/less opaque
    right: {
      x: '40%', // Shift further right
      opacity: 0.4, // Lower opacity
      scale: 0.8, // Smaller size
      zIndex: 5, // Lower z-index
      filter: 'blur(1px)', // Subtle blur
      pointerEvents: 'none', // Disable direct clicks on flanking cards
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        scale: { duration: 0.4 },
        opacity: { duration: 0.4 },
        filter: { duration: 0.4 },
      },
    },
    // Entering from outside (based on direction)
    enter: (direction) => ({
      x: direction > 0 ? '100%' : '-100%', // Enter from right or left
      opacity: 0,
      scale: 0.8,
      zIndex: 1, // Start low zIndex
    }),
    // Exiting (based on direction)
    exit: (direction) => ({
      x: direction < 0 ? '100%' : '-100%', // Exit to right or left
      opacity: 0,
      scale: 0.8,
      zIndex: 1, // Exit low zIndex
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.4 },
        scale: { duration: 0.4 },
      },
    }),
  };

  const startAutoplay = () => {
    stopAutoplay();
    autoplayRef.current = setInterval(() => {
      setDirection(1); // Always go forward for auto-scroll
      setCurrentTestimonialIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 6000); // Change testimonial every 6 seconds
  };

  const stopAutoplay = () => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
    }
  };

  useEffect(() => {
    startAutoplay(); // Start autoplay on component mount
    return () => stopAutoplay(); // Clean up interval on unmount
  }, [testimonials.length]); // Restart if testimonials data changes

  const handleNext = () => {
    stopAutoplay(); // Pause autoplay on manual interaction
    setDirection(1);
    setCurrentTestimonialIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    startAutoplay(); // Resume after interaction
  };

  const handlePrev = () => {
    stopAutoplay(); // Pause autoplay on manual interaction
    setDirection(-1);
    setCurrentTestimonialIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
    startAutoplay(); // Resume after interaction
  };

  const handleDotClick = (index) => {
    stopAutoplay();
    const newDirection = index > currentTestimonialIndex ? 1 : -1;
    setDirection(newDirection);
    setCurrentTestimonialIndex(index);
    startAutoplay();
  };

  // Determine which testimonial is prev, current, and next for rendering
  const getIndex = (i) => (i + testimonials.length) % testimonials.length; // Utility to handle wrapping around
  const prevTestimonialIndex = getIndex(currentTestimonialIndex - 1);
  const nextTestimonialIndex = getIndex(currentTestimonialIndex + 1);

  return (
    <section
      className="relative py-16 px-6 md:px-12 overflow-hidden font-inter text-gray-700 bg-white" // Consistent padding and background
    >
      {/* Background image placeholder: Add your actual background image here. */}
      {/* Example: <img src="/images/testimonials-abstract-bg.jpg" alt="Abstract background" className="absolute inset-0 w-full h-full object-cover z-0 opacity-80" /> */}
      

      {/* Glassmorphic overlay for visual effect and text readability */}
      <div className="absolute inset-0 bg-white bg-opacity-70 z-10" /> {/* Consistent overlay */}

      <div className="relative z-20 max-w-6xl mx-auto text-center">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-gray-800 mb-12 drop-shadow-sm" // Consistent heading style
        >
          What Our Clients Say
        </motion.h2>

        <div
          className="relative flex justify-center items-center h-[400px] md:h-[350px] lg:h-[320px]" // Fixed height for slider area
          onMouseEnter={stopAutoplay} // Pause autoplay on hover
          onMouseLeave={startAutoplay} // Resume autoplay when mouse leaves
        >
          {/* Main Carousel Area for Stacking Testimonial Cards */}
          <div className="relative w-full max-w-4xl h-full flex justify-center items-center">
            <AnimatePresence initial={false} custom={direction}>
              {/* Previous Testimonial (Flanking Left) */}
              <motion.div
                key={prevTestimonialIndex}
                variants={testimonialVariants}
                initial="enter"
                animate="left"
                exit="exit"
                custom={direction}
                className="absolute w-full max-w-xs rounded-2xl shadow-xl overflow-hidden pointer-events-none" // Smaller card, no direct interaction
                style={{
                  left: '50%',
                  transform: 'translateX(-50%)', // Centered before variant shift
                  height: '80%', // Smaller height
                  top: '10%', // Offset from top
                }}
              >
                {/* Content of the previous testimonial - applied consistent glassmorphic card styling */}
                <div className="bg-blue-200/20 backdrop-blur-md border border-white/70 rounded-2xl p-6 flex flex-col justify-between items-center text-center w-full h-full shadow-md"> {/* Consistent card style */}
                  <div className="flex flex-col items-center mb-4">
                    <img
                      src={testimonials[prevTestimonialIndex].image}
                      alt={testimonials[prevTestimonialIndex].name}
                      className="w-12 h-12 rounded-lg mb-2 border border-blue-500/20 shadow-sm" // Consistent image border/shadow
                      onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/48x48/BBBBBB/444444?text=User"; }}
                    />
                    <p className="font-semibold text-gray-800 text-base">{testimonials[prevTestimonialIndex].name}</p>
                    <p className="text-sm text-gray-600">{testimonials[prevTestimonialIndex].role}</p>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-center text-sm">“{testimonials[prevTestimonialIndex].quote.substring(0, 80)}...”</p>
                </div>
              </motion.div>

              {/* Current Testimonial (Center Stage) */}
              <motion.div
                key={currentTestimonialIndex}
                variants={testimonialVariants}
                initial="enter"
                animate="center"
                exit="exit"
                custom={direction}
                // Applied consistent glassmorphic card styling
                className="absolute w-full max-w-xl rounded-2xl overflow-hidden cursor-pointer group bg-blue-200/20 backdrop-blur-md border border-white/70 flex flex-col justify-between items-center text-center"
                style={{
                  boxShadow: '0 15px 40px rgba(0, 0, 0, 0.1), 0 0 20px rgba(0, 0, 0, 0.03)', // Maintained existing shadow for prominence
                  minHeight: '320px', // Ensure consistent height
                }}
              >
                <div className="flex flex-col items-center mb-4 pt-6"> {/* Added pt for spacing */}
                  <img
                    src={testimonials[currentTestimonialIndex].image}
                    alt={testimonials[currentTestimonialIndex].name}
                    className="w-16 h-16 rounded-lg mb-4 border border-blue-500/20 shadow-md" // Consistent image border/shadow
                    onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/64x64/BBBBBB/444444?text=User"; }}
                  />
                  <div>
                    <p className="font-semibold text-gray-800 text-lg">{testimonials[currentTestimonialIndex].name}</p>
                    <p className="text-sm text-gray-600">{testimonials[currentTestimonialIndex].role}</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed text-center px-6 flex-grow flex items-center justify-center pb-6">“{testimonials[currentTestimonialIndex].quote}”</p> {/* Added px and pb for spacing */}
              </motion.div>

              {/* Next Testimonial (Flanking Right) */}
              <motion.div
                key={nextTestimonialIndex}
                variants={testimonialVariants}
                initial="enter"
                animate="right"
                exit="exit"
                custom={direction}
                className="absolute w-full max-w-xs rounded-2xl shadow-xl overflow-hidden pointer-events-none" // Smaller card, no direct interaction
                style={{
                  left: '50%',
                  transform: 'translateX(-50%)', // Centered before variant shift
                  height: '80%', // Smaller height
                  top: '10%', // Offset from top
                }}
              >
                 {/* Content of the next testimonial - applied consistent glassmorphic card styling */}
                <div className="bg-blue-200/20 backdrop-blur-md border border-white/70 rounded-2xl p-6 flex flex-col justify-between items-center text-center w-full h-full shadow-md"> {/* Consistent card style */}
                  <div className="flex flex-col items-center mb-4">
                    <img
                      src={testimonials[nextTestimonialIndex].image}
                      alt={testimonials[nextTestimonialIndex].name}
                      className="w-12 h-12 rounded-lg mb-2 border border-blue-500/20 shadow-sm" // Consistent image border/shadow
                      onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/48x48/BBBBBB/444444?text=User"; }}
                    />
                    <p className="font-semibold text-gray-800 text-base">{testimonials[nextTestimonialIndex].name}</p>
                    <p className="text-sm text-gray-600">{testimonials[nextTestimonialIndex].role}</p>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-center text-sm">“{testimonials[nextTestimonialIndex].quote.substring(0, 80)}...”</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons (Outside AnimatePresence for persistence) */}
          <button
            onClick={handlePrev}
            className="absolute left-0 md:-left-16 z-30 p-3 bg-blue-500/20 backdrop-blur-md rounded-lg shadow-lg text-white hover:bg-blue-500/40 transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500/80" // Consistent blue tones and hover
            aria-label="Previous testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 md:-right-16 z-30 p-3 bg-blue-500/20 backdrop-blur-md rounded-lg shadow-lg text-white hover:bg-blue-500/40 transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500/80" // Consistent blue tones and hover
            aria-label="Next testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-12 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentTestimonialIndex
                  ? "bg-blue-500 w-8" // Active dot is blue
                  : "bg-gray-400"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}