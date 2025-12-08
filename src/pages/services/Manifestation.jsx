// // import React, { useState, useEffect } from "react";
// // import "../../styles/Manifestation.css";

// // const offerings = [
// //   {
// //     label: "Manifestation Blueprint",
// //     description: "Comprehensive energetic report with personalized manifestation methods based on astrology and numerology.",
// //     fullDesc: "This in-depth report reveals your current energetic frequency and personalized manifestation methods based on your unique astrology and numerology.",
// //     deliverable: "Paid PDF",
// //   },
// //   {
// //     label: "Energetic Clearing & Block Removal",
// //     description: "Quick session to identify and clear energetic blocks affecting manifestation.",
// //     fullDesc: "Sometimes manifestations are blocked due to unseen energetic blockages. This session identifies those and gives clearing suggestions.",
// //     deliverable: "Q&A Session",
// //   },
// //   {
// //     label: "Guided Manifestation Sessions",
// //     description: "30-minute one-on-one sessions with meditation, intention setting, and visualization.",
// //     fullDesc: "These guided sessions bring you into a high-vibrational state through meditation, intention setting, and visualization to align with your desires.",
// //     deliverable: "30-min Call",
// //   },
// //   {
// //     label: "Customized Affirmations by Dasha",
// //     description: "Personalized affirmations aligned with your current planetary period.",
// //     fullDesc: "Your Dasha determines active energies in your life. Get deeply personalized affirmations aligned with the planet ruling your chart.",
// //     deliverable: "Paid PDF",
// //   },
// //   {
// //     label: "Personalized Scripting & Vision Crafting",
// //     description: "Manifestation scripts, vision letters, and affirmations crafted for your goals.",
// //     fullDesc: "Receive manifestation scripts and affirmations crafted uniquely for your goals, combining astrology and intention into powerful words.",
// //     deliverable: "Paid PDF + Call",
// //   },
// //   {
// //     label: "Personalized Manifestation Kit",
// //     description: "Curated guide for crystals, oils, symbols, and ritual objects suited to your chart.",
// //     fullDesc: "This guide provides suggestions for tools and ritual objects best suited to your birth chart to create your sacred manifestation space.",
// //     deliverable: "Paid PDF",
// //   },
// //   {
// //     label: "Travel Manifestation",
// //     description: "Align your energy with dream destinations and smooth relocations.",
// //     fullDesc: "Manifest travel through personalized affirmations, planetary timing, and energetic alignment techniques to activate favorable travel periods.",
// //     deliverable: "Paid PDF",
// //   },
// //   {
// //     label: "Manifestation Window Finder",
// //     description: "Astrology-based ideal dates, birth chart plan, and personalized rituals.",
// //     fullDesc: "Find your best manifestation windows using astrology + numerology with personalized rituals based on your birth nakshatra.",
// //     deliverable: "Paid PDF",
// //   },
// //   {
// //     label: "21-Day Confidence Programme",
// //     description: "Transform self-image through mirror work, rituals, and belief rewiring.",
// //     fullDesc: "A 21-day program to shift self-doubt and empower you to manifest from self-worth through identity-shifting rituals.",
// //     deliverable: "Paid PDF",
// //   },
// //   {
// //     label: "19-Step Advanced Manifestation Programme",
// //     description: "Comprehensive structured journey combining vibrational work and cosmic alignment.",
// //     fullDesc: "This program takes you through personalized manifestation combining subconscious reprogramming and action strategies tailored to your chart.",
// //     deliverable: "Paid PDF",
// //   },
// // ];

// // const wellBeingOfferings = [
// //   {
// //     label: "Well-being Guide",
// //     description: "Free comprehensive guide on well-being practices from nature, astrology, and energy.",
// //     fullDesc: "A PDF book on several well-being practices for overall wellness, drawing from nature, astrology, service, and energy work.",
// //     deliverable: "Free PDF",
// //   },
// //   {
// //     label: "Gratitude Guide",
// //     description: "Free guide on transformative power of gratitude with daily practices.",
// //     fullDesc: "Learn how gratitude shifts your energy and attracts abundance. Includes journaling prompts and rituals to elevate your vibration.",
// //     deliverable: "Free PDF",
// //   },
// //   {
// //     label: "Purpose Discovery",
// //     description: "Discover your soul's deeper purpose through your birth chart.",
// //     fullDesc: "Understand your unique path through astrological birth chart and energy blueprint for fulfillment, clarity, and inner peace.",
// //     deliverable: "Paid PDF",
// //   },
// //   {
// //     label: "Spiritual Growth & Karma Reading",
// //     description: "Decode your astrological karma and soul lessons.",
// //     fullDesc: "This reading reveals your soul lessons, spiritual potential, and evolutionary direction through planetary influences.",
// //     deliverable: "Paid PDF",
// //   },
// //   {
// //     label: "Past Karmic Debts Clearing",
// //     description: "Explore and clear hidden karmic debts from past lives.",
// //     fullDesc: "Reveals karmic blocks, relationship or health issues rooted in past karma, with rituals and remedies to clear karmic baggage.",
// //     deliverable: "Paid PDF",
// //   },
// //   {
// //     label: "Peace - Universal Guide",
// //     description: "Free guide with calming techniques and grounding rituals.",
// //     fullDesc: "Universal guide offering calming techniques, grounding rituals, affirmations, and planetary support for inner silence.",
// //     deliverable: "Free PDF",
// //   },
// //   {
// //     label: "Peace for You - Personalized",
// //     description: "Custom guide to emotional harmony based on your birth chart.",
// //     fullDesc: "Reveals which planetary placements disturb your peace with specific affirmations and rituals tailored to your chart.",
// //     deliverable: "Paid PDF",
// //   },
// // ];

// // const faqs = [
// //   {
// //     question: "Can we show an Action button in front of every offering for booking?",
// //     answer: "Yes! Each offering has a 'Book Now' button that opens the booking form with all details.",
// //   },
// //   {
// //     question: "Will customers receive a confirmation email?",
// //     answer: "Yes. After submission and payment, a confirmation email with next steps is sent automatically.",
// //   },
// //   {
// //     question: "Can we make a portal to upload PDFs for each customer?",
// //     answer: "Yes. Backend portal can be integrated where you upload PDFs that are automatically sent to customer emails.",
// //   },
// // ];

// // const navLinks = [
// //   { name: "Home", link: "/" },
// //   { name: "About Us", link: "/about-us" },
// //   { name: "Energy", link: "/energy" },
// //   { name: "Astrology", link: "/Astrology" },
// //   { name: "Vastu", link: "/vastu" },
// //   { name: "Manifestation", link: "/manifestation" },
// //   { name: "Material", link: "/material" },
// //   { name: "Blogs", link: "/blogs" },
// //   { name: "Careers", link: "/careers" },
// //   { name: "Contact", link: "/contact" },
// //   { name: "Login / Signup", link: "/auth" },
// // ];

// // const Manifestation = () => {
// //   const [sidebarOpen, setSidebarOpen] = useState(false);
// //   const [selectedOffering, setSelectedOffering] = useState(null);
// //   const [step, setStep] = useState(1);
// //   const [formData, setFormData] = useState({
// //     fullName: "",
// //     email: "",
// //     phone: "",
// //     notes: "",
// //     file: null,
// //   });

// //   const [faqOpen, setFaqOpen] = useState(null);
// //   const [showConfetti, setShowConfetti] = useState(false);

// //   const handleChange = (e) => {
// //     const { name, value, files } = e.target;
// //     setFormData({ ...formData, [name]: files ? files[0] : value });
// //   };

// //   const handleFormSubmit = (e) => {
// //     e.preventDefault();
// //     setStep(2);
// //   };

// //   const handlePayment = () => {
// //     setShowConfetti(true);
// //     setTimeout(() => setShowConfetti(false), 5000);
// //     setStep(3);
// //   };

// //   const handleBookNow = (offering) => {
// //     setSelectedOffering(offering);
// //     setStep(1);
// //     setFormData({
// //       fullName: "",
// //       email: "",
// //       phone: "",
// //       notes: "",
// //       file: null,
// //     });
// //     window.scrollTo({ top: 0, behavior: "smooth" });
// //   };

// //   const resetBooking = () => {
// //     setStep(1);
// //     setSelectedOffering(null);
// //   };

// //   const renderStars = (count) =>
// //     Array.from({ length: count }).map((_, i) => (
// //       <div
// //         key={i}
// //         style={{
// //           position: "absolute",
// //           background: "white",
// //           borderRadius: "50%",
// //           top: `${Math.random() * 100}%`,
// //           left: `${Math.random() * 100}%`,
// //           width: `${1 + Math.random() * 3}px`,
// //           height: `${1 + Math.random() * 3}px`,
// //           opacity: 0.8,
// //           animation: `starBlink ${2 + Math.random() * 4}s infinite ease-in-out`,
// //         }}
// //       ></div>
// //     ));

// //   return (
// //     <div style={{ fontFamily: "Poppins, sans-serif", color: "#fff", background: "radial-gradient(circle at top, #1e003f, #0a0018)", minHeight: "100vh", padding: "3rem 2rem", overflow: "hidden", position: "relative" }}>
// //       {/* Align CTA Button (TOP RIGHT) */}
// // <a
// //   href="/manifestation"
// //   style={{
// //     position: "fixed",
// //     top: "22px",
// //     right: "25px",
// //     background: "linear-gradient(90deg, #ff00ff, #00ffff)",
// //     color: "#fff",
// //     padding: "10px 22px",
// //     borderRadius: "30px",
// //     fontWeight: "600",
// //     fontSize: "16px",
// //     textDecoration: "none",
// //     zIndex: 1500,
// //     boxShadow: "0 0 18px rgba(255, 0, 255, 0.4)",
// //     transition: "0.3s",
// //   }}
// //   onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.08)")}
// //   onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
// // >
// //   Align
// // </a>

// //       <style>{`
// //         @keyframes starBlink {
// //           0%, 100% { opacity: 0.3; transform: scale(1); }
// //           50% { opacity: 1; transform: scale(1.4); }
// //         }
// //         @keyframes orbFloat {
// //           0%, 100% { transform: translateY(0) scale(1); }
// //           50% { transform: translateY(-40px) scale(1.1); }
// //         }
// //         @keyframes glowShift {
// //           0% { background-position: 0% 50%; }
// //           50% { background-position: 100% 50%; }
// //           100% { background-position: 0% 50%; }
// //         }
// //         @keyframes fadeUp {
// //           from { opacity: 0; transform: translateY(30px); }
// //           to { opacity: 1; transform: translateY(0); }
// //         }
// //       `}</style>

// //       {/* Floating Stars */}
// //       <div style={{ position: "absolute", inset: 0, zIndex: 0, overflow: "hidden" }}>{renderStars(70)}</div>

// //       {/* Orbs */}
// //       <div style={{ position: "absolute", width: "300px", height: "300px", borderRadius: "50%", filter: "blur(80px)", opacity: 0.3, zIndex: 0, animation: "orbFloat 15s ease-in-out infinite", background: "radial-gradient(circle, #ff00ff, transparent)", top: "10%", left: "5%" }}></div>
// //       <div style={{ position: "absolute", width: "300px", height: "300px", borderRadius: "50%", filter: "blur(80px)", opacity: 0.3, zIndex: 0, animation: "orbFloat 15s ease-in-out infinite 3s", background: "radial-gradient(circle, #00ffff, transparent)", bottom: "15%", right: "10%" }}></div>
// //       <div style={{ position: "absolute", width: "300px", height: "300px", borderRadius: "50%", filter: "blur(80px)", opacity: 0.3, zIndex: 0, animation: "orbFloat 15s ease-in-out infinite 6s", background: "radial-gradient(circle, #8a2be2, transparent)", top: "60%", left: "70%" }}></div>

// //      {/* Outside click overlay */}
// // {sidebarOpen && (
// //   <div
// //     onClick={() => setSidebarOpen(false)}
// //     style={{
// //       position: "fixed",
// //       inset: 0,
// //       background: "rgba(0,0,0,0.3)",
// //       zIndex: 900,
// //     }}
// //   ></div>
// // )}

// // {/* Sidebar */}
// // <div
// //   onClick={() => setSidebarOpen(false)}   // ⭐ Sidebar par click → close
// //   style={{
// //     position: "fixed",
// //     top: 0,
// //     left: sidebarOpen ? 0 : "-270px",
// //     width: "270px",
// //     height: "100vh",
// //     background:
// //       "linear-gradient(180deg, rgba(20,0,40,0.95), rgba(5,0,20,0.9))",
// //     backdropFilter: "blur(14px)",
// //     boxShadow: "6px 0 25px rgba(255, 0, 255, 0.25)",
// //     transition: "left 0.5s ease-in-out",
// //     zIndex: 1000,
// //     padding: "30px 20px",
// //     overflowY: "auto",
// //   }}
// // >
// //   <h2
// //     style={{
// //       fontSize: "28px",
// //       fontWeight: 700,
// //       textAlign: "center",
// //       background: "linear-gradient(90deg, #ff00ff, #00ffff)",
// //       WebkitBackgroundClip: "text",
// //       WebkitTextFillColor: "white",
// //       marginBottom: "35px",
// //     }}
// //   >
// //     AstroConnect
// //   </h2>

// //   <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
// //     {navLinks.map((item, i) => (
// //       <li key={i} style={{ margin: "14px 0" }}>
// //         <a
// //           href={item.link}
// //           onClick={() => setSidebarOpen(false)} // ⭐ Link click → close
// //           style={{
// //             color: "#ccc",
// //             display: "block",
// //             padding: "12px 18px",
// //             borderRadius: "10px",
// //             textDecoration: "none",
// //             fontSize: "1rem",
// //             fontWeight: 500,
// //             transition: "all 0.3s ease",
// //           }}
// //         >
// //           {item.name}
// //         </a>
// //       </li>
// //     ))}
// //   </ul>
// // </div>

