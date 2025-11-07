// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { Mail, Phone, MapPin, MessageSquare, Send } from "lucide-react";
// import "../styles/Contact.css";

// const Contact = () => {
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
//     { name: "Login / Signup", link: "/auth" },
//   ];

//   // 🌠 Starfield Effect
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
//     <div className="contact-page cosmic-bg">
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

//       {/* 🌟 Contact Page Content */}
//       <div className="contact-container-wrapper">
//         <section className="contact-hero">
//           <motion.h1
//             initial={{ opacity: 0, y: -40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             Connect With Our Astrologers
//           </motion.h1>

//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1 }}
//           >
//             Have questions about your birth chart, love life, or career?  
//             Get personalized insights from professional astrologers today.
//           </motion.p>
//         </section>

//         <section className="contact-container">
//           {/* 🔮 Info Section */}
//           <div className="contact-info">
//             {[
//               { Icon: Mail, title: "Email", text: "support@astroconnect.com" },
//               { Icon: Phone, title: "Phone", text: "+91 98765 43210" },
//               { Icon: MapPin, title: "Location", text: "AstroConnect HQ, Delhi, India" },
//             ].map(({ Icon, title, text }, idx) => (
//               <motion.div
//                 key={idx}
//                 className="info-card"
//                 whileHover={{ scale: 1.05 }}
//                 transition={{ type: "spring", stiffness: 300 }}
//               >
//                 <Icon className="info-icon" />
//                 <h3>{title}</h3>
//                 <p>{text}</p>
//               </motion.div>
//             ))}
//           </div>

//           {/* 💌 Form Section */}
//           <motion.form
//             className="contact-form"
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1 }}
//           >
//             <h2 className="form-title">Send Us a Message</h2>

//             <input type="text" placeholder="Full Name" required />
//             <input type="email" placeholder="Email Address" required />
//             <input type="tel" placeholder="Phone Number" />
//             <select required>
//               <option value="">Select Service</option>
//               <option value="love">Love & Relationship</option>
//               <option value="career">Career Astrology</option>
//               <option value="vastu">Vastu Consultation</option>
//               <option value="numerology">Numerology Reading</option>
//             </select>
//             <textarea rows="5" placeholder="Your Message..."></textarea>

//             <motion.button
//               type="submit"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               <Send style={{ marginRight: "6px" }} size={18} /> Send Message
//             </motion.button>
//           </motion.form>
//         </section>

//         {/* 🪐 Footer */}
//         <footer className="contact-footer">
//           <MessageSquare size={20} />
//           <p>We’ll get back to you within 24 hours 💫</p>
//         </footer>
//       </div>
//     </div>
//   );
// };

// export default Contact;


// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { Mail, Phone, MapPin, MessageSquare, Send } from "lucide-react";
// import "../styles/Contact.css";

// const Contact = () => {
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
//     { name: "Login / Signup", link: "/auth" },
//   ];

//   // 🌠 Starfield Effect
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
//     <div
//       className={`contact-page cosmic-bg ${sidebarOpen ? "sidebar-open" : ""}`}
//     >
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

//       {/* 🌑 Overlay (click to close sidebar) */}
//       <div
//         className={`sidebar-overlay ${sidebarOpen ? "visible" : ""}`}
//         onClick={() => setSidebarOpen(false)}
//       ></div>

//       {/* 🍔 Hamburger */}
//       <button
//         className={`sidebar-toggle-home ${sidebarOpen ? "active" : ""}`}
//         onClick={() => setSidebarOpen(!sidebarOpen)}
//       >
//         ☰
//       </button>

//       {/* 🌟 Contact Page Content */}
//       <div className="contact-content">
//         <section className="contact-hero">
//           <motion.h1
//             initial={{ opacity: 0, y: -40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             Connect With Our Astrologers
//           </motion.h1>

//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1 }}
//           >
//             Have questions about your birth chart, love life, or career?  
//             Get personalized insights from professional astrologers today.
//           </motion.p>
//         </section>

//         <section className="contact-container">
//           {/* 🔮 Info Section */}
//           <div className="contact-info">
//             {[ 
//               { Icon: Mail, title: "Email", text: "support@astroconnect.com" },
//               { Icon: Phone, title: "Phone", text: "+91 98765 43210" },
//               { Icon: MapPin, title: "Location", text: "AstroConnect HQ, Delhi, India" },
//             ].map(({ Icon, title, text }, idx) => (
//               <motion.div
//                 key={idx}
//                 className="info-card"
//                 whileHover={{ scale: 1.05 }}
//                 transition={{ type: "spring", stiffness: 300 }}
//               >
//                 <Icon className="info-icon" />
//                 <h3>{title}</h3>
//                 <p>{text}</p>
//               </motion.div>
//             ))}
//           </div>

