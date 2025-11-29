// import React, { useState, useRef } from "react";
// import "../styles/Home.css";

// const Home = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const sliderRef = useRef(null);

//   // const navLinks = [
//   //   { name: "Home", link: "#home", icon: "🏠" },
//   //   { name: "About Us", link: "#about-us", icon: "✨" },
//   //   { name: "Energy", link: "/energy", icon: "⚡" },
//   //   { name: "Movement", link: "/movement", icon: "🌊" },
//   //   { name: "Space Vastu", link: "/space-vastu", icon: "🏛️" },
//   //   { name: "Manifestation", link: "/manifestation", icon: "💫" },
//   //   { name: "Material", link: "/material", icon: "💎" },
//   //   { name: "Blogs", link: "/blogs", icon: "📝" },
//   //   { name: "Careers", link: "#careers", icon: "💼" },
//   //   { name: "Contact", link: "/contact", icon: "📧" },
//   //   { name: "Login / Signup", link: "/auth", icon: "🔐" },
//   // ];

//   const navLinks = [
//     { name: "Home", link: "/" },
//     { name: "About Us", link: "/about-us" },
//     { name: "Energy", link: "/energy" },
//     { name: "Astrology", link: "/Astrology" },
//     { name: "Vastu", link: "/vastu" },
//     { name: "Manifestation", link: "/manifestation" },
//     { name: "Material", link: "/material" },
//     { name: "Blogs", link: "/blogs" },
//     { name: "Careers", link: "/careers" },
//     { name: "Contact", link: "/contact" },
//     { name: "Login / Signup", link: "/auth" },
//   ];
//   const services = [
//     {
//       name: "Astrology",
//       link: "/astrology",
//       desc: "Decode your life's blueprint and uncover what the stars have planned for you.",
//       gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
//     },
//     {
//       name: "Vastu Shastra",
//       link: "/vastu",
//       desc: "Transform your home into a source of harmony and positive energy.",
//       gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
//     },
//     {
//       name: "Numerology",
//       link: "/astrology?type=numerology",
//       desc: "Discover your strengths, destiny, and lucky numbers through numerology.",
//       gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
//     },
//     {
//       name: "Energy Reading",
//       link: "/energy",
//       desc: "Understand your aura and unlock the hidden messages of your energy field.",
//       gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
//     },
//     {
//       name: "Tarot Reading",
//       link: "/tarotreading",
//       desc: "Get intuitive insights and guidance for love, career, and personal growth.",
//       gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
//     },
//     {
//       name: "Manifestation",
//       link: "/manifestation",
//       desc: "Turn your dreams into reality by aligning mindset, intention, and energy.",
//       gradient: "linear-gradient(135deg, #30cfd0 0%, #330867 100%)",
//     },
//   ];

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
//       <div
//         className={`sidebar ${sidebarOpen ? "open" : ""}`}
//         style={{
//           position: "fixed",
//           top: 0,
//           left: sidebarOpen ? 0 : "-270px",
//           width: "270px",
//           height: "100vh",
//           background: "linear-gradient(180deg, rgba(20,0,40,0.95), rgba(5,0,20,0.9))",
//           backdropFilter: "blur(14px)",
//           boxShadow: "6px 0 25px rgba(255, 0, 255, 0.25)",
//           transition: "left 0.5s ease-in-out",
//           zIndex: 1000,
//           padding: "30px 20px",
//         }}
//       >
//         {sidebarOpen && (
//           <button
//             onClick={() => setSidebarOpen(false)}
//             style={{
//               position: "absolute",
//               top: "18px",
//               right: "18px",
//               background: "linear-gradient(135deg, #ff00ff, #8a2be2)",
//               border: "none",
//               color: "#fff",
//               fontSize: "20px",
//               width: "40px",
//               height: "40px",
//               borderRadius: "50%",
//               cursor: "pointer",
//               boxShadow: "0 0 15px rgba(255, 0, 255, 0.4)",
//             }}
//           >
//             ✕
//           </button>
//         )}
//         <h2
//           style={{
//             fontSize: "28px",
//             fontWeight: 700,
//             textAlign: "center",
//             background: "linear-gradient(90deg, #ff00ff, #00ffff)",
//             WebkitBackgroundClip: "text",
//             WebkitTextFillColor: "transparent",
//             marginBottom: "35px",
//           }}
//         >
//           ✨ AstroConnect
//         </h2>
//         <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
//           {navLinks.map((item, idx) => (
//             <li key={idx} style={{ margin: "14px 0" }}>
//               <a
//                 href={item.link}
//                 onClick={() => setSidebarOpen(false)}
//                 style={{
//                   color: "#ccc",
//                   display: "flex",
//                   alignItems: "center",
//                   gap: "10px",
//                   padding: "12px 18px",
//                   borderRadius: "10px",
//                   textDecoration: "none",
//                   fontSize: "1rem",
//                   fontWeight: 500,
//                   transition: "all 0.3s ease",
//                 }}
//               >
//                 <span style={{ fontSize: "1.4rem" }}>{item.icon}</span>
//                 {item.name}
//               </a>
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Hamburger */}
//       {!sidebarOpen && (
//         <button
//           onClick={() => setSidebarOpen(true)}
//           style={{
//             position: "fixed",
//             top: "22px",
//             left: "25px",
//             background: "linear-gradient(135deg, #ff00ff, #7b2cbf)",
//             color: "#fff",
//             border: "none",
//             fontSize: "26px",
//             borderRadius: "50%",
//             width: "55px",
//             height: "55px",
//             cursor: "pointer",
//             zIndex: 1100,
//             boxShadow: "0 0 25px rgba(255, 0, 255, 0.4)",
//           }}
//         >
//           ☰
//         </button>
//       )}

//       {/* Main Content */}
//       <div
//         className={`home-wrapper ${sidebarOpen ? "shifted" : ""}`}
//         style={{
//           marginLeft: sidebarOpen ? "270px" : "0",
//           transition: "margin-left 0.5s ease",
//         }}
//       >
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
//           <p className="services-subtitle">
//             Explore cosmic wisdom through our transformative offerings
//           </p>
//           <div className="modern-services-grid">
//             {services.map((service, idx) => (
//               <a key={idx} href={service.link} className="modern-service-card">
//                 <div className="card-icon-wrapper" style={{ background: service.gradient }}></div>
//                 <h3>{service.name}</h3>
//                 <p>{service.desc}</p>
//                 <div className="card-arrow">→</div>
//               </a>
//             ))}
//           </div>
//         </section>

//         {/* About Section */}
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
//                 At <span className="highlight">AstroConnect</span>, we combine the timeless wisdom of astrology,
//                 numerology, vastu, and tarot to guide you toward <b>balance, awareness, and transformation.</b>
//               </p>
//               <p>
//                 Our mission is to help you realign your <span className="highlight">energy</span> with the universe's
//                 flow, unlocking clarity, success, and inner harmony through personalized cosmic insights.
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
//               Become a part of <span className="highlight">AstroConnect</span> — where we decode the stars, align energies,
//               and help people find balance in love, career, and destiny.
//             </p>
//             <div className="career-roles">
//               <div className="career-card">
//                 {/* <h3>🔮 Astrologer</h3> */}
//                 <h3> Astrologer</h3>
//                 <p>Guide people through their life's blueprint using planetary wisdom.</p>
//               </div>
//               <div className="career-card">
//                 {/* <h3>🃏 Tarot Reader</h3> */}
//                  <h3> Tarot Reader</h3>
//                 <p>Offer intuitive readings to uncover truth and direction.</p>
//               </div>
//               <div className="career-card">
//                 {/* <h3>📚 Research Intern</h3> */}
//                 <h3> Research Intern</h3>
//                 <p>Explore Vedic texts, numerology, and spiritual energy systems.</p>
//               </div>
//             </div>
//             <a href="/careers" className="career-btn">
//               Explore Opportunities →
//             </a>
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default Home;


// import React, { useState, useEffect, useRef } from "react";
// import axios from "axios";
// import "../styles/Home.css";

