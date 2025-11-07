

// import React, { useState, useEffect } from "react";
// import Confetti from "react-confetti";
// import "../../styles/Manifestation.css";

// const offerings = [
//   {
//     label: "Manifestation Blueprint",
//     description: "In-depth report on your energetic frequency with personalized manifestation methods based on astrology and numerology.",
//     fullDesc: "This in-depth report reveals your current energetic frequency and provides personalized manifestation methods based on your unique astrology and numerology. Helps you manifest with alignment, ease, and clarity.",
//     deliverable: "Paid PDF",
//   },
//   {
//     label: "Energetic Clearing & Block Removal",
//     description: "Quick session to identify and clear energetic blocks affecting manifestation.",
//     fullDesc: "Sometimes manifestations don’t come through because unseen energetic blocks are in the way. This quick session identifies your current vibration, pinpoints major blockages, and gives suggestions to clear them.",
//     deliverable: "Q&A Session",
//   },
// ];

// const faqs = [
//   {
//     question: "Can we show an Action button in front of every offering for booking the same?",
//     answer: "Yes! Each offering has a 'Book Now' button that opens the booking form.",
//   },
//   {
//     question: "Can we add the feature that the customer will receive a confirmation email?",
//     answer: "Yes. After form submission and payment, a confirmation email is sent automatically.",
//   },
//   {
//     question: "Can we make a portal to upload PDFs for each customer?",
//     answer: "Yes. Backend portal can be integrated to automatically send uploaded PDFs to customer emails.",
//   },
// ];

// const Manifestation = () => {
//   const [selectedOffering, setSelectedOffering] = useState(null);
//   const [step, setStep] = useState(1); // 1=form, 2=payment, 3=confirmation
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     phone: "",
//     notes: "",
//     file: null,
//   });
//   const [faqOpen, setFaqOpen] = useState(null);
//   const [windowSize, setWindowSize] = useState({ width: window.innerWidth, height: window.innerHeight });
//   const [showConfetti, setShowConfetti] = useState(false);

//   useEffect(() => {
//     const handleResize = () => setWindowSize({ width: window.innerWidth, height: window.innerHeight });
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     if (files) setFormData({ ...formData, [name]: files[0] });
//     else setFormData({ ...formData, [name]: value });
//   };

//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     setStep(2);
//   };

//   const handlePayment = () => {
//     setShowConfetti(true);
//     setTimeout(() => setShowConfetti(false), 5000);
//     setStep(3);
//   };

//   const handleBookNow = (offering) => {
//     setSelectedOffering(offering);
//     setStep(1);
//     setFormData({ fullName: "", email: "", phone: "", notes: "", file: null });
//   };

//   const resetBooking = () => {
//     setStep(1);
//     setSelectedOffering(null);
//   };

//   return (
//     <div className="manifestation-page">

//       {/* Alignment Section */}
//       <section className="alignment-section">
//         <h2>Alignment & Manifestation</h2>
//         <p>Energy shapes reality. Thoughts create reality. Frequencies guide outcomes. Subconscious mind drives manifestation.</p>
//         <p>Prepare yourself: clarity of desire, mindset shifting, belief building, shedding limiting beliefs.</p>
//         <p>Practices: Gratitude journaling, vision board, affirmations, switchwords, 3-6-9, 5x55.</p>
//         <p>Manifestation portals: Important dates to manifest.</p>
//       </section>

//       {/* Gallery */}
//       <section className="gallery-section">
//         <h2>Gallery</h2>
//         <div className="gallery-grid">
//           <img src="https://res.cloudinary.com/doerrm32l/image/upload/v1761981860/gallery1_cfks3s.jpg" alt="Gallery 1" />
//           <img src="https://res.cloudinary.com/doerrm32l/image/upload/v1761981861/gallery2_gcrait.jpg" alt="Gallery 2" />
//           <img src="https://res.cloudinary.com/doerrm32l/image/upload/v1761981860/gallery3_ym9nkn.jpg" alt="Gallery 3" />
//           <img src="https://res.cloudinary.com/doerrm32l/image/upload/v1761981861/gallery4_at782l.png" alt="Gallery 4" />
//         </div>
//       </section>

