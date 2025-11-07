// // import React, { useState, useRef } from "react";
// // import "../styles/Home.css";

// // const Home = () => {
// //   const [sidebarOpen, setSidebarOpen] = useState(false);
// //   const [activeSection, setActiveSection] = useState("home");
// //   const sliderRef = useRef(null);

// //   const navLinks = [
// //     { name: "Home", link: "#home" },
// //     { name: "About Us", link: "#about-us" },
// //     { name: "Energy", link: "/energy" },
// //     { name: "Movement", link: "/movement" },
// //     { name: "Space Vastu", link: "/space-vastu" },
// //     { name: "Manifestation", link: "/manifestation" },
// //     { name: "Material", link: "/material" },
// //     { name: "Blogs", link: "/blogs" },
// //     { name: "Careers", link: "/careers" },
// //     { name: "Contact", link: "/contact" },
// //     { name: "Login / Signup", link: "/auth" },
// //   ];

// //   const services = [
// //     {
// //       name: "Astrology",
// //       icon: "🔮",
// //       link: "/movement",
// //       desc: "Decode your life's blueprint and uncover what the stars have planned for you.",
// //       gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
// //     },
// //     {
// //       name: "Vastu Shastra",
// //       icon: "🏛️",
// //       link: "/space-vastu",
// //       desc: "Transform your home into a source of harmony and positive energy.",
// //       gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
// //     },
// //     {
// //       name: "Numerology",
// //       icon: "🔢",
// //       link: "/movement?type=numerology",
// //       desc: "Discover your strengths, destiny, and lucky numbers through numerology.",
// //       gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
// //     },
// //     {
// //       name: "Energy Reading",
// //       icon: "⚡",
// //       link: "/energy",
// //       desc: "Understand your aura and unlock the hidden messages of your energy field.",
// //       gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
// //     },
// //     {
// //       name: "Tarot Reading",
// //       icon: "🃏",
// //       link: "/tarot",
// //       desc: "Get intuitive insights and guidance for love, career, and personal growth.",
// //       gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
// //     },
// //     {
// //       name: "Manifestation",
// //       icon: "✨",
// //       link: "/manifestation",
// //       desc: "Turn your dreams into reality by aligning mindset, intention, and energy.",
// //       gradient: "linear-gradient(135deg, #30cfd0 0%, #330867 100%)",
// //     },
// //   ];

// //   const scrollToSection = (id) => {
// //     if (id.startsWith("/")) {
// //       window.location.href = id;
// //       setSidebarOpen(false);
// //       return;
// //     }
// //     const el = document.querySelector(id);
// //     if (el) {
// //       window.scrollTo({ top: el.offsetTop, behavior: "smooth" });
// //       setSidebarOpen(false);
// //     }
// //   };

// //   const scroll = (dir) => {
// //     if (sliderRef.current) sliderRef.current.scrollBy({ left: dir * 300, behavior: "smooth" });
// //   };

// //   const renderStars = (count) =>
// //     Array.from({ length: count }).map((_, i) => (
// //       <div
// //         key={i}
// //         className="star"
// //         style={{
// //           position: "absolute",
// //           top: `${Math.random() * 100}%`,
// //           left: `${Math.random() * 100}%`,
// //           width: `${1 + Math.random() * 2}px`,
// //           height: `${1 + Math.random() * 2}px`,
// //           background: "white",
// //           borderRadius: "50%",
// //           animation: `twinkle ${2 + Math.random() * 3}s infinite`,
// //         }}
// //       ></div>
// //     ));

// //   return (
// //     <div
// //       style={{
// //         fontFamily: "Poppins, sans-serif",
// //         color: "#fff",
// //         background: "linear-gradient(180deg, #1a0033 0%, #0d001a 100%)",
// //         minHeight: "100vh",
// //         overflowX: "hidden",
// //       }}
// //     >
// //       {/* Sidebar */}
// //       <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
// //         <h2>AstroConnect</h2>
// //         <ul>
// //           {navLinks.map((item, idx) => (
// //             <li key={idx}>
// //               <button
// //                 className={activeSection === item.link.replace("#", "") ? "active-link" : ""}
// //                 onClick={() => scrollToSection(item.link)}
// //               >
// //                 {item.name}
// //               </button>
// //             </li>
// //           ))}
// //         </ul>
// //       </div>

