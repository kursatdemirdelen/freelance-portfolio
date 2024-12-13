import React from "react";

const Portfolio = () => {
  return (
    <div className="bg-gray-100 text-gray-800">
      {/* Navbar */}
      <header className="bg-white shadow sticky top-0 z-50">
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
      <section id="projects" className="bg-gray-200 py-16">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold">Projects</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            <div className="bg-white shadow-md p-4">
              <h4 className="text-xl font-semibold">E-commerce Admin Panel</h4>
              <p className="mt-2 text-gray-600">
                Developed with .NET and React, featuring user management and
                order tracking.
              </p>
              <a href="#" className="text-blue-500 hover:underline mt-4 block">
                View Demo
              </a>
            </div>
            <div className="bg-white shadow-md p-4">
              <h4 className="text-xl font-semibold">Interactive Portfolio</h4>
              <p className="mt-2 text-gray-600">
                Built with Next.js and TailwindCSS, showcasing modern design
                principles.
              </p>
              <a href="#" className="text-blue-500 hover:underline mt-4 block">
                View Demo
              </a>
            </div>
            <div className="bg-white shadow-md p-4">
              <h4 className="text-xl font-semibold">Custom Dashboard</h4>
              <p className="mt-2 text-gray-600">
                Fully responsive dashboard with dynamic charts and API
                integrations.
              </p>
              <a href="#" className="text-blue-500 hover:underline mt-4 block">
                View Demo
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold">Services</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            <div className="p-6 bg-white shadow-md">
              <h4 className="text-xl font-semibold">Responsive Web Design</h4>
              <p className="mt-2">
                Creating modern, mobile-friendly websites that look great on any
                device.
              </p>
            </div>
            <div className="p-6 bg-white shadow-md">
              <h4 className="text-xl font-semibold">
                React/Next.js Development
              </h4>
              <p className="mt-2">
                Building scalable and interactive single-page applications
                tailored to your needs.
              </p>
            </div>
            <div className="p-6 bg-white shadow-md">
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
      <footer className="bg-gray-900 text-gray-400 py-6">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Freelance Developer. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