//       {/* Offerings */}
//       <section className="offerings-section">
//         <h2>Manifestation Offerings</h2>
//         <div className="offerings-grid">
//           {offerings.map((offering, idx) => (
//             <div key={idx} className="offering-card">
//               <h3>{offering.label}</h3>
//               <p>{offering.description}</p>
//               <p><strong>Deliverable:</strong> {offering.deliverable}</p>
//               <button className="submit-btn" onClick={() => handleBookNow(offering)}>Book Now</button>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Booking Form */}
//       {selectedOffering && step === 1 && (
//         <section className="booking-section">
//           <h2>Book: {selectedOffering.label}</h2>
//           <p>{selectedOffering.fullDesc}</p>
//           <form className="manifestation-form" onSubmit={handleFormSubmit}>
//             <input type="text" name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} required />
//             <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
//             <input type="text" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} required />
//             <textarea name="notes" placeholder="Notes / Details" value={formData.notes} onChange={handleChange}></textarea>
//             <label className="file-upload">
//               Upload File (Optional)
//               <input type="file" name="file" onChange={handleChange} />
//             </label>
//             <button type="submit" className="submit-btn">Proceed to Payment</button>
//           </form>
//         </section>
//       )}

//       {/* Payment */}
//       {selectedOffering && step === 2 && (
//         <section className="payment-section">
//           <h2>Payment</h2>
//           <p>Amount: <strong>Paid Service</strong></p>

//           <div className="payment-card">
//             <input type="text" placeholder="Cardholder Name" />
//             <input type="text" placeholder="Card Number" maxLength={16} />
//             <div className="card-details-row">
//               <input type="text" placeholder="Expiry MM/YY" maxLength={5} />
//               <input type="text" placeholder="CVV" maxLength={3} />
//             </div>
//             <button className="pay-btn" onClick={handlePayment}>Pay Now</button>
//           </div>

//           <div className="alternative-payments">
//             <p>Or pay with:</p>
//             <button className="wallet-btn">Google Pay</button>
//             <button className="wallet-btn">UPI</button>
//             <button className="wallet-btn">PhonePe</button>
//           </div>
//         </section>
//       )}

//       {/* Confirmation */}
//       {selectedOffering && step === 3 && (
//         <section className="confirmation-section">
//           {showConfetti && <Confetti width={windowSize.width} height={windowSize.height} />}
//           <h2>Payment Successful!</h2>
//           <p>Thank you! Your request for <strong>{selectedOffering.label}</strong> has been received.</p>
//           <button className="submit-btn" onClick={resetBooking}>Back to Offerings</button>
//         </section>
//       )}

//       {/* FAQs */}
//       <section className="faq-section">
//         <h2>FAQs</h2>
//         {faqs.map((faq, idx) => (
//           <div key={idx} className="faq-item">
//             <h3 onClick={() => setFaqOpen(faqOpen === idx ? null : idx)}>{faq.question}</h3>
//             {faqOpen === idx && <p>{faq.answer}</p>}
//           </div>
//         ))}
//       </section>

//     </div>
//   );
// };

// export default Manifestation;

// import React, { useState, useEffect } from "react";
// import Confetti from "react-confetti";
// import "../../styles/Manifestation.css";

// const offerings = [
//   {
//     label: "Manifestation Blueprint",
//     description:
//       "In-depth report on your energetic frequency with personalized manifestation methods based on astrology and numerology.",
//     fullDesc:
//       "This in-depth report reveals your current energetic frequency and provides personalized manifestation methods based on your unique astrology and numerology. Helps you manifest with alignment, ease, and clarity.",
//     deliverable: "Paid PDF",
//   },
//   {
//     label: "Energetic Clearing & Block Removal",
//     description:
//       "Quick session to identify and clear energetic blocks affecting manifestation.",
//     fullDesc:
//       "Sometimes manifestations don’t come through because unseen energetic blocks are in the way. This quick session identifies your current vibration, pinpoints major blockages, and gives suggestions to clear them.",
//     deliverable: "Q&A Session",
//   },
// ];

// const faqs = [
//   {
//     question:
//       "Can we show an Action button in front of every offering for booking the same?",
//     answer:
//       "Yes! Each offering has a 'Book Now' button that opens the booking form.",
//   },
//   {
//     question:
//       "Can we add the feature that the customer will receive a confirmation email?",
//     answer:
//       "Yes. After form submission and payment, a confirmation email is sent automatically.",
//   },
//   {
//     question: "Can we make a portal to upload PDFs for each customer?",
//     answer:
//       "Yes. Backend portal can be integrated to automatically send uploaded PDFs to customer emails.",
//   },
// ];