// const API_BASE = process.env.REACT_APP_API_URL || "https://adminastrotalk-1.onrender.com/api";

// const Home = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const sliderRef = useRef(null);
//   const [aboutData, setAboutData] = useState({
//     title: "About Us",
//     content: "",
//     image: "",
//   });

//   // 🌐 Fetch About Us content from backend
//   useEffect(() => {
//     const fetchAboutData = async () => {
//       try {
//         const res = await axios.get(`${API_BASE}/about`);
//         if (res.data) setAboutData(res.data);
//       } catch (err) {
//         console.error("❌ Error fetching About data:", err.message);
//       }
//     };
//     fetchAboutData();
//   }, []);

//   const navLinks = [
//     { name: "Home", link: "/" },
//     { name: "About Us", link: "/about-us" },
//     { name: "Energy", link: "/energy" },
//     { name: "Astrology", link: "/Astrology" },
//     { name: "Vastu", link: "/vastu" },
//     { name: "Manifestation", link: "/manifestation" },
//     { name: "Material", link: "/material" },
//     { name: "Blogs", link: "/blogs" },
//     { name: "Careers", link: "/careers" },
//     { name: "Contact", link: "/contact" },
//     { name: "Login / Signup", link: "/auth" },
//   ];

//   const services = [
//     {
//       name: "Astrology",
//       link: "/astrology",
//       desc: "Decode your life's blueprint and uncover what the stars have planned for you.",
//       gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
//     },
//     {
//       name: "Vastu Shastra",
//       link: "/vastu",
//       desc: "Transform your home into a source of harmony and positive energy.",
//       gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
//     },
//     {
//       name: "Numerology",
//       link: "/astrology?type=numerology",
//       desc: "Discover your strengths, destiny, and lucky numbers through numerology.",
//       gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
//     },
//     {
//       name: "Energy Reading",
//       link: "/energy",
//       desc: "Understand your aura and unlock the hidden messages of your energy field.",
//       gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
//     },
//     {
//       name: "Tarot Reading",
//       link: "/tarotreading",
//       desc: "Get intuitive insights and guidance for love, career, and personal growth.",
//       gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
//     },
//     {
//       name: "Manifestation",
//       link: "/manifestation",
//       desc: "Turn your dreams into reality by aligning mindset, intention, and energy.",
//       gradient: "linear-gradient(135deg, #30cfd0 0%, #330867 100%)",
//     },
//   ];

//   // 🌌 About Us Image Handler
//   const aboutImage =
//     aboutData.image && aboutData.image.startsWith("/uploads")
//       ? `${API_BASE.replace("/api", "")}${aboutData.image}`
//       : "https://res.cloudinary.com/doerrm32l/image/upload/v1761893673/astrologo_fjndbn.png";

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
//       <div
//         className={`sidebar ${sidebarOpen ? "open" : ""}`}
//         style={{
//           position: "fixed",
//           top: 0,
//           left: sidebarOpen ? 0 : "-270px",
//           width: "270px",
//           height: "100vh",
//           background: "linear-gradient(180deg, rgba(20,0,40,0.95), rgba(5,0,20,0.9))",
//           backdropFilter: "blur(14px)",
//           boxShadow: "6px 0 25px rgba(255, 0, 255, 0.25)",
//           transition: "left 0.5s ease-in-out",
//           zIndex: 1000,
//           padding: "30px 20px",
//         }}
//       >
//         {sidebarOpen && (
//           <button
//             onClick={() => setSidebarOpen(false)}
//             style={{
//               position: "absolute",
//               top: "18px",
//               right: "18px",
//               background: "linear-gradient(135deg, #ff00ff, #8a2be2)",
//               border: "none",
//               color: "#fff",
//               fontSize: "20px",
//               width: "40px",
//               height: "40px",
//               borderRadius: "50%",
//               cursor: "pointer",
//               boxShadow: "0 0 15px rgba(255, 0, 255, 0.4)",
//             }}
//           >
//             ✕
//           </button>
//         )}
//         <h2
//           style={{
//             fontSize: "28px",
//             fontWeight: 700,
//             textAlign: "center",
//             background: "linear-gradient(90deg, #ff00ff, #00ffff)",
//             WebkitBackgroundClip: "text",
//             WebkitTextFillColor: "transparent",
//             marginBottom: "35px",
//           }}
//         >
//           ✨ AstroConnect
//         </h2>
//         <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
//           {navLinks.map((item, idx) => (
//             <li key={idx} style={{ margin: "14px 0" }}>
//               <a
//                 href={item.link}
//                 onClick={() => setSidebarOpen(false)}
//                 style={{
//                   color: "#ccc",
//                   display: "flex",
//                   alignItems: "center",
//                   gap: "10px",
//                   padding: "12px 18px",
//                   borderRadius: "10px",
//                   textDecoration: "none",
//                   fontSize: "1rem",
//                   fontWeight: 500,
//                   transition: "all 0.3s ease",
//                 }}
//               >
//                 {item.name}
//               </a>
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Hamburger */}
//       {!sidebarOpen && (
//         <button
//           onClick={() => setSidebarOpen(true)}
//           style={{
//             position: "fixed",
//             top: "22px",
//             left: "25px",
//             background: "linear-gradient(135deg, #ff00ff, #7b2cbf)",
//             color: "#fff",
//             border: "none",
//             fontSize: "26px",
//             borderRadius: "50%",
//             width: "55px",
//             height: "55px",
//             cursor: "pointer",
//             zIndex: 1100,
//             boxShadow: "0 0 25px rgba(255, 0, 255, 0.4)",
//           }}
//         >
//           ☰
//         </button>
//       )}

//       {/* Main Content */}
//       <div
//         className={`home-wrapper ${sidebarOpen ? "shifted" : ""}`}
//         style={{
//           marginLeft: sidebarOpen ? "270px" : "0",
//           transition: "margin-left 0.5s ease",
//         }}
//       >
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
//           <p className="services-subtitle">
//             Explore cosmic wisdom through our transformative offerings
//           </p>
//           <div className="modern-services-grid">
//             {services.map((service, idx) => (
//               <a key={idx} href={service.link} className="modern-service-card">
//                 <div className="card-icon-wrapper" style={{ background: service.gradient }}></div>
//                 <h3>{service.name}</h3>
//                 <p>{service.desc}</p>
//                 <div className="card-arrow">→</div>
//               </a>
//             ))}
//           </div>
//         </section>

//         {/* 🔮 About Section (Dynamic from API) */}
//         <section id="about-us" className="home-section about-us">
//           <div className="about-bg-glow"></div>
//           <div className="about-inner">
//             <div className="about-left">
//               <img
//                 src={aboutImage}
//                 alt="AstroConnect"
//                 className="about-logo"
//               />
//             </div>
//             <div className="about-right">
//               <h2>
//                 {aboutData.title || "About"} <span>AstroConnect</span>
//               </h2>
//               <p
//                 dangerouslySetInnerHTML={{
//                   __html:
//                     aboutData.content ||
//                     "At AstroConnect, we combine astrology, vastu, and energy sciences to bring harmony and insight.",
//                 }}
//               ></p>
//               <a href="/about-us" className="about-btn">
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
//               Become a part of <span className="highlight">AstroConnect</span> — where we decode the stars, align energies,
//               and help people find balance in love, career, and destiny.
//             </p>
//             <div className="career-roles">
//               <div className="career-card">
//                 <h3>Astrologer</h3>
//                 <p>Guide people through their life's blueprint using planetary wisdom.</p>
//               </div>
//               <div className="career-card">
//                 <h3>Tarot Reader</h3>
//                 <p>Offer intuitive readings to uncover truth and direction.</p>
//               </div>
//               <div className="career-card">
//                 <h3>Research Intern</h3>
//                 <p>Explore Vedic texts, numerology, and spiritual energy systems.</p>
//               </div>
//             </div>
//             <a href="/careers" className="career-btn">
//               Explore Opportunities →
//             </a>
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default Home;

// import React, { useState, useEffect, useRef } from "react";
// import axios from "axios";
// import "../styles/Home.css";

