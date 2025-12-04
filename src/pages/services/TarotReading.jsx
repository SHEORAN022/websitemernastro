// import React, { useState, useEffect } from "react";
// import "../../styles/TarotReading.css";

// const tarotCards = [
//   { id: 1, name: "The Fool", meaning: "New beginnings, innocence, spontaneity", image: "🃏" },
//   { id: 2, name: "The Magician", meaning: "Manifestation, resourcefulness, power", image: "🎩" },
//   { id: 3, name: "The High Priestess", meaning: "Intuition, sacred knowledge, divine feminine", image: "🌙" },
//   { id: 4, name: "The Empress", meaning: "Femininity, beauty, nature, abundance", image: "👑" },
//   { id: 5, name: "The Emperor", meaning: "Authority, establishment, structure", image: "⚜️" },
//   { id: 6, name: "The Hierophant", meaning: "Spiritual wisdom, religious beliefs, tradition", image: "📿" },
//   { id: 7, name: "The Lovers", meaning: "Love, harmony, relationships, values alignment", image: "💕" },
//   { id: 8, name: "The Chariot", meaning: "Control, willpower, success, determination", image: "🏇" },
//   { id: 9, name: "Strength", meaning: "Strength, courage, patience, control", image: "🦁" },
//   { id: 10, name: "The Hermit", meaning: "Soul searching, introspection, inner guidance", image: "🔦" },
//   { id: 11, name: "Wheel of Fortune", meaning: "Good luck, karma, life cycles, destiny", image: "☸️" },
//   { id: 12, name: "Justice", meaning: "Justice, fairness, truth, law", image: "⚖️" },
//   { id: 13, name: "The Hanged Man", meaning: "Pause, surrender, letting go, new perspectives", image: "🙃" },
//   { id: 14, name: "Death", meaning: "Endings, change, transformation, transition", image: "🦋" },
//   { id: 15, name: "Temperance", meaning: "Balance, moderation, patience, purpose", image: "🍵" },
//   { id: 16, name: "The Devil", meaning: "Shadow self, attachment, addiction, restriction", image: "😈" },
//   { id: 17, name: "The Tower", meaning: "Sudden change, upheaval, chaos, revelation", image: "⚡" },
//   { id: 18, name: "The Star", meaning: "Hope, faith, purpose, renewal, spirituality", image: "⭐" },
//   { id: 19, name: "The Moon", meaning: "Illusion, fear, anxiety, subconscious, intuition", image: "🌕" },
//   { id: 20, name: "The Sun", meaning: "Positivity, fun, warmth, success, vitality", image: "☀️" },
//   { id: 21, name: "Judgement", meaning: "Judgement, rebirth, inner calling, absolution", image: "🎺" },
//   { id: 22, name: "The World", meaning: "Completion, accomplishment, travel, success", image: "🌍" },
// ];

// const readingTypes = [
//   {
//     id: "single",
//     name: "Single Card Reading",
//     description: "Quick insight into your current situation",
//     cards: 1,
//     icon: "🔮",
//     duration: "5 mins",
//     price: "₹299",
//   },
//   {
//     id: "three",
//     name: "Three Card Spread",
//     description: "Past, Present, Future insights",
//     cards: 3,
//     icon: "🌟",
//     duration: "15 mins",
//     price: "₹699",
//   },
//   {
//     id: "celtic",
//     name: "Celtic Cross",
//     description: "Comprehensive 10-card reading",
//     cards: 10,
//     icon: "✨",
//     duration: "45 mins",
//     price: "₹1,999",
//   },
//   {
//     id: "love",
//     name: "Love & Relationships",
//     description: "Specialized reading for matters of the heart",
//     cards: 5,
//     icon: "💖",
//     duration: "30 mins",
//     price: "₹1,299",
//   },
//   {
//     id: "career",
//     name: "Career Path Reading",
//     description: "Guidance for professional life",
//     cards: 5,
//     icon: "💼",
//     duration: "30 mins",
//     price: "₹1,299",
//   },
//   {
//     id: "year",
//     name: "Year Ahead",
//     description: "Month-by-month forecast for the year",
//     cards: 12,
//     icon: "📅",
//     duration: "60 mins",
//     price: "₹2,999",
//   },
// ];

// const navLinks = [
//   { name: "Home", link: "/", icon: "🏠" },
//   { name: "About Us", link: "/about-us", icon: "✨" },
//   { name: "Tarot Reading", link: "/tarotreading", icon: "🔮" },
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

// const TarotReading = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [selectedReading, setSelectedReading] = useState(null);
//   const [drawnCards, setDrawnCards] = useState([]);
//   const [isDrawing, setIsDrawing] = useState(false);
//   const [showReading, setShowReading] = useState(false);
//   const [step, setStep] = useState("select"); // select, draw, results, book
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     question: "",
//     birthDate: "",
//   });

//   useEffect(() => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   }, [step]);

//   const handleReadingSelect = (reading) => {
//     setSelectedReading(reading);
//     setStep("draw");
//   };

//   const drawCards = () => {
//     setIsDrawing(true);
//     setDrawnCards([]);

//     const shuffled = [...tarotCards].sort(() => Math.random() - 0.5);
//     const selected = shuffled.slice(0, selectedReading.cards);