// const Manifestation = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [selectedOffering, setSelectedOffering] = useState(null);
//   const [step, setStep] = useState(1);
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     phone: "",
//     notes: "",
//     file: null,
//   });
//   const [faqOpen, setFaqOpen] = useState(null);
//   const [windowSize, setWindowSize] = useState({
//     width: window.innerWidth,
//     height: window.innerHeight,
//   });
//   const [showConfetti, setShowConfetti] = useState(false);

//   useEffect(() => {
//     const handleResize = () =>
//       setWindowSize({ width: window.innerWidth, height: window.innerHeight });
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     setFormData({ ...formData, [name]: files ? files[0] : value });
//   };

//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     setStep(2);
//   };

//   const handlePayment = () => {
//     setShowConfetti(true);
//     setTimeout(() => setShowConfetti(false), 5000);
//     setStep(3);
//   };

//   const handleBookNow = (offering) => {
//     setSelectedOffering(offering);
//     setStep(1);
//     setFormData({
//       fullName: "",
//       email: "",
//       phone: "",
//       notes: "",
//       file: null,
//     });
//   };

//   const resetBooking = () => {
//     setStep(1);
//     setSelectedOffering(null);
//   };

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

//   // Floating Stars Generator
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
//       className={`manifestation-page cosmic-bg ${
//         sidebarOpen ? "sidebar-open" : ""
//       }`}
//     >
//       {/* Floating Stars and Orbs */}
//       <div className="stars-layer">{renderStars(70)}</div>
//       <div className="orb orb1"></div>
//       <div className="orb orb2"></div>
//       <div className="orb orb3"></div>

//       {/* Sidebar */}
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

//       {/* Overlay */}
//       <div
//         className={`sidebar-overlay ${sidebarOpen ? "visible" : ""}`}
//         onClick={() => setSidebarOpen(false)}
//       ></div>

//       {/* Hamburger Button */}
//       <button
//         className={`sidebar-toggle-home ${sidebarOpen ? "active" : ""}`}
//         onClick={() => setSidebarOpen(!sidebarOpen)}
//       >
//         ☰
//       </button>

//       {/* Main Content */}
//       <div className="manifestation-content">
//         <section className="alignment-section">
//           <h2>Alignment & Manifestation</h2>
//           <p>
//             Energy shapes reality. Thoughts create reality. Frequencies guide
//             outcomes. Subconscious mind drives manifestation.
//           </p>
//           <p>
//             Prepare yourself: clarity of desire, mindset shifting, belief
//             building, shedding limiting beliefs.
//           </p>
//           <p>
//             Practices: Gratitude journaling, vision board, affirmations,
//             switchwords, 3-6-9, 5x55.
//           </p>
//           <p>Manifestation portals: Important dates to manifest.</p>
//         </section>

//         <section className="gallery-section">
//           <h2>Gallery</h2>
//           <div className="gallery-grid">
//             {[
//               "gallery1_cfks3s",
//               "gallery2_gcrait",
//               "gallery3_ym9nkn",
//               "gallery4_at782l",
//             ].map((img, i) => (
//               <img
//                 key={i}
//                 src={`https://res.cloudinary.com/doerrm32l/image/upload/v176198186${i}/${img}.jpg`}
//                 alt={`Gallery ${i + 1}`}
//               />
//             ))}
//           </div>
//         </section>

//         <section className="offerings-section">
//           <h2>Manifestation Offerings</h2>
//           <div className="offerings-grid">
//             {offerings.map((offering, idx) => (
//               <div key={idx} className="offering-card">
//                 <h3>{offering.label}</h3>
//                 <p>{offering.description}</p>
//                 <p>
//                   <strong>Deliverable:</strong> {offering.deliverable}
//                 </p>
//                 <button
//                   className="submit-btn"
//                   onClick={() => handleBookNow(offering)}
//                 >
//                   Book Now
//                 </button>
//               </div>
//             ))}
//           </div>
//         </section>

//         {selectedOffering && step === 1 && (
//           <section className="booking-section">
//             <h2>Book: {selectedOffering.label}</h2>
//             <p>{selectedOffering.fullDesc}</p>
//             <form className="manifestation-form" onSubmit={handleFormSubmit}>
//               <input
//                 type="text"
//                 name="fullName"
//                 placeholder="Full Name"
//                 value={formData.fullName}
//                 onChange={handleChange}
//                 required
//               />
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//               />
//               <input
//                 type="text"
//                 name="phone"
//                 placeholder="Phone"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 required
//               />
//               <textarea
//                 name="notes"
//                 placeholder="Notes / Details"
//                 value={formData.notes}
//                 onChange={handleChange}
//               ></textarea>
//               <label className="file-upload">
//                 Upload File (Optional)
//                 <input type="file" name="file" onChange={handleChange} />
//               </label>
//               <button type="submit" className="submit-btn">
//                 Proceed to Payment
//               </button>
//             </form>
//           </section>
//         )}

