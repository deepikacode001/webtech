"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import FloatingContact from "./components/FloatingContact";
import Image from "next/image";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaInstagram,
  FaWhatsapp,
  FaCheck,
  FaBalanceScale,
  FaGavel,
  FaUsers,
  FaBriefcase,
  FaUserShield,
  FaFileContract,
  FaQuoteLeft,
  FaCode,
  FaBullhorn,
  FaPaintBrush,
  FaShoppingCart,
  FaShareAlt,
} from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";

// Smooth Scroll
const scrollToId = (id: string) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

const points = [
  "Experienced & Certified IT Experts",
  "Affordable & Transparent Pricing",
  "24/7 Technical Support",
  "100% Client Satisfaction Guarantee",
];

const navLabels = ["About", "Services", "Why Choose Me?", "Contact"];

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = navLabels.map((label) => {
    const id = label
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]/g, "");
    return (
      <button
        key={label}
        onClick={() => {
          scrollToId(id);
          setMenuOpen(false);
        }}
        className="block w-full text-left px-4 py-2 text-sm font-medium text-white rounded-md
                 hover:bg-white/10 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white/20
                 md:inline-block md:w-auto md:px-3 md:py-2"
      >
        {label}
      </button>
    );
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Form submitted! (Connect backend or email service here)");
  };

  return (
    <div className="w-screen overflow-x-hidden bg-white text-black">
      <main className="relative min-h-screen">
        {/* Navbar */}
        <header className="sticky top-0 z-50 bg-black border-b border-gray-800 shadow-sm">
          <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-3 relative">
            <div className="flex items-center gap-4">
              <a
                href="#hero"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToId("hero");
                }}
                className="flex items-center gap-3"
              >
                <Image
                  src="/Image/WEBHAVEN TECH (2).jpg"
                  alt=" WebHavenTech Logo"
                  width={100}
                  height={150}
                  className="rounded-md object-cover"
                  priority
                />
              </a>
            </div>

            {/* desktop links */}
            <div className="hidden md:flex items-center gap-2">{navItems}</div>

            {/* mobile menu toggle */}
            <div className="md:hidden">
              <button
                onClick={() => setMenuOpen((s) => !s)}
                className="p-2 rounded-md text-white hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-white/20"
                aria-label="Toggle menu"
              >
                {menuOpen ? <HiX size={20} /> : <HiMenu size={20} />}
              </button>
            </div>

            {/* mobile dropdown */}
            {menuOpen && (
              <div className="absolute right-4 top-full mt-2 w-48 bg-black rounded-md shadow-lg md:hidden">
                <div className="py-2">{navItems}</div>
              </div>
            )}
          </nav>
        </header>

        {/* Hero Section */}
        <section
          id="hero"
          className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50 py-20 px-4 sm:px-6"
        >
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            >
              Welcome to WebHavenTech
              <span className="block text-[#c3120b] mt-2">IT Solutions</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-base sm:text-lg md:text-xl text-black max-w-2xl mx-auto mb-8"
            >
              Your Trusted Partner for Innovative IT & Digital Solutions
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap gap-4 justify-center"
            >
              <a
                href="#contact"
                className="px-6 py-3 bg-[#c3120b] text-black rounded-lg hover:opacity-95 transition-all text-lg font-medium flex items-center gap-2 justify-center"
              >
                Start Your Project
                <span className="ml-2">→</span>
              </a>

              <a
                href="#services"
                className="px-6 py-3 border border-[#c3120b] text-black rounded-lg hover:bg-white/5 transition-colors text-lg font-medium flex items-center gap-2 justify-center"
              >
                View Services
              </a>
            </motion.div>
          </motion.div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 bg-black flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h2 className="text-3xl sm:text-4xl font-bold text-[#c3120b]">About Me</h2>
                <p className="text-base sm:text-lg md:text-lg text-white/90 leading-relaxed">
                  At WebHavenTech, we help businesses grow through smart technology.
                  From custom web and mobile app development to digital
                  marketing and cloud solutions — we create powerful, secure,
                  and scalable systems tailored to your business needs. Our team
                  of experts is dedicated to delivering innovative solutions
                  that drive results and enhance user experiences.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="p-6 bg-[#111] rounded-xl text-center border border-gray-800">
                    <h4 className="text-lg font-semibold mb-2 text-[#c3120b]">Experience</h4>
                    <p className="text-3xl font-bold text-white">2+</p>
                    <p className="text-gray-400">Years</p>
                  </div>
                  <div className="p-6 bg-[#111] rounded-xl text-center border border-gray-800">
                    <h4 className="text-lg font-semibold mb-2 text-[#c3120b]">Clients</h4>
                    <p className="text-3xl font-bold text-white">50+</p>
                    <p className="text-gray-400">Served</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative w-full max-w-md mx-auto ml-8 md:ml-12"
              >
                <div className="relative w-full h-[600px] rounded-xl overflow-hidden">
                  <Image
                    src="/Image/about.jpg"
                    alt="About WebHavenTech"
                    width={500}
                    height={600}
                    className="object-contain"
                    priority
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Services Section with Background Image */}
        <section
          id="services"
          className="py-24 flex items-center bg-cover bg-center bg-no-repeat relative"
          style={{
            backgroundImage: "url('/e90bbc6b-7f1b-480a-a616-4b656c072478.png')",
          }}
        >
          <div className="absolute inset-0 bg-white/80"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Our Services
              </h2>
              <p className="text-base sm:text-lg text-black max-w-2xl mx-auto">
                Comprehensive IT solutions tailored to accelerate your business
                growth and digital transformation.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Website Development",
                  subtitle: "Full‑stack web solutions",
                  icon: <FaCode />,
                  points: [
                    "React.js & Next.js frontends",
                    "Node.js / Express backends",
                    "Database design & optimization",
                    "REST & GraphQL APIs",
                  ],
                },
                {
                  title: "Digital Marketing",
                  subtitle: "Boost your brand visibility",
                  icon: <FaBullhorn />,
                  points: [
                    "Search Engine Optimization (SEO)",
                    "Content Marketing",
                    "Email Marketing Campaigns",
                    "Performance Analytics & Reporting",
                  ],
                },
                {
                  title: "Graphics & Logo Designs",
                  subtitle: "Your brand’s first impression matters",
                  icon: <FaPaintBrush />,
                  points: [
                    "Logos & Branding",
                    "Business Cards & Brochures",
                    "Social Media Creatives",
                    "Custom Illustrations",
                  ],
                },
                {
                  title: "Google & Meta Ads",
                  subtitle: "Generate qualified leads",
                  icon: <FaBullhorn />,
                  points: [
                    "Google Search & Display Ads",
                    "Facebook & Instagram Ad Campaigns",
                    "Retargeting & Conversion Tracking",
                    "Ad Performance Optimization",
                  ],
                },
                {
                  title: "Social Media Management",
                  subtitle: "Grow your brand presence online",
                  icon: <FaShareAlt />,
                  points: [
                    "Page Setup & Optimization",
                    "Content Planning & Scheduling",
                    "Community Engagement",
                    "Analytics & Reporting",
                  ],
                },
                {
                  title: "WordPress & Shopify Store",
                  subtitle: "E-commerce made easy",
                  icon: <FaShoppingCart />,
                  points: [
                    "Custom Theme Development",
                    "Plugin & App Integration",
                    "Payment Gateway Setup",
                    "Store Optimization & Maintenance",
                  ],
                },
              ].map((service, index) => {
                const isBlack = index % 2 === 0; // even -> black, odd -> white
                return (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow flex flex-col gap-4 ${
                      isBlack ? "bg-black text-white" : "bg-white text-black"
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`flex-shrink-0 p-3 rounded-xl flex items-center justify-center ${
                          isBlack
                            ? "bg-white text-[#c3120b]"
                            : "bg-gray-100 text-black"
                        }`}
                      >
                        <span className="text-lg">{service.icon}</span>
                      </div>

                      <div>
                        <h3 className="text-xl font-bold">{service.title}</h3>
                        {service.subtitle && (
                          <p
                            className={`text-sm mt-1 ${
                              isBlack ? "text-[#c3120b]" : "text-[#c3120b]"
                            }`}
                          >
                            {service.subtitle}
                          </p>
                        )}
                      </div>
                    </div>

                    <p
                      className={`text-sm ${
                        isBlack ? "text-white/90" : "text-gray-700"
                      }`}
                    >
                      {service.subtitle}
                    </p>

                    {service.points && (
                      <ul className="mt-2 space-y-2">
                        {service.points.map((pt) => (
                          <li key={pt} className="flex items-start gap-3">
                            <span
                              className={`mt-1 w-2 h-2 rounded-full flex-shrink-0 ${
                                isBlack ? "bg-[#c3120b]" : "bg-[#c3120b]"
                              }`}
                            />
                            <span
                              className={`text-sm ${
                                isBlack ? "text-white/90" : "text-gray-700"
                              }`}
                            >
                              {pt}
                            </span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why Choose Me Section */}
        <section
          id="why-choose-me"
          className="py-24 bg-white flex items-center"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-[#c3120b]">
                Why Choose Me?
              </h2>
              <p className="text-base sm:text-lg text-black max-w-2xl mx-auto">
                Delivering Excellence in IT Solutions with a Client-Centric
                Approach.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
              {points.map((point, index) => {
                const blackIndexes = [0, 3];
                const isBlack = blackIndexes.includes(index);

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className={`p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow flex items-center gap-3 ${
                      isBlack ? "bg-black text-white" : "bg-white text-black"
                    }`}
                  >
                    <FaCheck className="text-[#c3120b]" size={20} />
                    <p
                      className={
                        isBlack
                          ? "text-white font-medium text-lg"
                          : "text-gray-800 font-medium text-lg"
                      }
                    >
                      {point}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-[#c3120b]">
                Testimonials
              </h2>
              <p className="text-base sm:text-lg text-black max-w-2xl mx-auto">
                Hear from clients who trusted WebHavenTech for their digital
                transformation.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  text: "WebHavenTech delivered an exceptional website — fast, secure and beautifully designed. Communication was excellent throughout.",
                  name: "Anita Verma",
                  role: "Founder, Lumina Foods",
                },
                {
                  text: "Professional team and solid advice. They modernized our legacy system and performance improved drastically.",
                  name: "Rohit Malhotra",
                  role: "COO, PrimeLogix",
                },
                {
                  text: "Very reliable, transparent pricing and 24/7 support. Highly recommended for small businesses.",
                  name: "Sneha Kapoor",
                  role: "Owner, StudioNine",
                },
              ].map((t, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.12 }}
                  viewport={{ once: true }}
                  className="p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow bg-black text-white flex flex-col gap-4"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 p-3 rounded-xl bg-white text-[#c3120b] flex items-center justify-center">
                      <FaQuoteLeft />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold">{t.name}</h4>
                      <p className="text-sm text-[#c3120b] mt-1">{t.role}</p>
                    </div>
                  </div>

                  <p className="text-white/90 text-sm leading-relaxed">
                    "{t.text}"
                  </p>

                  <div className="mt-2 flex gap-2">
                    {/* simple dots as rating placeholders */}
                    <span className="w-2 h-2 rounded-full bg-[#c3120b]" />
                    <span className="w-2 h-2 rounded-full bg-[#c3120b]" />
                    <span className="w-2 h-2 rounded-full bg-[#c3120b]" />
                    <span className="w-2 h-2 rounded-full bg-[#c3120b]" />
                    <span className="w-2 h-2 rounded-full bg-[#c3120b]" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 bg-white flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h2 className="text-2xl sm:text-3xl font-bold">Get in Touch</h2>
                <p className="text-base sm:text-lg text-black">
                  Whether you have a question about services, pricing, or need a
                  custom solution, I’m here to help. Reach out and let’s discuss
                  how we can work together to achieve your business goals.
                </p>
                <div className="space-y-2">
                  <a
                    href="mailto:deepikaraj01999@gmail.com"
                    className="flex items-center gap-2 text-lg hover:text-black transition-colors"
                  >
                    <FaEnvelope className="w-5 h-5 text-[#c3120b]" />
                    deepikaraj01999@gmail.com
                  </a>
                  <a
                    href="tel:+918905975919"
                    className="flex items-center gap-2 text-lg hover:text-black transition-colors"
                  >
                    <FaPhone className="w-5 h-5 text-[#c3120b]" />
                    91+ 8905975919
                  </a>
                  <a
                    href="https://wa.me/918905975919"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-lg hover:text-black transition-colors"
                  >
                    <FaWhatsapp className="w-5 h-5 text-[#c3120b]" />
                    WhatsApp
                  </a>
                  <a
                    href="https://instagram.com/webhaven_tech"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-lg hover:text-black transition-colors"
                  >
                    <FaInstagram className="w-5 h-5 text-[#c3120b]" />
                    Instagram
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <form
                  onSubmit={handleSubmit}
                  className="space-y-4 bg-black p-6 sm:p-8 rounded-xl"
                >
                  <h3 className="text-xl font-semibold text-white mb-4 sm:mb-6">
                    Send Message
                  </h3>
                  <input
                    type="text"
                    placeholder="Your Name"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white"
                  />
                  <textarea
                    rows={4}
                    placeholder="Your Message"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white"
                  ></textarea>
                  <button
                    type="submit"
                    className="w-full bg-white text-black font-medium py-3 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-white border-t border-gray-300 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6 text-black text-sm sm:text-base">
              <a
                href="https://www.google.com/maps/place/123+Main+Street,+City,+Country"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-gray-700 transition-colors"
              >
                <FaMapMarkerAlt className="w-5 h-5 text-[#c3120b]" />
                <span>Jodhpur, Rajasthan, India — Serving Worldwide</span>
              </a>
            </div>

            <div className="flex flex-col items-center md:items-end gap-2">
              <p
                className="text-black text-sm sm:text-base"
                style={{ opacity: 0.7 }}
              >
                &copy; {new Date().getFullYear()} WebHavenTech. All rights
                reserved.
              </p>

              {/* <div className="text-sm text-black/70 flex items-center gap-2">
                <span>Built with</span>
                <span className="text-red-500">♥</span>
                <span>in India</span>
              </div> */}
            </div>
          </div>
        </footer>
        <FloatingContact />
      </main>
    </div>
  );
}
