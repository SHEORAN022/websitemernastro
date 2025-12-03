// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import "../styles/AboutUs.css";

// const AboutUs = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   const navLinks = [
//     { name: "Home", link: "/" },
//     { name: "About Us", link: "/about-us" },
//     { name: "Energy", link: "/energy" },
//     { name: "Astrology", link: "/astrology" },
//     { name: "Vastu", link: "/vastu" },
//     { name: "Manifestation", link: "/manifestation" },
//     { name: "Material", link: "/material" },
//     { name: "Blogs", link: "/blogs" },
//     { name: "Careers", link: "/careers" },
//     { name: "Contact", link: "/contact" },
//     { name: "Login / Signup", link: "/auth" },
//   ];

//   const features = [
//     { title: "Astrology", desc: "Personalized birth chart analysis and planetary insights" },
//     { title: "Numerology", desc: "Decode your life path through the power of numbers" },
//     { title: "Vastu Shastra", desc: "Harmonize your space with cosmic energy flow" },
//     { title: "Tarot Reading", desc: "Gain clarity and guidance for life's questions" },
//     { title: "Manifestation", desc: "Attract abundance through universal laws" },
//     { title: "Moon Phases", desc: "Align your actions with lunar cycles" },
//   ];

//   const stats = [
//     { number: "10K+", label: "Happy Clients" },
//     { number: "500+", label: "Consultations" },
//     { number: "50+", label: "Expert Astrologers" },
//     { number: "4.9★", label: "Average Rating" },
//   ];

//   // ✨ Starfield Effect
//   useEffect(() => {
//     const starfield = document.getElementById("starfield");
//     if (starfield && !starfield.hasChildNodes()) {
//       for (let i = 0; i < 150; i++) {
//         const star = document.createElement("div");
//         star.className = "star";
//         star.style.top = `${Math.random() * 100}%`;
//         star.style.left = `${Math.random() * 100}%`;
//         star.style.width = `${Math.random() * 2 + 1}px`;
//         star.style.height = star.style.width;
//         star.style.animationDuration = `${Math.random() * 3 + 2}s`;
//         star.style.animationDelay = `${Math.random() * 2}s`;
//         starfield.appendChild(star);
//       }
//     }
//   }, []);

//   return (
//     <div className="about-us-page">
//       {/* 🌌 Starfield & Orbs */}
//       <div id="starfield" className="starfield"></div>
//       <div className="floating-orbs">
//         <div className="orb orb-1"></div>
//         <div className="orb orb-2"></div>
//         <div className="orb orb-3"></div>
//       </div>

//       {/* 🌠 Sidebar */}
//       <div className={`sidebar-modern ${sidebarOpen ? "open" : ""}`}>
//         <div className="sidebar-header">
//           <h2 className="sidebar-logo">✨ AstroConnect</h2>
//           <button className="sidebar-close" onClick={() => setSidebarOpen(false)}>✕</button>
//         </div>

//         <nav className="sidebar-nav">
//           <ul>
//             {navLinks.map((item, idx) => (
//               <motion.li
//                 key={idx}
//                 initial={{ opacity: 0, x: -20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ delay: idx * 0.05 }}
//               >
//                 <a
//                   href={item.link}
//                   onClick={() => setSidebarOpen(false)}
//                   className="sidebar-link"
//                 >
//                   {item.name}
//                 </a>
//               </motion.li>
//             ))}
//           </ul>
//         </nav>

//         <div className="sidebar-footer">
//           <p>© 2025 AstroConnect</p>
//           <div className="social-links">
//             <a href="#">Facebook</a>
//             <a href="#">Instagram</a>
//             <a href="#">Twitter</a>
//           </div>
//         </div>
//       </div>

//       {/* 🍔 Hamburger */}
//       <button
//         className={`hamburger-menu ${sidebarOpen ? "active" : ""}`}
//         onClick={() => setSidebarOpen(!sidebarOpen)}
//       >
//         <span></span>
//         <span></span>
//         <span></span>
//       </button>

//       {/* 🌙 Main Content */}
//       <div className={`about-content ${sidebarOpen ? "sidebar-open" : ""}`}>
//         {/* Hero Section */}
//         <section className="hero-section">
//           <motion.div
//             className="hero-content"
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1 }}
//           >
//             <h1 className="hero-title">
//               Welcome to <span className="gradient-text">AstroConnect</span>
//             </h1>
//             <p className="hero-subtitle">
//               Your Gateway to Cosmic Wisdom & Spiritual Growth
//             </p>
//             <div className="hero-buttons">
//               <a href="#about" className="btn-primary">
//                 Discover More
//               </a>
//               <a href="/contact" className="btn-secondary">
//                 Get Started
//               </a>
//             </div>
//           </motion.div>