// // {/* Hamburger Button */}
// // {!sidebarOpen && (
// //   <button
// //     onClick={() => setSidebarOpen(true)} // ⭐ Only open
// //     style={{
// //       position: "fixed",
// //       top: "22px",
// //       left: "25px",
// //       background: "linear-gradient(135deg, #ff00ff, #7b2cbf)",
// //       color: "#fff",
// //       border: "none",
// //       fontSize: "26px",
// //       borderRadius: "50%",
// //       width: "55px",
// //       height: "55px",
// //       cursor: "pointer",
// //       zIndex: 1100,
// //       boxShadow: "0 0 25px rgba(255, 0, 255, 0.4)",
// //     }}
// //   >
// //     ☰
// //   </button>
// // )}


// //       {/* MAIN CONTENT */}
// //       <div style={{ marginLeft: sidebarOpen ? "270px" : "0", transition: "margin-left 0.5s ease", position: "relative", zIndex: 5 }}>
// //         {/* Booking Section */}
// //         {selectedOffering && step === 1 && (
// //           <div style={{ background: "rgba(255,255,255,0.1)", backdropFilter: "blur(20px)", borderRadius: "28px", padding: "3.5rem 2.5rem", maxWidth: "720px", margin: "3rem auto", boxShadow: "0 0 45px rgba(255,0,255,0.3)", textAlign: "center" }}>
// //             <h2 style={{ fontSize: "2.2rem", marginBottom: "0.5rem", background: "linear-gradient(90deg, #ff00ff, #00ffff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "white" }}>Book: {selectedOffering.label}</h2>
// //             <p style={{ color: "white", fontSize: "1rem", marginBottom: "2.2rem", lineHeight: "1.6" }}>{selectedOffering.fullDesc}</p>

// //             <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", maxWidth: "600px", margin: "2rem auto", background: "rgba(255, 255, 255, 0.08)", backdropFilter: "blur(20px)", borderRadius: "20px", padding: "2.5rem", boxShadow: "0 0 30px rgba(255, 0, 255, 0.25)", animation: "fadeUp 0.7s ease" }}>
// //               <input type="text" name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} required style={{ padding: "1rem 1.2rem", borderRadius: "12px", border: "1px solid rgba(255, 255, 255, 0.25)", background: "rgba(255, 255, 255, 0.12)", color: "#fff", fontSize: "1rem" }} />
// //               <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required style={{ padding: "1rem 1.2rem", borderRadius: "12px", border: "1px solid rgba(255, 255, 255, 0.25)", background: "rgba(255, 255, 255, 0.12)", color: "#fff", fontSize: "1rem" }} />
// //               <input type="text" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required style={{ padding: "1rem 1.2rem", borderRadius: "12px", border: "1px solid rgba(255, 255, 255, 0.25)", background: "rgba(255, 255, 255, 0.12)", color: "#fff", fontSize: "1rem" }} />
// //               <textarea name="notes" placeholder="Notes / Details" rows="3" value={formData.notes} onChange={handleChange} style={{ padding: "1rem 1.2rem", borderRadius: "12px", border: "1px solid rgba(255, 255, 255, 0.25)", background: "rgba(255, 255, 255, 0.12)", color: "#fff", fontSize: "1rem" }}></textarea>
// //               <div style={{ color: "#ccc", textAlign: "left", fontSize: "0.9rem" }}>Upload File (Optional): <input type="file" name="file" onChange={handleChange} style={{ marginTop: "0.6rem" }} /></div>
// //               <button onClick={handleFormSubmit} style={{ marginTop: "1rem", padding: "0.9rem 1.6rem", borderRadius: "30px", background: "linear-gradient(90deg, #ff00ff, #8a2be2, #00ffff)", backgroundSize: "300% 100%", border: "none", color: "white", fontWeight: 600, cursor: "pointer", animation: "glowShift 6s linear infinite", boxShadow: "0 0 18px rgba(255, 0, 255, 0.3)" }}>Proceed to Payment</button>
// //             </div>
// //           </div>
// //         )}

// //         {/* Payment Section */}
// //         {selectedOffering && step === 2 && (
// //           <div style={{ textAlign: "center", margin: "4rem 0", position: "relative", zIndex: 5 }}>
// //             <h2 style={{ fontSize: "2.4rem", fontWeight: 700, background: "linear-gradient(90deg, #ff00ff, #00ffff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "white", marginBottom: "1.5rem" }}>Payment</h2>
// //             <p style={{ color: "#ddd", fontSize: "1rem", marginBottom: "2rem" }}>Amount: <strong>Paid Service</strong></p>

// //             <div style={{ background: "rgba(255, 255, 255, 0.08)", backdropFilter: "blur(20px)", padding: "2rem", borderRadius: "22px", boxShadow: "0 0 30px rgba(255, 0, 255, 0.25)", maxWidth: "420px", margin: "2rem auto", display: "flex", flexDirection: "column", gap: "1.25rem" }}>
// //               <input type="text" placeholder="Cardholder Name" style={{ padding: "0.9rem 1.1rem", borderRadius: "12px", border: "1px solid rgba(255, 255, 255, 0.25)", background: "rgba(255, 255, 255, 0.12)", color: "#fff" }} />
// //               <input type="text" placeholder="Card Number" maxLength={16} style={{ padding: "0.9rem 1.1rem", borderRadius: "12px", border: "1px solid rgba(255, 255, 255, 0.25)", background: "rgba(255, 255, 255, 0.12)", color: "#fff" }} />
// //               <div style={{ display: "flex", gap: "1rem" }}>
// //                 <input type="text" placeholder="Expiry MM/YY" maxLength={5} style={{ flex: "1 1 48%", padding: "0.9rem 1.1rem", borderRadius: "12px", border: "1px solid rgba(255, 255, 255, 0.25)", background: "rgba(255, 255, 255, 0.12)", color: "#fff" }} />
// //                 <input type="text" placeholder="CVV" maxLength={3} style={{ flex: "1 1 48%", padding: "0.9rem 1.1rem", borderRadius: "12px", border: "1px solid rgba(255, 255, 255, 0.25)", background: "rgba(255, 255, 255, 0.12)", color: "#fff" }} />
// //               </div>
// //               <button onClick={handlePayment} style={{ background: "linear-gradient(90deg, #ff00ff, #8a2be2, #00ffff)", border: "none", color: "#fff", padding: "0.9rem 1.5rem", borderRadius: "35px", fontWeight: 600, cursor: "pointer", animation: "glowShift 5s linear infinite", boxShadow: "0 0 15px rgba(255, 0, 255, 0.4)" }}>Pay Now</button>
// //             </div>

// //             <div style={{ textAlign: "center", marginTop: "1rem" }}>
// //               <p style={{ color: "#ddd" }}>Or pay with:</p>
// //               <button style={{ margin: "0.4rem", padding: "0.6rem 1.3rem", borderRadius: "30px", border: "1px solid rgba(255, 255, 255, 0.3)", background: "rgba(255, 255, 255, 0.08)", color: "#fff", cursor: "pointer" }}>Google Pay</button>
// //               <button style={{ margin: "0.4rem", padding: "0.6rem 1.3rem", borderRadius: "30px", border: "1px solid rgba(255, 255, 255, 0.3)", background: "rgba(255, 255, 255, 0.08)", color: "#fff", cursor: "pointer" }}>UPI</button>
// //               <button style={{ margin: "0.4rem", padding: "0.6rem 1.3rem", borderRadius: "30px", border: "1px solid rgba(255, 255, 255, 0.3)", background: "rgba(255, 255, 255, 0.08)", color: "#fff", cursor: "pointer" }}>PhonePe</button>
// //             </div>
// //           </div>
// //         )}

// //         {/* Success Section */}
// //         {selectedOffering && step === 3 && (
// //           <div style={{ textAlign: "center", margin: "4rem 0", position: "relative", zIndex: 5 }}>
// //             {showConfetti && <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", pointerEvents: "none", zIndex: 9999 }}>🎉</div>}
// //             <h2 style={{ background: "linear-gradient(90deg, #00ffff, #ff00ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", fontSize: "2rem" }}>Payment Successful!</h2>
// //             <p style={{ color: "#ccc", marginTop: "1rem", fontSize: "1.1rem" }}>Thank you! Your request for <strong>{selectedOffering.label}</strong> has been received.</p>
// //             <button onClick={resetBooking} style={{ marginTop: "2rem", padding: "0.9rem 1.6rem", borderRadius: "30px", background: "linear-gradient(90deg, #ff00ff, #8a2be2, #00ffff)", border: "none", color: "white", fontWeight: 600, cursor: "pointer", boxShadow: "0 0 18px rgba(255, 0, 255, 0.3)" }}>Back to Offerings</button>
// //           </div>
// //         )}

// //         {/* Main Content */}
// //         {!selectedOffering && (
// //           <>
// //             {/* Alignment Section */}
// //             <div style={{ margin: "4rem 0", textAlign: "center", position: "relative", zIndex: 5 }}>
// //               <h2 style={{ fontSize: "2.4rem", fontWeight: 700, background: "linear-gradient(90deg, #ff00ff, #00ffff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "white", marginBottom: "1.5rem" }}>Alignment & Manifestation</h2>
// //               <div style={{ color: "#ddd", fontSize: "1rem", lineHeight: "1.6", maxWidth: "800px", margin: "0 auto" }}>
// //                 <p><strong>Energy shapes reality.</strong> Thoughts create reality. Frequencies guide outcomes. The subconscious mind drives manifestation.</p>
// //                 <p><strong>Prepare yourself:</strong> Clarity of desire, mindset shifting, belief building, shedding limiting beliefs and reconditioning.</p>
// //                 <p><strong>Practices:</strong> Gratitude journaling, vision board, affirmations, spoken words, switchwords, 3-6-9 method, 5x55 method.</p>
// //                 <p><strong>Manifestation portals:</strong> Important dates to manifest with amplified energy.</p>
// //               </div>
// //             </div>

// //            {/* Gallery Section */}
// // <div style={{ margin: "4rem 0", textAlign: "center", position: "relative", zIndex: 5 }}>
// //   <h2
// //     style={{
// //       fontSize: "2.4rem",
// //       fontWeight: 700,
// //       background: "linear-gradient(90deg, #ff00ff, #00ffff)",
// //       WebkitBackgroundClip: "text",
// //       WebkitTextFillColor: "white",
// //       marginBottom: "1.5rem",
// //     }}
// //   >
// //     Visual Journey
// //   </h2>

// //   <div
// //     style={{
// //       display: "grid",
// //       gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
// //       gap: "1.5rem",
// //       marginTop: "2rem",
// //     }}
// //   >
// //     {[
// //       "v1731850200/gallery1_cfks3s.jpg",
// //       "v1731850201/gallery2_gcrait.jpg",
// //       "v1731850202/gallery3_ym9nkn.jpg",
// //       "v1731850203/gallery4_at782l.jpg",
// //     ].map((img, i) => (
// //       <img
// //         key={i}
// //         src={`https://res.cloudinary.com/doerrm32l/image/upload/${img}`}
// //         alt={`Gallery ${i + 1}`}
// //         style={{
// //           width: "100%",
// //           height: "240px",
// //           objectFit: "cover",
// //           borderRadius: "20px",
// //           boxShadow: "0 0 25px rgba(255, 0, 255, 0.25)",
// //           transition: "0.3s",
// //         }}
// //         onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
// //         onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
// //       />
// //     ))}
// //   </div>
// // </div>

// //             {/* Offerings Section */}
// //             <div style={{ margin: "4rem 0", textAlign: "center", position: "relative", zIndex: 5 }}>
// //               <h2 style={{ fontSize: "2.4rem", fontWeight: 700, background: "linear-gradient(90deg, #ff00ff, #00ffff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "white", marginBottom: "1.5rem" }}>Manifestation Offerings</h2>
// //               <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "2rem", position: "relative", zIndex: 5 }}>
// //                 {offerings.map((offering, idx) => (
// //                   <div key={idx} style={{ background: "rgba(255, 255, 255, 0.08)", backdropFilter: "blur(14px)", border: "1px solid rgba(255, 255, 255, 0.2)", borderRadius: "20px", padding: "2rem 1.5rem", boxShadow: "0 0 25px rgba(255, 0, 255, 0.15)", textAlign: "left", transition: "transform 0.3s ease" }}>
// //                     <h3 style={{ background: "linear-gradient(90deg, #ff00ff, #00ffff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "white", fontSize: "1.3rem", marginBottom: "0.8rem" }}>{offering.label}</h3>
// //                     <p style={{ color: "white", fontSize: "0.95rem", lineHeight: "1.5" }}>{offering.description}</p>
// //                     <p style={{ color: "white", fontSize: "0.95rem" }}><strong>Deliverable:</strong> {offering.deliverable}</p>
// //                     <div style={{ display: "flex", gap: "10px", marginTop: "1rem" }}>
// //                       <button onClick={() => alert(offering.fullDesc)} style={{ padding: "0.7rem 1.2rem", borderRadius: "30px", background: "linear-gradient(90deg, #8a2be2, #ff00ff)", border: "none", color: "white", fontWeight: 600, cursor: "pointer", fontSize: "0.85rem" }}>Know More</button>
// //                       <button onClick={() => handleBookNow(offering)} style={{ padding: "0.7rem 1.2rem", borderRadius: "30px", background: "linear-gradient(90deg, #ff00ff, #00ffff)", border: "none", color: "white", fontWeight: 600, cursor: "pointer", fontSize: "0.85rem" }}>Book Now</button>
// //                     </div>
// //                   </div>
// //                 ))}
// //               </div>
// //             </div>

