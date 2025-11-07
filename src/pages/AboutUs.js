
// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import "../styles/AboutUs.css";

// const AboutUs = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   const navLinks = [
//     { name: "Home", link: "/" },
//     { name: "About Us", link: "/about-us" },
//     { name: "Energy", link: "/energy" },
//     { name: "Movement", link: "/movement" },
//     { name: "Space Vastu", link: "/space-vastu" },
//     { name: "Manifestation", link: "/manifestation" },
//     { name: "Material", link: "/material" },
//     { name: "Blogs", link: "/blogs" },
//     { name: "Careers", link: "/careers" },
//     { name: "Contact", link: "/contact" },
//     { name: "Login / Signup", link: "/auth" },
//   ];

//   // 🌠 Starfield effect
//   useEffect(() => {
//     const starfield = document.getElementById("starfield");
//     if (starfield && !starfield.hasChildNodes()) {
//       for (let i = 0; i < 100; i++) {
//         const star = document.createElement("div");
//         star.className = "star";
//         star.style.top = `${Math.random() * 100}%`;
//         star.style.left = `${Math.random() * 100}%`;
//         star.style.width = `${Math.random() * 2 + 1}px`;
//         star.style.height = star.style.width;
//         star.style.animationDuration = `${Math.random() * 3 + 2}s`;
//         starfield.appendChild(star);
//       }
//     }
//   }, []);

//   return (
//     <div className="about-us-page cosmic-bg">
//       {/* 🌠 Starfield */}
//       <div id="starfield" className="starfield"></div>

//       {/* 🧭 Sidebar */}
//       <div className={`sidebar-home ${sidebarOpen ? "open" : ""}`}>
//         <h2 className="sidebar-logo">✨ AstroConnect</h2>
//         <ul>
//           {navLinks.map((item, idx) => (
//             <li key={idx}>
//               <a href={item.link} onClick={() => setSidebarOpen(false)}>
//                 {item.name}
//               </a>
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* 🍔 Hamburger */}
//       <button
//         className={`sidebar-toggle-home ${sidebarOpen ? "active" : ""}`}
//         onClick={() => setSidebarOpen(!sidebarOpen)}
//       >
//         ☰
//       </button>

//       {/* 🌟 Main Content */}
//       <div className="about-content-wrapper">
//         <section className="about-hero">
//           <motion.h1
//             initial={{ opacity: 0, y: -40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1 }}
//           >
//             About <span>AstroConnect</span>
//           </motion.h1>
//           <motion.p
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.3, duration: 1 }}
//           >
//             Discover the cosmic connection between you and the universe.  
//             We blend astrology, numerology, vastu, tarot, and manifestation  
//             to bring harmony, awareness, and positive transformation into your life.
//           </motion.p>
//         </section>

//         <section className="about-us-section">
//           <motion.img
//             src="https://res.cloudinary.com/doerrm32l/image/upload/v1761893673/astrologo_fjndbn.png"
//             alt="AstroConnect"
//             className="about-us-image"
//             initial={{ opacity: 0, scale: 0.9 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 1 }}
//           />

//           <motion.div
//             className="about-us-content"
//             initial={{ opacity: 0, x: 80 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 1 }}
//           >
//             <h2>Guiding You with the Power of the Universe ✨</h2>
//             <p>
//               At <span className="highlight">AstroConnect</span>, our mission is to
//               help you understand your life’s blueprint through a deeper connection
//               with celestial wisdom. Our experts specialize in:
//             </p>
//             <ul>
//               <li>🔮 Personalized Astrology Consultations</li>
//               <li>🌟 Numerology & Life Path Guidance</li>
//               <li>🏠 Vastu & Energy Alignment</li>
//               <li>🃏 Tarot for Clarity & Self-Discovery</li>
//               <li>💫 Manifestation Techniques to Attract Abundance</li>
//             </ul>
//             <p>
//               We believe that when you align your energy with universal forces, you
//               unlock infinite possibilities.
//             </p>
//           </motion.div>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default AboutUs;

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "../styles/AboutUs.css";

