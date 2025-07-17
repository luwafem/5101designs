"use client";

import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";

// Extracted ServiceCard component for conciseness and reusability
const ServiceCard = ({ service, serviceIndex, onLearnMoreClick }) => { // Added onLearnMoreClick prop
  const { icon, title, description } = service; // Destructuring for cleaner access

  return (
    <motion.div
      // Animation for card entrance
      initial={{ opacity: 0, y: 80, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.7,
        ease: "easeOut",
        delay: serviceIndex * 0.15, // Staggered delay for each card
      }}
      viewport={{ once: true, amount: 0.3 }} // Trigger animation when 30% of card is in view
      // Tailwind CSS classes for styling, including glassmorphism and hover effects
      className="relative w-full bg-blue-200/20 backdrop-blur-md border border-white/70 rounded-2xl p-6 shadow-md transition-all duration-300 hover:scale-[1.02] flex flex-col items-center text-center group"
      style={{
        minHeight: '350px' // Ensures all cards have a consistent height in the grid
      }}
    >
      {/* Icon Circle - Neutral and Pulsating Effect */}
      <motion.div
        className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center mb-5 shadow-sm"
        // Pulsating animation for the icon circle
        initial={{ scale: 1 }}
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 2, ease: "easeInOut", repeat: Infinity, repeatType: "loop", delay: serviceIndex * 0.2 }}
      >
        <span className="text-gray-800 text-2xl font-bold" aria-hidden="true">{icon}</span>
        {/* For screen readers, consider adding a visually hidden span if the icon conveys specific meaning beyond the title:
            <span className="sr-only">{title} icon</span>
        */}
      </motion.div>

      {/* Service Title and Description */}
      <div className="flex-grow flex flex-col justify-center items-center">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">
          {title}
        </h3>
        <p className="text-base text-gray-600 leading-relaxed">
          {description}
        </p>
      </div>

      {/* Call to Action Button - now triggers the modal */}
      <button
        onClick={() => onLearnMoreClick(service)} // Call the prop function with the service data
        className="mt-6 inline-flex items-center justify-center gap-2 text-white font-semibold py-2 px-6 rounded-full bg-blue-500 hover:bg-blue-600 transition-all duration-300 shadow-md"
      >
        Learn More
        {/* SVG for arrow icon with hover translation */}
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </button>
    </motion.div>
  );
};