// //             {/* FAQ Section */}
// //             <div style={{ margin: "4rem 0", textAlign: "center", position: "relative", zIndex: 5 }}>
// //               <h2 style={{ fontSize: "2.4rem", fontWeight: 700, background: "linear-gradient(90deg, #ff00ff, #00ffff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "white", marginBottom: "1.5rem" }}>FAQs</h2>
// //               {faqs.map((faq, idx) => (
// //                 <div key={idx} style={{ marginBottom: "1rem" }}>
// //                   <h3 onClick={() => setFaqOpen(faqOpen === idx ? null : idx)} style={{ cursor: "pointer", background: "rgba(255, 255, 255, 0.1)", padding: "1rem 1.25rem", borderRadius: "16px", boxShadow: "0 6px 20px rgba(0, 0, 0, 0.2)", transition: "background 0.2s, transform 0.2s" }}>
// //                     {faq.question}
// //                   </h3>
// //                   {faqOpen === idx && (
// //                     <p style={{ padding: "0.75rem 1.25rem", background: "rgba(255, 255, 255, 0.08)", borderRadius: "12px", marginTop: "0.5rem", animation: "fadeUp 0.4s ease forwards" }}>
// //                       {faq.answer}
// //                     </p>
// //                   )}
// //                 </div>
// //               ))}
// //             </div>
// //           </>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default Manifestation;
// import React, { useState, useEffect } from "react";
// import "../../styles/Manifestation.css";
// import axios from "axios";

// const API_URL = "https://adminastrotalk-1.onrender.com/api/manifestation";

// const faqs = [
//   {
//     question: "Can we show an Action button in front of every offering for booking?",
//     answer: "Yes! Each offering has a 'Book Now' button that opens the booking form with all details.",
//   },
//   {
//     question: "Will customers receive a confirmation email?",
//     answer: "Yes. After submission and payment, a confirmation email with next steps is sent automatically.",
//   },
//   {
//     question: "Can we make a portal to upload PDFs for each customer?",
//     answer: "Yes. Backend portal can be integrated where you upload PDFs that are automatically sent to customer emails.",
//   },
// ];

// const navLinks = [
//   { name: "Home", link: "/" },
//   { name: "About Us", link: "/about-us" },
//   { name: "Energy", link: "/energy" },
//   { name: "Astrology", link: "/Astrology" },
//   { name: "Vastu", link: "/vastu" },
//   { name: "Manifestation", link: "/manifestation" },
//   { name: "Material", link: "/material" },
//   { name: "Blogs", link: "/blogs" },
//   { name: "Careers", link: "/careers" },
//   { name: "Contact", link: "/contact" },
//   { name: "Login / Signup", link: "/auth" },
// ];

// const Manifestation = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [manifestationList, setManifestationList] = useState([]);
//   const [wellbeingList, setWellbeingList] = useState([]);
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
//   const [showConfetti, setShowConfetti] = useState(false);

//   const fetchOfferings = async () => {
//     try {
//       const res = await axios.get(`${API_URL}/all`);
//       if (res.data.status) {
//         setManifestationList(res.data.manifestation || []);
//         setWellbeingList(res.data.wellbeing || []);
//       }
//     } catch (err) {
//       console.log("Error fetching offerings:", err);
//     }
//   };