// //       {/* Hamburger */}
// //       <button className="sidebar-toggle" onClick={() => setSidebarOpen(!sidebarOpen)}>
// //         ☰
// //       </button>

// //       {/* Content Wrapper */}
// //       <div className={`home-wrapper ${sidebarOpen ? "shifted" : ""}`}>
// //         {/* Hero Section */}
// //         <section className="hero" id="home">
// //           <div className="stars-container">{renderStars(50)}</div>
// //           <div className="hero-overlay">
// //             <h1>Your Destiny Is Written In The Stars ✨</h1>
// //             <p>Explore the mysteries of life through astrology, tarot, and energy.</p>
// //             <a href="/book" className="hero-btn">
// //               Book Your Reading
// //             </a>
// //           </div>
// //         </section>

// //         {/* Services Section */}
// //         <section id="services" className="home-section services">
// //           <h2>Our Core Services</h2>
// //           <p className="services-subtitle">Explore cosmic wisdom through our transformative offerings</p>

// //           <div className="modern-services-grid">
// //             {services.map((service, idx) => (
// //               <a key={idx} href={service.link} className="modern-service-card">
// //                 <div className="card-icon-wrapper" style={{ background: service.gradient }}>
// //                   <span className="card-icon">{service.icon}</span>
// //                 </div>
// //                 <h3>{service.name}</h3>
// //                 <p>{service.desc}</p>
// //                 <div className="card-arrow">→</div>
// //               </a>
// //             ))}
// //           </div>
// //         </section>

// //         {/* About Us Section */}
// //         <section id="about-us" className="home-section about-us">
// //           <div className="about-bg-glow"></div>

// //           <div className="about-inner">
// //             <div className="about-left">
// //               <img
// //                 src="https://res.cloudinary.com/doerrm32l/image/upload/v1761893673/astrologo_fjndbn.png"
// //                 alt="AstroConnect Logo"
// //                 className="about-logo"
// //               />
// //             </div>

// //             <div className="about-right">
// //               <h2>
// //                 About <span>AstroConnect</span>
// //               </h2>
// //               <p>
// //                 At <span className="highlight">AstroConnect</span>, we combine the timeless wisdom of astrology, numerology, vastu, and tarot to guide you toward{" "}
// //                 <b> balance, awareness, and transformation.</b>
// //               </p>
// //               <p>
// //                 Our mission is to help you realign your <span className="highlight">energy</span> with the universe's flow, unlocking clarity, success, and inner harmony through personalized cosmic insights.
// //               </p>
// //               <a href="#about-us" className="about-btn">
// //                 Discover More →
// //               </a>
// //             </div>
// //           </div>
// //         </section>

// //         {/* Careers Section */}
// //         <section id="careers" className="home-section careers">
// //           <div className="careers-content">
// //             <h2>Join Our Cosmic Team ✨</h2>
// //             <p>
// //               Become a part of <span className="highlight">AstroConnect</span> — where we decode the stars, align energies, and help people find balance in love, career, and destiny.
// //             </p>

// //             <div className="career-roles">
// //               <div className="career-card">
// //                 <h3>🔮 Astrologer</h3>
// //                 <p>Guide people through their life's blueprint using planetary wisdom.</p>
// //               </div>
// //               <div className="career-card">
// //                 <h3>🃏 Tarot Reader</h3>
// //                 <p>Offer intuitive readings to uncover truth and direction.</p>
// //               </div>
// //               <div className="career-card">
// //                 <h3>📚 Research Intern</h3>
// //                 <p>Explore Vedic texts, numerology, and spiritual energy systems.</p>
// //               </div>
// //             </div>

// //             <a href="/careers" className="career-btn">
// //               Explore Opportunities →
// //             </a>
// //           </div>
// //         </section>

// //         {/* Embedded Google Map */}
// //         <iframe
// //           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d109744.22709337159!2d76.68831211131682!3d30.732254422042963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fed0be66ec96b%3A0xa5ff67f9527319fe!2sChandigarh!5e0!3m2!1sen!2sin!4v1762322131272!5m2!1sen!2sin"
// //           allowFullScreen
// //           loading="lazy"
// //           title="Chandigarh Location"
// //           style={{ width: "100%", height: "380px", border: 0, marginTop: "2rem", borderRadius: "18px" }}
// //         />
// //       </div>
// //     </div>
// //   );
// // };

// // export default Home;