// Main ServicesSection component
export default function ServicesSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  // Data for Services - I've added 'longDescription' and 'details' for the modal content
  const ALL_SERVICES_DATA = [
    {
      categoryTitle: "Creative Design",
      categoryDescription: "Crafting visually stunning and user-centric interfaces.",
      services: [
        {
          icon: "+",
          title: "UI/UX Design",
          description: "From concept to pixel-perfect execution, ensuring intuitive and delightful user journeys.",
          longDescription: "Our UI/UX design process focuses on creating intuitive, efficient, and aesthetically pleasing interfaces. We conduct thorough user research, create wireframes and prototypes, and perform usability testing to ensure a seamless and delightful user experience. Our goal is to craft designs that are not just beautiful, but also highly functional and aligned with your business objectives. We specialize in mobile-first design, accessibility, and modern design patterns.",
          details: [
            "User Research & Analysis",
            "Wireframing & Prototyping",
            "Usability Testing",
            "Information Architecture",
            "Interaction Design",
            "Visual Design & Branding Integration"
          ]
        },
        {
          icon: "✨",
          title: "Motion Graphics",
          description: "Bringing your brand and products to life with dynamic animations.",
          longDescription: "Motion graphics add a layer of dynamism and engagement to your digital presence. Whether it's animated logos, explainer videos, or interactive UI animations, we create captivating visual stories that enhance user experience and convey complex ideas simply. Our expertise spans various animation techniques and software, ensuring high-quality, impactful results that resonate with your audience.",
          details: [
            "Animated Logos & Brand Intros",
            "Explainer Videos & Product Demos",
            "UI Animations & Microinteractions",
            "2D & 3D Animation",
            "Kinetic Typography"
          ]
        },
        {
          icon: "⚡",
          title: "Branding & Identity",
          description: "Developing powerful brand narratives and cohesive visual identities.",
          longDescription: "A strong brand identity is the cornerstone of effective communication. We help you define your brand's core values, mission, and unique selling proposition, translating them into a cohesive visual language. From logo design and color palettes to typography and brand guidelines, we ensure every element reflects your brand's essence and connects meaningfully with your target audience.",
          details: [
            "Brand Strategy & Positioning",
            "Logo Design & Brandmark Development",
            "Color Palettes & Typography Selection",
            "Brand Style Guides",
            "Brand Story & Messaging"
          ]
        },
      ],
    },
    {
      categoryTitle: "Technical Development",
      categoryDescription: "Building robust, scalable, and high-performance digital solutions.",
      services: [
        {
          icon: "✦",
          title: "Web Development",
          description: "Expertise in front-end and back-end development for dynamic and responsive web applications.",
          longDescription: "Our web development services cover the full spectrum, from crafting engaging front-end experiences to building robust and secure back-end systems. We specialize in modern frameworks and technologies to deliver scalable, high-performance, and responsive web applications tailored to your specific business needs. Whether it's a corporate website, a complex web application, or a custom CMS, we ensure a seamless and efficient development process.",
          details: [
            "Frontend Development (React, Next.js, Vue)",
            "Backend Development (Node.js, Python, Ruby on Rails)",
            "Database Design & Management",
            "API Development & Integration",
            "Performance Optimization & Scalability"
          ]
        },
        {
          icon: "🖥️",
          title: "E-commerce Solutions",
          description: "Secure, user-friendly online stores optimized for conversion and seamless customer experience.",
          longDescription: "We build powerful e-commerce platforms that drive sales and enhance customer loyalty. Our solutions are designed for security, scalability, and ease of use, providing a seamless shopping experience for your customers and efficient management tools for your business. We integrate secure payment gateways, inventory management, and analytics to give you full control over your online store.",
          details: [
            "Shopify & WooCommerce Development",
            "Custom E-commerce Platforms",
            "Payment Gateway Integration",
            "Inventory & Order Management",
            "Customer Relationship Management (CRM) Integration"
          ]
        },
      ],
    },
    {
      categoryTitle: "Strategic Growth",
      categoryDescription: "Formulating data-driven strategies to ensure your digital initiatives achieve measurable business results.",
      services: [
        {
          icon: "⚙️",
          title: "Digital Strategy",
          description: "Comprehensive planning and execution to maximize your online reach and impact.",
          longDescription: "A well-defined digital strategy is vital for success in today's competitive landscape. We work with you to understand your business goals, target audience, and market landscape. Based on this, we develop tailored strategies covering SEO, content marketing, social media, and paid advertising to enhance your online visibility, drive traffic, and convert leads into loyal customers. Our approach is data-driven, ensuring measurable results and continuous optimization.",
          details: [
            "Market Research & Competitive Analysis",
            "SEO & Content Strategy",
            "Social Media Strategy",
            "Paid Advertising (PPC) Strategy",
            "Analytics & Performance Tracking"
          ]
        },
      ],
    },
  ];

  // Flatten all services into a single array for a unified grid display
  const allServices = ALL_SERVICES_DATA.flatMap(category => category.services);

  // Function to handle "Learn More" click
  const handleLearnMoreClick = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent main page scrolling when modal is open
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
    document.body.style.overflow = ''; // Re-enable main page scrolling
  };

  // Effect to handle Escape key for closing the modal
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape' && isModalOpen) {
        closeModal();
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isModalOpen]);


  return (
    <section
      className="relative w-full px-6 md:px-12 py-20 overflow-hidden font-inter text-gray-800 bg-white"
    >
      {/* Background image placeholder: Add your actual background image here. */}
      {/* Example: <img src="/images/abstract-bg.jpg" alt="Abstract background" className="absolute inset-0 w-full h-full object-cover z-0 opacity-80" /> */}
      
      {/* Glassmorphic overlay for visual effect and text readability */}
      <div className="absolute inset-0 bg-white bg-opacity-70 z-10" />

      {/* Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center text-4xl md:text-5xl font-bold text-gray-800 mb-6 drop-shadow-sm"
        >
          Elevating Digital Experiences
        </motion.h2>
        {/* Section Sub-description */}
        <p className="text-center text-lg text-gray-700 mb-16 max-w-2xl mx-auto drop-shadow-sm">
          We combine cutting-edge technology with refined aesthetics to build future-proof solutions.
        </p>

        {/* Unified Services Grid Display */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-x-12 lg:gap-y-10 place-items-center">
          {allServices.map((service, index) => (
            <ServiceCard
              key={service.title || index} // Ensure unique key for React lists
              service={service}
              serviceIndex={index}
              onLearnMoreClick={handleLearnMoreClick} // Pass the handler to the ServiceCard
            />
          ))}
        </div>
      </div>

      {/* --- Full-Screen Modal --- */}
      {isModalOpen && selectedService && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }} // 'exit' animations require AnimatePresence from framer-motion
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] flex items-start justify-center bg-black/80 backdrop-blur-md overflow-y-auto p-4 md:p-8"
          onClick={closeModal} // Close modal when clicking on the overlay
        >
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }} // 'exit' animations require AnimatePresence
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative bg-white/95 border border-white/80 rounded-2xl shadow-2xl p-6 md:p-10 max-w-5xl w-full my-8 text-center text-gray-800 transform scale-100"
            onClick={(e) => e.stopPropagation()} // Prevent modal closure when clicking inside content
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-3xl font-bold p-2 rounded-full transition-colors"
              aria-label="Close modal"
            >
              &times;
            </button>

            <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-6 shadow-md">
              <span className="text-blue-600 text-3xl font-bold">{selectedService.icon}</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">{selectedService.title}</h2>
            <p className="text-md md:text-lg text-gray-700 leading-relaxed mb-8">{selectedService.longDescription}</p>

            {selectedService.details && selectedService.details.length > 0 && (
              <div className="text-left w-full mt-10">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 border-b-2 border-blue-200 pb-2">What We Offer:</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-base text-gray-700">
                  {selectedService.details.map((detail, index) => (
                    <li
                      key={index}
                      className="flex items-center bg-gray-100/70 p-3 rounded-lg shadow-sm border border-gray-200"
                    >
                      <svg className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-12"
            >
              {/* This link assumes you have a #contact section on your main page */}
              <a href="#" onClick={closeModal} className="inline-flex items-center justify-center gap-2 text-white font-semibold py-3 px-8 rounded-full bg-blue-500 hover:bg-blue-600 transition-all duration-300 shadow-lg">
                Get a Free Consultation
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}