//   useEffect(() => {
//     fetchOfferings();
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
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   const resetBooking = () => {
//     setStep(1);
//     setSelectedOffering(null);
//   };

//   const renderStars = (count) =>
//     Array.from({ length: count }).map((_, i) => (
//       <div
//         key={i}
//         style={{
//           position: "absolute",
//           background: "white",
//           borderRadius: "50%",
//           top: `${Math.random() * 100}%`,
//           left: `${Math.random() * 100}%`,
//           width: `${1 + Math.random() * 3}px`,
//           height: `${1 + Math.random() * 3}px`,
//           opacity: 0.8,
//           animation: `starBlink ${2 + Math.random() * 4}s infinite ease-in-out`,
//         }}
//       ></div>
//     ));

//   return (
//     <div
//       style={{
//         fontFamily: "Poppins, sans-serif",
//         color: "#fff",
//         background: "radial-gradient(circle at top, #1e003f, #0a0018)",
//         minHeight: "100vh",
//         padding: "3rem 2rem",
//         overflow: "hidden",
//         position: "relative",
//       }}
//     >
//       <a
//         href="/manifestation"
//         style={{
//           position: "fixed",
//           top: "22px",
//           right: "25px",
//           background: "linear-gradient(90deg, #ff00ff, #00ffff)",
//           color: "#fff",
//           padding: "10px 22px",
//           borderRadius: "30px",
//           fontWeight: "600",
//           fontSize: "16px",
//           textDecoration: "none",
//           zIndex: 1500,
//           boxShadow: "0 0 18px rgba(255, 0, 255, 0.4)",
//           transition: "0.3s",
//         }}
//         onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.08)")}
//         onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
//       >
//         Align
//       </a>

//       <style>{`
//         @keyframes starBlink {
//           0%, 100% { opacity: 0.3; transform: scale(1); }
//           50% { opacity: 1; transform: scale(1.4); }
//         }
//         @keyframes orbFloat {
//           0%, 100% { transform: translateY(0) scale(1); }
//           50% { transform: translateY(-40px) scale(1.1); }
//         }
//         @keyframes glowShift {
//           0% { background-position: 0% 50%; }
//           50% { background-position: 100% 50%; }
//           100% { background-position: 0% 50%; }
//         }
//         @keyframes fadeUp {
//           from { opacity: 0; transform: translateY(25px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//       `}</style>

//       <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>{renderStars(70)}</div>

//       <div style={{
//         position: "absolute",
//         width: "300px",
//         height: "300px",
//         borderRadius: "50%",
//         filter: "blur(80px)",
//         opacity: 0.3,
//         zIndex: 0,
//         animation: "orbFloat 15s ease-in-out infinite",
//         background: "radial-gradient(circle, #ff00ff, transparent)",
//         top: "10%",
//         left: "5%"
//       }}></div>

//       <div style={{
//         position: "absolute",
//         width: "300px",
//         height: "300px",
//         borderRadius: "50%",
//         filter: "blur(80px)",
//         opacity: 0.3,
//         zIndex: 0,
//         animation: "orbFloat 15s ease-in-out infinite 3s",
//         background: "radial-gradient(circle, #00ffff, transparent)",
//         bottom: "15%",
//         right: "10%"
//       }}></div>

//       <div style={{
//         position: "absolute",
//         width: "300px",
//         height: "300px",
//         borderRadius: "50%",
//         filter: "blur(80px)",
//         opacity: 0.3,
//         zIndex: 0,
//         animation: "orbFloat 15s ease-in-out infinite 6s",
//         background: "radial-gradient(circle, #8a2be2, transparent)",
//         top: "60%",
//         left: "70%"
//       }}></div>

//       {sidebarOpen && (
//         <div
//           onClick={() => setSidebarOpen(false)}
//           style={{
//             position: "fixed",
//             inset: 0,
//             background: "rgba(0,0,0,0.4)",
//             zIndex: 900,
//           }}
//         ></div>
//       )}

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
//           transition: "left 0.5s ease-in-out",
//           zIndex: 1000,
//           padding: "30px 20px",
//           overflowY: "auto",
//         }}
//       >
//         <h2
//           style={{
//             fontSize: "28px",
//             fontWeight: 700,
//             textAlign: "center",
//             background: "linear-gradient(90deg, #ff00ff, #00ffff)",
//             WebkitBackgroundClip: "text",
//             WebkitTextFillColor: "white",
//             marginBottom: "35px",
//           }}
//         >
//           AstroConnect
//         </h2>

//         <ul style={{ listStyle: "none", padding: 0 }}>
//           {navLinks.map((item, i) => (
//             <li key={i} style={{ margin: "14px 0" }}>
//               <a
//                 href={item.link}
//                 onClick={() => setSidebarOpen(false)}
//                 style={{
//                   color: "#ccc",
//                   display: "block",
//                   padding: "12px 18px",
//                   borderRadius: "10px",
//                   textDecoration: "none",
//                   fontSize: "1rem",
//                   fontWeight: 500,
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
//           }}
//         >
//           ☰
//         </button>
//       )}

//       <div
//         style={{
//           marginLeft: sidebarOpen ? "270px" : "0",
//           transition: "margin-left 0.5s ease",
//           position: "relative",
//           zIndex: 5,
//         }}
//       >
//         {selectedOffering && step === 1 && (
//           <div style={{
//             background: "rgba(255,255,255,0.1)",
//             backdropFilter: "blur(20px)",
//             borderRadius: "28px",
//             padding: "3.5rem 2.5rem",
//             maxWidth: "720px",
//             margin: "3rem auto",
//             textAlign: "center",
//           }}>
//             <h2 style={{
//               fontSize: "2.2rem",
//               background: "linear-gradient(90deg, #ff00ff, #00ffff)",
//               WebkitBackgroundClip: "text",
//               WebkitTextFillColor: "white",
//             }}>
//               Book: {selectedOffering.label}
//             </h2>

//             <p style={{ color: "white", marginTop: "1rem" }}>
//               {selectedOffering.fullDesc}
//             </p>

//             <div style={{
//               marginTop: "2rem",
//               padding: "2.5rem",
//               background: "rgba(255, 255, 255, 0.08)",
//               borderRadius: "20px",
//             }}>
//               <input
//                 type="text"
//                 name="fullName"
//                 placeholder="Full Name"
//                 value={formData.fullName}
//                 onChange={handleChange}
//                 style={inputStyle}
//               />
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Email Address"
//                 value={formData.email}
//                 onChange={handleChange}
//                 style={inputStyle}
//               />
//               <input
//                 type="text"
//                 name="phone"
//                 placeholder="Phone Number"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 style={inputStyle}
//               />
//               <textarea
//                 name="notes"
//                 placeholder="Notes / Details"
//                 rows="3"
//                 value={formData.notes}
//                 onChange={handleChange}
//                 style={{ ...inputStyle, height: "90px" }}
//               ></textarea>

//               <button
//                 onClick={handleFormSubmit}
//                 style={{
//                   marginTop: "1.2rem",
//                   padding: "0.9rem 1.6rem",
//                   borderRadius: "30px",
//                   background: "linear-gradient(90deg, #ff00ff, #8a2be2, #00ffff)",
//                   border: "none",
//                   color: "white",
//                   fontWeight: 600,
//                 }}
//               >
//                 Proceed to Payment
//               </button>
//             </div>
//           </div>
//         )}

//         {selectedOffering && step === 2 && (
//           <div style={{ textAlign: "center", marginTop: "4rem" }}>
//             <h2 style={{
//               fontSize: "2.4rem",
//               background: "linear-gradient(90deg, #ff00ff, #00ffff)",
//               WebkitBackgroundClip: "text",
//               WebkitTextFillColor: "white",
//             }}>
//               Payment
//             </h2>

//             <button
//               onClick={handlePayment}
//               style={{
//                 marginTop: "2rem",
//                 padding: "0.8rem 1.8rem",
//                 borderRadius: "30px",
//                 background: "linear-gradient(90deg, #ff00ff, #00ffff)",
//                 border: "none",
//                 color: "white",
//                 fontWeight: 600,
//               }}
//             >
//               Pay Now
//             </button>
//           </div>
//         )}

//         {selectedOffering && step === 3 && (
//           <div style={{ textAlign: "center", marginTop: "4rem" }}>
//             <h2 style={{
//               background: "linear-gradient(90deg, #00ffff, #ff00ff)",
//               WebkitBackgroundClip: "text",
//               WebkitTextFillColor: "transparent",
//               fontSize: "2rem",
//             }}>
//               Payment Successful!
//             </h2>

//             <button
//               onClick={resetBooking}
//               style={{
//                 marginTop: "2rem",
//                 padding: "0.9rem 1.6rem",
//                 borderRadius: "30px",
//                 background: "linear-gradient(90deg, #ff00ff, #8a2be2, #00ffff)",
//                 border: "none",
//                 color: "white",
//                 fontWeight: 600,
//               }}
//             >
//               Back to Offerings
//             </button>
//           </div>
//         )}

//         {!selectedOffering && (
//           <>
//             <div style={{ marginTop: "4rem", textAlign: "center" }}>
//               <h2 style={{
//                 fontSize: "2.4rem",
//                 background: "linear-gradient(90deg, #ff00ff, #00ffff)",
//                 WebkitBackgroundClip: "text",
//                 WebkitTextFillColor: "white",
//               }}>
//                 Manifestation Offerings
//               </h2>

//               <div style={{
//                 display: "grid",
//                 gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
//                 gap: "1.5rem",
//                 marginTop: "2rem",
//               }}>
//                 {manifestationList.map((item, i) => (
//                   <div
//                     key={i}
//                     style={{
//                       background: "rgba(255,255,255,0.08)",
//                       padding: "1.5rem",
//                       borderRadius: "20px",
//                       textAlign: "left",
//                     }}
//                   >
//                     <h3 style={{
//                       background: "linear-gradient(90deg, #ff00ff, #00ffff)",
//                       WebkitBackgroundClip: "text",
//                       WebkitTextFillColor: "white",
//                     }}>
//                       {item.label}
//                     </h3>

//                     <p style={{ color: "white" }}>{item.description}</p>

//                     <p style={{ color: "#ccc" }}>
//                       <strong>Deliverable:</strong> {item.deliverable}
//                     </p>

//                     <div style={{ display: "flex", gap: "10px", marginTop: "1rem" }}>
//                       <button
//                         onClick={() => alert(item.fullDesc)}
//                         style={{
//                           padding: "0.6rem 1rem",
//                           borderRadius: "30px",
//                           background: "linear-gradient(90deg,#8a2be2,#ff00ff)",
//                           border: "none",
//                           color: "#fff",
//                         }}
//                       >
//                         Know More
//                       </button>

//                       <button
//                         onClick={() => handleBookNow(item)}
//                         style={{
//                           padding: "0.6rem 1rem",
//                           borderRadius: "30px",
//                           background: "linear-gradient(90deg,#ff00ff,#00ffff)",
//                           border: "none",
//                           color: "#fff",
//                         }}
//                       >
//                         Book Now
//                       </button>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </>
//         )}

//       </div>
//     </div>
//   );
// };

// const inputStyle = {
//   width: "100%",
//   padding: "1rem 1.2rem",
//   borderRadius: "12px",
//   border: "1px solid rgba(255,255,255,0.25)",
//   background: "rgba(255,255,255,0.12)",
//   color: "#fff",
//   fontSize: "1rem",
//   outline: "none",
// };

// export default Manifestation;

// import React, { useState, useEffect } from "react";
// import "../../styles/Manifestation.css";
// import axios from "axios";

// const API_URL = "https://adminastrotalk-1.onrender.com/api/manifestation";

// const faqs = [
//   {
//     question: "Can we show an Action button in front of every offering for booking?",
//     answer: "Yes! Each offering has a 'Book Now' button that opens the booking form with all details.",
//   },
//   {
//     question: "Will customers receive a confirmation email?",
//     answer: "Yes. After submission and payment, a confirmation email with next steps is sent automatically.",
//   },
//   {
//     question: "Can we make a portal to upload PDFs for each customer?",
//     answer: "Yes. Backend portal can be integrated where you upload PDFs that are automatically sent to customer emails.",
//   },
// ];

// const navLinks = [
//   { name: "Home", link: "/" },
//   { name: "About Us", link: "/about-us" },
//   { name: "Energy", link: "/energy" },
//   { name: "Astrology", link: "/Astrology" },
//   { name: "Vastu", link: "/vastu" },
//   { name: "Manifestation", link: "/manifestation" },
//   { name: "Material", link: "/material" },
//   { name: "Blogs", link: "/blogs" },
//   { name: "Careers", link: "/careers" },
//   { name: "Contact", link: "/contact" },
//   { name: "Login / Signup", link: "/auth" },
// ];

// const Manifestation = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [manifestationList, setManifestationList] = useState([]);
//   const [wellbeingList, setWellbeingList] = useState([]);
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
//   const [showConfetti, setShowConfetti] = useState(false);

//   const fetchOfferings = async () => {
//     try {
//       const res = await axios.get(`${API_URL}/all`);
//       if (res.data.status) {
//         setManifestationList(res.data.manifestation || []);
//         setWellbeingList(res.data.wellbeing || []);
//       }
//     } catch (err) {
//       console.log("Error fetching offerings:", err);
//     }
//   };

//   useEffect(() => {
//     fetchOfferings();
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
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   const resetBooking = () => {
//     setStep(1);
//     setSelectedOffering(null);
//   };

//   const renderStars = (count) =>
//     Array.from({ length: count }).map((_, i) => (
//       <div
//         key={i}
//         style={{
//           position: "absolute",
//           background: "white",
//           borderRadius: "50%",
//           top: `${Math.random() * 100}%`,
//           left: `${Math.random() * 100}%`,
//           width: `${1 + Math.random() * 3}px`,
//           height: `${1 + Math.random() * 3}px`,
//           opacity: 0.8,
//           animation: `starBlink ${2 + Math.random() * 4}s infinite ease-in-out`,
//         }}
//       ></div>
//     ));

//   return (
//     <div
//       style={{
//         fontFamily: "Poppins, sans-serif",
//         color: "#fff",
//         background: "radial-gradient(circle at top, #1e003f, #0a0018)",
//         minHeight: "100vh",
//         padding: "3rem 2rem",
//         overflow: "hidden",
//         position: "relative",
//       }}
//     >
//       <a
//         href="/manifestation"
//         style={{
//           position: "fixed",
//           top: "22px",
//           right: "25px",
//           background: "linear-gradient(90deg, #ff00ff, #00ffff)",
//           color: "#fff",
//           padding: "10px 22px",
//           borderRadius: "30px",
//           fontWeight: "600",
//           fontSize: "16px",
//           textDecoration: "none",
//           zIndex: 1500,
//           boxShadow: "0 0 18px rgba(255, 0, 255, 0.4)",
//           transition: "0.3s",
//         }}
//         onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.08)")}
//         onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
//       >
//         Align
//       </a>

//       <style>{`
//         @keyframes starBlink {
//           0%, 100% { opacity: 0.3; transform: scale(1); }
//           50% { opacity: 1; transform: scale(1.4); }
//         }
//         @keyframes orbFloat {
//           0%, 100% { transform: translateY(0) scale(1); }
//           50% { transform: translateY(-40px) scale(1.1); }
//         }
//         @keyframes fadeUp {
//           from { opacity: 0; transform: translateY(30px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//       `}</style>

//       <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
//         {renderStars(70)}
//       </div>

//       <div style={{
//         position: "absolute",
//         width: "300px",
//         height: "300px",
//         borderRadius: "50%",
//         filter: "blur(80px)",
//         opacity: 0.3,
//         zIndex: 0,
//         animation: "orbFloat 15s ease-in-out infinite",
//         background: "radial-gradient(circle, #ff00ff, transparent)",
//         top: "10%",
//         left: "5%"
//       }}></div>

//       <div style={{
//         position: "absolute",
//         width: "300px",
//         height: "300px",
//         borderRadius: "50%",
//         filter: "blur(80px)",
//         opacity: 0.3,
//         zIndex: 0,
//         animation: "orbFloat 15s ease-in-out infinite 3s",
//         background: "radial-gradient(circle, #00ffff, transparent)",
//         bottom: "15%",
//         right: "10%"
//       }}></div>

//       <div style={{
//         position: "absolute",
//         width: "300px",
//         height: "300px",
//         borderRadius: "50%",
//         filter: "blur(80px)",
//         opacity: 0.3,
//         zIndex: 0,
//         animation: "orbFloat 15s ease-in-out infinite 6s",
//         background: "radial-gradient(circle, #8a2be2, transparent)",
//         top: "60%",
//         left: "70%"
//       }}></div>

//       {sidebarOpen && (
//         <div
//           onClick={() => setSidebarOpen(false)}
//           style={{
//             position: "fixed",
//             inset: 0,
//             background: "rgba(0,0,0,0.4)",
//             zIndex: 900,
//           }}
//         ></div>
//       )}

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
//           transition: "left 0.5s ease-in-out",
//           zIndex: 1000,
//           padding: "30px 20px",
//           overflowY: "auto",
//         }}
//       >
//         <h2
//           style={{
//             fontSize: "28px",
//             fontWeight: 700,
//             textAlign: "center",
//             background: "linear-gradient(90deg, #ff00ff, #00ffff)",
//             WebkitBackgroundClip: "text",
//             WebkitTextFillColor: "white",
//             marginBottom: "35px",
//           }}
//         >
//           AstroConnect
//         </h2>

//         <ul style={{ listStyle: "none", padding: 0 }}>
//           {navLinks.map((item, i) => (
//             <li key={i} style={{ margin: "14px 0" }}>
//               <a
//                 href={item.link}
//                 onClick={() => setSidebarOpen(false)}
//                 style={{
//                   color: "#ccc",
//                   display: "block",
//                   padding: "12px 18px",
//                   borderRadius: "10px",
//                   textDecoration: "none",
//                   fontSize: "1rem",
//                   fontWeight: 500,
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
//           }}
//         >
//           ☰
//         </button>
//       )}

//       <div
//         style={{
//           marginLeft: sidebarOpen ? "270px" : "0",
//           transition: "margin-left 0.5s ease",
//           position: "relative",
//           zIndex: 5,
//         }}
//       >
//         {selectedOffering && step === 1 && (
//           <div style={{
//             background: "rgba(255,255,255,0.1)",
//             backdropFilter: "blur(20px)",
//             borderRadius: "28px",
//             padding: "3.5rem 2.5rem",
//             maxWidth: "720px",
//             margin: "3rem auto",
//             textAlign: "center",
//           }}>
//             <h2 style={{
//               fontSize: "2.2rem",
//               background: "linear-gradient(90deg, #ff00ff, #00ffff)",
//               WebkitBackgroundClip: "text",
//               WebkitTextFillColor: "white",
//             }}>
//               Book: {selectedOffering.label}
//             </h2>

//             <p style={{ color: "white", marginTop: "1rem" }}>
//               {selectedOffering.fullDesc}
//             </p>

//             <div style={{
//               marginTop: "2rem",
//               padding: "2.5rem",
//               background: "rgba(255, 255, 255, 0.08)",
//               borderRadius: "20px",
//               display: "flex",
//               flexDirection: "column",
//               gap: "1.2rem"
//             }}>
//               <input
//                 type="text"
//                 name="fullName"
//                 placeholder="Full Name"
//                 value={formData.fullName}
//                 onChange={handleChange}
//                 style={inputStyle}
//               />
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Email Address"
//                 value={formData.email}
//                 onChange={handleChange}
//                 style={inputStyle}
//               />
//               <input
//                 type="text"
//                 name="phone"
//                 placeholder="Phone Number"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 style={inputStyle}
//               />
//               <textarea
//                 name="notes"
//                 placeholder="Notes / Details"
//                 rows="3"
//                 value={formData.notes}
//                 onChange={handleChange}
//                 style={{ ...inputStyle, height: "90px" }}
//               ></textarea>

//               <button
//                 onClick={handleFormSubmit}
//                 style={{
//                   marginTop: "1rem",
//                   padding: "0.9rem 1.6rem",
//                   borderRadius: "30px",
//                   background: "linear-gradient(90deg, #ff00ff, #8a2be2, #00ffff)",
//                   border: "none",
//                   color: "white",
//                   fontWeight: 600,
//                 }}
//               >
//                 Proceed to Payment
//               </button>
//             </div>
//           </div>
//         )}

//         {selectedOffering && step === 2 && (
//           <div style={{ textAlign: "center", marginTop: "4rem" }}>
//             <h2
//               style={{
//                 fontSize: "2.4rem",
//                 background: "linear-gradient(90deg, #ff00ff, #00ffff)",
//                 WebkitBackgroundClip: "text",
//                 WebkitTextFillColor: "white",
//               }}
//             >
//               Payment
//             </h2>

//             <button
//               onClick={handlePayment}
//               style={{
//                 marginTop: "2rem",
//                 padding: "0.8rem 1.8rem",
//                 borderRadius: "30px",
//                 background: "linear-gradient(90deg, #ff00ff, #00ffff)",
//                 border: "none",
//                 color: "white",
//                 fontWeight: 600,
//               }}
//             >
//               Pay Now
//             </button>
//           </div>
//         )}

//         {selectedOffering && step === 3 && (
//           <div style={{ textAlign: "center", marginTop: "4rem" }}>
//             <h2
//               style={{
//                 background: "linear-gradient(90deg, #00ffff, #ff00ff)",
//                 WebkitBackgroundClip: "text",
//                 WebkitTextFillColor: "transparent",
//                 fontSize: "2rem",
//               }}
//             >
//               Payment Successful!
//             </h2>

//             <button
//               onClick={resetBooking}
//               style={{
//                 marginTop: "2rem",
//                 padding: "0.9rem 1.6rem",
//                 borderRadius: "30px",
//                 background: "linear-gradient(90deg, #ff00ff, #8a2be2, #00ffff)",
//                 border: "none",
//                 color: "white",
//                 fontWeight: 600,
//               }}
//             >
//               Back to Offerings
//             </button>
//           </div>
//         )}

//         {!selectedOffering && (
//           <>
//             <div style={{ margin: "4rem 0", textAlign: "center" }}>
//               <h2
//                 style={{
//                   fontSize: "2.4rem",
//                   fontWeight: 700,
//                   background: "linear-gradient(90deg, #ff00ff, #00ffff)",
//                   WebkitBackgroundClip: "text",
//                   WebkitTextFillColor: "white",
//                   marginBottom: "1.5rem",
//                 }}
//               >
//                 Alignment & Manifestation
//               </h2>

//               <div
//                 style={{
//                   color: "#ddd",
//                   fontSize: "1rem",
//                   lineHeight: "1.6",
//                   maxWidth: "800px",
//                   margin: "0 auto",
//                 }}
//               >
//                 <p><strong>Energy shapes reality.</strong> Thoughts create reality. Frequencies guide outcomes.</p>
//                 <p><strong>Prepare yourself:</strong> Clarity of desire, mindset shifting, belief building.</p>
//                 <p><strong>Practices:</strong> Gratitude journaling, affirmations, switchwords, 3-6-9 method, 5x55 method.</p>
//                 <p><strong>Manifestation portals:</strong> Important cosmic dates to manifest powerfully.</p>
//               </div>
//             </div>

//             <div style={{ margin: "4rem 0", textAlign: "center" }}>
//               <h2
//                 style={{
//                   fontSize: "2.4rem",
//                   fontWeight: 700,
//                   background: "linear-gradient(90deg, #ff00ff, #00ffff)",
//                   WebkitBackgroundClip: "text",
//                   WebkitTextFillColor: "white",
//                   marginBottom: "1.5rem",
//                 }}
//               >
//                 Visual Journey
//               </h2>

//               <div
//                 style={{
//                   display: "grid",
//                   gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
//                   gap: "1.5rem",
//                   marginTop: "2rem",
//                 }}
//               >
//                 {[
//                   "v1731850200/gallery1_cfks3s.jpg",
//                   "v1731850201/gallery2_gcrait.jpg",
//                   "v1731850202/gallery3_ym9nkn.jpg",
//                   "v1731850203/gallery4_at782l.jpg",
//                 ].map((img, i) => (
//                   <img
//                     key={i}
//                     src={`https://res.cloudinary.com/doerrm32l/image/upload/${img}`}
//                     alt={`Gallery ${i + 1}`}
//                     style={{
//                       width: "100%",
//                       height: "240px",
//                       objectFit: "cover",
//                       borderRadius: "20px",
//                       boxShadow: "0 0 25px rgba(255, 0, 255, 0.25)",
//                       transition: "0.3s",
//                     }}
//                     onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
//                     onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
//                   />
//                 ))}
//               </div>
//             </div>

//             <div style={{ margin: "4rem 0", textAlign: "center" }}>
//               <h2
//                 style={{
//                   fontSize: "2.4rem",
//                   fontWeight: 700,
//                   background: "linear-gradient(90deg, #ff00ff, #00ffff)",
//                   WebkitBackgroundClip: "text",
//                   WebkitTextFillColor: "white",
//                   marginBottom: "1.5rem",
//                 }}
//               >
//                 Manifestation Offerings
//               </h2>

//               <div
//                 style={{
//                   display: "grid",
//                   gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
//                   gap: "2rem",
//                 }}
//               >
//                 {manifestationList.map((offering, idx) => (
//                   <div
//                     key={idx}
//                     style={{
//                       background: "rgba(255,255,255,0.08)",
//                       backdropFilter: "blur(14px)",
//                       borderRadius: "20px",
//                       padding: "2rem 1.5rem",
//                       textAlign: "left",
//                     }}
//                   >
//                     <h3
//                       style={{
//                         background: "linear-gradient(90deg, #ff00ff, #00ffff)",
//                         WebkitBackgroundClip: "text",
//                         WebkitTextFillColor: "white",
//                         fontSize: "1.3rem",
//                         marginBottom: "0.8rem",
//                       }}
//                     >
//                       {offering.label}
//                     </h3>

//                     <p style={{ color: "white", fontSize: "0.95rem" }}>{offering.description}</p>

//                     <p style={{ color: "#ccc", fontSize: "0.95rem" }}>
//                       <strong>Deliverable:</strong> {offering.deliverable}
//                     </p>

//                     <div style={{ display: "flex", gap: "10px", marginTop: "1rem" }}>
//                       <button
//                         onClick={() => alert(offering.fullDesc)}
//                         style={{
//                           padding: "0.7rem 1.2rem",
//                           borderRadius: "30px",
//                           background: "linear-gradient(90deg, #8a2be2, #ff00ff)",
//                           border: "none",
//                           color: "white",
//                           fontWeight: 600,
//                           fontSize: "0.85rem",
//                         }}
//                       >
//                         Know More
//                       </button>

//                       <button
//                         onClick={() => handleBookNow(offering)}
//                         style={{
//                           padding: "0.7rem 1.2rem",
//                           borderRadius: "30px",
//                           background: "linear-gradient(90deg, #ff00ff, #00ffff)",
//                           border: "none",
//                           color: "white",
//                           fontWeight: 600,
//                           fontSize: "0.85rem",
//                         }}
//                       >
//                         Book Now
//                       </button>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <div style={{ margin: "4rem 0", textAlign: "center" }}>
//               <h2
//                 style={{
//                   fontSize: "2.4rem",
//                   fontWeight: 700,
//                   background: "linear-gradient(90deg, #ff00ff, #00ffff)",
//                   WebkitBackgroundClip: "text",
//                   WebkitTextFillColor: "white",
//                   marginBottom: "1.5rem",
//                 }}
//               >
//                 FAQs
//               </h2>

//               {faqs.map((faq, idx) => (
//                 <div key={idx} style={{ marginBottom: "1rem" }}>
//                   <h3
//                     onClick={() => setFaqOpen(faqOpen === idx ? null : idx)}
//                     style={{
//                       cursor: "pointer",
//                       background: "rgba(255, 255, 255, 0.1)",
//                       padding: "1rem 1.25rem",
//                       borderRadius: "16px",
//                     }}
//                   >
//                     {faq.question}
//                   </h3>

//                   {faqOpen === idx && (
//                     <p
//                       style={{
//                         padding: "0.75rem 1.25rem",
//                         background: "rgba(255, 255, 255, 0.08)",
//                         borderRadius: "12px",
//                         marginTop: "0.5rem",
//                       }}
//                     >
//                       {faq.answer}
//                     </p>
//                   )}
//                 </div>
//               ))}
//             </div>
//           </>
//         )}

//       </div>
//     </div>
//   );
// };

// const inputStyle = {
//   width: "100%",
//   padding: "1rem 1.2rem",
//   borderRadius: "12px",
//   border: "1px solid rgba(255,255,255,0.25)",
//   background: "rgba(255,255,255,0.12)",
//   color: "#fff",
//   fontSize: "1rem",
//   outline: "none",
// };

// export default Manifestation;

// import React, { useState, useEffect } from "react";
// import "../../styles/Manifestation.css";
// import axios from "axios";

// const API_URL = "https://adminastrotalk-1.onrender.com/api/manifestation";

// const faqs = [
//   {
//     question: "Can we show an Action button in front of every offering for booking?",
//     answer: "Yes! Each offering has a 'Book Now' button that opens the booking form with all details.",
//   },
//   {
//     question: "Will customers receive a confirmation email?",
//     answer: "Yes. After submission and payment, a confirmation email with next steps is sent automatically.",
//   },
//   {
//     question: "Can we make a portal to upload PDFs for each customer?",
//     answer: "Yes. Backend portal can be integrated where you upload PDFs that are automatically sent to customer emails.",
//   },
// ];

// const navLinks = [
//   { name: "Home", link: "/" },
//   { name: "About Us", link: "/about-us" },
//   { name: "Energy", link: "/energy" },
//   { name: "Astrology", link: "/Astrology" },
//   { name: "Vastu", link: "/vastu" },
//   { name: "Manifestation", link: "/manifestation" },
//   { name: "Material", link: "/material" },
//   { name: "Blogs", link: "/blogs" },
//   { name: "Careers", link: "/careers" },
//   { name: "Contact", link: "/contact" },
//   { name: "Login / Signup", link: "/auth" },
// ];

// const Manifestation = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [manifestationList, setManifestationList] = useState([]);
//   const [wellbeingList, setWellbeingList] = useState([]);
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
//   const [showConfetti, setShowConfetti] = useState(false);

//   const fetchOfferings = async () => {
//     try {
//       const res = await axios.get(`${API_URL}/all`);
//       if (res.data.status) {
//         setManifestationList(res.data.manifestation || []);
//         setWellbeingList(res.data.wellbeing || []);
//       }
//     } catch (err) {
//       console.log("Error fetching offerings:", err);
//     }
//   };

//   useEffect(() => {
//     fetchOfferings();
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
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   const resetBooking = () => {
//     setStep(1);
//     setSelectedOffering(null);
//   };

//   const renderStars = (count) =>
//     Array.from({ length: count }).map((_, i) => (
//       <div
//         key={i}
//         style={{
//           position: "absolute",
//           background: "white",
//           borderRadius: "50%",
//           top: `${Math.random() * 100}%`,
//           left: `${Math.random() * 100}%`,
//           width: `${1 + Math.random() * 3}px`,
//           height: `${1 + Math.random() * 3}px`,
//           opacity: 0.8,
//           animation: `starBlink ${2 + Math.random() * 4}s infinite ease-in-out`,
//         }}
//       ></div>
//     ));

//   return (
//     <div
//       style={{
//         fontFamily: "Poppins, sans-serif",
//         color: "#fff",
//         background: "radial-gradient(circle at top, #1e003f, #0a0018)",
//         minHeight: "100vh",
//         padding: "3rem 2rem",
//         overflow: "hidden",
//         position: "relative",
//       }}
//     >
//       {/* TOP RIGHT CTA */}
//       <a
//         href="/manifestation"
//         style={{
//           position: "fixed",
//           top: "22px",
//           right: "25px",
//           background: "linear-gradient(90deg, #ff00ff, #00ffff)",
//           color: "#fff",
//           padding: "10px 22px",
//           borderRadius: "30px",
//           fontWeight: "600",
//           fontSize: "16px",
//           textDecoration: "none",
//           zIndex: 1500,
//         }}
//       >
//         Align
//       </a>

//       <style>{`
//         @keyframes starBlink {
//           0%, 100% { opacity: 0.3; transform: scale(1); }
//           50% { opacity: 1; transform: scale(1.4); }
//         }
//         @keyframes orbFloat {
//           0%, 100% { transform: translateY(0) scale(1); }
//           50% { transform: translateY(-40px) scale(1.1); }
//         }
//         @keyframes fadeUp {
//           from { opacity: 0; transform: translateY(30px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//       `}</style>

//       {/* STARS */}
//       <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
//         {renderStars(70)}
//       </div>

//       {/* ORBS */}
//       <div
//         style={{
//           position: "absolute",
//           width: "300px",
//           height: "300px",
//           borderRadius: "50%",
//           filter: "blur(80px)",
//           opacity: 0.3,
//           zIndex: 0,
//           animation: "orbFloat 15s ease-in-out infinite",
//           background: "radial-gradient(circle, #ff00ff, transparent)",
//           top: "10%",
//           left: "5%",
//         }}
//       ></div>

//       <div
//         style={{
//           position: "absolute",
//           width: "300px",
//           height: "300px",
//           borderRadius: "50%",
//           filter: "blur(80px)",
//           opacity: 0.3,
//           zIndex: 0,
//           animation: "orbFloat 15s ease-in-out infinite 3s",
//           background: "radial-gradient(circle, #00ffff, transparent)",
//           bottom: "15%",
//           right: "10%",
//         }}
//       ></div>

//       <div
//         style={{
//           position: "absolute",
//           width: "300px",
//           height: "300px",
//           borderRadius: "50%",
//           filter: "blur(80px)",
//           opacity: 0.3,
//           zIndex: 0,
//           animation: "orbFloat 15s ease-in-out infinite 6s",
//           background: "radial-gradient(circle, #8a2be2, transparent)",
//           top: "60%",
//           left: "70%",
//         }}
//       ></div>

//       {/* SIDEBAR OVERLAY */}
//       {sidebarOpen && (
//         <div
//           onClick={() => setSidebarOpen(false)}
//           style={{
//             position: "fixed",
//             inset: 0,
//             background: "rgba(0,0,0,0.4)",
//             zIndex: 900,
//           }}
//         ></div>
//       )}

//       {/* SIDEBAR */}
//       <div
//         style={{
//           position: "fixed",
//           top: 0,
//           left: sidebarOpen ? 0 : "-270px",
//           width: "270px",
//           height: "100vh",
//           background: "linear-gradient(180deg, rgba(20,0,40,0.95), rgba(5,0,20,0.9))",
//           backdropFilter: "blur(14px)",
//           transition: "left 0.5s ease-in-out",
//           padding: "30px 20px",
//           zIndex: 1000,
//         }}
//       >
//         <h2
//           style={{
//             textAlign: "center",
//             fontSize: "28px",
//             fontWeight: 700,
//             background: "linear-gradient(90deg, #ff00ff, #00ffff)",
//             WebkitBackgroundClip: "text",
//             WebkitTextFillColor: "white",
//           }}
//         >
//           AstroConnect
//         </h2>

//         <ul style={{ listStyle: "none", padding: 0, marginTop: "30px" }}>
//           {navLinks.map((link, i) => (
//             <li key={i} style={{ margin: "14px 0" }}>
//               <a
//                 href={link.link}
//                 onClick={() => setSidebarOpen(false)}
//                 style={{
//                   color: "#ccc",
//                   padding: "10px 18px",
//                   borderRadius: "10px",
//                   display: "block",
//                   textDecoration: "none",
//                 }}
//               >
//                 {link.name}
//               </a>
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* HAMBURGER */}
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
//             zIndex: 1100,
//           }}
//         >
//           ☰
//         </button>
//       )}

//       {/* MAIN CONTENT */}
//       <div
//         style={{
//           marginLeft: sidebarOpen ? "270px" : "0",
//           transition: "margin-left 0.4s",
//         }}
//       >
//         {/* BOOKING FORM */}
//         {selectedOffering && step === 1 && (
//           <div
//             style={{
//               background: "rgba(255,255,255,0.1)",
//               padding: "3.5rem 2rem",
//               borderRadius: "28px",
//               maxWidth: "720px",
//               margin: "3rem auto",
//             }}
//           >
//             <h2
//               style={{
//                 fontSize: "2.2rem",
//                 background: "linear-gradient(90deg,#ff00ff,#00ffff)",
//                 WebkitBackgroundClip: "text",
//                 WebkitTextFillColor: "white",
//               }}
//             >
//               Book: {selectedOffering.label}
//             </h2>

//             <p style={{ color: "#fff", marginTop: "1rem" }}>
//               {selectedOffering.fullDesc}
//             </p>

//             <div
//               style={{
//                 marginTop: "2rem",
//                 padding: "2rem",
//                 borderRadius: "20px",
//                 background: "rgba(255,255,255,0.08)",
//                 display: "flex",
//                 flexDirection: "column",
//                 gap: "1.2rem",
//               }}
//             >
//               <input
//                 type="text"
//                 name="fullName"
//                 placeholder="Full Name"
//                 value={formData.fullName}
//                 onChange={handleChange}
//                 style={inputStyle}
//               />

//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Email Address"
//                 value={formData.email}
//                 onChange={handleChange}
//                 style={inputStyle}
//               />

//               <input
//                 type="text"
//                 name="phone"
//                 placeholder="Phone Number"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 style={inputStyle}
//               />

//               <textarea
//                 name="notes"
//                 placeholder="Notes / Details"
//                 value={formData.notes}
//                 rows="3"
//                 onChange={handleChange}
//                 style={{ ...inputStyle, height: "90px" }}
//               ></textarea>

//               <button
//                 onClick={handleFormSubmit}
//                 style={{
//                   marginTop: "1rem",
//                   padding: "0.9rem 1.6rem",
//                   borderRadius: "30px",
//                   background: "linear-gradient(90deg,#ff00ff,#8a2be2,#00ffff)",
//                   border: "none",
//                   color: "#fff",
//                   fontWeight: "600",
//                 }}
//               >
//                 Proceed to Payment
//               </button>
//             </div>
//           </div>
//         )}

//         {/* PAYMENT STEP */}
//         {selectedOffering && step === 2 && (
//           <div style={{ textAlign: "center", marginTop: "4rem" }}>
//             <h2
//               style={{
//                 fontSize: "2.4rem",
//                 background: "linear-gradient(90deg,#ff00ff,#00ffff)",
//                 WebkitBackgroundClip: "text",
//                 WebkitTextFillColor: "white",
//               }}
//             >
//               Payment
//             </h2>

//             <button
//               onClick={handlePayment}
//               style={{
//                 marginTop: "2rem",
//                 padding: "0.8rem 1.8rem",
//                 borderRadius: "30px",
//                 background: "linear-gradient(90deg,#ff00ff,#00ffff)",
//                 border: "none",
//                 color: "#fff",
//                 fontWeight: 600,
//               }}
//             >
//               Pay Now
//             </button>
//           </div>
//         )}

//         {/* SUCCESS STEP */}
//         {selectedOffering && step === 3 && (
//           <div style={{ textAlign: "center", marginTop: "4rem" }}>
//             <h2
//               style={{
//                 fontSize: "2rem",
//                 background: "linear-gradient(90deg,#00ffff,#ff00ff)",
//                 WebkitBackgroundClip: "text",
//                 WebkitTextFillColor: "transparent",
//               }}
//             >
//               Payment Successful!
//             </h2>

//             <button
//               onClick={resetBooking}
//               style={{
//                 marginTop: "2rem",
//                 padding: "0.9rem 1.6rem",
//                 borderRadius: "30px",
//                 background: "linear-gradient(90deg,#ff00ff,#8a2be2,#00ffff)",
//                 border: "none",
//                 color: "#fff",
//                 fontWeight: 600,
//               }}
//             >
//               Back to Offerings
//             </button>
//           </div>
//         )}

//         {/* MAIN PAGE CONTENT */}
//         {!selectedOffering && (
//           <>
//             {/* ALIGNMENT SECTION */}
//             <div style={{ margin: "4rem 0", textAlign: "center" }}>
//               <h2
//                 style={{
//                   fontSize: "2.4rem",
//                   background: "linear-gradient(90deg,#ff00ff,#00ffff)",
//                   WebkitBackgroundClip: "text",
//                   WebkitTextFillColor: "white",
//                 }}
//               >
//                 Alignment & Manifestation
//               </h2>

//               <div
//                 style={{
//                   maxWidth: "800px",
//                   margin: "0 auto",
//                   color: "#ddd",
//                   lineHeight: 1.6,
//                 }}
//               >
//                 <p><strong>Energy shapes reality.</strong> Thoughts become things.</p>
//                 <p><strong>Prepare yourself:</strong> clarity, belief, emotional alignment.</p>
//                 <p><strong>Practices:</strong> affirmations, gratitude, scripting, 3-6-9, 5x55.</p>
//                 <p><strong>Manifestation portals:</strong> cosmic windows for amplified results.</p>
//               </div>
//             </div>

//             {/* GALLERY */}
//             <div style={{ margin: "4rem 0", textAlign: "center" }}>
//               <h2
//                 style={{
//                   fontSize: "2.4rem",
//                   background: "linear-gradient(90deg,#ff00ff,#00ffff)",
//                   WebkitBackgroundClip: "text",
//                   WebkitTextFillColor: "white",
//                   marginBottom: "1.5rem",
//                 }}
//               >
//                 Visual Journey
//               </h2>

//               <div
//                 style={{
//                   display: "grid",
//                   gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
//                   gap: "1.5rem",
//                 }}
//               >
//                 {[
//                   "v1731850200/gallery1_cfks3s.jpg",
//                   "v1731850201/gallery2_gcrait.jpg",
//                   "v1731850202/gallery3_ym9nkn.jpg",
//                   "v1731850203/gallery4_at782l.jpg",
//                 ].map((img, i) => (
//                   <img
//                     key={i}
//                     src={`https://res.cloudinary.com/doerrm32l/image/upload/${img}`}
//                     style={{
//                       width: "100%",
//                       height: "240px",
//                       objectFit: "cover",
//                       borderRadius: "20px",
//                     }}
//                   />
//                 ))}
//               </div>
//             </div>

//             {/* MANIFESTATION OFFERINGS */}
//             <div style={{ margin: "4rem 0", textAlign: "center" }}>
//               <h2
//                 style={{
//                   fontSize: "2.4rem",
//                   fontWeight: 700,
//                   background: "linear-gradient(90deg,#ff00ff,#00ffff)",
//                   WebkitBackgroundClip: "text",
//                   WebkitTextFillColor: "white",
//                   marginBottom: "1.5rem",
//                 }}
//               >
//                 Manifestation Offerings
//               </h2>

//              <div
//   style={{
//     display: "flex",
//     flexWrap: "wrap",
//     justifyContent: "center",
//     gap: "2rem",
//   }}
// >

              
//                 {manifestationList.map((item) => (
//                   <div
//                     key={item._id}
//                  style={{
//   background: "rgba(255,255,255,0.08)",
//   borderRadius: "20px",
//   padding: "2rem",
//   backdropFilter: "blur(14px)",
//   textAlign: "left",
//   width: "320px",
// }}

//                   >
//                     <h3
//                       style={{
//                         background: "linear-gradient(90deg,#ff00ff,#00ffff)",
//                         WebkitBackgroundClip: "text",
//                         WebkitTextFillColor: "white",
//                         fontSize: "1.3rem",
//                       }}
//                     >
//                       {item.label}
//                     </h3>

//                     <p style={{ color: "white" }}>{item.description}</p>

//                     <p style={{ color: "#ccc" }}>
//                       <strong>Deliverable:</strong> {item.deliverable}
//                     </p>

//                     <div style={{ display: "flex", gap: "10px", marginTop: "1rem" }}>
//                       <button
//                         onClick={() => alert(item.fullDesc)}
//                         style={{
//                           padding: "0.7rem 1.2rem",
//                           background: "linear-gradient(90deg,#8a2be2,#ff00ff)",
//                           color: "white",
//                           borderRadius: "30px",
//                           border: "none",
//                         }}
//                       >
//                         Know More
//                       </button>

//                       <button
//                         onClick={() => handleBookNow(item)}
//                         style={{
//                           padding: "0.7rem 1.2rem",
//                           background: "linear-gradient(90deg,#ff00ff,#00ffff)",
//                           color: "white",
//                           borderRadius: "30px",
//                           border: "none",
//                         }}
//                       >
//                         Book Now
//                       </button>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* WELLBEING OFFERINGS */}
//             <div style={{ margin: "4rem 0", textAlign: "center" }}>
//               <h2
//                 style={{
//                   fontSize: "2.4rem",
//                   fontWeight: 700,
//                   background: "linear-gradient(90deg,#00ffff,#ff00ff)",
//                   WebkitBackgroundClip: "text",
//                   WebkitTextFillColor: "white",
//                   marginBottom: "1.5rem",
//                 }}
//               >
//                 Well-being Offerings
//               </h2>

//               <div
//   style={{
//     display: "flex",
//     flexWrap: "wrap",
//     justifyContent: "center",
//     gap: "2rem",
//   }}
// >

//                 {wellbeingList.map((item) => (
//                   <div
//                     key={item._id}
//                    style={{
//   background: "rgba(255,255,255,0.08)",
//   borderRadius: "20px",
//   padding: "2rem",
//   textAlign: "left",
//   backdropFilter: "blur(14px)",
//   width: "320px",
// }}

//                   >
//                     <h3
//                       style={{
//                         background: "linear-gradient(90deg,#ff00ff,#00ffff)",
//                         WebkitBackgroundClip: "text",
//                         WebkitTextFillColor: "white",
//                       }}
//                     >
//                       {item.label}
//                     </h3>

//                     <p style={{ color: "white" }}>{item.description}</p>

//                     <p style={{ color: "#ccc" }}>
//                       <strong>Deliverable:</strong> {item.deliverable}
//                     </p>

//                     <div style={{ display: "flex", gap: "10px", marginTop: "1rem" }}>
//                       <button
//                         onClick={() => alert(item.fullDesc)}
//                         style={{
//                           padding: "0.7rem 1.2rem",
//                           background: "linear-gradient(90deg,#8a2be2,#ff00ff)",
//                           color: "white",
//                           borderRadius: "30px",
//                           border: "none",
//                         }}
//                       >
//                         Know More
//                       </button>

//                       <button
//                         onClick={() => handleBookNow(item)}
//                         style={{
//                           padding: "0.7rem 1.2rem",
//                           background: "linear-gradient(90deg,#ff00ff,#00ffff)",
//                           color: "white",
//                           borderRadius: "30px",
//                           border: "none",
//                         }}
//                       >
//                         Book Now
//                       </button>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* FAQS */}
//             <div style={{ margin: "4rem 0", textAlign: "center" }}>
//               <h2
//                 style={{
//                   fontSize: "2.4rem",
//                   background: "linear-gradient(90deg,#ff00ff,#00ffff)",
//                   WebkitBackgroundClip: "text",
//                   WebkitTextFillColor: "white",
//                 }}
//               >
//                 FAQs
//               </h2>

//               {faqs.map((faq, idx) => (
//                 <div key={idx} style={{ marginBottom: "1rem" }}>
//                   <h3
//                     onClick={() => setFaqOpen(faqOpen === idx ? null : idx)}
//                     style={{
//                       cursor: "pointer",
//                       background: "rgba(255,255,255,0.1)",
//                       padding: "1rem",
//                       borderRadius: "16px",
//                     }}
//                   >
//                     {faq.question}
//                   </h3>

//                   {faqOpen === idx && (
//                     <p
//                       style={{
//                         marginTop: "0.5rem",
//                         padding: "1rem",
//                         background: "rgba(255,255,255,0.08)",
//                         borderRadius: "12px",
//                       }}
//                     >
//                       {faq.answer}
//                     </p>
//                   )}
//                 </div>
//               ))}
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// const inputStyle = {
//   width: "100%",
//   padding: "1rem",
//   borderRadius: "12px",
//   border: "1px solid rgba(255,255,255,0.25)",
//   background: "rgba(255,255,255,0.12)",
//   color: "#fff",
//   fontSize: "1rem",
// };

// export default Manifestation;


import React, { useState, useEffect } from "react";
import "../../styles/Manifestation.css";
import { useNavigate } from "react-router-dom"; 


import axios from "axios";

const API_URL = "https://adminastrotalk-1.onrender.com/api/manifestation"; // change if needed

const faqs = [
  {
    question: "Can we show an Action button in front of every offering for booking?",
    answer: "Yes! Each offering has a 'Book Now' button that opens the booking form with all details.",
  },
  {
    question: "Will customers receive a confirmation email?",
    answer: "Yes. After submission and payment, a confirmation email with next steps is sent automatically.",
  },
  {
    question: "Can we make a portal to upload PDFs for each customer?",
    answer: "Yes. Backend portal can be integrated where you upload PDFs that are automatically sent to customer emails.",
  },
];

const navLinks = [
  { name: "Home", link: "/" },
  { name: "About Us", link: "/about-us" },
  { name: "Energy", link: "/energy" },
  { name: "Astrology", link: "/Astrology" },
  { name: "Vastu", link: "/vastu" },
  { name: "Manifestation", link: "/manifestation" },
  { name: "Material", link: "/material" },
  { name: "Free Calculator", link: "/free-calculator" },
  { name: "Blogs", link: "/blogs" },
  { name: "Careers", link: "/careers" },
  { name: "Contact", link: "/contact" },
  { name: "Login / Signup", link: "/auth" },
];

const Manifestation = () => {
    const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [manifestationList, setManifestationList] = useState([]);
  const [wellbeingList, setWellbeingList] = useState([]);
  const [selectedOffering, setSelectedOffering] = useState(null);
  const [step, setStep] = useState(1); // 1 = form, 2 = payment, 3 = success

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    notes: "",
    file: null,
  });

  const [faqOpen, setFaqOpen] = useState(null);
  const [showConfetti, setShowConfetti] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [paymentLoading, setPaymentLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  // fetch offerings from backend
  const fetchOfferings = async () => {
    try {
      const res = await axios.get(`${API_URL}/all`);
      if (res.data && res.data.status) {
        setManifestationList(res.data.manifestation || []);
        setWellbeingList(res.data.wellbeing || []);
      } else {
        // if backend doesn't send expected shape, provide fallback demo items
        setManifestationList(res.data.manifestation || []);
        setWellbeingList(res.data.wellbeing || []);
      }
    } catch (err) {
      console.warn("Error fetching offerings, loading fallback demo items:", err);
      // Fallback demo items so UI works even if backend down
      setManifestationList([
        {
          _id: "m1",
          label: "Manifestation Blueprint",
          description: "Personalized manifestation report.",
          fullDesc: "In-depth energetic report and steps.",
          deliverable: "Paid PDF",
          price: 499,
        },
        {
          _id: "m2",
          label: "Guided Manifestation Session",
          description: "30-minute one-on-one guided session.",
          fullDesc: "Meditation + scripting + intention setting.",
          deliverable: "30-min Call",
          price: 999,
        },
      ]);
      setWellbeingList([
        {
          _id: "w1",
          label: "Well-being Guide",
          description: "Free guide with rituals and practices.",
          fullDesc: "Practical daily practices to raise vibration.",
          deliverable: "Free PDF",
          price: 0,
        },
      ]);
    }
  };

  useEffect(() => {
    fetchOfferings();
  }, []);

  // Important: make large decorative layers non-interactive so inputs are clickable
  const renderStars = (count) =>
    Array.from({ length: count }).map((_, i) => (
      <div
        key={i}
        style={{
          position: "absolute",
          background: "white",
          borderRadius: "50%",
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          width: `${1 + Math.random() * 3}px`,
          height: `${1 + Math.random() * 3}px`,
          opacity: 0.8,
          animation: `starBlink ${2 + Math.random() * 4}s infinite ease-in-out`,
          pointerEvents: "none", // <<< prevents blocking inputs
        }}
      ></div>
    ));

  // handle controlled inputs (text + file)
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData((p) => ({ ...p, [name]: files[0] }));
    } else {
      setFormData((p) => ({ ...p, [name]: value }));
    }
  };

  // Validate form fields (simple)
  const validateForm = () => {
    if (!formData.fullName.trim()) return "Full name is required.";
    if (!formData.email.trim()) return "Email is required.";
    // basic email check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) return "Enter a valid email.";
    if (!formData.phone.trim()) return "Phone number is required.";
    return null;
  };

  // Submit booking to backend (multipart for file)
  const handleFormSubmit = async (e) => {
    e && e.preventDefault();
    setErrorMsg("");
    const validationError = validateForm();
    if (validationError) {
      setErrorMsg(validationError);
      return;
    }

    // create payload
    const payload = new FormData();
    payload.append("fullName", formData.fullName);
    payload.append("email", formData.email);
    payload.append("phone", formData.phone);
    payload.append("notes", formData.notes || "");
    if (formData.file) payload.append("file", formData.file);
    if (selectedOffering) {
      payload.append("offeringId", selectedOffering._id || selectedOffering.id || "");
      payload.append("offeringLabel", selectedOffering.label || "");
      payload.append("price", selectedOffering.price || "");
    }

    try {
      setSubmitting(true);
      // POST to backend booking endpoint - change if your endpoint differs
      const res = await axios.post(`${API_URL}/book`, payload, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      // If backend accepted booking and returned success, proceed to payment
      if (res.data && (res.data.status || res.status === 200)) {
        // optionally store booking id returned by backend: res.data.bookingId
        setStep(2); // go to payment
      } else {
        // gracefully handle: still allow to go to payment or show message
        setErrorMsg(res.data?.message || "Unable to book - try again.");
      }
    } catch (err) {
      console.error("Booking error:", err);
      // If backend unreachable, still allow user to simulate payment (useful for dev)
      // setErrorMsg("Booking failed (server error). You can still proceed to payment for testing.");
      setStep(2);
    } finally {
      setSubmitting(false);
    }
  };

  // Simulated payment flow - replace with real payment integration
  const handlePayment = async () => {
    setPaymentLoading(true);
    setErrorMsg("");
    try {
      // Simulate payment delay
      await new Promise((res) => setTimeout(res, 1200));
      // If you have payment API, call it here and check result
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 4000);
      setStep(3);
    } catch (err) {
      console.error("Payment error:", err);
      setErrorMsg("Payment failed. Try again.");
    } finally {
      setPaymentLoading(false);
    }
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
    setErrorMsg("");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const resetBooking = () => {
    setStep(1);
    setSelectedOffering(null);
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      notes: "",
      file: null,
    });
    setErrorMsg("");
  };

  return (
    <div
      style={{
        fontFamily: "Poppins, sans-serif",
        color: "#fff",
        background: "radial-gradient(circle at top, #1e003f, #0a0018)",
        minHeight: "100vh",
        padding: "3rem 2rem",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* TOP RIGHT CTA */}
      <a
        href="/manifestation"
        style={{
          position: "fixed",
          top: "22px",
          right: "25px",
          background: "linear-gradient(90deg, #ff00ff, #00ffff)",
          color: "#fff",
          padding: "10px 22px",
          borderRadius: "30px",
          fontWeight: "600",
          fontSize: "16px",
          textDecoration: "none",
          zIndex: 1500,
          boxShadow: "0 6px 30px rgba(0,0,0,0.45)",
        }}
      >
        Align
      </a>

      <style>{`
        @keyframes starBlink {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.4); }
        }
        @keyframes orbFloat {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-40px) scale(1.1); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* STARS container (non-interactive) */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none" }}>
        {renderStars(70)}
      </div>

      {/* ORBS decorative (non-interactive) */}
      <div
        style={{
          position: "absolute",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          filter: "blur(80px)",
          opacity: 0.3,
          zIndex: 0,
          animation: "orbFloat 15s ease-in-out infinite",
          background: "radial-gradient(circle, #ff00ff, transparent)",
          top: "10%",
          left: "5%",
          pointerEvents: "none",
        }}
      ></div>

      <div
        style={{
          position: "absolute",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          filter: "blur(80px)",
          opacity: 0.3,
          zIndex: 0,
          animation: "orbFloat 15s ease-in-out infinite 3s",
          background: "radial-gradient(circle, #00ffff, transparent)",
          bottom: "15%",
          right: "10%",
          pointerEvents: "none",
        }}
      ></div>

      <div
        style={{
          position: "absolute",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          filter: "blur(80px)",
          opacity: 0.28,
          zIndex: 0,
          animation: "orbFloat 15s ease-in-out infinite 6s",
          background: "radial-gradient(circle, #8a2be2, transparent)",
          top: "60%",
          left: "70%",
          pointerEvents: "none",
        }}
      ></div>

      {/* SIDEBAR OVERLAY */}
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.4)",
            zIndex: 900,
          }}
        />
      )}

      {/* SIDEBAR */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: sidebarOpen ? 0 : "-270px",
          width: "270px",
          height: "100vh",
          background: "linear-gradient(180deg, rgba(20,0,40,0.95), rgba(5,0,20,0.9))",
          backdropFilter: "blur(14px)",
          transition: "left 0.45s ease-in-out",
          padding: "30px 20px",
          zIndex: 1000,
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "28px",
            fontWeight: 700,
            background: "linear-gradient(90deg, #ff00ff, #00ffff)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "white",
          }}
        >
         THE FIFTH CUSP
        </h2>

        <ul style={{ listStyle: "none", padding: 0, marginTop: "30px" }}>
          {navLinks.map((link, i) => (
            <li key={i} style={{ margin: "14px 0" }}>
              <a
                href={link.link}
                onClick={() => setSidebarOpen(false)}
                style={{
                  color: "#ccc",
                  padding: "10px 18px",
                  borderRadius: "10px",
                  display: "block",
                  textDecoration: "none",
                }}
              >
                {link.name}
              </a>
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
            top: "22px",
            left: "25px",
            background: "linear-gradient(135deg, #ff00ff, #7b2cbf)",
            color: "#fff",
            border: "none",
            fontSize: "26px",
            borderRadius: "50%",
            width: "55px",
            height: "55px",
            zIndex: 1100,
            cursor: "pointer",
          }}
        >
          ☰
        </button>
      )}

      {/* MAIN CONTENT */}
      {/* <div style={{ marginLeft: sidebarOpen ? "270px" : "0", transition: "margin-left 0.4s" }}> */}
      <div className="manifestation-content">

        {/* BOOKING FORM */}
        {selectedOffering && step === 1 && (
          <div
            style={{
              background: "rgba(255,255,255,0.06)",
              padding: "3.5rem 2rem",
              borderRadius: "28px",
              maxWidth: "720px",
              margin: "3rem auto",
              zIndex: 10,
            }}
          >
            <h2
              style={{
                fontSize: "2.2rem",
                background: "linear-gradient(90deg,#ff00ff,#00ffff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "white",
                marginBottom: "0.6rem",
                textAlign: "center",
              }}
            >
              Book: {selectedOffering.label}
            </h2>

            <p style={{ color: "#fff", marginTop: "1rem", textAlign: "center" }}>
              {selectedOffering.fullDesc}
            </p>

            <form
              onSubmit={handleFormSubmit}
              style={{
                marginTop: "2rem",
                padding: "2rem",
                borderRadius: "20px",
                background: "rgba(255,255,255,0.04)",
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                maxWidth: "640px",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              {errorMsg && (
                <div
                  style={{
                    color: "#ffdddd",
                    background: "rgba(255,0,0,0.06)",
                    padding: "0.75rem 1rem",
                    borderRadius: "10px",
                  }}
                >
                  {errorMsg}
                </div>
              )}

              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
                style={inputStyle}
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                style={inputStyle}
                required
              />

              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                style={inputStyle}
                required
              />

              <textarea
                name="notes"
                placeholder="Notes / Details"
                value={formData.notes}
                rows="3"
                onChange={handleChange}
                style={{ ...inputStyle, height: "90px" }}
              />

              <label style={{ color: "#ddd", fontSize: "0.9rem" }}>
                Upload File (optional)
                <input
                  type="file"
                  name="file"
                  onChange={handleChange}
                  style={{ marginTop: "8px", display: "block" }}
                />
              </label>

              <button
                type="submit"
                disabled={submitting}
                style={{
                  marginTop: "1rem",
                  padding: "0.9rem 1.6rem",
                  borderRadius: "30px",
                  background: "linear-gradient(90deg,#ff00ff,#8a2be2,#00ffff)",
                  border: "none",
                  color: "#fff",
                  fontWeight: "600",
                  cursor: submitting ? "not-allowed" : "pointer",
                }}
              >
                {submitting ? "Processing..." : "Proceed to Payment"}
              </button>
            </form>
          </div>
        )}

        {/* PAYMENT STEP */}
        {selectedOffering && step === 2 && (
          <div style={{ textAlign: "center", marginTop: "4rem", zIndex: 10 }}>
            <h2
              style={{
                fontSize: "2.4rem",
                background: "linear-gradient(90deg,#ff00ff,#00ffff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "white",
              }}
            >
              Payment
            </h2>

            <p style={{ color: "#ddd", marginTop: "1rem" }}>
              You're booking <strong>{selectedOffering.label}</strong>{" "}
              {selectedOffering.price ? `— ₹${selectedOffering.price}` : ""}
            </p>

            <div
              style={{
                marginTop: "2rem",
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                alignItems: "center",
              }}
            >
              {/* Simulated payment inputs (for demo) */}
              <input type="text" placeholder="Cardholder Name" style={paymentInput} />
              <input type="text" placeholder="Card Number" maxLength={19} style={paymentInput} />
              <div style={{ display: "flex", gap: "1rem", width: "90%", maxWidth: "420px" }}>
                <input type="text" placeholder="MM/YY" maxLength={5} style={{ ...paymentInput, flex: 1 }} />
                <input type="text" placeholder="CVV" maxLength={4} style={{ ...paymentInput, flex: 1 }} />
              </div>

              <button
                onClick={handlePayment}
                disabled={paymentLoading}
                style={{
                  marginTop: "0.5rem",
                  padding: "0.9rem 1.6rem",
                  borderRadius: "30px",
                  background: "linear-gradient(90deg,#ff00ff,#00ffff)",
                  border: "none",
                  color: "#fff",
                  fontWeight: 600,
                  cursor: paymentLoading ? "not-allowed" : "pointer",
                }}
              >
                {paymentLoading ? "Processing..." : "Pay Now"}
              </button>

              <div style={{ color: "#ccc", marginTop: "0.8rem" }}>
                Or pay with:
                <div style={{ marginTop: "0.6rem", display: "flex", gap: "0.6rem", justifyContent: "center" }}>
                  <button style={smallPayBtn}>Google Pay</button>
                  <button style={smallPayBtn}>UPI</button>
                  <button style={smallPayBtn}>PhonePe</button>
                </div>
              </div>

              {errorMsg && (
                <div style={{ color: "#ffdddd", marginTop: "0.6rem" }}>{errorMsg}</div>
              )}
            </div>
          </div>
        )}

        {/* SUCCESS STEP */}
        {selectedOffering && step === 3 && (
          <div style={{ textAlign: "center", marginTop: "4rem", zIndex: 10 }}>
            {showConfetti && (
              <div style={{ fontSize: "48px", marginBottom: "0.6rem" }}>🎉</div>
            )}
            <h2
              style={{
                fontSize: "2rem",
                background: "linear-gradient(90deg,#00ffff,#ff00ff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Payment Successful!
            </h2>

            <p style={{ color: "#ccc", marginTop: "1rem" }}>
              Thank you, <strong>{formData.fullName || "Customer"}</strong>. Your booking for{" "}
              <strong>{selectedOffering.label}</strong> has been received.
            </p>

            <button
              onClick={resetBooking}
              style={{
                marginTop: "2rem",
                padding: "0.9rem 1.6rem",
                borderRadius: "30px",
                background: "linear-gradient(90deg,#ff00ff,#8a2be2,#00ffff)",
                border: "none",
                color: "#fff",
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              Back to Offerings
            </button>
          </div>
        )}

        {/* MAIN PAGE CONTENT */}
        {!selectedOffering && (
          <>
            {/* ALIGNMENT SECTION */}
            <div style={{ margin: "4rem 0", textAlign: "center" }}>
              <h2
                style={{
                  fontSize: "2.4rem",
                  background: "linear-gradient(90deg,#ff00ff,#00ffff)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "white",
                }}
              >
                Alignment & Manifestation
              </h2>

              <div style={{ maxWidth: "800px", margin: "0 auto", color: "#ddd", lineHeight: 1.6 }}>
                <p>
                  <strong>Energy shapes reality.</strong> Thoughts become things.
                </p>
                <p>
                  <strong>Prepare yourself:</strong> clarity, belief, emotional alignment.
                </p>
                <p>
                  <strong>Practices:</strong> affirmations, gratitude, scripting, 3-6-9, 5x55.
                </p>
                <p>
                  <strong>Manifestation portals:</strong> cosmic windows for amplified results.
                </p>
              </div>
            </div>

            {/* GALLERY */}
            <div style={{ margin: "4rem 0", textAlign: "center" }}>
              <h2
                style={{
                  fontSize: "2.4rem",
                  background: "linear-gradient(90deg,#ff00ff,#00ffff)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "white",
                  marginBottom: "1.5rem",
                }}
              >
                Visual Journey
              </h2>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
                  gap: "1.5rem",
                }}
              >
                {[
                  "v1731850200/gallery1_cfks3s.jpg",
                  "v1731850201/gallery2_gcrait.jpg",
                  "v1731850202/gallery3_ym9nkn.jpg",
                  "v1731850203/gallery4_at782l.jpg",
                ].map((img, i) => (
                  <img
                    key={i}
                    src={`https://res.cloudinary.com/doerrm32l/image/upload/${img}`}
                    alt={`Gallery ${i + 1}`}
                    style={{
                      width: "100%",
                      height: "240px",
                      objectFit: "cover",
                      borderRadius: "20px",
                    }}
                  />
                ))}
              </div>
            </div>

            {/* MANIFESTATION OFFERINGS */}

            {/* <div style={{ margin: "4rem 0", textAlign: "center" }}>
              <h2
                style={{
                  fontSize: "2.4rem",
                  fontWeight: 700,
                  background: "linear-gradient(90deg,#ff00ff,#00ffff)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "white",
                  marginBottom: "1.5rem",
                }}
              >
                Manifestation Offerings
              </h2>

              <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "2rem" }}>
                {manifestationList.map((item) => (
                  <div
                    key={item._id}
                    style={{
                      background: "rgba(255,255,255,0.08)",
                      borderRadius: "20px",
                      padding: "2rem",
                      backdropFilter: "blur(14px)",
                      textAlign: "left",
                      width: "320px",
                    }}
                  >
                    <h3
                      style={{
                        background: "linear-gradient(90deg,#ff00ff,#00ffff)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "white",
                        fontSize: "1.3rem",
                      }}
                    >
                      {item.label}
                    </h3>

                    <p style={{ color: "white" }}>{item.description}</p>

                    <p style={{ color: "#ccc" }}>
                      <strong>Deliverable:</strong> {item.deliverable}
                    </p>

                    <div style={{ display: "flex", gap: "10px", marginTop: "1rem" }}>
                      <button
                        onClick={() => alert(item.fullDesc)}
                        style={{
                          padding: "0.7rem 1.2rem",
                          background: "linear-gradient(90deg,#8a2be2,#ff00ff)",
                          color: "white",
                          borderRadius: "30px",
                          border: "none",
                          cursor: "pointer",
                        }}
                      >
                        Know More
                      </button>

                      <button
                        onClick={() => handleBookNow(item)}
                        style={{
                          padding: "0.7rem 1.2rem",
                          background: "linear-gradient(90deg,#ff00ff,#00ffff)",
                          color: "white",
                          borderRadius: "30px",
                          border: "none",
                          cursor: "pointer",
                        }}
                      >
                        Book Now
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div> */}

            <div style={{ margin: "5rem 0", textAlign: "center" }}>
  <h2
    style={{
      fontSize: "2.6rem",
      fontWeight: 800,
      background: "linear-gradient(90deg,#ff00ff,#00ffff)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "white",
      marginBottom: "2rem",
    }}
  >
    Manifestation Offerings
  </h2>

  <div
    style={{
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: "2.5rem",
    }}
  >
    {manifestationList.map((item) => (
      <div
        key={item._id}
        style={{
          width: "330px",
          padding: "2.2rem",
          borderRadius: "22px",
          background: "rgba(255,255,255,0.08)",
          backdropFilter: "blur(18px)",
          border: "1px solid rgba(255,255,255,0.18)",

          boxShadow: "0 0 35px rgba(255,0,255,0.20)",
          position: "relative",
          overflow: "hidden",
          transition: "all 0.35s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-12px) scale(1.03)";
          e.currentTarget.style.boxShadow = "0 0 45px rgba(255,0,255,0.35)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0) scale(1)";
          e.currentTarget.style.boxShadow = "0 0 35px rgba(255,0,255,0.20)";
        }}
      >
        {/* Glow Border */}
        <div
          style={{
            position: "absolute",
            inset: "-2px",
            borderRadius: "24px",
            background: "linear-gradient(135deg,#ff00ff,#8a2be2,#00ffff)",
            filter: "blur(15px)",
            zIndex: -1,
            opacity: 0.22,
          }}
        />

        <h3
          style={{
            fontSize: "1.4rem",
            fontWeight: 700,
            background: "linear-gradient(90deg,#ff00ff,#00ffff)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "white",
            marginBottom: "0.7rem",
          }}
        >
          {item.label}
        </h3>

        <p style={{ color: "white", fontSize: "1rem", lineHeight: "1.55" }}>
          {item.description}
        </p>

        <p style={{ color: "#ccc", marginTop: "0.8rem" }}>
          <strong>Deliverable:</strong> {item.deliverable}
        </p>

        <div
          style={{
            marginTop: "1.5rem",
            display: "flex",
            gap: "12px",
          }}
        >
          {/* <button
            onClick={() => alert(item.fullDesc)}
            style={{
              flex: 1,
              padding: "0.8rem 1rem",
              borderRadius: "14px",
              background: "linear-gradient(90deg,#8a2be2,#ff00ff)",
              border: "none",
              color: "white",
              fontWeight: 600,
              cursor: "pointer",
              transition: "0.3s",
            }}
          >
            Know More
          </button> */}

          <button
  onClick={() => navigate("/know-more")}
  style={{
    flex: 1,
    padding: "0.8rem 1rem",
    borderRadius: "14px",
    background: "linear-gradient(90deg,#8a2be2,#ff00ff)",
    border: "none",
    color: "white",
    fontWeight: 600,
    cursor: "pointer",
  }}
>
  Know More
</button>


          <button
            onClick={() => handleBookNow(item)}
            style={{
              flex: 1,
              padding: "0.8rem 1rem",
              borderRadius: "14px",
              background: "linear-gradient(90deg,#ff00ff,#00ffff)",
              border: "none",
              color: "white",
              fontWeight: 600,
              cursor: "pointer",
              transition: "0.3s",
            }}
          >
            Book Now
          </button>
        </div>
      </div>
    ))}
  </div>
