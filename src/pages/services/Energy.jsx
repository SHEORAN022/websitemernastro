// import React, { useState, useEffect } from "react";
// import {
//   Loader2,
//   CheckCircle,
//   FileText,
//   Sparkles,
//   Star,
//   ScanEye,
//   HeartPulse,
//   Shield,
//   Flame,
//   CreditCard,
//   ClipboardList,
//   Check,
//   ArrowRight,
//   Zap,
//   TrendingUp,
// } from "lucide-react";

// const Energy = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [step, setStep] = useState(0);
//   const [serviceType, setServiceType] = useState("");
//   const [question, setQuestion] = useState("");
//   const [details, setDetails] = useState("");
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [dob, setDob] = useState("");
//   const [photoFile, setPhotoFile] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [confirmationMsg, setConfirmationMsg] = useState("");
//   const [pdfReady, setPdfReady] = useState(false);
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const checkMobile = () => {
//       setIsMobile(window.innerWidth < 1024);
//       if (window.innerWidth < 1024) {
//         setSidebarOpen(false);
//       }
//     };
    
//     checkMobile();
//     window.addEventListener('resize', checkMobile);
//     return () => window.removeEventListener('resize', checkMobile);
//   }, []);

//  const navLinks = [
//   { name: "Home", link: "/#home" },
//   { name: "About Us", link: "/about-us" },
//   { name: "Energy", link: "/energy" },
//   { name: "Astrology", link: "/astrology" },
//   { name: "Vastu", link: "/vastu" },
//   { name: "Manifestation", link: "/manifestation" },
//   { name: "Material", link: "/material" },
//   { name: "Blogs", link: "/blogs" },
//   { name: "Careers", link: "/careers" },
//   { name: "Contact", link: "/contact" },
//   { name: "Login / Signup", link: "/auth" },
// ];

//   const steps = [
//     { number: 1, label: "Form", icon: <ClipboardList size={18} /> },
//     { number: 2, label: "Payment", icon: <CreditCard size={18} /> },
//     { number: 3, label: "Confirmation", icon: <Check size={18} /> },
//   ];

//   const features = [
//     {
//       title: "Aura Scanning",
//       desc: "Reveal hidden frequencies, energetic blockages, and subconscious patterns affecting your life.",
//     },
//     {
//       title: "Emotional Energy",
//       desc: "Decode emotional disruptions that cloud your clarity, intuition, and decision-making.",
//     },
//     {
//       title: "Space Vibration",
//       desc: "Analyze your home or office energy to ensure cosmic alignment and abundance flow.",
//     },
//     {
//       title: "Manifestation Power",
//       desc: "Measure your manifesting potential based on your current energetic frequency.",
//     },
//   ];

//   const offeringsCatalog = [
//     {
//       key: "yesNo",
//       title: "Yes/No/Possibly",
//       short: "Quick precise energetic answer",
//       price: 299,
//       tag: "Quick Answer",
//       desc: "Get instant clarity on any decision. Receive a clear energetically-aligned answer: Yes, No, or Possibly.",
//     },
//     {
//       key: "personalEnergy",
//       title: "Personal Energy Reading",
//       short: "Complete aura & chakra analysis",
//       price: 499,
//       tag: "Popular",
//       desc: "Deep dive into your energy field, chakra health, blockages, and receive a personalized plan to elevate your vibration.",
//     },
//     {
//       key: "spaceEnergy",
//       title: "Space Energy Reading",
//       short: "Home/office energy mapping",
//       price: 699,
//       tag: "Premium",
//       desc: "Full evaluation of your space vibrations, identifying zones of energy deficit and practical remedies for harmony.",
//     },
//     {
//       key: "prashnaKundli",
//       title: "Prashna Kundli",
//       short: "No birth data needed",
//       price: 399,
//       tag: "Unique",
//       desc: "Submit your question and receive intuitive guidance without needing birth details.",
//     },
//     {
//       key: "compatibility",
//       title: "Compatibility Reading",
//       short: "Relationship energy dynamics",
//       price: 599,
//       tag: "Relationships",
//       desc: "Decode the energetic contract: soulmate, karmic, twin flame? Discover compatibility and future potential.",
//     },
//     {
//       key: "auraChakra",
//       title: "Aura & Chakra Reading",
//       short: "Color analysis & alignment",
//       price: 499,
//       tag: "Popular",
//       desc: "Discover your aura color and chakra strengths/weaknesses with focused exercises for energetic balance.",
//     },
//   ];

//   const progressWidth = ((step - 1) / (steps.length - 1)) * 100;

//   const selectService = (key) => {
//     setServiceType(key);
//     setStep(1);
//     setTimeout(() => {
//       window.scrollTo({ top: document.body.scrollHeight * 0.6, behavior: "smooth" });
//     }, 100);
//   };

//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     setStep(2);
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   const handlePayment = () => {
//     setLoading(true);
//     setTimeout(() => {
//       setLoading(false);
//       setStep(3);
//       const svc = offeringsCatalog.find((o) => o.key === serviceType);
//       setConfirmationMsg(
//         `✨ Thank you ${name}! Your "${svc?.title || serviceType}" reading has been received. Expect insights within 24-48 hours at ${email}.`
//       );
//     }, 2000);
//   };

//   return (
//     <div style={{
//       fontFamily: "'Inter', 'Poppins', sans-serif",
//       color: "#fff",
//       background: "linear-gradient(180deg, #0a0118 0%, #1a0033 50%, #0d001a 100%)",
//       minHeight: "100vh",
//       position: "relative",
//     }}>
//       {/* Overlay for mobile */}
//       {sidebarOpen && isMobile && (
//         <div
//           onClick={() => setSidebarOpen(false)}
//           style={{
//             position: "fixed",
//             inset: 0,
//             background: "rgba(0,0,0,0.7)",
//             zIndex: 999,
//             backdropFilter: "blur(4px)",
//           }}
//         />
//       )}

//       {/* Sidebar */}
//       <div
//         style={{
//           position: "fixed",
//           top: 0,
//           left: sidebarOpen ? 0 : "-280px",
//           width: "280px",
//           height: "100vh",
//           background: "linear-gradient(180deg, rgba(15,0,30,0.98), rgba(5,0,20,0.95))",
//           backdropFilter: "blur(20px)",
//           transition: "left 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
//           zIndex: 1000,
//           padding: "2rem 1.5rem",
//           overflowY: "auto",
//           boxShadow: "4px 0 40px rgba(123,44,191,0.3)",
//           borderRight: "1px solid rgba(255,255,255,0.05)",
//         }}
//       >
//         <h2
//           style={{
//             fontSize: "1.75rem",
//             fontWeight: 700,
//             textAlign: "center",
//             background: "linear-gradient(135deg, #ff00ff, #00ffff)",
//             WebkitBackgroundClip: "text",
//             WebkitTextFillColor: "transparent",
//             marginBottom: "3rem",
//             letterSpacing: "-0.5px",
//           }}
//         >
//           ✨ AstroConnect
//         </h2>

//         <ul style={{ listStyle: "none", padding: 0 }}>
//           {navLinks.map((item, idx) => (
//             <li key={idx} style={{ margin: "0.5rem 0" }}>
//               <a
//                 href={item.link}
//                 style={{
//                   color: "#aaa",
//                   display: "flex",
//                   alignItems: "center",
//                   gap: "0.75rem",
//                   padding: "0.875rem 1rem",
//                   borderRadius: "12px",
//                   textDecoration: "none",
//                   fontSize: "0.95rem",
//                   fontWeight: 500,
//                   transition: "0.3s",
//                 }}
//               >
//                 {item.name}
//               </a>
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Hamburger Button */}
//       <button
//         onClick={() => setSidebarOpen(!sidebarOpen)}
//         style={{
//           position: "fixed",
//           top: "1.5rem",
//           left: "1.5rem",
//           background: "rgba(15,0,30,0.8)",
//           backdropFilter: "blur(10px)",
//           color: "#fff",
//           border: "1px solid rgba(255,255,255,0.1)",
//           fontSize: "1.5rem",
//           borderRadius: "14px",
//           width: "56px",
//           height: "56px",
//           cursor: "pointer",
//           zIndex: 998,
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           transition: "all 0.3s",
//           boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
//         }}
//         onMouseEnter={(e) => {
//           e.target.style.background = "rgba(123,44,191,0.3)";
//           e.target.style.transform = "scale(1.05)";
//         }}
//         onMouseLeave={(e) => {
//           e.target.style.background = "rgba(15,0,30,0.8)";
//           e.target.style.transform = "scale(1)";
//         }}
//       >
//         {sidebarOpen ? "✕" : "☰"}
//       </button>

//       {/* Main Content Wrapper */}
//       <div style={{
//         marginLeft: !isMobile && sidebarOpen ? "280px" : "0",
//         transition: "margin-left 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
//         minHeight: "100vh",
//       }}>
//         {/* Hero Section */}
//         <section className="hero-section">
//           <div className="hero-container">
//             <div className="hero-content">
//               <div className="hero-badge">
//                 <Sparkles size={16} />
//                 Modern Energy Readings
//               </div>

//               <h1 className="hero-title">
//                 Decode Your Aura.<br />
//                 Heal Your Energy.
//               </h1>

//               <p className="hero-description">
//                 Transform your life through deep energetic analysis. We scan your aura, chakras, and emotional blocks to provide actionable remedies and crystal-clear guidance.
//               </p>

//               <div className="hero-actions">
//                 <button
//                   onClick={() => window.scrollTo({ top: 1000, behavior: "smooth" })}
//                   className="cta-button"
//                 >
//                   Start Your Reading
//                   <ArrowRight size={20} />
//                 </button>

//                 <div className="hero-rating">
//                   <div style={{ display: "flex" }}>
//                     {[1,2,3,4,5].map(i => (
//                       <Star key={i} size={16} fill="#fbbf24" color="#fbbf24" />
//                     ))}
//                   </div>
//                   <span className="rating-text">500+ readings delivered</span>
//                 </div>
//               </div>
//             </div>

//             <div className="hero-image-wrapper">
//               <img
//                 src="https://res.cloudinary.com/doerrm32l/image/upload/v1761893673/astrologo_fjndbn.png"
//                 alt="AstroConnect"
//                 className="hero-image"
//               />
//               <div className="hero-image-caption">
//                 Premium energy readings — <strong>precise, practical & personalized</strong>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* What is Energy Section */}
//         <section className="energy-info-section">
//           <div className="container">
//             <div className="energy-grid">
//               <div className="energy-content">
//                 <h2 className="section-title">
//                   Understanding Energy & Frequency
//                 </h2>

//                 <p className="section-text">
//                   Every matter in the universe carries energy. Your energy and vibrational frequency directly shape your reality — influencing health, relationships, decisions, and success.
//                 </p>

//                 <p className="section-text">
//                   We use specialized tools including <strong>Bovis units</strong> and proprietary scanners to measure vibrational strength and detect subtle energetic imbalances that affect your life.
//                 </p>

//                 <div className="measurement-box">
//                   <h4 className="measurement-title">
//                     <TrendingUp size={20} color="#ff00ff" />
//                     How We Measure Energy
//                   </h4>
//                   <div className="measurement-list">
//                     {[
//                       { title: "Bovis Scale", desc: "Standard vibrational index quantifying energy units" },
//                       { title: "Aura Scanning", desc: "Visual & numeric readout of aura color and thickness" },
//                       { title: "Chakra Analysis", desc: "Per-chakra alignment and energy flow assessment" },
//                       { title: "Space Mapping", desc: "Home/office zone harmony and energy drain detection" },
//                     ].map((item, i) => (
//                       <div key={i} className="measurement-item">
//                         <div className="measurement-dot" />
//                         <div>
//                           <strong className="measurement-item-title">{item.title}:</strong>
//                           <span className="measurement-item-desc">{item.desc}</span>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>

//                 <div>
//                   <h4 className="subsection-title">Signs of Low Energy</h4>
//                   <p className="section-text">
//                     Low energy manifests as chronic fatigue, mental fog, emotional instability, relationship friction, frequent minor illnesses, financial stagnation, and blocked creative flow. Early detection prevents long-term energetic depletion.
//                   </p>
//                 </div>
//               </div>

//               <div className="energy-sidebar">
//                 <div className="quick-facts-card">
//                   <h3 className="quick-facts-title">Quick Facts</h3>

//                   <div className="frequency-display">
//                     <div className="frequency-label">Frequency Range</div>
//                     <div className="frequency-value">396Hz — 936Hz</div>
//                   </div>

//                   <div className="divider" />

//                   <div className="facts-list">
//                     {[
//                       { icon: <FileText size={18} />, text: "PDF reports included" },
//                       { icon: <Zap size={18} />, text: "24-48 hour delivery" },
//                       { icon: <CheckCircle size={18} />, text: "One follow-up question" },
//                     ].map((item, i) => (
//                       <div key={i} className="fact-item">
//                         <div style={{ color: "#ff00ff" }}>{item.icon}</div>
//                         {item.text}
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Services Grid */}
//         <section className="services-section">
//           <div className="container">
//             <div className="services-header">
//               <h2 className="section-title">Our Energy Reading Services</h2>
//               <p className="services-subtitle">
//                 Choose the reading that resonates with your current needs
//               </p>
//             </div>

//             <div className="services-grid">
//               {offeringsCatalog.map((service) => (
//                 <div key={service.key} className="service-card">
//                   <div className="service-header">
//                     <div>
//                       <div className="service-tag">{service.tag}</div>
//                       <h3 className="service-title">{service.title}</h3>
//                       <p className="service-short">{service.short}</p>
//                     </div>
//                     <div className="service-price">₹{service.price}</div>
//                   </div>

//                   <p className="service-desc">{service.desc}</p>

//                   <button
//                     onClick={() => selectService(service.key)}
//                     className="service-button"
//                   >
//                     Book Now
//                     <ArrowRight size={18} />
//                   </button>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Form Section */}
//         {step > 0 && (
//           <section className="form-section">
//             <div className="form-container">
//               <h2 className="form-title">
//                 <Sparkles size={28} color="#ff00ff" />
//                 Complete Your Reading
//               </h2>
//               <p className="form-subtitle">
//                 Fill in your details to proceed with your energy reading
//               </p>

//               {/* Progress Bar */}
//               <div className="progress-wrapper">
//                 <div className="progress-track">
//                   <div className="progress-bar" style={{ width: `${progressWidth}%` }} />
//                 </div>

//                 {steps.map((s) => (
//                   <div key={s.number} className="progress-step">
//                     <div className={`progress-circle ${step >= s.number ? 'active' : ''}`}>
//                       {s.icon}
//                     </div>
//                     <span className={`progress-label ${step >= s.number ? 'active' : ''}`}>
//                       {s.label}
//                     </span>
//                   </div>
//                 ))}
//               </div>