//           <motion.div
//             className="hero-image"
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 1, delay: 0.3 }}
//           >
//             <div className="cosmic-circle">
//               <img
//                 src="https://res.cloudinary.com/doerrm32l/image/upload/v1761893673/astrologo_fjndbn.png"
//                 alt="AstroConnect Logo"
//               />
//             </div>
//           </motion.div>
//         </section>

//         {/* 🌟 Stats */}
//         <section className="stats-section">
//           {stats.map((stat, idx) => (
//             <motion.div
//               key={idx}
//               className="stat-card"
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: idx * 0.1 }}
//             >
//               <h3 className="stat-number">{stat.number}</h3>
//               <p className="stat-label">{stat.label}</p>
//             </motion.div>
//           ))}
//         </section>

//         {/* 💫 About Section */}
//         <section id="about" className="about-section">
//           <motion.div
//             className="section-header"
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//           >
//             <h2 className="section-title">Who We Are</h2>
//             <p className="section-subtitle">Connecting You with Universal Wisdom</p>
//           </motion.div>

//           <div className="about-grid">
//             <motion.div
//               className="about-text"
//               initial={{ opacity: 0, x: -50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.8 }}
//             >
//               <p className="about-description">
//                 At <span className="highlight">AstroConnect</span>, we believe the
//                 universe holds infinite wisdom waiting to be discovered. Our
//                 mission is to bridge the gap between cosmic knowledge and modern
//                 life, helping you navigate your journey with clarity and purpose.
//               </p>
//               <ul className="about-list">
//                 <li>Evidence-based astrological interpretations</li>
//                 <li>Customized spiritual guidance</li>
//                 <li>Ancient wisdom meets modern technology</li>
//                 <li>Transform your life from within</li>
//               </ul>
//             </motion.div>

//             <motion.div
//               className="about-visual"
//               initial={{ opacity: 0, x: 50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.8 }}
//             >
//               <div className="visual-card">
//                 <div className="card-glow"></div>
//                 <img
//                   src="https://res.cloudinary.com/doerrm32l/image/upload/v1761893673/astrologo_fjndbn.png"
//                   alt="Cosmic Connection"
//                   className="about-image"
//                 />
//               </div>
//             </motion.div>
//           </div>
//         </section>

//         {/* 🌠 Features */}
//         <section className="features-section">
//           <div className="section-header">
//             <h2 className="section-title">Our Services</h2>
//             <p className="section-subtitle">
//               Discover the Tools to Transform Your Life
//             </p>
//           </div>

//           <div className="features-grid">
//             {features.map((feature, idx) => (
//               <motion.div
//                 key={idx}
//                 className="feature-card"
//                 initial={{ opacity: 0, y: 40 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: idx * 0.1 }}
//                 whileHover={{ y: -10, scale: 1.05 }}
//               >
//                 <h3 className="feature-title">{feature.title}</h3>
//                 <p className="feature-desc">{feature.desc}</p>
//               </motion.div>
//             ))}
//           </div>
//         </section>

//         {/* 🚀 CTA */}
//         <section className="cta-section">
//           <motion.div
//             className="cta-content"
//             initial={{ opacity: 0, scale: 0.9 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true }}
//           >
//             <h2 className="cta-title">Ready to Begin Your Journey?</h2>
//             <p className="cta-text">
//               Connect with the cosmos and unlock your true potential today.
//             </p>
//             <div className="cta-buttons">
//               <a href="/astrology" className="btn-cta-primary">
//                 Explore Services
//               </a>
//               <a href="/contact" className="btn-cta-secondary">
//                 Book Consultation
//               </a>
//             </div>
//           </motion.div>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default AboutUs;

// // import React, { useState, useEffect } from "react";
// // import axios from "axios";
// // import { motion } from "framer-motion";
// // import "../styles/AboutUs.css";

// // const API_BASE = process.env.REACT_APP_API_URL || "https://adminastrotalk-1.onrender.com/api";

