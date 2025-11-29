// import React, { useState, useEffect } from "react";
// import "../../styles/Material.css";

// const services = [
//   {
//     label: "Individual Wealth Programme",
//     description:
//       "Identify inborn wealth signatures, reprogram wealth beliefs, optimize behavior, environment, and energy, karmic clearing, ongoing optimization.",
//     deliverable: "Paid PDF",
//   },
//   {
//     label: "Business Consulting",
//     description:
//       "Tailored business strategy call with chart-based insights, decode blocks, pricing, branding, investor compatibility, execution plan.",
//     deliverable: "Consultation + PDF",
//   },
//   {
//     label: "Abundance Programme",
//     description:
//       "Specific plans based on chart to maximize wealth. Guidance on finances, investments, and wealth creation strategies.",
//     deliverable: "Paid PDF",
//   },
// ];

// const clientLogos = [
//   "/clients/client1.png",
//   "/clients/client2.png",
//   "/clients/client3.png",
//   "/clients/client4.png",
//   "/clients/client5.png",
// ];

// const Material = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [step, setStep] = useState(1);
//   const [selectedService, setSelectedService] = useState(null);
//   const [formData, setFormData] = useState({
//     fullName: "",
//     dob: "",
//     tob: "",
//     pob: "",
//     occupation: "",
//     aspiredOccupation: "",
//     businessName: "",
//     industry: "",
//     businessStage: "",
//     keyConcerns: "",
//     links: "",
//     questions: "",
//   });

//   useEffect(() => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   }, [step]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleServiceSelect = (service) => {
//     setSelectedService(service);
//     setStep(2);
//   };

//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     setStep(3);
//   };

//   const handlePayment = () => setStep(4);

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

//   const renderStars = (count) =>
//     Array.from({ length: count }).map((_, i) => (
//       <div
//         key={i}
//         className="floating-star"
//         style={{
//           top: `${Math.random() * 100}%`,
//           left: `${Math.random() * 100}%`,
//           animationDuration: `${2 + Math.random() * 4}s`,
//           width: `${1 + Math.random() * 3}px`,
//           height: `${1 + Math.random() * 3}px`,
//         }}
//       ></div>
//     ));

//   return (
//     <div className="material-page cosmic-bg">
//       {/* ✨ Background Layers */}
//       <div className="stars-layer">{renderStars(80)}</div>
//       <div className="orb orb1"></div>
//       <div className="orb orb2"></div>
//       <div className="orb orb3"></div>

//       {/* 🧭 Sidebar */}
//       <div className={`sidebar-home ${sidebarOpen ? "open" : ""}`}>
//         <h2 className="sidebar-logo">AstroConnect</h2>
//         <ul>
//           {navLinks.map((item, idx) => (
//             <li key={idx}>
//               <a href={item.link}>{item.name}</a>
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

//       {/* 🌌 Main Content */}
//       <div className="material-content">
//         {/* Hero Section */}
//         <section className="hero-section">
//           <h1>Material: Wealth Architecture Programme</h1>
//           <p>
//             Material helps you achieve material success through wealth
//             alignment, behavior optimization, karmic clearing, and strategic
//             planning.
//           </p>
//         </section>

//         {/* Step 1 — Offerings */}
//         {step === 1 && (
//           <section className="offerings-section">
//             <h2>Our Offerings</h2>
//             <div className="offerings-grid">
//               {services.map((service, idx) => (
//                 <div key={idx} className="service-card glass-card">
//                   <h3>{service.label}</h3>
//                   <p>{service.description}</p>
//                   <span className="deliverable">{service.deliverable}</span>
//                   <button
//                     className="cta-btn"
//                     onClick={() => handleServiceSelect(service)}
//                   >
//                     Book Now
//                   </button>
//                 </div>
//               ))}
//             </div>
//           </section>
//         )}

//         {/* Step 2 — Form */}
//         {step === 2 && selectedService && (
//           <section className="form-section glass-card">
//             <h2>{selectedService.label}</h2>
//             <p>{selectedService.description}</p>
//             <form className="material-form" onSubmit={handleFormSubmit}>
//               <input
//                 type="text"
//                 name="fullName"
//                 placeholder="Full Name"
//                 value={formData.fullName}
//                 onChange={handleChange}
//                 required
//               />
//               <input
//                 type="date"
//                 name="dob"
//                 value={formData.dob}
//                 onChange={handleChange}
//                 required
//               />
//               <input
//                 type="text"
//                 name="tob"
//                 placeholder="Time of Birth"
//                 value={formData.tob}
//                 onChange={handleChange}
//               />
//               <input
//                 type="text"
//                 name="pob"
//                 placeholder="Place of Birth"
//                 value={formData.pob}
//                 onChange={handleChange}
//               />
//               <input
//                 type="text"
//                 name="occupation"
//                 placeholder="Current Occupation"
//                 value={formData.occupation}
//                 onChange={handleChange}
//               />
//               <input
//                 type="text"
//                 name="aspiredOccupation"
//                 placeholder="Aspired Occupation"
//                 value={formData.aspiredOccupation}
//                 onChange={handleChange}
//               />
//               <input
//                 type="text"
//                 name="businessName"
//                 placeholder="Business Name (if any)"
//                 value={formData.businessName}
//                 onChange={handleChange}
//               />
//               <input
//                 type="text"
//                 name="industry"
//                 placeholder="Industry"
//                 value={formData.industry}
//                 onChange={handleChange}
//               />
//               <select
//                 name="businessStage"
//                 value={formData.businessStage}
//                 onChange={handleChange}
//               >
//                 <option value="">-- Business Stage --</option>
//                 <option value="Idea">Idea</option>
//                 <option value="Startup">Startup</option>
//                 <option value="Established">Established</option>
//               </select>
//               <textarea
//                 name="keyConcerns"
//                 placeholder="Key Business Concerns / Goals"
//                 rows={3}
//                 value={formData.keyConcerns}
//                 onChange={handleChange}
//               ></textarea>
//               <input
//                 type="text"
//                 name="links"
//                 placeholder="Relevant Links (Website, Instagram)"
//                 value={formData.links}
//                 onChange={handleChange}
//               />
//               <textarea
//                 name="questions"
//                 placeholder="Specific Questions (Optional)"
//                 rows={3}
//                 value={formData.questions}
//                 onChange={handleChange}
//               ></textarea>
//               <button type="submit" className="cta-btn">
//                 Proceed to Payment
//               </button>
//             </form>
//           </section>
//         )}