//     selected.forEach((card, index) => {
//       setTimeout(() => {
//         setDrawnCards((prev) => [...prev, card]);
//         if (index === selected.length - 1) {
//           setTimeout(() => {
//             setIsDrawing(false);
//             setShowReading(true);
//           }, 500);
//         }
//       }, index * 600);
//     });
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleBooking = () => {
//     // Basic validation example
//     if (!formData.name || !formData.email || !formData.phone) {
//       alert("Please fill in your Name, Email and Phone.");
//       return;
//     }
//     setStep("confirmation");
//   };

//   return (
//     <div className="tarot-page">
//       {/* Background Elements */}
//       <div className="bg-orbs">
//         <div className="orb orb-1"></div>
//         <div className="orb orb-2"></div>
//         <div className="orb orb-3"></div>
//       </div>
//       <div className="stars-bg"></div>

//       {/* Sidebar */}
//       <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
//         <div className="sidebar-content">
//           <h2 className="sidebar-logo">MysticVisions</h2>
//           <nav className="sidebar-nav">
//             {navLinks.map((item, idx) => (
//               <a key={idx} href={item.link} className="nav-link" onClick={() => setSidebarOpen(false)}>
//                 <span className="nav-icon">{item.icon}</span>
//                 <span className="nav-text">{item.name}</span>
//               </a>
//             ))}
//           </nav>
//         </div>
//       </div>

//       {/* Sidebar Overlay */}
//       {sidebarOpen && <div className="sidebar-overlay" onClick={() => setSidebarOpen(false)}></div>}

//       {/* Hamburger Menu */}
//       <button className="menu-toggle" onClick={() => setSidebarOpen(!sidebarOpen)} aria-label="Toggle Sidebar">
//         <span></span>
//         <span></span>
//         <span></span>
//       </button>

//       {/* Main Content */}
//       <div className="tarot-wrapper">
//         <div className="tarot-content">
//           {/* Hero Section */}
//           <section className="hero-section">
//             <div className="hero-content">
//               <h1 className="hero-title">Tarot Card Reading</h1>
//               <p className="hero-subtitle">
//                 Unlock the mysteries of your past, present, and future through the ancient wisdom of tarot
//               </p>
//               <div className="hero-cards">
//                 <div className="floating-card">🃏</div>
//                 <div className="floating-card delay-1">🌙</div>
//                 <div className="floating-card delay-2">⭐</div>
//               </div>
//             </div>
//           </section>

//           {/* Step 1: Select Reading Type */}
//           {step === "select" && (
//             <section className="readings-section">
//               <h2 className="section-title">Choose Your Reading</h2>
//               <div className="readings-grid">
//                 {readingTypes.map((reading) => (
//                   <div
//                     key={reading.id}
//                     className="reading-card"
//                     onClick={() => handleReadingSelect(reading)}
//                   >
//                     <div className="reading-icon">{reading.icon}</div>
//                     <h3 className="reading-name">{reading.name}</h3>
//                     <p className="reading-description">{reading.description}</p>
//                     <div className="reading-details">
//                       <span className="detail-item">
//                         <span className="detail-icon">🃏</span> {reading.cards} Cards
//                       </span>
//                       <span className="detail-item">
//                         <span className="detail-icon">⏱️</span> {reading.duration}
//                       </span>
//                     </div>
//                     <div className="reading-price">{reading.price}</div>
//                     <button className="reading-btn">Select Reading</button>
//                   </div>
//                 ))}
//               </div>
//             </section>
//           )}

//           {/* Step 2: Draw Cards */}
//           {step === "draw" && selectedReading && (
//             <section className="draw-section">
//               <div className="draw-container">
//                 <h2 className="section-title">{selectedReading.name}</h2>
//                 <p className="draw-instruction">
//                   {!isDrawing && drawnCards.length === 0 && "Focus on your question and click Draw Cards"}
//                   {isDrawing && "Drawing your cards..."}
//                   {showReading && "Your cards have been drawn"}
//                 </p>

//                 {drawnCards.length === 0 && !isDrawing && (
//                   <div className="card-deck">
//                     {[...Array(22)].map((_, i) => (
//                       <div key={i} className="card-back" style={{ transform: `translateX(${i * 2}px)` }}>
//                         🂠
//                       </div>
//                     ))}
//                   </div>
//                 )}

//                 {drawnCards.length > 0 && (
//                   <div className="drawn-cards">
//                     {drawnCards.map((card) => (
//                       <div key={card.id} className="tarot-card revealed">
//                         <div className="card-image">{card.image}</div>
//                         <div className="card-name">{card.name}</div>
//                         <div className="card-meaning">{card.meaning}</div>
//                       </div>
//                     ))}
//                   </div>
//                 )}

//                 {!isDrawing && drawnCards.length === 0 && (
//                   <button className="draw-btn" onClick={drawCards}>
//                     <span className="btn-icon">✨</span>
//                     Draw Cards
//                   </button>
//                 )}

//                 {showReading && (
//                   <div className="reading-actions">
//                     <button className="action-btn primary" onClick={() => setStep("book")}>
//                       Book Full Reading Session
//                     </button>
//                     <button
//                       className="action-btn secondary"
//                       onClick={() => {
//                         setStep("select");
//                         setDrawnCards([]);
//                         setShowReading(false);
//                       }}
//                     >
//                       Try Another Reading
//                     </button>
//                   </div>
//                 )}
//               </div>
//             </section>
//           )}

//           {/* Step 3: Book Session */}
//           {step === "book" && (
//             <section className="booking-section">
//               <div className="booking-container">
//                 <h2 className="section-title">Book Your Reading Session</h2>
//                 <div className="booking-summary">
//                   <div className="summary-icon">{selectedReading.icon}</div>
//                   <div className="summary-details">
//                     <h3>{selectedReading.name}</h3>
//                     <p>{selectedReading.description}</p>
//                     <div className="summary-meta">
//                       <span>⏱️ {selectedReading.duration}</span>
//                       <span>💰 {selectedReading.price}</span>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="booking-form">
//                   <div className="form-group">
//                     <input
//                       type="text"
//                       name="name"
//                       placeholder="Full Name"
//                       value={formData.name}
//                       onChange={handleInputChange}
//                       className="form-input"
//                       required
//                     />
//                   </div>
//                   <div className="form-group">
//                     <input
//                       type="email"
//                       name="email"
//                       placeholder="Email Address"
//                       value={formData.email}
//                       onChange={handleInputChange}
//                       className="form-input"
//                       required
//                     />
//                   </div>
//                   <div className="form-group">
//                     <input
//                       type="tel"
//                       name="phone"
//                       placeholder="Phone Number"
//                       value={formData.phone}
//                       onChange={handleInputChange}
//                       className="form-input"
//                       required
//                     />
//                   </div>
//                   <div className="form-group">
//                     <input
//                       type="date"
//                       name="birthDate"
//                       placeholder="Birth Date"
//                       value={formData.birthDate}
//                       onChange={handleInputChange}
//                       className="form-input"
//                     />
//                   </div>
//                   <div className="form-group full-width">
//                     <textarea
//                       name="question"
//                       placeholder="What would you like guidance on? (Optional)"
//                       value={formData.question}
//                       onChange={handleInputChange}
//                       className="form-textarea"
//                       rows="4"
//                     />
//                   </div>
//                   <button className="submit-btn" onClick={handleBooking}>
//                     Proceed to Payment
//                   </button>
//                 </div>
//               </div>
//             </section>
//           )}

//           {/* Step 4: Confirmation */}
//           {step === "confirmation" && (
//             <section className="confirmation-section">
//               <div className="confirmation-container">
//                 <div className="confirmation-icon">✨</div>
//                 <h2 className="confirmation-title">Booking Confirmed!</h2>
//                 <p className="confirmation-text">
//                   Thank you for booking your {selectedReading.name}. Our tarot reader will contact you shortly to schedule your session.
//                 </p>
//                 <p className="confirmation-subtext">
//                   You'll receive a confirmation email at <strong>{formData.email}</strong>
//                 </p>
//                 <button
//                   className="action-btn primary"
//                   onClick={() => {
//                     setStep("select");
//                     setDrawnCards([]);
//                     setShowReading(false);
//                   }}
//                 >
//                   Book Another Reading
//                 </button>
//               </div>
//             </section>
//           )}

//           {/* Info Section */}
//           <section className="info-section">
//             <h2 className="section-title">Why Choose Tarot Reading?</h2>
//             <div className="info-grid">
//               <div className="info-card">
//                 <div className="info-icon">🔮</div>
//                 <h3>Ancient Wisdom</h3>
//                 <p>Tap into centuries-old divination practices for profound insights</p>
//               </div>
//               <div className="info-card">
//                 <div className="info-icon">💫</div>
//                 <h3>Clear Guidance</h3>
//                 <p>Receive clarity on life's most pressing questions and decisions</p>
//               </div>
//               <div className="info-card">
//                 <div className="info-icon">🌟</div>
//                 <h3>Expert Readers</h3>
//                 <p>Connect with experienced and intuitive tarot professionals</p>
//               </div>
//               <div className="info-card">
//                 <div className="info-icon">🎯</div>
//                 <h3>Personalized</h3>
//                 <p>Each reading is tailored to your unique situation and energy</p>
//               </div>
//             </div>
//           </section>

//           {/* Testimonials */}
//           <section className="testimonials-section">
//             <h2 className="section-title">What Our Clients Say</h2>
//             <div className="testimonials-grid">
//               <div className="testimonial-card">
//                 <div className="testimonial-stars">⭐⭐⭐⭐⭐</div>
//                 <p className="testimonial-text">
//                   "The Celtic Cross reading was incredibly accurate. It helped me make a major life decision with confidence."
//                 </p>
//                 <p className="testimonial-author">— Priya S.</p>
//               </div>
//               <div className="testimonial-card">
//                 <div className="testimonial-stars">⭐⭐⭐⭐⭐</div>
//                 <p className="testimonial-text">
//                   "Amazing experience! The reader was so intuitive and compassionate. Highly recommend!"
//                 </p>
//                 <p className="testimonial-author">— Rahul M.</p>
//               </div>
//               <div className="testimonial-card">
//                 <div className="testimonial-stars">⭐⭐⭐⭐⭐</div>
//                 <p className="testimonial-text">
//                   "The love reading gave me the clarity I needed. Everything resonated perfectly with my situation."
//                 </p>
//                 <p className="testimonial-author">— Ananya K.</p>
//               </div>
//             </div>
//           </section>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TarotReading;

// import React, { useState, useEffect } from "react";
// import "../../styles/TarotReading.css";

// const tarotCards = [
//   { id: 1, name: "The Fool", meaning: "New beginnings, innocence, spontaneity", image: "🃏" },
//   { id: 2, name: "The Magician", meaning: "Manifestation, resourcefulness, power", image: "🎩" },
//   { id: 3, name: "The High Priestess", meaning: "Intuition, sacred knowledge, divine feminine", image: "🌙" },
//   { id: 4, name: "The Empress", meaning: "Femininity, beauty, nature, abundance", image: "👑" },
//   { id: 5, name: "The Emperor", meaning: "Authority, establishment, structure", image: "⚜️" },
//   { id: 6, name: "The Hierophant", meaning: "Spiritual wisdom, religious beliefs, tradition", image: "📿" },
//   { id: 7, name: "The Lovers", meaning: "Love, harmony, relationships, values alignment", image: "💕" },
//   { id: 8, name: "The Chariot", meaning: "Control, willpower, success, determination", image: "🏇" },
//   { id: 9, name: "Strength", meaning: "Strength, courage, patience, control", image: "🦁" },
//   { id: 10, name: "The Hermit", meaning: "Soul searching, introspection, inner guidance", image: "🔦" },
//   { id: 11, name: "Wheel of Fortune", meaning: "Good luck, karma, life cycles, destiny", image: "☸️" },
//   { id: 12, name: "Justice", meaning: "Justice, fairness, truth, law", image: "⚖️" },
//   { id: 13, name: "The Hanged Man", meaning: "Pause, surrender, letting go, new perspectives", image: "🙃" },
//   { id: 14, name: "Death", meaning: "Endings, change, transformation, transition", image: "🦋" },
//   { id: 15, name: "Temperance", meaning: "Balance, moderation, patience, purpose", image: "🍵" },
//   { id: 16, name: "The Devil", meaning: "Shadow self, attachment, addiction, restriction", image: "😈" },
//   { id: 17, name: "The Tower", meaning: "Sudden change, upheaval, chaos, revelation", image: "⚡" },
//   { id: 18, name: "The Star", meaning: "Hope, faith, purpose, renewal, spirituality", image: "⭐" },
//   { id: 19, name: "The Moon", meaning: "Illusion, fear, anxiety, subconscious, intuition", image: "🌕" },
//   { id: 20, name: "The Sun", meaning: "Positivity, fun, warmth, success, vitality", image: "☀️" },
//   { id: 21, name: "Judgement", meaning: "Judgement, rebirth, inner calling, absolution", image: "🎺" },
//   { id: 22, name: "The World", meaning: "Completion, accomplishment, travel, success", image: "🌍" },
// ];

// // NAV WITHOUT ICONS ✔
// const navLinks = [
//   { name: "Home", link: "/" },
//   { name: "About Us", link: "/about-us" },
//   { name: "Tarot Reading", link: "/tarotreading" },
//   { name: "Energy", link: "/energy" },
//   { name: "Movement", link: "/movement" },
//   { name: "Space Vastu", link: "/space-vastu" },
//   { name: "Manifestation", link: "/manifestation" },
//   { name: "Material", link: "/material" },
//   { name: "Blogs", link: "/blogs" },
//   { name: "Careers", link: "/careers" },
//   { name: "Contact", link: "/contact" },
//   { name: "Login / Signup", link: "/auth" },
// ];

// const TarotReading = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [selectedReading, setSelectedReading] = useState(null);
//   const [drawnCards, setDrawnCards] = useState([]);
//   const [isDrawing, setIsDrawing] = useState(false);
//   const [showReading, setShowReading] = useState(false);
//   const [step, setStep] = useState("select");

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     question: "",
//     birthDate: "",
//   });

//   useEffect(() => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   }, [step]);

//   // Select reading
//   const handleReadingSelect = (reading) => {
//     setSelectedReading(reading);
//     setStep("draw");
//   };

//   // Draw cards
//   const drawCards = () => {
//     setIsDrawing(true);
//     setDrawnCards([]);

//     const shuffled = [...tarotCards].sort(() => Math.random() - 0.5);
//     const selected = shuffled.slice(0, selectedReading.cards);

//     selected.forEach((card, index) => {
//       setTimeout(() => {
//         setDrawnCards((prev) => [...prev, card]);
//         if (index === selected.length - 1) {
//           setTimeout(() => {
//             setIsDrawing(false);
//             setShowReading(true);
//           }, 500);
//         }
//       }, index * 600);
//     });
//   };

//   // Form update
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleBooking = () => {
//     if (!formData.name || !formData.email || !formData.phone) {
//       alert("Please fill in your Name, Email & Phone");
//       return;
//     }
//     setStep("confirmation");
//   };

//   return (
//     <div className="tarot-page">

//       {/* Sidebar */}
//       <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
//         <h2 className="sidebar-logo">MysticVisions</h2>

//         <nav className="sidebar-nav">
//           {navLinks.map((item, index) => (
//             <a
//               key={index}
//               href={item.link}
//               className="nav-link"
//               onClick={() => setSidebarOpen(false)}
//             >
//               {item.name}
//             </a>
//           ))}
//         </nav>
//       </div>

//       {/* Overlay – Click to Close Sidebar */}
//       {sidebarOpen && (
//         <div
//           className="overlay"
//           onClick={() => setSidebarOpen(false)}
//         ></div>
//       )}

//       {/* Menu Toggle */}
//       <button
//         className="menu-toggle"
//         onClick={() => setSidebarOpen(!sidebarOpen)}
//       >
//         <span></span><span></span><span></span>
//       </button>

//       {/* PAGE WRAPPER */}
//       <div className="tarot-wrapper">

//         {/* HERO */}
//         <section className="hero-section">
//           <div className="hero-content">
//             <h1 className="hero-title">Tarot Card Reading</h1>
//             <p className="hero-subtitle">Unlock deep guidance and clarity from the tarot</p>
//           </div>
//         </section>

//         {/* ---------- STEP 1: SELECT READING ----------- */}
//         {step === "select" && (
//           <section className="readings-section">
//             <h2 className="section-title">Choose Your Reading</h2>

//             <div className="readings-grid">
//               {[
//                 { id: "single", name: "Single Card Reading", cards: 1, price: "₹299" },
//                 { id: "three", name: "Three Card Spread", cards: 3, price: "₹699" },
//                 { id: "celtic", name: "Celtic Cross", cards: 10, price: "₹1,999" },
//                 { id: "love", name: "Love Reading", cards: 5, price: "₹1,299" },
//               ].map((r) => (
//                 <div className="reading-card" key={r.id} onClick={() => handleReadingSelect(r)}>
//                   <h3>{r.name}</h3>
//                   <p>{r.cards} Cards</p>
//                   <p className="reading-price">{r.price}</p>
//                   <button className="reading-btn">Select Reading</button>
//                 </div>
//               ))}
//             </div>
//           </section>
//         )}

//         {/* ---------- STEP 2: DRAW ----------- */}
//         {step === "draw" && selectedReading && (
//           <section className="draw-section">
//             <h2 className="section-title">{selectedReading.name}</h2>

//             <p className="draw-instruction">
//               {!isDrawing && drawnCards.length === 0 && "Click to Draw Cards"}
//               {isDrawing && "Drawing..."}
//               {showReading && "Your Cards"}
//             </p>

//             {drawnCards.length === 0 && !isDrawing && (
//               <button className="draw-btn" onClick={drawCards}>Draw Cards</button>
//             )}

//             {/* Show Cards */}
//             {drawnCards.length > 0 && (
//               <div className="drawn-cards">
//                 {drawnCards.map((card) => (
//                   <div key={card.id} className="tarot-card revealed">
//                     <div className="card-image">{card.image}</div>
//                     <div className="card-name">{card.name}</div>
//                     <div className="card-meaning">{card.meaning}</div>
//                   </div>
//                 ))}
//               </div>
//             )}

//             {showReading && (
//               <div className="reading-actions">
//                 <button className="action-btn primary" onClick={() => setStep("book")}>
//                   Book Full Reading
//                 </button>
//                 <button className="action-btn secondary" onClick={() => window.location.reload()}>
//                   Try Again
//                 </button>
//               </div>
//             )}
//           </section>
//         )}

//         {/* ---------- STEP 3: BOOK ----------- */}
//         {step === "book" && (
//           <section className="booking-section">
//             <h2 className="section-title">Book Your Session</h2>

//             <div className="booking-form">
//               <input type="text" name="name" placeholder="Name" onChange={handleInputChange} />
//               <input type="email" name="email" placeholder="Email" onChange={handleInputChange} />
//               <input type="tel" name="phone" placeholder="Phone" onChange={handleInputChange} />
//               <button className="submit-btn" onClick={handleBooking}>Confirm Booking</button>
//             </div>
//           </section>
//         )}

//         {/* ---------- STEP 4: CONFIRMATION ---------- */}
//         {step === "confirmation" && (
//           <section className="confirmation-section">
//             <h2 className="confirmation-title">Booking Confirmed!</h2>
//             <p>Our tarot expert will reach out to you shortly.</p>
//             <button className="action-btn primary" onClick={() => window.location.reload()}>
//               New Reading
//             </button>
//           </section>
//         )}

//       </div>
//     </div>
//   );
// };

// export default TarotReading;
// TarotReading.jsx

// import React, { useState, useEffect } from "react";
// import "../../styles/TarotReading.css";

// const tarotCards = [
//   { id: 1, name: "The Fool", meaning: "New beginnings, innocence, spontaneity", image: "🃏" },
//   { id: 2, name: "The Magician", meaning: "Manifestation, resourcefulness, power", image: "🎩" },
//   { id: 3, name: "The High Priestess", meaning: "Intuition, sacred knowledge, divine feminine", image: "🌙" },
//   { id: 4, name: "The Empress", meaning: "Femininity, beauty, nature, abundance", image: "👑" },
//   { id: 5, name: "The Emperor", meaning: "Authority, establishment, structure", image: "⚜️" },
//   { id: 6, name: "The Hierophant", meaning: "Spiritual wisdom, religious beliefs, tradition", image: "📿" },
//   { id: 7, name: "The Lovers", meaning: "Love, harmony, relationships, values alignment", image: "💕" },
//   { id: 8, name: "The Chariot", meaning: "Control, willpower, success, determination", image: "🏇" },
//   { id: 9, name: "Strength", meaning: "Strength, courage, patience, control", image: "🦁" },
//   { id: 10, name: "The Hermit", meaning: "Soul searching, introspection, inner guidance", image: "🔦" },
//   { id: 11, name: "Wheel of Fortune", meaning: "Good luck, karma, life cycles, destiny", image: "☸️" },
//   { id: 12, name: "Justice", meaning: "Justice, fairness, truth, law", image: "⚖️" },
//   { id: 13, name: "The Hanged Man", meaning: "Pause, surrender, letting go, new perspectives", image: "🙃" },
//   { id: 14, name: "Death", meaning: "Endings, change, transformation, transition", image: "🦋" },
//   { id: 15, name: "Temperance", meaning: "Balance, moderation, patience, purpose", image: "🍵" },
//   { id: 16, name: "The Devil", meaning: "Shadow self, attachment, addiction, restriction", image: "😈" },
//   { id: 17, name: "The Tower", meaning: "Sudden change, upheaval, chaos, revelation", image: "⚡" },
//   { id: 18, name: "The Star", meaning: "Hope, faith, purpose, renewal, spirituality", image: "⭐" },
//   { id: 19, name: "The Moon", meaning: "Illusion, fear, anxiety, subconscious, intuition", image: "🌕" },
//   { id: 20, name: "The Sun", meaning: "Positivity, fun, warmth, success, vitality", image: "☀️" },
//   { id: 21, name: "Judgement", meaning: "Judgement, rebirth, inner calling, absolution", image: "🎺" },
//   { id: 22, name: "The World", meaning: "Completion, accomplishment, travel, success", image: "🌍" },
// ];

// const navLinks = [
//   { name: "Home", link: "/" },
//   { name: "About Us", link: "/about-us" },
//   { name: "Tarot Reading", link: "/tarotreading" },
//   { name: "Energy", link: "/energy" },
//   { name: "Movement", link: "/movement" },
//   { name: "Space Vastu", link: "/space-vastu" },
//   { name: "Manifestation", link: "/manifestation" },
//   { name: "Material", link: "/material" },
//   { name: "Blogs", link: "/blogs" },
//   { name: "Careers", link: "/careers" },
//   { name: "Contact", link: "/contact" },
//   { name: "Login / Signup", link: "/auth" },
// ];

// const TarotReading = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [selectedReading, setSelectedReading] = useState(null);
//   const [drawnCards, setDrawnCards] = useState([]);
//   const [isDrawing, setIsDrawing] = useState(false);
//   const [showReading, setShowReading] = useState(false);
//   const [step, setStep] = useState("select");
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//   });

//   useEffect(() => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   }, [step]);

//   const handleReadingSelect = (reading) => {
//     setSelectedReading(reading);
//     setStep("draw");
//   };

//   const drawCards = () => {
//     setIsDrawing(true);
//     setDrawnCards([]);

//     const shuffled = [...tarotCards].sort(() => Math.random() - 0.5);
//     const selected = shuffled.slice(0, selectedReading.cards);

//     selected.forEach((card, index) => {
//       setTimeout(() => {
//         setDrawnCards((prev) => [...prev, card]);
//         if (index === selected.length - 1) {
//           setTimeout(() => {
//             setIsDrawing(false);
//             setShowReading(true);
//           }, 500);
//         }
//       }, index * 600);
//     });
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleBooking = () => {
//     if (!formData.name || !formData.email || !formData.phone) {
//       alert("Please fill in your Name, Email & Phone");
//       return;
//     }
//     setStep("confirmation");
//   };

//   return (
//     <div className="modern-tarot-page">
      
//       {/* Animated Background */}
//       <div className="bg-orbs">
//         <div className="orb orb-1"></div>
//         <div className="orb orb-2"></div>
//         <div className="orb orb-3"></div>
//       </div>

//       {/* Sidebar */}
//       <div className={`modern-sidebar ${sidebarOpen ? "open" : ""}`}>
//         <h2 className="modern-logo">MysticVisions</h2>
//         <nav className="modern-nav">
//           {navLinks.map((item, index) => (
//             <a
//               key={index}
//               href={item.link}
//               className="modern-nav-link"
//               onClick={() => setSidebarOpen(false)}
//             >
//               {item.name}
//             </a>
//           ))}
//         </nav>
//       </div>

//       {/* Overlay */}
//       {sidebarOpen && (
//         <div className="modern-overlay" onClick={() => setSidebarOpen(false)}></div>
//       )}

//       {/* Menu Toggle */}
//       <button className="modern-menu-btn" onClick={() => setSidebarOpen(!sidebarOpen)}>
//         <span></span>
//         <span></span>
//         <span></span>
//       </button>

//       {/* Main Content */}
//       <div className="modern-content">

//         {/* Hero Section */}
//         <section className="modern-hero">
//           <h1 className="modern-hero-title">Tarot Card Reading</h1>
//           <p className="modern-hero-subtitle">Unlock deep guidance and clarity from the tarot</p>
//         </section>

//         {/* Step 1: Select Reading */}
//         {step === "select" && (
//           <section className="modern-section">
//             <h2 className="modern-section-title">Choose Your Reading</h2>
//             <div className="modern-readings-grid">
//               {[
//                 { id: "single", name: "Single Card Reading", cards: 1, price: "₹299", desc: "Quick insight" },
//                 { id: "three", name: "Three Card Spread", cards: 3, price: "₹699", desc: "Past, Present, Future" },
//                 { id: "celtic", name: "Celtic Cross", cards: 10, price: "₹1,999", desc: "Deep dive analysis" },
//                 { id: "love", name: "Love Reading", cards: 5, price: "₹1,299", desc: "Relationship guidance" },
//               ].map((r) => (
//                 <div key={r.id} className="modern-reading-card" onClick={() => handleReadingSelect(r)}>
//                   <div className="card-glow"></div>
//                   <div className="card-content">
//                     <h3 className="card-title">{r.name}</h3>
//                     <p className="card-desc">{r.desc}</p>
//                     <p className="card-info">{r.cards} Cards</p>
//                     <p className="card-price">{r.price}</p>
//                     <button className="modern-select-btn">Select Reading</button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </section>
//         )}

//         {/* Step 2: Draw Cards */}
//         {step === "draw" && selectedReading && (
//           <section className="modern-section">
//             <h2 className="modern-section-title">{selectedReading.name}</h2>
//             <p className="modern-instruction">
//               {!isDrawing && drawnCards.length === 0 && "Click to reveal your cards"}
//               {isDrawing && "Drawing your destiny..."}
//               {showReading && "Your cards have spoken"}
//             </p>

//             {drawnCards.length === 0 && !isDrawing && (
//               <button className="modern-draw-btn" onClick={drawCards}>
//                 Draw Cards ✨
//               </button>
//             )}

//             {drawnCards.length > 0 && (
//               <div className="modern-cards-container">
//                 {drawnCards.map((card, idx) => (
//                   <div key={card.id} className="modern-tarot-card" style={{animationDelay: `${idx * 0.2}s`}}>
//                     <div className="tarot-card-image">{card.image}</div>
//                     <div className="tarot-card-name">{card.name}</div>
//                     <div className="tarot-card-meaning">{card.meaning}</div>
//                   </div>
//                 ))}
//               </div>
//             )}

//             {showReading && (
//               <div className="modern-actions">
//                 <button className="modern-btn modern-btn-primary" onClick={() => setStep("book")}>
//                   Book Full Reading
//                 </button>
//                 <button className="modern-btn modern-btn-secondary" onClick={() => window.location.reload()}>
//                   Try Again
//                 </button>
//               </div>
//             )}
//           </section>
//         )}

//         {/* Step 3: Booking Form */}
//         {step === "book" && (
//           <section className="modern-section modern-booking">
//             <h2 className="modern-section-title">Book Your Session</h2>
//             <div className="modern-form">
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Your Name"
//                 className="modern-input"
//                 onChange={handleInputChange}
//               />
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Your Email"
//                 className="modern-input"
//                 onChange={handleInputChange}
//               />
//               <input
//                 type="tel"
//                 name="phone"
//                 placeholder="Your Phone"
//                 className="modern-input"
//                 onChange={handleInputChange}
//               />
//               <button className="modern-submit-btn" onClick={handleBooking}>
//                 Confirm Booking
//               </button>
//             </div>
//           </section>
//         )}

//         {/* Step 4: Confirmation */}
//         {step === "confirmation" && (
//           <section className="modern-section modern-confirmation">
//             <div className="confirmation-icon">✨</div>
//             <h2 className="confirmation-title">Booking Confirmed!</h2>
//             <p className="confirmation-text">Our tarot expert will reach out to you shortly</p>
//             <button className="modern-btn modern-btn-primary" onClick={() => window.location.reload()}>
//               New Reading
//             </button>
//           </section>
//         )}

//       </div>
//     </div>
//   );
// };

// export default TarotReading;

import React, { useState, useEffect } from "react";
import "../../styles/TarotReading.css";

const tarotCards = [
  { id: 1, name: "The Fool", meaning: "New beginnings, innocence, spontaneity", image: "🃏" },
  { id: 2, name: "The Magician", meaning: "Manifestation, resourcefulness, power", image: "🎩" },
  { id: 3, name: "The High Priestess", meaning: "Intuition, sacred knowledge, divine feminine", image: "🌙" },
  { id: 4, name: "The Empress", meaning: "Femininity, beauty, nature, abundance", image: "👑" },
  { id: 5, name: "The Emperor", meaning: "Authority, establishment, structure", image: "⚜️" },
  { id: 6, name: "The Hierophant", meaning: "Spiritual wisdom, religious beliefs, tradition", image: "📿" },
  { id: 7, name: "The Lovers", meaning: "Love, harmony, relationships, values alignment", image: "💕" },
  { id: 8, name: "The Chariot", meaning: "Control, willpower, success, determination", image: "🏇" },
  { id: 9, name: "Strength", meaning: "Strength, courage, patience, control", image: "🦁" },
  { id: 10, name: "The Hermit", meaning: "Soul searching, introspection, inner guidance", image: "🔦" },
  { id: 11, name: "Wheel of Fortune", meaning: "Good luck, karma, life cycles, destiny", image: "☸️" },
  { id: 12, name: "Justice", meaning: "Justice, fairness, truth, law", image: "⚖️" },
  { id: 13, name: "The Hanged Man", meaning: "Pause, surrender, letting go, new perspectives", image: "🙃" },
  { id: 14, name: "Death", meaning: "Endings, change, transformation, transition", image: "🦋" },
  { id: 15, name: "Temperance", meaning: "Balance, moderation, patience, purpose", image: "🍵" },
  { id: 16, name: "The Devil", meaning: "Shadow self, attachment, addiction, restriction", image: "😈" },
  { id: 17, name: "The Tower", meaning: "Sudden change, upheaval, chaos, revelation", image: "⚡" },
  { id: 18, name: "The Star", meaning: "Hope, faith, purpose, renewal, spirituality", image: "⭐" },
  { id: 19, name: "The Moon", meaning: "Illusion, fear, anxiety, subconscious, intuition", image: "🌕" },
  { id: 20, name: "The Sun", meaning: "Positivity, fun, warmth, success, vitality", image: "☀️" },
  { id: 21, name: "Judgement", meaning: "Judgement, rebirth, inner calling, absolution", image: "🎺" },
  { id: 22, name: "The World", meaning: "Completion, accomplishment, travel, success", image: "🌍" },
];

const navLinks = [
  { name: "Home", link: "/" },
  { name: "About Us", link: "/about-us" },
  { name: "Tarot Reading", link: "/tarotreading" },
  { name: "Energy", link: "/energy" },
  { name: "Movement", link: "/movement" },
  { name: "Space Vastu", link: "/space-vastu" },
  { name: "Manifestation", link: "/manifestation" },
  { name: "Material", link: "/material" },
  { name: "Blogs", link: "/blogs" },
  { name: "Careers", link: "/careers" },
  { name: "Contact", link: "/contact" },
  { name: "Login / Signup", link: "/auth" },
];

const TarotReading = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedReading, setSelectedReading] = useState(null);
  const [drawnCards, setDrawnCards] = useState([]);
  const [isDrawing, setIsDrawing] = useState(false);
  const [showReading, setShowReading] = useState(false);
  const [step, setStep] = useState("select");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [step]);

  const handleReadingSelect = (reading) => {
    setSelectedReading(reading);
    setStep("draw");
  };

  const drawCards = () => {
    setIsDrawing(true);
    setDrawnCards([]);

    const shuffled = [...tarotCards].sort(() => Math.random() - 0.5);
    const selected = shuffled.slice(0, selectedReading.cards);

    selected.forEach((card, index) => {
      setTimeout(() => {
        setDrawnCards((prev) => [...prev, card]);
        if (index === selected.length - 1) {
          setTimeout(() => {
            setIsDrawing(false);
            setShowReading(true);
          }, 500);
        }
      }, index * 600);
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleBooking = () => {
    if (!formData.name || !formData.email || !formData.phone) {
      alert("Please fill in your Name, Email & Phone");
      return;
    }
    setStep("confirmation");
  };

  return (
    <div className="modern-tarot-page">

      {/* ⭐ GALAXY STARS + ORBITS BACKGROUND */}
      <div className="stars-bg">
        <span className="orbit orbit-1"></span>
        <span className="orbit orbit-2"></span>
        <span className="orbit orbit-3"></span>
      </div>

      {/* Floating Orbs */}
      <div className="bg-orbs">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
      </div>

      {/* Sidebar */}
      <div className={`modern-sidebar ${sidebarOpen ? "open" : ""}`}>
        <h2 className="modern-logo">MysticVisions</h2>
        <nav className="modern-nav">
          {navLinks.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="modern-nav-link"
              onClick={() => setSidebarOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </nav>
      </div>

      {/* Overlay */}
      {sidebarOpen && (
        <div className="modern-overlay" onClick={() => setSidebarOpen(false)}></div>
      )}

      {/* Menu Toggle */}
      <button className="modern-menu-btn" onClick={() => setSidebarOpen(!sidebarOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* MAIN CONTENT */}
      <div className="modern-content">

        {/* HERO */}
        <section className="modern-hero">
          <h1 className="modern-hero-title">Tarot Card Reading</h1>
          <p className="modern-hero-subtitle">Unlock deep guidance and clarity from the tarot</p>
        </section>

        {/* SELECT READING */}
        {step === "select" && (
          <section className="modern-section">
            <h2 className="modern-section-title">Choose Your Reading</h2>
            <div className="modern-readings-grid">
              {[
                { id: "single", name: "Single Card Reading", cards: 1, price: "₹299", desc: "Quick insight" },
                { id: "three", name: "Three Card Spread", cards: 3, price: "₹699", desc: "Past, Present, Future" },
                { id: "celtic", name: "Celtic Cross", cards: 10, price: "₹1,999", desc: "Deep dive analysis" },
                { id: "love", name: "Love Reading", cards: 5, price: "₹1,299", desc: "Relationship guidance" },
              ].map((r) => (
                <div key={r.id} className="modern-reading-card" onClick={() => handleReadingSelect(r)}>
                  <div className="card-glow"></div>
                  <div className="card-content">
                    <h3 className="card-title">{r.name}</h3>
                    <p className="card-desc">{r.desc}</p>
                    <p className="card-info">{r.cards} Cards</p>
                    <p className="card-price">{r.price}</p>
                    <button className="modern-select-btn">Select Reading</button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* DRAW CARDS */}
        {step === "draw" && selectedReading && (
          <section className="modern-section">
            <h2 className="modern-section-title">{selectedReading.name}</h2>
            <p className="modern-instruction">
              {!isDrawing && drawnCards.length === 0 && "Click to reveal your cards"}
              {isDrawing && "Drawing your destiny..."}
              {showReading && "Your cards have spoken"}
            </p>

            {drawnCards.length === 0 && !isDrawing && (
              <button className="modern-draw-btn" onClick={drawCards}>
                Draw Cards ✨
              </button>
            )}

            {drawnCards.length > 0 && (
              <div className="modern-cards-container">
                {drawnCards.map((card, idx) => (
                  <div key={card.id} className="modern-tarot-card" style={{ animationDelay: `${idx * 0.2}s` }}>
                    <div className="tarot-card-image">{card.image}</div>
                    <div className="tarot-card-name">{card.name}</div>
                    <div className="tarot-card-meaning">{card.meaning}</div>
                  </div>
                ))}
              </div>
            )}

            {showReading && (
              <div className="modern-actions">
                <button className="modern-btn modern-btn-primary" onClick={() => setStep("book")}>
                  Book Full Reading
                </button>
                <button className="modern-btn modern-btn-secondary" onClick={() => window.location.reload()}>
                  Try Again
                </button>
              </div>
            )}
          </section>
        )}

        {/* BOOKING */}
        {step === "book" && (
          <section className="modern-section modern-booking">
            <h2 className="modern-section-title">Book Your Session</h2>
            <div className="modern-form">
              <input type="text" name="name" placeholder="Your Name" className="modern-input" onChange={handleInputChange} />
              <input type="email" name="email" placeholder="Your Email" className="modern-input" onChange={handleInputChange} />
              <input type="tel" name="phone" placeholder="Your Phone" className="modern-input" onChange={handleInputChange} />
              <button className="modern-submit-btn" onClick={handleBooking}>Confirm Booking</button>
            </div>
          </section>
        )}

        {/* CONFIRMATION */}
        {step === "confirmation" && (
          <section className="modern-section modern-confirmation">
            <div className="confirmation-icon">✨</div>
            <h2 className="confirmation-title">Booking Confirmed!</h2>
            <p className="confirmation-text">Our tarot expert will reach out to you shortly</p>
            <button className="modern-btn modern-btn-primary" onClick={() => window.location.reload()}>
              New Reading
            </button>
          </section>
        )}

      </div>
    </div>
  );
};

export default TarotReading;