// // const AboutUs = () => {
// //   const [sidebarOpen, setSidebarOpen] = useState(false);
// //   const [aboutData, setAboutData] = useState({
// //     title: "About Us",
// //     content: "",
// //     image: "",
// //   });

// //   // 🌐 Fetch About Us data (text + image)
// //   useEffect(() => {
// //     const fetchAboutData = async () => {
// //       try {
// //         const res = await axios.get(`${API_BASE}/about`);
// //         if (res.data) setAboutData(res.data);
// //       } catch (err) {
// //         console.error("❌ Error fetching About Us:", err.message);
// //       }
// //     };
// //     fetchAboutData();
// //   }, []);

// //   // ✨ Starfield Effect (unchanged)
// //   useEffect(() => {
// //     const starfield = document.getElementById("starfield");
// //     if (starfield && !starfield.hasChildNodes()) {
// //       for (let i = 0; i < 150; i++) {
// //         const star = document.createElement("div");
// //         star.className = "star";
// //         star.style.top = `${Math.random() * 100}%`;
// //         star.style.left = `${Math.random() * 100}%`;
// //         star.style.width = `${Math.random() * 2 + 1}px`;
// //         star.style.height = star.style.width;
// //         star.style.animationDuration = `${Math.random() * 3 + 2}s`;
// //         star.style.animationDelay = `${Math.random() * 2}s`;
// //         starfield.appendChild(star);
// //       }
// //     }
// //   }, []);

// //   const navLinks = [
// //     { name: "Home", link: "/" },
// //     { name: "About Us", link: "/about-us" },
// //     { name: "Energy", link: "/energy" },
// //     { name: "Astrology", link: "/astrology" },
// //     { name: "Vastu", link: "/vastu" },
// //     { name: "Manifestation", link: "/manifestation" },
// //     { name: "Material", link: "/material" },
// //     { name: "Blogs", link: "/blogs" },
// //     { name: "Careers", link: "/careers" },
// //     { name: "Contact", link: "/contact" },
// //     { name: "Login / Signup", link: "/auth" },
// //   ];

// //   const features = [
// //     { title: "Astrology", desc: "Personalized birth chart analysis and planetary insights" },
// //     { title: "Numerology", desc: "Decode your life path through the power of numbers" },
// //     { title: "Vastu Shastra", desc: "Harmonize your space with cosmic energy flow" },
// //     { title: "Tarot Reading", desc: "Gain clarity and guidance for life's questions" },
// //     { title: "Manifestation", desc: "Attract abundance through universal laws" },
// //     { title: "Moon Phases", desc: "Align your actions with lunar cycles" },
// //   ];

// //   const stats = [
// //     { number: "10K+", label: "Happy Clients" },
// //     { number: "500+", label: "Consultations" },
// //     { number: "50+", label: "Expert Astrologers" },
// //     { number: "4.9★", label: "Average Rating" },
// //   ];

// //   // 🌌 Image handler
// //   const aboutImage =
// //     aboutData.image && aboutData.image.startsWith("/uploads")
// //       ? `${API_BASE.replace("/api", "")}${aboutData.image}`
// //       : "https://res.cloudinary.com/doerrm32l/image/upload/v1761893673/astrologo_fjndbn.png";

// //   return (
// //     <div className="about-us-page">
// //       {/* 🌌 Starfield & Orbs */}
// //       <div id="starfield" className="starfield"></div>
// //       <div className="floating-orbs">
// //         <div className="orb orb-1"></div>
// //         <div className="orb orb-2"></div>
// //         <div className="orb orb-3"></div>
// //       </div>

// //       {/* 🌠 Sidebar */}
// //       <div className={`sidebar-modern ${sidebarOpen ? "open" : ""}`}>
// //         <div className="sidebar-header">
// //           <h2 className="sidebar-logo">✨ AstroConnect</h2>
// //           <button className="sidebar-close" onClick={() => setSidebarOpen(false)}>
// //             ✕
// //           </button>
// //         </div>
// //         <nav className="sidebar-nav">
// //           <ul>
// //             {navLinks.map((item, idx) => (
// //               <motion.li
// //                 key={idx}
// //                 initial={{ opacity: 0, x: -20 }}
// //                 animate={{ opacity: 1, x: 0 }}
// //                 transition={{ delay: idx * 0.05 }}
// //               >
// //                 <a href={item.link} onClick={() => setSidebarOpen(false)} className="sidebar-link">
// //                   {item.name}
// //                 </a>
// //               </motion.li>
// //             ))}
// //           </ul>
// //         </nav>
// //         <div className="sidebar-footer">
// //           <p>© 2025 AstroConnect</p>
// //           <div className="social-links">
// //             <a href="#">Facebook</a>
// //             <a href="#">Instagram</a>
// //             <a href="#">Twitter</a>
// //           </div>
// //         </div>
// //       </div>