//           {/* 💌 Form Section */}
//           <motion.form
//             className="contact-form"
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1 }}
//           >
//             <h2 className="form-title">Send Us a Message</h2>

//             <input type="text" placeholder="Full Name" required />
//             <input type="email" placeholder="Email Address" required />
//             <input type="tel" placeholder="Phone Number" />
//             <select required>
//               <option value="">Select Service</option>
//               <option value="love">Love & Relationship</option>
//               <option value="career">Career Astrology</option>
//               <option value="vastu">Vastu Consultation</option>
//               <option value="numerology">Numerology Reading</option>
//             </select>
//             <textarea rows="5" placeholder="Your Message..."></textarea>

//             <motion.button
//               type="submit"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               <Send style={{ marginRight: "6px" }} size={18} /> Send Message
//             </motion.button>
//           </motion.form>
//         </section>

//         {/* 🪐 Footer */}
//         <footer className="contact-footer">
//           <MessageSquare size={20} />
//           <p>We’ll get back to you within 24 hours 💫</p>
//         </footer>
//       </div>
//     </div>
//   );
// };

// export default Contact;


// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { Mail, Phone, MapPin, MessageSquare, Send } from "lucide-react";
// import "../styles/Contact.css";

// const navLinks = [
//   { name: "Home", link: "/", icon: "🏠" },
//   { name: "About Us", link: "/about-us", icon: "✨" },
//   { name: "Energy", link: "/energy", icon: "⚡" },
//   { name: "Movement", link: "/movement", icon: "🌊" },
//   { name: "Space Vastu", link: "/space-vastu", icon: "🏛️" },
//   { name: "Manifestation", link: "/manifestation", icon: "💫" },
//   { name: "Material", link: "/material", icon: "💎" },
//   { name: "Blogs", link: "/blogs", icon: "📝" },
//   { name: "Careers", link: "/careers", icon: "💼" },
//   { name: "Contact", link: "/contact", icon: "📧" },
//   { name: "Login / Signup", link: "/auth", icon: "🔐" },
// ];

// const Contact = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(false);

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
//     <div className={`contact-page cosmic-bg ${sidebarOpen ? "sidebar-open" : ""}`}>
//       {/* Starfield */}
//       <div id="starfield" className="starfield"></div>

//       {/* Sidebar */}
//       <div className={`sidebar-home ${sidebarOpen ? "open" : ""}`}>
//         <h2 className="sidebar-logo">✨ AstroConnect</h2>
//         <ul>
//           {navLinks.map((item, idx) => (
//             <li key={idx}>
//               <a
//                 href={item.link}
//                 onClick={() => setSidebarOpen(false)}
//                 style={{
//                   display: "flex",
//                   alignItems: "center",
//                   gap: "10px",
//                   padding: "10px 15px",
//                   color: "#ccc",
//                   textDecoration: "none",
//                   borderRadius: "8px",
//                   transition: "all 0.3s",
//                 }}
//                 onMouseEnter={(e) => {
//                   e.target.style.background = "rgba(255,255,255,0.1)";
//                   e.target.style.color = "#fff";
//                 }}
//                 onMouseLeave={(e) => {
//                   e.target.style.background = "transparent";
//                   e.target.style.color = "#ccc";
//                 }}
//               >
//                 <span style={{ fontSize: "1.3rem" }}>{item.icon}</span>
//                 {item.name}
//               </a>
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Overlay */}
//       <div className={`sidebar-overlay ${sidebarOpen ? "visible" : ""}`} onClick={() => setSidebarOpen(false)}></div>

//       {/* Hamburger */}
//       <button className={`sidebar-toggle-home ${sidebarOpen ? "active" : ""}`} onClick={() => setSidebarOpen(!sidebarOpen)}>
//         ☰
//       </button>

//       {/* Contact Page Content */}
//       <div className="contact-content">
//         <section className="contact-hero">
//           <motion.h1 initial={{ opacity: 0, y: -40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
//             Connect With Our Astrologers
//           </motion.h1>

//           <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
//             Have questions about your birth chart, love life, or career? Get personalized insights from professional astrologers today.
//           </motion.p>
//         </section>