//         {/* Step 3 — Payment */}
//         {step === 3 && (
//           <section className="payment-section glass-card">
//             <h2>Payment</h2>
//             <p>Amount: <strong>Paid Service</strong></p>
//             <div className="payment-card">
//               <input type="text" placeholder="Cardholder Name" />
//               <input type="text" placeholder="Card Number" />
//               <div className="card-details-row">
//                 <input type="text" placeholder="MM/YY" />
//                 <input type="text" placeholder="CVV" />
//               </div>
//               <button className="pay-btn" onClick={handlePayment}>
//                 Pay Now
//               </button>
//             </div>
//             <div className="alternative-payments">
//               <p>Or pay with:</p>
//               <button className="wallet-btn">Google Pay</button>
//               <button className="wallet-btn">Paytm</button>
//               <button className="wallet-btn">PhonePe</button>
//             </div>
//           </section>
//         )}

//         {/* Step 4 — Confirmation */}
//         {step === 4 && (
//           <section className="confirmation-section glass-card">
//             <h2>Payment Successful!</h2>
//             <p>
//               Your request for <strong>{selectedService.label}</strong> has been
//               received.
//             </p>
//             <p>
//               You’ll get your consultation details via Email / WhatsApp shortly.
//             </p>
//             <button className="cta-btn" onClick={() => setStep(1)}>
//               Back to Services
//             </button>
//           </section>
//         )}

//         {/* Clients */}
//         <section className="clients-section">
//           <h2>Our Esteemed Clients</h2>
//           <div className="clients-logos">
//             {clientLogos.map((logo, idx) => (
//               <img key={idx} src={logo} alt={`Client ${idx + 1}`} />
//             ))}
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default Material;

// import React, { useState, useEffect } from "react";
// import "../../styles/Material.css";

// const services = [
//   {
//     label: "Individual Wealth Programme",
//     description:
//       "Identify inborn wealth signatures, reprogram wealth beliefs, optimize behavior, environment, and energy, karmic clearing, ongoing optimization.",
//     deliverable: "Paid PDF",
//   },
//   {
//     label: "Business Consulting",
//     description:
//       "Tailored business strategy call with chart-based insights, decode blocks, pricing, branding, investor compatibility, execution plan.",
//     deliverable: "Consultation + PDF",
//   },
//   {
//     label: "Abundance Programme",
//     description:
//       "Specific plans based on chart to maximize wealth. Guidance on finances, investments, and wealth creation strategies.",
//     deliverable: "Paid PDF",
//   },
// ];

// const clientLogos = [
//   "/clients/client1.png",
//   "/clients/client2.png",
//   "/clients/client3.png",
//   "/clients/client4.png",
//   "/clients/client5.png",
// ];

// const Material = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [step, setStep] = useState(1);
//   const [selectedService, setSelectedService] = useState(null);
//   const [formData, setFormData] = useState({
//     fullName: "",
//     dob: "",
//     tob: "",
//     pob: "",
//     occupation: "",
//     aspiredOccupation: "",
//     businessName: "",
//     industry: "",
//     businessStage: "",
//     keyConcerns: "",
//     links: "",
//     questions: "",
//   });

//   useEffect(() => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   }, [step]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleServiceSelect = (service) => {
//     setSelectedService(service);
//     setStep(2);
//   };

//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     setStep(3);
//   };

//   const handlePayment = () => setStep(4);

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

//   const renderStars = (count) =>
//     Array.from({ length: count }).map((_, i) => (
//       <div
//         key={i}
//         className="floating-star"
//         style={{
//           top: `${Math.random() * 100}%`,
//           left: `${Math.random() * 100}%`,
//           animationDuration: `${2 + Math.random() * 4}s`,
//           width: `${1 + Math.random() * 3}px`,
//           height: `${1 + Math.random() * 3}px`,
//         }}
//       ></div>
//     ));

//   return (
//     <div
//       className={`material-page cosmic-bg ${sidebarOpen ? "sidebar-open" : ""}`}
//     >
//       {/* ✨ Background Layers */}
//       <div className="stars-layer">{renderStars(80)}</div>
//       <div className="orb orb1"></div>
//       <div className="orb orb2"></div>
//       <div className="orb orb3"></div>

//       {/* 🧭 Sidebar */}
//       <div className={`sidebar-home ${sidebarOpen ? "open" : ""}`}>
//         <h2 className="sidebar-logo">AstroConnect</h2>
//         <ul>
//           {navLinks.map((item, idx) => (
//             <li key={idx}>
//               <a href={item.link}>{item.name}</a>
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* 🌑 Overlay behind sidebar */}
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

//       {/* 🌌 Main Content */}
//       <div className="material-content">
//         {/* Hero Section */}
//         <section className="hero-section">
//           <h1>Material: Wealth Architecture Programme</h1>
//           <p>
//             Material helps you achieve material success through wealth alignment,
//             behavior optimization, karmic clearing, and strategic planning.
//           </p>
//         </section>

//         {/* Step 1 — Offerings */}
//         {step === 1 && (
//           <section className="offerings-section">
//             <h2>Our Offerings</h2>
//             <div className="offerings-grid">
//               {services.map((service, idx) => (
//                 <div key={idx} className="service-card glass-card">
//                   <h3>{service.label}</h3>
//                   <p>{service.description}</p>
//                   <span className="deliverable">{service.deliverable}</span>
//                   <button
//                     className="cta-btn"
//                     onClick={() => handleServiceSelect(service)}
//                   >
//                     Book Now
//                   </button>
//                 </div>
//               ))}
//             </div>
//           </section>
//         )}