// const API_BASE = process.env.REACT_APP_API_URL || "https://adminastrotalk-1.onrender.com/api";

// const Home = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [aboutData, setAboutData] = useState({
//     title: "About Us",
//     content: "",
//     image: "",
//   });
//   const [careers, setCareers] = useState([]); // ✅ Careers data
//   const sliderRef = useRef(null);

//   // 🌐 Fetch About Us
//   useEffect(() => {
//     const fetchAboutData = async () => {
//       try {
//         const res = await axios.get(`${API_BASE}/about`);
//         if (res.data) setAboutData(res.data);
//       } catch (err) {
//         console.error("❌ Error fetching About data:", err.message);
//       }
//     };
//     fetchAboutData();
//   }, []);

//   // 🌐 Fetch Careers Data
//   useEffect(() => {
//     const fetchCareers = async () => {
//       try {
//         const res = await axios.get(`${API_BASE}/careers`);
//         console.log("💼 Careers API:", res.data); // ✅ Debug log
//         setCareers(res.data || []);
//       } catch (err) {
//         console.error("❌ Error fetching Careers:", err.message);
//       }
//     };
//     fetchCareers();
//   }, []);

//   const navLinks = [
//     { name: "Home", link: "/" },
//     { name: "About Us", link: "/about-us" },
//     { name: "Energy", link: "/energy" },
//     { name: "Astrology", link: "/Astrology" },
//     { name: "Vastu", link: "/vastu" },
//     { name: "Manifestation", link: "/manifestation" },
//     { name: "Material", link: "/material" },
//     { name: "Blogs", link: "/blogs" },
//     { name: "Careers", link: "/careers" },
//     { name: "Contact", link: "/contact" },
//     { name: "Your Account", link: "/auth" },
//   ];

//   const services = [
//     {
//       name: "Astrology",
//       link: "/astrology",
//       desc: "Decode your life's blueprint and uncover what the stars have planned for you.",
//       gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
//     },
//     {
//       name: "Vastu Shastra",
//       link: "/vastu",
//       desc: "Transform your home into a source of harmony and positive energy.",
//       gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
//     },
//     {
//       name: "Numerology",
//       link: "/astrology?type=numerology",
//       desc: "Discover your strengths, destiny, and lucky numbers through numerology.",
//       gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
//     },
//     {
//       name: "Energy Reading",
//       link: "/energy",
//       desc: "Understand your aura and unlock the hidden messages of your energy field.",
//       gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
//     },
//     {
//       name: "Tarot Reading",
//       link: "/tarotreading",
//       desc: "Get intuitive insights and guidance for love, career, and personal growth.",
//       gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
//     },
//     {
//       name: "Manifestation",
//       link: "/manifestation",
//       desc: "Turn your dreams into reality by aligning mindset, intention, and energy.",
//       gradient: "linear-gradient(135deg, #30cfd0 0%, #330867 100%)",
//     },
//   ];

//   // 🌌 About Us Image
//   const aboutImage =
//     aboutData.image && aboutData.image.startsWith("/uploads")
//       ? `${API_BASE.replace("/api", "")}${aboutData.image}`
//       : "https://res.cloudinary.com/doerrm32l/image/upload/v1761893673/astrologo_fjndbn.png";

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
//       <div
//         className={`sidebar ${sidebarOpen ? "open" : ""}`}
//         style={{
//           position: "fixed",
//           top: 0,
//           left: sidebarOpen ? 0 : "-270px",
//           width: "270px",
//           height: "100vh",
//           background: "linear-gradient(180deg, rgba(20,0,40,0.95), rgba(5,0,20,0.9))",
//           backdropFilter: "blur(14px)",
//           boxShadow: "6px 0 25px rgba(255, 0, 255, 0.25)",
//           transition: "left 0.5s ease-in-out",
//           zIndex: 1000,
//           padding: "30px 20px",
//         }}
//       >
//         {sidebarOpen && (
//           <button
//             onClick={() => setSidebarOpen(false)}
//             style={{
//               position: "absolute",
//               top: "18px",
//               right: "18px",
//               background: "linear-gradient(135deg, #ff00ff, #8a2be2)",
//               border: "none",
//               color: "#fff",
//               fontSize: "20px",
//               width: "40px",
//               height: "40px",
//               borderRadius: "50%",
//               cursor: "pointer",
//               boxShadow: "0 0 15px rgba(255, 0, 255, 0.4)",
//             }}
//           >
//             ✕
//           </button>
//         )}
//         <h2
//           style={{
//             fontSize: "28px",
//             fontWeight: 700,
//             textAlign: "center",
//             background: "linear-gradient(90deg, #ff00ff, #00ffff)",
//             WebkitBackgroundClip: "text",
//             WebkitTextFillColor: "transparent",
//             marginBottom: "35px",
//           }}
//         >
//           ✨ AstroConnect
//         </h2>
//         <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
//           {navLinks.map((item, idx) => (
//             <li key={idx} style={{ margin: "14px 0" }}>
//               <a
//                 href={item.link}
//                 onClick={() => setSidebarOpen(false)}
//                 style={{
//                   color: "#ccc",
//                   display: "flex",
//                   alignItems: "center",
//                   gap: "10px",
//                   padding: "12px 18px",
//                   borderRadius: "10px",
//                   textDecoration: "none",
//                   fontSize: "1rem",
//                   fontWeight: 500,
//                   transition: "all 0.3s ease",
//                 }}
//               >
//                 {item.name}
//               </a>
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Hamburger */}
//       {!sidebarOpen && (
//         <button
//           onClick={() => setSidebarOpen(true)}
//           style={{
//             position: "fixed",
//             top: "22px",
//             left: "25px",
//             background: "linear-gradient(135deg, #ff00ff, #7b2cbf)",
//             color: "#fff",
//             border: "none",
//             fontSize: "26px",
//             borderRadius: "50%",
//             width: "55px",
//             height: "55px",
//             cursor: "pointer",
//             zIndex: 1100,
//             boxShadow: "0 0 25px rgba(255, 0, 255, 0.4)",
//           }}
//         >
//           ☰
//         </button>
//       )}

//       {/* Main Content */}
//       <div
//         className={`home-wrapper ${sidebarOpen ? "shifted" : ""}`}
//         style={{
//           marginLeft: sidebarOpen ? "270px" : "0",
//           transition: "margin-left 0.5s ease",
//         }}
//       >
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
//           <h2>Languages</h2>
//           <p className="services-subtitle">
//             Explore cosmic wisdom through our transformative offerings
//           </p>
//           <div className="modern-services-grid">
//             {services.map((service, idx) => (
//               <a key={idx} href={service.link} className="modern-service-card">
//                 <div className="card-icon-wrapper" style={{ background: service.gradient }}></div>
//                 <h3>{service.name}</h3>
//                 <p>{service.desc}</p>
//                 <div className="card-arrow">→</div>
//               </a>
//             ))}
//           </div>
//         </section>

//         {/* 🔮 About Section */}
//         <section id="about-us" className="home-section about-us">
//           <div className="about-bg-glow"></div>
//           <div className="about-inner">
//             <div className="about-left">
//               <img src={aboutImage} alt="AstroConnect" className="about-logo" />
//             </div>
//             <div className="about-right">
//               <h2>
//                 {aboutData.title || "About"} <span>AstroConnect</span>
//               </h2>
//               <p
//                 dangerouslySetInnerHTML={{
//                   __html:
//                     aboutData.content ||
//                     "At AstroConnect, we combine astrology, vastu, and energy sciences to bring harmony and insight.",
//                 }}
//               ></p>
//               <a href="/about-us" className="about-btn">
//                 Discover More →
//               </a>
//             </div>
//           </div>
//         </section>

//         {/* 💼 Careers Section (Dynamic from API) */}
//         <section id="careers" className="home-section careers">
//           <div className="careers-content">
//             <h2>Join Our Cosmic Team ✨</h2>
//             <p>
//               Become a part of <span className="highlight">AstroConnect</span> — where we decode the stars,
//               align energies, and help people find balance in love, career, and destiny.
//             </p>