//         {selectedOffering && step === 2 && (
//           <section className="payment-section">
//             <h2>Payment</h2>
//             <p>
//               Amount: <strong>Paid Service</strong>
//             </p>

//             <div className="payment-card">
//               <input type="text" placeholder="Cardholder Name" />
//               <input type="text" placeholder="Card Number" maxLength={16} />
//               <div className="card-details-row">
//                 <input type="text" placeholder="Expiry MM/YY" maxLength={5} />
//                 <input type="text" placeholder="CVV" maxLength={3} />
//               </div>
//               <button className="pay-btn" onClick={handlePayment}>
//                 Pay Now
//               </button>
//             </div>

//             <div className="alternative-payments">
//               <p>Or pay with:</p>
//               <button className="wallet-btn">Google Pay</button>
//               <button className="wallet-btn">UPI</button>
//               <button className="wallet-btn">PhonePe</button>
//             </div>
//           </section>
//         )}

//         {selectedOffering && step === 3 && (
//           <section className="confirmation-section">
//             {showConfetti && (
//               <Confetti width={windowSize.width} height={windowSize.height} />
//             )}
//             <h2>Payment Successful!</h2>
//             <p>
//               Thank you! Your request for{" "}
//               <strong>{selectedOffering.label}</strong> has been received.
//             </p>
//             <button className="submit-btn" onClick={resetBooking}>
//               Back to Offerings
//             </button>
//           </section>
//         )}

//         <section className="faq-section">
//           <h2>FAQs</h2>
//           {faqs.map((faq, idx) => (
//             <div key={idx} className="faq-item">
//               <h3 onClick={() => setFaqOpen(faqOpen === idx ? null : idx)}>
//                 {faq.question}
//               </h3>
//               {faqOpen === idx && <p>{faq.answer}</p>}
//             </div>
//           ))}
//         </section>
//       </div>
//     </div>
//   );
// };

// export default Manifestation;

// import React, { useState, useEffect } from "react";
// import Confetti from "react-confetti";
// import { motion } from "framer-motion";
// import { Sparkles, Loader2, CheckCircle } from "lucide-react";
// import "../../styles/Manifestation.css";

// const offerings = [
//   {
//     label: "Manifestation Blueprint",
//     description:
//       "Comprehensive energetic report with personalized manifestation methods based on astrology and numerology.",
//     fullDesc:
//       "This in-depth report reveals your current energetic frequency and personalized manifestation methods based on your unique astrology and numerology.",
//     deliverable: "Paid PDF",
//   },
//   {
//     label: "Energetic Clearing & Block Removal",
//     description:
//       "Quick session to identify and clear energetic blocks affecting manifestation.",
//     fullDesc:
//       "Sometimes manifestations are blocked due to unseen energetic blockages. This session identifies those and gives clearing suggestions.",
//     deliverable: "Q&A Session",
//   },
// ];

// const faqs = [
//   {
//     question:
//       "Can we show an Action button in front of every offering for booking the same?",
//     answer: "Yes! Each offering has a 'Book Now' button that opens the booking form.",
//   },
//   {
//     question:
//       "Can we add the feature that the customer will receive a confirmation email?",
//     answer:
//       "Yes. After form submission and payment, a confirmation email is sent automatically.",
//   },
//   {
//     question: "Can we make a portal to upload PDFs for each customer?",
//     answer:
//       "Yes. Backend portal can be integrated to automatically send uploaded PDFs to customer emails.",
//   },
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

// const Manifestation = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [selectedOffering, setSelectedOffering] = useState(null);
//   const [step, setStep] = useState(1);
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     phone: "",
//     notes: "",
//     file: null,
//   });
//   const [faqOpen, setFaqOpen] = useState(null);
//   const [windowSize, setWindowSize] = useState({
//     width: window.innerWidth,
//     height: window.innerHeight,
//   });
//   const [showConfetti, setShowConfetti] = useState(false);

//   useEffect(() => {
//     const handleResize = () =>
//       setWindowSize({ width: window.innerWidth, height: window.innerHeight });
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     setFormData({ ...formData, [name]: files ? files[0] : value });
//   };

//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     setStep(2);
//   };

//   const handlePayment = () => {
//     setShowConfetti(true);
//     setTimeout(() => setShowConfetti(false), 5000);
//     setStep(3);
//   };