// import React, { useState, useRef } from "react";
// import "../styles/Home.css";

// const Home = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [activeSection, setActiveSection] = useState("home");
//   const sliderRef = useRef(null);

//   const navLinks = [
//     { name: "Home", link: "#home", icon: "🏠" },
//     { name: "About Us", link: "#about-us", icon: "✨" },
//     { name: "Energy", link: "/energy", icon: "⚡" },
//     { name: "Movement", link: "/movement", icon: "🌊" },
//     { name: "Space Vastu", link: "/space-vastu", icon: "🏛️" },
//     { name: "Manifestation", link: "/manifestation", icon: "💫" },
//     { name: "Material", link: "/material", icon: "💎" },
//     { name: "Blogs", link: "/blogs", icon: "📝" },
//     { name: "Careers", link: "/careers", icon: "💼" },
//     { name: "Contact", link: "/contact", icon: "📧" },
//     { name: "Login / Signup", link: "/auth", icon: "🔐" },
//   ];

//   const services = [
//     {
//       name: "Astrology",
//       icon: "🔮",
//       link: "/movement",
//       desc: "Decode your life's blueprint and uncover what the stars have planned for you.",
//       gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
//     },
//     {
//       name: "Vastu Shastra",
//       icon: "🏛️",
//       link: "/space-vastu",
//       desc: "Transform your home into a source of harmony and positive energy.",
//       gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
//     },
//     {
//       name: "Numerology",
//       icon: "🔢",
//       link: "/movement?type=numerology",
//       desc: "Discover your strengths, destiny, and lucky numbers through numerology.",
//       gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
//     },
//     {
//       name: "Energy Reading",
//       icon: "⚡",
//       link: "/energy",
//       desc: "Understand your aura and unlock the hidden messages of your energy field.",
//       gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
//     },
//     {
//       name: "Tarot Reading",
//       icon: "🃏",
//       link: "/tarotreading",
//       desc: "Get intuitive insights and guidance for love, career, and personal growth.",
//       gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
//      },
//     {
//       name: "Manifestation",
//       icon: "✨",
//       link: "/manifestation",
//       desc: "Turn your dreams into reality by aligning mindset, intention, and energy.",
//       gradient: "linear-gradient(135deg, #30cfd0 0%, #330867 100%)",
//     },
//   ];

//   const scrollToSection = (id) => {
//     if (id.startsWith("/")) {
//       window.location.href = id;
//       setSidebarOpen(false);
//       return;
//     }
//     const el = document.querySelector(id);
//     if (el) {
//       window.scrollTo({ top: el.offsetTop, behavior: "smooth" });
//       setSidebarOpen(false);
//       setActiveSection(id.replace("#", ""));
//     }
//   };

//   const scroll = (dir) => {
//     if (sliderRef.current) sliderRef.current.scrollBy({ left: dir * 300, behavior: "smooth" });
//   };

//   const renderStars = (count) =>
//     Array.from({ length: count }).map((_, i) => (
//       <div
//         key={i}
//         className="star"
//         style={{
//           position: "absolute",
//           top: `${Math.random() * 100}%`,
//           left: `${Math.random() * 100}%`,
//           width: `${1 + Math.random() * 2}px`,
//           height: `${1 + Math.random() * 2}px`,
//           background: "white",
//           borderRadius: "50%",
//           animation: `twinkle ${2 + Math.random() * 3}s infinite`,
//         }}
//       ></div>
//     ));

//   return (
//     <div
//       style={{
//         fontFamily: "Poppins, sans-serif",
//         color: "#fff",
//         background: "linear-gradient(180deg, #1a0033 0%, #0d001a 100%)",
//         minHeight: "100vh",
//         overflowX: "hidden",
//       }}
//     >
//       {/* Sidebar */}
//       <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
//         <h2>AstroConnect</h2>
//         <ul>
//           {navLinks.map((item, idx) => (
//             <li key={idx}>
//               <button
//                 className={activeSection === item.link.replace("#", "") ? "active-link" : ""}
//                 onClick={() => scrollToSection(item.link)}
//                 style={{ display: "flex", alignItems: "center", gap: "10px" }}
//               >
//                 <span style={{ fontSize: "1.4rem" }}>{item.icon}</span>
//                 {item.name}
//               </button>
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Hamburger */}
//       <button className="sidebar-toggle" onClick={() => setSidebarOpen(!sidebarOpen)}>
//         ☰
//       </button>