//         {/* Step 2 — Form */}
//         {step === 2 && selectedService && (
//           <section className="form-section glass-card">
//             <h2>{selectedService.label}</h2>
//             <p>{selectedService.description}</p>
//             <form className="material-form" onSubmit={handleFormSubmit}>
//               <input
//                 type="text"
//                 name="fullName"
//                 placeholder="Full Name"
//                 value={formData.fullName}
//                 onChange={handleChange}
//                 required
//               />
//               <input
//                 type="date"
//                 name="dob"
//                 value={formData.dob}
//                 onChange={handleChange}
//                 required
//               />
//               <input
//                 type="text"
//                 name="tob"
//                 placeholder="Time of Birth"
//                 value={formData.tob}
//                 onChange={handleChange}
//               />
//               <input
//                 type="text"
//                 name="pob"
//                 placeholder="Place of Birth"
//                 value={formData.pob}
//                 onChange={handleChange}
//               />
//               <input
//                 type="text"
//                 name="occupation"
//                 placeholder="Current Occupation"
//                 value={formData.occupation}
//                 onChange={handleChange}
//               />
//               <input
//                 type="text"
//                 name="aspiredOccupation"
//                 placeholder="Aspired Occupation"
//                 value={formData.aspiredOccupation}
//                 onChange={handleChange}
//               />
//               <input
//                 type="text"
//                 name="businessName"
//                 placeholder="Business Name (if any)"
//                 value={formData.businessName}
//                 onChange={handleChange}
//               />
//               <input
//                 type="text"
//                 name="industry"
//                 placeholder="Industry"
//                 value={formData.industry}
//                 onChange={handleChange}
//               />
//               <select
//                 name="businessStage"
//                 value={formData.businessStage}
//                 onChange={handleChange}
//               >
//                 <option value="">-- Business Stage --</option>
//                 <option value="Idea">Idea</option>
//                 <option value="Startup">Startup</option>
//                 <option value="Established">Established</option>
//               </select>
//               <textarea
//                 name="keyConcerns"
//                 placeholder="Key Business Concerns / Goals"
//                 rows={3}
//                 value={formData.keyConcerns}
//                 onChange={handleChange}
//               ></textarea>
//               <input
//                 type="text"
//                 name="links"
//                 placeholder="Relevant Links (Website, Instagram)"
//                 value={formData.links}
//                 onChange={handleChange}
//               />
//               <textarea
//                 name="questions"
//                 placeholder="Specific Questions (Optional)"
//                 rows={3}
//                 value={formData.questions}
//                 onChange={handleChange}
//               ></textarea>
//               <button type="submit" className="cta-btn">
//                 Proceed to Payment
//               </button>
//             </form>
//           </section>
//         )}

//         {/* Step 3 — Payment */}
//         {step === 3 && (
//           <section className="payment-section glass-card">
//             <h2>Payment</h2>
//             <p>
//               Amount: <strong>Paid Service</strong>
//             </p>
//             <div className="payment-card">
//               <input type="text" placeholder="Cardholder Name" />
//               <input type="text" placeholder="Card Number" />
//               <div className="card-details-row">
//                 <input type="text" placeholder="MM/YY" />
//                 <input type="text" placeholder="CVV" />
//               </div>
//               <button className="pay-btn" onClick={handlePayment}>
//                 Pay Now
//               </button>
//             </div>
//             <div className="alternative-payments">
//               <p>Or pay with:</p>
//               <button className="wallet-btn">Google Pay</button>
//               <button className="wallet-btn">Paytm</button>
//               <button className="wallet-btn">PhonePe</button>
//             </div>
//           </section>
//         )}

//         {/* Step 4 — Confirmation */}
//         {step === 4 && (
//           <section className="confirmation-section glass-card">
//             <h2>Payment Successful!</h2>
//             <p>
//               Your request for <strong>{selectedService.label}</strong> has been
//               received.
//             </p>
//             <p>
//               You’ll get your consultation details via Email / WhatsApp shortly.
//             </p>
//             <button className="cta-btn" onClick={() => setStep(1)}>
//               Back to Services
//             </button>
//           </section>
//         )}

//         {/* Clients */}
//         <section className="clients-section">
//           <h2>Our Esteemed Clients</h2>
//           <div className="clients-logos">
//             {clientLogos.map((logo, idx) => (
//               <img key={idx} src={logo} alt={`Client ${idx + 1}`} />
//             ))}
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default Material;

// import React, { useState, useEffect } from "react";
// import "../../styles/Material.css";

// const services = [
//   {
//     label: "Individual Wealth Programme",
//     description:
//       "Identify inborn wealth signatures, reprogram wealth beliefs, optimize behavior, environment, and energy, karmic clearing, ongoing optimization.",
//     deliverable: "Paid PDF",
//   },
//   {
//     label: "Business Consulting",
//     description:
//       "Tailored business strategy call with chart-based insights, decode blocks, pricing, branding, investor compatibility, execution plan.",
//     deliverable: "Consultation + PDF",
//   },
//   {
//     label: "Abundance Programme",
//     description:
//       "Specific plans based on chart to maximize wealth. Guidance on finances, investments, and wealth creation strategies.",
//     deliverable: "Paid PDF",
//   },
// ];

// const clientLogos = [
//   "/clients/client1.png",
//   "/clients/client2.png",
//   "/clients/client3.png",
//   "/clients/client4.png",
//   "/clients/client5.png",
// ];

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

// const Material = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [step, setStep] = useState(1);
//   const [selectedService, setSelectedService] = useState(null);
//   const [formData, setFormData] = useState({
//     fullName: "",
//     dob: "",
//     tob: "",
//     pob: "",
//     occupation: "",
//     aspiredOccupation: "",
//     businessName: "",
//     industry: "",
//     businessStage: "",
//     keyConcerns: "",
//     links: "",
//     questions: "",
//   });

//   useEffect(() => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   }, [step]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleServiceSelect = (service) => {
//     setSelectedService(service);
//     setStep(2);
//   };

//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     setStep(3);
//   };

//   const handlePayment = () => setStep(4);

//   return (
//     <div className={`material-page cosmic-bg ${sidebarOpen ? "sidebar-open" : ""}`}>
//       {/* ✨ Background Layers */}
//       <div className="stars-layer"></div>
//       <div className="orb orb1"></div>
//       <div className="orb orb2"></div>
//       <div className="orb orb3"></div>

//       {/* 🧭 Sidebar */}
//       <div className={`sidebar-home ${sidebarOpen ? "open" : ""}`}>
//         <h2 className="sidebar-logo">AstroConnect</h2>
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
//                 <span style={{ fontSize: "1.3rem" }}>{item.icon}</span> {item.name}
//               </a>
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* 🌑 Overlay behind sidebar */}
//       <div className={`sidebar-overlay ${sidebarOpen ? "visible" : ""}`} onClick={() => setSidebarOpen(false)}></div>

//       {/* 🍔 Hamburger */}
//       <button
//         className={`sidebar-toggle-home ${sidebarOpen ? "active" : ""}`}
//         onClick={() => setSidebarOpen(!sidebarOpen)}
//       >
//         ☰
//       </button>

//       {/* 🌌 Main Content */}
//       <div className="material-content">
//         {/* Hero Section */}
//         <section className="hero-section">
//           <h1>Material: Wealth Architecture Programme</h1>
//           <p>
//             Material helps you achieve material success through wealth alignment, behavior optimization, karmic clearing,
//             and strategic planning.
//           </p>
//         </section>