//             <div className="career-roles">
//               {careers.length > 0 ? (
//                 careers.slice(0, 3).map((career) => (
//                   <div key={career._id} className="career-card">
//                     {career.image && (
//                       <img
//                         src={`https://adminastrotalk-1.onrender.com${career.image}`}
//                         alt={career.title}
//                         className="career-img"
//                       />
//                     )}
//                     <h3>{career.title}</h3>
//                     <p>{career.description}</p>
//                     <p style={{ fontSize: "0.9rem", opacity: 0.8 }}>
//                       Status: {career.status || "Open"}
//                     </p>
//                   </div>
//                 ))
//               ) : (
//                 <p>No open positions available right now.</p>
//               )}
//             </div>

//             <a href="/careers" className="career-btn">
//               Explore Opportunities →
//             </a>
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default Home;

// import React, { useState, useEffect, useRef } from "react";
// import axios from "axios";
// import "../styles/Home.css";

// const API_BASE = process.env.REACT_APP_API_URL || "https://adminastrotalk-1.onrender.com/api";

// const Home = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [aboutData, setAboutData] = useState({
//     title: "About Us",
//     content: "",
//     image: "",
//   });

//   const [careers, setCareers] = useState([]);

//   /* -------------------- Fetch About -------------------- */
//   useEffect(() => {
//     const fetchAboutData = async () => {
//       try {
//         const res = await axios.get(`${API_BASE}/about`);
//         if (res.data) setAboutData(res.data);
//       } catch (err) {
//         console.error("❌ Error fetching About:", err.message);
//       }
//     };
//     fetchAboutData();
//   }, []);

//   /* -------------------- Fetch Careers -------------------- */
//   useEffect(() => {
//     const fetchCareers = async () => {
//       try {
//         const res = await axios.get(`${API_BASE}/careers`);
//         setCareers(res.data || []);
//       } catch (err) {
//         console.error("❌ Error fetching careers:", err.message);
//       }
//     };
//     fetchCareers();
//   }, []);

// const navLinks = [
//   {
//     name: "Home",
//     link: "/",
//     dropdown: [
//       { name: "About Us", link: "/about-us" },
//       { name: "Careers", link: "/careers" }
//     ]
//   },

//   { name: "Energy", link: "/energy" },
//   { name: "Astrology", link: "/astrology" },
//   { name: "Vastu", link: "/vastu" },
//   { name: "Manifestation", link: "/manifestation" },
//   { name: "Material", link: "/material" },
//   { name: "Blogs", link: "/blogs" },
//   { name: "Your Account", link: "/auth" }
// ];


//   const services = [
//     {
//       name: "Astrology",
//       link: "/astrology",
//       desc: "Decode your life's blueprint and uncover what the stars have planned for you.",
//       gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
//     },
//     {
//       name: "Vastu Shastra",
//       link: "/vastu",
//       desc: "Transform your home into a source of harmony and positive energy.",
//       gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
//     },
//     {
//       name: "Numerology",
//       link: "/astrology?type=numerology",
//       desc: "Discover your strengths, destiny, and lucky numbers through numerology.",
//       gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
//     },
//     {
//       name: "Energy Reading",
//       link: "/energy",
//       desc: "Understand your aura and unlock the hidden messages of your energy field.",
//       gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
//     },
//     {
//       name: "Tarot Reading",
//       link: "/tarotreading",
//       desc: "Get intuitive insights and guidance for love, career, and personal growth.",
//       gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
//     },
//     {
//       name: "Manifestation",
//       link: "/manifestation",
//       desc: "Turn your dreams into reality by aligning mindset, intention, and energy.",
//       gradient: "linear-gradient(135deg, #30cfd0 0%, #330867 100%)",
//     },
//   ];

//   const aboutImage =
//     aboutData.image && aboutData.image.startsWith("/uploads")
//       ? `${API_BASE.replace("/api", "")}${aboutData.image}`
//       : "https://res.cloudinary.com/doerrm32l/image/upload/v1761893673/astrologo_fjndbn.png";

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
//       {/* ---------------- Overlay (Close Sidebar) ---------------- */}
//       {sidebarOpen && (
//         <div
//           onClick={() => setSidebarOpen(false)}
//           style={{
//             position: "fixed",
//             top: 0,
//             left: 0,
//             width: "100%",
//             height: "100%",
//             background: "rgba(0,0,0,0.0)",
//             zIndex: 900,
//           }}
//         ></div>
//       )}

//       {/* ---------------- Sidebar ---------------- */}
//       <div
//         className={`sidebar ${sidebarOpen ? "open" : ""}`}
//         onClick={() => setSidebarOpen(false)} // 👉 Sidebar par click → close
//         style={{
//           position: "fixed",
//           top: 0,
//           left: sidebarOpen ? 0 : "-270px",
//           width: "270px",
//           height: "100vh",
//           background: "linear-gradient(180deg, rgba(20,0,40,0.95), rgba(5,0,20,0.9))",
//           backdropFilter: "blur(14px)",
//           boxShadow: "6px 0 25px rgba(255, 0, 255, 0.25)",
//           transition: "left 0.5s ease-in-out",
//           zIndex: 1000,
//           padding: "30px 20px",
//         }}
//       >
//         <h2
//           style={{
//             fontSize: "28px",
//             fontWeight: 700,
//             textAlign: "center",
//             background: "linear-gradient(90deg, #ff00ff, #00ffff)",
//             WebkitBackgroundClip: "text",
//             WebkitTextFillColor: "transparent",
//             marginBottom: "35px",
//           }}
//         >
//           ✨ AstroConnect
//         </h2>

//         <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
//           {navLinks.map((item, idx) => (
//             <li key={idx} style={{ margin: "14px 0" }}>
//               <a
//                 href={item.link}
//                 style={{
//                   color: "#ccc",
//                   display: "flex",
//                   alignItems: "center",
//                   gap: "10px",
//                   padding: "12px 18px",
//                   borderRadius: "10px",
//                   textDecoration: "none",
//                   fontSize: "1rem",
//                   fontWeight: 500,
//                   transition: "all 0.3s ease",
//                 }}
//               >
//                 {item.name}
//               </a>
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* ---------------- Hamburger ---------------- */}
//       {!sidebarOpen && (
//         <button
//           onClick={() => setSidebarOpen(true)}
//           style={{
//             position: "fixed",
//             top: "22px",
//             left: "25px",
//             background: "linear-gradient(135deg, #ff00ff, #7b2cbf)",
//             color: "#fff",
//             border: "none",
//             fontSize: "26px",
//             borderRadius: "50%",
//             width: "55px",
//             height: "55px",
//             cursor: "pointer",
//             zIndex: 1100,
//             boxShadow: "0 0 25px rgba(255, 0, 255, 0.4)",
//           }}
//         >
//           ☰
//         </button>
//       )}

//       {/* ---------------- Main Content ---------------- */}
//       <div
//         className={`home-wrapper ${sidebarOpen ? "shifted" : ""}`}
//         style={{
//           marginLeft: sidebarOpen ? "270px" : "0",
//           transition: "margin-left 0.5s ease",
//         }}
//       >
//         {/* ---------------- Hero ---------------- */}
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

//         {/* ---------------- Services ---------------- */}
//         <section id="services" className="home-section services">
//           <h2>Languages</h2>
//           <p className="services-subtitle">
//             Explore cosmic wisdom through our transformative offerings
//           </p>

//           <div className="modern-services-grid">
//             {services.map((service, idx) => (
//               <a key={idx} href={service.link} className="modern-service-card">
//                 <div
//                   className="card-icon-wrapper"
//                   style={{ background: service.gradient }}
//                 ></div>
//                 <h3>{service.name}</h3>
//                 <p>{service.desc}</p>
//                 <div className="card-arrow">→</div>
//               </a>
//             ))}
//           </div>
//         </section>