// //       {/* 🍔 Hamburger */}
// //       <button
// //         className={`hamburger-menu ${sidebarOpen ? "active" : ""}`}
// //         onClick={() => setSidebarOpen(!sidebarOpen)}
// //       >
// //         <span></span>
// //         <span></span>
// //         <span></span>
// //       </button>

// //       {/* 🌙 Main Content */}
// //       <div className={`about-content ${sidebarOpen ? "sidebar-open" : ""}`}>
// //         {/* 🌠 Hero Section */}
// //         <section className="hero-section">
// //           <motion.div
// //             className="hero-content"
// //             initial={{ opacity: 0, y: 50 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 1 }}
// //           >
// //             <h1 className="hero-title">
// //               Welcome to <span className="gradient-text">AstroConnect</span>
// //             </h1>
// //             <p className="hero-subtitle">
// //               Your Gateway to Cosmic Wisdom & Spiritual Growth
// //             </p>
// //             <div className="hero-buttons">
// //               <a href="#about" className="btn-primary">
// //                 Discover More
// //               </a>
// //               <a href="/contact" className="btn-secondary">
// //                 Get Started
// //               </a>
// //             </div>
// //           </motion.div>

// //           {/* 🖼 Hero Image (now dynamic from backend) */}
// //           <motion.div
// //             className="hero-image"
// //             initial={{ opacity: 0, scale: 0.8 }}
// //             animate={{ opacity: 1, scale: 1 }}
// //             transition={{ duration: 1, delay: 0.3 }}
// //           >
// //             <div className="cosmic-circle">
// //               <img src={aboutImage} alt="AstroConnect" />
// //             </div>
// //           </motion.div>
// //         </section>

// //         {/* 🌟 Stats */}
// //         <section className="stats-section">
// //           {stats.map((stat, idx) => (
// //             <motion.div
// //               key={idx}
// //               className="stat-card"
// //               initial={{ opacity: 0, y: 30 }}
// //               whileInView={{ opacity: 1, y: 0 }}
// //               viewport={{ once: true }}
// //               transition={{ delay: idx * 0.1 }}
// //             >
// //               <h3 className="stat-number">{stat.number}</h3>
// //               <p className="stat-label">{stat.label}</p>
// //             </motion.div>
// //           ))}
// //         </section>

// //         {/* 💫 About Section */}
// //         <section id="about" className="about-section">
// //           <motion.div
// //             className="section-header"
// //             initial={{ opacity: 0, y: 30 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             viewport={{ once: true }}
// //           >
// //             <h2 className="section-title">{aboutData.title || "About Us"}</h2>
// //             <p className="section-subtitle">Connecting You with Universal Wisdom</p>
// //           </motion.div>

// //           <div className="about-grid">
// //             <motion.div
// //               className="about-text"
// //               initial={{ opacity: 0, x: -50 }}
// //               whileInView={{ opacity: 1, x: 0 }}
// //               viewport={{ once: true }}
// //               transition={{ duration: 0.8 }}
// //             >
// //               <p
// //                 className="about-description"
// //                 dangerouslySetInnerHTML={{
// //                   __html:
// //                     aboutData.content ||
// //                     "At AstroConnect, we bridge cosmic knowledge with modern life.",
// //                 }}
// //               ></p>
// //             </motion.div>

// //             <motion.div
// //               className="about-visual"
// //               initial={{ opacity: 0, x: 50 }}
// //               whileInView={{ opacity: 1, x: 0 }}
// //               viewport={{ once: true }}
// //               transition={{ duration: 0.8 }}
// //             >
// //               <div className="visual-card">
// //                 <div className="card-glow"></div>
// //                 <img src={aboutImage} alt="Cosmic Connection" className="about-image" />
// //               </div>
// //             </motion.div>
// //           </div>
// //         </section>

// //         {/* 🌠 Features */}
// //         <section className="features-section">
// //           <div className="section-header">
// //             <h2 className="section-title">Our Services</h2>
// //             <p className="section-subtitle">Discover the Tools to Transform Your Life</p>
// //           </div>