//               {/* Step 1: Form */}
//               {step === 1 && (
//                 <form onSubmit={handleFormSubmit} className="booking-form">
//                   <div className="form-group">
//                     <label className="form-label">Selected Service</label>
//                     <div className="selected-service">
//                       {offeringsCatalog.find(s => s.key === serviceType)?.title}
//                     </div>
//                   </div>

//                   {serviceType === "yesNo" && (
//                     <div className="form-group">
//                       <label className="form-label">Your Question *</label>
//                       <input
//                         type="text"
//                         value={question}
//                         onChange={(e) => setQuestion(e.target.value)}
//                         required
//                         placeholder="E.g., Should I accept this job offer?"
//                         className="form-input"
//                       />
//                     </div>
//                   )}

//                   <div className="form-group">
//                     <label className="form-label">Full Name *</label>
//                     <input
//                       type="text"
//                       value={name}
//                       onChange={(e) => setName(e.target.value)}
//                       required
//                       placeholder="Enter your full name"
//                       className="form-input"
//                     />
//                   </div>

//                   <div className="form-row">
//                     <div className="form-group">
//                       <label className="form-label">Email *</label>
//                       <input
//                         type="email"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                         required
//                         placeholder="your@email.com"
//                         className="form-input"
//                       />
//                     </div>

//                     <div className="form-group">
//                       <label className="form-label">Date of Birth *</label>
//                       <input
//                         type="date"
//                         value={dob}
//                         onChange={(e) => setDob(e.target.value)}
//                         required
//                         className="form-input"
//                       />
//                     </div>
//                   </div>

//                   <div className="form-group">
//                     <label className="form-label">Upload Photo (Optional)</label>
//                     <div className="file-upload">
//                       <input
//                         type="file"
//                         accept="image/*"
//                         onChange={(e) => setPhotoFile(e.target.files[0])}
//                         className="file-input"
//                       />
//                       <div className="file-upload-content">
//                         {photoFile ? (
//                           <div style={{ color: "#4ade80" }}>✓ {photoFile.name}</div>
//                         ) : (
//                           <>
//                             <div style={{ marginBottom: "0.5rem" }}>📸</div>
//                             <div>Click to upload or drag and drop</div>
//                             <div className="file-upload-hint">PNG, JPG (max 5MB)</div>
//                           </>
//                         )}
//                       </div>
//                     </div>
//                   </div>

//                   <div className="form-group">
//                     <label className="form-label">Additional Details</label>
//                     <textarea
//                       value={details}
//                       onChange={(e) => setDetails(e.target.value)}
//                       rows={4}
//                       placeholder="Share any additional context or specific questions..."
//                       className="form-textarea"
//                     />
//                   </div>

//                   <button type="submit" className="submit-button">
//                     Continue to Payment
//                     <ArrowRight size={20} />
//                   </button>
//                 </form>
//               )}

//               {/* Step 2: Payment */}
//               {step === 2 && (
//                 <div className="payment-section">
//                   <div className="payment-icon-wrapper">
//                     <CreditCard size={40} color="#ff00ff" />
//                   </div>

//                   <h3 className="payment-title">Complete Your Payment</h3>

//                   <div className="payment-summary">
//                     <div className="summary-row">
//                       <span>Service</span>
//                       <span className="summary-value">
//                         {offeringsCatalog.find(s => s.key === serviceType)?.title}
//                       </span>
//                     </div>
//                     <div className="summary-row">
//                       <span>Name</span>
//                       <span className="summary-value">{name}</span>
//                     </div>
//                     <div className="summary-row">
//                       <span>Email</span>
//                       <span className="summary-value">{email}</span>
//                     </div>
//                     <div className="summary-row total">
//                       <span>Total Amount</span>
//                       <span className="total-amount">
//                         ₹{offeringsCatalog.find(s => s.key === serviceType)?.price}
//                       </span>
//                     </div>
//                   </div>

//                   <button
//                     onClick={handlePayment}
//                     disabled={loading}
//                     className="pay-button"
//                   >
//                     {loading ? (
//                       <>
//                         <Loader2 size={20} className="spinner" />
//                         Processing...
//                       </>
//                     ) : (
//                       <>
//                         Pay Securely Now
//                         <Zap size={20} />
//                       </>
//                     )}
//                   </button>
//                 </div>
//               )}

//               {/* Step 3: Confirmation */}
//               {step === 3 && (
//                 <div className="confirmation-section">
//                   <div className="confirmation-icon-wrapper">
//                     <CheckCircle size={60} color="#4ade80" />
//                   </div>

//                   <h2 className="confirmation-title">Payment Successful!</h2>

//                   <p className="confirmation-message">{confirmationMsg}</p>

//                   {pdfReady && (
//                     <div className="pdf-notice">
//                       <FileText size={24} color="#4ade80" />
//                       <span>Your PDF report has been downloaded</span>
//                     </div>
//                   )}

//                   <button
//                     onClick={() => {
//                       setStep(0);
//                       setServiceType("");
//                       setName("");
//                       setEmail("");
//                       setDob("");
//                       setQuestion("");
//                       setDetails("");
//                       setPhotoFile(null);
//                       setPdfReady(false);
//                       window.scrollTo({ top: 0, behavior: "smooth" });
//                     }}
//                     className="book-another-button"
//                   >
//                     Book Another Reading
//                   </button>
//                 </div>
//               )}
//             </div>
//           </section>
//         )}
//       </div>

//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
        
//         * {
//           box-sizing: border-box;
        

//         body, html {
//           margin: 0;
//           padding: 0;
//           overflow-x: hidden;
//         }

//         .container {
//           max-width: 1200px;
//           margin: 0 auto;
//           padding: 0 2rem;
//         }

//         /* Hero Section */
//         .hero-section {
//           padding: 5rem 2rem 2rem;
//           position: relative;
//           overflow: hidden;
//           margin-top: 0;
//         }

//         .hero-container {
//           max-width: 1200px;
//           margin: 0 auto;
//           display: grid;
//           grid-template-columns: 1.2fr 1fr;
//           gap: 4rem;
//           align-items: center;
//         }

//         .hero-badge {
//           display: inline-flex;
//           align-items: center;
//           gap: 0.5rem;
//           padding: 0.5rem 1rem;
//           background: rgba(255,0,255,0.1);
//           border: 1px solid rgba(255,0,255,0.3);
//           border-radius: 50px;
//           font-size: 0.875rem;
//           font-weight: 600;
//           margin-bottom: 1.5rem;
//           color: #ff00ff;
//         }

//         .hero-title {
//           font-size: 3.5rem;
//           font-weight: 800;
//           line-height: 1.1;
//           margin: 0 0 1.5rem 0;
//           background: linear-gradient(135deg, #fff 0%, #e0d0ff 100%);
//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//           background-clip: text;
//           letter-spacing: -2px;
//         }

//         .hero-description {
//           font-size: 1.25rem;
//           line-height: 1.7;
//           color: #c4b5fd;
//           margin-bottom: 2rem;
//           font-weight: 400;
//         }

//         .hero-actions {
//           display: flex;
//           gap: 1rem;
//           align-items: center;
//           flex-wrap: wrap;
//         }

//         .cta-button {
//           background: linear-gradient(135deg, #ff00ff, #7b2cbf);
//           color: #fff;
//           padding: 1rem 2rem;
//           border-radius: 14px;
//           border: none;
//           font-size: 1rem;
//           font-weight: 600;
//           cursor: pointer;
//           display: flex;
//           align-items: center;
//           gap: 0.5rem;
//           transition: all 0.3s;
//           box-shadow: 0 8px 32px rgba(123,44,191,0.4);
//         }

//         .cta-button:hover {
//           transform: translateY(-2px);
//           box-shadow: 0 12px 40px rgba(123,44,191,0.6);
//         }

//         .hero-rating {
//           display: flex;
//           align-items: center;
//           gap: 0.5rem;
//         }

//         .rating-text {
//           font-size: 0.875rem;
//           color: #aaa;
//         }

//         .hero-image-wrapper {
//           position: relative;
//           background: linear-gradient(180deg, rgba(123,44,191,0.1), rgba(255,0,255,0.05));
//           border-radius: 24px;
//           padding: 2rem;
//           border: 1px solid rgba(255,255,255,0.1);
//           backdrop-filter: blur(10px);
//           box-shadow: 0 20px 60px rgba(123,44,191,0.2);
//         }

//         .hero-image {
//           width: 100%;
//           border-radius: 16px;
//           box-shadow: 0 10px 40px rgba(0,0,0,0.3);
//         }

//         .hero-image-caption {
//           margin-top: 1.5rem;
//           text-align: center;
//           color: #c4b5fd;
//           font-size: 0.95rem;
//           line-height: 1.6;
//         }

//         /* Energy Info Section */
//         .energy-info-section {
//           padding: 4rem 2rem;

//           background: rgba(255,255,255,0.01);
//           border-top: 1px solid rgba(255,255,255,0.05);
//           border-bottom: 1px solid rgba(255,255,255,0.05);
//         }

//         .energy-grid {
//           display: grid;
//           grid-template-columns: 1.5fr 1fr;
//           gap: 4rem;
//           align-items: start;
//         }

//         .section-title {
//           font-size: 2.5rem;
//           font-weight: 800;
//           margin-bottom: 1.5rem;
//           background: linear-gradient(135deg, #fff, #c4b5fd);
//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//           background-clip: text;
//           letter-spacing: -1px;
//         }

//         .section-text {
//           font-size: 1.125rem;
//           line-height: 1.8;
//           color: #c4b5fd;
//           margin-bottom: 2rem;
//         }

//         .measurement-box {
//           background: rgba(123,44,191,0.08);
//           border: 1px solid rgba(123,44,191,0.2);
//           border-radius: 16px;
//           padding: 1.5rem;
//           margin-bottom: 2.5rem;
//         }

//         .measurement-title {
//           font-size: 1.125rem;
//           font-weight: 700;
//           margin-bottom: 1rem;
//           color: #fff;
//           display: flex;
//           align-items: center;
//           gap: 0.5rem;
//         }

//         .measurement-list {
//           display: grid;
//           gap: 1rem;
//         }

//         .measurement-item {
//           display: flex;
//           gap: 1rem;
//         }

//         .measurement-dot {
//           width: 6px;
//           height: 6px;
//           border-radius: 50%;
//           background: #ff00ff;
//           margin-top: 0.5rem;
//           flex-shrink: 0;
//         }

//         .measurement-item-title {
//           color: #fff;
//           font-size: 0.95rem;
//         }

//         .measurement-item-desc {
//           color: #c4b5fd;
//           font-size: 0.95rem;
//           margin-left: 0.5rem;
//         }

//         .subsection-title {
//           font-size: 1.125rem;
//           font-weight: 700;
//           margin-bottom: 1rem;
//           color: #fff;
//         }

//         .energy-sidebar {
//           position: sticky;
//           top: 2rem;
//         }

//         .quick-facts-card {
//           background: linear-gradient(180deg, rgba(123,44,191,0.15), rgba(255,0,255,0.08));
//           border: 1px solid rgba(255,255,255,0.1);
//           border-radius: 20px;
//           padding: 2rem;
//           backdrop-filter: blur(10px);
//         }

//         .quick-facts-title {
//           font-size: 1.5rem;
//           font-weight: 700;
//           margin-bottom: 1.5rem;
//           color: #fff;
//         }

//         .frequency-display {
//           margin-bottom: 1.5rem;
//         }

//         .frequency-label {
//           font-size: 0.875rem;
//           color: #aaa;
//           margin-bottom: 0.5rem;
//           text-transform: uppercase;
//           letter-spacing: 1px;
//           font-weight: 600;
//         }

//         .frequency-value {
//           font-size: 2rem;
//           font-weight: 800;
//           background: linear-gradient(135deg, #ff00ff, #00ffff);
//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//           background-clip: text;
//         }

//         .divider {
//           height: 1px;
//           background: rgba(255,255,255,0.1);
//           margin: 1.5rem 0;
//         }

//         .facts-list {
//           display: grid;
//           gap: 1rem;
//         }

//         .fact-item {
//           display: flex;
//           align-items: center;
//           gap: 0.75rem;
//           color: #c4b5fd;
//           font-size: 0.95rem;
//         }
// .services-section {
//   padding: 4rem 2rem 0;
//   margin-bottom: 0 !important;
// }


//         .services-header {
//           text-align: center;
//           margin-bottom: 3rem;
//         }

//         .services-subtitle {
//           font-size: 1.125rem;
//           color: #c4b5fd;
//           max-width: 600px;
//           margin: 0 auto;
//         }

//         .services-grid {
//           display: grid;
//           grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
//           gap: 1.5rem;
//         }

//         .service-card {
//           background: rgba(255,255,255,0.02);
//           backdrop-filter: blur(10px);
//           border: 1px solid rgba(255,255,255,0.08);
//           border-radius: 20px;
//           padding: 2rem;
//           transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
//           cursor: pointer;
//           position: relative;
//           overflow: hidden;
//           display: flex;
//           flex-direction: column;
//         }

//         .service-card:hover {
//           background: rgba(123,44,191,0.08);
//           transform: translateY(-4px);
//           border-color: rgba(255,0,255,0.3);
//           box-shadow: 0 20px 60px rgba(123,44,191,0.3);
//         }

//         .service-header {
//           display: flex;
//           justify-content: space-between;
//           align-items: start;
//           margin-bottom: 1rem;
//           gap: 1rem;
//         }

//         .service-tag {
//           display: inline-block;
//           padding: 0.25rem 0.75rem;
//           background: rgba(255,0,255,0.15);
//           border: 1px solid rgba(255,0,255,0.3);
//           border-radius: 50px;
//           font-size: 0.75rem;
//           font-weight: 600;
//           color: #ff00ff;
//           margin-bottom: 0.75rem;
//         }

//         .service-title {
//           font-size: 1.375rem;
//           font-weight: 700;
//           margin-bottom: 0.5rem;
//           color: #fff;
//         }

//         .service-short {
//           font-size: 0.875rem;
//           color: #aaa;
//           margin: 0;
//         }

//         .service-price {
//           font-size: 1.75rem;
//           font-weight: 800;
//           background: linear-gradient(135deg, #ff00ff, #00ffff);
//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//           background-clip: text;
//           white-space: nowrap;
//         }

//         .service-desc {
//           font-size: 0.95rem;
//           line-height: 1.6;
//           color: #c4b5fd;
//           margin-bottom: 1.5rem;
//           flex-grow: 1;
//         }

