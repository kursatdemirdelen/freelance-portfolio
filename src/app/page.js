"use client";

import React, { useState, useEffect } from "react";
import projects from "./data"; // Proje verilerini içe aktar

const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(() => {
    // Kullanıcı tercihlerini kontrol et
    if (typeof window !== "undefined") {
      return localStorage.getItem("darkMode") === "true";
    }
    return false; // varsayılan olarak karanlık mod kapalı
  });

  // Dark mode'u açma/kapama
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem("darkMode", !darkMode);
  };

  // <html> öğesi için dark mode sınıfını uygula
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div
      className={`${
        darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-100 text-gray-800"
      }`}
    >
      {/* Navbar */}
      <header
        className={`sticky top-0 z-50 ${
          darkMode ? "bg-gray-800" : "bg-white"
        } shadow`}
      >
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <h1 className="text-xl font-bold">Freelance Developer</h1>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a href="#home" className="hover:text-blue-500">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-blue-500">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-blue-500">
                  Projects
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-blue-500">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-blue-500">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="ml-4 p-2 rounded border hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="bg-blue-500 text-white text-center py-20">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold">Bring Your Ideas to Life</h2>
          <p className="mt-4">
            I design and develop modern, responsive web applications.
          </p>
          <a
            href="#contact"
            className="mt-6 inline-block px-6 py-3 bg-white text-blue-500 font-semibold rounded hover:bg-gray-100"
          >
            Let’s Work Together
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold">About Me</h3>
          <p className="mt-4 max-w-2xl mx-auto">
            I am a software engineer with 3+ years of experience specializing in
            responsive web applications, SPA development, and technical support
            using .NET, React, and Next.js.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className={`py-16 ${darkMode ? "bg-gray-800" : "bg-gray-200"}`}
      >
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold">Projects</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`shadow-md p-4 ${
                  darkMode
                    ? "bg-gray-700 text-gray-100"
                    : "bg-white text-gray-800"
                }`}
              >
                <h4 className="text-xl font-semibold">{project.title}</h4>
                <p className="mt-2">{project.description}</p>
                <a
                  href={`/projects/${project.id}`}
                  className="text-blue-500 hover:underline mt-4 block"
                >
                  View Details
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold">Services</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            <div
              className={`p-6 shadow-md ${
                darkMode
                  ? "bg-gray-700 text-gray-100"
                  : "bg-white text-gray-800"
              }`}
            >
              <h4 className="text-xl font-semibold">Responsive Web Design</h4>
              <p className="mt-2">
                Creating modern, mobile-friendly websites that look great on any
                device.
              </p>
            </div>
            <div
              className={`p-6 shadow-md ${
                darkMode
                  ? "bg-gray-700 text-gray-100"
                  : "bg-white text-gray-800"
              }`}
            >
              <h4 className="text-xl font-semibold">
                React/Next.js Development
              </h4>
              <p className="mt-2">
                Building scalable and interactive single-page applications
                tailored to your needs.
              </p>
            </div>
            <div
              className={`p-6 shadow-md ${
                darkMode
                  ? "bg-gray-700 text-gray-100"
                  : "bg-white text-gray-800"
              }`}
            >
              <h4 className="text-xl font-semibold">
                Admin Panel Customization
              </h4>
              <p className="mt-2">
                Tailoring open-source or pre-built admin panels to match your
                business requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-blue-500 text-white py-16">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold">Get in Touch</h3>
          <p className="mt-4">Have a project in mind? Let’s work together!</p>
          <form className="mt-8 max-w-md mx-auto">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded mb-4"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded mb-4"
            />
            <textarea
              placeholder="Your Message"
              className="w-full p-3 rounded mb-4"
              rows="5"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-white text-blue-500 font-bold py-3 rounded hover:bg-gray-100"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer
        className={`${
          darkMode ? "bg-gray-800 text-gray-400" : "bg-gray-900 text-gray-400"
        } py-6`}
      >
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Freelance Developer. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