// //           <div className="features-grid">
// //             {features.map((feature, idx) => (
// //               <motion.div
// //                 key={idx}
// //                 className="feature-card"
// //                 initial={{ opacity: 0, y: 40 }}
// //                 whileInView={{ opacity: 1, y: 0 }}
// //                 viewport={{ once: true }}
// //                 transition={{ delay: idx * 0.1 }}
// //                 whileHover={{ y: -10, scale: 1.05 }}
// //               >
// //                 <h3 className="feature-title">{feature.title}</h3>
// //                 <p className="feature-desc">{feature.desc}</p>
// //               </motion.div>
// //             ))}
// //           </div>
// //         </section>

// //         {/* 🚀 CTA Section */}
// //         <section className="cta-section">
// //           <motion.div
// //             className="cta-content"
// //             initial={{ opacity: 0, scale: 0.9 }}
// //             whileInView={{ opacity: 1, scale: 1 }}
// //             viewport={{ once: true }}
// //           >
// //             <h2 className="cta-title">Ready to Begin Your Journey?</h2>
// //             <p className="cta-text">
// //               Connect with the cosmos and unlock your true potential today.
// //             </p>
// //             <div className="cta-buttons">
// //               <a href="/astrology" className="btn-cta-primary">
// //                 Explore Services
// //               </a>
// //               <a href="/contact" className="btn-cta-secondary">
// //                 Book Consultation
// //               </a>
// //             </div>
// //           </motion.div>
// //         </section>
// //       </div>
// //     </div>
// //   );
// // };

// // export default AboutUs;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { motion } from "framer-motion";
// import "../styles/AboutUs.css";

// const API_BASE =
//   process.env.REACT_APP_API_URL ||
//   "https://adminastrotalk-1.onrender.com/api";

// const AboutUs = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [aboutData, setAboutData] = useState({
//     title: "About Us",
//     content: "",
//     image: "",
//   });

//   // 🌐 Fetch About Us data (title, content, image)
//   useEffect(() => {
//     const fetchAboutData = async () => {
//       try {
//         const res = await axios.get(`${API_BASE}/about`);
//         if (res.data) setAboutData(res.data);
//       } catch (err) {
//         console.error("Error loading About data:", err);
//       }
//     };
//     fetchAboutData();
//   }, []);

//   // ✨ Starfield Effect
//   useEffect(() => {
//     const starfield = document.getElementById("starfield");
//     if (starfield && !starfield.hasChildNodes()) {
//       for (let i = 0; i < 150; i++) {
//         const star = document.createElement("div");
//         star.className = "star";
//         star.style.top = `${Math.random() * 100}%`;
//         star.style.left = `${Math.random() * 100}%`;
//         star.style.width = `${Math.random() * 2 + 1}px`;
//         star.style.height = star.style.width;
//         star.style.animationDuration = `${Math.random() * 3 + 2}s`;
//         star.style.animationDelay = `${Math.random() * 2}s`;
//         starfield.appendChild(star);
//       }
//     }
//   }, []);

//   // Dynamic Image Handler
//   const aboutImage =
//     aboutData.image && aboutData.image.startsWith("http")
//       ? aboutData.image
//       : aboutData.image && aboutData.image.startsWith("/uploads")
//       ? `${API_BASE.replace("/api", "")}${aboutData.image}`
//       : "https://res.cloudinary.com/doerrm32l/image/upload/v1761893673/astrologo_fjndbn.png";

//   const navLinks = [
//     { name: "Home", link: "/" },
//     { name: "About Us", link: "/about-us" },
//     { name: "Energy", link: "/energy" },
//     { name: "Astrology", link: "/astrology" },
//     { name: "Vastu", link: "/vastu" },
//     { name: "Manifestation", link: "/manifestation" },
//     { name: "Material", link: "/material" },
//     { name: "Blogs", link: "/blogs" },
//     { name: "Careers", link: "/careers" },
//     { name: "Contact", link: "/contact" },
//     { name: "Login / Signup", link: "/auth" },
//   ];

//   const features = [
//     { title: "Astrology", desc: "Personalized birth chart analysis and planetary insights" },
//     { title: "Numerology", desc: "Decode your life path through the power of numbers" },
//     { title: "Vastu Shastra", desc: "Harmonize your space with cosmic energy flow" },
//     { title: "Tarot Reading", desc: "Gain clarity and guidance for life's questions" },
//     { title: "Manifestation", desc: "Attract abundance through universal laws" },
//     { title: "Moon Phases", desc: "Align your actions with lunar cycles" },
//   ];