//         .service-button {
//           width: 100%;
//           padding: 0.875rem 1.5rem;
//           background: linear-gradient(135deg, #ff00ff, #7b2cbf);
//           color: #fff;
//           border: none;
//           border-radius: 12px;
//           font-size: 0.95rem;
//           font-weight: 600;
//           cursor: pointer;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           gap: 0.5rem;
//           transition: all 0.3s;
//         }

//         .service-button:hover {
//           transform: scale(1.02);
//           box-shadow: 0 8px 24px rgba(123,44,191,0.5);
//         }

//         /* Form Section */
//         .form-section {
//           padding: 4rem 2rem 4rem;
//           background: rgba(0,0,0,0.3);
//           margin-top: 0;
//         }

//         .form-container {
//           max-width: 800px;
//           margin: 0 auto;
//           background: rgba(255,255,255,0.03);
//           backdrop-filter: blur(20px);
//           border-radius: 24px;
//           padding: 3rem;
//           border: 1px solid rgba(255,255,255,0.1);
//           box-shadow: 0 20px 60px rgba(0,0,0,0.5);
//         }

//         .form-title {
//           font-size: 2rem;
//           font-weight: 700;
//           margin-bottom: 0.5rem;
//           display: flex;
//           align-items: center;
//           gap: 0.75rem;
//         }

//         .form-subtitle {
//           color: #aaa;
//           margin-bottom: 2rem;
//         }

//         .progress-wrapper {
//           display: flex;
//           justify-content: space-between;
//           position: relative;
//           margin: 2.5rem 0;
//           padding: 0 1rem;
//         }

//         .progress-track {
//           position: absolute;
//           top: 24px;
//           left: 0;
//           right: 0;
//           height: 3px;
//           background: rgba(255,255,255,0.1);
//           border-radius: 3px;
//         }

//         .progress-bar {
//           height: 100%;
//           background: linear-gradient(90deg, #ff00ff, #00ffff);
//           border-radius: 3px;
//           transition: width 0.5s cubic-bezier(0.4, 0, 0.2, 1);
//         }

//         .progress-step {
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           z-index: 1;
//         }

//         .progress-circle {
//           width: 50px;
//           height: 50px;
//           border-radius: 50%;
//           background: rgba(255,255,255,0.05);
//           border: 2px solid rgba(255,255,255,0.2);
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           margin-bottom: 0.75rem;
//           transition: all 0.4s;
//         }

//         .progress-circle.active {
//           background: linear-gradient(135deg, #ff00ff, #00ffff);
//           border: none;
//           box-shadow: 0 8px 24px rgba(123,44,191,0.4);
//         }

//         .progress-label {
//           font-size: 0.875rem;
//           font-weight: 600;
//           color: #666;
//           transition: color 0.3s;
//         }

//         .progress-label.active {
//           color: #ff00ff;
//         }

//         .booking-form {
//           margin-top: 2rem;
//         }

//         .form-group {
//           margin-bottom: 1.5rem;
//         }

//         .form-label {
//           display: block;
//           margin-bottom: 0.5rem;
//           font-size: 0.95rem;
//           font-weight: 600;
//           color: #ddd;
//         }

//         .form-input, .form-textarea {
//           width: 100%;
//           padding: 0.875rem;
//           background: rgba(255,255,255,0.05);
//           border: 1px solid rgba(255,255,255,0.15);
//           border-radius: 12px;
//           color: #fff;
//           font-size: 1rem;
//           transition: all 0.3s;
//           font-family: inherit;
//         }

//         .form-input:focus, .form-textarea:focus {
//           outline: none;
//           border-color: #ff00ff;
//           box-shadow: 0 0 0 3px rgba(255,0,255,0.1);
//         }

//         .form-textarea {
//           resize: vertical;
//         }

//         .form-row {
//           display: grid;
//           grid-template-columns: 1fr 1fr;
//           gap: 1rem;
//         }

//         .selected-service {
//           padding: 1rem;
//           background: rgba(123,44,191,0.15);
//           border: 1px solid rgba(255,0,255,0.3);
//           border-radius: 12px;
//           color: #fff;
//           font-size: 1.125rem;
//           font-weight: 600;
//         }

//         .file-upload {
//           position: relative;
//           border: 2px dashed rgba(255,255,255,0.2);
//           border-radius: 12px;
//           padding: 1.5rem;
//           text-align: center;
//           cursor: pointer;
//           transition: all 0.3s;
//         }

//         .file-upload:hover {
//           border-color: #ff00ff;
//           background: rgba(255,0,255,0.05);
//         }

//         .file-input {
//           position: absolute;
//           inset: 0;
//           opacity: 0;
//           cursor: pointer;
//         }

//         .file-upload-content {
//           color: #aaa;
//           pointer-events: none;
//         }

//         .file-upload-hint {
//           font-size: 0.875rem;
//           margin-top: 0.25rem;
//         }

//         .submit-button {
//           width: 100%;
//           padding: 1.125rem;
//           background: linear-gradient(135deg, #ff00ff, #7b2cbf);
//           color: #fff;
//           border: none;
//           border-radius: 14px;
//           font-size: 1.0625rem;
//           font-weight: 700;
//           cursor: pointer;
//           margin-top: 2rem;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           gap: 0.75rem;
//           transition: all 0.3s;
//           box-shadow: 0 8px 32px rgba(123,44,191,0.4);
//         }

//         .submit-button:hover {
//           transform: translateY(-2px);
//           box-shadow: 0 12px 40px rgba(123,44,191,0.6);
//         }

//         /* Payment Section */
//         .payment-section {
//           text-align: center;
//           margin-top: 2rem;
//         }

//         .payment-icon-wrapper {
//           width: 80px;
//           height: 80px;
//           margin: 0 auto 1.5rem;
//           border-radius: 50%;
//           background: linear-gradient(135deg, rgba(255,0,255,0.2), rgba(123,44,191,0.1));
//           display: flex;
//           align-items: center;
//           justify-content: center;
//         }

//         .payment-title {
//           font-size: 1.75rem;
//           margin-bottom: 1rem;
//         }

//         .payment-summary {
//           background: rgba(255,255,255,0.03);
//           border-radius: 16px;
//           padding: 2rem;
//           margin-bottom: 2rem;
//           text-align: left;
//         }

//         .summary-row {
//           display: flex;
//           justify-content: space-between;
//           padding: 0.75rem 0;
//           border-bottom: 1px solid rgba(255,255,255,0.1);
//         }

//         .summary-row span:first-child {
//           color: #aaa;
//         }

//         .summary-value {
//           font-weight: 600;
//         }

//         .summary-row.total {
//           border-bottom: none;
//           padding-top: 1rem;
//         }

//         .summary-row.total span:first-child {
//           font-size: 1.125rem;
//           font-weight: 600;
//           color: #fff;
//         }

//         .total-amount {
//           font-size: 1.75rem;
//           font-weight: 800;
//           background: linear-gradient(135deg, #ff00ff, #00ffff);
//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//           background-clip: text;
//         }

//         .pay-button {
//           padding: 1.125rem 3rem;
//           background: linear-gradient(135deg, #ff00ff, #00ffff);
//           color: #fff;
//           border: none;
//           border-radius: 14px;
//           font-size: 1.0625rem;
//           font-weight: 700;
//           cursor: pointer;
//           display: inline-flex;
//           align-items: center;
//           gap: 0.75rem;
//           transition: all 0.3s;
//           box-shadow: 0 8px 32px rgba(123,44,191,0.5);
//         }

//         .pay-button:hover:not(:disabled) {
//           transform: translateY(-2px);
//           box-shadow: 0 12px 40px rgba(123,44,191,0.7);
//         }

//         .pay-button:disabled {
//           background: rgba(255,255,255,0.1);
//           cursor: not-allowed;
//           box-shadow: none;
//         }

//         /* Confirmation Section */
//         .confirmation-section {
//           text-align: center;
//           padding: 2rem 0;
//         }

//         .confirmation-icon-wrapper {
//           width: 100px;
//           height: 100px;
//           margin: 0 auto 2rem;
//           border-radius: 50%;
//           background: linear-gradient(135deg, rgba(74,222,128,0.2), rgba(34,197,94,0.1));
//           display: flex;
//           align-items: center;
//           justify-content: center;
//         }

//         .confirmation-title {
//           font-size: 2rem;
//           font-weight: 700;
//           margin-bottom: 1rem;
//         }

//         .confirmation-message {
//           font-size: 1.125rem;
//           line-height: 1.7;
//           color: #c4b5fd;
//           margin-bottom: 2rem;
//           max-width: 500px;
//           margin-left: auto;
//           margin-right: auto;
//         }

//         .pdf-notice {
//           background: rgba(74,222,128,0.1);
//           border: 1px solid rgba(74,222,128,0.3);
//           border-radius: 12px;
//           padding: 1rem;
//           display: inline-flex;
//           align-items: center;
//           gap: 0.75rem;
//           margin-bottom: 2rem;
//         }

//         .book-another-button {
//           padding: 0.875rem 2rem;
//           background: rgba(255,255,255,0.05);
//           border: 1px solid rgba(255,255,255,0.2);
//           border-radius: 12px;
//           color: #fff;
//           font-size: 1rem;
//           font-weight: 600;
//           cursor: pointer;
//           transition: all 0.3s;
//         }

//         .book-another-button:hover {
//           background: rgba(255,255,255,0.1);
//           border-color: #ff00ff;
//         }

//         @keyframes spin {
//           from { transform: rotate(0deg); }
//           to { transform: rotate(360deg); }
//         }

//         .spinner {
//           animation: spin 1s linear infinite;
//         }

//         input::placeholder,
//         textarea::placeholder {
//           color: rgba(255,255,255,0.3);
//         }

//         input[type="date"]::-webkit-calendar-picker-indicator {
//           filter: invert(1);
//           cursor: pointer;
//         }

//         /* Mobile Responsive */
//         @media (max-width: 1024px) {
//           .hero-container {
//             grid-template-columns: 1fr;
//             gap: 2rem;
//             padding: 0 1rem;
//           }

//           .hero-title {
//             font-size: 2.5rem;
//           }

//           .hero-description {
//             font-size: 1.125rem;
//           }

//           .hero-actions {
//             flex-direction: column;
//             align-items: flex-start;
//           }

//           .energy-grid {
//             grid-template-columns: 1fr;
//             gap: 2rem;
//           }

//           .energy-sidebar {
//             position: static;
//           }

//           .section-title {
//             font-size: 2rem;
//           }

//           .services-grid {
//             grid-template-columns: 1fr;
//           }

//           .form-container {
//             padding: 2rem 1.5rem;
//           }

//           .form-row {
//             grid-template-columns: 1fr;
//           }

//           .progress-wrapper {
//             padding: 0;
//           }

//           .progress-circle {
//             width: 40px;
//             height: 40px;
//           }

//           .progress-label {
//             font-size: 0.75rem;
//           }
//         }

//         @media (max-width: 768px) {
//           .hero-section {
//             padding: 5rem 1rem 2rem;
//           }

//           .hero-title {
//             font-size: 2rem;
//           }

//           .hero-description {
//             font-size: 1rem;
//           }

//           .cta-button {
//             width: 100%;
//             justify-content: center;
//           }

//           .services-grid {
//             grid-template-columns: 1fr;
//           }

//           .container {
//             padding: 0 1rem;
//           }

//           .form-title {
//             font-size: 1.5rem;
//           }

//           .payment-summary {
//             padding: 1.5rem;
//           }

//           .pay-button {
//             width: 100%;
//             justify-content: center;
//           }
//         }

//         @media (max-width: 480px) {
//           .hero-badge {
//             font-size: 0.75rem;
//             padding: 0.4rem 0.8rem;
//           }

//           .hero-title {
//             font-size: 1.75rem;
//             letter-spacing: -1px;
//           }

//           .service-header {
//             flex-direction: column;
//             align-items: flex-start;
//           }

//           .service-price {
//             font-size: 1.5rem;
//           }

//           .form-container {
//             padding: 1.5rem 1rem;
//           }

//           .progress-step {
//             flex: 1;
//           }

//           .progress-circle {
//             width: 36px;
//             height: 36px;
//           }

//           .progress-label {
//             font-size: 0.7rem;
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Energy;

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "../../styles/Energy.css";

// import {
//   Loader2,
//   CheckCircle,
//   FileText,
//   Sparkles,
//   Star,
//   CreditCard,
//   ClipboardList,
//   Check,
//   ArrowRight,
//   Zap,
//   TrendingUp,
// } from "lucide-react";


// const SERVICES_API =
//   process.env.REACT_APP_ENERGY_SERVICES_API ||
//   "https://adminastrotalk-1.onrender.com/api/energy-services";
// const BOOKING_API =
//   process.env.REACT_APP_ENERGY_BOOKING_API || "https://adminastrotalk-1.onrender.com/api/bookings";
// const PAYMENTS_API =
//   process.env.REACT_APP_PAYMENTS_API || "https://adminastrotalk-1.onrender.com/api/payments";
// // ----------------------------

// const navLinks = [
//   { name: "Home", link: "/#home" },
//   { name: "About Us", link: "/about-us" },
//   { name: "Energy", link: "/energy" },
//   { name: "Astrology", link: "/astrology" },
//   { name: "Vastu", link: "/vastu" },
//   { name: "Manifestation", link: "/manifestation" },
//   { name: "Material", link: "/material" },
//   { name: "Blogs", link: "/blogs" },
//   { name: "Careers", link: "/careers" },
//   { name: "Contact", link: "/contact" },
//   { name: "Login / Signup", link: "/auth" },
// ];

// export default function Energy() {
//   // UI state
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [isMobile, setIsMobile] = useState(false);

//   // Data
//   const [services, setServices] = useState([]);
//   const [loadingServices, setLoadingServices] = useState(false);

//   // Booking flow
//   const [step, setStep] = useState(0); // 0 = browse, 1 = form, 2 = payment, 3 = confirmation
//   const [selectedService, setSelectedService] = useState(null);

//   // Form fields
//   const [question, setQuestion] = useState("");
//   const [details, setDetails] = useState("");
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [dob, setDob] = useState("");
//   const [photoFile, setPhotoFile] = useState(null);