//         {/* Step 1 — Offerings */}
//         {step === 1 && (
//           <section className="offerings-section">
//             <h2>Our Offerings</h2>
//             <div className="offerings-grid">
//               {services.map((service, idx) => (
//                 <div key={idx} className="service-card glass-card">
//                   <h3>{service.label}</h3>
//                   <p>{service.description}</p>
//                   <span className="deliverable">{service.deliverable}</span>
//                   <button className="cta-btn" onClick={() => handleServiceSelect(service)}>
//                     Book Now
//                   </button>
//                 </div>
//               ))}
//             </div>
//           </section>
//         )}

//         {/* Step 2 — Form */}
//         {step === 2 && selectedService && (
//           <section className="form-section glass-card">
//             <h2>{selectedService.label}</h2>
//             <p>{selectedService.description}</p>
//             <form className="material-form" onSubmit={handleFormSubmit}>
//               <input type="text" name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} required />
//               <input type="date" name="dob" value={formData.dob} onChange={handleChange} required />
//               <input type="text" name="tob" placeholder="Time of Birth" value={formData.tob} onChange={handleChange} />
//               <input type="text" name="pob" placeholder="Place of Birth" value={formData.pob} onChange={handleChange} />
//               <input type="text" name="occupation" placeholder="Current Occupation" value={formData.occupation} onChange={handleChange} />
//               <input
//                 type="text"
//                 name="aspiredOccupation"
//                 placeholder="Aspired Occupation"
//                 value={formData.aspiredOccupation}
//                 onChange={handleChange}
//               />
//               <input type="text" name="businessName" placeholder="Business Name (if any)" value={formData.businessName} onChange={handleChange} />
//               <input type="text" name="industry" placeholder="Industry" value={formData.industry} onChange={handleChange} />
//               <select name="businessStage" value={formData.businessStage} onChange={handleChange}>
//                 <option value="">-- Business Stage --</option>
//                 <option value="Idea">Idea</option>
//                 <option value="Startup">Startup</option>
//                 <option value="Established">Established</option>
//               </select>
//               <textarea
//                 name="keyConcerns"
//                 placeholder="Key Business Concerns / Goals"
//                 rows={3}
//                 value={formData.keyConcerns}
//                 onChange={handleChange}
//               ></textarea>
//               <input type="text" name="links" placeholder="Relevant Links (Website, Instagram)" value={formData.links} onChange={handleChange} />
//               <textarea
//                 name="questions"
//                 placeholder="Specific Questions (Optional)"
//                 rows={3}
//                 value={formData.questions}
//                 onChange={handleChange}
//               ></textarea>
//               <button type="submit" className="cta-btn">
//                 Proceed to Payment
//               </button>
//             </form>
//           </section>
//         )}

//         {/* Step 3 — Payment */}
//         {step === 3 && (
//           <section className="payment-section glass-card">
//             <h2>Payment</h2>
//             <p>
//               Amount: <strong>Paid Service</strong>
//             </p>
//             <div className="payment-card">
//               <input type="text" placeholder="Cardholder Name" />
//               <input type="text" placeholder="Card Number" />
//               <div className="card-details-row">
//                 <input type="text" placeholder="MM/YY" />
//                 <input type="text" placeholder="CVV" />
//               </div>
//               <button className="pay-btn" onClick={handlePayment}>
//                 Pay Now
//               </button>
//             </div>
//             <div className="alternative-payments">
//               <p>Or pay with:</p>
//               <button className="wallet-btn">Google Pay</button>
//               <button className="wallet-btn">Paytm</button>
//               <button className="wallet-btn">PhonePe</button>
//             </div>
//           </section>
//         )}

//         {/* Step 4 — Confirmation */}
//         {step === 4 && (
//           <section className="confirmation-section glass-card">
//             <h2>Payment Successful!</h2>
//             <p>
//               Your request for <strong>{selectedService.label}</strong> has been received.
//             </p>
//             <p>You’ll get your consultation details via Email / WhatsApp shortly.</p>
//             <button className="cta-btn" onClick={() => setStep(1)}>
//               Back to Services
//             </button>
//           </section>
//         )}

//         {/* Clients */}
//         <section className="clients-section">
//           <h2>Our Esteemed Clients</h2>
//           <div className="clients-logos">
//             {clientLogos.map((logo, idx) => (
//               <img key={idx} src={logo} alt={`Client ${idx + 1}`} />
//             ))}
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default Material;

// import React, { useState, useEffect } from "react";
// import "../../styles/Material.css";

// const services = [
//   {
//     label: "Individual Wealth Programme",
//     description:
//       "Identify inborn wealth signatures, reprogram wealth beliefs, optimize behavior, environment, and energy, karmic clearing, ongoing optimization.",
//     deliverable: "Paid PDF",
//   },
//   {
//     label: "Business Consulting",
//     description:
//       "Tailored business strategy call with chart-based insights, decode blocks, pricing, branding, investor compatibility, execution plan.",
//     deliverable: "Consultation + PDF",
//   },
//   {
//     label: "Abundance Programme",
//     description:
//       "Specific plans based on chart to maximize wealth. Guidance on finances, investments, and wealth creation strategies.",
//     deliverable: "Paid PDF",
//   },
// ];

// const clientLogos = [
//   "/clients/client1.png",
//   "/clients/client2.png",
//   "/clients/client3.png",
//   "/clients/client4.png",
//   "/clients/client5.png",
// ];

// // const navLinks = [
// //   { name: "Home", link: "/", icon: "🏠" },
// //   { name: "About Us", link: "/about-us", icon: "✨" },
// //   { name: "Energy", link: "/energy", icon: "⚡" },
// //   { name: "Movement", link: "/movement", icon: "🌊" },
// //   { name: "Space Vastu", link: "/space-vastu", icon: "🏛️" },
// //   { name: "Manifestation", link: "/manifestation", icon: "💫" },
// //   { name: "Material", link: "/material", icon: "💎" },
// //   { name: "Blogs", link: "/blogs", icon: "📝" },
// //   { name: "Careers", link: "/careers", icon: "💼" },
// //   { name: "Contact", link: "/contact", icon: "📧" },
// //   { name: "Login / Signup", link: "/auth", icon: "🔐" },
// // ];
// const navLinks = [
//     { name: "Home", link: "#home" },
//     { name: "About Us", link: "#about-us" },
//     { name: "Energy", link: "/energy" },
//      { name: "Astrology", link: "/Astrology" },
//     { name: "Vastu", link: "/vastu" },
//     { name: "Manifestation", link: "/manifestation" },
//     { name: "Material", link: "/material" },
//     { name: "Blogs", link: "/blogs" },
//     { name: "Careers", link: "#careers" },
//     { name: "Contact", link: "/contact" },
//     { name: "Login / Signup", link: "/auth" },
//   ];
// const Material = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [step, setStep] = useState(1);
//   const [selectedService, setSelectedService] = useState(null);
//   const [formData, setFormData] = useState({
//     fullName: "",
//     dob: "",
//     tob: "",
//     pob: "",
//     occupation: "",
//     aspiredOccupation: "",
//     businessName: "",
//     industry: "",
//     businessStage: "",
//     keyConcerns: "",
//     links: "",
//     questions: "",
//   });