//   const handleBookNow = (offering) => {
//     setSelectedOffering(offering);
//     setStep(1);
//     setFormData({
//       fullName: "",
//       email: "",
//       phone: "",
//       notes: "",
//       file: null,
//     });
//   };

//   const resetBooking = () => {
//     setStep(1);
//     setSelectedOffering(null);
//   };

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
//     <div className={`manifestation-page cosmic-bg ${sidebarOpen ? "sidebar-open" : ""}`}>
//       {/* Floating Stars and Orbs */}
//       <div className="stars-layer">{renderStars(70)}</div>
//       <div className="orb orb1"></div>
//       <div className="orb orb2"></div>
//       <div className="orb orb3"></div>

//       {/* Sidebar */}
//       <div className={`sidebar-home ${sidebarOpen ? "open" : ""}`}>
//         <h2 className="sidebar-logo">✨ AstroConnect</h2>
//         <ul>
//           {navLinks.map((item, idx) => (
//             <li key={idx}>
//               <a href={item.link} onClick={() => setSidebarOpen(false)} style={{display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 15px', color: '#ccc', textDecoration: 'none', borderRadius: '8px', transition: 'all 0.3s'}}>
//                 <span style={{ fontSize: '1.3rem' }}>{item.icon}</span> {item.name}
//               </a>
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Overlay */}
//       <div className={`sidebar-overlay ${sidebarOpen ? "visible" : ""}`} onClick={() => setSidebarOpen(false)}></div>

//       {/* Hamburger Button */}
//       <button className={`sidebar-toggle-home ${sidebarOpen ? "active" : ""}`} onClick={() => setSidebarOpen(!sidebarOpen)}>
//         ☰
//       </button>

//       {/* Main Content */}
//       <div className="manifestation-content">
//         <section className="alignment-section">
//           <h2>Alignment & Manifestation</h2>
//           <p>Energy shapes reality. Thoughts create reality. Frequencies guide outcomes. Subconscious mind drives manifestation.</p>
//           <p>Prepare yourself: clarity of desire, mindset shifting, belief building, shedding limiting beliefs.</p>
//           <p>Practices: Gratitude journaling, vision board, affirmations, switchwords, 3-6-9, 5x55.</p>
//           <p>Manifestation portals: Important dates to manifest.</p>
//         </section>

//         <section className="gallery-section">
//           <h2>Gallery</h2>
//           <div className="gallery-grid">
//             {["gallery1_cfks3s", "gallery2_gcrait", "gallery3_ym9nkn", "gallery4_at782l"].map((img, i) => (
//               <img key={i} src={`https://res.cloudinary.com/doerrm32l/image/upload/v176198186${i}/${img}.jpg`} alt={`Gallery ${i + 1}`} />
//             ))}
//           </div>
//         </section>

//         <section className="offerings-section">
//           <h2>Manifestation Offerings</h2>
//           <div className="offerings-grid">
//             {offerings.map((offering, idx) => (
//               <div key={idx} className="offering-card">
//                 <h3>{offering.label}</h3>
//                 <p>{offering.description}</p>
//                 <p><strong>Deliverable:</strong> {offering.deliverable}</p>
//                 <button className="submit-btn" onClick={() => handleBookNow(offering)}>Book Now</button>
//               </div>
//             ))}
//           </div>
//         </section>

//         {selectedOffering && step === 1 && (
//           <section className="booking-section">
//             <h2>Book: {selectedOffering.label}</h2>
//             <p>{selectedOffering.fullDesc}</p>
//             <form className="manifestation-form" onSubmit={handleFormSubmit}>
//               <input type="text" name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} required />
//               <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
//               <input type="text" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} required />
//               <textarea name="notes" placeholder="Notes / Details" value={formData.notes} onChange={handleChange}></textarea>
//               <label className="file-upload">
//                 Upload File (Optional)
//                 <input type="file" name="file" onChange={handleChange} />
//               </label>
//               <button type="submit" className="submit-btn">Proceed to Payment</button>
//             </form>
//           </section>
//         )}