//   // UX
//   const [processing, setProcessing] = useState(false);
//   const [confirmationMsg, setConfirmationMsg] = useState("");
//   const [pdfReady, setPdfReady] = useState(false);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 1024);
//       if (window.innerWidth < 1024) setSidebarOpen(false);
//     };
//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   // Fetch services from backend
//   useEffect(() => {
//     fetchServices();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   const fetchServices = async () => {
//     try {
//       setLoadingServices(true);
//       const res = await axios.get(`${SERVICES_API}/all`);
//       // Expected shape: { status: true, services: [...] }
//       if (res?.data?.status && Array.isArray(res.data.services)) {
//         setServices(res.data.services);
//       } else {
//         // If backend returns an array directly or different shape, try that
//         if (Array.isArray(res.data)) {
//           setServices(res.data);
//         } else {
//           console.warn("Unexpected services response:", res.data);
//           setServices([]);
//         }
//       }
//     } catch (err) {
//       console.error("Failed to fetch services:", err);
//       setServices([]);
//     } finally {
//       setLoadingServices(false);
//     }
//   };

//   // Select service (opens form)
//   const selectService = (serviceKey) => {
//     const svc =
//       services.find((s) => s.key === serviceKey || s._id === serviceKey) ||
//       // fallback if services are not keyed by key
//       services.find((s) => s.key === serviceKey) ||
//       services.find((s) => s._id === serviceKey);

//     if (!svc) {
//       // fallback to static offerings (in case backend didn't return)
//       alert("Selected service not found in backend. Refresh or check backend.");
//       return;
//     }
//     setSelectedService(svc);
//     setStep(1);
//     window.scrollTo({ top: 700, behavior: "smooth" });
//   };

//   // Form submission (to go to payment)
//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     // Basic validation
//     if (!name || !email || !dob) {
//       alert("Please fill name, email and date of birth.");
//       return;
//     }
//     setStep(2);
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   // Create booking on backend (attempt) — returns booking record or null
//   const createBookingOnBackend = async (paymentStatus = "pending", paymentInfo = {}) => {
//     try {
//       const form = new FormData();
//       form.append("serviceKey", selectedService.key || selectedService._id);
//       form.append("serviceTitle", selectedService.title || selectedService.name || "");
//       form.append("name", name);
//       form.append("email", email);
//       form.append("dob", dob);
//       form.append("question", question || "");
//       form.append("details", details || "");
//       form.append("paymentStatus", paymentStatus);
//       if (paymentInfo && typeof paymentInfo === "object")
//         form.append("paymentInfo", JSON.stringify(paymentInfo));
//       if (photoFile) form.append("photo", photoFile);

//       // Try BOOKING_API first
//       let bookingRes;
//       try {
//         bookingRes = await axios.post(`${BOOKING_API}/create`, form, {
//           headers: { "Content-Type": "multipart/form-data" },
//         });
//       } catch (err) {
//         // fallback: try service-specific booking endpoint
//         try {
//           bookingRes = await axios.post(`${SERVICES_API}/book`, form, {
//             headers: { "Content-Type": "multipart/form-data" },
//           });
//         } catch (err2) {
//           // final fallback: try services base (without multipart)
//           const payload = {
//             serviceKey: selectedService.key || selectedService._id,
//             serviceTitle: selectedService.title || selectedService.name || "",
//             name,
//             email,
//             dob,
//             question,
//             details,
//             paymentStatus,
//             paymentInfo,
//           };
//           bookingRes = await axios.post(`${SERVICES_API}/create-booking`, payload).catch(() => null);
//         }
//       }
//       if (bookingRes?.data) return bookingRes.data;
//       return null;
//     } catch (err) {
//       console.error("createBookingOnBackend error:", err);
//       return null;
//     }
//   };

//   // Payment handler (attempt payments backend + Razorpay; else fallback)
//   const handlePayment = async () => {
//     setProcessing(true);

//     const amount = Number(selectedService.price || selectedService.amount || selectedService.price_inr || 0);
//     // simple fallback price if backend didn't provide
//     const price = amount > 0 ? amount : 499;

//     // 1) Try to create order on PAYMENTS_API
//     try {
//       const createOrderRes = await axios.post(`${PAYMENTS_API}/create-order`, { amount: price });
//       // expected createOrderRes.data => { success: true, order, key }
//       if (createOrderRes?.data?.success && createOrderRes.data.order && createOrderRes.data.key) {
//         const { order, key } = createOrderRes.data;

//         // Setup Razorpay options
//         const options = {
//           key,
//           amount: order.amount,
//           currency: order.currency || "INR",
//           name: "AstroConnect",
//           description: selectedService.title || selectedService.name || "Energy Reading",
//           order_id: order.id || order.order_id || order._id,
//           handler: async (razorResponse) => {
//             // verify payment on backend
//             try {
//               const verifyRes = await axios.post(`${PAYMENTS_API}/verify`, {
//                 ...razorResponse,
//                 orderAmount: price,
//               });

//               if (verifyRes?.data?.success) {
//                 // create booking with paid status
//                 await createBookingOnBackend("paid", verifyRes.data);
//                 setConfirmationMsg(`✨ Thank you ${name}! Payment successful. We'll email the reading to ${email} within 24-48 hours.`);
//                 setPdfReady(!!verifyRes.data.pdfUrl);
//                 setStep(3);
//               } else {
//                 // payment verification failed
//                 await createBookingOnBackend("failed", { razor: razorResponse, verify: verifyRes?.data });
//                 alert("Payment verification failed. If amount was captured, please contact support.");
//                 setStep(3);
//                 setConfirmationMsg("Payment processed but verification failed — contact support.");
//               }
//             } catch (err) {
//               console.error("verify error", err);
//               await createBookingOnBackend("failed", { error: err?.message });
//               alert("Payment verification failed due to network error.");
//               setStep(3);
//             } finally {
//               setProcessing(false);
//             }
//           },
//           prefill: {
//             name,
//             email,
//             contact: "", // optional: add phone if you collect
//           },
//           theme: { color: "#7b2cbf" },
//         };

//         // open Razorpay
//         const R = window.Razorpay;
//         if (typeof R !== "undefined") {
//           const rzp = new R(options);
//           rzp.on && rzp.on("payment.failed", function (resp) {
//             console.error("razorpay failed", resp);
//             alert("Payment failed. Please try again.");
//             setProcessing(false);
//           });
//           rzp.open();
//           return; // wait for handler
//         } else {
//           // Razorpay lib not loaded — fallback
//           alert("Razorpay script not found in page. Falling back to simulated payment.");
//         }
//       } else {
//         // payments backend didn't create order — fallback to simulated
//         console.warn("create-order returned unexpected:", createOrderRes?.data);
//       }
//     } catch (err) {
//       console.warn("Payments backend unavailable or create-order failed:", err?.message || err);
//       // continue to fallback simulated payment flow
//     }

//     // Fallback: Simulate payment flow and create booking with 'paid' status
//     setTimeout(async () => {
//       try {
//         await createBookingOnBackend("paid", { simulated: true });
//         setConfirmationMsg(`✨ Thank you ${name}! Your booking for "${selectedService.title || ""}" is confirmed. We'll email the reading to ${email} within 24-48 hours.`);
//         setPdfReady(false);
//         setStep(3);
//       } catch (err) {
//         console.error("Fallback booking creation failed:", err);
//         alert("Failed to save booking. Contact admin.");
//       } finally {
//         setProcessing(false);
//       }
//     }, 1200);
//   };

//   // Reset to start
//   const resetAll = () => {
//     setStep(0);
//     setSelectedService(null);
//     setQuestion("");
//     setDetails("");
//     setName("");
//     setEmail("");
//     setDob("");
//     setPhotoFile(null);
//     setConfirmationMsg("");
//     setPdfReady(false);
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   // render helpers
//   const progressWidth = ((step - 1) / 2) * 100;

//   return (
//     <div style={{
//       fontFamily: "'Inter', 'Poppins', sans-serif",
//       color: "#fff",
//       background: "linear-gradient(180deg, #0a0118 0%, #1a0033 50%, #0d001a 100%)",
//       minHeight: "100vh",
//       position: "relative",
//     }}>
//       {/* Sidebar (simple) */}
//       <div style={{
//         position: "fixed",
//         top: 0,
//         left: sidebarOpen ? 0 : "-280px",
//         width: "280px",
//         height: "100vh",
//         background: "linear-gradient(180deg, rgba(15,0,30,0.98), rgba(5,0,20,0.95))",
//         backdropFilter: "blur(20px)",
//         transition: "left 0.4s",
//         zIndex: 1000,
//         padding: "2rem 1.5rem",
//         overflowY: "auto",
//         boxShadow: "4px 0 40px rgba(123,44,191,0.3)"
//       }}>
//         <h2 style={{
//           fontSize: "1.75rem",
//           fontWeight: 700,
//           textAlign: "center",
//           background: "linear-gradient(135deg, #ff00ff, #00ffff)",
//           WebkitBackgroundClip: "text",
//           WebkitTextFillColor: "transparent",
//           marginBottom: "1.5rem",
//         }}>✨ AstroConnect</h2>

//         <ul style={{ listStyle: "none", padding: 0 }}>
//           {navLinks.map((item, idx) => (
//             <li key={idx} style={{ margin: "0.5rem 0" }}>
//               <a href={item.link} style={{ color: "#aaa", textDecoration: "none" }}>{item.name}</a>
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Hamburger */}
//       <button onClick={() => setSidebarOpen(!sidebarOpen)} style={{
//         position: "fixed",
//         top: "1.5rem",
//         left: "1.5rem",
//         background: "rgba(15,0,30,0.8)",
//         color: "#fff",
//         border: "1px solid rgba(255,255,255,0.1)",
//         fontSize: "1.5rem",
//         borderRadius: "14px",
//         width: "56px",
//         height: "56px",
//         cursor: "pointer",
//         zIndex: 998
//       }}>
//         {sidebarOpen ? "✕" : "☰"}
//       </button>

//       <div style={{ marginLeft: !isMobile && sidebarOpen ? "280px" : "0", transition: "margin-left 0.3s", minHeight: "100vh" }}>
//         {/* HERO */}
//         <section style={{ padding: "4rem 2rem 1rem" }}>
//           <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: "2rem", alignItems: "center" }}>
//             <div>
//               <div style={{ display: "inline-flex", gap: 8, padding: "6px 12px", borderRadius: 999, background: "rgba(255,0,255,0.08)", color: "#ff00ff", fontWeight: 700, marginBottom: 16 }}>
//                 <Sparkles size={16} /> Modern Energy Readings
//               </div>

//               <h1 style={{ fontSize: "2.4rem", margin: "0 0 1rem", lineHeight: 1.05 }}>
//                 Decode Your Aura.<br /> Heal Your Energy.
//               </h1>

//               <p style={{ color: "#c4b5fd", fontSize: 16, marginBottom: 16 }}>
//                 Transform your life through deep energetic analysis. We scan your aura, chakras, and emotional blocks to provide remedies and clear guidance.
//               </p>

//               <div style={{ display: "flex", gap: 12 }}>
//                 <button onClick={() => window.scrollTo({ top: 900, behavior: "smooth" })} style={{ padding: "10px 16px", background: "linear-gradient(135deg,#ff00ff,#7b2cbf)", color: "#fff", border: "none", borderRadius: 12, cursor: "pointer", fontWeight: 700 }}>
//                   Start Your Reading <ArrowRight size={16} />
//                 </button>
//                 <div style={{ display: "flex", alignItems: "center", gap: 8, color: "#aaa" }}>
//                   <div style={{ display: "flex" }}>{[1,2,3,4,5].map(i => <Star key={i} size={14} color="#fbbf24" />)}</div>
//                   <div style={{ fontSize: 14 }}>500+ readings delivered</div>
//                 </div>
//               </div>
//             </div>

//             <div style={{ textAlign: "center" }}>
//               <img src="https://res.cloudinary.com/doerrm32l/image/upload/v1761893673/astrologo_fjndbn.png" alt="AstroConnect" style={{ width: "100%", maxWidth: 300, borderRadius: 16 }} />
//             </div>
//           </div>
//         </section>

//         {/* Services */}
//         <section style={{ padding: "2rem" }}>
//           <div style={{ maxWidth: 1200, margin: "0 auto" }}>
//             <h2 style={{ fontSize: "1.6rem", marginBottom: 8 }}>Our Energy Reading Services</h2>
//             <p style={{ color: "#c4b5fd", marginBottom: 16 }}>Choose the reading that resonates with you</p>

//             {loadingServices ? (
//               <div style={{ color: "#ddd" }}>Loading services...</div>
//             ) : (
//               <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(260px,1fr))", gap: 16 }}>
//                 {services.length === 0 ? (
//                   <div style={{ color: "#ddd" }}>No services found. Check backend.</div>
//                 ) : services.map((s) => (
//                   <div key={s._id || s.key} style={{
//                     background: "rgba(255,255,255,0.02)",
//                     border: "1px solid rgba(255,255,255,0.06)",
//                     borderRadius: 12,
//                     padding: 16,
//                     display: "flex",
//                     flexDirection: "column",
//                     gap: 8
//                   }}>
//                     <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start" }}>
//                       <div>
//                         <div style={{ display: "inline-block", padding: "4px 8px", borderRadius: 999, background: "rgba(255,0,255,0.12)", color: "#ff00ff", fontWeight: 700, fontSize: 12 }}>
//                           {s.tag || s.label || "Service"}
//                         </div>
//                         <h3 style={{ margin: "8px 0 6px" }}>{s.title || s.name || s.label}</h3>
//                         <div style={{ color: "#aaa", fontSize: 14 }}>{s.short || s.description}</div>
//                       </div>
//                       <div style={{ textAlign: "right" }}>
//                         <div style={{ fontSize: 18, fontWeight: 800, background: "linear-gradient(135deg,#ff00ff,#00ffff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
//                           ₹{s.price ?? s.amount ?? "—"}
//                         </div>
//                         <div style={{ marginTop: 8 }}>
//                           <button onClick={() => selectService(s.key || s._id)} style={{ padding: "8px 12px", background: "linear-gradient(135deg,#ff00ff,#00ffff)", borderRadius: 10, border: "none", color: "#fff", cursor: "pointer" }}>
//                             Book Now
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                     <p style={{ color: "#ddd", fontSize: 13, marginTop: 6 }}>{s.desc || s.fullDesc || ""}</p>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//         </section>

//         {/* Booking form + payment steps */}
//         {step > 0 && selectedService && (
//           <section style={{ padding: "2rem" }}>
//             <div style={{ maxWidth: 900, margin: "0 auto", background: "rgba(255,255,255,0.03)", borderRadius: 12, padding: 20 }}>
//               <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
//                 <h3 style={{ margin: 0 }}>Book: {selectedService.title || selectedService.name}</h3>
//                 <div style={{ color: "#aaa" }}>Step {step} of 3</div>
//               </div>