//   useEffect(() => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   }, [step]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleServiceSelect = (service) => {
//     setSelectedService(service);
//     setStep(2);
//   };

//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     setStep(3);
//   };

//   const handlePayment = () => setStep(4);

//   return (
//     <div
//       className="material-page cosmic-bg"
//       style={{
//         fontFamily: "Poppins, sans-serif",
//         color: "#fff",
//         background: "linear-gradient(180deg, #1a0033 0%, #0d001a 100%)",
//         minHeight: "100vh",
//         overflowX: "hidden",
//       }}
//     >
//       {/* === Sidebar === */}
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
//         {/* ✕ Close Button */}
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
//               transition: "all 0.3s ease",
//             }}
//             onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1) rotate(90deg)")}
//             onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1) rotate(0deg)")}
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
//                 onMouseEnter={(e) => {
//                   e.target.style.color = "#fff";
//                   e.target.style.background = "rgba(255,255,255,0.1)";
//                 }}
//                 onMouseLeave={(e) => {
//                   e.target.style.color = "#ccc";
//                   e.target.style.background = "transparent";
//                 }}
//               >
//                 <span style={{ fontSize: "1.4rem" }}>{item.icon}</span>
//                 {item.name}
//               </a>
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* ☰ Hamburger */}
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
//             transition: "all 0.3s ease-in-out",
//           }}
//         >
//           ☰
//         </button>
//       )}

//       {/* === Main Content === */}
//       <div
//         className="material-content"
//         style={{
//           marginLeft: sidebarOpen ? "270px" : "0",
//           transition: "margin-left 0.5s ease",
//         }}
//       >
//         {/* Hero Section */}
//         <section className="hero-section">
//           <h1>Material: Wealth Architecture Programme</h1>
//           <p>
//             Material helps you achieve material success through wealth alignment, behavior optimization,
//             karmic clearing, and strategic planning.
//           </p>
//         </section>

//         {/* Step 1 — Offerings */}
//         {step === 1 && (
//           <section className="offerings-section">
//             <h2>Our Offerings</h2>
//             <div className="offerings-grid">
//               {services.map((service, idx) => (
//                 <div key={idx} className="service-card glass-card">
//                   <h3>{service.label}</h3>
//                   <p>{service.description}</p>
//                   <span className="deliverable">{service.deliverable}</span>
//                   <button className="cta-btn" onClick={() => handleServiceSelect(service)}>
//                     Book Now
//                   </button>
//                 </div>
//               ))}
//             </div>
//           </section>
//         )}

//         {/* Step 2 — Wealth Programme Form (Cosmic Edition) */}
// {step === 2 && selectedService && (
//   <section
//     className="form-section"
//     style={{
//       background: "rgba(255,255,255,0.1)",
//       backdropFilter: "blur(20px)",
//       borderRadius: "25px",
//       padding: "3rem 2.5rem",
//       maxWidth: "780px",
//       margin: "3rem auto",
//       boxShadow: "0 0 45px rgba(255,0,255,0.25)",
//       textAlign: "center",
//     }}
//   >
//     <h2
//       style={{
//         fontSize: "2.3rem",
//         background: "linear-gradient(90deg, #ff00ff, #00ffff)",
//         WebkitBackgroundClip: "text",
//         WebkitTextFillColor: "white",
//         marginBottom: "0.6rem",
//       }}
//     >
//       💎 {selectedService.label}
//     </h2>
//     <p
//       style={{
//         // color: "#d9d8ff",
//            color: "white",
//         fontSize: "1rem",
//         marginBottom: "2rem",
//         lineHeight: "1.5",
//       }}
//     >
//       {selectedService.description}
//     </p>

//     <style>{`
//       .material-form {
//         display: flex;
//         flex-direction: column;
//         gap: 1.6rem;
//         max-width: 550px;
//         margin: 0 auto;
//       }

//       .input-group {
//         position: relative;
//         width: 100%;
//       }

//       .input-group input,
//       .input-group select,
//       .input-group textarea {
//         width: 100%;
//         padding: 14px 16px 14px 48px;
//         font-size: 1rem;
//         background: rgba(255,255,255,0.08);
//         border: 1.5px solid rgba(255,255,255,0.2);
//         border-radius: 14px;
//         color: #fff;
//         outline: none;
//         transition: all 0.35s ease;
//       }

//       .input-group input:focus,
//       .input-group select:focus,
//       .input-group textarea:focus {
//         border-color: #ff00ff;
//         box-shadow: 0 0 18px rgba(255,0,255,0.4);
//         background: rgba(255,255,255,0.12);
//       }

//       .input-group label {
//         position: absolute;
//         left: 48px;
//         top: 50%;
//         transform: translateY(-50%);
//         // color: #bbb;
//         color: white;
//         font-size: 0.95rem;
//         pointer-events: none;
//         transition: all 0.3s ease;
//       }

//       .input-group input:focus + label,
//       .input-group input:not(:placeholder-shown) + label,
//       .input-group textarea:focus + label,
//       .input-group textarea:not(:placeholder-shown) + label,
//       .input-group select:focus + label,
//       .input-group select:not([value=""]) + label {
//         top: -9px;
//         left: 42px;
//         background: radial-gradient(circle at top left, #1a002f, #0a0018);
//         padding: 0 6px;
//         color: #ff9cff;
//         font-size: 0.8rem;
//       }

//       .input-group .icon {
//         position: absolute;
//         left: 14px;
//         top: 50%;
//         transform: translateY(-50%);
//         color: #aaa;
//         font-size: 20px;
//         transition: color 0.3s ease;
//       }