//   const stats = [
//     { number: "10K+", label: "Happy Clients" },
//     { number: "500+", label: "Consultations" },
//     { number: "50+", label: "Expert Astrologers" },
//     { number: "4.9★", label: "Average Rating" },
//   ];

//   return (
//     <div className="about-us-page">
//       {/* STARFIELD */}
//       <div id="starfield" className="starfield"></div>

//       {/* Floating Orbs */}
//       <div className="floating-orbs">
//         <div className="orb orb-1"></div>
//         <div className="orb orb-2"></div>
//         <div className="orb orb-3"></div>
//       </div>

//       {/* SIDEBAR */}
//       <div className={`sidebar-modern ${sidebarOpen ? "open" : ""}`}>
//         <div className="sidebar-header">
//           <h2 className="sidebar-logo">✨ AstroConnect</h2>
//           <button className="sidebar-close" onClick={() => setSidebarOpen(false)}>
//             ✕
//           </button>
//         </div>

//         <nav className="sidebar-nav">
//           <ul>
//             {navLinks.map((item, idx) => (
//               <motion.li
//                 key={idx}
//                 initial={{ opacity: 0, x: -20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ delay: idx * 0.05 }}
//               >
//                 <a href={item.link} className="sidebar-link">
//                   {item.name}
//                 </a>
//               </motion.li>
//             ))}
//           </ul>
//         </nav>

//         <div className="sidebar-footer">
//           <p>© 2025 AstroConnect</p>
//           <div className="social-links">
//             <a href="#">Facebook</a>
//             <a href="#">Instagram</a>
//             <a href="#">Twitter</a>
//           </div>
//         </div>
//       </div>

//       {/* HAMBURGER MENU */}
//       <button
//         className={`hamburger-menu ${sidebarOpen ? "active" : ""}`}
//         onClick={() => setSidebarOpen(!sidebarOpen)}
//       >
//         <span></span>
//         <span></span>
//         <span></span>
//       </button>

//       {/* MAIN PAGE */}
//       <div className={`about-content ${sidebarOpen ? "sidebar-open" : ""}`}>
//         {/* HERO */}
//         <section className="hero-section">
//           <motion.div
//             className="hero-content"
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1 }}
//           >
//             <h1 className="hero-title">
//               Welcome to <span className="gradient-text">{aboutData.title}</span>
//             </h1>
//             <p className="hero-subtitle">
//               Your Gateway to Cosmic Wisdom & Spiritual Growth
//             </p>
//             <div className="hero-buttons">
//               <a href="#about" className="btn-primary">Discover More</a>
//               <a href="/contact" className="btn-secondary">Get Started</a>
//             </div>
//           </motion.div>

//           <motion.div
//             className="hero-image"
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 1, delay: 0.3 }}
//           >
//             <div className="cosmic-circle">
//               <img src={aboutImage} alt="AstroConnect Visual" />
//             </div>
//           </motion.div>
//         </section>

//         {/* STATS */}
//         <section className="stats-section">
//           {stats.map((stat, idx) => (
//             <motion.div
//               key={idx}
//               className="stat-card"
//               initial={{ opacity: 0, y: 35 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: idx * 0.1 }}
//             >
//               <h3 className="stat-number">{stat.number}</h3>
//               <p className="stat-label">{stat.label}</p>
//             </motion.div>
//           ))}
//         </section>

//         {/* ABOUT SECTION */}
//         <section id="about" className="about-section">
//           <motion.div
//             className="section-header"
//             initial={{ opacity: 0, y: 35 }}
//             whileInView={{ opacity: 1, y: 0 }}
//           >
//             <h2 className="section-title">{aboutData.title}</h2>
//             <p className="section-subtitle">Connecting You with Universal Wisdom</p>
//           </motion.div>

//           <div className="about-grid">
//             <motion.div
//               className="about-text"
//               initial={{ opacity: 0, x: -40 }}
//               whileInView={{ opacity: 1, x: 0 }}
//             >
//               <p
//                 className="about-description"
//                 dangerouslySetInnerHTML={{
//                   __html: aboutData.content || "Loading…",
//                 }}
//               ></p>
//             </motion.div>