//               {/* progress bar */}
//               <div style={{ marginTop: 12 }}>
//                 <div style={{ height: 6, background: "rgba(255,255,255,0.06)", borderRadius: 6, overflow: "hidden" }}>
//                   <div style={{ width: `${Math.max(0, Math.min(100, progressWidth))}%`, height: "100%", background: "linear-gradient(90deg,#ff00ff,#00ffff)", transition: "width .4s" }} />
//                 </div>
//               </div>

//               {/* Step 1: Form */}
//               {step === 1 && (
//                 <form onSubmit={handleFormSubmit} style={{ marginTop: 16, display: "grid", gap: 12 }}>
//                   {/* if service has a question requirement */}
//                   {selectedService.key === "yesNo" && (
//                     <div>
//                       <label style={{ color: "#ddd", fontWeight: 600 }}>Your Question *</label>
//                       <input type="text" value={question} onChange={(e) => setQuestion(e.target.value)} placeholder="E.g. Should I accept this job?" style={inputStyle} />
//                     </div>
//                   )}

//                   <div>
//                     <label style={{ color: "#ddd", fontWeight: 600 }}>Full Name *</label>
//                     <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your full name" style={inputStyle} required />
//                   </div>

//                   <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
//                     <div>
//                       <label style={{ color: "#ddd", fontWeight: 600 }}>Email *</label>
//                       <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@email.com" style={inputStyle} required />
//                     </div>
//                     <div>
//                       <label style={{ color: "#ddd", fontWeight: 600 }}>Date of Birth *</label>
//                       <input type="date" value={dob} onChange={(e) => setDob(e.target.value)} style={inputStyle} required />
//                     </div>
//                   </div>

//                   <div>
//                     <label style={{ color: "#ddd", fontWeight: 600 }}>Upload Photo (optional)</label>
//                     <input type="file" accept="image/*" onChange={(e) => setPhotoFile(e.target.files[0])} />
//                     {photoFile && <div style={{ color: "#9fefbc", marginTop: 8 }}>✓ {photoFile.name}</div>}
//                   </div>

//                   <div>
//                     <label style={{ color: "#ddd", fontWeight: 600 }}>Additional Details</label>
//                     <textarea value={details} onChange={(e) => setDetails(e.target.value)} rows={4} style={{ ...inputStyle, minHeight: 80 }} placeholder="Anything else we should know..." />
//                   </div>

//                   <div style={{ display: "flex", gap: 12 }}>
//                     <button type="submit" style={{ padding: "10px 14px", background: "linear-gradient(135deg,#ff00ff,#7b2cbf)", color: "#fff", border: "none", borderRadius: 10, cursor: "pointer" }}>
//                       Continue to Payment <ArrowRight size={16} />
//                     </button>
//                     <button type="button" onClick={resetAll} style={{ padding: "10px 14px", background: "rgba(255,255,255,0.04)", color: "#fff", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 10 }}>
//                       Cancel
//                     </button>
//                   </div>
//                 </form>
//               )}

//               {/* Step 2: Payment */}
//               {step === 2 && (
//                 <div style={{ marginTop: 16 }}>
//                   <div style={{ display: "grid", gap: 12 }}>
//                     <div style={{ background: "rgba(255,255,255,0.02)", padding: 12, borderRadius: 10 }}>
//                       <div style={{ display: "flex", justifyContent: "space-between" }}>
//                         <div style={{ color: "#aaa" }}>Service</div>
//                         <div style={{ fontWeight: 700 }}>{selectedService.title}</div>
//                       </div>
//                       <div style={{ display: "flex", justifyContent: "space-between", marginTop: 8 }}>
//                         <div style={{ color: "#aaa" }}>Name</div>
//                         <div>{name}</div>
//                       </div>
//                       <div style={{ display: "flex", justifyContent: "space-between", marginTop: 8 }}>
//                         <div style={{ color: "#aaa" }}>Email</div>
//                         <div>{email}</div>
//                       </div>
//                       <div style={{ display: "flex", justifyContent: "space-between", marginTop: 8 }}>
//                         <div style={{ color: "#aaa" }}>Total</div>
//                         <div style={{ fontWeight: 800, background: "linear-gradient(135deg,#ff00ff,#00ffff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
//                           ₹{selectedService.price ?? selectedService.amount ?? "—"}
//                         </div>
//                       </div>
//                     </div>

//                     <div style={{ display: "flex", gap: 12 }}>
//                       <button onClick={handlePayment} disabled={processing} style={{ padding: "10px 14px", background: "linear-gradient(135deg,#ff00ff,#00ffff)", color: "#fff", border: "none", borderRadius: 10, cursor: "pointer", display: "flex", alignItems: "center", gap: 8 }}>
//                         {processing ? <><Loader2 size={16} className="spin" /> Processing...</> : <>Pay Securely Now <Zap size={16} /></>}
//                       </button>
//                       <button onClick={() => setStep(1)} style={{ padding: "10px 14px", background: "rgba(255,255,255,0.04)", color: "#fff", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 10 }}>
//                         ← Edit Details
//                       </button>
//                     </div>

//                     <div style={{ color: "#aaa", fontSize: 13 }}>
//                       If your site has Razorpay and payments backend, the secure checkout will open. Otherwise a simulated confirmation will be created and saved to the backend if available.
//                     </div>
//                   </div>
//                 </div>
//               )}

//               {/* Step 3: Confirmation */}
//               {step === 3 && (
//                 <div style={{ marginTop: 16, textAlign: "center" }}>
//                   <div style={{ display: "inline-block", padding: 18, borderRadius: 999, background: "rgba(74,222,128,0.12)", marginBottom: 12 }}>
//                     <CheckCircle size={42} color="#4ade80" />
//                   </div>
//                   <h3 style={{ marginTop: 8 }}>Payment Successful!</h3>
//                   <p style={{ color: "#c4b5fd" }}>{confirmationMsg || `Thanks ${name}. We'll email your reading to ${email} within 24-48 hours.`}</p>

//                   {pdfReady && (
//                     <div style={{ display: "inline-flex", alignItems: "center", gap: 8, marginTop: 8, padding: "10px 14px", borderRadius: 8, background: "rgba(74,222,128,0.08)" }}>
//                       <FileText size={18} color="#4ade80" /> Your PDF report is ready
//                     </div>
//                   )}

//                   <div style={{ marginTop: 18 }}>
//                     <button onClick={resetAll} style={{ padding: "10px 14px", background: "rgba(255,255,255,0.04)", color: "#fff", borderRadius: 10, border: "1px solid rgba(255,255,255,0.06)" }}>
//                       Book Another Reading
//                     </button>
//                   </div>
//                 </div>
//               )}
//             </div>
//           </section>
//         )}
//       </div>

//       <style>{`
//         .spin { animation: spin 1s linear infinite; }
//         @keyframes spin { from { transform: rotate(0); } to { transform: rotate(360deg);} }
//       `}</style>
//     </div>
//   );
// }

// // small shared input style
// const inputStyle = {
//   width: "100%",
//   padding: "10px 12px",
//   borderRadius: 10,
//   border: "1px solid rgba(255,255,255,0.08)",
//   background: "rgba(255,255,255,0.02)",
//   color: "#fff",
//   fontSize: 14,
// };


// import React, { useEffect, useState, useRef } from "react";
// import axios from "axios";
// import "../../styles/Energy.css";

// import {
//   Loader2,
//   CheckCircle,
//   FileText,
//   Sparkles,
//   Star,
//   CreditCard,
//   ClipboardList,
//   Check,
//   ArrowRight,
//   Zap,
//   TrendingUp,
// } from "lucide-react";

// const SERVICES_API = "https://adminastrotalk-1.onrender.com/api/energy-services";

// const BOOKING_API =
//   process.env.REACT_APP_ENERGY_BOOKING_API || "https://adminastrotalk-1.onrender.com/api/bookings";
// const PAYMENTS_API =
//   process.env.REACT_APP_PAYMENTS_API || "https://adminastrotalk-1.onrender.com/api/payments";

// const navLinks = [
//   { name: "Home", link: "/#home" },
//   { name: "About Us", link: "/about-us" },
//   { name: "Energy", link: "/energy" },
//   { name: "Astrology", link: "/astrology" },
//   { name: "Vastu", link: "/vastu" },
//   { name: "Manifestation", link: "/manifestation" },
//   { name: "Material", link: "/material" },
//   { name: "Blogs", link: "/blogs" },
//   { name: "Careers", link: "/careers" },
//   { name: "Contact", link: "/contact" },
//   { name: "Login / Signup", link: "/auth" },
// ];

// export default function Energy() {
//   // UI state
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [isMobile, setIsMobile] = useState(false);

//   // ⭐ Sidebar ref added
//   const sidebarRef = useRef(null);

//   // ⭐ Outside click + ESC close
//   useEffect(() => {
//     const handleClickOutside = (e) => {
//       if (
//         sidebarOpen &&
//         sidebarRef.current &&
//         !sidebarRef.current.contains(e.target)
//       ) {
//         setSidebarOpen(false);
//       }
//     };

//     const handleEsc = (e) => {
//       if (e.key === "Escape") {
//         setSidebarOpen(false);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     document.addEventListener("keydown", handleEsc);

//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//       document.removeEventListener("keydown", handleEsc);
//     };
//   }, [sidebarOpen]);

//   // Data
//   const [services, setServices] = useState([]);
//   const [loadingServices, setLoadingServices] = useState(false);

//   // Booking flow
//   const [step, setStep] = useState(0); // 0 = browse, 1 = form, 2 = payment, 3 = confirmation
//   const [selectedService, setSelectedService] = useState(null);

//   // Form fields
//   const [question, setQuestion] = useState("");
//   const [details, setDetails] = useState("");
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [dob, setDob] = useState("");
//   const [photoFile, setPhotoFile] = useState(null);

//   // UX
//   const [processing, setProcessing] = useState(false);
//   const [confirmationMsg, setConfirmationMsg] = useState("");
//   const [pdfReady, setPdfReady] = useState(false);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 1024);
//       if (window.innerWidth < 1024) setSidebarOpen(false);
//     };
//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   // Fetch services from backend
//   useEffect(() => {
//     fetchServices();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   const fetchServices = async () => {
//     try {
//       setLoadingServices(true);
//       const res = await axios.get(`${SERVICES_API}/all`);
//       if (res?.data?.status && Array.isArray(res.data.services)) {
//         setServices(res.data.services);
//       } else {
//         if (Array.isArray(res.data)) {
//           setServices(res.data);
//         } else {
//           console.warn("Unexpected services response:", res.data);
//           setServices([]);
//         }
//       }
//     } catch (err) {
//       console.error("Failed to fetch services:", err);
//       setServices([]);
//     } finally {
//       setLoadingServices(false);
//     }
//   };

//   // Select service (opens form)
//   const selectService = (serviceKey) => {
//     const svc =
//       services.find((s) => s.key === serviceKey || s._id === serviceKey) ||
//       services.find((s) => s.key === serviceKey) ||
//       services.find((s) => s._id === serviceKey);

//     if (!svc) {
//       alert("Selected service not found in backend. Refresh or check backend.");
//       return;
//     }
//     setSelectedService(svc);
//     setStep(1);
//     window.scrollTo({ top: 700, behavior: "smooth" });
//   };

//   // Form submission
//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     if (!name || !email || !dob) {
//       alert("Please fill name, email and date of birth.");
//       return;
//     }
//     setStep(2);
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   // Create booking on backend
//   const createBookingOnBackend = async (paymentStatus = "pending", paymentInfo = {}) => {
//     try {
//       const form = new FormData();
//       form.append("serviceKey", selectedService.key || selectedService._id);
//       form.append("serviceTitle", selectedService.title || selectedService.name || "");
//       form.append("name", name);
//       form.append("email", email);
//       form.append("dob", dob);
//       form.append("question", question || "");
//       form.append("details", details || "");
//       form.append("paymentStatus", paymentStatus);
//       if (paymentInfo && typeof paymentInfo === "object")
//         form.append("paymentInfo", JSON.stringify(paymentInfo));
//       if (photoFile) form.append("photo", photoFile);

//       let bookingRes;
//       try {
//         bookingRes = await axios.post(`${BOOKING_API}/create`, form, {
//           headers: { "Content-Type": "multipart/form-data" },
//         });
//       } catch (err) {
//         try {
//           bookingRes = await axios.post(`${SERVICES_API}/book`, form, {
//             headers: { "Content-Type": "multipart/form-data" },
//           });
//         } catch (err2) {
//           const payload = {
//             serviceKey: selectedService.key || selectedService._id,
//             serviceTitle: selectedService.title || selectedService.name || "",
//             name,
//             email,
//             dob,
//             question,
//             details,
//             paymentStatus,
//             paymentInfo,
//           };
//           bookingRes = await axios.post(`${SERVICES_API}/create-booking`, payload).catch(() => null);
//         }
//       }
//       if (bookingRes?.data) return bookingRes.data;
//       return null;
//     } catch (err) {
//       console.error("createBookingOnBackend error:", err);
//       return null;
//     }
//   };

//   // Payment handler
//   const handlePayment = async () => {
//     setProcessing(true);

//     const amount = Number(selectedService.price || selectedService.amount || selectedService.price_inr || 0);
//     const price = amount > 0 ? amount : 499;

//     try {
//       const createOrderRes = await axios.post(`${PAYMENTS_API}/create-order`, { amount: price });
//       if (createOrderRes?.data?.success && createOrderRes.data.order && createOrderRes.data.key) {
//         const { order, key } = createOrderRes.data;

//         const options = {
//           key,
//           amount: order.amount,
//           currency: order.currency || "INR",
//           name: "AstroConnect",
//           description: selectedService.title || selectedService.name || "Energy Reading",
//           order_id: order.id || order.order_id || order._id,
//           handler: async (razorResponse) => {
//             try {
//               const verifyRes = await axios.post(`${PAYMENTS_API}/verify`, {
//                 ...razorResponse,
//                 orderAmount: price,
//               });

//               if (verifyRes?.data?.success) {
//                 await createBookingOnBackend("paid", verifyRes.data);
//                 setConfirmationMsg(`✨ Thank you ${name}! Payment successful. We'll email the reading to ${email} within 24-48 hours.`);
//                 setPdfReady(!!verifyRes.data.pdfUrl);
//                 setStep(3);
//               } else {
//                 await createBookingOnBackend("failed", { razor: razorResponse, verify: verifyRes?.data });
//                 alert("Payment verification failed. If amount was captured, please contact support.");
//                 setStep(3);
//                 setConfirmationMsg("Payment processed but verification failed — contact support.");
//               }
//             } catch (err) {
//               console.error("verify error", err);
//               await createBookingOnBackend("failed", { error: err?.message });
//               alert("Payment verification failed due to network error.");
//               setStep(3);
//             } finally {
//               setProcessing(false);
//             }
//           },
//           prefill: { name, email },
//           theme: { color: "#7b2cbf" },
//         };

