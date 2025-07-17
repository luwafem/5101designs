import { useEffect, useState } from "react";
import { Switch } from "@headlessui/react";

export default function HomePage() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-white dark:bg-black text-black dark:text-white transition-colors duration-500">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 py-4 bg-white/90 dark:bg-black/90 backdrop-blur-md shadow-md sticky top-0 z-50 transition-colors duration-500">
        <div className="font-extrabold text-2xl tracking-wide select-none">WAAS</div>
        <div className="flex items-center gap-6 text-lg font-medium">
          {["Pricing", "FAQ", "Contact"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="hover:underline hover:text-purple-600 dark:hover:text-purple-400 transition"
            >
              {link}
            </a>
          ))}
          <Switch
            checked={isDarkMode}
            onChange={setIsDarkMode}
            className={`${
              isDarkMode ? "bg-purple-600" : "bg-gray-300"
            } relative inline-flex h-6 w-12 items-center rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500`}
          >
            <span
              className={`${
                isDarkMode ? "translate-x-7" : "translate-x-1"
              } inline-block h-4 w-4 transform rounded-full bg-white shadow-lg ring-0 transition-transform duration-300`}
            />
          </Switch>
        </div>
      </nav>

      {/* Background Video */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <video
          className="w-full h-full object-cover opacity-60"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/videos/crispy.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Overlay gradient for better contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/70" />
      </div>

      {/* Floating Graphics */}
      <div
        className="absolute top-10 left-10 w-16 h-16 rounded-full border-2 border-dotted border-white opacity-20 animate-pulse-slow"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-20 right-20 w-24 h-24 rounded-full border-2 border-dashed border-white opacity-30 animate-spin-slow"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/3 right-1/3 w-10 h-10 bg-white opacity-10 rounded-full blur-sm animate-bounce-slow"
        aria-hidden="true"
      />

      {/* Hero */}
      <section className="flex flex-col items-center justify-center min-h-screen px-6 text-center backdrop-blur-md animate-fade-up">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold drop-shadow-lg leading-tight max-w-4xl">
          Websites as a Service
        </h1>
        <p className="mt-5 text-xl md:text-2xl max-w-3xl text-gray-800 dark:text-gray-300 tracking-wide">
          Fast, responsive, and professionally managed websites. Scalable plans for startups, creators, and businesses.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-5">
          <button className="px-8 py-4 bg-black text-white dark:bg-white dark:text-black font-semibold rounded-xl shadow-lg hover:shadow-xl hover:opacity-90 transition duration-300">
            Get Started
          </button>
          <button className="px-8 py-4 border-2 border-black dark:border-white rounded-xl hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition duration-300 shadow-md">
            View Plans
          </button>
          <a
            href="https://calendly.com/yourname/15min"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-xl shadow-md transition duration-300"
          >
            Jump on a 15 Min Call
          </a>
        </div>
      </section>

      {/* Showcase */}
      <section className="py-24 px-6 text-center animate-fade-up">
        <h2 className="text-4xl font-bold mb-12 tracking-wide">Our Work Speaks</h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="rounded-xl overflow-hidden border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 backdrop-blur-sm shadow-md hover:scale-[1.03] hover:shadow-xl transition-transform duration-300 cursor-pointer"
              tabIndex={0}
              aria-label={`Client Project ${item}`}
            >
              <img
                src={`/assets/showcase/site${item}.jpg`}
                alt={`Showcase project ${item}`}
                className="w-full h-56 object-cover"
                loading="lazy"
              />
              <div className="p-5 text-left">
                <h3 className="font-semibold text-xl mb-2">Client Project {item}</h3>
                <p className="text-gray-700 dark:text-gray-300 text-base">
                  Professional site with performance and scalability in mind.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 px-6 text-center animate-fade-up">
        <h2 className="text-4xl font-bold mb-12 tracking-wide">How It Works</h2>
        <div className="grid md:grid-cols-4 gap-12 max-w-6xl mx-auto">
          {[
            "Choose Plan",
            "Submit Request",
            "We Build",
            "Go Live",
          ].map((title, idx) => (
            <div
              key={idx}
              className="bg-black/10 dark:bg-white/10 border border-black/20 dark:border-white/20 p-8 rounded-xl backdrop-blur-sm shadow-md hover:shadow-lg transition-shadow duration-300 cursor-default"
            >
              <div className="text-5xl font-extrabold mb-4 text-purple-600 dark:text-purple-400 select-none">
                {idx + 1}
              </div>
              <h3 className="font-semibold text-2xl mb-4">{title}</h3>
              <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed">
                {
                  [
                    "Select the best plan that fits your business goals.",
                    "Tell us your vision, content, or updates.",
                    "Our team designs, codes, and sets up your site fast.",
                    "In less than 48hrs, your site is live and managed.",
                  ][idx]
                }
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 px-6 text-center animate-fade-up">
        <h2 className="text-4xl font-bold mb-10 tracking-wide">Pricing Plans</h2>
        <div className="grid gap-8 md:grid-cols-4 max-w-6xl mx-auto">
          {["Starter", "Pro", "Premium", "Custom"].map((title, i) => (
            <div
              key={title}
              className="bg-black/10 dark:bg-white/10 p-8 rounded-xl border border-black/20 dark:border-white/20 backdrop-blur-sm shadow-md hover:shadow-lg transition-shadow duration-300 cursor-default"
            >
              <h3 className="text-2xl font-bold mb-3">{title}</h3>
              {i < 3 && (
                <p className="text-3xl font-extrabold mb-3 text-purple-600 dark:text-purple-400">
                  {["₦8,000 / $15", "₦16,000 / $30", "₦35,000 / $65"][i]}
                </p>
              )}
              <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed">
                {
                  [
                    "2 content requests/mo",
                    "5 content requests/mo",
                    "Unlimited* requests/mo",
                    "Tailored solutions for agencies or larger teams. Contact us.",
                  ][i]
                }
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 px-6 text-center animate-fade-up">
        <h2 className="text-4xl font-bold mb-10 tracking-wide">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto space-y-8 text-left">
          {[
            {
              q: "How fast is delivery?",
              a: "Sites go live within 48hrs after content is received.",
            },
            {
              q: "Can I upgrade my plan?",
              a: "Yes, plans are flexible and upgradable anytime.",
            },
            {
              q: "Do you offer custom designs?",
              a: "Absolutely. Custom plans are tailored to your needs.",
            },
          ].map(({ q, a }, i) => (
            <div key={i} className="border-b border-gray-300 dark:border-gray-700 pb-4">
              <h4 className="font-semibold text-xl mb-2">{q}</h4>
              <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 px-6 text-center animate-fade-up">
        <h2 className="text-4xl font-bold mb-6 tracking-wide">Stay Updated</h2>
        <p className="mb-8 text-gray-700 dark:text-gray-300 max-w-xl mx-auto">
          Subscribe to our newsletter to get updates on features, new plans, and offers.
        </p>
        <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
          <input
            type="email"
            placeholder="Enter your email"
            required
            className="px-5 py-3 rounded-lg border border-gray-400 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
          />
          <button
            type="submit"
            className="bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg px-6 py-3 transition"
          >
            Subscribe
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6 text-center border-t border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-400 select-none">
        &copy; {new Date().getFullYear()} WAAS. All rights reserved.
      </footer>

      <style jsx>{`
        @keyframes fadeUp {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-up {
          animation: fadeUp 1s ease forwards;
        }
        @keyframes pulseSlow {
          0%, 100% {
            opacity: 0.15;
            transform: scale(1);
          }
          50% {
            opacity: 0.3;
            transform: scale(1.1);
          }
        }
        .animate-pulse-slow {
          animation: pulseSlow 6s ease-in-out infinite;
        }
        @keyframes spinSlow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spinSlow 45s linear infinite;
        }
        @keyframes bounceSlow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-15%);
          }
        }
        .animate-bounce-slow {
          animation: bounceSlow 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