//       .input-group input:focus ~ .icon,
//       .input-group textarea:focus ~ .icon,
//       .input-group select:focus ~ .icon {
//         color: #ff66ff;
//         filter: drop-shadow(0 0 6px #ff00ff);
//       }

//       .glow-btn {
//         margin-top: 2rem;
//         background: linear-gradient(90deg, #ff00ff, #8a2be2, #00ffff);
//         border: none;
//         color: #fff;
//         padding: 15px 50px;
//         border-radius: 50px;
//         font-weight: 700;
//         font-size: 1.05rem;
//         cursor: pointer;
//         transition: all 0.4s ease;
//         box-shadow: 0 0 25px rgba(255,0,255,0.3);
//       }

//       .glow-btn:hover {
//         box-shadow: 0 0 45px rgba(255,0,255,0.7);
//         transform: scale(1.08);
//       }

//       .glow-btn:active {
//         transform: scale(0.98);
//         box-shadow: 0 0 25px rgba(255,255,255,0.4);
//       }
//     `}</style>

//     <form className="material-form" onSubmit={handleFormSubmit}>
//       <div className="input-group">
//         <i className="icon">👤</i>
//         <input name="fullName" placeholder=" " value={formData.fullName} onChange={handleChange} required />
//         <label>Full Name</label>
//       </div>

//       <div className="input-group">
//         <i className="icon">📅</i>
//         <input type="date" name="dob" placeholder=" " value={formData.dob} onChange={handleChange} required />
//         <label>Date of Birth</label>
//       </div>

//       <div className="input-group">
//         <i className="icon">⏰</i>
//         <input name="tob" placeholder=" " value={formData.tob} onChange={handleChange} />
//         <label>Time of Birth</label>
//       </div>

//       <div className="input-group">
//         <i className="icon">📍</i>
//         <input name="pob" placeholder=" " value={formData.pob} onChange={handleChange} />
//         <label>Place of Birth</label>
//       </div>

//       <div className="input-group">
//         <i className="icon">💼</i>
//         <input name="occupation" placeholder=" " value={formData.occupation} onChange={handleChange} />
//         <label>Current Occupation</label>
//       </div>

//       <div className="input-group">
//         <i className="icon">🚀</i>
//         <input name="aspiredOccupation" placeholder=" " value={formData.aspiredOccupation} onChange={handleChange} />
//         <label>Aspired Occupation</label>
//       </div>

//       <div className="input-group">
//         <i className="icon">🏢</i>
//         <input name="businessName" placeholder=" " value={formData.businessName} onChange={handleChange} />
//         <label>Business Name (if any)</label>
//       </div>

//       <div className="input-group">
//         <i className="icon">🏭</i>
//         <input name="industry" placeholder=" " value={formData.industry} onChange={handleChange} />
//         <label>Industry</label>
//       </div>

//       <div className="input-group">
//         <i className="icon">📊</i>
//         <select name="businessStage" value={formData.businessStage} onChange={handleChange}>
//           <option value="">Select Business Stage</option>
//           <option value="Idea">Idea</option>
//           <option value="Startup">Startup</option>
//           <option value="Established">Established</option>
//         </select>
//         <label>Business Stage</label>
//       </div>

//       <div className="input-group">
//         <i className="icon">🧭</i>
//         <textarea
//           name="keyConcerns"
//           placeholder=" "
//           rows="3"
//           value={formData.keyConcerns}
//           onChange={handleChange}
//         ></textarea>
//         <label>Key Business Concerns / Goals</label>
//       </div>

//       <div className="input-group">
//         <i className="icon">🔗</i>
//         <input name="links" placeholder=" " value={formData.links} onChange={handleChange} />
//         <label>Relevant Links (Website, Instagram)</label>
//       </div>

//       <div className="input-group">
//         <i className="icon">💬</i>
//         <textarea
//           name="questions"
//           placeholder=" "
//           rows="3"
//           value={formData.questions}
//           onChange={handleChange}
//         ></textarea>
//         <label>Specific Questions (Optional)</label>
//       </div>

//       <button type="submit" className="glow-btn">
//         Proceed to Payment 💫
//       </button>
//     </form>
//   </section>
// )}


//         {/* Step 3 — Payment */}
//         {step === 3 && (
//           <section className="payment-section glass-card">
//             <h2>Payment</h2>
//             <p>
//               Amount: <strong>Paid Service</strong>
//             </p>
//             <div className="payment-card">
//               <input type="text" placeholder="Cardholder Name" />
//               <input type="text" placeholder="Card Number" />
//               <div className="card-details-row">
//                 <input type="text" placeholder="MM/YY" />
//                 <input type="text" placeholder="CVV" />
//               </div>
//               <button className="pay-btn" onClick={handlePayment}>
//                 Pay Now
//               </button>
//             </div>
//             <div className="alternative-payments">
//               <p>Or pay with:</p>
//               <button className="wallet-btn">Google Pay</button>
//               <button className="wallet-btn">Paytm</button>
//               <button className="wallet-btn">PhonePe</button>
//             </div>
//           </section>
//         )}

//         {/* Step 4 — Confirmation */}
//         {step === 4 && (
//           <section className="confirmation-section glass-card">
//             <h2>Payment Successful!</h2>
//             <p>
//               Your request for <strong>{selectedService.label}</strong> has been received.
//             </p>
//             <p>You’ll get your consultation details via Email / WhatsApp shortly.</p>
//             <button className="cta-btn" onClick={() => setStep(1)}>
//               Back to Services
//             </button>
//           </section>
//         )}

//         {/* Clients */}
//         <section className="clients-section">
//           <h2>Our Esteemed Clients</h2>
//           <div className="clients-logos">
//             {clientLogos.map((logo, idx) => (
//               <img key={idx} src={logo} alt={`Client ${idx + 1}`} />
//             ))}
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default Material;

// import React, { useState, useEffect } from "react";
// import "../../styles/Material.css";

// const services = [
//   {
//     label: "Individual Wealth Programme",
//     description:
//       "Identify inborn wealth signatures, reprogram wealth beliefs, optimize behavior, environment, and energy, karmic clearing, ongoing optimization.",
//     deliverable: "Paid PDF",
//   },
//   {
//     label: "Business Consulting",
//     description:
//       "Tailored business strategy call with chart-based insights, decode blocks, pricing, branding, investor compatibility, execution plan.",
//     deliverable: "Consultation + PDF",
//   },
//   {
//     label: "Abundance Programme",
//     description:
//       "Specific plans based on chart to maximize wealth. Guidance on finances, investments, and wealth creation strategies.",
//     deliverable: "Paid PDF",
//   },
// ];