//         {/* ---------------- About ---------------- */}
//         <section id="about-us" className="home-section about-us">
//           <div className="about-bg-glow"></div>
//           <div className="about-inner">
//             <div className="about-left">
//               <img src={aboutImage} alt="AstroConnect" className="about-logo" />
//             </div>

//             <div className="about-right">
//               <h2>
//                 {aboutData.title || "About"} <span>AstroConnect</span>
//               </h2>

//               <p
//                 dangerouslySetInnerHTML={{
//                   __html:
//                     aboutData.content ||
//                     "At AstroConnect, we combine astrology, vastu, and energy sciences to bring harmony and insight.",
//                 }}
//               ></p>

//               <a href="/about-us" className="about-btn">
//                 Discover More →
//               </a>
//             </div>
//           </div>
//         </section>

//         {/* ---------------- Careers ---------------- */}
//         <section id="careers" className="home-section careers">
//           <div className="careers-content">
//             <h2>Join Our Cosmic Team ✨</h2>
//             <p>
//               Become a part of <span className="highlight">AstroConnect</span> —
//               where we decode the stars, align energies, and help people find balance
//               in love, career, and destiny.
//             </p>

//             <div className="career-roles">
//               {careers.length > 0 ? (
//                 careers.slice(0, 3).map((career) => (
//                   <div key={career._id} className="career-card">
//                     {career.image && (
//                       <img
//                         src={`https://adminastrotalk-1.onrender.com${career.image}`}
//                         alt={career.title}
//                         className="career-img"
//                       />
//                     )}
//                     <h3>{career.title}</h3>
//                     <p>{career.description}</p>
//                     <p style={{ fontSize: "0.9rem", opacity: 0.8 }}>
//                       Status: {career.status || "Open"}
//                     </p>
//                   </div>
//                 ))
//               ) : (
//                 <p>No open positions available right now.</p>
//               )}
//             </div>

//             <a href="/careers" className="career-btn">
//               Explore Opportunities →
//             </a>
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default Home;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "../styles/Home.css";

// const API_BASE =
//   process.env.REACT_APP_API_URL || "https://adminastrotalk-1.onrender.com/api";

// const Home = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [aboutData, setAboutData] = useState({
//     title: "About Us",
//     content: "",
//     image: "",
//   });

//   const [careers, setCareers] = useState([]);

//   /* ---------------- Fetch About ---------------- */
//   useEffect(() => {
//     const fetchAboutData = async () => {
//       try {
//         const res = await axios.get(`${API_BASE}/about`);
//         if (res.data) setAboutData(res.data);
//       } catch (err) {
//         console.error("❌ Error fetching About:", err.message);
//       }
//     };
//     fetchAboutData();
//   }, []);

//   /* ---------------- Fetch Careers ---------------- */
//   useEffect(() => {
//     const fetchCareers = async () => {
//       try {
//         const res = await axios.get(`${API_BASE}/careers`);
//         setCareers(res.data || []);
//       } catch (err) {
//         console.error("❌ Error fetching careers:", err.message);
//       }
//     };
//     fetchCareers();
//   }, []);

//   /* ---------------- Navbar Links ---------------- */
//   const navLinks = [
//     {
//       name: "Home",
//       link: "/",
//       dropdown: [
//         { name: "About Us", link: "/about-us" },
//         { name: "Careers", link: "/careers" },
//       ],
//     },
//     { name: "Energy", link: "/energy" },
//     { name: "Astrology", link: "/astrology" },
//     { name: "Vastu", link: "/vastu" },
//     { name: "Manifestation", link: "/manifestation" },
//     { name: "Material", link: "/material" },
//     { name: "Blogs", link: "/blogs" },
//     { name: "Your Account", link: "/auth" },
//   ];

//   /* ---------------- Hero Stars ---------------- */
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

//   /* ---------------- About Image ---------------- */
//   const aboutImage =
//     aboutData.image && aboutData.image.startsWith("/uploads")
//       ? `${API_BASE.replace("/api", "")}${aboutData.image}`
//       : "https://res.cloudinary.com/doerrm32l/image/upload/v1761893673/astrologo_fjndbn.png";

//   /* ---------------- Services ---------------- */
//   const services = [
//     {
//       name: "Astrology",
//       link: "/astrology",
//       desc: "Decode your life's blueprint with planetary wisdom.",
//       gradient: "linear-gradient(135deg, #667eea, #764ba2)",
//     },
//     {
//       name: "Vastu Shastra",
//       link: "/vastu",
//       desc: "Bring balance and flow into your surroundings.",
//       gradient: "linear-gradient(135deg, #f093fb, #f5576c)",
//     },
//     {
//       name: "Numerology",
//       link: "/astrology?type=numerology",
//       desc: "Discover destiny numbers & personality insights.",
//       gradient: "linear-gradient(135deg, #4facfe, #00f2fe)",
//     },
//     {
//       name: "Energy Reading",
//       link: "/energy",
//       desc: "Understand your aura and emotional energy.",
//       gradient: "linear-gradient(135deg, #43e97b, #38f9d7)",
//     },
//     {
//       name: "Tarot Reading",
//       link: "/tarotreading",
//       desc: "Guidance for love, career, and personal life.",
//       gradient: "linear-gradient(135deg, #fa709a, #fee140)",
//     },
//     {
//       name: "Manifestation",
//       link: "/manifestation",
//       desc: "Turn desire into reality through aligned energy.",
//       gradient: "linear-gradient(135deg, #30cfd0, #330867)",
//     },
//   ];

//   return (
//     <div
//       style={{
//         fontFamily: "Poppins, sans-serif",
//         color: "#fff",
//         background: "linear-gradient(180deg, #1a0033, #0d001a)",
//         minHeight: "100vh",
//         overflowX: "hidden",
//       }}
//     >
//       {/* -------------- Overlay to close sidebar -------------- */}
//       {sidebarOpen && (
//         <div
//           onClick={() => setSidebarOpen(false)}
//           style={{
//             position: "fixed",
//             inset: 0,
//             background: "transparent",
//             zIndex: 900,
//           }}
//         ></div>
//       )}

//       {/* -------------- SIDEBAR -------------- */}
//       <div
//         style={{
//           position: "fixed",
//           top: 0,
//           left: sidebarOpen ? 0 : "-270px",
//           width: "270px",
//           height: "100vh",
//           background: "linear-gradient(180deg, rgba(20,0,40,0.95), rgba(5,0,20,0.9))",
//           backdropFilter: "blur(14px)",
//           boxShadow: "6px 0 25px rgba(255, 0, 255, 0.25)",
//           transition: "left 0.45s ease",
//           zIndex: 1000,
//           padding: "30px 18px",
//         }}
//       >
//         <h2
//           style={{
//             fontSize: "28px",
//             fontWeight: 700,
//             textAlign: "center",
//             background: "linear-gradient(to right, #ff00ff, #00ffff)",
//             WebkitBackgroundClip: "text",
//             WebkitTextFillColor: "transparent",
//             marginBottom: "30px",
//           }}
//         >
//           ✨ AstroConnect
//         </h2>

//         <ul style={{ listStyle: "none", padding: 0 }}>
//           {navLinks.map((item, idx) => (
//             <li key={idx} style={{ marginBottom: "12px" }}>
//               <a
//                 href={item.link}
//                 style={{
//                   display: "block",
//                   padding: "12px 16px",
//                   borderRadius: "10px",
//                   color: "#ccc",
//                   textDecoration: "none",
//                 }}
//               >
//                 {item.name}
//               </a>

