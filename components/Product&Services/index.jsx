"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function DesignShowcaseSection() {
  const designs = [
    {
      title: "Crafting Digital Masterpieces",
      description: "Where innovation meets artistry to build stunning, high-performing digital experiences that captivate and convert.",
      imageUrl:
        "https://i.pinimg.com/1200x/e1/28/9f/e1289f2f5205c4038b6ae623dcb7b481.jpg",
    },
    {
      title: "Your Vision, Our Blueprint",
      description: "Translating complex ideas into intuitive, elegant, and user-centric designs that stand out in a crowded market.",
      imageUrl:
        "https://i.pinimg.com/736x/5f/73/8a/5f738ac482880e0f5fb50992570550c2.jpg",
    },
    {
      title: "Designing Tomorrow's Experiences",
      description: "Pioneering cutting-edge design solutions that are not just beautiful, but also scalable, accessible, and future-proof.",
      imageUrl:
        "https://i.pinimg.com/1200x/a6/8c/68/a68c6859beba65b19e05867d68a06d56.jpg",
    },
    {
      title: "Simplicity in Every Pixel",
      description: "Streamlining complex functionalities into clean, minimalist interfaces for effortless user interaction and engagement.",
      imageUrl: "https://i.pinimg.com/1200x/53/7e/9c/537e9c22a28f9e0001b232055a1125a8.jpg",
    },
    {
      title: "Impactful Design, Measurable Growth",
      description: "Focusing on strategic design choices that directly contribute to your business objectives and deliver tangible ROI.",
      imageUrl: "https://i.pinimg.com/1200x/31/82/1a/31821a55fb4754744d2bcd07583abbe9.jpg",
    },
    {
      title: "Beyond Aesthetics, True Functionality",
      description: "Building robust digital products where stunning visuals seamlessly integrate with powerful, efficient performance.",
      imageUrl: "https://i.pinimg.com/1200x/5b/55/10/5b55109fd5708a2fa8581339a9344a94.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for next, -1 for prev
  const autoplayRef = useRef(null);
  const carouselWrapperRef = useRef(null); // Ref for the main carousel area to handle hover events

  const cardVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000, // Starts off-screen
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.5 },
        scale: { duration: 0.5 },
      },
    },
    exit: (direction) => ({
      x: direction < 0 ? 1000 : -1000, // Exits off-screen
      opacity: 0,
      scale: 0.8,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.5 },
        scale: { duration: 0.5 },
      },
    }),
  };

  const startAutoplay = () => {
    stopAutoplay(); // Clear any existing interval
    autoplayRef.current = setInterval(() => {
      setDirection(1); // Always go forward for auto-scroll
      setCurrentIndex((prevIndex) => (prevIndex + 1) % designs.length);
    }, 5000); // Auto-scroll every 5 seconds
  };

  const stopAutoplay = () => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
    }
  };

  useEffect(() => {
    startAutoplay(); // Start autoplay on component mount

    // Add event listeners for pausing/resuming on hover
    const carouselElement = carouselWrapperRef.current;
    if (carouselElement) {
      carouselElement.addEventListener('mouseenter', stopAutoplay);
      carouselElement.addEventListener('mouseleave', startAutoplay);
    }

    // Cleanup on component unmount
    return () => {
      stopAutoplay();
      if (carouselElement) {
        carouselElement.removeEventListener('mouseenter', stopAutoplay);
        carouselElement.removeEventListener('mouseleave', startAutoplay);
      }
    };
  }, [designs.length]); // Re-run if designs change

  const handleNext = () => {
    stopAutoplay(); // Pause autoplay on manual interaction
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % designs.length);
    startAutoplay(); // Resume autoplay after interaction
  };

  const handlePrev = () => {
    stopAutoplay(); // Pause autoplay on manual interaction
    setDirection(-1);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? designs.length - 1 : prevIndex - 1
    );
    startAutoplay(); // Resume autoplay after interaction
  };

  return (
    <section
      className="relative py-20 px-6 md:px-12 bg-white overflow-hidden font-inter text-gray-800" // Consistent background and padding
    >
      {/* Background image placeholder: Add your actual background image here. */}
      {/* Example: <img src="/images/design-abstract-bg.jpg" alt="Abstract background" className="absolute inset-0 w-full h-full object-cover z-0 opacity-80" /> */}
      
      {/* Glassmorphic overlay */}
      <div className="absolute inset-0 bg-white bg-opacity-70 z-10" /> {/* Consistent overlay */}

      <div className="relative z-20 max-w-7xl mx-auto text-center">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 drop-shadow-sm" // Consistent heading style
        >
          Our Vision in Pixels
        </motion.h2>
        <p className="text-lg text-gray-700 mb-20 max-w-2xl mx-auto drop-shadow-sm"> {/* Consistent text color and drop shadow */}
          We bring concepts to life through meticulous design and groundbreaking user experiences.
        </p>

        {/* Fading Parallax Carousel Container - Height reduced further */}
        <div
          ref={carouselWrapperRef} // Assign ref here for hover events
          className="relative w-full max-w-7xl mx-auto h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden flex items-center justify-center rounded-3xl" // Further reduced heights
        >
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              variants={cardVariants}
              initial="enter"
              animate="center"
              exit="exit"
              custom={direction}
              // Apply consistent glassmorphic card styling
              className="absolute w-full h-full rounded-3xl shadow-xl overflow-hidden group border border-white/70 bg-blue-200/20 backdrop-blur-md cursor-pointer perspective-1000" // Consistent card style
              style={{
                boxShadow: '0 25px 60px rgba(0, 0, 0, 0.2), 0 0 30px rgba(0, 0, 0, 0.08)', // Maintained existing prominent shadow
              }}
              whileHover={{ scale: 1.03, y: -5 }} /* Subtle lift and scale on hover */
            >
              {/* Image fills the entire card background - object-cover for no distortion */}
              <img
                src={designs[currentIndex].imageUrl}
                alt={designs[currentIndex].title}
                className="absolute inset-0 w-full h-full object-cover rounded-3xl transition-transform duration-300 group-hover:scale-110" // object-cover retained
                onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/1200x675/BBBBBB/444444?text=Design"; }}
              />

              {/* Title Overlay - initially visible, fades on hover */}
              <motion.div
                className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 to-transparent flex flex-col items-center justify-end h-1/2 text-center opacity-100 group-hover:opacity-0 transition-opacity duration-300 z-20"
                style={{ borderRadius: '0 0 1.5rem 1.5rem' }}
              >
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-2" style={{ textShadow: '0 0 12px rgba(0,0,0,0.9)' }}>
                  {designs[currentIndex].title}
                </h3>
              </motion.div>

              {/* Full Content Overlay - hidden initially, reveals on hover */}
              <motion.div
                className="absolute inset-0 bg-black/80 backdrop-blur-md p-8 flex flex-col items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30 rounded-3xl"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
              >
                <h3 className="text-3xl font-bold text-white mb-4">{designs[currentIndex].title}</h3>
                <p className="text-lg text-white leading-relaxed mb-8 max-w-prose">{designs[currentIndex].description}</p>
                {/* Removed the "View Project" button */}
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons - Now visible again and styled */}
          <button
            onClick={handlePrev}
            className="absolute left-4 z-30 p-3 bg-blue-500/20 backdrop-blur-md rounded-full shadow-lg text-white hover:bg-blue-500/40 transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500/80" // Consistent button style
            aria-label="Previous design"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 z-30 p-3 bg-blue-500/20 backdrop-blur-md rounded-full shadow-lg text-white hover:bg-blue-500/40 transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500/80" // Consistent button style
            aria-label="Next design"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-12 space-x-2">
          {designs.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
                stopAutoplay(); // Stop autoplay on manual dot click
                startAutoplay(); // Restart autoplay
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-blue-500 w-8" // Active dot is blue
                  : "bg-gray-400"
              }`}
              aria-label={`Go to design ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}