// const navLinks = [
//   { name: "Home", link: "#home" },
//   { name: "About Us", link: "#about-us" },
//   { name: "Energy", link: "/energy" },
//   { name: "Astrology", link: "/Astrology" },
//   { name: "Vastu", link: "/vastu" },
//   { name: "Manifestation", link: "/manifestation" },
//   { name: "Material", link: "/material" },
//   { name: "Blogs", link: "/blogs" },
//   { name: "Careers", link: "#careers" },
//   { name: "Contact", link: "/contact" },
//   { name: "Login / Signup", link: "/auth" },
// ];

// const Material = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [step, setStep] = useState(1);
//   const [selectedService, setSelectedService] = useState(null);
//   const [clientLogos, setClientLogos] = useState([]);

//   const [formData, setFormData] = useState({
//     fullName: "",
//     dob: "",
//     tob: "",
//     pob: "",
//     occupation: "",
//     aspiredOccupation: "",
//     businessName: "",
//     industry: "",
//     businessStage: "",
//     keyConcerns: "",
//     links: "",
//     questions: "",
//   });

//   // Fetch clients from backend
//   useEffect(() => {
//     fetch("https://adminastrotalk-1.onrender.com/api/our-clients")
//       .then((res) => res.json())
//       .then((data) => {
//         if (data?.clients) {
//           setClientLogos(data.clients);
//         }
//       })
//       .catch((err) => console.log("Client fetch error:", err));
//   }, []);

//   useEffect(() => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   }, [step]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleServiceSelect = (service) => {
//     setSelectedService(service);
//     setStep(2);
//   };

//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     setStep(3);
//   };

//   const handlePayment = () => setStep(4);

//   return (
//     <div
//       className="material-page cosmic-bg"
//       style={{
//         fontFamily: "Poppins, sans-serif",
//         color: "#fff",
//         background: "linear-gradient(180deg, #1a0033 0%, #0d001a 100%)",
//         minHeight: "100vh",
//         overflowX: "hidden",
//       }}
//     >

//       {/* === Sidebar === */}
//       <div
//         className={`sidebar ${sidebarOpen ? "open" : ""}`}
//         style={{
//           position: "fixed",
//           top: 0,
//           left: sidebarOpen ? 0 : "-270px",
//           width: "270px",
//           height: "100vh",
//           background:
//             "linear-gradient(180deg, rgba(20,0,40,0.95), rgba(5,0,20,0.9))",
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
//                 }}
//               >
//                 {item.name}
//               </a>
//             </li>
//           ))}
//         </ul>
//       </div>

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

//       {/* === Main Content === */}
//       <div
//         className="material-content"
//         style={{
//           marginLeft: sidebarOpen ? "270px" : "0",
//           transition: "margin-left 0.5s ease",
//         }}
//       >
//         {/* Hero Section */}
//         <section className="hero-section">
//           <h1>Material: Wealth Architecture Programme</h1>
//           <p>
//             Material helps you achieve material success through wealth
//             alignment, behavior optimization, karmic clearing, and strategic
//             planning.
//           </p>
//         </section>

//         {/* Step 1 — Offerings */}
//         {step === 1 && (
//           <section className="offerings-section">
//             <h2>Our Offerings</h2>
//             <div className="offerings-grid">
//               {services.map((service, idx) => (
//                 <div key={idx} className="service-card glass-card">
//                   <h3>{service.label}</h3>
//                   <p>{service.description}</p>
//                   <span className="deliverable">{service.deliverable}</span>
//                   <button
//                     className="cta-btn"
//                     onClick={() => handleServiceSelect(service)}
//                   >
//                     Book Now
//                   </button>
//                 </div>
//               ))}
//             </div>
//           </section>
//         )}

//         {/* Step 2 — Form */}
//         {step === 2 && selectedService && (
//           <section className="form-section">
//             <h2>💎 {selectedService.label}</h2>
//             <p>{selectedService.description}</p>

//             <form className="material-form" onSubmit={handleFormSubmit}>
//               <input
//                 name="fullName"
//                 placeholder="Full Name"
//                 value={formData.fullName}
//                 onChange={handleChange}
//                 required
//               />

//               <input
//                 type="date"
//                 name="dob"
//                 value={formData.dob}
//                 onChange={handleChange}
//                 required
//               />

//               <input
//                 name="tob"
//                 placeholder="Time of Birth"
//                 value={formData.tob}
//                 onChange={handleChange}
//               />

//               <input
//                 name="pob"
//                 placeholder="Place of Birth"
//                 value={formData.pob}
//                 onChange={handleChange}
//               />

//               <input
//                 name="occupation"
//                 placeholder="Current Occupation"
//                 value={formData.occupation}
//                 onChange={handleChange}
//               />

//               <button type="submit" className="glow-btn">
//                 Proceed to Payment 💫
//               </button>
//             </form>
//           </section>
//         )}

//         {/* Step 3 — Payment */}
//         {step === 3 && (
//           <section className="payment-section glass-card">
//             <h2>Payment</h2>
//             <p>
//               Amount: <strong>Paid Service</strong>
//             </p>
//             <button className="pay-btn" onClick={handlePayment}>
//               Pay Now
//             </button>
//           </section>
//         )}

//         {/* Step 4 — Confirmation */}
//         {step === 4 && (
//           <section className="confirmation-section glass-card">
//             <h2>Payment Successful!</h2>
//             <p>
//               Your request for <strong>{selectedService.label}</strong> has
//               been received.
//             </p>
//             <button className="cta-btn" onClick={() => setStep(1)}>
//               Back to Services
//             </button>
//           </section>
//         )}

//         {/* ===========================
//             CLIENTS SECTION (FIXED)
//         ============================ */}
//         <section className="clients-section">
//           <h2>Our Esteemed Clients</h2>

//           <div className="clients-logos">
//             {clientLogos.length > 0 ? (
//               clientLogos.map((client) => (
//                 <div key={client._id} className="client-card">
//                   <img
//                     src={client.image} // ⭐ Cloudinary URL directly works
//                     alt={client.name}
//                     style={{
//                       width: "140px",
//                       height: "140px",
//                       borderRadius: "10px",
//                       objectFit: "cover",
//                     }}
//                   />
//                   <h4>{client.name}</h4>
//                   <p>{client.description}</p>
//                 </div>
//               ))
//             ) : (
//               <p style={{ color: "#fff" }}>Loading clients...</p>
//             )}
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default Material;
import React, { useState, useEffect } from "react";
import "../../styles/Material.css";