//               {/* Dropdown */}
//               {item.dropdown && (
//                 <ul style={{ listStyle: "none", paddingLeft: "20px", marginTop: "5px" }}>
//                   {item.dropdown.map((sub, sidx) => (
//                     <li key={sidx} style={{ marginBottom: "8px" }}>
//                       <a
//                         href={sub.link}
//                         style={{
//                           display: "block",
//                           padding: "8px 12px",
//                           borderRadius: "8px",
//                           color: "#aaa",
//                           fontSize: "0.9rem",
//                           textDecoration: "none",
//                         }}
//                       >
//                         {sub.name}
//                       </a>
//                     </li>
//                   ))}
//                 </ul>
//               )}
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* -------------- HAMBURGER BUTTON -------------- */}
//       {!sidebarOpen && (
//         <button
//           onClick={() => setSidebarOpen(true)}
//           style={{
//             position: "fixed",
//             top: "20px",
//             left: "20px",
//             width: "55px",
//             height: "55px",
//             borderRadius: "50%",
//             background: "linear-gradient(135deg, #ff00ff, #7b2cbf)",
//             border: "none",
//             fontSize: "26px",
//             color: "#fff",
//             cursor: "pointer",
//             boxShadow: "0 0 20px rgba(255, 0, 255, 0.4)",
//             zIndex: 1200,
//           }}
//         >
//           ☰
//         </button>
//       )}

//       {/* -------------- MAIN WRAPPER -------------- */}
//       <div
//         style={{
//           marginLeft: sidebarOpen ? "270px" : "0",
//           transition: "margin-left 0.5s ease",
//         }}
//       >
//         {/* HERO */}
//         <section className="hero">
//           <div className="stars-container">{renderStars(50)}</div>

//           <div className="hero-overlay">
//             <h1>Your Destiny Is Written In The Stars ✨</h1>
//             <p>Explore the mysteries of life through astrology, tarot & energy.</p>
//             <a href="/book" className="hero-btn">
//               Book Your Reading
//             </a>
//           </div>
//         </section>

//         {/* SERVICES */}
//         <section className="home-section services">
//           <h2>Languages</h2>
//           <p className="services-subtitle">
//             Explore cosmic wisdom through our transformative offerings
//           </p>

//           <div className="modern-services-grid">
//             {services.map((service, idx) => (
//               <a href={service.link} key={idx} className="modern-service-card">
//                 <div
//                   className="card-icon-wrapper"
//                   style={{ background: service.gradient }}
//                 ></div>

//                 <h3>{service.name}</h3>
//                 <p>{service.desc}</p>

//                 <div className="card-arrow">→</div>
//               </a>
//             ))}
//           </div>
//         </section>

//         {/* ABOUT */}
//         <section className="home-section about-us">
//           <div className="about-inner">
//             <div className="about-left">
//               <img src={aboutImage} alt="AstroConnect" className="about-logo" />
//             </div>

//             <div className="about-right">
//               <h2>
//                 {aboutData.title} <span>AstroConnect</span>
//               </h2>

//               <p
//                 dangerouslySetInnerHTML={{
//                   __html:
//                     aboutData.content ||
//                     "At AstroConnect, we bring cosmic clarity to your life.",
//                 }}
//               ></p>

//               <a href="/about-us" className="about-btn">
//                 Discover More →
//               </a>
//             </div>
//           </div>
//         </section>

//         {/* CAREERS */}
//         <section className="home-section careers">
//           <div className="careers-content">
//             <h2>Join Our Cosmic Team ✨</h2>
//             <p>
//               Become a part of <span className="highlight">AstroConnect</span> — where
//               astrology meets intuition.
//             </p>

//             <div className="career-roles">
//               {careers.length > 0 ? (
//                 careers.slice(0, 3).map((career) => (
//                   <div key={career._id} className="career-card">
//                     {career.image && (
//                       <img
//                         src={`https://adminastrotalk-1.onrender.com${career.image}`}
//                         alt={career.title}
//                         className="career-img"
//                       />
//                     )}

//                     <h3>{career.title}</h3>
//                     <p>{career.description}</p>

//                     <p style={{ fontSize: "0.85rem", opacity: 0.8 }}>
//                       Status: {career.status}
//                     </p>
//                   </div>
//                 ))
//               ) : (
//                 <p>No open positions available.</p>
//               )}
//             </div>

//             <a href="/careers" className="career-btn">
//               Explore Opportunities →
//             </a>
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default Home;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "../styles/Home.css";

// const API_BASE =
//   process.env.REACT_APP_API_URL || "https://adminastrotalk-1.onrender.com/api";

// const Home = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [openDropdown, setOpenDropdown] = useState(null); 
//   const [isLoggedIn, setIsLoggedIn] = useState(false); 

//   const [aboutData, setAboutData] = useState({
//     title: "About Us",
//     content: "",
//     image: "",
//   });

//   const [careers, setCareers] = useState([]);

//   /* ---------------- Check Login ---------------- */
//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     setIsLoggedIn(!!token);
//   }, []);

//   /* ---------------- Logout ---------------- */
//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     setIsLoggedIn(false);
//     window.location.href = "/auth";
//   };

//   /* ---------------- Fetch About ---------------- */
//   useEffect(() => {
//     const fetchAboutData = async () => {
//       try {
//         const res = await axios.get(`${API_BASE}/about`);
//         if (res.data) setAboutData(res.data);
//       } catch (err) {
//         console.error("❌ Error fetching About:", err.message);
//       }
//     };
//     fetchAboutData();
//   }, []);

//   /* ---------------- Fetch Careers ---------------- */
//   useEffect(() => {
//     const fetchCareers = async () => {
//       try {
//         const res = await axios.get(`${API_BASE}/careers`);
//         setCareers(res.data || []);
//       } catch (err) {
//         console.error("❌ Error fetching careers:", err.message);
//       }
//     };
//     fetchCareers();
//   }, []);

//   /* ---------------- Navbar Links ---------------- */
//   const navLinks = [
//     {
//       name: "Home",
//       link: "/",
//       dropdown: [
//         { name: "About Us", link: "/about-us" },
//         { name: "Careers", link: "/careers" },
//       ],
//     },
//     { name: "Energy", link: "/energy" },
//     { name: "Astrology", link: "/astrology" },
//     { name: "Vastu", link: "/vastu" },
//     { name: "Manifestation", link: "/manifestation" },
//     { name: "Material", link: "/material" },
//     { name: "Blogs", link: "/blogs" },

//     // ⭐ Login / Logout Logic
//     isLoggedIn
//       ? { name: "Logout", action: handleLogout }
//       : { name: "Your Account", link: "/auth" },
//   ];

//   /* ---------------- Hero Stars ---------------- */
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

//   /* ---------------- About Image ---------------- */
//   const aboutImage =
//     aboutData.image && aboutData.image.startsWith("/uploads")
//       ? `${API_BASE.replace("/api", "")}${aboutData.image}`
//       : "https://res.cloudinary.com/doerrm32l/image/upload/v1761893673/astrologo_fjndbn.png";

//   /* ---------------- Services ---------------- */
//   const services = [
//     {
//       name: "Astrology",
//       link: "/astrology",
//       desc: "Decode your life's blueprint with planetary wisdom.",
//       gradient: "linear-gradient(135deg, #667eea, #764ba2)",
//     },
//     {
//       name: "Vastu Shastra",
//       link: "/vastu",
//       desc: "Bring balance and flow into your surroundings.",
//       gradient: "linear-gradient(135deg, #f093fb, #f5576c)",
//     },
//     {
//       name: "Numerology",
//       link: "/astrology?type=numerology",
//       desc: "Discover destiny numbers & personality insights.",
//       gradient: "linear-gradient(135deg, #4facfe, #00f2fe)",
//     },
//     {
//       name: "Energy Reading",
//       link: "/energy",
//       desc: "Understand your aura and emotional energy.",
//       gradient: "linear-gradient(135deg, #43e97b, #38f9d7)",
//     },
//     {
//       name: "Tarot Reading",
//       link: "/tarotreading",
//       desc: "Guidance for love, career, and personal life.",
//       gradient: "linear-gradient(135deg, #fa709a, #fee140)",
//     },
//     {
//       name: "Manifestation",
//       link: "/manifestation",
//       desc: "Turn desire into reality through aligned energy.",
//       gradient: "linear-gradient(135deg, #30cfd0, #330867)",
//     },
//   ];