</div>

            {/* WELLBEING OFFERINGS */}
{/*             
            <div style={{ margin: "4rem 0", textAlign: "center" }}>
              <h2
                style={{
                  fontSize: "2.4rem",
                  fontWeight: 700,
                  background: "linear-gradient(90deg,#00ffff,#ff00ff)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "white",
                  marginBottom: "1.5rem",
                }}
              >
                Well-being Offerings
              </h2>

              <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "2rem" }}>
                {wellbeingList.map((item) => (
                  <div
                    key={item._id}
                    style={{
                      background: "rgba(255,255,255,0.08)",
                      borderRadius: "20px",
                      padding: "2rem",
                      textAlign: "left",
                      backdropFilter: "blur(14px)",
                      width: "320px",
                    }}
                  >
                    <h3
                      style={{
                        background: "linear-gradient(90deg,#ff00ff,#00ffff)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "white",
                      }}
                    >
                      {item.label}
                    </h3>

                    <p style={{ color: "white" }}>{item.description}</p>

                    <p style={{ color: "#ccc" }}>
                      <strong>Deliverable:</strong> {item.deliverable}
                    </p>

                    <div style={{ display: "flex", gap: "10px", marginTop: "1rem" }}>
                      <button
                        onClick={() => alert(item.fullDesc)}
                        style={{
                          padding: "0.7rem 1.2rem",
                          background: "linear-gradient(90deg,#8a2be2,#ff00ff)",
                          color: "white",
                          borderRadius: "30px",
                          border: "none",
                          cursor: "pointer",
                        }}
                      >
                        Know More
                      </button>

                      <button
                        onClick={() => handleBookNow(item)}
                        style={{
                          padding: "0.7rem 1.2rem",
                          background: "linear-gradient(90deg,#ff00ff,#00ffff)",
                          color: "white",
                          borderRadius: "30px",
                          border: "none",
                          cursor: "pointer",
                        }}
                      >
                        Book Now
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div> */}

            {/* WELLBEING OFFERINGS */}
