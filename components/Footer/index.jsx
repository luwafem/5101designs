// Footer component - This would typically be in a file named Footer.jsx
import React from 'react';
import { motion } from 'framer-motion'; // Import motion from framer-motion

function Footer() {
  return (
    <footer
      className="relative py-4 px-6 md:px-12 font-inter bg-white overflow-hidden text-gray-800" // Consistent padding, bg-white for base
    >
      {/* Background image placeholder: Add your actual background image here. */}
      {/* Example: <img src="/images/footer-abstract-bg.jpg" alt="Abstract background" className="absolute inset-0 w-full h-full object-cover z-0 opacity-80" /> */}
      

      {/* Glassmorphic overlay */}
      <div className="absolute inset-0 bg-white bg-opacity-70 z-10" /> {/* Consistent overlay */}

      <div className="relative z-20 max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between items-center md:items-start text-center md:text-left gap-12">
        {/* Left Section: Company Info & Socials */}
        <motion.div
          initial={{ opacity: 0, y: 50 }} // Start below and invisible
          whileInView={{ opacity: 1, y: 0 }} // Animate to visible and original position
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }} // Smooth transition with slight delay
          viewport={{ once: true, amount: 0.3 }} // Animate only once when 30% in view
          className="flex flex-col items-center md:items-start text-center md:text-left md:w-1/3 lg:w-1/4"
        >
          <h3 className="text-4xl font-extrabold text-gray-800 mb-4 drop-shadow-sm">5101DESIGNS</h3> {/* Consistent heading color and shadow */}
          <p className="text-gray-700 text-lg leading-relaxed mb-6 max-w-md drop-shadow-sm"> {/* Consistent text color and shadow */}
            Crafting innovative digital solutions that drive growth and deliver exceptional user experiences.
          </p>
          {/* Social Icons Placeholder */}
          <div className="flex space-x-6 mt-4">
            <a href="#" aria-label="LinkedIn" className="text-gray-600 hover:text-blue-500 transition-colors duration-300">
              <svg className="h-7 w-7 fill-current" viewBox="0 0 24 24" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"/></svg>
            </a>
            <a href="#" aria-label="Twitter" className="text-gray-600 hover:text-blue-500 transition-colors duration-300">
              <svg className="h-7 w-7 fill-current" viewBox="0 0 24 24" aria-hidden="true"><path d="M22.46 2c-.88.39-1.83.65-2.82.77 1.01-.61 1.78-1.58 2.15-2.73-.95.56-2.01.96-3.13 1.18-.9-.96-2.18-1.56-3.6-1.56-2.73 0-4.94 2.21-4.94 4.94 0 .39.04.77.12 1.13-4.11-.21-7.75-2.17-10.19-5.16-.42.72-.66 1.55-.66 2.45 0 1.71.87 3.22 2.19 4.1-.81-.03-1.57-.25-2.24-.62v.06c0 2.39 1.7 4.38 3.96 4.83-.41.11-.85.17-1.3.17-.32 0-.64-.03-.94-.09.63 1.96 2.45 3.39 4.6 3.44-1.68 1.32-3.8 2.1-6.1 2.1-.4 0-.79-.02-1.18-.07 2.17 1.39 4.74 2.21 7.51 2.21 9.05 0 14-7.49 14-14 0-.22-.01-.44-.01-.66.96-.69 1.79-1.55 2.45-2.54z"/></svg>
            </a>
            <a href="#" aria-label="Instagram" className="text-gray-600 hover:text-blue-500 transition-colors duration-300">
              <svg className="h-7 w-7 fill-current" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C8.686 2 6 4.686 6 8v.001c-.134.426-.208.86-.208 1.3V15.5c0 3.314 2.686 6 6 6s6-2.686 6-6V9.301c0-.44-.074-.874-.208-1.3V8c0-3.314-2.686-6-6-6zm0 2c2.206 0 4 1.794 4 4v.001c0 2.206-1.794 4-4 4s-4-1.794-4-4V8c0-2.206 1.794-4 4-4zm0 6c1.103 0 2-.897 2-2s-.897-2-2-2-2 .897-2 2 .897 2 2 2zm0 1c-2.76 0-5 2.24-5 5v.5c0 2.76 2.24 5 5 5s5-2.24 5-5v-.5c0-2.76-2.24-5-5-5z"/></svg>
            </a>
          </div>
        </motion.div>

        {/* Right Section: Navigation & Contact Info (Flex container) */}
        <div className="flex flex-col md:flex-row md:justify-around md:w-2/3 lg:w-3/4 gap-8 sm:gap-16">
            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
              className="flex flex-col items-center md:items-start text-center md:text-left"
            >
              <h4 className="text-xl font-semibold text-gray-800 mb-4 drop-shadow-sm">Quick Links</h4> {/* Consistent heading color and shadow */}
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-700 hover:text-blue-500 transition-colors duration-300 text-base drop-shadow-sm">Home</a></li> {/* Consistent link color and hover */}
                <li><a href="#" className="text-gray-700 hover:text-blue-500 transition-colors duration-300 text-base drop-shadow-sm">Services</a></li>
                <li><a href="#" className="text-gray-700 hover:text-blue-500 transition-colors duration-300 text-base drop-shadow-sm">About Us</a></li>
                <li><a href="#" className="text-gray-700 hover:text-blue-500 transition-colors duration-300 text-base drop-shadow-sm">Contact</a></li>
              </ul>
            </motion.div>

            {/* Support */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
              viewport={{ once: true, amount: 0.3 }}
              className="flex flex-col items-center md:items-start text-center md:text-left"
            >
              <h4 className="text-xl font-semibold text-gray-800 mb-4 drop-shadow-sm">Support</h4> {/* Consistent heading color and shadow */}
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-700 hover:text-blue-500 transition-colors duration-300 text-base drop-shadow-sm">FAQ</a></li> {/* Consistent link color and hover */}
                <li><a href="#" className="text-gray-700 hover:text-blue-500 transition-colors duration-300 text-base drop-shadow-sm">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-700 hover:text-blue-500 transition-colors duration-300 text-base drop-shadow-sm">Terms of Service</a></li>
                <li><a href="#" className="text-gray-700 hover:text-blue-500 transition-colors duration-300 text-base drop-shadow-sm">Help Center</a></li>
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
              viewport={{ once: true, amount: 0.3 }}
              className="flex flex-col items-center md:items-start text-center md:text-left"
            >
              <h4 className="text-xl font-semibold text-gray-800 mb-4 drop-shadow-sm">Contact Us</h4> {/* Consistent heading color and shadow */}
              <p className="text-gray-700 text-base mb-2 drop-shadow-sm">Innovation City, 90210</p> {/* Consistent text color and shadow */}
              <p className="text-gray-700 text-base mb-2 drop-shadow-sm">Email: info@5101DESIGNS.com</p>
              <p className="text-gray-700 text-base drop-shadow-sm">Phone: +1 (555) 123-4567</p>
            </motion.div>
        </div>
      </div>

      {/* Copyright */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
        viewport={{ once: true, amount: 0.3 }}
        className="relative z-20 border-t border-blue-500/20 mt-10 pt-8 text-center text-gray-600 text-sm drop-shadow-sm" // Consistent border and text shadow
      >
        &copy; {new Date().getFullYear()} 5101DESIGNS. All rights reserved.
      </motion.div>
    </footer>
  );
}

export default Footer;