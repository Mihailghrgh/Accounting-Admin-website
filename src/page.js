"use client";

import React, { useEffect, useState } from "react";
import "./style.css";

export default function AccountingAdminTemplate() {
  const [isVisible, setIsVisible] = useState(false);

  // Function to handle link click
  const handleLinkClick = (event, linkName) => {
    event.preventDefault();
    alert(`You clicked on ${linkName}`);
  };

  useEffect(() => {
    const handleScroll = () => {
      const servicesSection = document.getElementById("services");
      if (servicesSection) {
        const rect = servicesSection.getBoundingClientRect();
        setIsVisible(rect.top <= window.innerHeight && rect.bottom >= 0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial state

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Sticky header */}
      <header className="bg-[#800020] shadow sticky top-0 z-50 transition-all duration-300">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="logo text-white">AccountAdmin Pro</div>
          <ul className="nav-links hidden md:flex space-x-4">
            <li>
              <a href="#home" className="text-gray-700 hover:text-[#800020]">
                Home
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="text-gray-700 hover:text-[#800020]"
              >
                Services
              </a>
            </li>
            <li>
              <a href="#about" className="text-gray-700 hover:text-[#800020]">
                About
              </a>
            </li>
            <li>
              <a href="#contact" className="text-gray-700 hover:text-[#800020]">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <section id="home" className="hero">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Innovative Accounting & Administration Solutions
          </h1>
          <p className="text-xl mb-8">
            Empowering businesses with strategic financial management and
            efficient administrative processes.
          </p>
          <a href="#contact" className="btn">
            Get in Touch
          </a>
        </div>
      </section>

      {/* Services section with scroll-triggered animation */}
      <section id="services" className="services">
        <div
          className={`container mx-auto px-4 transition-all duration-1000 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
          }`}
        >
          <h2 className="text-3xl font-bold text-center text-[#800020] mb-12">
            Our Services
          </h2>
          <div className="service-grid">
            {[
              "Financial Analysis",
              "Tax Planning",
              "Business Administration",
              "Risk Management",
            ].map((service, index) => (
              <div key={index} className="service-item">
                <h3 className="text-xl font-semibold text-[#800020] mb-4">
                  {service}
                </h3>
                <p className="text-gray-600">
                  Comprehensive {service.toLowerCase()} services tailored to
                  your business needs.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="email-inquiry">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#800020] mb-12">
            Contact Us
          </h2>
          <form className="inquiry-form">
            <div className="form-group">
              <label
                htmlFor="name"
                className="block text-gray-700 font-semibold mb-2"
              >
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#800020]"
              />
            </div>
            <div className="form-group">
              <label
                htmlFor="email"
                className="block text-gray-700 font-semibold mb-2"
              >
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#800020]"
              />
            </div>
            <div className="form-group">
              <label
                htmlFor="question"
                className="block text-gray-700 font-semibold mb-2"
              >
                Question:
              </label>
              <textarea
                id="question"
                name="question"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#800020] h-32"
              ></textarea>
            </div>
            <button type="submit" className="btn w-full">
              Send Inquiry
            </button>
          </form>
        </div>
      </section>

      <section className="additional-section">
        <div className="container">
          <div className="section-left">
            <h2>Our Services</h2>
            <p>
              We offer a variety of services to meet your needs. Here are some
              of the highlights:
            </p>
          </div>
          <div className="section-right">
            <ul>
              <li>
                <a href="#" onClick={(e) => handleLinkClick(e, "Service 1")}>
                  Service 1
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => handleLinkClick(e, "Service 2")}>
                  Service 2
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => handleLinkClick(e, "Service 3")}>
                  Service 3
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container mx-auto px-4 text-center">
          <p>2023 AccountAdmin Pro. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