//             <motion.div
//               className="about-visual"
//               initial={{ opacity: 0, x: 40 }}
//               whileInView={{ opacity: 1, x: 0 }}
//             >
//               <div className="visual-card">
//                 <div className="card-glow"></div>
//                 <img src={aboutImage} alt="About Visual" className="about-image" />
//               </div>
//             </motion.div>
//           </div>
//         </section>

//         {/* FEATURES */}
//         <section className="features-section">
//           <div className="section-header">
//             <h2 className="section-title">Languages</h2>
//             <p className="section-subtitle">
//               Discover the Tools to Transform Your Life
//             </p>
//           </div>

//           <div className="features-grid">
//             {features.map((f, idx) => (
//               <motion.div
//                 key={idx}
//                 className="feature-card"
//                 initial={{ opacity: 0, y: 40 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 whileHover={{ scale: 1.05 }}
//                 transition={{ delay: idx * 0.1 }}
//               >
//                 <h3 className="feature-title">{f.title}</h3>
//                 <p className="feature-desc">{f.desc}</p>
//               </motion.div>
//             ))}
//           </div>
//         </section>

//         {/* CTA */}
//         <section className="cta-section">
//           <motion.div
//             className="cta-content"
//             initial={{ opacity: 0, scale: 0.9 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//           >
//             <h2 className="cta-title">Ready to Begin Your Journey?</h2>
//             <p className="cta-text">
//               Connect with the cosmos and unlock your true potential today.
//             </p>

//             <div className="cta-buttons">
//               <a href="/astrology" className="btn-cta-primary">Explore Services</a>
//               <a href="/astrology" className="btn-cta-secondary">Book Consultation</a>
//             </div>
//           </motion.div>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default AboutUs;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import "../styles/AboutUs.css";

const API_BASE =
  process.env.REACT_APP_API_URL ||
  "https://adminastrotalk-1.onrender.com/api";

const AboutUs = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [aboutData, setAboutData] = useState({
    title: "About Us",
    content: "",
    image: "",
  });

  /* ---------------- Fetch About ---------------- */
  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        const res = await axios.get(`${API_BASE}/about`);
        if (res.data) setAboutData(res.data);
      } catch (err) {
        console.error("Error loading About data:", err);
      }
    };
    fetchAboutData();
  }, []);

  /* ---------------- Starfield ---------------- */
  useEffect(() => {
    const starfield = document.getElementById("starfield");
    if (starfield && !starfield.hasChildNodes()) {
      for (let i = 0; i < 150; i++) {
        const star = document.createElement("div");
        star.className = "star";
        star.style.top = `${Math.random() * 100}%`;
        star.style.left = `${Math.random() * 100}%`;
        star.style.width = `${Math.random() * 2 + 1}px`;
        star.style.height = star.style.width;
        star.style.animationDuration = `${Math.random() * 3 + 2}s`;
        star.style.animationDelay = `${Math.random() * 2}s`;
        starfield.appendChild(star);
      }
    }
  }, []);

  const aboutImage =
    aboutData.image && aboutData.image.startsWith("http")
      ? aboutData.image
      : aboutData.image && aboutData.image.startsWith("/uploads")
      ? `${API_BASE.replace("/api", "")}${aboutData.image}`
      : "https://res.cloudinary.com/doerrm32l/image/upload/v1761893673/astrologo_fjndbn.png";

  const navLinks = [
    { name: "Home", link: "/" },
    { name: "About Us", link: "/about-us" },
    { name: "Energy", link: "/energy" },
    { name: "Astrology", link: "/astrology" },
    { name: "Vastu", link: "/vastu" },
    { name: "Manifestation", link: "/manifestation" },
    { name: "Material", link: "/material" },
    { name: "Blogs", link: "/blogs" },
    { name: "Careers", link: "/careers" },
    { name: "Contact", link: "/contact" },
    { name: "Login / Signup", link: "/auth" },
  ];

  const features = [
    { title: "Astrology", desc: "Personalized birth chart analysis and planetary insights" },
    { title: "Numerology", desc: "Decode your life path through the power of numbers" },
    { title: "Vastu Shastra", desc: "Harmonize your space with cosmic energy flow" },
    { title: "Tarot Reading", desc: "Gain clarity and guidance for life's questions" },
    { title: "Manifestation", desc: "Attract abundance through universal laws" },
    // { title: "Moon Phases", desc: "Align your actions with lunar cycles" },
  ];

  const stats = [
    { number: "10K+", label: "Happy Clients" },
    { number: "500+", label: "Consultations" },
    { number: "50+", label: "Expert Astrologers" },
    { number: "4.9★", label: "Average Rating" },
  ];

  return (
    <div className="about-us-page">

      {/* -------- Overlay: Close sidebar on outside click -------- */}
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            background: "transparent",
            zIndex: 900,
          }}
        ></div>
      )}

      {/* STARFIELD */}
      <div id="starfield" className="starfield"></div>

      {/* Floating Orbs */}
      <div className="floating-orbs">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
      </div>

      {/* SIDEBAR */}
      <div
        className={`sidebar-modern ${sidebarOpen ? "open" : ""}`}
        onClick={() => setSidebarOpen(false)}   // 🔥 SIDE BAR PAR CLICK → CLOSE
      >
        <div className="sidebar-header">
          <h2 className="sidebar-logo">THE FIFTH CUSP</h2>
        </div>

        <nav className="sidebar-nav">
          <ul>
            {navLinks.map((item, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.05 }}
              >
                <a href={item.link} className="sidebar-link">
                  {item.name}
                </a>
              </motion.li>
            ))}
          </ul>
        </nav>

        <div className="sidebar-footer">
          <p>THE FIFTH CUSP</p>
          <div className="social-links">
            <a href="#">Facebook</a>
            <a href="#">Instagram</a>
            <a href="#">Twitter</a>
          </div>
        </div>
      </div>

      {/* HAMBURGER MENU */}
      <button
  className={`hamburger-menu ${sidebarOpen ? "hide" : ""}`}
  onClick={() => setSidebarOpen(true)}