const services = [
  {
    label: "Individual Wealth Programme",
    description:
      "Identify inborn wealth signatures, reprogram wealth beliefs, optimize behavior, environment, and energy, karmic clearing, ongoing optimization.",
    deliverable: "Paid PDF",
  },
  {
    label: "Business Consulting",
    description:
      "Tailored business strategy call with chart-based insights, decode blocks, pricing, branding, investor compatibility, execution plan.",
    deliverable: "Consultation + PDF",
  },
  {
    label: "Abundance Programme",
    description:
      "Specific plans based on chart to maximize wealth. Guidance on finances, investments, and wealth creation strategies.",
    deliverable: "Paid PDF",
  },
];

const navLinks = [
  { name: "Home", link: "/#home" },
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

const Material = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState(null);
  const [clientLogos, setClientLogos] = useState([]);

  const [formData, setFormData] = useState({
    fullName: "",
    dob: "",
    tob: "",
    pob: "",
    occupation: "",
    aspiredOccupation: "",
    businessName: "",
    industry: "",
    businessStage: "",
    keyConcerns: "",
    links: "",
    questions: "",
  });

  useEffect(() => {
    fetch("https://adminastrotalk-1.onrender.com/api/our-clients")
      .then((res) => res.json())
      .then((data) => {
        if (data?.clients) {
          setClientLogos(data.clients);
        }
      })
      .catch((err) => console.log("Client fetch error:", err));
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [step]);

  // Close sidebar on ESC key
  useEffect(() => {
    function handleEsc(e) {
      if (e.key === "Escape") setSidebarOpen(false);
    }
    if (sidebarOpen) {
      window.addEventListener("keydown", handleEsc);
    }
    return () => window.removeEventListener("keydown", handleEsc);
  }, [sidebarOpen]);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleServiceSelect = (service) => {
    setSelectedService(service);
    setStep(2);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setStep(3);
  };

  const handlePayment = () => setStep(4);

  return (
    <div className={`material-page ${sidebarOpen ? "sidebar-open" : ""}`}>
     {/* Sidebar */}
<div
  className={`sidebar-home ${sidebarOpen ? "open" : ""}`}
  onClick={() => setSidebarOpen(false)}   // ⭐ sidebar ke andar click → close
>
  <h2 className="sidebar-logo">✨ AstroConnect</h2>

  <ul>
    {navLinks.map((item, i) => (
      <li key={i}>
        <a href={item.link} onClick={() => setSidebarOpen(false)}> 
          {item.name}
        </a>
      </li>
    ))}
  </ul>
</div>

{/* Overlay */}
{sidebarOpen && (
  <div
    className="sidebar-overlay visible"
    onClick={() => setSidebarOpen(false)}   // ⭐ bahar click → close
    style={{
      position: "fixed",
      inset: 0,
      background: "rgba(10, 0, 25, 0.65)",
      opacity: 1,
      pointerEvents: "all",
      transition: "opacity 0.3s ease",
      zIndex: 900,
    }}
  />
)}

{/* Sidebar toggle button */}
{!sidebarOpen && (
  <button
    className="sidebar-toggle-home"
    onClick={() => setSidebarOpen(true)}   // ⭐ only open
  >
    ☰
  </button>
)}


      {/* MAIN CONTENT */}
      <div className="material-content">
        {/* HERO */}
        <section className="hero-section">
          <h1>Material: Wealth Architecture Programme</h1>
          <p>
            Material helps you achieve material success through wealth
            alignment, behavior optimization, karmic clearing, and strategic
            planning.
          </p>
        </section>

        {/* STEP 1 — OFFERINGS */}
        {step === 1 && (
          <section className="offerings-section">
            <h2>Our Offerings</h2>
            <div className="offerings-grid">
              {services.map((service, idx) => (
                <div key={idx} className="service-card glass-card">
                  <h3>{service.label}</h3>
                  <p>{service.description}</p>
                  <span className="deliverable">{service.deliverable}</span>
                  <button
                    className="cta-btn"
                    onClick={() => handleServiceSelect(service)}
                  >
                    Book Now
                  </button>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* STEP 2 — FORM */}
        {step === 2 && selectedService && (
          <section className="form-section">
            <div className="form-center-wrapper">
              <div className="form-top-text">
                <h2>💎 {selectedService.label}</h2>
                <p>{selectedService.description}</p>
              </div>

              <form
                className="material-form form-center"
                onSubmit={handleFormSubmit}
              >
                <input
                  name="fullName"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />

                <input
                  type="date"
                  name="dob"
                  value={formData.dob}
                  onChange={handleChange}
                  required
                />

                <input
                  name="tob"
                  placeholder="Time of Birth"
                  value={formData.tob}
                  onChange={handleChange}
                />

                <input
                  name="pob"
                  placeholder="Place of Birth"
                  value={formData.pob}
                  onChange={handleChange}
                />

                <input
                  name="occupation"
                  placeholder="Current Occupation"
                  value={formData.occupation}
                  onChange={handleChange}
                />

                <button type="submit" className="glow-btn">
                  Proceed to Payment 💫
                </button>
              </form>
            </div>
          </section>
        )}

        {/* STEP 3 — PAYMENT */}
        {step === 3 && (
          <section className="payment-section glass-card">
            <h2>Payment</h2>
            <p>
              Amount: <strong>Paid Service</strong>
            </p>
            <button className="pay-btn" onClick={handlePayment}>
              Pay Now
            </button>
          </section>
        )}

        {/* STEP 4 — CONFIRM */}
        {step === 4 && (
          <section className="confirmation-section glass-card">
            <h2>Payment Successful!</h2>
            <p>
              Your request for <strong>{selectedService.label}</strong> has been
              received.
            </p>
            <button className="cta-btn" onClick={() => setStep(1)}>
              Back to Services
            </button>
          </section>
        )}

        {/* CLIENTS */}
        <section className="clients-section">
          <h2>Our Esteemed Clients</h2>

          <div className="clients-logos">
            {clientLogos.length > 0 ? (
              clientLogos.map((client) => (
                <div key={client._id} className="client-card">
                  <img
                    src={client.image}
                    alt={client.name}
                    className="client-img"
                  />
                  <h4>{client.name}</h4>
                  <p>{client.description}</p>
                </div>
              ))
            ) : (
              <p style={{ color: "#fff" }}>Loading clients...</p>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Material;