//         if (typeof window.Razorpay !== "undefined") {
//           const rzp = new window.Razorpay(options);
//           rzp.on &&
//             rzp.on("payment.failed", function () {
//               alert("Payment failed. Try again.");
//               setProcessing(false);
//             });
//           rzp.open();
//           return;
//         } else {
//           alert("Razorpay script missing. Using fallback.");
//         }
//       }
//     } catch (err) {
//       console.warn("Payments backend unavailable:", err?.message || err);
//     }

//     setTimeout(async () => {
//       try {
//         await createBookingOnBackend("paid", { simulated: true });
//         setConfirmationMsg(`✨ Thank you ${name}! Your booking for "${selectedService.title || ""}" is confirmed. We'll email the reading to ${email} within 24-48 hours.`);
//         setPdfReady(false);
//         setStep(3);
//       } catch (err) {
//         alert("Failed to save booking. Contact admin.");
//       } finally {
//         setProcessing(false);
//       }
//     }, 1200);
//   };

//   const resetAll = () => {
//     setStep(0);
//     setSelectedService(null);
//     setQuestion("");
//     setDetails("");
//     setName("");
//     setEmail("");
//     setDob("");
//     setPhotoFile(null);
//     setConfirmationMsg("");
//     setPdfReady(false);
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   const progressWidth = ((step - 1) / 2) * 100;

//   return (
//     <div
//       style={{
//         fontFamily: "'Inter', 'Poppins', sans-serif",
//         color: "#fff",
//         marginTop: "-65px" ,
//         background: "linear-gradient(180deg, #0a0118 0%, #1a0033 50%, #0d001a 100%)",
//         minHeight: "100vh",
//         position: "relative",
//       }}
//     >
//       {/* Sidebar */}
//       <div
//         ref={sidebarRef}
//         style={{
//           position: "fixed",
//           top: 0,
//           left: sidebarOpen ? 0 : "-280px",
//           width: "280px",
//           height: "100vh",
//           background: "linear-gradient(180deg, rgba(15,0,30,0.98), rgba(5,0,20,0.95))",
//           backdropFilter: "blur(20px)",
//           transition: "left 0.4s",
//           zIndex: 1000,
//           padding: "2rem 1.5rem",
//           overflowY: "auto",
//           boxShadow: "4px 0 40px rgba(123,44,191,0.3)",
//         }}
//       >
//         <h2
//           style={{
//             fontSize: "1.75rem",
//             fontWeight: 700,
//             textAlign: "center",
//             background: "linear-gradient(135deg, #ff00ff, #00ffff)",
//             WebkitBackgroundClip: "text",
//             WebkitTextFillColor: "transparent",
//             marginBottom: "1.5rem",
//           }}
//         >
//           ✨ AstroConnect
//         </h2>

//         <ul style={{ listStyle: "none", padding: 0 }}>
//           {navLinks.map((item, idx) => (
//             <li key={idx} style={{  }}>
//               <a
//                 href={item.link}
//                 style={{ color: "#aaa", textDecoration: "none" }}
//               >
//                 {item.name}
//               </a>
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Hamburger */}
//       <button
//         onClick={() => setSidebarOpen(!sidebarOpen)}
//         style={{
//           position: "fixed",
          
//           left: "1.5rem",
//           background: "rgba(15,0,30,0.8)",
//           color: "#fff",
//           border: "1px solid rgba(255,255,255,0.1)",
//           fontSize: "1.5rem",
//           borderRadius: "14px",
//           width: "56px",
//           height: "56px",
//           cursor: "pointer",
//           zIndex: 998,
//         }}
//       >
//         {sidebarOpen ? "✕" : "☰"}
//       </button>

//       <div
//         style={{
//           marginLeft: !isMobile && sidebarOpen ? "280px" : "0",
//           transition: "margin-left 0.3s",
//           minHeight: "100vh",
//         }}
//       >
//         {/* HERO */}
//         <section style={{ padding: "4rem 2rem 1rem" }}>
//           <div
//             style={{
//               maxWidth: 1200,
//               margin: "0 auto",
//               display: "grid",
//               gridTemplateColumns: "1.2fr 1fr",
//               gap: "2rem",
//               alignItems: "center",
//             }}
//           >
//             <div>
//               <div
//                 style={{
//                   display: "inline-flex",
//                   gap: 8,
//                   padding: "6px 12px",
//                   borderRadius: 999,
//                   background: "rgba(255,0,255,0.08)",
//                   color: "#ff00ff",
//                   fontWeight: 700,
//                   marginBottom: 16,
//                 }}
//               >
//                 <Sparkles size={16} /> Modern Energy Readings
//               </div>

//               <h1
//                 style={{
//                   fontSize: "2.4rem",
//                   margin: "0 0 1rem",
//                   lineHeight: 1.05,
//                 }}
//               >
//                 Decode Your Aura.
//                 <br /> Heal Your Energy.
//               </h1>

//               <p style={{ color: "#c4b5fd", fontSize: 16, marginBottom: 16 }}>
//                 Transform your life through deep energetic analysis. We scan your
//                 aura, chakras, and emotional blocks to provide remedies and clear
//                 guidance.
//               </p>

//               <div style={{ display: "flex", gap: 12 }}>
//                 <button
//                   onClick={() =>
//                     window.scrollTo({ top: 900, behavior: "smooth" })
//                   }
//                   style={{
//                     padding: "10px 16px",
//                     background:
//                       "linear-gradient(135deg,#ff00ff,#7b2cbf)",
//                     color: "#fff",
//                     border: "none",
//                     borderRadius: 12,
//                     cursor: "pointer",
//                     fontWeight: 700,
//                   }}
//                 >
//                   Start Your Reading <ArrowRight size={16} />
//                 </button>
//                 <div
//                   style={{
//                     display: "flex",
//                     alignItems: "center",
//                     gap: 8,
//                     color: "#aaa",
//                   }}
//                 >
//                   <div style={{ display: "flex" }}>
//                     {[1, 2, 3, 4, 5].map((i) => (
//                       <Star key={i} size={14} color="#fbbf24" />
//                     ))}
//                   </div>
//                   <div style={{ fontSize: 14 }}>500+ readings delivered</div>
//                 </div>
//               </div>
//             </div>

//             <div style={{ textAlign: "center" }}>
//               <img
//                 src="https://res.cloudinary.com/doerrm32l/image/upload/v1761893673/astrologo_fjndbn.png"
//                 alt="AstroConnect"
//                 style={{ width: "100%", maxWidth: 300, borderRadius: 16 }}
//               />
//             </div>
//           </div>
//         </section>

//         {/* Services */}
//         <section style={{ padding: "2rem" }}>
//           <div style={{ maxWidth: 1200, margin: "0 auto" }}>
//             <h2 style={{ fontSize: "1.6rem", marginBottom: 8 }}>
//               Our Energy Reading Services
//             </h2>
//             <p style={{ color: "#c4b5fd", marginBottom: 16 }}>
//               Choose the reading that resonates with you
//             </p>

//             {loadingServices ? (
//               <div style={{ color: "#ddd" }}>Loading services...</div>
//             ) : (
//               // <div
//               //   style={{
//               //     display: "grid",
//               //     gridTemplateColumns:
//               //       "repeat(auto-fill,minmax(260px,1fr))",
//               //     gap: 16,
//               //   }}
//               // >
//               <div
//   style={{
//     display: "grid",
//     gridTemplateColumns: "repeat(auto-fill,minmax(260px,1fr))",
//     gap: 0,
//   }}
// >

//                 {services.length === 0 ? (
//                   <div style={{ color: "#ddd" }}>
//                     No services found. Check backend.
//                   </div>
//                 ) : (
//                   services.map((s) => (
//                     <div
//                       key={s._id || s.key}
//                       style={{
//                         background: "rgba(255,255,255,0.02)",
//                         border:
//                           "1px solid rgba(255,255,255,0.06)",
//                         borderRadius: 12,
//                         padding: 16,
//                         display: "flex",
//                         flexDirection: "column",
//                         gap: 8,
//                       }}
//                     >
//                       <div
//                         style={{
//                           display: "flex",
//                           justifyContent: "space-between",
//                           alignItems: "start",
//                         }}
//                       >
//                         <div>
//                           <div
//                             style={{
//                               display: "inline-block",
//                               padding: "4px 8px",
//                               borderRadius: 999,
//                               background:
//                                 "rgba(255,0,255,0.12)",
//                               color: "#ff00ff",
//                               fontWeight: 700,
//                               fontSize: 12,
//                             }}
//                           >
//                             {s.tag || s.label || "Service"}
//                           </div>
//                           <h3 style={{ margin: "8px 0 6px" }}>
//                             {s.title || s.name || s.label}
//                           </h3>
//                           <div
//                             style={{
//                               color: "#aaa",
//                               fontSize: 14,
//                             }}
//                           >
//                             {s.short || s.description}
//                           </div>
//                         </div>
//                         <div style={{ textAlign: "right" }}>
//                           <div
//                             style={{
//                               fontSize: 18,
//                               fontWeight: 800,
//                               background:
//                                 "linear-gradient(135deg,#ff00ff,#00ffff)",
//                               WebkitBackgroundClip: "text",
//                               WebkitTextFillColor:
//                                 "transparent",
//                             }}
//                           >
//                             ₹{s.price ?? s.amount ?? "—"}
//                           </div>
//                           <div style={{ marginTop: 8 }}>
//                             <button
//                               onClick={() =>
//                                 selectService(s.key || s._id)
//                               }
//                               style={{
//                                 padding: "8px 12px",
//                                 background:
//                                   "linear-gradient(135deg,#ff00ff,#00ffff)",
//                                 borderRadius: 10,
//                                 border: "none",
//                                 color: "#fff",
//                                 cursor: "pointer",
//                               }}
//                             >
//                               Book Now
//                             </button>
//                           </div>
//                         </div>
//                       </div>
//                       <p
//                         style={{
//                           color: "#ddd",
//                           fontSize: 13,
//                           marginTop: 6,
//                         }}
//                       >
//                         {s.desc || s.fullDesc || ""}
//                       </p>
//                     </div>
//                   ))
//                 )}
//               </div>
//             )}
//           </div>
//         </section>

//         {/* Booking Steps */}
//         {step > 0 && selectedService && (
//           <section style={{ padding: "2rem" }}>
//             <div
//               style={{
//                 maxWidth: 900,
//                 margin: "0 auto",
//                 background: "rgba(255,255,255,0.03)",
//                 borderRadius: 12,
//                 padding: 20,
//               }}
//             >
//               <div
//                 style={{
//                   display: "flex",
//                   justifyContent: "space-between",
//                   alignItems: "center",
//                 }}
//               >
//                 <h3 style={{ margin: 0 }}>
//                   Book: {selectedService.title || selectedService.name}
//                 </h3>
//                 <div style={{ color: "#aaa" }}>Step {step} of 3</div>
//               </div>

//               {/* Progress bar */}
//               <div style={{ marginTop: 12 }}>
//                 <div
//                   style={{
//                     height: 6,
//                     background: "rgba(255,255,255,0.06)",
//                     borderRadius: 6,
//                     overflow: "hidden",
//                   }}
//                 >
//                   <div
//                     style={{
//                       width: `${Math.max(
//                         0,
//                         Math.min(100, progressWidth)
//                       )}%`,
//                       height: "100%",
//                       background:
//                         "linear-gradient(90deg,#ff00ff,#00ffff)",
//                       transition: "width .4s",
//                     }}
//                   />
//                 </div>
//               </div>

//               {/* Step 1: Form */}
//               {step === 1 && (
//                 <form
//                   onSubmit={handleFormSubmit}
//                   style={{
//                     marginTop: 16,
//                     display: "grid",
//                     gap: 12,
//                   }}
//                 >
//                   {selectedService.key === "yesNo" && (
//                     <div>
//                       <label
//                         style={{
//                           color: "#ddd",
//                           fontWeight: 600,
//                         }}
//                       >
//                         Your Question *
//                       </label>
//                       <input
//                         type="text"
//                         value={question}
//                         onChange={(e) =>
//                           setQuestion(e.target.value)
//                         }
//                         placeholder="E.g. Should I accept this job?"
//                         style={inputStyle}
//                       />
//                     </div>
//                   )}

//                   <div>
//                     <label
//                       style={{ color: "#ddd", fontWeight: 600 }}
//                     >
//                       Full Name *
//                     </label>
//                     <input
//                       type="text"
//                       value={name}
//                       onChange={(e) =>
//                         setName(e.target.value)
//                       }
//                       placeholder="Your full name"
//                       style={inputStyle}
//                       required
//                     />
//                   </div>

//                   <div
//                     style={{
//                       display: "grid",
//                       gridTemplateColumns: "1fr 1fr",
//                       gap: 12,
//                     }}
//                   >
//                     <div>
//                       <label
//                         style={{
//                           color: "#ddd",
//                           fontWeight: 600,
//                         }}
//                       >
//                         Email *
//                       </label>
//                       <input
//                         type="email"
//                         value={email}
//                         onChange={(e) =>
//                           setEmail(e.target.value)
//                         }
//                         placeholder="you@email.com"
//                         style={inputStyle}
//                         required
//                       />
//                     </div>
//                     <div>
//                       <label
//                         style={{
//                           color: "#ddd",
//                           fontWeight: 600,
//                         }}
//                       >
//                         Date of Birth *
//                       </label>
//                       <input
//                         type="date"
//                         value={dob}
//                         onChange={(e) =>
//                           setDob(e.target.value)
//                         }
//                         style={inputStyle}
//                         required
//                       />
//                     </div>
//                   </div>

//                   <div>
//                     <label
//                       style={{
//                         color: "#ddd",
//                         fontWeight: 600,
//                       }}
//                     >
//                       Upload Photo (optional)
//                     </label>
//                     <input
//                       type="file"
//                       accept="image/*"
//                       onChange={(e) =>
//                         setPhotoFile(e.target.files[0])
//                       }
//                     />
//                     {photoFile && (
//                       <div
//                         style={{
//                           color: "#9fefbc",
//                           marginTop: 8,
//                         }}
//                       >
//                         ✓ {photoFile.name}
//                       </div>
//                     )}
//                   </div>