//       {/* Content Wrapper */}
//       <div className={`home-wrapper ${sidebarOpen ? "shifted" : ""}`}>
//         {/* Hero Section */}
//         <section className="hero" id="home">
//           <div className="stars-container">{renderStars(50)}</div>
//           <div className="hero-overlay">
//             <h1>Your Destiny Is Written In The Stars ✨</h1>
//             <p>Explore the mysteries of life through astrology, tarot, and energy.</p>
//             <a href="/book" className="hero-btn">
//               Book Your Reading
//             </a>
//           </div>
//         </section>

//         {/* Services Section */}
//         <section id="services" className="home-section services">
//           <h2>Our Core Services</h2>
//           <p className="services-subtitle">Explore cosmic wisdom through our transformative offerings</p>

//           <div className="modern-services-grid">
//             {services.map((service, idx) => (
//               <a key={idx} href={service.link} className="modern-service-card">
//                 <div className="card-icon-wrapper" style={{ background: service.gradient }}>
//                   <span className="card-icon">{service.icon}</span>
//                 </div>
//                 <h3>{service.name}</h3>
//                 <p>{service.desc}</p>
//                 <div className="card-arrow">→</div>
//               </a>
//             ))}
//           </div>
//         </section>

//         {/* About Us Section */}
//         <section id="about-us" className="home-section about-us">
//           <div className="about-bg-glow"></div>
//           <div className="about-inner">
//             <div className="about-left">
//               <img
//                 src="https://res.cloudinary.com/doerrm32l/image/upload/v1761893673/astrologo_fjndbn.png"
//                 alt="AstroConnect Logo"
//                 className="about-logo"
//               />
//             </div>
//             <div className="about-right">
//               <h2>
//                 About <span>AstroConnect</span>
//               </h2>
//               <p>
//                 At <span className="highlight">AstroConnect</span>, we combine the timeless wisdom of astrology, numerology, vastu, and tarot to guide you toward{" "}
//                 <b> balance, awareness, and transformation.</b>
//               </p>
//               <p>
//                 Our mission is to help you realign your <span className="highlight">energy</span> with the universe's flow, unlocking clarity, success, and inner harmony through personalized cosmic insights.
//               </p>
//               <a href="#about-us" className="about-btn">
//                 Discover More →
//               </a>
//             </div>
//           </div>
//         </section>

//         {/* Careers Section */}
//         <section id="careers" className="home-section careers">
//           <div className="careers-content">
//             <h2>Join Our Cosmic Team ✨</h2>
//             <p>
//               Become a part of <span className="highlight">AstroConnect</span> — where we decode the stars, align energies, and help people find balance in love, career, and destiny.
//             </p>
//             <div className="career-roles">
//               <div className="career-card">
//                 <h3>🔮 Astrologer</h3>
//                 <p>Guide people through their life's blueprint using planetary wisdom.</p>
//               </div>
//               <div className="career-card">
//                 <h3>🃏 Tarot Reader</h3>
//                 <p>Offer intuitive readings to uncover truth and direction.</p>
//               </div>
//               <div className="career-card">
//                 <h3>📚 Research Intern</h3>
//                 <p>Explore Vedic texts, numerology, and spiritual energy systems.</p>
//               </div>
//             </div>
//             <a href="/careers" className="career-btn">
//               Explore Opportunities →
//             </a>
//           </div>
//         </section>

//         {/* Embedded Google Map */}
//         <iframe
//           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d109744.22709337159!2d76.68831211131682!3d30.732254422042963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fed0be66ec96b%3A0xa5ff67f9527319fe!2sChandigarh!5e0!3m2!1sen!2sin!4v1762322131272!5m2!1sen!2sin"
//           allowFullScreen
//           loading="lazy"
//           title="Chandigarh Location"
//           style={{ width: "100%", height: "380px", border: 0, marginTop: "2rem", borderRadius: "18px" }}
//         />
//       </div>
//     </div>
//   );
// };

// export default Home;

import React, { useState, useRef } from "react";
import "../styles/Home.css";