const AboutUs = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navLinks = [
    { name: "Home", link: "/", icon: "🏠" },
    { name: "About Us", link: "/about-us", icon: "✨" },
    { name: "Energy", link: "/energy", icon: "⚡" },
    { name: "Movement", link: "/movement", icon: "🌊" },
    { name: "Space Vastu", link: "/space-vastu", icon: "🏛️" },
    { name: "Manifestation", link: "/manifestation", icon: "💫" },
    { name: "Material", link: "/material", icon: "💎" },
    { name: "Blogs", link: "/blogs", icon: "📝" },
    { name: "Careers", link: "/careers", icon: "💼" },
    { name: "Contact", link: "/contact", icon: "📧" },
    { name: "Login / Signup", link: "/auth", icon: "🔐" },
  ];

  const features = [
    {
      icon: "🔮",
      title: "Astrology",
      desc: "Personalized birth chart analysis and planetary insights"
    },
    {
      icon: "🌟",
      title: "Numerology",
      desc: "Decode your life path through the power of numbers"
    },
    {
      icon: "🏠",
      title: "Vastu Shastra",
      desc: "Harmonize your space with cosmic energy flow"
    },
    {
      icon: "🃏",
      title: "Tarot Reading",
      desc: "Gain clarity and guidance for life's questions"
    },
    {
      icon: "💫",
      title: "Manifestation",
      desc: "Attract abundance through universal laws"
    },
    {
      icon: "🌙",
      title: "Moon Phases",
      desc: "Align your actions with lunar cycles"
    }
  ];

  const stats = [
    { number: "10K+", label: "Happy Clients" },
    { number: "500+", label: "Consultations" },
    { number: "50+", label: "Expert Astrologers" },
    { number: "4.9★", label: "Average Rating" }
  ];

  // Starfield effect
  useEffect(() => {
    const starfield = document.getElementById("starfield");
    if (starfield && !starfield.hasChildNodes()) {
      for (let i = 0; i < 150; i++) {
        const star = document.createElement("div");
        star.className = "star";
        star.style.top = `${Math.random() * 100}%`;
        star.style.left = `${Math.random() * 100}%`;
        star.style.width = `${Math.random() * 3 + 1}px`;
        star.style.height = star.style.width;
        star.style.animationDuration = `${Math.random() * 3 + 2}s`;
        star.style.animationDelay = `${Math.random() * 2}s`;
        starfield.appendChild(star);
      }
    }
  }, []);

  return (
    <div className="about-us-page">
      {/* Starfield Background */}
      <div id="starfield" className="starfield"></div>

      {/* Floating Orbs */}
      <div className="floating-orbs">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
      </div>

      {/* Sidebar */}
      <div className={`sidebar-modern ${sidebarOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <h2 className="sidebar-logo">
            <span className="logo-icon">✨</span>
            AstroConnect
          </h2>
          <button 
            className="sidebar-close"
            onClick={() => setSidebarOpen(false)}
          >
            ✕
          </button>
        </div>
        <nav className="sidebar-nav">
          {navLinks.map((item, idx) => (
            <motion.a
              key={idx}
              href={item.link}
              className="sidebar-link"
              onClick={() => setSidebarOpen(false)}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.05 }}
            >
              <span className="link-icon">{item.icon}</span>
              <span className="link-text">{item.name}</span>
            </motion.a>
          ))}
        </nav>
        <div className="sidebar-footer">
          <p>© 2025 AstroConnect</p>
          <div className="social-links">
            <a href="#facebook">📘</a>
            <a href="#instagram">📷</a>
            <a href="#twitter">🐦</a>
          </div>
        </div>
      </div>

      {/* Hamburger Menu */}
      <button
        className={`hamburger-menu ${sidebarOpen ? "active" : ""}`}
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Main Content */}
      <div className={`about-content ${sidebarOpen ? "sidebar-open" : ""}`}>
        
        {/* Hero Section */}
        <section className="hero-section">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.h1
              className="hero-title"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Welcome to
              <span className="gradient-text"> AstroConnect</span>
            </motion.h1>
            <motion.p
              className="hero-subtitle"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Your Gateway to Cosmic Wisdom & Spiritual Growth
            </motion.p>
            <motion.div
              className="hero-buttons"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <a href="#about" className="btn-primary">Discover More</a>
              <a href="/contact" className="btn-secondary">Get Started</a>
            </motion.div>
          </motion.div>
          
          <motion.div
            className="hero-image"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="cosmic-circle">
              <img
                src="https://res.cloudinary.com/doerrm32l/image/upload/v1761893673/astrologo_fjndbn.png"
                alt="AstroConnect Logo"
              />
            </div>
          </motion.div>
        </section>

        {/* Stats Section */}
        <section className="stats-section">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              className="stat-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <h3 className="stat-number">{stat.number}</h3>
              <p className="stat-label">{stat.label}</p>
            </motion.div>
          ))}
        </section>

        {/* About Section */}
        <section id="about" className="about-section">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">
              <span className="title-icon">✨</span>
              Who We Are
            </h2>
            <p className="section-subtitle">
              Connecting You with Universal Wisdom
            </p>
          </motion.div>

          <div className="about-grid">
            <motion.div
              className="about-text"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="about-description">
                At <span className="highlight">AstroConnect</span>, we believe that the universe 
                holds infinite wisdom waiting to be discovered. Our mission is to bridge the gap 
                between cosmic knowledge and modern life, helping you navigate your journey with 
                clarity and purpose.
              </p>
              <p className="about-description">
                With a team of experienced astrologers, numerologists, vastu experts, and spiritual 
                guides, we offer personalized insights that empower you to make informed decisions 
                and manifest your dreams.
              </p>
              <ul className="about-list">
                <li>🌟 Evidence-based astrological interpretations</li>
                <li>💫 Customized spiritual guidance</li>
                <li>🔮 Ancient wisdom meets modern technology</li>
                <li>✨ Transform your life from within</li>
              </ul>
            </motion.div>

            <motion.div
              className="about-visual"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="visual-card">
                <div className="card-glow"></div>
                <img
                  src="https://res.cloudinary.com/doerrm32l/image/upload/v1761893673/astrologo_fjndbn.png"
                  alt="Cosmic Connection"
                  className="about-image"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="features-section">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">
              <span className="title-icon">🌟</span>
              Our Services
            </h2>
            <p className="section-subtitle">
              Discover the Tools to Transform Your Life
            </p>
          </motion.div>

          <div className="features-grid">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                className="feature-card"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -10, scale: 1.05 }}
              >
                <div className="feature-icon">{feature.icon}</div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-desc">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <motion.div
            className="cta-content"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="cta-title">Ready to Begin Your Journey?</h2>
            <p className="cta-text">
              Connect with the cosmos and unlock your true potential today.
            </p>
            <div className="cta-buttons">
              <a href="/movement" className="btn-cta-primary">
                Explore Services
              </a>
              <a href="/contact" className="btn-cta-secondary">
                Book Consultation
              </a>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;