//                   <div>
//                     <label
//                       style={{
//                         color: "#ddd",
//                         fontWeight: 600,
//                       }}
//                     >
//                       Additional Details
//                     </label>
//                     <textarea
//                       value={details}
//                       onChange={(e) =>
//                         setDetails(e.target.value)
//                       }
//                       rows={4}
//                       style={{
//                         ...inputStyle,
//                         minHeight: 80,
//                       }}
//                       placeholder="Anything else we should know..."
//                     />
//                   </div>

//                   <div style={{ display: "flex", gap: 12 }}>
//                     <button
//                       type="submit"
//                       style={{
//                         padding: "10px 14px",
//                         background:
//                           "linear-gradient(135deg,#ff00ff,#7b2cbf)",
//                         color: "#fff",
//                         border: "none",
//                         borderRadius: 10,
//                         cursor: "pointer",
//                       }}
//                     >
//                       Continue to Payment{" "}
//                       <ArrowRight size={16} />
//                     </button>
//                     <button
//                       type="button"
//                       onClick={resetAll}
//                       style={{
//                         padding: "10px 14px",
//                         background:
//                           "rgba(255,255,255,0.04)",
//                         color: "#fff",
//                         border:
//                           "1px solid rgba(255,255,255,0.06)",
//                         borderRadius: 10,
//                       }}
//                     >
//                       Cancel
//                     </button>
//                   </div>
//                 </form>
//               )}

//               {/* Step 2: Payment */}
//               {step === 2 && (
//                 <div style={{ marginTop: 16 }}>
//                   <div style={{ display: "grid", gap: 12 }}>
//                     <div
//                       style={{
//                         background:
//                           "rgba(255,255,255,0.02)",
//                         padding: 12,
//                         borderRadius: 10,
//                       }}
//                     >
//                       <div
//                         style={{
//                           display: "flex",
//                           justifyContent: "space-between",
//                         }}
//                       >
//                         <div style={{ color: "#aaa" }}>
//                           Service
//                         </div>
//                         <div style={{ fontWeight: 700 }}>
//                           {selectedService.title}
//                         </div>
//                       </div>
//                       <div
//                         style={{
//                           display: "flex",
//                           justifyContent: "space-between",
//                           marginTop: 8,
//                         }}
//                       >
//                         <div style={{ color: "#aaa" }}>
//                           Name
//                         </div>
//                         <div>{name}</div>
//                       </div>
//                       <div
//                         style={{
//                           display: "flex",
//                           justifyContent: "space-between",
//                           marginTop: 8,
//                         }}
//                       >
//                         <div style={{ color: "#aaa" }}>
//                           Email
//                         </div>
//                         <div>{email}</div>
//                       </div>
//                       <div
//                         style={{
//                           display: "flex",
//                           justifyContent: "space-between",
//                           marginTop: 8,
//                         }}
//                       >
//                         <div style={{ color: "#aaa" }}>
//                           Total
//                         </div>
//                         <div
//                           style={{
//                             fontWeight: 800,
//                             background:
//                               "linear-gradient(135deg,#ff00ff,#00ffff)",
//                             WebkitBackgroundClip:
//                               "text",
//                             WebkitTextFillColor:
//                               "transparent",
//                           }}
//                         >
//                           ₹
//                           {selectedService.price ??
//                             selectedService.amount ??
//                             "—"}
//                         </div>
//                       </div>
//                     </div>

//                     <div style={{ display: "flex", gap: 12 }}>
//                       <button
//                         onClick={handlePayment}
//                         disabled={processing}
//                         style={{
//                           padding: "10px 14px",
//                           background:
//                             "linear-gradient(135deg,#ff00ff,#00ffff)",
//                           color: "#fff",
//                           border: "none",
//                           borderRadius: 10,
//                           cursor: "pointer",
//                           display: "flex",
//                           alignItems: "center",
//                           gap: 8,
//                         }}
//                       >
//                         {processing ? (
//                           <>
//                             <Loader2
//                               size={16}
//                               className="spin"
//                             />{" "}
//                             Processing...
//                           </>
//                         ) : (
//                           <>
//                             Pay Securely Now{" "}
//                             <Zap size={16} />
//                           </>
//                         )}
//                       </button>
//                       <button
//                         onClick={() => setStep(1)}
//                         style={{
//                           padding: "10px 14px",
//                           background:
//                             "rgba(255,255,255,0.04)",
//                           color: "#fff",
//                           border:
//                             "1px solid rgba(255,255,255,0.06)",
//                           borderRadius: 10,
//                         }}
//                       >
//                         ← Edit Details
//                       </button>
//                     </div>

//                     <div
//                       style={{
//                         color: "#aaa",
//                         fontSize: 13,
//                       }}
//                     >
//                       If your site has Razorpay and payments
//                       backend, the secure checkout will open.
//                       Otherwise a simulated confirmation will
//                       be created and saved to the backend if
//                       available.
//                     </div>
//                   </div>
//                 </div>
//               )}

//               {/* Step 3: Confirmation */}
//               {step === 3 && (
//                 <div
//                   style={{
//                     marginTop: 16,
//                     textAlign: "center",
//                   }}
//                 >
//                   <div
//                     style={{
//                       display: "inline-block",
//                       padding: 18,
//                       borderRadius: 999,
//                       background:
//                         "rgba(74,222,128,0.12)",
//                       marginBottom: 12,
//                     }}
//                   >
//                     <CheckCircle
//                       size={42}
//                       color="#4ade80"
//                     />
//                   </div>
//                   <h3 style={{ marginTop: 8 }}>
//                     Payment Successful!
//                   </h3>
//                   <p
//                     style={{
//                       color: "#c4b5fd",
//                     }}
//                   >
//                     {confirmationMsg ||
//                       `Thanks ${name}. We'll email your reading to ${email} within 24-48 hours.`}
//                   </p>

//                   {pdfReady && (
//                     <div
//                       style={{
//                         display: "inline-flex",
//                         alignItems: "center",
//                         gap: 8,
//                         marginTop: 8,
//                         padding: "10px 14px",
//                         borderRadius: 8,
//                         background:
//                           "rgba(74,222,128,0.08)",
//                       }}
//                     >
//                       <FileText
//                         size={18}
//                         color="#4ade80"
//                       />{" "}
//                       Your PDF report is ready
//                     </div>
//                   )}

//                   <div style={{ marginTop: 18 }}>
//                     <button
//                       onClick={resetAll}
//                       style={{
//                         padding: "10px 14px",
//                         background:
//                           "rgba(255,255,255,0.04)",
//                         color: "#fff",
//                         borderRadius: 10,
//                         border:
//                           "1px solid rgba(255,255,255,0.06)",
//                       }}
//                     >
//                       Book Another Reading
//                     </button>
//                   </div>
//                 </div>
//               )}
//             </div>
//           </section>
//         )}
//       </div>

//       <style>{`
//         .spin { animation: spin 1s linear infinite; }
//         @keyframes spin { from { transform: rotate(0); } to { transform: rotate(360deg);} }
//       `}</style>
//     </div>
//   );
// }

// // small shared input style
// const inputStyle = {
//   width: "100%",
//   padding: "10px 12px",
//   borderRadius: 10,
//   border: "1px solid rgba(255,255,255,0.08)",
//   background: "rgba(255,255,255,0.02)",
//   color: "#fff",
//   fontSize: 14,
// };


import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import "../../styles/Energy.css";
import {
  Sparkles,
  Star,
  ArrowRight,
  CheckCircle,
  Loader2,
  Zap,
  FileText,
} from "lucide-react";

const SERVICES_API = "https://adminastrotalk-1.onrender.com/api/energy-services";
const BOOKING_API = "https://adminastrotalk-1.onrender.com/api/bookings";
const PAYMENTS_API = "https://adminastrotalk-1.onrender.com/api/payments";

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