const Home = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const sliderRef = useRef(null);

  const navLinks = [
    { name: "Home", link: "#home", icon: "🏠" },
    { name: "About Us", link: "#about-us", icon: "✨" },
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

  const services = [
    {
      name: "Astrology",
      icon: "🔮",
      link: "/movement",
      desc: "Decode your life's blueprint and uncover what the stars have planned for you.",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    },
    {
      name: "Vastu Shastra",
      icon: "🏛️",
      link: "/space-vastu",
      desc: "Transform your home into a source of harmony and positive energy.",
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    },
    {
      name: "Numerology",
      icon: "🔢",
      link: "/movement?type=numerology",
      desc: "Discover your strengths, destiny, and lucky numbers through numerology.",
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    },
    {
      name: "Energy Reading",
      icon: "⚡",
      link: "/energy",
      desc: "Understand your aura and unlock the hidden messages of your energy field.",
      gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
    },
    {
      name: "Tarot Reading",
      icon: "🃏",
      link: "/tarotreading",
      desc: "Get intuitive insights and guidance for love, career, and personal growth.",
      gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
    },
    {
      name: "Manifestation",
      icon: "✨",
      link: "/manifestation",
      desc: "Turn your dreams into reality by aligning mindset, intention, and energy.",
      gradient: "linear-gradient(135deg, #30cfd0 0%, #330867 100%)",
    },
  ];

  const scrollToSection = (id) => {
    if (id.startsWith("/")) {
      window.location.href = id;
      setSidebarOpen(false);
      return;
    }
    const el = document.querySelector(id);
    if (el) {
      window.scrollTo({ top: el.offsetTop, behavior: "smooth" });
      setSidebarOpen(false);
      setActiveSection(id.replace("#", ""));
    }
  };

  const renderStars = (count) =>
    Array.from({ length: count }).map((_, i) => (
      <div
        key={i}
        className="star"
        style={{
          position: "absolute",
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          width: `${1 + Math.random() * 2}px`,
          height: `${1 + Math.random() * 2}px`,
          background: "white",
          borderRadius: "50%",
          animation: `twinkle ${2 + Math.random() * 3}s infinite`,
        }}
      ></div>
    ));

  return (
    <div
      style={{
        fontFamily: "Poppins, sans-serif",
        color: "#fff",
        background: "linear-gradient(180deg, #1a0033 0%, #0d001a 100%)",
        minHeight: "100vh",
        overflowX: "hidden",
      }}
    >
      {/* === Sidebar === */}
      <div
        className={`sidebar ${sidebarOpen ? "open" : ""}`}
        style={{
          position: "fixed",
          top: 0,
          left: sidebarOpen ? 0 : "-270px",
          width: "270px",
          height: "100vh",
          background: "linear-gradient(180deg, rgba(20,0,40,0.95), rgba(5,0,20,0.9))",
          backdropFilter: "blur(14px)",
          boxShadow: "6px 0 25px rgba(255, 0, 255, 0.25)",
          transition: "left 0.5s ease-in-out",
          zIndex: 1000,
          padding: "30px 20px",
        }}
      >
        {/* ✕ Close Button */}
        {sidebarOpen && (
          <button
            onClick={() => setSidebarOpen(false)}
            style={{
              position: "absolute",
              top: "18px",
              right: "18px",
              background: "linear-gradient(135deg, #ff00ff, #8a2be2)",
              border: "none",
              color: "#fff",
              fontSize: "20px",
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              cursor: "pointer",
              boxShadow: "0 0 15px rgba(255, 0, 255, 0.4)",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1) rotate(90deg)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1) rotate(0deg)")}
          >
            ✕
          </button>
        )}

        <h2
          style={{
            fontSize: "28px",
            fontWeight: 700,
            textAlign: "center",
            background: "linear-gradient(90deg, #ff00ff, #00ffff)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            marginBottom: "35px",
          }}
        >
          ✨ AstroConnect
        </h2>
        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {navLinks.map((item, idx) => (
            <li key={idx} style={{ margin: "14px 0" }}>
              <a
                href={item.link}
                onClick={() => setSidebarOpen(false)}
                style={{
                  color: "#ccc",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  padding: "12px 18px",
                  borderRadius: "10px",
                  textDecoration: "none",
                  fontSize: "1rem",
                  fontWeight: 500,
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = "#fff";
                  e.target.style.background = "rgba(255,255,255,0.1)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = "#ccc";
                  e.target.style.background = "transparent";
                }}
              >
                <span style={{ fontSize: "1.4rem" }}>{item.icon}</span>
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* ☰ Hamburger */}
      {!sidebarOpen && (
        <button
          onClick={() => setSidebarOpen(true)}
          style={{
            position: "fixed",
            top: "22px",
            left: "25px",
            background: "linear-gradient(135deg, #ff00ff, #7b2cbf)",
            color: "#fff",
            border: "none",
            fontSize: "26px",
            borderRadius: "50%",
            width: "55px",
            height: "55px",
            cursor: "pointer",
            zIndex: 1100,
            boxShadow: "0 0 25px rgba(255, 0, 255, 0.4)",
            transition: "all 0.3s ease-in-out",
          }}
        >
          ☰
        </button>
      )}

      {/* === Main Content === */}
      <div
        className={`home-wrapper ${sidebarOpen ? "shifted" : ""}`}
        style={{
          marginLeft: sidebarOpen ? "270px" : "0",
          transition: "margin-left 0.5s ease",
        }}
      >
        {/* Hero Section */}
        <section className="hero" id="home">
          <div className="stars-container">{renderStars(50)}</div>
          <div className="hero-overlay">
            <h1>Your Destiny Is Written In The Stars ✨</h1>
            <p>Explore the mysteries of life through astrology, tarot, and energy.</p>
            <a href="/book" className="hero-btn">
              Book Your Reading
            </a>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="home-section services">
          <h2>Our Core Services</h2>
          <p className="services-subtitle">
            Explore cosmic wisdom through our transformative offerings
          </p>
          <div className="modern-services-grid">
            {services.map((service, idx) => (
              <a key={idx} href={service.link} className="modern-service-card">
                <div className="card-icon-wrapper" style={{ background: service.gradient }}>
                  <span className="card-icon">{service.icon}</span>
                </div>
                <h3>{service.name}</h3>
                <p>{service.desc}</p>
                <div className="card-arrow">→</div>
              </a>
            ))}
          </div>
        </section>

        {/* About Section */}
        <section id="about-us" className="home-section about-us">
          <div className="about-bg-glow"></div>
          <div className="about-inner">
            <div className="about-left">
              <img
                src="https://res.cloudinary.com/doerrm32l/image/upload/v1761893673/astrologo_fjndbn.png"
                alt="AstroConnect Logo"
                className="about-logo"
              />
            </div>
            <div className="about-right">
              <h2>
                About <span>AstroConnect</span>
              </h2>
              <p>
                At <span className="highlight">AstroConnect</span>, we combine the timeless wisdom of astrology, numerology, vastu, and tarot to guide you toward{" "}
                <b>balance, awareness, and transformation.</b>
              </p>
              <p>
                Our mission is to help you realign your <span className="highlight">energy</span> with the universe's flow, unlocking clarity, success, and inner harmony through personalized cosmic insights.
              </p>
              <a href="#about-us" className="about-btn">
                Discover More →
              </a>
            </div>
          </div>
        </section>

        {/* Careers */}
        <section id="careers" className="home-section careers">
          <div className="careers-content">
            <h2>Join Our Cosmic Team ✨</h2>
            <p>
              Become a part of <span className="highlight">AstroConnect</span> — where we decode the stars, align energies, and help people find balance in love, career, and destiny.
            </p>
            <div className="career-roles">
              <div className="career-card">
                <h3>🔮 Astrologer</h3>
                <p>Guide people through their life's blueprint using planetary wisdom.</p>
              </div>
              <div className="career-card">
                <h3>🃏 Tarot Reader</h3>
                <p>Offer intuitive readings to uncover truth and direction.</p>
              </div>
              <div className="career-card">
                <h3>📚 Research Intern</h3>
                <p>Explore Vedic texts, numerology, and spiritual energy systems.</p>
              </div>
            </div>
            <a href="/careers" className="career-btn">
              Explore Opportunities →
            </a>
          </div>
        </section>

        {/* Map */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d109744.22709337159!2d76.68831211131682!3d30.732254422042963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fed0be66ec96b%3A0xa5ff67f9527319fe!2sChandigarh!5e0!3m2!1sen!2sin!4v1762322131272!5m2!1sen!2sin"
          allowFullScreen
          loading="lazy"
          title="Chandigarh Location"
          style={{
            width: "100%",
            height: "380px",
            border: 0,
            marginTop: "2rem",
            borderRadius: "18px",
          }}
        />
      </div>
    </div>
  );
};

export default Home;