//   return (
//     <div
//       style={{
//         fontFamily: "Poppins, sans-serif",
//         color: "#fff",
//         background: "linear-gradient(180deg, #1a0033, #0d001a)",
//         minHeight: "100vh",
//         overflowX: "hidden",
//       }}
//     >
//       {/* -------------- Overlay to close sidebar -------------- */}
//       {sidebarOpen && (
//         <div
//           onClick={() => setSidebarOpen(false)}
//           style={{
//             position: "fixed",
//             inset: 0,
//             background: "transparent",
//             zIndex: 900,
//           }}
//         ></div>
//       )}

//       {/* -------------- SIDEBAR -------------- */}
//       <div
//         style={{
//           position: "fixed",
//           top: 0,
//           left: sidebarOpen ? 0 : "-270px",
//           width: "270px",
//           height: "100vh",
//           background: "linear-gradient(180deg, rgba(20,0,40,0.95), rgba(5,0,20,0.9))",
//           backdropFilter: "blur(14px)",
//           boxShadow: "6px 0 25px rgba(255, 0, 255, 0.25)",
//           transition: "left 0.45s ease",
//           zIndex: 1000,
//           padding: "30px 18px",
//         }}
//       >
//         <h2
//           style={{
//             fontSize: "28px",
//             fontWeight: 700,
//             textAlign: "center",
//             background: "linear-gradient(to right, #ff00ff, #00ffff)",
//             WebkitBackgroundClip: "text",
//             WebkitTextFillColor: "transparent",
//             marginBottom: "30px",
//           }}
//         >
//           ✨ AstroConnect
//         </h2>

//         <ul style={{ listStyle: "none", padding: 0 }}>
//           {navLinks.map((item, idx) => (
//             <li key={idx} style={{ marginBottom: "12px" }}>
//               <div
//                 onClick={() =>
//                   item.dropdown
//                     ? setOpenDropdown(openDropdown === idx ? null : idx)
//                     : item.action
//                     ? item.action()
//                     : (window.location.href = item.link)
//                 }
//                 style={{
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "space-between",
//                   padding: "12px 16px",
//                   borderRadius: "10px",
//                   color: "#ccc",
//                   cursor: "pointer",
//                 }}
//               >
//                 <span>{item.name}</span>

//                 {/* ⭐ Arrow Icon for Dropdown */}
//                 {item.dropdown && (
//                   <span
//                     style={{
//                       transition: "0.3s",
//                       transform:
//                         openDropdown === idx ? "rotate(90deg)" : "rotate(0deg)",
//                     }}
//                   >
//                     ▶
//                   </span>
//                 )}
//               </div>

//               {/* Dropdown Menu */}
//               {item.dropdown && openDropdown === idx && (
//                 <ul style={{ listStyle: "none", paddingLeft: "20px", marginTop: "5px" }}>
//                   {item.dropdown.map((sub, sidx) => (
//                     <li key={sidx} style={{ marginBottom: "8px" }}>
//                       <a
//                         href={sub.link}
//                         style={{
//                           display: "block",
//                           padding: "8px 12px",
//                           borderRadius: "8px",
//                           color: "#aaa",
//                           fontSize: "0.9rem",
//                           textDecoration: "none",
//                         }}
//                       >
//                         {sub.name}
//                       </a>
//                     </li>
//                   ))}
//                 </ul>
//               )}
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* -------------- HAMBURGER BUTTON -------------- */}
//       {!sidebarOpen && (
//         <button
//           onClick={() => setSidebarOpen(true)}
//           style={{
//             position: "fixed",
//             top: "20px",
//             left: "20px",
//             width: "55px",
//             height: "55px",
//             borderRadius: "50%",
//             background: "linear-gradient(135deg, #ff00ff, #7b2cbf)",
//             border: "none",
//             fontSize: "26px",
//             color: "#fff",
//             cursor: "pointer",
//             boxShadow: "0 0 20px rgba(255, 0, 255, 0.4)",
//             zIndex: 1200,
//           }}
//         >
//           ☰
//         </button>
//       )}

//       {/* -------------- MAIN WRAPPER -------------- */}
//       <div
//         style={{
//           marginLeft: sidebarOpen ? "270px" : "0",
//           transition: "margin-left 0.5s ease",
//         }}
//       >
//         {/* HERO */}
//         <section className="hero">
//           <div className="stars-container">{renderStars(50)}</div>

//           <div className="hero-overlay">
//             <h1>Your Destiny Is Written In The Stars ✨</h1>
//             <p>Explore the mysteries of life through astrology, tarot & energy.</p>
//             <a href="/book" className="hero-btn">
//               Book Your Reading
//             </a>
//           </div>
//         </section>

//         {/* SERVICES */}
//         <section className="home-section services">
//           <h2>Languages</h2>
//           <p className="services-subtitle">
//             Explore cosmic wisdom through our transformative offerings
//           </p>

//           <div className="modern-services-grid">
//             {services.map((service, idx) => (
//               <a href={service.link} key={idx} className="modern-service-card">
//                 <div
//                   className="card-icon-wrapper"
//                   style={{ background: service.gradient }}
//                 ></div>

//                 <h3>{service.name}</h3>
//                 <p>{service.desc}</p>

//                 <div className="card-arrow">→</div>
//               </a>
//             ))}
//           </div>
//         </section>

//         {/* ABOUT */}
//         <section className="home-section about-us">
//           <div className="about-inner">
//             <div className="about-left">
//               <img src={aboutImage} alt="AstroConnect" className="about-logo" />
//             </div>

//             <div className="about-right">
//               <h2>
//                 {aboutData.title} <span>AstroConnect</span>
//               </h2>

//               <p
//                 dangerouslySetInnerHTML={{
//                   __html:
//                     aboutData.content ||
//                     "At AstroConnect, we bring cosmic clarity to your life.",
//                 }}
//               ></p>

//               <a href="/about-us" className="about-btn">
//                 Discover More →
//               </a>
//             </div>
//           </div>
//         </section>

//         {/* CAREERS */}
//         <section className="home-section careers">
//           <div className="careers-content">
//             <h2>Join Our Cosmic Team ✨</h2>
//             <p>
//               Become a part of <span className="highlight">AstroConnect</span> — where
//               astrology meets intuition.
//             </p>

//             <div className="career-roles">
//               {careers.length > 0 ? (
//                 careers.slice(0, 3).map((career) => (
//                   <div key={career._id} className="career-card">
//                     {career.image && (
//                       <img
//                         src={`https://adminastrotalk-1.onrender.com${career.image}`}
//                         alt={career.title}
//                         className="career-img"
//                       />
//                     )}

//                     <h3>{career.title}</h3>
//                     <p>{career.description}</p>

//                     <p style={{ fontSize: "0.85rem", opacity: 0.8 }}>
//                       Status: {career.status}
//                     </p>
//                   </div>
//                 ))
//               ) : (
//                 <p>No open positions available.</p>
//               )}
//             </div>

//             <a href="/careers" className="career-btn">
//               Explore Opportunities →
//             </a>
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default Home;

import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/Home.css";

import Navbar from "../components/layout/Navbar";  // ✅ Navbar added here

const API_BASE =
  process.env.REACT_APP_API_URL || "https://adminastrotalk-1.onrender.com/api";