<div style={{ margin: "5rem 0", textAlign: "center" }}>
  <h2
    style={{
      fontSize: "2.6rem",
      fontWeight: 800,
      background: "linear-gradient(90deg,#00ffff,#ff00ff)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "white",
      marginBottom: "2rem",
    }}
  >
    Well-being Offerings
  </h2>

  <div
    style={{
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: "2.5rem",
    }}
  >
    {wellbeingList.map((item) => (
      <div
        key={item._id}
        style={{
          width: "330px",
          padding: "2.2rem",
          borderRadius: "22px",
          background: "rgba(255,255,255,0.08)",
          backdropFilter: "blur(18px)",
          border: "1px solid rgba(255,255,255,0.18)",

          boxShadow: "0 0 35px rgba(0,255,255,0.20)",
          position: "relative",
          overflow: "hidden",
          transition: "all 0.35s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-12px) scale(1.03)";
          e.currentTarget.style.boxShadow = "0 0 45px rgba(0,255,255,0.35)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0) scale(1)";
          e.currentTarget.style.boxShadow = "0 0 35px rgba(0,255,255,0.20)";
        }}
      >
        {/* Glow Border */}
        <div
          style={{
            position: "absolute",
            inset: "-2px",
            borderRadius: "24px",
            background: "linear-gradient(135deg,#00ffff,#8a2be2,#ff00ff)",
            filter: "blur(15px)",
            zIndex: -1,
            opacity: 0.22,
          }}
        />

        <h3
          style={{
            fontSize: "1.4rem",
            fontWeight: 700,
            background: "linear-gradient(90deg,#00ffff,#ff00ff)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "white",
            marginBottom: "0.7rem",
          }}
        >
          {item.label}
        </h3>

        <p style={{ color: "white", fontSize: "1rem", lineHeight: "1.55" }}>
          {item.description}
        </p>

        <p style={{ color: "#ccc", marginTop: "0.8rem" }}>
          <strong>Deliverable:</strong> {item.deliverable}
        </p>

        <div
          style={{
            marginTop: "1.5rem",
            display: "flex",
            gap: "12px",
          }}
        >
          <button
  onClick={() => navigate("/know-more")}
  style={{
    flex: 1,
    padding: "0.8rem 1rem",
    borderRadius: "14px",
    background: "linear-gradient(90deg,#8a2be2,#ff00ff)",
    border: "none",
    color: "white",
    fontWeight: 600,
    cursor: "pointer",
  }}
>
  Know More
</button>


          <button
            onClick={() => handleBookNow(item)}
            style={{
              flex: 1,
              padding: "0.8rem 1rem",
              borderRadius: "14px",
              background: "linear-gradient(90deg,#ff00ff,#00ffff)",
              border: "none",
              color: "white",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Book Now
          </button>
        </div>
      </div>
    ))}
  </div>
</div>


            {/* FAQS */}
            
            <div style={{ margin: "4rem 0", textAlign: "center" }}>
              <h2
                style={{
                  fontSize: "2.4rem",
                  // background: "linear-gradient(90deg,#ff00ff,#00ffff)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "white",
                }}
              >
                FAQs
              </h2>

              {faqs.map((faq, idx) => (
                <div key={idx} style={{ marginBottom: "1rem" }}>
                  <h3
                    onClick={() => setFaqOpen(faqOpen === idx ? null : idx)}
                    style={{
                      cursor: "pointer",
                      background: "rgba(255,255,255,0.1)",
                      padding: "1rem",
                      borderRadius: "16px",
                    }}
                  >
                    {faq.question}
                  </h3>

                  {faqOpen === idx && (
                    <p
                      style={{
                        marginTop: "0.5rem",
                        padding: "1rem",
                        background: "rgba(255,255,255,0.08)",
                        borderRadius: "12px",
                      }}
                    >
                      {faq.answer}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

// shared styles
const inputStyle = {
  width: "100%",
  padding: "1rem",
  borderRadius: "12px",
  border: "1px solid rgba(255,255,255,0.18)",
  background: "rgba(255,255,255,0.06)",
  color: "#fff",
  fontSize: "1rem",
  outline: "none",
};

const paymentInput = {
  width: "90%",
  maxWidth: "420px",
  padding: "0.9rem 1rem",
  borderRadius: "12px",
  border: "1px solid rgba(255,255,255,0.16)",
  background: "rgba(255,255,255,0.04)",
  color: "#fff",
  fontSize: "1rem",
  outline: "none",
};

const smallPayBtn = {
  margin: "0.4rem",
  padding: "0.6rem 1.3rem",
  borderRadius: "30px",
  border: "1px solid rgba(255,255,255,0.12)",
  background: "rgba(255,255,255,0.04)",
  color: "#fff",
  cursor: "pointer",
};

export default Manifestation;