>

        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* MAIN PAGE */}
      <div className={`about-content ${sidebarOpen ? "sidebar-open" : ""}`}>

        {/* HERO */}
        <section className="hero-section">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="hero-title">
              Welcome to <span className="gradient-text">{aboutData.title}</span>
            </h1>
            <p className="hero-subtitle">
              Your Gateway to Cosmic Wisdom & Spiritual Growth
            </p>
            <div className="hero-buttons">
              <a href="#about" className="btn-primary">Discover More</a>
              <a href="/contact" className="btn-secondary">Get Started</a>
            </div>
          </motion.div>

          <motion.div
            className="hero-image"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="cosmic-circle">
              <img src={aboutImage} alt="AstroConnect Visual" />
            </div>
          </motion.div>
        </section>

        {/* STATS */}
        <section className="stats-section">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              className="stat-card"
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              <h3 className="stat-number">{stat.number}</h3>
              <p className="stat-label">{stat.label}</p>
            </motion.div>
          ))}
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="about-section">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="section-title">{aboutData.title}</h2>
            <p className="section-subtitle">Connecting You with Universal Wisdom</p>
          </motion.div>

          <div className="about-grid">
            <motion.div
              className="about-text"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <p
                className="about-description"
                dangerouslySetInnerHTML={{
                  __html: aboutData.content || "Loading…",
                }}
              ></p>
            </motion.div>

            <motion.div
              className="about-visual"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <div className="visual-card">
                <div className="card-glow"></div>
                <img src={aboutImage} alt="About Visual" className="about-image" />
              </div>
            </motion.div>
          </div>
        </section>

        {/* FEATURES */}
        <section className="features-section">
          <div className="section-header">
            <h2 className="section-title">Languages</h2>
            <p className="section-subtitle">
              Discover the Tools to Transform Your Life
            </p>
          </div>

          <div className="features-grid">
            {features.map((f, idx) => (
              <motion.div
                key={idx}
                className="feature-card"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                transition={{ delay: idx * 0.1 }}
              >
                <h3 className="feature-title">{f.title}</h3>
                <p className="feature-desc">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="cta-section">
          <motion.div
            className="cta-content"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
          >
            <h2 className="cta-title">Ready to Begin Your Journey?</h2>
            <p className="cta-text">
              Connect with the cosmos and unlock your true potential today.
            </p>

            <div className="cta-buttons">
              <a href="/astrology" className="btn-cta-primary">Explore Services</a>
              <a href="/astrology" className="btn-cta-secondary">Book Consultation</a>
            </div>
          </motion.div>
        </section>

      </div>
    </div>
  );
};

export default AboutUs;