//         <section className="contact-container">
//           {/* Info Section */}
//           <div className="contact-info">
//             {[ 
//               { Icon: Mail, title: "Email", text: "support@astroconnect.com" },
//               { Icon: Phone, title: "Phone", text: "+91 98765 43210" },
//               { Icon: MapPin, title: "Location", text: "AstroConnect HQ, Delhi, India" },
//             ].map(({ Icon, title, text }, idx) => (
//               <motion.div key={idx} className="info-card" whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
//                 <Icon className="info-icon" />
//                 <h3>{title}</h3>
//                 <p>{text}</p>
//               </motion.div>
//             ))}
//           </div>

//           {/* Form Section */}
//           <motion.form className="contact-form" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
//             <h2 className="form-title">Send Us a Message</h2>

//             <input type="text" placeholder="Full Name" required />
//             <input type="email" placeholder="Email Address" required />
//             <input type="tel" placeholder="Phone Number" />
//             <select required>
//               <option value="">Select Service</option>
//               <option value="love">Love & Relationship</option>
//               <option value="career">Career Astrology</option>
//               <option value="vastu">Vastu Consultation</option>
//               <option value="numerology">Numerology Reading</option>
//             </select>
//             <textarea rows="5" placeholder="Your Message..."></textarea>

//             <motion.button type="submit" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//               <Send style={{ marginRight: "6px" }} size={18} /> Send Message
//             </motion.button>
//           </motion.form>
//         </section>

//         {/* Footer */}
//         <footer className="contact-footer">
//           <MessageSquare size={20} />
//           <p>We’ll get back to you within 24 hours 💫</p>
//         </footer>
//       </div>
//     </div>
//   );
// };

// export default Contact;

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, MessageSquare, Send } from "lucide-react";
import "../styles/Contact.css";

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

const Contact = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const starfield = document.getElementById("starfield");
    if (starfield && !starfield.hasChildNodes()) {
      for (let i = 0; i < 100; i++) {
        const star = document.createElement("div");
        star.className = "star";
        star.style.top = `${Math.random() * 100}%`;
        star.style.left = `${Math.random() * 100}%`;
        star.style.width = `${Math.random() * 2 + 1}px`;
        star.style.height = star.style.width;
        star.style.animationDuration = `${Math.random() * 3 + 2}s`;
        starfield.appendChild(star);
      }
    }
  }, []);

  return (
    <div
      className="contact-page cosmic-bg"
      style={{
        fontFamily: "Poppins, sans-serif",
        color: "#fff",
        background: "linear-gradient(180deg, #1a0033 0%, #0d001a 100%)",
        minHeight: "100vh",
        overflowX: "hidden",
      }}
    >
      {/* 🌌 Starfield */}
      <div id="starfield" className="starfield"></div>

      {/* 🧭 Sidebar */}
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

      {/* 📩 Main Contact Page */}
      <div
        className="contact-content"
        style={{
          marginLeft: sidebarOpen ? "270px" : "0",
          transition: "margin-left 0.6s ease",
        }}
      >
        {/* Hero Section */}
        <section className="contact-hero">
          <motion.h1 initial={{ opacity: 0, y: -40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            Connect With Our Astrologers
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            Have questions about your birth chart, love life, or career? Get personalized insights from professional astrologers today.
          </motion.p>
        </section>

        {/* Contact Info + Form */}
        <section className="contact-container">
          {/* Info Cards */}
          <div className="contact-info">
            {[
              { Icon: Mail, title: "Email", text: "support@astroconnect.com" },
              { Icon: Phone, title: "Phone", text: "+91 98765 43210" },
              { Icon: MapPin, title: "Location", text: "AstroConnect HQ, Delhi, India" },
            ].map(({ Icon, title, text }, idx) => (
              <motion.div
                key={idx}
                className="info-card"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Icon className="info-icon" />
                <h3>{title}</h3>
                <p>{text}</p>
              </motion.div>
            ))}
          </div>

          {/* Contact Form */}
          <motion.form
            className="contact-form"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="form-title">Send Us a Message</h2>

            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Email Address" required />
            <input type="tel" placeholder="Phone Number" />
            <select required>
              <option value="">Select Service</option>
              <option value="love">Love & Relationship</option>
              <option value="career">Career Astrology</option>
              <option value="vastu">Vastu Consultation</option>
              <option value="numerology">Numerology Reading</option>
            </select>
            <textarea rows="5" placeholder="Your Message..."></textarea>

            <motion.button type="submit" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Send style={{ marginRight: "6px" }} size={18} /> Send Message
            </motion.button>
          </motion.form>
        </section>

        {/* Footer */}
        <footer className="contact-footer">
          <MessageSquare size={20} />
          <p>We’ll get back to you within 24 hours 💫</p>
        </footer>
      </div>
    </div>
  );
};

export default Contact;