export default function Energy() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const sidebarRef = useRef(null);

  const [services, setServices] = useState([]);
  const [loadingServices, setLoadingServices] = useState(false);

  const [step, setStep] = useState(0);
  const [selectedService, setSelectedService] = useState(null);

  const [question, setQuestion] = useState("");
  const [details, setDetails] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [photoFile, setPhotoFile] = useState(null);

  const [processing, setProcessing] = useState(false);
  const [confirmationMsg, setConfirmationMsg] = useState("");
  const [pdfReady, setPdfReady] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
      if (window.innerWidth < 1024) setSidebarOpen(false);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ⭐ Sidebar close outside + escape
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (sidebarOpen && sidebarRef.current && !sidebarRef.current.contains(e.target)) {
        setSidebarOpen(false);
      }
    };
    const handleEsc = (e) => {
      if (e.key === "Escape") setSidebarOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEsc);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEsc);
    };
  }, [sidebarOpen]);

  // ⭐ Fetch services
  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      setLoadingServices(true);
      const res = await axios.get(`${SERVICES_API}/all`);
      if (Array.isArray(res.data?.services)) {
        setServices(res.data.services);
      } else if (Array.isArray(res.data)) {
        setServices(res.data);
      }
    } catch (err) {
      console.log("Service fetch error:", err);
    } finally {
      setLoadingServices(false);
    }
  };

  // ⭐ Select service
  const selectService = (serviceKey) => {
    const svc =
      services.find((s) => s.key === serviceKey || s._id === serviceKey) ||
      services.find((s) => s._id === serviceKey);

    if (!svc) return alert("Service not found. Check backend.");

    setSelectedService(svc);
    setStep(1);
    window.scrollTo({ top: 600, behavior: "smooth" });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !dob) return alert("Please fill required fields");

    setStep(2);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // ---------- BACKEND BOOKING CREATION (robust) ----------
  const createBookingOnBackend = async (paymentStatus = "pending", paymentInfo = {}) => {
    try {
      const form = new FormData();
      form.append("serviceKey", selectedService.key || selectedService._id || "");
      form.append("serviceTitle", selectedService.title || selectedService.name || "");
      form.append("name", name);
      form.append("email", email);
      form.append("dob", dob);
      form.append("question", question || "");
      form.append("details", details || "");
      form.append("paymentStatus", paymentStatus);
      if (paymentInfo && typeof paymentInfo === "object") {
        form.append("paymentInfo", JSON.stringify(paymentInfo));
      }
      if (photoFile) form.append("photo", photoFile);

      // try primary booking api
      let bookingRes = null;
      try {
        bookingRes = await axios.post(`${BOOKING_API}/create`, form, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      } catch (err) {
        // fallback endpoints if first fails
        try {
          bookingRes = await axios.post(`${SERVICES_API}/book`, form, {
            headers: { "Content-Type": "multipart/form-data" },
          });
        } catch (err2) {
          // last fallback: send JSON payload
          const payload = {
            serviceKey: selectedService.key || selectedService._id || "",
            serviceTitle: selectedService.title || selectedService.name || "",
            name,
            email,
            dob,
            question,
            details,
            paymentStatus,
            paymentInfo,
          };
          bookingRes = await axios.post(`${SERVICES_API}/create-booking`, payload).catch(() => null);
        }
      }

      return bookingRes?.data ?? null;
    } catch (err) {
      console.error("createBookingOnBackend error:", err);
      return null;
    }
  };

  // ---------- PAYMENT FLOW (Razorpay preferred, fallback simulated) ----------
  const handlePayment = async () => {
    setProcessing(true);

    const amount =
      Number(selectedService.price || selectedService.amount || selectedService.price_inr || 0) || 499;

    try {
      const createOrderRes = await axios.post(`${PAYMENTS_API}/create-order`, { amount });
      if (createOrderRes?.data?.success && createOrderRes.data.order && createOrderRes.data.key) {
        const { order, key } = createOrderRes.data;
        const options = {
          key,
          amount: order.amount,
          currency: order.currency || "INR",
          name: "THE FIFTH CUSP",
          description: selectedService.title || selectedService.name || "Energy Reading",
          order_id: order.id || order.order_id || order._id,
          handler: async (razorResponse) => {
            try {
              const verifyRes = await axios.post(`${PAYMENTS_API}/verify`, {
                ...razorResponse,
                orderAmount: amount,
              });

              if (verifyRes?.data?.success) {
                await createBookingOnBackend("paid", verifyRes.data);
                setConfirmationMsg(
                  `✨ Thank you ${name}! Payment successful. We'll email the reading to ${email} within 24-48 hours.`
                );
                setPdfReady(!!verifyRes.data.pdfUrl);
                setStep(3);
              } else {
                await createBookingOnBackend("failed", { razor: razorResponse, verify: verifyRes?.data });
                alert("Payment verification failed. Contact support if amount was captured.");
                setConfirmationMsg("Payment processed but verification failed — contact support.");
                setStep(3);
              }
            } catch (err) {
              console.error("verify error", err);
              await createBookingOnBackend("failed", { error: err?.message });
              alert("Payment verification failed due to network error.");
              setStep(3);
            } finally {
              setProcessing(false);
            }
          },
          prefill: { name, email },
          theme: { color: "#7b2cbf" },
        };

        if (typeof window !== "undefined" && window.Razorpay) {
          const rzp = new window.Razorpay(options);
          rzp.on && rzp.on("payment.failed", function () {
            alert("Payment failed. Try again.");
            setProcessing(false);
          });
          rzp.open();
          return;
        } else {
          // Razorpay script missing — fallback to simulated success after small delay
          console.warn("Razorpay script missing. Falling back to simulated flow.");
        }
      }
    } catch (err) {
      console.warn("Payments backend unavailable:", err?.message || err);
    }

    // fallback simulated success (useful for local/dev)
    setTimeout(async () => {
      try {
        await createBookingOnBackend("paid", { simulated: true });
        setConfirmationMsg(
          `✨ Thank you ${name}! Your booking for "${selectedService.title || selectedService.name || ""}" is confirmed. We'll email the reading to ${email} within 24-48 hours.`
        );
        setPdfReady(false);
        setStep(3);
      } catch (err) {
        alert("Failed to save booking. Contact admin.");
      } finally {
        setProcessing(false);
      }
    }, 900);
  };

  // ---------- RESET ----------
  const resetAll = () => {
    setStep(0);
    setSelectedService(null);
    setQuestion("");
    setDetails("");
    setName("");
    setEmail("");
    setDob("");
    setPhotoFile(null);
    setConfirmationMsg("");
    setPdfReady(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const progressWidth = ((step - 1) / 2) * 100;

  // ---------- RENDER ----------
  return (
    <div className="energy-page cosmic-bg" style={{ minHeight: "100vh", position: "relative", color: "#fff" }}>
      {/* cosmic background (orbits + stars) */}
      <div className="vc-cosmic-stars" />
      <div className="vc-stars-container">
        {/* stars generated visually by CSS + inline elements */}
        {Array.from({ length: 36 }).map((_, i) => (
          <div
            key={i}
            className="vc-star"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${1 + Math.random() * 2}px`,
              height: `${1 + Math.random() * 2}px`,
            }}
          />
        ))}
      </div>
      <div className="vc-floating-orbs">
        <div className="vc-orb vc-orb-1" />
        <div className="vc-orb vc-orb-2" />
        <div className="vc-orb vc-orb-3" />
      </div>

      {/* Sidebar */}
      <aside
        ref={sidebarRef}
        className={`sidebar-custom ${sidebarOpen ? "open" : ""}`}
        style={{
          position: "fixed",
          top: 0,
          left: sidebarOpen ? 0 : "-300px",
          width: 300,
          height: "100vh",
          background: "linear-gradient(180deg, rgba(8,3,20,0.98), rgba(5,0,20,0.95))",
          padding: "2rem 1.5rem",
          zIndex: 1200,
          transition: "left 0.35s",
          boxShadow: "4px 0 40px rgba(123,44,191,0.25)",
        }}
      >
        <button
          onClick={() => setSidebarOpen(false)}
          style={{
            position: "absolute",
            right: 12,
            top: 12,
            width: 36,
            height: 36,
            borderRadius: 8,
            border: "none",
            background: "rgba(255,255,255,0.06)",
            color: "#fff",
            cursor: "pointer",
          }}
          aria-label="Close menu"
        >
          
        </button>

        <div style={{ textAlign: "center", marginTop: 8, marginBottom: 20 }}>
          <h3 style={{ margin: 0, fontSize: 20, fontWeight: 800, background: "linear-gradient(135deg,#fff,#c4b5fd)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            ✨THE FIFTH CUSP
          </h3>
          <div style={{ color: "#aaa", marginTop: 8 }}>Explore</div>
        </div>

        <nav>
          {navLinks.map((n, idx) => (
            <a key={idx} href={n.link} style={{ display: "block", padding: "10px 8px", color: "#ddd", textDecoration: "none", borderRadius: 8 }}>
              {n.name}
            </a>
          ))}
        </nav>
      </aside>

      {/* Hamburger */}
    {!sidebarOpen && (
  <button
    className="hamburger-btn"
    onClick={() => setSidebarOpen(true)}
    aria-label="Toggle menu"
    style={{
      position: "fixed",
      left: 18,
      top: 18,
      zIndex: 1400,
      width: 56,
      height: 56,
      borderRadius: 12,
      border: "1px solid rgba(255,255,255,0.06)",
      background: "rgba(10,6,18,0.8)",
      color: "#fff",
      fontSize: 18,
      cursor: "pointer",
    }}
  >
    ☰
  </button>
)}


      {/* Main content */}
      <main style={{ marginLeft: !isMobile && sidebarOpen ? 300 : 0, transition: "margin-left .3s" }}>
        {/* HERO */}
        <section className="hero-section" style={{ padding: "5rem 2rem 2rem" }}>
          <div className="hero-container" style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 24, alignItems: "center" }}>
            <div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 12px", borderRadius: 999, background: "rgba(123,44,191,0.08)", color: "#ffb7ff", fontWeight: 700, marginBottom: 12 }}>
                <Sparkles size={16} /> Modern Energy Readings
              </div>

              <h1 style={{ fontSize: "2.6rem", margin: "0 0 12px", lineHeight: 1.05 }}>
                Decode Your Aura. <br /> Heal Your Energy.
              </h1>

              <p style={{ color: "#c4b5fd", marginBottom: 18 }}>
                Transform your life through deep energetic analysis. We scan your aura, chakras and emotional blocks to provide remedies and clear guidance.
              </p>

              <div style={{ display: "flex", gap: 12 }}>
                <button onClick={() => window.scrollTo({ top: 900, behavior: "smooth" })} style={{ padding: "10px 16px", borderRadius: 12, border: "none", background: "linear-gradient(135deg,#ff00ff,#7b2cbf)", color: "#fff", cursor: "pointer", fontWeight: 700 }}>
                  Start Your Reading <ArrowRight size={14} />
                </button>

                <div style={{ display: "flex", alignItems: "center", gap: 8, color: "#aaa" }}>
                  <div style={{ display: "flex" }}>{[1,2,3,4,5].map((i)=> <Star key={i} size={14} color="#fbbf24" />)}</div>
                  <div style={{ fontSize: 14 }}>500+ readings delivered</div>
                </div>
              </div>
            </div>

            <div style={{ textAlign: "center" }}>
              <div style={{ borderRadius: 16, padding: 20, background: "linear-gradient(180deg, rgba(123,44,191,0.06), rgba(255,0,255,0.03))", display: "inline-block" }}>
                <img src="https://res.cloudinary.com/doerrm32l/image/upload/v1761893673/astrologo_fjndbn.png" alt="logo" style={{ width: 260, maxWidth: "100%", borderRadius: 12 }} />
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="services-section" style={{ padding: "2rem" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <div style={{ marginBottom: 20 }}>
              <h2 style={{ margin: 0 }}>Our Energy Reading Services</h2>
              <p style={{ color: "#c4b5fd" }}>Choose the reading that resonates with you</p>
            </div>

            {loadingServices ? (
              <div style={{ color: "#ddd" }}>Loading services...</div>
            ) : (
              <div className="services-grid">
  {services.map((s) => (
    <article key={s._id || s.key} className="service-card">
      
      <div>
        <div
          style={{
            display: "inline-block",
            padding: "4px 10px",
            borderRadius: 999,
            background: "rgba(255,0,255,0.15)",
            color: "#ff00ff",
            fontWeight: 700,
            fontSize: 12,
            marginBottom: 10,
          }}
        >
          {s.tag || s.label || "Service"}
        </div>

        <h3>{s.title || s.name}</h3>
        <p>{s.short || s.description}</p>
      </div>

      <div style={{ textAlign: "right" }}>
        <div className="service-price">
          ₹{s.price ?? s.amount ?? "—"}
        </div>

        <button
          className="book-btn"
          onClick={() => selectService(s.key || s._id)}
        >
          Book Now
        </button>
      </div>

    </article>
  ))}
</div>

            )}
          </div>
        </section>

        {/* BOOKING / FORM STEPS */}
        {step > 0 && selectedService && (
          <section className="form-section" style={{ padding: "2rem" }}>
            <div style={{ maxWidth: 960, margin: "0 auto", background: "rgba(255,255,255,0.02)", borderRadius: 14, padding: 20 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <h3 style={{ margin: 0 }}>Book: {selectedService.title || selectedService.name}</h3>
                <div style={{ color: "#aaa" }}>Step {step} of 3</div>
              </div>

              {/* progress */}
              <div style={{ marginTop: 12 }}>
                <div style={{ height: 6, background: "rgba(255,255,255,0.06)", borderRadius: 6, overflow: "hidden" }}>
                  <div style={{ width: `${Math.max(0, Math.min(100, progressWidth))}%`, height: "100%", background: "linear-gradient(90deg,#ff00ff,#00ffff)", transition: "width .4s" }} />
                </div>
              </div>

              {/* Step 1: form */}
              {step === 1 && (
                <form onSubmit={handleFormSubmit} style={{ marginTop: 16, display: "grid", gap: 12 }}>
                  {selectedService.key === "yesNo" && (
                    <div>
                      <label style={{ color: "#ddd", fontWeight: 600 }}>Your Question *</label>
                      <input type="text" value={question} onChange={(e) => setQuestion(e.target.value)} placeholder="E.g. Should I accept this job?" style={inputStyle} />
                    </div>
                  )}

                  <div>
                    <label style={{ color: "#ddd", fontWeight: 600 }}>Full Name *</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your full name" style={inputStyle} required />
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                    <div>
                      <label style={{ color: "#ddd", fontWeight: 600 }}>Email *</label>
                      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@email.com" style={inputStyle} required />
                    </div>
                    <div>
                      <label style={{ color: "#ddd", fontWeight: 600 }}>Date of Birth *</label>
                      <input type="date" value={dob} onChange={(e) => setDob(e.target.value)} style={inputStyle} required />
                    </div>
                  </div>

                  <div>
                    <label style={{ color: "#ddd", fontWeight: 600 }}>Upload Photo (optional)</label>
                    <input type="file" accept="image/*" onChange={(e) => setPhotoFile(e.target.files[0])} />
                    {photoFile && <div style={{ color: "#9fefbc", marginTop: 8 }}>✓ {photoFile.name}</div>}
                  </div>

                  <div>
                    <label style={{ color: "#ddd", fontWeight: 600 }}>Additional Details</label>
                    <textarea value={details} onChange={(e) => setDetails(e.target.value)} rows={4} style={{ ...inputStyle, minHeight: 80 }} placeholder="Anything else we should know..." />
                  </div>

                  <div style={{ display: "flex", gap: 12 }}>
                    <button type="submit" style={{ padding: "10px 14px", background: "linear-gradient(135deg,#ff00ff,#7b2cbf)", color: "#fff", borderRadius: 10, border: "none", cursor: "pointer" }}>
                      Continue to Payment <ArrowRight size={14} />
                    </button>
                    <button type="button" onClick={resetAll} style={{ padding: "10px 14px", background: "rgba(255,255,255,0.03)", color: "#fff", borderRadius: 10, border: "1px solid rgba(255,255,255,0.06)" }}>
                      Cancel
                    </button>
                  </div>
                </form>
              )}

              {/* Step 2: payment */}
              {step === 2 && (
                <div style={{ marginTop: 16 }}>
                  <div style={{ display: "grid", gap: 12 }}>
                    <div style={{ background: "rgba(255,255,255,0.01)", padding: 12, borderRadius: 10 }}>
                      <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <div style={{ color: "#aaa" }}>Service</div>
                        <div style={{ fontWeight: 700 }}>{selectedService.title || selectedService.name}</div>
                      </div>

                      <div style={{ display: "flex", justifyContent: "space-between", marginTop: 8 }}>
                        <div style={{ color: "#aaa" }}>Name</div>
                        <div>{name}</div>
                      </div>

                      <div style={{ display: "flex", justifyContent: "space-between", marginTop: 8 }}>
                        <div style={{ color: "#aaa" }}>Email</div>
                        <div>{email}</div>
                      </div>

                      <div style={{ display: "flex", justifyContent: "space-between", marginTop: 8 }}>
                        <div style={{ color: "#aaa" }}>Total</div>
                        <div style={{ fontWeight: 800, background: "linear-gradient(135deg,#ff00ff,#00ffff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                          ₹{selectedService.price ?? selectedService.amount ?? "—"}
                        </div>
                      </div>
                    </div>

                    <div style={{ display: "flex", gap: 12 }}>
                      <button onClick={handlePayment} disabled={processing} style={{ padding: "10px 14px", background: "linear-gradient(135deg,#ff00ff,#00ffff)", color: "#fff", borderRadius: 10, border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: 8 }}>
                        {processing ? (
                          <>
                            <Loader2 size={16} className="spin" /> Processing...
                          </>
                        ) : (
                          <>
                            Pay Securely Now <Zap size={14} />
                          </>
                        )}
                      </button>

                      <button onClick={() => setStep(1)} style={{ padding: "10px 14px", background: "rgba(255,255,255,0.03)", color: "#fff", borderRadius: 10, border: "1px solid rgba(255,255,255,0.06)" }}>
                        ← Edit Details
                      </button>
                    </div>

                    <div style={{ color: "#aaa", fontSize: 13 }}>
                      If your site has Razorpay & payments backend, secure checkout will open. Otherwise a simulated confirmation will be saved.
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: confirmation */}
              {step === 3 && (
                <div style={{ marginTop: 18, textAlign: "center" }}>
                  <div style={{ display: "inline-block", padding: 18, borderRadius: 999, background: "rgba(74,222,128,0.12)" }}>
                    <CheckCircle size={44} color="#4ade80" />
                  </div>
                  <h3 style={{ marginTop: 10 }}>Payment Successful!</h3>
                  <p style={{ color: "#c4b5fd" }}>{confirmationMsg || `Thanks ${name}. We'll email your reading to ${email} within 24-48 hours.`}</p>

                  {pdfReady && (
                    <div style={{ display: "inline-flex", alignItems: "center", gap: 8, marginTop: 8, padding: "10px 14px", borderRadius: 8, background: "rgba(74,222,128,0.08)" }}>
                      <FileText size={18} color="#4ade80" /> Your PDF report is ready
                    </div>
                  )}

                  <div style={{ marginTop: 18 }}>
                    <button onClick={resetAll} style={{ padding: "10px 14px", background: "rgba(255,255,255,0.03)", color: "#fff", borderRadius: 10, border: "1px solid rgba(255,255,255,0.06)" }}>
                      Book Another Reading
                    </button>
                  </div>
                </div>
              )}
            </div>
          </section>
        )}
      </main>

      {/* small inline styles for spin */}
      <style>{`
        .spin { animation: spin 1s linear infinite; }
        @keyframes spin { from { transform: rotate(0); } to { transform: rotate(360deg);} }

        /* cosmic helpers (if you also add the Vastu CSS) */
        .vc-cosmic-stars {
          position: fixed;
          inset: 0;
          background-image: radial-gradient(2px 2px at 20% 30%, #fff4 50%, transparent),
                            radial-gradient(2px 2px at 80% 10%, #fff5 50%, transparent),
                            radial-gradient(2px 2px at 60% 80%, #fff3 50%, transparent),
                            radial-gradient(2px 2px at 10% 60%, #fff4 50%, transparent);
          z-index: 0;
          opacity: 0.45;
          pointer-events: none;
        }
        .vc-stars-container { position: fixed; inset: 0; z-index: 1; pointer-events: none; }
        .vc-star { position: absolute; background: white; border-radius: 50%; opacity: 0.8; }
        .vc-floating-orbs .vc-orb { position: fixed; border-radius: 50%; filter: blur(60px); opacity: 0.55; z-index: 0; }
        .vc-orb-1 { width: 260px; height: 260px; background: #9333ea; top: 6%; left: 4%; }
        .vc-orb-2 { width: 320px; height: 320px; background: #3b82f6; bottom: 16%; right: 6%; }
        .vc-orb-3 { width: 200px; height: 200px; background: #ec4899; top: 46%; right: 18%; }

        /* small responsive */
        @media (max-width: 1024px) {
          .hero-container { grid-template-columns: 1fr; gap: 20px; padding: 2rem 1rem; }
        }
      `}</style>
    </div>
  );
}

// shared simple input style used in component
const inputStyle = {
  width: "100%",
  padding: "10px 12px",
  borderRadius: 10,
  border: "1px solid rgba(255,255,255,0.08)",
  background: "rgba(255,255,255,0.02)",
  color: "#fff",
  fontSize: 14,
};