const Home = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [aboutData, setAboutData] = useState({
    title: "About Us",
    content: "",
    image: "",
  });

  const [careers, setCareers] = useState([]);

  /* ---------------- Check Login ---------------- */
  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  /* ---------------- Logout ---------------- */
  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    window.location.href = "/auth";
  };

  /* ---------------- Fetch About ---------------- */
  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        const res = await axios.get(`${API_BASE}/about`);
        if (res.data) setAboutData(res.data);
      } catch (err) {
        console.error("❌ Error fetching About:", err.message);
      }
    };
    fetchAboutData();
  }, []);

  /* ---------------- Fetch Careers ---------------- */
  useEffect(() => {
    const fetchCareers = async () => {
      try {
        const res = await axios.get(`${API_BASE}/careers`);
        setCareers(res.data || []);
      } catch (err) {
        console.error("❌ Error fetching careers:", err.message);
      }
    };
    fetchCareers();
  }, []);

  /* ---------------- Navbar Links ---------------- */
  const navLinks = [
    {
      name: "Home",
      link: "/",
      dropdown: [
        { name: "About Us", link: "/about-us" },
        { name: "Careers", link: "/careers" },
      ],
    },
    { name: "Energy", link: "/energy" },
    { name: "Astrology", link: "/astrology" },
    { name: "Vastu", link: "/vastu" },
    { name: "Manifestation", link: "/manifestation" },
    { name: "Material", link: "/material" },
    { name: "Blogs", link: "/blogs" },
    isLoggedIn
      ? { name: "Logout", action: handleLogout }
      : { name: "Your Account", link: "/auth" },
  ];

  /* ---------------- Hero Stars ---------------- */
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

  const aboutImage =
    aboutData.image && aboutData.image.startsWith("/uploads")
      ? `${API_BASE.replace("/api", "")}${aboutData.image}`
      : "https://res.cloudinary.com/doerrm32l/image/upload/v1761893673/astrologo_fjndbn.png";

  /* ---------------- Services ---------------- */
  const services = [
    {
      name: "Astrology",
      link: "/astrology",
      desc: "Decode your life's blueprint with planetary wisdom.",
      gradient: "linear-gradient(135deg, #667eea, #764ba2)",
    },
    {
      name: "Vastu Shastra",
      link: "/vastu",
      desc: "Bring balance and flow into your surroundings.",
      gradient: "linear-gradient(135deg, #f093fb, #f5576c)",
    },
    {
      name: "Numerology",
      link: "/astrology?type=numerology",
      desc: "Discover destiny numbers & personality insights.",
      gradient: "linear-gradient(135deg, #4facfe, #00f2fe)",
    },
    {
      name: "Energy Reading",
      link: "/energy",
      desc: "Understand your aura and emotional energy.",
      gradient: "linear-gradient(135deg, #43e97b, #38f9d7)",
    },
    {
      name: "Tarot Reading",
      link: "/tarotreading",
      desc: "Guidance for love, career, and personal life.",
      gradient: "linear-gradient(135deg, #fa709a, #fee140)",
    },
    {
      name: "Manifestation",
      link: "/manifestation",
      desc: "Turn desire into reality through aligned energy.",
      gradient: "linear-gradient(135deg, #30cfd0, #330867)",
    },
  ];

  return (
    <div
      style={{
        fontFamily: "Poppins, sans-serif",
        color: "#fff",
        background: "linear-gradient(180deg, #1a0033, #0d001a)",
        minHeight: "100vh",
        overflowX: "hidden",
      }}
    >
      {/* ==================== NAVBAR ==================== */}
      <Navbar />

      {/* ============ Sidebar Overlay ============ */}
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

      {/* ============ SIDEBAR ============ */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: sidebarOpen ? 0 : "-270px",
          width: "270px",
          height: "100vh",
          background: "linear-gradient(180deg, rgba(20,0,40,0.95), rgba(5,0,20,0.9))",
          backdropFilter: "blur(14px)",
          boxShadow: "6px 0 25px rgba(255, 0, 255, 0.25)",
          transition: "left 0.45s ease",
          zIndex: 1000,
          padding: "30px 18px",
        }}
      >
        <h2
          style={{
            fontSize: "28px",
            fontWeight: 700,
            textAlign: "center",
            background: "linear-gradient(to right, #ff00ff, #00ffff)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            marginBottom: "30px",
          }}
        >
          ✨ AstroConnect
        </h2>

        <ul style={{ listStyle: "none", padding: 0 }}>
          {navLinks.map((item, idx) => (
            <li key={idx} style={{ marginBottom: "12px" }}>
              <div
                onClick={() =>
                  item.dropdown
                    ? setOpenDropdown(openDropdown === idx ? null : idx)
                    : item.action
                    ? item.action()
                    : (window.location.href = item.link)
                }
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "12px 16px",
                  borderRadius: "10px",
                  color: "#ccc",
                  cursor: "pointer",
                }}
              >
                <span>{item.name}</span>

                {item.dropdown && (
                  <span
                    style={{
                      transition: "0.3s",
                      transform:
                        openDropdown === idx ? "rotate(90deg)" : "rotate(0deg)",
                    }}
                  >
                    ▶
                  </span>
                )}
              </div>

              {item.dropdown && openDropdown === idx && (
                <ul style={{ listStyle: "none", paddingLeft: "20px", marginTop: "5px" }}>
                  {item.dropdown.map((sub, sidx) => (
                    <li key={sidx} style={{ marginBottom: "8px" }}>
                      <a
                        href={sub.link}
                        style={{
                          display: "block",
                          padding: "8px 12px",
                          borderRadius: "8px",
                          color: "#aaa",
                          fontSize: "0.9rem",
                          textDecoration: "none",
                        }}
                      >
                        {sub.name}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* HAMBURGER */}
      {!sidebarOpen && (
        <button
          onClick={() => setSidebarOpen(true)}
          style={{
            position: "fixed",
            top: "20px",
            left: "20px",
            width: "55px",
            height: "55px",
            borderRadius: "50%",
            background: "linear-gradient(135deg, #ff00ff, #7b2cbf)",
            border: "none",
            fontSize: "26px",
            color: "#fff",
            cursor: "pointer",
            boxShadow: "0 0 20px rgba(255, 0, 255, 0.4)",
            zIndex: 1200,
          }}
        >
          ☰
        </button>
      )}

      {/* MAIN CONTENT WITH SLIDE EFFECT */}
      <div
        style={{
          marginLeft: sidebarOpen ? "270px" : "0",
          transition: "margin-left 0.5s ease",
        }}
      >
        {/* HERO */}
        <section className="hero">
          <div className="stars-container">{renderStars(50)}</div>

          <div className="hero-overlay">
            <h1>Your Destiny Is Written In The Stars ✨</h1>
            <p>Explore the mysteries of life through astrology, tarot & energy.</p>
            <a href="/book" className="hero-btn">
              Book Your Reading
            </a>
          </div>
        </section>

        {/* SERVICES */}
        <section className="home-section services">
          <h2>Languages</h2>
          <p className="services-subtitle">
            Explore cosmic wisdom through our transformative offerings
          </p>

          <div className="modern-services-grid">
            {services.map((service, idx) => (
              <a href={service.link} key={idx} className="modern-service-card">
                <div
                  className="card-icon-wrapper"
                  style={{ background: service.gradient }}
                ></div>

                <h3>{service.name}</h3>
                <p>{service.desc}</p>

                <div className="card-arrow">→</div>
              </a>
            ))}
          </div>
        </section>

        {/* ABOUT */}
        <section className="home-section about-us">
          <div className="about-inner">
            <div className="about-left">
              <img src={aboutImage} alt="AstroConnect" className="about-logo" />
            </div>

            <div className="about-right">
              <h2>
                {aboutData.title} <span>AstroConnect</span>
              </h2>

              <p
                dangerouslySetInnerHTML={{
                  __html:
                    aboutData.content ||
                    "At AstroConnect, we bring cosmic clarity to your life.",
                }}
              ></p>

              <a href="/about-us" className="about-btn">
                Discover More →
              </a>
            </div>
          </div>
        </section>

        {/* CAREERS */}
        <section className="home-section careers">
          <div className="careers-content">
            <h2>Join Our Cosmic Team ✨</h2>
            <p>
              Become a part of <span className="highlight">AstroConnect</span> — where astrology meets intuition.
            </p>

            <div className="career-roles">
              {careers.length > 0 ? (
                careers.slice(0, 3).map((career) => (
                  <div key={career._id} className="career-card">
                    {career.image && (
                      <img
                        src={`https://adminastrotalk-1.onrender.com${career.image}`}
                        alt={career.title}
                        className="career-img"
                      />
                    )}

                    <h3>{career.title}</h3>
                    <p>{career.description}</p>

                    <p style={{ fontSize: "0.85rem", opacity: 0.8 }}>
                      Status: {career.status}
                    </p>
                  </div>
                ))
              ) : (
                <p>No open positions available.</p>
              )}
            </div>

            <a href="/careers" className="career-btn">
              Explore Opportunities →
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