//         {selectedOffering && step === 2 && (
//           <section className="payment-section">
//             <h2>Payment</h2>
//             <p>Amount: <strong>Paid Service</strong></p>
//             <div className="payment-card">
//               <input type="text" placeholder="Cardholder Name" />
//               <input type="text" placeholder="Card Number" maxLength={16} />
//               <div className="card-details-row">
//                 <input type="text" placeholder="Expiry MM/YY" maxLength={5} />
//                 <input type="text" placeholder="CVV" maxLength={3} />
//               </div>
//               <button className="pay-btn" onClick={handlePayment}>Pay Now</button>
//             </div>
//             <div className="alternative-payments">
//               <p>Or pay with:</p>
//               <button className="wallet-btn">Google Pay</button>
//               <button className="wallet-btn">UPI</button>
//               <button className="wallet-btn">PhonePe</button>
//             </div>
//           </section>
//         )}

//         {selectedOffering && step === 3 && (
//           <section className="confirmation-section">
//             {showConfetti && <Confetti width={windowSize.width} height={windowSize.height} />}
//             <h2>Payment Successful!</h2>
//             <p>Thank you! Your request for <strong>{selectedOffering.label}</strong> has been received.</p>
//             <button className="submit-btn" onClick={resetBooking}>Back to Offerings</button>
//           </section>
//         )}

//         <section className="faq-section">
//           <h2>FAQs</h2>
//           {faqs.map((faq, idx) => (
//             <div key={idx} className="faq-item">
//               <h3 onClick={() => setFaqOpen(faqOpen === idx ? null : idx)}>{faq.question}</h3>
//               {faqOpen === idx && <p>{faq.answer}</p>}
//             </div>
//           ))}
//         </section>
//       </div>
//     </div>
//   );
// };

// export default Manifestation;

import React, { useState, useEffect } from "react";
import Confetti from "react-confetti";
import { motion } from "framer-motion";
import { Sparkles, Loader2, CheckCircle } from "lucide-react";
import "../../styles/Manifestation.css";

const offerings = [
  {
    label: "Manifestation Blueprint",
    description:
      "Comprehensive energetic report with personalized manifestation methods based on astrology and numerology.",
    fullDesc:
      "This in-depth report reveals your current energetic frequency and personalized manifestation methods based on your unique astrology and numerology.",
    deliverable: "Paid PDF",
  },
  {
    label: "Energetic Clearing & Block Removal",
    description:
      "Quick session to identify and clear energetic blocks affecting manifestation.",
    fullDesc:
      "Sometimes manifestations are blocked due to unseen energetic blockages. This session identifies those and gives clearing suggestions.",
    deliverable: "Q&A Session",
  },
];

const faqs = [
  {
    question:
      "Can we show an Action button in front of every offering for booking the same?",
    answer: "Yes! Each offering has a 'Book Now' button that opens the booking form.",
  },
  {
    question:
      "Can we add the feature that the customer will receive a confirmation email?",
    answer:
      "Yes. After form submission and payment, a confirmation email is sent automatically.",
  },
  {
    question: "Can we make a portal to upload PDFs for each customer?",
    answer:
      "Yes. Backend portal can be integrated to automatically send uploaded PDFs to customer emails.",
  },
];

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

const Manifestation = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedOffering, setSelectedOffering] = useState(null);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    notes: "",
    file: null,
  });
  const [faqOpen, setFaqOpen] = useState(null);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    const handleResize = () =>
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({ ...formData, [name]: files ? files[0] : value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setStep(2);
  };

  const handlePayment = () => {
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 5000);
    setStep(3);
  };

  const handleBookNow = (offering) => {
    setSelectedOffering(offering);
    setStep(1);
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      notes: "",
      file: null,
    });
  };

  const resetBooking = () => {
    setStep(1);
    setSelectedOffering(null);
  };

  const renderStars = (count) =>
    Array.from({ length: count }).map((_, i) => (
      <div
        key={i}
        className="floating-star"
        style={{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          animationDuration: `${2 + Math.random() * 4}s`,
          width: `${1 + Math.random() * 3}px`,
          height: `${1 + Math.random() * 3}px`,
        }}
      ></div>
    ));

  return (
    <div className={`manifestation-page cosmic-bg ${sidebarOpen ? "sidebar-open" : ""}`}>
      {/* Floating Stars and Orbs */}
      <div className="stars-layer">{renderStars(70)}</div>
      <div className="orb orb1"></div>
      <div className="orb orb2"></div>
      <div className="orb orb3"></div>

      {/* Sidebar */}
      <div className={`sidebar-home ${sidebarOpen ? "open" : ""}`}>
        {sidebarOpen && (
          <button className="close-btn" onClick={() => setSidebarOpen(false)}>
            ✕
          </button>
        )}
        <h2 className="sidebar-logo">✨ AstroConnect</h2>
        <ul>
          {navLinks.map((item, idx) => (
            <li key={idx}>
              <a
                href={item.link}
                onClick={() => setSidebarOpen(false)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  padding: "10px 15px",
                  color: "#ccc",
                  textDecoration: "none",
                  borderRadius: "8px",
                  transition: "all 0.3s",
                }}
              >
                <span style={{ fontSize: "1.3rem" }}>{item.icon}</span> {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Overlay */}
      <div
        className={`sidebar-overlay ${sidebarOpen ? "visible" : ""}`}
        onClick={() => setSidebarOpen(false)}
      ></div>

      {/* Hamburger Button */}
      {!sidebarOpen && (
        <button
          className="sidebar-toggle-home"
          onClick={() => setSidebarOpen(true)}
        >
          ☰
        </button>
      )}

      {/* Main Content */}
      <div className="manifestation-content">
        <section className="alignment-section">
          <h2>Alignment & Manifestation</h2>
          <p>
            Energy shapes reality. Thoughts create reality. Frequencies guide
            outcomes. Subconscious mind drives manifestation.
          </p>
          <p>
            Prepare yourself: clarity of desire, mindset shifting, belief
            building, shedding limiting beliefs.
          </p>
          <p>
            Practices: Gratitude journaling, vision board, affirmations,
            switchwords, 3-6-9, 5x55.
          </p>
          <p>Manifestation portals: Important dates to manifest.</p>
        </section>

        <section className="gallery-section">
          <h2>Gallery</h2>
          <div className="gallery-grid">
            {["gallery1_cfks3s", "gallery2_gcrait", "gallery3_ym9nkn", "gallery4_at782l"].map(
              (img, i) => (
                <img
                  key={i}
                  src={`https://res.cloudinary.com/doerrm32l/image/upload/v176198186${i}/${img}.jpg`}
                  alt={`Gallery ${i + 1}`}
                />
              )
            )}
          </div>
        </section>

        <section className="offerings-section">
          <h2>Manifestation Offerings</h2>
          <div className="offerings-grid">
            {offerings.map((offering, idx) => (
              <div key={idx} className="offering-card">
                <h3>{offering.label}</h3>
                <p>{offering.description}</p>
                <p>
                  <strong>Deliverable:</strong> {offering.deliverable}
                </p>
                <button
                  className="submit-btn"
                  onClick={() => handleBookNow(offering)}
                >
                  Book Now
                </button>
              </div>
            ))}
          </div>
        </section>

        {selectedOffering && step === 1 && (
  <section
    className="booking-section"
    style={{
      background: "rgba(255,255,255,0.1)",
      backdropFilter: "blur(20px)",
      borderRadius: "28px",
      padding: "3.5rem 2.5rem",
      maxWidth: "720px",
      margin: "3rem auto",
      boxShadow: "0 0 45px rgba(255,0,255,0.3)",
      textAlign: "center",
    }}
  >
    <h2
      style={{
        fontSize: "2.2rem",
        marginBottom: "0.5rem",
        background: "linear-gradient(90deg, #ff00ff, #00ffff)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}
    >
      ✨ Book: {selectedOffering.label}
    </h2>
    <p
      style={{
        color: "#cfcaff",
        fontSize: "1rem",
        marginBottom: "2.2rem",
        lineHeight: "1.6",
      }}
    >
      {selectedOffering.fullDesc}
    </p>

    <style>{`
      .manifestation-form {
        display: flex;
        flex-direction: column;
        gap: 1.6rem;
        width: 100%;
        max-width: 500px;
        margin: 0 auto;
      }

      .input-group {
        position: relative;
        width: 100%;
      }

      .input-group input,
      .input-group textarea {
        width: 100%;
        padding: 14px 16px 14px 50px;
        border: 1.5px solid rgba(255,255,255,0.25);
        border-radius: 14px;
        background: rgba(255,255,255,0.08);
        color: #fff;
        font-size: 1rem;
        outline: none;
        transition: all 0.3s ease;
        resize: none;
      }

      .input-group input:focus,
      .input-group textarea:focus {
        border-color: #ff00ff;
        box-shadow: 0 0 20px rgba(255,0,255,0.4);
        background: rgba(255,255,255,0.14);
      }

      .input-group label {
        position: absolute;
        left: 50px;
        top: 50%;
        transform: translateY(-50%);
        color: #bbb;
        font-size: 0.95rem;
        pointer-events: none;
        transition: all 0.3s ease;
      }

      .input-group input:focus + label,
      .input-group input:not(:placeholder-shown) + label,
      .input-group textarea:focus + label,
      .input-group textarea:not(:placeholder-shown) + label {
        top: -9px;
        left: 42px;
        font-size: 0.8rem;
        color: #ff99ff;
        background: radial-gradient(circle at top left, #1a002f, #0a0018);
        padding: 0 6px;
      }

      .input-group .icon {
        position: absolute;
        left: 16px;
        top: 50%;
        transform: translateY(-50%);
        color: #aaa;
        font-size: 20px;
        transition: all 0.3s ease;
      }

      .input-group input:focus ~ .icon,
      .input-group textarea:focus ~ .icon {
        color: #ff66ff;
        filter: drop-shadow(0 0 6px #ff00ff);
      }

      .file-upload {
        text-align: left;
        color: #ccc;
        font-size: 0.9rem;
        margin-top: 5px;
      }

      .file-upload input {
        margin-top: 6px;
        color: #fff;
        border: none;
        background: transparent;
      }

      .submit-btn {
        margin-top: 2.5rem;
        background: linear-gradient(90deg, #ff00ff, #8a2be2, #00ffff);
        border: none;
        color: #fff;
        padding: 14px 48px;
        border-radius: 40px;
        font-weight: 700;
        font-size: 1.05rem;
        cursor: pointer;
        box-shadow: 0 0 25px rgba(255,0,255,0.35);
        transition: all 0.4s ease;
      }

      .submit-btn:hover {
        box-shadow: 0 0 40px rgba(255,0,255,0.6);
        transform: scale(1.07);
      }

      .submit-btn:active {
        transform: scale(0.97);
      }
    `}</style>

    <form className="manifestation-form" onSubmit={handleFormSubmit}>
      <div className="input-group">
        <i className="icon">💫</i>
        <input
          type="text"
          name="fullName"
          placeholder=" "
          value={formData.fullName}
          onChange={handleChange}
          required
        />
        <label>Full Name</label>
      </div>

      <div className="input-group">
        <i className="icon">📧</i>
        <input
          type="email"
          name="email"
          placeholder=" "
          value={formData.email}
          onChange={handleChange}
          required
        />
        <label>Email Address</label>
      </div>

      <div className="input-group">
        <i className="icon">📞</i>
        <input
          type="text"
          name="phone"
          placeholder=" "
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <label>Phone Number</label>
      </div>

      <div className="input-group">
        <i className="icon">📝</i>
        <textarea
          name="notes"
          placeholder=" "
          value={formData.notes}
          onChange={handleChange}
          rows="3"
        ></textarea>
        <label>Notes / Details</label>
      </div>

      <div className="file-upload">
        <i style={{ marginRight: "8px" }}>📁</i>
        Upload File (Optional)
        <input type="file" name="file" onChange={handleChange} />
      </div>

      <button type="submit" className="submit-btn">
        Proceed to Payment 💫
      </button>
    </form>
  </section>
)}


        {selectedOffering && step === 2 && (
          <section className="payment-section">
            <h2>Payment</h2>
            <p>
              Amount: <strong>Paid Service</strong>
            </p>
            <div className="payment-card">
              <input type="text" placeholder="Cardholder Name" />
              <input type="text" placeholder="Card Number" maxLength={16} />
              <div className="card-details-row">
                <input type="text" placeholder="Expiry MM/YY" maxLength={5} />
                <input type="text" placeholder="CVV" maxLength={3} />
              </div>
              <button className="pay-btn" onClick={handlePayment}>
                Pay Now
              </button>
            </div>
            <div className="alternative-payments">
              <p>Or pay with:</p>
              <button className="wallet-btn">Google Pay</button>
              <button className="wallet-btn">UPI</button>
              <button className="wallet-btn">PhonePe</button>
            </div>
          </section>
        )}

        {selectedOffering && step === 3 && (
          <section className="confirmation-section">
            {showConfetti && (
              <Confetti width={windowSize.width} height={windowSize.height} />
            )}
            <h2>Payment Successful!</h2>
            <p>
              Thank you! Your request for{" "}
              <strong>{selectedOffering.label}</strong> has been received.
            </p>
            <button className="submit-btn" onClick={resetBooking}>
              Back to Offerings
            </button>
          </section>
        )}

        <section className="faq-section">
          <h2>FAQs</h2>
          {faqs.map((faq, idx) => (
            <div key={idx} className="faq-item">
              <h3 onClick={() => setFaqOpen(faqOpen === idx ? null : idx)}>
                {faq.question}
              </h3>
              {faqOpen === idx && <p>{faq.answer}</p>}
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default Manifestation;
