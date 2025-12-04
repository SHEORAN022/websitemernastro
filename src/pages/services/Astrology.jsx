// // // // import React, { useState } from "react";
// // // // import { Loader2, Sparkles } from "lucide-react";
// // // // import KundliReport from "./reports/KundliReport";
// // // // import NumerologyReport from "./reports/NumerologyReport";
// // // // import CompatibilityReport from "./reports/CompatibilityReport";
// // // // import {
// // // //   KundliAPI,
// // // //   NumerologyAPI,
// // // //   CompatibilityAPI,
// // // //   GemstoneAPI,
// // // //   PanchangAPI,
// // // //   PlanetaryAPI,
// // // //   TransitAPI,
// // // //   ZodiacAPI,
// // // //   ManglikAPI,
// // // //   DashaAPI,
// // // //   NakshatraAPI,
// // // //   DailyPredictionAPI,
// // // //   HoroscopeAPI,
// // // // } from "../../api/apiService";

// // // // const calculators = [
// // // //   { label: "Kundli", deliverable: "Chart", price: "Free", icon: "🔮", desc: "Generate your complete birth chart with planetary positions" },
// // // //   { label: "Numerology", deliverable: "Report", price: "Free", icon: "🔢", desc: "Discover your life path number and destiny insights" },
// // // //   { label: "Compatibility", deliverable: "PDF", price: "Paid", icon: "💕", desc: "Analyze relationship compatibility between two souls" },
// // // //   { label: "Gemstone Recommendation", deliverable: "Report", price: "Paid", icon: "💎", desc: "Find your lucky gemstones based on planetary alignment" },
// // // //   { label: "Dasha (Vimshottari)", deliverable: "Report", price: "Paid", icon: "⏳", desc: "Explore your planetary periods and life phases" },
// // // //   { label: "Manglik Calculator", deliverable: "Report", price: "Paid", icon: "🔥", desc: "Check Manglik dosha and its effects on your life" },
// // // //   { label: "Nakshatra Calculator", deliverable: "Report", price: "Paid", icon: "⭐", desc: "Discover your birth star and its cosmic influence" },
// // // //   { label: "Planetary Calculator", deliverable: "Report", price: "Paid", icon: "🪐", desc: "Analyze planetary strengths and their impact" },
// // // //   { label: "Transit Calculator", deliverable: "Report", price: "Paid", icon: "🌍", desc: "Track current planetary movements affecting you" },
// // // //   { label: "Zodiac Calculator", deliverable: "Report", price: "Free", icon: "♈", desc: "Find your sun, moon, and rising zodiac signs" },
// // // //   { label: "Daily Predictions", deliverable: "Report", price: "Paid", icon: "📅", desc: "Get personalized daily astrological guidance" },
// // // //   { label: "Horoscope", deliverable: "Report", price: "Free", icon: "🌙", desc: "Read your detailed horoscope and predictions" },
// // // // ];

// // // // const Movement = () => {
// // // //   const [sidebarOpen, setSidebarOpen] = useState(false);
// // // //   const [step, setStep] = useState(1);
// // // //   const [selectedCalculator, setSelectedCalculator] = useState(null);
// // // //   const [formData, setFormData] = useState({
// // // //     fullName: "",
// // // //     dob: "",
// // // //     timeSlot: "",
// // // //     birthPlace: "",
// // // //     fullNameA: "",
// // // //     dobA: "",
// // // //     timeSlotA: "",
// // // //     birthPlaceA: "",
// // // //     fullNameB: "",
// // // //     dobB: "",
// // // //     timeSlotB: "",
// // // //     birthPlaceB: "",
// // // //     date: "",
// // // //   });
// // // //   const [backendData, setBackendData] = useState(null);
// // // //   const [loading, setLoading] = useState(false);

// // // //   const navLinks = [
// // // //     { name: "Home", link: "/", icon: "🏠" },
// // // //     { name: "About Us", link: "/about-us", icon: "✨" },
// // // //     { name: "Energy", link: "/energy", icon: "⚡" },
// // // //     { name: "Movement", link: "/movement", icon: "🌊" },
// // // //     { name: "Space Vastu", link: "/space-vastu", icon: "🏛️" },
// // // //     { name: "Manifestation", link: "/manifestation", icon: "💫" },
// // // //     { name: "Material", link: "/material", icon: "💎" },
// // // //     { name: "Blogs", link: "/blogs", icon: "📝" },
// // // //     { name: "Careers", link: "/careers", icon: "💼" },
// // // //     { name: "Contact", link: "/contact", icon: "📧" },
// // // //     { name: "Login / Signup", link: "/auth", icon: "🔐" },
// // // //   ];

// // // //   const handleCalculatorSelect = (calc) => {
// // // //     setSelectedCalculator(calc);
// // // //     setStep(2);
// // // //   };

// // // //   const handleChange = (e) => {
// // // //     const { name, value } = e.target;
// // // //     setFormData((prev) => ({ ...prev, [name]: value }));
// // // //   };

// // // //   const validateForm = () => {
// // // //     if (!selectedCalculator) return false;
// // // //     const type = selectedCalculator.label;
// // // //     if (type === "Compatibility") {
// // // //       const requiredA = ["fullNameA", "dobA", "birthPlaceA", "timeSlotA"];
// // // //       const requiredB = ["fullNameB", "dobB", "birthPlaceB", "timeSlotB"];
// // // //       for (let f of [...requiredA, ...requiredB]) {
// // // //         if (!formData[f]) {
// // // //           alert("Please fill all fields for Person A and B");
// // // //           return false;
// // // //         }
// // // //       }
// // // //     } else if (type === "Numerology" && (!formData.fullName || !formData.dob)) {
// // // //       alert("Please fill Name and Date of Birth");
// // // //       return false;
// // // //     } else if (type === "Daily Predictions" && !formData.date) {
// // // //       alert("Please select a date");
// // // //       return false;
// // // //     } else if (
// // // //       !["Numerology", "Daily Predictions"].includes(type) &&
// // // //       (!formData.dob || !formData.timeSlot || !formData.birthPlace)
// // // //     ) {
// // // //       alert("Please fill Date, Time, and Place of Birth");
// // // //       return false;
// // // //     }
// // // //     return true;
// // // //   };

// // // //   const handleFormSubmit = async () => {
// // // //     if (!validateForm()) return;
// // // //     setLoading(true);
// // // //     setBackendData(null);

// // // //     let response;
// // // //     try {
// // // //       switch (selectedCalculator.label) {
// // // //         case "Kundli":
// // // //           response = await KundliAPI.calculate(formData);
// // // //           break;
// // // //         case "Numerology":
// // // //           response = await NumerologyAPI.calculate(formData);
// // // //           break;
// // // //         case "Compatibility":
// // // //           response = await CompatibilityAPI.calculate(formData);
// // // //           break;
// // // //         case "Gemstone Recommendation":
// // // //           response = await GemstoneAPI.calculate(formData);
// // // //           break;
// // // //         case "Dasha (Vimshottari)":
// // // //           response = await DashaAPI.calculate(formData);
// // // //           break;
// // // //         case "Manglik Calculator":
// // // //           response = await ManglikAPI.calculate(formData);
// // // //           break;
// // // //         case "Nakshatra Calculator":
// // // //           response = await NakshatraAPI.calculate(formData);
// // // //           break;
// // // //         case "Planetary Calculator":
// // // //           response = await PlanetaryAPI.calculate(formData);
// // // //           break;
// // // //         case "Transit Calculator":
// // // //           response = await TransitAPI.calculate(formData);
// // // //           break;
// // // //         case "Zodiac Calculator":
// // // //           response = await ZodiacAPI.calculate(formData);
// // // //           break;
// // // //         case "Daily Predictions":
// // // //           response = await DailyPredictionAPI.create(formData);
// // // //           break;
// // // //         case "Horoscope":
// // // //           response = await HoroscopeAPI.calculate(formData);
// // // //           break;
// // // //         default:
// // // //           response = { data: { message: "No API mapped!" } };
// // // //       }
// // // //       setBackendData(response.data);
// // // //       setStep(3);
// // // //     } catch (error) {
// // // //       setBackendData({ error: error.message || "API Error" });
// // // //       setStep(3);
// // // //     } finally {
// // // //       setLoading(false);
// // // //     }
// // // //   };

// // // //   const resetForm = () => {
// // // //     setStep(1);
// // // //     setSelectedCalculator(null);
// // // //     setBackendData(null);
// // // //     setFormData({
// // // //       fullName: "",
// // // //       dob: "",
// // // //       timeSlot: "",
// // // //       birthPlace: "",
// // // //       fullNameA: "",
// // // //       dobA: "",
// // // //       timeSlotA: "",
// // // //       birthPlaceA: "",
// // // //       fullNameB: "",
// // // //       dobB: "",
// // // //       timeSlotB: "",
// // // //       birthPlaceB: "",
// // // //       date: "",
// // // //     });
// // // //   };

// // // //   const renderStars = (count) =>
// // // //     Array.from({ length: count }).map((_, i) => (
// // // //       <div
// // // //         key={i}
// // // //         style={{
// // // //           position: "absolute",
// // // //           top: `${Math.random() * 100}%`,
// // // //           left: `${Math.random() * 100}%`,
// // // //           width: `${1 + Math.random() * 2}px`,
// // // //           height: `${1 + Math.random() * 2}px`,
// // // //           background: "#fff",
// // // //           borderRadius: "50%",
// // // //           animation: `twinkle ${2 + Math.random() * 3}s linear infinite`,
// // // //         }}
// // // //       />
// // // //     ));

// // // //   return (
// // // //     <div
// // // //       style={{
// // // //         display: "flex",
// // // //         minHeight: "100vh",
// // // //         background: "radial-gradient(circle at top, #0a0018, #1e003f)",
// // // //         fontFamily: "'Poppins', sans-serif",
// // // //         color: "#fff",
// // // //         overflow: "hidden",
// // // //         position: "relative",
// // // //       }}
// // // //     >
// // // //       <style>{`
// // // //         @keyframes twinkle {
// // // //           0%, 100% { opacity: 0.3; }
// // // //           50% { opacity: 1; }
// // // //         }
// // // //         @keyframes spin { to { transform: rotate(360deg); } }
// // // //         @keyframes glowMove {
// // // //           0% { background-position: 0% 50%; }
// // // //           50% { background-position: 100% 50%; }
// // // //           100% { background-position: 0% 50%; }
// // // //         }
// // // //       `}</style>

// // // //       <div style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0 }}>{renderStars(80)}</div>

// // // //       {/* Sidebar - same as Home.jsx */}
// // // //       <div
// // // //         className={`sidebar ${sidebarOpen ? "open" : ""}`}
// // // //         style={{
// // // //           position: "fixed",
// // // //           top: 0,
// // // //           left: sidebarOpen ? 0 : "-270px",
// // // //           width: "270px",
// // // //           height: "100vh",
// // // //           background: "linear-gradient(180deg, rgba(20,0,40,0.95), rgba(5,0,20,0.9))",
// // // //           backdropFilter: "blur(14px)",
// // // //           boxShadow: "6px 0 25px rgba(255, 0, 255, 0.25)",
// // // //           transition: "left 0.5s ease-in-out",
// // // //           zIndex: 1000,
// // // //           padding: "30px 20px",
// // // //         }}
// // // //       >
// // // //         <h2
// // // //           style={{
// // // //             fontSize: "28px",
// // // //             fontWeight: 700,
// // // //             textAlign: "center",
// // // //             background: "linear-gradient(90deg, #ff00ff, #00ffff)",
// // // //             WebkitBackgroundClip: "text",
// // // //             WebkitTextFillColor: "transparent",
// // // //             marginBottom: "35px",
// // // //           }}
// // // //         >
// // // //           ✨ AstroConnect
// // // //         </h2>
// // // //         <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
// // // //           {navLinks.map((item, idx) => (
// // // //             <li key={idx} style={{ margin: "14px 0" }}>
// // // //               <a
// // // //                 href={item.link}
// // // //                 style={{
// // // //                   color: "#ccc",
// // // //                   display: "flex",
// // // //                   alignItems: "center",
// // // //                   gap: "10px",
// // // //                   padding: "12px 18px",
// // // //                   borderRadius: "10px",
// // // //                   textDecoration: "none",
// // // //                   fontSize: "1rem",
// // // //                   fontWeight: 500,
// // // //                   transition: "all 0.3s ease",
// // // //                 }}
// // // //                 onMouseEnter={(e) => {
// // // //                   e.target.style.color = "#fff";
// // // //                   e.target.style.background = "rgba(255,255,255,0.1)";
// // // //                 }}
// // // //                 onMouseLeave={(e) => {
// // // //                   e.target.style.color = "#ccc";
// // // //                   e.target.style.background = "transparent";
// // // //                 }}
// // // //               >
// // // //                 <span style={{ fontSize: "1.4rem" }}>{item.icon}</span>
// // // //                 {item.name}
// // // //               </a>
// // // //             </li>
// // // //           ))}
// // // //         </ul>
// // // //       </div>

// // // //       {/* Hamburger */}
// // // //       <button
// // // //         onClick={() => setSidebarOpen(!sidebarOpen)}
// // // //         style={{
// // // //           position: "fixed",
// // // //           top: "22px",
// // // //           left: "25px",
// // // //           background: "linear-gradient(135deg, #ff00ff, #7b2cbf)",
// // // //           color: "#fff",
// // // //           border: "none",
// // // //           fontSize: "26px",
// // // //           borderRadius: "50%",
// // // //           width: "55px",
// // // //           height: "55px",
// // // //           cursor: "pointer",
// // // //           zIndex: 1100,
// // // //           boxShadow: "0 0 25px rgba(255, 0, 255, 0.4)",
// // // //           transition: "all 0.3s ease-in-out",
// // // //           transform: sidebarOpen ? "rotate(90deg)" : "none",
// // // //         }}
// // // //       >
// // // //         ☰
// // // //       </button>

// // // //       {/* Main Content */}
// // // //       <div
// // // //         style={{
// // // //           flex: 1,
// // // //           padding: "6rem 3rem 4rem",
// // // //           maxWidth: "1600px",
// // // //           margin: "0 auto",
// // // //           zIndex: 5,
// // // //           marginLeft: sidebarOpen ? "270px" : "0",
// // // //           transition: "margin-left 0.6s ease",
// // // //         }}
// // // //       >
// // // //         <h1
// // // //           style={{
// // // //             fontSize: "2.5rem",
// // // //             fontWeight: 700,
// // // //             textAlign: "center",
// // // //             marginBottom: "1rem",
// // // //             display: "flex",
// // // //             alignItems: "center",
// // // //             justifyContent: "center",
// // // //             gap: "10px",
// // // //           }}
// // // //         >
// // // //           <Sparkles size={26} /> Astro Calculators
// // // //         </h1>

// // // //         <p
// // // //           style={{
// // // //             textAlign: "center",
// // // //             fontSize: "1.1rem",
// // // //             marginBottom: "3rem",
// // // //           }}
// // // //         >
// // // //           Unlock astrological insights and align with your cosmic blueprint 🌙
// // // //         </p>

// // // //         {/* === Step 1: Calculator Grid === */}
// // // //         {step === 1 && (
// // // //           <div
// // // //             style={{
// // // //               display: "grid",
// // // //               gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))",
// // // //               gap: "2.5rem",
// // // //               width: "100%",
// // // //               maxWidth: "1300px",
// // // //               margin: "0 auto",
// // // //               padding: "2rem 2rem 4rem",
// // // //             }}
// // // //           >
// // // //             {calculators.map((calc, idx) => (
// // // //               <div
// // // //                 key={idx}
// // // //                 onClick={() => handleCalculatorSelect(calc)}
// // // //                 style={{
// // // //                   background: "rgba(255, 255, 255, 0.2)",
// // // //                   backdropFilter: "blur(15px)",
// // // //                   borderRadius: "22px",
// // // //                   padding: "2rem 1.6rem",
// // // //                   textAlign: "center",
// // // //                   cursor: "pointer",
// // // //                   transition: "all 0.4s ease",
// // // //                   width: "100%",
// // // //                   maxWidth: "270px",
// // // //                   minHeight: "280px",
// // // //                   display: "flex",
// // // //                   flexDirection: "column",
// // // //                   justifyContent: "space-between",
// // // //                   boxShadow: "0 0 25px rgba(255, 0, 255, 0.15)",
// // // //                   border: "1px solid rgba(255, 255, 255, 0.1)",
// // // //                 }}
// // // //                 onMouseEnter={(e) => {
// // // //                   e.currentTarget.style.transform = "translateY(-10px) scale(1.05)";
// // // //                   e.currentTarget.style.boxShadow = "0 0 40px rgba(255, 0, 255, 0.45)";
// // // //                 }}
// // // //                 onMouseLeave={(e) => {
// // // //                   e.currentTarget.style.transform = "translateY(0) scale(1)";
// // // //                   e.currentTarget.style.boxShadow = "0 0 25px rgba(255, 0, 255, 0.15)";
// // // //                 }}
// // // //               >
// // // //                 <span style={{ fontSize: "3.5rem", marginBottom: "0.5rem" }}>{calc.icon}</span>
// // // //                 <h3
// // // //                   style={{
// // // //                     fontSize: "1.45rem",
// // // //                     fontWeight: 700,
// // // //                     background: "linear-gradient(90deg, #ffffff, #aef5ff)",
// // // //                     WebkitBackgroundClip: "text",
// // // //                     WebkitTextFillColor: "transparent",
// // // //                   }}
// // // //                 >
// // // //                   {calc.label}
// // // //                 </h3>
// // // //                 <p style={{ color: "#e7e4ff", fontSize: "0.95rem", lineHeight: 1.4 }}>{calc.desc}</p>
// // // //                 <p>Deliverable: {calc.deliverable}</p>
// // // //                 <p>Price: {calc.price}</p>
// // // //               </div>
// // // //             ))}
// // // //           </div>
// // // //         )}

// // // //         {/* === Step 2: Form === */}
// // // //         {step === 2 && (
// // // //           <div
// // // //             style={{
// // // //               background: "rgba(255,255,255,0.13)",
// // // //               backdropFilter: "blur(17px)",
// // // //               borderRadius: "24px",
// // // //               padding: "3rem 2rem",
// // // //               maxWidth: "720px",
// // // //               margin: "3rem auto",
// // // //               textAlign: "center",
// // // //             }}
// // // //           >
// // // //             <h2 style={{ fontSize: "2rem", marginBottom: "2rem" }}>
// // // //               {selectedCalculator.icon} {selectedCalculator.label}
// // // //             </h2>
// // // //             <div>
// // // //               {/* Conditional Inputs */}
// // // //               {selectedCalculator.label === "Compatibility" ? (
// // // //                 <>
// // // //                   <h4 style={{ color: "#aef5ff" }}>Person A</h4>
// // // //                   <input name="fullNameA" placeholder="Full Name" onChange={handleChange} />
// // // //                   <input type="date" name="dobA" onChange={handleChange} />
// // // //                   <input name="birthPlaceA" placeholder="Place of Birth" onChange={handleChange} />
// // // //                   <input type="time" name="timeSlotA" onChange={handleChange} />
// // // //                   <h4 style={{ color: "#aef5ff" }}>Person B</h4>
// // // //                   <input name="fullNameB" placeholder="Full Name" onChange={handleChange} />
// // // //                   <input type="date" name="dobB" onChange={handleChange} />
// // // //                   <input name="birthPlaceB" placeholder="Place of Birth" onChange={handleChange} />
// // // //                   <input type="time" name="timeSlotB" onChange={handleChange} />
// // // //                 </>
// // // //               ) : selectedCalculator.label === "Numerology" ? (
// // // //                 <>
// // // //                   <input name="fullName" placeholder="Full Name" onChange={handleChange} />
// // // //                   <input type="date" name="dob" onChange={handleChange} />
// // // //                 </>
// // // //               ) : selectedCalculator.label === "Daily Predictions" ? (
// // // //                 <input type="date" name="date" onChange={handleChange} />
// // // //               ) : (
// // // //                 <>
// // // //                   <input name="fullName" placeholder="Full Name" onChange={handleChange} />
// // // //                   <input type="date" name="dob" onChange={handleChange} />
// // // //                   <input type="time" name="timeSlot" onChange={handleChange} />
// // // //                   <input name="birthPlace" placeholder="Place of Birth" onChange={handleChange} />
// // // //                 </>
// // // //               )}

// // // //               <button
// // // //                 onClick={handleFormSubmit}
// // // //                 disabled={loading}
// // // //                 style={{
// // // //                   display: "inline-flex",
// // // //                   alignItems: "center",
// // // //                   gap: "8px",
// // // //                   background: "linear-gradient(90deg, #ff00ff, #8a2be2, #00ffff)",
// // // //                   border: "none",
// // // //                   color: "#fff",
// // // //                   padding: "14px 36px",
// // // //                   borderRadius: "40px",
// // // //                   fontWeight: "600",
// // // //                   marginTop: "1rem",
// // // //                 }}
// // // //               >
// // // //                 {loading ? (
// // // //                   <Loader2 size={20} style={{ animation: "spin 1s linear infinite" }} />
// // // //                 ) : (
// // // //                   "Get Report 💫"
// // // //                 )}
// // // //               </button>
// // // //             </div>
// // // //           </div>
// // // //         )}

// // // //         {/* === Step 3: Report === */}
// // // //         {step === 3 && (
// // // //           <div
// // // //             style={{
// // // //               background: "rgba(255,255,255,0.13)",
// // // //               borderRadius: "24px",
// // // //               padding: "3rem 2rem",
// // // //               maxWidth: "720px",
// // // //               margin: "3rem auto",
// // // //               textAlign: "center",
// // // //             }}
// // // //           >
// // // //             <h2>
// // // //               {selectedCalculator.icon} Your {selectedCalculator.label} Report
// // // //             </h2>
// // // //             <div
// // // //               style={{
// // // //                 background: "rgba(255,255,255,0.1)",
// // // //                 padding: "2rem",
// // // //                 borderRadius: "15px",
// // // //                 marginBottom: "2rem",
// // // //                 whiteSpace: "pre-wrap",
// // // //                 textAlign: "left",
// // // //               }}
// // // //             >
// // // //               {backendData ? JSON.stringify(backendData, null, 2) : "No data available"}
// // // //             </div>
// // // //             <button
// // // //               onClick={resetForm}
// // // //               style={{
// // // //                 background: "linear-gradient(90deg, #ff00ff, #8a2be2, #00ffff)",
// // // //                 border: "none",
// // // //                 color: "#fff",
// // // //                 padding: "14px 36px",
// // // //                 borderRadius: "40px",
// // // //                 fontWeight: "600",
// // // //                 cursor: "pointer",
// // // //               }}
// // // //             >
// // // //               Back to Calculators
// // // //             </button>
// // // //           </div>
// // // //         )}
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Movement;

// // // // // import React, { useState } from "react";
// // // // // import { Loader2, Sparkles } from "lucide-react";
// // // // // import KundliReport from "./reports/KundliReport";
// // // // // import NumerologyReport from "./reports/NumerologyReport";
// // // // // import CompatibilityReport from "./reports/CompatibilityReport";
// // // // // import {
// // // // //   KundliAPI,
// // // // //   NumerologyAPI,
// // // // //   CompatibilityAPI,
// // // // //   GemstoneAPI,
// // // // //   PanchangAPI,
// // // // //   PlanetaryAPI,
// // // // //   TransitAPI,
// // // // //   ZodiacAPI,
// // // // //   ManglikAPI,
// // // // //   DashaAPI,
// // // // //   NakshatraAPI,
// // // // //   DailyPredictionAPI,
// // // // //   HoroscopeAPI,
// // // // // } from "../../api/apiService";

// // // // // const calculators = [
// // // // //   { label: "Kundli", deliverable: "Chart", price: "Free", icon: "🔮", desc: "Generate your complete birth chart with planetary positions" },
// // // // //   { label: "Numerology", deliverable: "Report", price: "Free", icon: "🔢", desc: "Discover your life path number and destiny insights" },
// // // // //   { label: "Compatibility", deliverable: "PDF", price: "Paid", icon: "💕", desc: "Analyze relationship compatibility between two souls" },
// // // // //   { label: "Gemstone Recommendation", deliverable: "Report", price: "Paid", icon: "💎", desc: "Find your lucky gemstones based on planetary alignment" },
// // // // //   { label: "Dasha (Vimshottari)", deliverable: "Report", price: "Paid", icon: "⏳", desc: "Explore your planetary periods and life phases" },
// // // // //   { label: "Manglik Calculator", deliverable: "Report", price: "Paid", icon: "🔥", desc: "Check Manglik dosha and its effects on your life" },
// // // // //   { label: "Nakshatra Calculator", deliverable: "Report", price: "Paid", icon: "⭐", desc: "Discover your birth star and its cosmic influence" },
// // // // //   { label: "Planetary Calculator", deliverable: "Report", price: "Paid", icon: "🪐", desc: "Analyze planetary strengths and their impact" },
// // // // //   { label: "Transit Calculator", deliverable: "Report", price: "Paid", icon: "🌍", desc: "Track current planetary movements affecting you" },
// // // // //   { label: "Zodiac Calculator", deliverable: "Report", price: "Free", icon: "♈", desc: "Find your sun, moon, and rising zodiac signs" },
// // // // //   { label: "Daily Predictions", deliverable: "Report", price: "Paid", icon: "📅", desc: "Get personalized daily astrological guidance" },
// // // // //   { label: "Horoscope", deliverable: "Report", price: "Free", icon: "🌙", desc: "Read your detailed horoscope and predictions" },
// // // // // ];

// // // // // const Movement = () => {
// // // // //   const [sidebarOpen, setSidebarOpen] = useState(false);
// // // // //   const [step, setStep] = useState(1);
// // // // //   const [selectedCalculator, setSelectedCalculator] = useState(null);
// // // // //   const [formData, setFormData] = useState({
// // // // //     fullName: "",
// // // // //     dob: "",
// // // // //     timeSlot: "",
// // // // //     birthPlace: "",
// // // // //     fullNameA: "",
// // // // //     dobA: "",
// // // // //     timeSlotA: "",
// // // // //     birthPlaceA: "",
// // // // //     fullNameB: "",
// // // // //     dobB: "",
// // // // //     timeSlotB: "",
// // // // //     birthPlaceB: "",
// // // // //     date: "",
// // // // //   });
// // // // //   const [backendData, setBackendData] = useState(null);
// // // // //   const [loading, setLoading] = useState(false);

// // // // //   const navLinks = [
// // // // //     { name: "Home", link: "/", icon: "🏠" },
// // // // //     { name: "About Us", link: "/about-us", icon: "✨" },
// // // // //     { name: "Energy", link: "/energy", icon: "⚡" },
// // // // //     { name: "Movement", link: "/movement", icon: "🌊" },
// // // // //     { name: "Space Vastu", link: "/space-vastu", icon: "🏛️" },
// // // // //     { name: "Manifestation", link: "/manifestation", icon: "💫" },
// // // // //     { name: "Material", link: "/material", icon: "💎" },
// // // // //     { name: "Blogs", link: "/blogs", icon: "📝" },
// // // // //     { name: "Careers", link: "/careers", icon: "💼" },
// // // // //     { name: "Contact", link: "/contact", icon: "📧" },
// // // // //     { name: "Login / Signup", link: "/auth", icon: "🔐" },
// // // // //   ];

// // // // //   const handleCalculatorSelect = (calc) => {
// // // // //     setSelectedCalculator(calc);
// // // // //     setStep(2);
// // // // //   };

// // // // //   const handleChange = (e) => {
// // // // //     const { name, value } = e.target;
// // // // //     setFormData((prev) => ({ ...prev, [name]: value }));
// // // // //   };

// // // // //   const validateForm = () => {
// // // // //     if (!selectedCalculator) return false;
// // // // //     const type = selectedCalculator.label;
// // // // //     if (type === "Compatibility") {
// // // // //       const requiredA = ["fullNameA", "dobA", "birthPlaceA", "timeSlotA"];
// // // // //       const requiredB = ["fullNameB", "dobB", "birthPlaceB", "timeSlotB"];
// // // // //       for (let f of [...requiredA, ...requiredB]) {
// // // // //         if (!formData[f]) {
// // // // //           alert("Please fill all fields for Person A and B");
// // // // //           return false;
// // // // //         }
// // // // //       }
// // // // //     } else if (type === "Numerology" && (!formData.fullName || !formData.dob)) {
// // // // //       alert("Please fill Name and Date of Birth");
// // // // //       return false;
// // // // //     } else if (type === "Daily Predictions" && !formData.date) {
// // // // //       alert("Please select a date");
// // // // //       return false;
// // // // //     } else if (
// // // // //       !["Numerology", "Daily Predictions"].includes(type) &&
// // // // //       (!formData.dob || !formData.timeSlot || !formData.birthPlace)
// // // // //     ) {
// // // // //       alert("Please fill Date, Time, and Place of Birth");
// // // // //       return false;
// // // // //     }
// // // // //     return true;
// // // // //   };

// // // // //   const handleFormSubmit = async () => {
// // // // //     if (!validateForm()) return;
// // // // //     setLoading(true);
// // // // //     setBackendData(null);

// // // // //     let response;
// // // // //     try {
// // // // //       switch (selectedCalculator.label) {
// // // // //         case "Kundli":
// // // // //           response = await KundliAPI.calculate(formData);
// // // // //           break;
// // // // //         case "Numerology":
// // // // //           response = await NumerologyAPI.calculate(formData);
// // // // //           break;
// // // // //         case "Compatibility":
// // // // //           response = await CompatibilityAPI.calculate(formData);
// // // // //           break;
// // // // //         case "Gemstone Recommendation":
// // // // //           response = await GemstoneAPI.calculate(formData);
// // // // //           break;
// // // // //         case "Dasha (Vimshottari)":
// // // // //           response = await DashaAPI.calculate(formData);
// // // // //           break;
// // // // //         case "Manglik Calculator":
// // // // //           response = await ManglikAPI.calculate(formData);
// // // // //           break;
// // // // //         case "Nakshatra Calculator":
// // // // //           response = await NakshatraAPI.calculate(formData);
// // // // //           break;
// // // // //         case "Planetary Calculator":
// // // // //           response = await PlanetaryAPI.calculate(formData);
// // // // //           break;
// // // // //         case "Transit Calculator":
// // // // //           response = await TransitAPI.calculate(formData);
// // // // //           break;
// // // // //         case "Zodiac Calculator":
// // // // //           response = await ZodiacAPI.calculate(formData);
// // // // //           break;
// // // // //         case "Daily Predictions":
// // // // //           response = await DailyPredictionAPI.create(formData);
// // // // //           break;
// // // // //         case "Horoscope":
// // // // //           response = await HoroscopeAPI.calculate(formData);
// // // // //           break;
// // // // //         default:
// // // // //           response = { data: { message: "No API mapped!" } };
// // // // //       }
// // // // //       setBackendData(response.data);
// // // // //       setStep(3);
// // // // //     } catch (error) {
// // // // //       setBackendData({ error: error.message || "API Error" });
// // // // //       setStep(3);
// // // // //     } finally {
// // // // //       setLoading(false);
// // // // //     }
// // // // //   };

// // // // //   const resetForm = () => {
// // // // //     setStep(1);
// // // // //     setSelectedCalculator(null);
// // // // //     setBackendData(null);
// // // // //     setFormData({
// // // // //       fullName: "",
// // // // //       dob: "",
// // // // //       timeSlot: "",
// // // // //       birthPlace: "",
// // // // //       fullNameA: "",
// // // // //       dobA: "",
// // // // //       timeSlotA: "",
// // // // //       birthPlaceA: "",
// // // // //       fullNameB: "",
// // // // //       dobB: "",
// // // // //       timeSlotB: "",
// // // // //       birthPlaceB: "",
// // // // //       date: "",
// // // // //     });
// // // // //   };

// // // // //   const renderStars = (count) =>
// // // // //     Array.from({ length: count }).map((_, i) => (
// // // // //       <div
// // // // //         key={i}
// // // // //         style={{
// // // // //           position: "absolute",
// // // // //           top: `${Math.random() * 100}%`,
// // // // //           left: `${Math.random() * 100}%`,
// // // // //           width: `${1 + Math.random() * 2}px`,
// // // // //           height: `${1 + Math.random() * 2}px`,
// // // // //           background: "#fff",
// // // // //           borderRadius: "50%",
// // // // //           animation: `twinkle ${2 + Math.random() * 3}s linear infinite`,
// // // // //         }}
// // // // //       />
// // // // //     ));

// // // // //   return (
// // // // //     <div
// // // // //       style={{
// // // // //         display: "flex",
// // // // //         minHeight: "100vh",
// // // // //         background: "radial-gradient(circle at top, #0a0018, #1e003f)",
// // // // //         fontFamily: "'Poppins', sans-serif",
// // // // //         color: "#fff",
// // // // //         overflow: "hidden",
// // // // //         position: "relative",
// // // // //       }}
// // // // //     >
// // // // //       <style>{`
// // // // //         @keyframes twinkle {
// // // // //           0%, 100% { opacity: 0.3; }
// // // // //           50% { opacity: 1; }
// // // // //         }
// // // // //         @keyframes spin { to { transform: rotate(360deg); } }
// // // // //       `}</style>

// // // // //       <div style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0 }}>{renderStars(80)}</div>

// // // // //       {/* Sidebar */}
// // // // //       <div
// // // // //         className={`sidebar ${sidebarOpen ? "open" : ""}`}
// // // // //         style={{
// // // // //           position: "fixed",
// // // // //           top: 0,
// // // // //           left: sidebarOpen ? 0 : "-270px",
// // // // //           width: "270px",
// // // // //           height: "100vh",
// // // // //           background: "linear-gradient(180deg, rgba(20,0,40,0.95), rgba(5,0,20,0.9))",
// // // // //           backdropFilter: "blur(14px)",
// // // // //           boxShadow: "6px 0 25px rgba(255, 0, 255, 0.25)",
// // // // //           transition: "left 0.5s ease-in-out",
// // // // //           zIndex: 1000,
// // // // //           padding: "30px 20px",
// // // // //         }}
// // // // //       >
// // // // //         {sidebarOpen && (
// // // // //           <button
// // // // //             onClick={() => setSidebarOpen(false)}
// // // // //             style={{
// // // // //               position: "absolute",
// // // // //               top: "18px",
// // // // //               right: "18px",
// // // // //               background: "linear-gradient(135deg, #ff00ff, #8a2be2)",
// // // // //               border: "none",
// // // // //               color: "#fff",
// // // // //               fontSize: "20px",
// // // // //               width: "40px",
// // // // //               height: "40px",
// // // // //               borderRadius: "50%",
// // // // //               cursor: "pointer",
// // // // //               boxShadow: "0 0 15px rgba(255, 0, 255, 0.4)",
// // // // //               transition: "all 0.3s ease",
// // // // //             }}
// // // // //             onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1) rotate(90deg)")}
// // // // //             onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1) rotate(0deg)")}
// // // // //           >
// // // // //             ✕
// // // // //           </button>
// // // // //         )}

// // // // //         <h2
// // // // //           style={{
// // // // //             fontSize: "28px",
// // // // //             fontWeight: 700,
// // // // //             textAlign: "center",
// // // // //             background: "linear-gradient(90deg, #ff00ff, #00ffff)",
// // // // //             WebkitBackgroundClip: "text",
// // // // //             WebkitTextFillColor: "transparent",
// // // // //             marginBottom: "35px",
// // // // //           }}
// // // // //         >
// // // // //           ✨ AstroConnect
// // // // //         </h2>
// // // // //         <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
// // // // //           {navLinks.map((item, idx) => (
// // // // //             <li key={idx} style={{ margin: "14px 0" }}>
// // // // //               <a
// // // // //                 href={item.link}
// // // // //                 onClick={() => setSidebarOpen(false)}
// // // // //                 style={{
// // // // //                   color: "#ccc",
// // // // //                   display: "flex",
// // // // //                   alignItems: "center",
// // // // //                   gap: "10px",
// // // // //                   padding: "12px 18px",
// // // // //                   borderRadius: "10px",
// // // // //                   textDecoration: "none",
// // // // //                   fontSize: "1rem",
// // // // //                   fontWeight: 500,
// // // // //                   transition: "all 0.3s ease",
// // // // //                 }}
// // // // //               >
// // // // //                 <span style={{ fontSize: "1.4rem" }}>{item.icon}</span>
// // // // //                 {item.name}
// // // // //               </a>
// // // // //             </li>
// // // // //           ))}
// // // // //         </ul>
// // // // //       </div>

// // // // //       {/* Hamburger */}
// // // // //       {!sidebarOpen && (
// // // // //         <button
// // // // //           onClick={() => setSidebarOpen(true)}
// // // // //           style={{
// // // // //             position: "fixed",
// // // // //             top: "22px",
// // // // //             left: "25px",
// // // // //             background: "linear-gradient(135deg, #ff00ff, #7b2cbf)",
// // // // //             color: "#fff",
// // // // //             border: "none",
// // // // //             fontSize: "26px",
// // // // //             borderRadius: "50%",
// // // // //             width: "55px",
// // // // //             height: "55px",
// // // // //             cursor: "pointer",
// // // // //             zIndex: 1100,
// // // // //             boxShadow: "0 0 25px rgba(255, 0, 255, 0.4)",
// // // // //             transition: "all 0.3s ease-in-out",
// // // // //           }}
// // // // //         >
// // // // //           ☰
// // // // //         </button>
// // // // //       )}

// // // // //       {/* Main Content */}
// // // // //       <div
// // // // //         style={{
// // // // //           flex: 1,
// // // // //           padding: "6rem 3rem 4rem",
// // // // //           maxWidth: "1600px",
// // // // //           margin: "0 auto",
// // // // //           zIndex: 5,
// // // // //           marginLeft: sidebarOpen ? "270px" : "0",
// // // // //           transition: "margin-left 0.6s ease",
// // // // //         }}
// // // // //       >
// // // // //         <h1
// // // // //           style={{
// // // // //             fontSize: "2.5rem",
// // // // //             fontWeight: 700,
// // // // //             textAlign: "center",
// // // // //             marginBottom: "1rem",
// // // // //             display: "flex",
// // // // //             alignItems: "center",
// // // // //             justifyContent: "center",
// // // // //             gap: "10px",
// // // // //           }}
// // // // //         >
// // // // //           <Sparkles size={26} /> Astro Calculators
// // // // //         </h1>
// // // // //         <p
// // // // //           style={{
// // // // //             textAlign: "center",
// // // // //             fontSize: "1.1rem",
// // // // //             marginBottom: "3rem",
// // // // //           }}
// // // // //         >
// // // // //           Unlock astrological insights and align with your cosmic blueprint 🌙
// // // // //         </p>

// // // // //         {/* === Steps and Reports (unchanged) === */}
// // // // //         {step === 1 && (
// // // // //           <div
// // // // //             style={{
// // // // //               display: "grid",
// // // // //               gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))",
// // // // //               gap: "2.5rem",
// // // // //               width: "100%",
// // // // //               maxWidth: "1300px",
// // // // //               margin: "0 auto",
// // // // //               padding: "2rem 2rem 4rem",
// // // // //             }}
// // // // //           >
// // // // //             {calculators.map((calc, idx) => (
// // // // //               <div
// // // // //                 key={idx}
// // // // //                 onClick={() => handleCalculatorSelect(calc)}
// // // // //                 style={{
// // // // //                   background: "rgba(255, 255, 255, 0.2)",
// // // // //                   backdropFilter: "blur(15px)",
// // // // //                   borderRadius: "22px",
// // // // //                   padding: "2rem 1.6rem",
// // // // //                   textAlign: "center",
// // // // //                   cursor: "pointer",
// // // // //                   transition: "all 0.4s ease",
// // // // //                   width: "100%",
// // // // //                   maxWidth: "270px",
// // // // //                   minHeight: "280px",
// // // // //                   display: "flex",
// // // // //                   flexDirection: "column",
// // // // //                   justifyContent: "space-between",
// // // // //                   boxShadow: "0 0 25px rgba(255, 0, 255, 0.15)",
// // // // //                   border: "1px solid rgba(255, 255, 255, 0.1)",
// // // // //                 }}
// // // // //               >
// // // // //                 <span style={{ fontSize: "3.5rem", marginBottom: "0.5rem" }}>{calc.icon}</span>
// // // // //                 <h3
// // // // //                   style={{
// // // // //                     fontSize: "1.45rem",
// // // // //                     fontWeight: 700,
// // // // //                     background: "linear-gradient(90deg, #ffffff, #aef5ff)",
// // // // //                     WebkitBackgroundClip: "text",
// // // // //                     WebkitTextFillColor: "transparent",
// // // // //                   }}
// // // // //                 >
// // // // //                   {calc.label}
// // // // //                 </h3>
// // // // //                 <p style={{ color: "#e7e4ff", fontSize: "0.95rem", lineHeight: 1.4 }}>{calc.desc}</p>
// // // // //                 <p>Deliverable: {calc.deliverable}</p>
// // // // //                 <p>Price: {calc.price}</p>
// // // // //               </div>
// // // // //             ))}
// // // // //           </div>
// // // // //         )}

// // // // //         {/* Steps 2 and 3 remain exactly as before */}
// // // // //         {step === 2 && (
// // // // //           <div style={{ background: "rgba(255,255,255,0.13)", padding: "3rem 2rem", borderRadius: "24px", maxWidth: "720px", margin: "3rem auto", textAlign: "center" }}>
// // // // //             <h2 style={{ fontSize: "2rem", marginBottom: "2rem" }}>{selectedCalculator.icon} {selectedCalculator.label}</h2>
// // // // //             {/* Inputs logic same */}
// // // // //             <button onClick={handleFormSubmit} disabled={loading} style={{ background: "linear-gradient(90deg, #ff00ff, #8a2be2, #00ffff)", border: "none", color: "#fff", padding: "14px 36px", borderRadius: "40px", fontWeight: "600", marginTop: "1rem" }}>
// // // // //               {loading ? <Loader2 size={20} style={{ animation: "spin 1s linear infinite" }} /> : "Get Report 💫"}
// // // // //             </button>
// // // // //           </div>
// // // // //         )}
// // // // //         {step === 3 && (
// // // // //           <div style={{ background: "rgba(255,255,255,0.13)", borderRadius: "24px", padding: "3rem 2rem", maxWidth: "720px", margin: "3rem auto", textAlign: "center" }}>
// // // // //             <h2>{selectedCalculator.icon} Your {selectedCalculator.label} Report</h2>
// // // // //             <pre style={{ background: "rgba(255,255,255,0.1)", padding: "2rem", borderRadius: "15px", textAlign: "left" }}>
// // // // //               {backendData ? JSON.stringify(backendData, null, 2) : "No data available"}
// // // // //             </pre>
// // // // //             <button onClick={resetForm} style={{ background: "linear-gradient(90deg, #ff00ff, #8a2be2, #00ffff)", border: "none", color: "#fff", padding: "14px 36px", borderRadius: "40px", fontWeight: "600", cursor: "pointer" }}>
// // // // //               Back to Calculators
// // // // //             </button>
// // // // //           </div>
// // // // //         )}
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default Movement;

// // // import React, { useState } from "react";
// // // import { Loader2, Sparkles } from "lucide-react";
// // // import KundliReport from "./reports/KundliReport";
// // // import NumerologyReport from "./reports/NumerologyReport";
// // // import CompatibilityReport from "./reports/CompatibilityReport";
// // // import {
// // //   KundliAPI,
// // //   NumerologyAPI,
// // //   CompatibilityAPI,
// // //   GemstoneAPI,
// // //   PanchangAPI,
// // //   PlanetaryAPI,
// // //   TransitAPI,
// // //   ZodiacAPI,
// // //   ManglikAPI,
// // //   DashaAPI,
// // //   NakshatraAPI,
// // //   DailyPredictionAPI,
// // //   HoroscopeAPI,
// // // } from "../../api/apiService";

// // // const calculators = [
// // //   { label: "Kundli", deliverable: "Chart", price: "Free", icon: "🔮", desc: "Generate your complete birth chart with planetary positions" },
// // //   { label: "Numerology", deliverable: "Report", price: "Free", icon: "🔢", desc: "Discover your life path number and destiny insights" },
// // //   { label: "Compatibility", deliverable: "PDF", price: "Paid", icon: "💕", desc: "Analyze relationship compatibility between two souls" },
// // //   { label: "Gemstone Recommendation", deliverable: "Report", price: "Paid", icon: "💎", desc: "Find your lucky gemstones based on planetary alignment" },
// // //   { label: "Dasha (Vimshottari)", deliverable: "Report", price: "Paid", icon: "⏳", desc: "Explore your planetary periods and life phases" },
// // //   { label: "Manglik Calculator", deliverable: "Report", price: "Paid", icon: "🔥", desc: "Check Manglik dosha and its effects on your life" },
// // //   { label: "Nakshatra Calculator", deliverable: "Report", price: "Paid", icon: "⭐", desc: "Discover your birth star and its cosmic influence" },
// // //   { label: "Planetary Calculator", deliverable: "Report", price: "Paid", icon: "🪐", desc: "Analyze planetary strengths and their impact" },
// // //   { label: "Transit Calculator", deliverable: "Report", price: "Paid", icon: "🌍", desc: "Track current planetary movements affecting you" },
// // //   { label: "Zodiac Calculator", deliverable: "Report", price: "Free", icon: "♈", desc: "Find your sun, moon, and rising zodiac signs" },
// // //   { label: "Daily Predictions", deliverable: "Report", price: "Paid", icon: "📅", desc: "Get personalized daily astrological guidance" },
// // //   { label: "Horoscope", deliverable: "Report", price: "Free", icon: "🌙", desc: "Read your detailed horoscope and predictions" },
// // // ];

// // // const Movement = () => {
// // //   const [sidebarOpen, setSidebarOpen] = useState(false);
// // //   const [step, setStep] = useState(1);
// // //   const [selectedCalculator, setSelectedCalculator] = useState(null);
// // //   const [formData, setFormData] = useState({
// // //     fullName: "",
// // //     dob: "",
// // //     timeSlot: "",
// // //     birthPlace: "",
// // //     fullNameA: "",
// // //     dobA: "",
// // //     timeSlotA: "",
// // //     birthPlaceA: "",
// // //     fullNameB: "",
// // //     dobB: "",
// // //     timeSlotB: "",
// // //     birthPlaceB: "",
// // //     date: "",
// // //   });
// // //   const [backendData, setBackendData] = useState(null);
// // //   const [loading, setLoading] = useState(false);

// // //   const navLinks = [
// // //     { name: "Home", link: "/", icon: "🏠" },
// // //     { name: "About Us", link: "/about-us", icon: "✨" },
// // //     { name: "Energy", link: "/energy", icon: "⚡" },
// // //     { name: "Movement", link: "/movement", icon: "🌊" },
// // //     { name: "Space Vastu", link: "/space-vastu", icon: "🏛️" },
// // //     { name: "Manifestation", link: "/manifestation", icon: "💫" },
// // //     { name: "Material", link: "/material", icon: "💎" },
// // //     { name: "Blogs", link: "/blogs", icon: "📝" },
// // //     { name: "Careers", link: "/careers", icon: "💼" },
// // //     { name: "Contact", link: "/contact", icon: "📧" },
// // //     { name: "Login / Signup", link: "/auth", icon: "🔐" },
// // //   ];

// // //   const handleCalculatorSelect = (calc) => {
// // //     setSelectedCalculator(calc);
// // //     setStep(2);
// // //   };

// // //   const handleChange = (e) => {
// // //     const { name, value } = e.target;
// // //     setFormData((prev) => ({ ...prev, [name]: value }));
// // //   };

// // //   const validateForm = () => {
// // //     if (!selectedCalculator) return false;
// // //     const type = selectedCalculator.label;

// // //     if (type === "Compatibility") {
// // //       const requiredA = ["fullNameA", "dobA", "birthPlaceA", "timeSlotA"];
// // //       const requiredB = ["fullNameB", "dobB", "birthPlaceB", "timeSlotB"];
// // //       for (let f of [...requiredA, ...requiredB]) {
// // //         if (!formData[f]) {
// // //           alert("Please fill all fields for Person A and B");
// // //           return false;
// // //         }
// // //       }
// // //     } else if (type === "Numerology" && (!formData.fullName || !formData.dob)) {
// // //       alert("Please fill Name and Date of Birth");
// // //       return false;
// // //     } else if (type === "Daily Predictions" && !formData.date) {
// // //       alert("Please select a date");
// // //       return false;
// // //     } else if (
// // //       !["Numerology", "Daily Predictions"].includes(type) &&
// // //       (!formData.dob || !formData.timeSlot || !formData.birthPlace)
// // //     ) {
// // //       alert("Please fill Date, Time, and Place of Birth");
// // //       return false;
// // //     }
// // //     return true;
// // //   };

// // //   const handleFormSubmit = async () => {
// // //     if (!validateForm()) return;
// // //     setLoading(true);
// // //     setBackendData(null);

// // //     let response;
// // //     try {
// // //       switch (selectedCalculator.label) {
// // //         case "Kundli":
// // //           response = await KundliAPI.calculate(formData);
// // //           break;
// // //         case "Numerology":
// // //           response = await NumerologyAPI.calculate(formData);
// // //           break;
// // //         case "Compatibility":
// // //           response = await CompatibilityAPI.calculate(formData);
// // //           break;
// // //         case "Gemstone Recommendation":
// // //           response = await GemstoneAPI.calculate(formData);
// // //           break;
// // //         case "Dasha (Vimshottari)":
// // //           response = await DashaAPI.calculate(formData);
// // //           break;
// // //         case "Manglik Calculator":
// // //           response = await ManglikAPI.calculate(formData);
// // //           break;
// // //         case "Nakshatra Calculator":
// // //           response = await NakshatraAPI.calculate(formData);
// // //           break;
// // //         case "Planetary Calculator":
// // //           response = await PlanetaryAPI.calculate(formData);
// // //           break;
// // //         case "Transit Calculator":
// // //           response = await TransitAPI.calculate(formData);
// // //           break;
// // //         case "Zodiac Calculator":
// // //           response = await ZodiacAPI.calculate(formData);
// // //           break;
// // //         case "Daily Predictions":
// // //           response = await DailyPredictionAPI.create(formData);
// // //           break;
// // //         case "Horoscope":
// // //           response = await HoroscopeAPI.calculate(formData);
// // //           break;
// // //         default:
// // //           response = { data: { message: "No API mapped!" } };
// // //       }
// // //       setBackendData(response.data);
// // //       setStep(3);
// // //     } catch (error) {
// // //       setBackendData({ error: error.message || "API Error" });
// // //       setStep(3);
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   const resetForm = () => {
// // //     setStep(1);
// // //     setSelectedCalculator(null);
// // //     setBackendData(null);
// // //     setFormData({
// // //       fullName: "",
// // //       dob: "",
// // //       timeSlot: "",
// // //       birthPlace: "",
// // //       fullNameA: "",
// // //       dobA: "",
// // //       timeSlotA: "",
// // //       birthPlaceA: "",
// // //       fullNameB: "",
// // //       dobB: "",
// // //       timeSlotB: "",
// // //       birthPlaceB: "",
// // //       date: "",
// // //     });
// // //   };

// // //   const renderStars = (count) =>
// // //     Array.from({ length: count }).map((_, i) => (
// // //       <div
// // //         key={i}
// // //         style={{
// // //           position: "absolute",
// // //           top: `${Math.random() * 100}%`,
// // //           left: `${Math.random() * 100}%`,
// // //           width: `${1 + Math.random() * 2}px`,
// // //           height: `${1 + Math.random() * 2}px`,
// // //           background: "#fff",
// // //           borderRadius: "50%",
// // //           animation: `twinkle ${2 + Math.random() * 3}s linear infinite`,
// // //         }}
// // //       />
// // //     ));

// // //   return (
// // //     <div
// // //       style={{
// // //         display: "flex",
// // //         minHeight: "100vh",
// // //         background: "radial-gradient(circle at top, #0a0018, #1e003f)",
// // //         fontFamily: "'Poppins', sans-serif",
// // //         color: "#fff",
// // //         overflow: "hidden",
// // //         position: "relative",
// // //       }}
// // //     >
// // //       <style>{`
// // //         @keyframes twinkle {
// // //           0%, 100% { opacity: 0.3; }
// // //           50% { opacity: 1; }
// // //         }
// // //         @keyframes spin { to { transform: rotate(360deg); } }
// // //       `}</style>

// // //       <div style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0 }}>{renderStars(80)}</div>

// // //       {/* Sidebar */}
// // //       <div
// // //         className={`sidebar ${sidebarOpen ? "open" : ""}`}
// // //         style={{
// // //           position: "fixed",
// // //           top: 0,
// // //           left: sidebarOpen ? 0 : "-270px",
// // //           width: "270px",
// // //           height: "100vh",
// // //           background: "linear-gradient(180deg, rgba(20,0,40,0.95), rgba(5,0,20,0.9))",
// // //           backdropFilter: "blur(14px)",
// // //           boxShadow: "6px 0 25px rgba(255, 0, 255, 0.25)",
// // //           transition: "left 0.5s ease-in-out",
// // //           zIndex: 1000,
// // //           padding: "30px 20px",
// // //         }}
// // //       >
// // //         {sidebarOpen && (
// // //           <button
// // //             onClick={() => setSidebarOpen(false)}
// // //             style={{
// // //               position: "absolute",
// // //               top: "18px",
// // //               right: "18px",
// // //               background: "linear-gradient(135deg, #ff00ff, #8a2be2)",
// // //               border: "none",
// // //               color: "#fff",
// // //               fontSize: "20px",
// // //               width: "40px",
// // //               height: "40px",
// // //               borderRadius: "50%",
// // //               cursor: "pointer",
// // //               boxShadow: "0 0 15px rgba(255, 0, 255, 0.4)",
// // //               transition: "all 0.3s ease",
// // //             }}
// // //             onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1) rotate(90deg)")}
// // //             onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1) rotate(0deg)")}
// // //           >
// // //             ✕
// // //           </button>
// // //         )}

// // //         <h2
// // //           style={{
// // //             fontSize: "28px",
// // //             fontWeight: 700,
// // //             textAlign: "center",
// // //             background: "linear-gradient(90deg, #ff00ff, #00ffff)",
// // //             WebkitBackgroundClip: "text",
// // //             WebkitTextFillColor: "transparent",
// // //             marginBottom: "35px",
// // //           }}
// // //         >
// // //           ✨ AstroConnect
// // //         </h2>
// // //         <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
// // //           {navLinks.map((item, idx) => (
// // //             <li key={idx} style={{ margin: "14px 0" }}>
// // //               <a
// // //                 href={item.link}
// // //                 onClick={() => setSidebarOpen(false)}
// // //                 style={{
// // //                   color: "#ccc",
// // //                   display: "flex",
// // //                   alignItems: "center",
// // //                   gap: "10px",
// // //                   padding: "12px 18px",
// // //                   borderRadius: "10px",
// // //                   textDecoration: "none",
// // //                   fontSize: "1rem",
// // //                   fontWeight: 500,
// // //                   transition: "all 0.3s ease",
// // //                 }}
// // //               >
// // //                 <span style={{ fontSize: "1.4rem" }}>{item.icon}</span>
// // //                 {item.name}
// // //               </a>
// // //             </li>
// // //           ))}
// // //         </ul>
// // //       </div>

// // //       {/* Hamburger (only visible when sidebar closed) */}
// // //       {!sidebarOpen && (
// // //         <button
// // //           onClick={() => setSidebarOpen(true)}
// // //           style={{
// // //             position: "fixed",
// // //             top: "22px",
// // //             left: "25px",
// // //             background: "linear-gradient(135deg, #ff00ff, #7b2cbf)",
// // //             color: "#fff",
// // //             border: "none",
// // //             fontSize: "26px",
// // //             borderRadius: "50%",
// // //             width: "55px",
// // //             height: "55px",
// // //             cursor: "pointer",
// // //             zIndex: 1100,
// // //             boxShadow: "0 0 25px rgba(255, 0, 255, 0.4)",
// // //             transition: "all 0.3s ease-in-out",
// // //           }}
// // //         >
// // //           ☰
// // //         </button>
// // //       )}

// // //       {/* Main Content */}
// // //       <div
// // //         style={{
// // //           flex: 1,
// // //           padding: "6rem 3rem 4rem",
// // //           maxWidth: "1600px",
// // //           margin: "0 auto",
// // //           zIndex: 5,
// // //           marginLeft: sidebarOpen ? "270px" : "0",
// // //           transition: "margin-left 0.6s ease",
// // //         }}
// // //       >
// // //         <h1
// // //           style={{
// // //             fontSize: "2.5rem",
// // //             fontWeight: 700,
// // //             textAlign: "center",
// // //             marginBottom: "1rem",
// // //             display: "flex",
// // //             alignItems: "center",
// // //             justifyContent: "center",
// // //             gap: "10px",
// // //           }}
// // //         >
// // //           <Sparkles size={26} /> Astro Calculators
// // //         </h1>

// // //         <p
// // //           style={{
// // //             textAlign: "center",
// // //             fontSize: "1.1rem",
// // //             marginBottom: "3rem",
// // //           }}
// // //         >
// // //           Unlock astrological insights and align with your cosmic blueprint 🌙
// // //         </p>

// // //         {/* === Step 1: Calculator Grid === */}
// // //         {step === 1 && (
// // //           <div
// // //             style={{
// // //               display: "grid",
// // //               gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))",
// // //               gap: "2.5rem",
// // //               width: "100%",
// // //               maxWidth: "1300px",
// // //               margin: "0 auto",
// // //               padding: "2rem 2rem 4rem",
// // //             }}
// // //           >
// // //             {calculators.map((calc, idx) => (
// // //               <div
// // //                 key={idx}
// // //                 onClick={() => handleCalculatorSelect(calc)}
// // //                 style={{
// // //                   background: "rgba(255, 255, 255, 0.2)",
// // //                   backdropFilter: "blur(15px)",
// // //                   borderRadius: "22px",
// // //                   padding: "2rem 1.6rem",
// // //                   textAlign: "center",
// // //                   cursor: "pointer",
// // //                   transition: "all 0.4s ease",
// // //                   width: "100%",
// // //                   maxWidth: "270px",
// // //                   minHeight: "280px",
// // //                   display: "flex",
// // //                   flexDirection: "column",
// // //                   justifyContent: "space-between",
// // //                   boxShadow: "0 0 25px rgba(255, 0, 255, 0.15)",
// // //                   border: "1px solid rgba(255, 255, 255, 0.1)",
// // //                 }}
// // //                 onMouseEnter={(e) => {
// // //                   e.currentTarget.style.transform = "translateY(-10px) scale(1.05)";
// // //                   e.currentTarget.style.boxShadow = "0 0 40px rgba(255, 0, 255, 0.45)";
// // //                 }}
// // //                 onMouseLeave={(e) => {
// // //                   e.currentTarget.style.transform = "translateY(0) scale(1)";
// // //                   e.currentTarget.style.boxShadow = "0 0 25px rgba(255, 0, 255, 0.15)";
// // //                 }}
// // //               >
// // //                 <span style={{ fontSize: "3.5rem", marginBottom: "0.5rem" }}>{calc.icon}</span>
// // //                 <h3
// // //                   style={{
// // //                     fontSize: "1.45rem",
// // //                     fontWeight: 700,
// // //                     background: "linear-gradient(90deg, #ffffff, #aef5ff)",
// // //                     WebkitBackgroundClip: "text",
// // //                     WebkitTextFillColor: "transparent",
// // //                   }}
// // //                 >
// // //                   {calc.label}
// // //                 </h3>
// // //                 <p style={{ color: "#e7e4ff", fontSize: "0.95rem", lineHeight: 1.4 }}>{calc.desc}</p>
// // //                 <p>Deliverable: {calc.deliverable}</p>
// // //                 <p>Price: {calc.price}</p>
// // //               </div>
// // //             ))}
// // //           </div>
// // //         )}
// // // {/* === Step 2: Form (Iconic Cosmic Edition) === */}
// // // {step === 2 && (
// // //   <div
// // //     style={{
// // //       background: "rgba(255,255,255,0.1)",
// // //       backdropFilter: "blur(20px)",
// // //       borderRadius: "28px",
// // //       padding: "3.5rem 3rem",
// // //       maxWidth: "720px",
// // //       margin: "3rem auto",
// // //       boxShadow: "0 0 45px rgba(255, 0, 255, 0.3)",
// // //       textAlign: "center",
// // //       transition: "all 0.5s ease-in-out",
// // //     }}
// // //   >
// // //     <h2
// // //       style={{
// // //         fontSize: "2.3rem",
// // //         marginBottom: "2.5rem",
// // //         background: "linear-gradient(90deg, #ff00ff, #00ffff)",
// // //         WebkitBackgroundClip: "text",
// // //         WebkitTextFillColor: "transparent",
// // //         textShadow: "0 0 25px rgba(255, 0, 255, 0.5)",
// // //       }}
// // //     >
// // //       {selectedCalculator.icon} {selectedCalculator.label}
// // //     </h2>

// // //     <style>{`
// // //       .form-container {
// // //         display: flex;
// // //         flex-direction: column;
// // //         gap: 1.8rem;
// // //         width: 100%;
// // //         max-width: 500px;
// // //         margin: 0 auto;
// // //         position: relative;
// // //       }

// // //       .form-group {
// // //         position: relative;
// // //         width: 100%;
// // //       }

// // //       .form-group input {
// // //         width: 100%;
// // //         padding: 15px 16px 15px 48px;
// // //         font-size: 1rem;
// // //         background: rgba(255,255,255,0.08);
// // //         border: 1.5px solid rgba(255,255,255,0.2);
// // //         border-radius: 14px;
// // //         color: #fff;
// // //         outline: none;
// // //         transition: all 0.35s ease;
// // //         box-shadow: 0 0 10px rgba(255,255,255,0.05);
// // //       }

// // //       .form-group input:hover {
// // //         border-color: rgba(255,255,255,0.4);
// // //       }

// // //       .form-group input:focus {
// // //         border-color: #ff00ff;
// // //         box-shadow: 0 0 18px rgba(255,0,255,0.5);
// // //         background: rgba(255,255,255,0.12);
// // //       }

// // //       .form-group label {
// // //         position: absolute;
// // //         left: 48px;
// // //         top: 50%;
// // //         transform: translateY(-50%);
// // //         color: #bbb;
// // //         font-size: 0.95rem;
// // //         pointer-events: none;
// // //         transition: all 0.3s ease;
// // //       }

// // //       .form-group input:focus + label,
// // //       .form-group input:not(:placeholder-shown) + label {
// // //         top: -9px;
// // //         left: 42px;
// // //         background: radial-gradient(circle at top left, #1a002f, #0a0018);
// // //         padding: 0 6px;
// // //         color: #ff9cff;
// // //         font-size: 0.8rem;
// // //       }

// // //       .form-group .icon {
// // //         position: absolute;
// // //         left: 14px;
// // //         top: 50%;
// // //         transform: translateY(-50%);
// // //         color: #aaa;
// // //         font-size: 20px;
// // //         transition: color 0.3s ease;
// // //       }

// // //       .form-group input:focus ~ .icon {
// // //         color: #ff66ff;
// // //         filter: drop-shadow(0 0 8px #ff00ff);
// // //       }

// // //       .glow-btn {
// // //         margin-top: 2.5rem;
// // //         background: linear-gradient(90deg, #ff00ff, #8a2be2, #00ffff);
// // //         border: none;
// // //         color: #fff;
// // //         padding: 15px 50px;
// // //         border-radius: 50px;
// // //         font-weight: 700;
// // //         font-size: 1.05rem;
// // //         cursor: pointer;
// // //         transition: all 0.4s ease;
// // //         box-shadow: 0 0 25px rgba(255,0,255,0.3);
// // //       }

// // //       .glow-btn:hover {
// // //         box-shadow: 0 0 45px rgba(255,0,255,0.7);
// // //         transform: scale(1.08);
// // //       }

// // //       .glow-btn:active {
// // //         transform: scale(0.98);
// // //         box-shadow: 0 0 25px rgba(255,255,255,0.4);
// // //       }
// // //     `}</style>

// // //     <div className="form-container">
// // //       {selectedCalculator.label === "Compatibility" ? (
// // //         <>
// // //           <h4 style={{ color: "#aef5ff", textAlign: "left" }}>💫 Person A</h4>
// // //           <div className="form-group">
// // //             <i className="icon">👤</i>
// // //             <input name="fullNameA" placeholder=" " onChange={handleChange} />
// // //             <label>Full Name</label>
// // //           </div>
// // //           <div className="form-group">
// // //             <i className="icon">📅</i>
// // //             <input type="date" name="dobA" placeholder=" " onChange={handleChange} />
// // //             <label>Date of Birth</label>
// // //           </div>
// // //           <div className="form-group">
// // //             <i className="icon">⏰</i>
// // //             <input type="time" name="timeSlotA" placeholder=" " onChange={handleChange} />
// // //             <label>Time of Birth</label>
// // //           </div>
// // //           <div className="form-group">
// // //             <i className="icon">📍</i>
// // //             <input name="birthPlaceA" placeholder=" " onChange={handleChange} />
// // //             <label>Place of Birth</label>
// // //           </div>

// // //           <h4 style={{ color: "#aef5ff", textAlign: "left", marginTop: "1.5rem" }}>💞 Person B</h4>
// // //           <div className="form-group">
// // //             <i className="icon">👤</i>
// // //             <input name="fullNameB" placeholder=" " onChange={handleChange} />
// // //             <label>Full Name</label>
// // //           </div>
// // //           <div className="form-group">
// // //             <i className="icon">📅</i>
// // //             <input type="date" name="dobB" placeholder=" " onChange={handleChange} />
// // //             <label>Date of Birth</label>
// // //           </div>
// // //           <div className="form-group">
// // //             <i className="icon">⏰</i>
// // //             <input type="time" name="timeSlotB" placeholder=" " onChange={handleChange} />
// // //             <label>Time of Birth</label>
// // //           </div>
// // //           <div className="form-group">
// // //             <i className="icon">📍</i>
// // //             <input name="birthPlaceB" placeholder=" " onChange={handleChange} />
// // //             <label>Place of Birth</label>
// // //           </div>
// // //         </>
// // //       ) : selectedCalculator.label === "Numerology" ? (
// // //         <>
// // //           <div className="form-group">
// // //             <i className="icon">👤</i>
// // //             <input name="fullName" placeholder=" " onChange={handleChange} />
// // //             <label>Full Name</label>
// // //           </div>
// // //           <div className="form-group">
// // //             <i className="icon">📅</i>
// // //             <input type="date" name="dob" placeholder=" " onChange={handleChange} />
// // //             <label>Date of Birth</label>
// // //           </div>
// // //         </>
// // //       ) : selectedCalculator.label === "Daily Predictions" ? (
// // //         <div className="form-group">
// // //           <i className="icon">📆</i>
// // //           <input type="date" name="date" placeholder=" " onChange={handleChange} />
// // //           <label>Select Date</label>
// // //         </div>
// // //       ) : (
// // //         <>
// // //           <div className="form-group">
// // //             <i className="icon">👤</i>
// // //             <input name="fullName" placeholder=" " onChange={handleChange} />
// // //             <label>Full Name</label>
// // //           </div>
// // //           <div className="form-group">
// // //             <i className="icon">📅</i>
// // //             <input type="date" name="dob" placeholder=" " onChange={handleChange} />
// // //             <label>Date of Birth</label>
// // //           </div>
// // //           <div className="form-group">
// // //             <i className="icon">⏰</i>
// // //             <input type="time" name="timeSlot" placeholder=" " onChange={handleChange} />
// // //             <label>Time of Birth</label>
// // //           </div>
// // //           <div className="form-group">
// // //             <i className="icon">📍</i>
// // //             <input name="birthPlace" placeholder=" " onChange={handleChange} />
// // //             <label>Place of Birth</label>
// // //           </div>
// // //         </>
// // //       )}

// // //       <button className="glow-btn" onClick={handleFormSubmit} disabled={loading}>
// // //         {loading ? <Loader2 size={20} style={{ animation: "spin 1s linear infinite" }} /> : "⚡ Get Report ✨"}
// // //       </button>
// // //     </div>
// // //   </div>
// // // )}

// // //         {/* === Step 3: Report === */}
// // //         {step === 3 && (
// // //           <div
// // //             style={{
// // //               background: "rgba(255,255,255,0.13)",
// // //               borderRadius: "24px",
// // //               padding: "3rem 2rem",
// // //               maxWidth: "720px",
// // //               margin: "3rem auto",
// // //               textAlign: "center",
// // //             }}
// // //           >
// // //             <h2>
// // //               {selectedCalculator.icon} Your {selectedCalculator.label} Report
// // //             </h2>
// // //             <div
// // //               style={{
// // //                 background: "rgba(255,255,255,0.1)",
// // //                 padding: "2rem",
// // //                 borderRadius: "15px",
// // //                 marginBottom: "2rem",
// // //                 whiteSpace: "pre-wrap",
// // //                 textAlign: "left",
// // //               }}
// // //             >
// // //               {backendData ? JSON.stringify(backendData, null, 2) : "No data available"}
// // //             </div>
// // //             <button
// // //               onClick={resetForm}
// // //               style={{
// // //                 background: "linear-gradient(90deg, #ff00ff, #8a2be2, #00ffff)",
// // //                 border: "none",
// // //                 color: "#fff",
// // //                 padding: "14px 36px",
// // //                 borderRadius: "40px",
// // //                 fontWeight: "600",
// // //                 cursor: "pointer",
// // //               }}
// // //             >
// // //               Back to Calculators
// // //             </button>
// // //           </div>
// // //         )}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Movement;

// // // import React, { useState } from "react";
// // // import { Loader2, Sparkles } from "lucide-react";
// // // import {
// // //   KundliAPI,
// // //   NumerologyAPI,
// // //   CompatibilityAPI,
// // //   GemstoneAPI,
// // //   PlanetaryAPI,
// // //   TransitAPI,
// // //   ZodiacAPI,
// // //   ManglikAPI,
// // //   DashaAPI,
// // //   NakshatraAPI,
// // //   DailyPredictionAPI,
// // //   HoroscopeAPI,
// // // } from "../../api/apiService";

// // // const calculators = [
// // //   { label: "Kundli", deliverable: "Chart", price: "Free", icon: "🔮", desc: "Generate your complete birth chart with planetary positions" },
// // //   { label: "Numerology", deliverable: "Report", price: "Free", icon: "🔢", desc: "Discover your life path number and destiny insights" },
// // //   { label: "Compatibility", deliverable: "PDF", price: "Paid", icon: "💕", desc: "Analyze relationship compatibility between two souls" },
// // //   { label: "Gemstone Recommendation", deliverable: "Report", price: "Paid", icon: "💎", desc: "Find your lucky gemstones based on planetary alignment" },
// // //   { label: "Dasha (Vimshottari)", deliverable: "Report", price: "Paid", icon: "⏳", desc: "Explore your planetary periods and life phases" },
// // //   { label: "Manglik Calculator", deliverable: "Report", price: "Paid", icon: "🔥", desc: "Check Manglik dosha and its effects on your life" },
// // //   { label: "Nakshatra Calculator", deliverable: "Report", price: "Paid", icon: "⭐", desc: "Discover your birth star and its cosmic influence" },
// // //   { label: "Planetary Calculator", deliverable: "Report", price: "Paid", icon: "🪐", desc: "Analyze planetary strengths and their impact" },
// // //   { label: "Transit Calculator", deliverable: "Report", price: "Paid", icon: "🌍", desc: "Track current planetary movements affecting you" },
// // //   { label: "Zodiac Calculator", deliverable: "Report", price: "Free", icon: "♈", desc: "Find your sun, moon, and rising zodiac signs" },
// // //   { label: "Daily Predictions", deliverable: "Report", price: "Paid", icon: "📅", desc: "Get personalized daily astrological guidance" },
// // //   { label: "Horoscope", deliverable: "Report", price: "Free", icon: "🌙", desc: "Read your detailed horoscope and predictions" },
// // // ];
// // // const navLinks = [
// // //     { name: "Home", link: "#home" },
// // //     { name: "About Us", link: "#about-us" },
// // //     { name: "Energy", link: "/energy" },
// // //     { name: "Movement", link: "/movement" },
// // //     { name: "Space Vastu", link: "/space-vastu" },
// // //     { name: "Manifestation", link: "/manifestation" },
// // //     { name: "Material", link: "/material" },
// // //     { name: "Blogs", link: "/blogs" },
// // //     { name: "Careers", link: "#careers" },
// // //     { name: "Contact", link: "/contact" },
// // //     { name: "Login / Signup", link: "/auth" },
// // //   ];

// // // const Movement = () => {
// // //   const [sidebarOpen, setSidebarOpen] = useState(false);
// // //   const [step, setStep] = useState(1);
// // //   const [selectedCalculator, setSelectedCalculator] = useState(null);
// // //   const [formData, setFormData] = useState({});
// // //   const [backendData, setBackendData] = useState(null);
// // //   const [loading, setLoading] = useState(false);

// // //   const handleCalculatorSelect = (calc) => {
// // //     setSelectedCalculator(calc);
// // //     setStep(2);
// // //   };

// // //   const handleChange = (e) => {
// // //     const { name, value } = e.target;
// // //     setFormData((prev) => ({ ...prev, [name]: value }));
// // //   };

// // //   const handleFormSubmit = async () => {
// // //     setLoading(true);
// // //     try {
// // //       let response;
// // //       switch (selectedCalculator.label) {
// // //         case "Kundli":
// // //           response = await KundliAPI.calculate(formData);
// // //           break;
// // //         case "Numerology":
// // //           response = await NumerologyAPI.calculate(formData);
// // //           break;
// // //         case "Compatibility":
// // //           response = await CompatibilityAPI.calculate(formData);
// // //           break;
// // //         case "Gemstone Recommendation":
// // //           response = await GemstoneAPI.calculate(formData);
// // //           break;
// // //         case "Dasha (Vimshottari)":
// // //           response = await DashaAPI.calculate(formData);
// // //           break;
// // //         case "Manglik Calculator":
// // //           response = await ManglikAPI.calculate(formData);
// // //           break;
// // //         case "Nakshatra Calculator":
// // //           response = await NakshatraAPI.calculate(formData);
// // //           break;
// // //         case "Planetary Calculator":
// // //           response = await PlanetaryAPI.calculate(formData);
// // //           break;
// // //         case "Transit Calculator":
// // //           response = await TransitAPI.calculate(formData);
// // //           break;
// // //         case "Zodiac Calculator":
// // //           response = await ZodiacAPI.calculate(formData);
// // //           break;
// // //         case "Daily Predictions":
// // //           response = await DailyPredictionAPI.create(formData);
// // //           break;
// // //         case "Horoscope":
// // //           response = await HoroscopeAPI.calculate(formData);
// // //           break;
// // //         default:
// // //           response = { data: { message: "No API mapped!" } };
// // //       }
// // //       setBackendData(response.data);
// // //       setStep(3);
// // //     } catch (err) {
// // //       setBackendData({ error: err.message });
// // //       setStep(3);
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   const resetForm = () => {
// // //     setStep(1);
// // //     setSelectedCalculator(null);
// // //     setBackendData(null);
// // //     setFormData({});
// // //   };

// // //   return (
// // //     <div
// // //       style={{
// // //         minHeight: "100vh",
// // //         background: "radial-gradient(circle at top, #0a0018, #1e003f)",
// // //         color: "#fff",
// // //         fontFamily: "'Poppins', sans-serif",
// // //         overflowX: "hidden",
// // //       }}
// // //     >
// // //       {/* Header */}
// // //       <div
// // //         style={{
// // //           textAlign: "center",
// // //           padding: "4rem 1.5rem 2rem",
// // //         }}
// // //       >
// // //         <h1
// // //           style={{
// // //             fontSize: "2.5rem",
// // //             fontWeight: 700,
// // //             display: "flex",
// // //             alignItems: "center",
// // //             justifyContent: "center",
// // //             gap: "10px",
// // //           }}
// // //         >
// // //           <Sparkles size={26} /> Astro Calculators
// // //         </h1>
// // //         <p style={{ fontSize: "1.1rem", color: "#ccc", marginTop: "0.5rem" }}>
// // //           Unlock astrological insights anytime, anywhere 🌙
// // //         </p>
// // //       </div>

// // //       {/* Step 1: Calculator Grid */}
// // //       {step === 1 && (
// // //         <div
// // //           style={{
// // //             display: "grid",
// // //             gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
// // //             gap: "2rem",
// // //             padding: "1rem 2rem 4rem",
// // //             maxWidth: "1200px",
// // //             margin: "0 auto",
// // //           }}
// // //         >
// // //           {calculators.map((calc, i) => (
// // //             <div
// // //               key={i}
// // //               onClick={() => handleCalculatorSelect(calc)}
// // //               style={{
// // //                 background: "rgba(255,255,255,0.15)",
// // //                 borderRadius: "20px",
// // //                 padding: "2rem 1.5rem",
// // //                 textAlign: "center",
// // //                 cursor: "pointer",
// // //                 transition: "0.4s",
// // //               }}
// // //               onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
// // //               onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
// // //             >
// // //               <div style={{ fontSize: "3rem" }}>{calc.icon}</div>
// // //               <h3 style={{ margin: "10px 0", fontSize: "1.3rem", fontWeight: 600 }}>{calc.label}</h3>
// // //               <p style={{ fontSize: "0.95rem", color: "#ddd" }}>{calc.desc}</p>
// // //               <p>🧾 {calc.deliverable}</p>
// // //               <p>💰 {calc.price}</p>
// // //             </div>
// // //           ))}
// // //         </div>
// // //       )}

// // //       {/* Step 2: Form */}
// // //       {step === 2 && (
// // //         <div
// // //           style={{
// // //             background: "rgba(255,255,255,0.1)",
// // //             borderRadius: "20px",
// // //             padding: "2.5rem 2rem",
// // //             maxWidth: "700px",
// // //             margin: "2rem auto",
// // //             textAlign: "center",
// // //           }}
// // //         >
// // //           <h2
// // //             style={{
// // //               background: "linear-gradient(90deg, #ff00ff, #00ffff)",
// // //               WebkitBackgroundClip: "text",
// // //               WebkitTextFillColor: "transparent",
// // //               marginBottom: "1.5rem",
// // //             }}
// // //           >
// // //             {selectedCalculator.icon} {selectedCalculator.label}
// // //           </h2>

// // //           <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
// // //             {/* Compatibility */}
// // //             {selectedCalculator.label === "Compatibility" ? (
// // //               <>
// // //                 <h4 style={{ color: "#aef5ff", textAlign: "left" }}>💫 Person A</h4>
// // //                 <input name="fullNameA" placeholder="Full Name" onChange={handleChange} />
// // //                 <input type="date" name="dobA" onChange={handleChange} />
// // //                 <input type="time" name="timeSlotA" onChange={handleChange} />
// // //                 <input name="birthPlaceA" placeholder="Place of Birth" onChange={handleChange} />

// // //                 <h4 style={{ color: "#aef5ff", textAlign: "left" }}>💞 Person B</h4>
// // //                 <input name="fullNameB" placeholder="Full Name" onChange={handleChange} />
// // //                 <input type="date" name="dobB" onChange={handleChange} />
// // //                 <input type="time" name="timeSlotB" onChange={handleChange} />
// // //                 <input name="birthPlaceB" placeholder="Place of Birth" onChange={handleChange} />
// // //               </>
// // //             ) : selectedCalculator.label === "Numerology" ? (
// // //               <>
// // //                 <input name="fullName" placeholder="Full Name" onChange={handleChange} />
// // //                 <input type="date" name="dob" onChange={handleChange} />
// // //               </>
// // //             ) : selectedCalculator.label === "Daily Predictions" ? (
// // //               <input type="date" name="date" onChange={handleChange} />
// // //             ) : (
// // //               <>
// // //                 <input name="fullName" placeholder="Full Name" onChange={handleChange} />
// // //                 <input type="date" name="dob" onChange={handleChange} />
// // //                 <input type="time" name="timeSlot" onChange={handleChange} />
// // //                 <input name="birthPlace" placeholder="Place of Birth" onChange={handleChange} />
// // //               </>
// // //             )}
// // //           </div>

// // //           <button
// // //             onClick={handleFormSubmit}
// // //             style={{
// // //               marginTop: "2rem",
// // //               padding: "12px 36px",
// // //               background: "linear-gradient(90deg, #ff00ff, #00ffff)",
// // //               border: "none",
// // //               borderRadius: "30px",
// // //               color: "#fff",
// // //               fontWeight: 600,
// // //               cursor: "pointer",
// // //             }}
// // //           >
// // //             {loading ? <Loader2 size={20} style={{ animation: "spin 1s linear infinite" }} /> : "✨ Get Report"}
// // //           </button>
// // //         </div>
// // //       )}

// // //       {/* Step 3: Report */}
// // //       {step === 3 && (
// // //         <div
// // //           style={{
// // //             background: "rgba(255,255,255,0.1)",
// // //             borderRadius: "20px",
// // //             padding: "2.5rem",
// // //             maxWidth: "700px",
// // //             margin: "2rem auto",
// // //             textAlign: "center",
// // //           }}
// // //         >
// // //           <h2>
// // //             {selectedCalculator.icon} {selectedCalculator.label} Report
// // //           </h2>
// // //           <pre
// // //             style={{
// // //               textAlign: "left",
// // //               whiteSpace: "pre-wrap",
// // //               background: "rgba(255,255,255,0.1)",
// // //               padding: "1rem",
// // //               borderRadius: "10px",
// // //               margin: "1.5rem 0",
// // //             }}
// // //           >
// // //             {backendData ? JSON.stringify(backendData, null, 2) : "No data available"}
// // //           </pre>
// // //           <button
// // //             onClick={resetForm}
// // //             style={{
// // //               background: "linear-gradient(90deg, #ff00ff, #00ffff)",
// // //               border: "none",
// // //               color: "#fff",
// // //               padding: "10px 30px",
// // //               borderRadius: "25px",
// // //               fontWeight: 600,
// // //               cursor: "pointer",
// // //             }}
// // //           >
// // //             🔁 Back to Calculators
// // //           </button>
// // //         </div>
// // //       )}
// // //     </div>
// // //   );
// // // };

// // // export default Movement;

// // // import React, { useState } from "react";
// // // import { Loader2, Sparkles } from "lucide-react";
// // // import {
// // //   KundliAPI,
// // //   NumerologyAPI,
// // //   CompatibilityAPI,
// // //   GemstoneAPI,
// // //   PlanetaryAPI,
// // //   TransitAPI,
// // //   ZodiacAPI,
// // //   ManglikAPI,
// // //   DashaAPI,
// // //   NakshatraAPI,
// // //   DailyPredictionAPI,
// // //   HoroscopeAPI,
// // // } from "../../api/apiService";

// // // const calculators = [
// // //   { label: "Kundli", deliverable: "Chart", price: "Free", desc: "Generate your complete birth chart with planetary positions" },
// // //   { label: "Numerology", deliverable: "Report", price: "Free", desc: "Discover your life path number and destiny insights" },
// // //   { label: "Compatibility", deliverable: "PDF", price: "Paid", desc: "Analyze relationship compatibility between two souls" },
// // //   { label: "Gemstone Recommendation", deliverable: "Report", price: "Free", desc: "Find your lucky gemstones based on planetary alignment" },
// // //   { label: "Dasha (Vimshottari)", deliverable: "Report", price: "Paid", desc: "Explore your planetary periods and life phases" },
// // //   { label: "Manglik Calculator", deliverable: "Report", price: "Free", desc: "Check Manglik dosha and its effects on your life" },
// // //   { label: "Nakshatra Calculator", deliverable: "Report", price: "Paid", desc: "Discover your birth star and its cosmic influence" },
// // //   { label: "Planetary Calculator", deliverable: "Report", price: "Paid", desc: "Analyze planetary strengths and their impact" },
// // //   { label: "Transit Calculator", deliverable: "Report", price: "Paid", desc: "Track current planetary movements affecting you" },
// // //   { label: "Zodiac Calculator", deliverable: "Report", price: "Free", desc: "Find your sun, moon, and rising zodiac signs" },
// // //   { label: "Daily Predictions", deliverable: "Report", price: "Paid", desc: "Get personalized daily astrological guidance" },
// // //   { label: "Horoscope", deliverable: "Report", price: "Free", desc: "Read your detailed horoscope and predictions" },
// // // ];

// // // const navLinks = [
// // //   { name: "Home", link: "/" },
// // //   { name: "About Us", link: "/about-us" },
// // //   { name: "Energy", link: "/energy" },
// // //    { name: "Astrology", link: "/Astrology" },
// // //   { name: "Vastu", link: "/vastu" },
// // //   { name: "Manifestation", link: "/manifestation" },
// // //   { name: "Material", link: "/material" },
// // //   { name: "Blogs", link: "/blogs" },
// // //   { name: "Careers", link: "/careers" },
// // //   { name: "Contact", link: "/contact" },
// // //   { name: "Login / Signup", link: "/auth" },
// // // ];

// // // const Astrology = () => {
// // //   const [sidebarOpen, setSidebarOpen] = useState(false);
// // //   const [step, setStep] = useState(1);
// // //   const [selectedCalculator, setSelectedCalculator] = useState(null);
// // //   const [formData, setFormData] = useState({});
// // //   const [backendData, setBackendData] = useState(null);
// // //   const [loading, setLoading] = useState(false);

// // //   const handleCalculatorSelect = (calc) => {
// // //     setSelectedCalculator(calc);
// // //     setStep(2);
// // //   };

// // //   const handleChange = (e) => {
// // //     const { name, value } = e.target;
// // //     setFormData((prev) => ({ ...prev, [name]: value }));
// // //   };

// // //   const handleFormSubmit = async () => {
// // //     setLoading(true);
// // //     try {
// // //       let response;
// // //       switch (selectedCalculator.label) {
// // //         case "Kundli":
// // //           response = await KundliAPI.calculate(formData);
// // //           break;
// // //         case "Numerology":
// // //           response = await NumerologyAPI.calculate(formData);
// // //           break;
// // //         case "Compatibility":
// // //           response = await CompatibilityAPI.calculate(formData);
// // //           break;
// // //         case "Gemstone Recommendation":
// // //           response = await GemstoneAPI.calculate(formData);
// // //           break;
// // //         case "Dasha (Vimshottari)":
// // //           response = await DashaAPI.calculate(formData);
// // //           break;
// // //         case "Manglik Calculator":
// // //           response = await ManglikAPI.calculate(formData);
// // //           break;
// // //         case "Nakshatra Calculator":
// // //           response = await NakshatraAPI.calculate(formData);
// // //           break;
// // //         case "Planetary Calculator":
// // //           response = await PlanetaryAPI.calculate(formData);
// // //           break;
// // //         case "Transit Calculator":
// // //           response = await TransitAPI.calculate(formData);
// // //           break;
// // //         case "Zodiac Calculator":
// // //           response = await ZodiacAPI.calculate(formData);
// // //           break;
// // //         case "Daily Predictions":
// // //           response = await DailyPredictionAPI.create(formData);
// // //           break;
// // //         case "Horoscope":
// // //           response = await HoroscopeAPI.calculate(formData);
// // //           break;
// // //         default:
// // //           response = { data: { message: "No API mapped!" } };
// // //       }
// // //       setBackendData(response.data);
// // //       setStep(3);
// // //     } catch (err) {
// // //       setBackendData({ error: err.message });
// // //       setStep(3);
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   const resetForm = () => {
// // //     setStep(1);
// // //     setSelectedCalculator(null);
// // //     setBackendData(null);
// // //     setFormData({});
// // //   };

// // //   return (
// // //     <div
// // //       style={{
// // //         minHeight: "100vh",
// // //         background: "radial-gradient(circle at top, #0a0018, #1e003f)",
// // //         color: "#fff",
// // //         fontFamily: "'Poppins', sans-serif",
// // //         overflowX: "hidden",
// // //       }}
// // //     >
// // //       {/* Sidebar */}
// // //       <div
// // //         className={`sidebar ${sidebarOpen ? "open" : ""}`}
// // //         style={{
// // //           position: "fixed",
// // //           top: 0,
// // //           left: sidebarOpen ? 0 : "-270px",
// // //           width: "270px",
// // //           height: "100vh",
// // //           background: "linear-gradient(180deg, rgba(20,0,40,0.95), rgba(5,0,20,0.9))",
// // //           backdropFilter: "blur(14px)",
// // //           boxShadow: "6px 0 25px rgba(255, 0, 255, 0.25)",
// // //           transition: "left 0.5s ease-in-out",
// // //           zIndex: 1000,
// // //           padding: "30px 20px",
// // //         }}
// // //       >
// // //         {sidebarOpen && (
// // //           <button
// // //             onClick={() => setSidebarOpen(false)}
// // //             style={{
// // //               position: "absolute",
// // //               top: "18px",
// // //               right: "18px",
// // //               background: "linear-gradient(135deg, #ff00ff, #8a2be2)",
// // //               border: "none",
// // //               color: "#fff",
// // //               fontSize: "20px",
// // //               width: "40px",
// // //               height: "40px",
// // //               borderRadius: "50%",
// // //               cursor: "pointer",
// // //               boxShadow: "0 0 15px rgba(255, 0, 255, 0.4)",
// // //             }}
// // //           >
// // //             ✕
// // //           </button>
// // //         )}
// // //         <h2
// // //           style={{
// // //             fontSize: "28px",
// // //             fontWeight: 700,
// // //             textAlign: "center",
// // //             background: "linear-gradient(90deg, #ff00ff, #00ffff)",
// // //             WebkitBackgroundClip: "text",
// // //             WebkitTextFillColor: "transparent",
// // //             marginBottom: "35px",
// // //           }}
// // //         >
// // //           AstroConnect
// // //         </h2>
// // //         <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
// // //           {navLinks.map((item, idx) => (
// // //             <li key={idx} style={{ margin: "14px 0" }}>
// // //               <a
// // //                 href={item.link}
// // //                 onClick={() => setSidebarOpen(false)}
// // //                 style={{
// // //                   color: "#ccc",
// // //                   display: "block",
// // //                   padding: "12px 18px",
// // //                   borderRadius: "10px",
// // //                   textDecoration: "none",
// // //                   fontSize: "1rem",
// // //                   fontWeight: 500,
// // //                   transition: "all 0.3s ease",
// // //                 }}
// // //               >
// // //                 {item.name}
// // //               </a>
// // //             </li>
// // //           ))}
// // //         </ul>
// // //       </div>

// // //       {/* Hamburger */}
// // //       {!sidebarOpen && (
// // //         <button
// // //           onClick={() => setSidebarOpen(true)}
// // //           style={{
// // //             position: "fixed",
// // //             top: "22px",
// // //             left: "25px",
// // //             background: "linear-gradient(135deg, #ff00ff, #7b2cbf)",
// // //             color: "#fff",
// // //             border: "none",
// // //             fontSize: "26px",
// // //             borderRadius: "50%",
// // //             width: "55px",
// // //             height: "55px",
// // //             cursor: "pointer",
// // //             zIndex: 1100,
// // //             boxShadow: "0 0 25px rgba(255, 0, 255, 0.4)",
// // //           }}
// // //         >
// // //           ☰
// // //         </button>
// // //       )}

// // //       {/* Header */}
// // //       <div
// // //         style={{
// // //           textAlign: "center",
// // //           padding: "5rem 1.5rem 2rem",
// // //         }}
// // //       >
// // //         <h1
// // //           style={{
// // //             fontSize: "2.5rem",
// // //             fontWeight: 700,
// // //             display: "flex",
// // //             alignItems: "center",
// // //             justifyContent: "center",
// // //             gap: "10px",
// // //           }}
// // //         >
// // //           <Sparkles size={26} /> Astro Calculators
// // //         </h1>
// // //         <p style={{ fontSize: "1.1rem", color: "#ccc", marginTop: "0.5rem" }}>
// // //           Unlock astrological insights anytime, anywhere
// // //         </p>
// // //       </div>

// // //       {/* Step 1: Calculator Grid */}
// // //       {step === 1 && (
// // //         <div
// // //           style={{
// // //             display: "grid",
// // //             gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
// // //             gap: "2rem",
// // //             padding: "1rem 2rem 4rem",
// // //             maxWidth: "1200px",
// // //             margin: "0 auto",
// // //           }}
// // //         >
// // //           {calculators.map((calc, i) => (
// // //             <div
// // //               key={i}
// // //               onClick={() => handleCalculatorSelect(calc)}
// // //               style={{
// // //                 background: "rgba(255,255,255,0.15)",
// // //                 borderRadius: "20px",
// // //                 padding: "2rem 1.5rem",
// // //                 textAlign: "center",
// // //                 cursor: "pointer",
// // //                 transition: "0.4s",
// // //               }}
// // //               onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
// // //               onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
// // //             >
// // //               <h3 style={{ margin: "10px 0", fontSize: "1.3rem", fontWeight: 600 }}>{calc.label}</h3>
// // //               <p style={{ fontSize: "0.95rem", color: "#ddd" }}>{calc.desc}</p>
// // //               <p>Deliverable: {calc.deliverable}</p>
// // //               <p>Pricing: {calc.price}</p>
// // //             </div>
// // //           ))}
// // //         </div>
// // //       )}

// // //       {/* Step 2: Form */}
// // //       {step === 2 && (
// // //         <div
// // //           style={{
// // //             background: "rgba(255,255,255,0.1)",
// // //             borderRadius: "20px",
// // //             padding: "2.5rem 2rem",
// // //             maxWidth: "700px",
// // //             margin: "2rem auto",
// // //             textAlign: "center",
// // //           }}
// // //         >
// // //           <h2
// // //             style={{
// // //               background: "linear-gradient(90deg, #ff00ff, #00ffff)",
// // //               WebkitBackgroundClip: "text",
// // //               WebkitTextFillColor: "transparent",
// // //               marginBottom: "1.5rem",
// // //             }}
// // //           >
// // //             {selectedCalculator.label}
// // //           </h2>

// // //           <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
// // //             {selectedCalculator.label === "Compatibility" ? (
// // //               <>
// // //                 <h4 style={{ color: "#aef5ff", textAlign: "left" }}>Person A</h4>
// // //                 <input name="fullNameA" placeholder="Full Name" onChange={handleChange} />
// // //                 <input type="date" name="dobA" onChange={handleChange} />
// // //                 <input type="time" name="timeSlotA" onChange={handleChange} />
// // //                 <input name="birthPlaceA" placeholder="Place of Birth" onChange={handleChange} />

// // //                 <h4 style={{ color: "#aef5ff", textAlign: "left" }}>Person B</h4>
// // //                 <input name="fullNameB" placeholder="Full Name" onChange={handleChange} />
// // //                 <input type="date" name="dobB" onChange={handleChange} />
// // //                 <input type="time" name="timeSlotB" onChange={handleChange} />
// // //                 <input name="birthPlaceB" placeholder="Place of Birth" onChange={handleChange} />
// // //               </>
// // //             ) : selectedCalculator.label === "Numerology" ? (
// // //               <>
// // //                 <input name="fullName" placeholder="Full Name" onChange={handleChange} />
// // //                 <input type="date" name="dob" onChange={handleChange} />
// // //               </>
// // //             ) : selectedCalculator.label === "Daily Predictions" ? (
// // //               <input type="date" name="date" onChange={handleChange} />
// // //             ) : (
// // //               <>
// // //                 <input name="fullName" placeholder="Full Name" onChange={handleChange} />
// // //                 <input type="date" name="dob" onChange={handleChange} />
// // //                 <input type="time" name="timeSlot" onChange={handleChange} />
// // //                 <input name="birthPlace" placeholder="Place of Birth" onChange={handleChange} />
// // //               </>
// // //             )}
// // //           </div>

// // //           <button
// // //             onClick={handleFormSubmit}
// // //             style={{
// // //               marginTop: "2rem",
// // //               padding: "12px 36px",
// // //               background: "linear-gradient(90deg, #ff00ff, #00ffff)",
// // //               border: "none",
// // //               borderRadius: "30px",
// // //               color: "#fff",
// // //               fontWeight: 600,
// // //               cursor: "pointer",
// // //             }}
// // //           >
// // //             {loading ? <Loader2 size={20} style={{ animation: "spin 1s linear infinite" }} /> : "Get Report"}
// // //           </button>
// // //         </div>
// // //       )}

// // //       {/* Step 3: Report */}
// // //       {step === 3 && (
// // //         <div
// // //           style={{
// // //             background: "rgba(255,255,255,0.1)",
// // //             borderRadius: "20px",
// // //             padding: "2.5rem",
// // //             maxWidth: "700px",
// // //             margin: "2rem auto",
// // //             textAlign: "center",
// // //           }}
// // //         >
// // //           <h2>{selectedCalculator.label} Report</h2>
// // //           <pre
// // //             style={{
// // //               textAlign: "left",
// // //               whiteSpace: "pre-wrap",
// // //               background: "rgba(255,255,255,0.1)",
// // //               padding: "1rem",
// // //               borderRadius: "10px",
// // //               margin: "1.5rem 0",
// // //             }}
// // //           >
// // //             {backendData ? JSON.stringify(backendData, null, 2) : "No data available"}
// // //           </pre>
// // //           <button
// // //             onClick={resetForm}
// // //             style={{
// // //               background: "linear-gradient(90deg, #ff00ff, #00ffff)",
// // //               border: "none",
// // //               color: "#fff",
// // //               padding: "10px 30px",
// // //               borderRadius: "25px",
// // //               fontWeight: 600,
// // //               cursor: "pointer",
// // //             }}
// // //           >
// // //             Back to Calculators
// // //           </button>
// // //         </div>
// // //       )}
// // //     </div>
// // //   );
// // // };

// // // export default Astrology;

// // import React, { useState } from "react";
// // import { Loader2, Sparkles, ArrowLeft } from "lucide-react";
// // import {
// //   KundliAPI,
// //   NumerologyAPI,
// //   CompatibilityAPI,
// //   GemstoneAPI,
// //   PlanetaryAPI,
// //   TransitAPI,
// //   ZodiacAPI,
// //   ManglikAPI,
// //   DashaAPI,
// //   NakshatraAPI,
// //   DailyPredictionAPI,
// //   HoroscopeAPI,
// // } from "../../api/apiService";

// // const calculators = [
// //   { label: "Kundli", deliverable: "Chart", price: "Free", desc: "Generate your complete birth chart with planetary positions" },
// //   { label: "Numerology", deliverable: "Report", price: "Free", desc: "Discover your life path number and destiny insights" },
// //   { label: "Compatibility", deliverable: "PDF", price: "Paid", desc: "Analyze relationship compatibility between two souls" },
// //   { label: "Gemstone Recommendation", deliverable: "Report", price: "Free", desc: "Find your lucky gemstones based on planetary alignment" },
// //   { label: "Dasha (Vimshottari)", deliverable: "Report", price: "Paid", desc: "Explore your planetary periods and life phases" },
// //   { label: "Manglik Calculator", deliverable: "Report", price: "Free", desc: "Check Manglik dosha and its effects on your life" },
// //   { label: "Nakshatra Calculator", deliverable: "Report", price: "Paid", desc: "Discover your birth star and its cosmic influence" },
// //   { label: "Planetary Calculator", deliverable: "Report", price: "Paid", desc: "Analyze planetary strengths and their impact" },
// //   { label: "Transit Calculator", deliverable: "Report", price: "Paid", desc: "Track current planetary movements affecting you" },
// //   { label: "Zodiac Calculator", deliverable: "Report", price: "Free", desc: "Find your sun, moon, and rising zodiac signs" },
// //   { label: "Daily Predictions", deliverable: "Report", price: "Paid", desc: "Get personalized daily astrological guidance" },
// //   { label: "Horoscope", deliverable: "Report", price: "Free", desc: "Read your detailed horoscope and predictions" },
// // ];

// // const navLinks = [
// //   { name: "Home", link: "/" },
// //   { name: "About Us", link: "/about-us" },
// //   { name: "Energy", link: "/energy" },
// //   { name: "Astrology", link: "/astrology" },
// //   { name: "Vastu", link: "/vastu" },
// //   { name: "Manifestation", link: "/manifestation" },
// //   { name: "Material", link: "/material" },
// //   { name: "Blogs", link: "/blogs" },
// //   { name: "Careers", link: "/careers" },
// //   { name: "Contact", link: "/contact" },
// //   { name: "Login / Signup", link: "/auth" },
// // ];

// // const Astrology = () => {
// //   const [sidebarOpen, setSidebarOpen] = useState(false);
// //   const [step, setStep] = useState(1);
// //   const [selectedCalculator, setSelectedCalculator] = useState(null);
// //   const [formData, setFormData] = useState({});
// //   const [backendData, setBackendData] = useState(null);
// //   const [loading, setLoading] = useState(false);

// //   const handleCalculatorSelect = (calc) => {
// //     setSelectedCalculator(calc);
// //     setStep(2);
// //   };

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData((prev) => ({ ...prev, [name]: value }));
// //   };

// //   const handleFormSubmit = async () => {
// //     setLoading(true);
// //     try {
// //       let response;
// //       switch (selectedCalculator.label) {
// //         case "Kundli":
// //           response = await KundliAPI.calculate(formData);
// //           break;
// //         case "Numerology":
// //           response = await NumerologyAPI.calculate(formData);
// //           break;
// //         case "Compatibility":
// //           response = await CompatibilityAPI.calculate(formData);
// //           break;
// //         case "Gemstone Recommendation":
// //           response = await GemstoneAPI.calculate(formData);
// //           break;
// //         case "Dasha (Vimshottari)":
// //           response = await DashaAPI.calculate(formData);
// //           break;
// //         case "Manglik Calculator":
// //           response = await ManglikAPI.calculate(formData);
// //           break;
// //         case "Nakshatra Calculator":
// //           response = await NakshatraAPI.calculate(formData);
// //           break;
// //         case "Planetary Calculator":
// //           response = await PlanetaryAPI.calculate(formData);
// //           break;
// //         case "Transit Calculator":
// //           response = await TransitAPI.calculate(formData);
// //           break;
// //         case "Zodiac Calculator":
// //           response = await ZodiacAPI.calculate(formData);
// //           break;
// //         case "Daily Predictions":
// //           response = await DailyPredictionAPI.create(formData);
// //           break;
// //         case "Horoscope":
// //           response = await HoroscopeAPI.calculate(formData);
// //           break;
// //         default:
// //           response = { data: { message: "No API mapped!" } };
// //       }
// //       setBackendData(response.data);
// //       setStep(3);
// //     } catch (err) {
// //       setBackendData({ error: err.message });
// //       setStep(3);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   const resetForm = () => {
// //     setStep(1);
// //     setSelectedCalculator(null);
// //     setBackendData(null);
// //     setFormData({});
// //   };

// //   return (
// //     <div
// //       style={{
// //         minHeight: "100vh",
// //         background: "radial-gradient(circle at top, #0a0018, #1e003f)",
// //         color: "#fff",
// //         fontFamily: "'Poppins', sans-serif",
// //         overflowX: "hidden",
// //       }}
// //     >
// //       {/* Sidebar */}
// //       <div
// //         style={{
// //           position: "fixed",
// //           top: 0,
// //           left: sidebarOpen ? 0 : "-270px",
// //           width: "270px",
// //           height: "100vh",
// //           background: "linear-gradient(180deg, rgba(20,0,40,0.95), rgba(5,0,20,0.9))",
// //           backdropFilter: "blur(14px)",
// //           boxShadow: "6px 0 25px rgba(255, 0, 255, 0.25)",
// //           transition: "left 0.5s ease-in-out",
// //           zIndex: 1000,
// //           padding: "30px 20px",
// //         }}
// //       >
// //         {sidebarOpen && (
// //           <button
// //             onClick={() => setSidebarOpen(false)}
// //             style={{
// //               position: "absolute",
// //               top: "18px",
// //               right: "18px",
// //               background: "linear-gradient(135deg, #ff00ff, #8a2be2)",
// //               border: "none",
// //               color: "#fff",
// //               fontSize: "20px",
// //               width: "40px",
// //               height: "40px",
// //               borderRadius: "50%",
// //               cursor: "pointer",
// //               boxShadow: "0 0 15px rgba(255, 0, 255, 0.4)",
// //             }}
// //           >
// //             ✕
// //           </button>
// //         )}
// //         <h2
// //           style={{
// //             fontSize: "28px",
// //             fontWeight: 700,
// //             textAlign: "center",
// //             background: "linear-gradient(90deg, #ff00ff, #00ffff)",
// //             WebkitBackgroundClip: "text",
// //             WebkitTextFillColor: "transparent",
// //             marginBottom: "35px",
// //           }}
// //         >
// //           AstroConnect
// //         </h2>
// //         <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
// //           {navLinks.map((item, idx) => (
// //             <li key={idx} style={{ margin: "14px 0" }}>
// //               <a
// //                 href={item.link}
// //                 onClick={() => setSidebarOpen(false)}
// //                 style={{
// //                   color: "#ccc",
// //                   display: "block",
// //                   padding: "12px 18px",
// //                   borderRadius: "10px",
// //                   textDecoration: "none",
// //                   fontSize: "1rem",
// //                   fontWeight: 500,
// //                   transition: "all 0.3s ease",
// //                 }}
// //               >
// //                 {item.name}
// //               </a>
// //             </li>
// //           ))}
// //         </ul>
// //       </div>

// //       {/* Hamburger */}
// //       {!sidebarOpen && (
// //         <button
// //           onClick={() => setSidebarOpen(true)}
// //           style={{
// //             position: "fixed",
// //             top: "22px",
// //             left: "25px",
// //             background: "linear-gradient(135deg, #ff00ff, #7b2cbf)",
// //             color: "#fff",
// //             border: "none",
// //             fontSize: "26px",
// //             borderRadius: "50%",
// //             width: "55px",
// //             height: "55px",
// //             cursor: "pointer",
// //             zIndex: 1100,
// //             boxShadow: "0 0 25px rgba(255, 0, 255, 0.4)",
// //           }}
// //         >
// //           ☰
// //         </button>
// //       )}

// //       {/* Header */}
// //       <div style={{ textAlign: "center", padding: "5rem 1.5rem 2rem" }}>
// //         <h1
// //           style={{
// //             fontSize: "2.5rem",
// //             fontWeight: 700,
// //             display: "flex",
// //             alignItems: "center",
// //             justifyContent: "center",
// //             gap: "10px",
// //           }}
// //         >
// //           <Sparkles size={26} /> Astro Calculators
// //         </h1>
// //         <p style={{ fontSize: "1.1rem", color: "#ccc", marginTop: "0.5rem" }}>
// //           Unlock astrological insights anytime, anywhere
// //         </p>
// //       </div>

// //       {/* Step 1: Calculator Grid */}
// //       {step === 1 && (
// //         <div
// //           style={{
// //             display: "grid",
// //             gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
// //             gap: "2rem",
// //             padding: "1rem 2rem 4rem",
// //             maxWidth: "1200px",
// //             margin: "0 auto",
// //           }}
// //         >
// //           {calculators.map((calc, i) => (
// //             <div
// //               key={i}
// //               onClick={() => handleCalculatorSelect(calc)}
// //               style={{
// //                 background: "rgba(255,255,255,0.15)",
// //                 borderRadius: "20px",
// //                 padding: "2rem 1.5rem",
// //                 textAlign: "center",
// //                 cursor: "pointer",
// //                 transition: "0.4s",
// //               }}
// //               onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
// //               onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
// //             >
// //               <h3 style={{ margin: "10px 0", fontSize: "1.3rem", fontWeight: 600 }}>{calc.label}</h3>
// //               <p style={{ fontSize: "0.95rem", color: "#ddd" }}>{calc.desc}</p>
// //               <p>Deliverable: {calc.deliverable}</p>
// //               <p>
// //                 Pricing:{" "}
// //                 <span style={{ color: calc.price === "Free" ? "#00ffcc" : "#ff66cc", fontWeight: 600 }}>
// //                   {calc.price}
// //                 </span>
// //               </p>
// //             </div>
// //           ))}
// //         </div>
// //       )}

// //       {/* Step 2: Form */}
// // {step === 2 && (
// //   <div
// //     style={{
// //       background: "rgba(255,255,255,0.1)",
// //       borderRadius: "20px",
// //       padding: "2.5rem 2rem",
// //       maxWidth: "700px",
// //       margin: "2rem auto",
// //       textAlign: "center",
// //       position: "relative",
// //     }}
// //   >
// //     {/* 🔙 Corner Back Button */}
// //     <button
// //       onClick={resetForm}
// //       style={{
// //         position: "absolute",
// //         top: "15px",
// //         left: "15px",
// //         background: "linear-gradient(135deg, #9333ea, #3b82f6)",
// //         color: "#fff",
// //         border: "none",
// //         borderRadius: "50%",
// //         width: "40px",
// //         height: "40px",
// //         display: "flex",
// //         alignItems: "center",
// //         justifyContent: "center",
// //         cursor: "pointer",
// //         boxShadow: "0 0 18px rgba(147, 51, 234, 0.5)",
// //         transition: "all 0.3s ease",
// //       }}
// //       onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
// //       onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
// //     >
// //       ←
// //     </button>

// //     <h2
// //       style={{
// //         background: "linear-gradient(90deg, #ff00ff, #00ffff)",
// //         WebkitBackgroundClip: "text",
// //         WebkitTextFillColor: "transparent",
// //         marginBottom: "1.5rem",
// //       }}
// //     >
// //       {selectedCalculator.label}
// //     </h2>

// //     {/* Form Fields */}
// //     <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
// //       {selectedCalculator.label === "Compatibility" ? (
// //         <>
// //           <h4 style={{ color: "white", textAlign: "left" }}>Person A</h4>
// //           <input name="fullNameA" placeholder="Full Name" onChange={handleChange} />
// //           <input type="date" name="dobA" onChange={handleChange} />
// //           <input type="time" name="timeSlotA" onChange={handleChange} />
// //           <input name="birthPlaceA" placeholder="Place of Birth" onChange={handleChange} />

// //           <h4 style={{ color: "white", textAlign: "left" }}>Person B</h4>
// //           <input name="fullNameB" placeholder="Full Name" onChange={handleChange} />
// //           <input type="date" name="dobB" onChange={handleChange} />
// //           <input type="time" name="timeSlotB" onChange={handleChange} />
// //           <input name="birthPlaceB" placeholder="Place of Birth" onChange={handleChange} />
// //         </>
// //       ) : selectedCalculator.label === "Numerology" ? (
// //         <>
// //           <input name="fullName" placeholder="Full Name" onChange={handleChange} />
// //           <input type="date" name="dob" onChange={handleChange} />
// //         </>
// //       ) : selectedCalculator.label === "Daily Predictions" ? (
// //         <input type="date" name="date" onChange={handleChange} />
// //       ) : (
// //         <>
// //           <input name="fullName" placeholder="Full Name" onChange={handleChange} />
// //           <input type="date" name="dob" onChange={handleChange} />
// //           <input type="time" name="timeSlot" onChange={handleChange} />
// //           <input name="birthPlace" placeholder="Place of Birth" onChange={handleChange} />
// //         </>
// //       )}
// //     </div>

// //     <button
// //       onClick={handleFormSubmit}
// //       style={{
// //         marginTop: "2rem",
// //         padding: "12px 36px",
// //         background: "linear-gradient(90deg, #ff00ff, #00ffff)",
// //         border: "none",
// //         borderRadius: "30px",
// //         color: "#fff",
// //         fontWeight: 600,
// //         cursor: "pointer",
// //       }}
// //     >
// //       {loading ? <Loader2 size={20} style={{ animation: "spin 1s linear infinite" }} /> : "Get Report"}
// //     </button>
// //   </div>
// // )}

// // {/* Step 3: Report */}
// // {step === 3 && (
// //   <div
// //     style={{
// //       background: "rgba(255,255,255,0.1)",
// //       borderRadius: "20px",
// //       padding: "2.5rem",
// //       maxWidth: "700px",
// //       margin: "2rem auto",
// //       textAlign: "center",
// //       position: "relative",
// //     }}
// //   >
// //     {/* 🔙 Corner Back Button */}
// //     <button
// //       onClick={() => setStep(2)}
// //       style={{
// //         position: "absolute",
// //         top: "15px",
// //         left: "15px",
// //         background: "linear-gradient(135deg, #9333ea, #3b82f6)",
// //         color: "#fff",
// //         border: "none",
// //         borderRadius: "50%",
// //         width: "40px",
// //         height: "40px",
// //         display: "flex",
// //         alignItems: "center",
// //         justifyContent: "center",
// //         cursor: "pointer",
// //         boxShadow: "0 0 18px rgba(147, 51, 234, 0.5)",
// //         transition: "all 0.3s ease",
// //       }}
// //       onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
// //       onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
// //     >
// //       ←
// //     </button>

// //     <h2>{selectedCalculator.label} Report</h2>
// //     <pre
// //       style={{
// //         textAlign: "left",
// //         whiteSpace: "pre-wrap",
// //         background: "rgba(255,255,255,0.1)",
// //         padding: "1rem",
// //         borderRadius: "10px",
// //         margin: "1.5rem 0",
// //       }}
// //     >
// //       {backendData ? JSON.stringify(backendData, null, 2) : "No data available"}
// //     </pre>
// //     <button
// //       onClick={resetForm}
// //       style={{
// //         background: "linear-gradient(90deg, #ff00ff, #00ffff)",
// //         border: "none",
// //         color: "#fff",
// //         padding: "10px 30px",
// //         borderRadius: "25px",
// //         fontWeight: 600,
// //         cursor: "pointer",
// //       }}
// //     >
// //       Back to Calculators
// //     </button>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default Astrology;

// import React, { useState } from "react";
// import { Loader2, Sparkles } from "lucide-react";
// import {
//   KundliAPI,
//   NumerologyAPI,
//   CompatibilityAPI,
//   GemstoneAPI,
//   PlanetaryAPI,
//   TransitAPI,
//   ZodiacAPI,
//   ManglikAPI,
//   DashaAPI,
//   NakshatraAPI,
//   DailyPredictionAPI,
//   HoroscopeAPI,
// } from "../../api/apiService";

// const calculators = [
//   { label: "Kundli", deliverable: "Chart", price: "Free", desc: "Generate your complete birth chart with planetary positions" },
//   { label: "Numerology", deliverable: "Report", price: "Free", desc: "Discover your life path number and destiny insights" },
//   { label: "Compatibility", deliverable: "PDF", price: "Paid", desc: "Analyze relationship compatibility between two souls" },
//   { label: "Gemstone Recommendation", deliverable: "Report", price: "Free", desc: "Find your lucky gemstones based on planetary alignment" },
//   { label: "Dasha (Vimshottari)", deliverable: "Report", price: "Paid", desc: "Explore your planetary periods and life phases" },
//   { label: "Manglik Calculator", deliverable: "Report", price: "Free", desc: "Check Manglik dosha and its effects on your life" },
//   { label: "Nakshatra Calculator", deliverable: "Report", price: "Paid", desc: "Discover your birth star and its cosmic influence" },
//   { label: "Planetary Calculator", deliverable: "Report", price: "Paid", desc: "Analyze planetary strengths and their impact" },
//   { label: "Transit Calculator", deliverable: "Report", price: "Paid", desc: "Track current planetary movements affecting you" },
//   { label: "Zodiac Calculator", deliverable: "Report", price: "Free", desc: "Find your sun, moon, and rising zodiac signs" },
//   { label: "Daily Predictions", deliverable: "Report", price: "Paid", desc: "Get personalized daily astrological guidance" },
//   { label: "Horoscope", deliverable: "Report", price: "Free", desc: "Read your detailed horoscope and predictions" },
// ];

// const navLinks = [
//   { name: "Home", link: "/" },
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

// const Astrology = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [step, setStep] = useState(1);
//   const [selectedCalculator, setSelectedCalculator] = useState(null);
//   const [formData, setFormData] = useState({});
//   const [backendData, setBackendData] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const handleCalculatorSelect = (calc) => {
//     setSelectedCalculator(calc);
//     setStep(2);
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   // ✅ Universal Submit Function (handles all calculators)
//   const handleFormSubmit = async () => {
//     setLoading(true);
//     try {
//       let response;
//       let payload = { ...formData };

//       switch (selectedCalculator.label) {
//         case "Kundli":
//           payload = {
//             name: formData.fullName,
//             dateOfBirth: formData.dob,
//             timeOfBirth: formData.timeSlot,
//             placeOfBirth: formData.birthPlace,
//           };
//           response = await KundliAPI.calculate(payload);
//           break;

//         case "Compatibility":
//           payload = {
//             boyName: formData.fullNameA,
//             boyDob: formData.dobA,
//             boyTob: formData.timeSlotA,
//             boyPlace: formData.birthPlaceA,
//             girlName: formData.fullNameB,
//             girlDob: formData.dobB,
//             girlTob: formData.timeSlotB,
//             girlPlace: formData.birthPlaceB,
//           };
//           response = await CompatibilityAPI.calculate(payload);
//           break;

//         case "Numerology":
//           payload = {
//             name: formData.fullName,
//             dateOfBirth: formData.dob,
//           };
//           response = await NumerologyAPI.calculate(payload);
//           break;

//         case "Gemstone Recommendation":
//           payload = {
//             name: formData.name,
//             dateOfBirth: formData.dob,
//             zodiacSign: formData.zodiacSign,
//           };
//           response = await GemstoneAPI.calculate(payload);
//           break;

//         case "Dasha (Vimshottari)":
//         case "Manglik Calculator":
//         case "Nakshatra Calculator":
//         case "Planetary Calculator":
//         case "Transit Calculator":
//           payload = {
//             name: formData.name,
//             dateOfBirth: formData.dob,
//             timeOfBirth: formData.timeSlot,
//             placeOfBirth: formData.birthPlace,
//           };
//           if (selectedCalculator.label === "Dasha (Vimshottari)") response = await DashaAPI.calculate(payload);
//           else if (selectedCalculator.label === "Manglik Calculator") response = await ManglikAPI.calculate(payload);
//           else if (selectedCalculator.label === "Nakshatra Calculator") response = await NakshatraAPI.calculate(payload);
//           else if (selectedCalculator.label === "Planetary Calculator") response = await PlanetaryAPI.calculate(payload);
//           else response = await TransitAPI.calculate(payload);
//           break;

//         // case "Zodiac Calculator":
//         //   payload = { dateOfBirth: formData.dob };
//         //   response = await ZodiacAPI.calculate(payload);
//         //   break;
//             case "Zodiac Calculator":
//           payload = {
//             name: formData.fullName || "User",
//             dateOfBirth: formData.dob,
//             timeOfBirth: formData.timeSlot || "00:00",
//             placeOfBirth: formData.birthPlace || "Unknown",
//           };
//           response = await ZodiacAPI.calculate(payload);
//           break;
//         case "Daily Predictions":
//           payload = { date: formData.date, zodiacSign: formData.zodiacSign };
//           response = await DailyPredictionAPI.create(payload);
//           break;

//         case "Horoscope":
//           payload = { name: formData.name, dateOfBirth: formData.dob };
//           response = await HoroscopeAPI.calculate(payload);
//           break;

//         default:
//           response = { data: { message: "No API mapped!" } };
//       }

//       console.log("✅ API Response:", response.data);
//       setBackendData(response);
//       setStep(3);
//     } catch (err) {
//       console.error("❌ API Error:", err.response?.data || err.message);
//       setBackendData({
//         error: err.response?.data?.message || "Something went wrong!",
//       });
//       setStep(3);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const resetForm = () => {
//     setStep(1);
//     setSelectedCalculator(null);
//     setBackendData(null);
//     setFormData({});
//   };

//   return (
//     <div
//       style={{
//         minHeight: "100vh",
//         background: "radial-gradient(circle at top, #0a0018, #1e003f)",
//         color: "#fff",
//         fontFamily: "'Poppins', sans-serif",
//         overflowX: "hidden",
//       }}
//     >
//       {/* Sidebar */}
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
//           AstroConnect
//         </h2>
//         <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
//           {navLinks.map((item, idx) => (
//             <li key={idx} style={{ margin: "14px 0" }}>
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
//           }}
//         >
//           ☰
//         </button>
//       )}

//       {/* Header */}
//       <div style={{ textAlign: "center", padding: "5rem 1.5rem 2rem" }}>
//         <h1 style={{ fontSize: "2.5rem", fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", gap: "10px" }}>
//           <Sparkles size={26} /> Astro Calculators
//         </h1>
//         <p style={{ fontSize: "1.1rem", color: "#ccc", marginTop: "0.5rem" }}>
//           Unlock astrological insights anytime, anywhere
//         </p>
//       </div>

//       {/* Step 1: Grid */}
//       {step === 1 && (
//         <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "2rem", padding: "1rem 2rem 4rem", maxWidth: "1200px", margin: "0 auto" }}>
//           {calculators.map((calc, i) => (
//             <div
//               key={i}
//               onClick={() => handleCalculatorSelect(calc)}
//               style={{
//                 background: "rgba(255,255,255,0.15)",
//                 borderRadius: "20px",
//                 padding: "2rem 1.5rem",
//                 textAlign: "center",
//                 cursor: "pointer",
//                 transition: "0.4s",
//               }}
//             >
//               <h3 style={{ margin: "10px 0", fontSize: "1.3rem", fontWeight: 600 }}>{calc.label}</h3>
//               <p style={{ fontSize: "0.95rem", color: "#ddd" }}>{calc.desc}</p>
//               <p>Deliverable: {calc.deliverable}</p>
//               <p>
//                 Pricing:{" "}
//                 <span style={{ color: calc.price === "Free" ? "#00ffcc" : "#ff66cc", fontWeight: 600 }}>
//                   {calc.price}
//                 </span>
//               </p>
//             </div>
//           ))}
//         </div>
//       )}

//       {/* Step 2: Dynamic Form */}
//       {step === 2 && (
//         <div style={{ background: "rgba(255,255,255,0.1)", borderRadius: "20px", padding: "2.5rem 2rem", maxWidth: "700px", margin: "2rem auto", textAlign: "center" }}>
//           <h2 style={{ background: "linear-gradient(90deg, #ff00ff, #00ffff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", marginBottom: "1.5rem" }}>
//             {selectedCalculator.label}
//           </h2>

//           <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
//             {selectedCalculator.label === "Kundli" && (
//               <>
//                 <input name="fullName" placeholder="Full Name" onChange={handleChange} />
//                 <input type="date" name="dob" onChange={handleChange} />
//                 <input type="time" name="timeSlot" onChange={handleChange} />
//                 <input name="birthPlace" placeholder="Place of Birth" onChange={handleChange} />
//               </>
//             )}

//             {selectedCalculator.label === "Compatibility" && (
//               <>
//                 <h4 style={{ color: "#00ffff", textAlign: "left" }}>Person A</h4>
//                 <input name="fullNameA" placeholder="Full Name" onChange={handleChange} />
//                 <input type="date" name="dobA" onChange={handleChange} />
//                 <input type="time" name="timeSlotA" onChange={handleChange} />
//                 <input name="birthPlaceA" placeholder="Place of Birth" onChange={handleChange} />

//                 <h4 style={{ color: "#ff66cc", textAlign: "left" }}>Person B</h4>
//                 <input name="fullNameB" placeholder="Full Name" onChange={handleChange} />
//                 <input type="date" name="dobB" onChange={handleChange} />
//                 <input type="time" name="timeSlotB" onChange={handleChange} />
//                 <input name="birthPlaceB" placeholder="Place of Birth" onChange={handleChange} />
//               </>
//             )}

//             {selectedCalculator.label === "Numerology" && (
//               <>
//                 <input name="fullName" placeholder="Full Name" onChange={handleChange} />
//                 <input type="date" name="dob" onChange={handleChange} />
//               </>
//             )}

//             {selectedCalculator.label === "Gemstone Recommendation" && (
//               <>
//                 <input name="name" placeholder="Full Name" onChange={handleChange} />
//                 <input type="date" name="dob" onChange={handleChange} />
//                 <input name="zodiacSign" placeholder="Zodiac Sign (Optional)" onChange={handleChange} />
//               </>
//             )}

//             {[
//               "Dasha (Vimshottari)",
//               "Manglik Calculator",
//               "Nakshatra Calculator",
//               "Planetary Calculator",
//               "Transit Calculator",
//             ].includes(selectedCalculator.label) && (
//               <>
//                 <input name="name" placeholder="Full Name" onChange={handleChange} />
//                 <input type="date" name="dob" onChange={handleChange} />
//                 <input type="time" name="timeSlot" onChange={handleChange} />
//                 <input name="birthPlace" placeholder="Place of Birth" onChange={handleChange} />
//               </>
//             )}

//             {selectedCalculator.label === "Zodiac Calculator" && (
//               <input type="date" name="dob" onChange={handleChange} />
//             )}

//             {selectedCalculator.label === "Daily Predictions" && (
//               <>
//                 <input type="date" name="date" onChange={handleChange} />
//                 <input name="zodiacSign" placeholder="Zodiac Sign" onChange={handleChange} />
//               </>
//             )}

//             {selectedCalculator.label === "Horoscope" && (
//               <>
//                 <input name="name" placeholder="Full Name" onChange={handleChange} />
//                 <input type="date" name="dob" onChange={handleChange} />
//               </>
//             )}
//           </div>

//           <button
//             onClick={handleFormSubmit}
//             style={{
//               marginTop: "2rem",
//               padding: "12px 36px",
//               background: "linear-gradient(90deg, #ff00ff, #00ffff)",
//               border: "none",
//               borderRadius: "30px",
//               color: "#fff",
//               fontWeight: 600,
//               cursor: "pointer",
//             }}
//           >
//             {loading ? <Loader2 size={20} style={{ animation: "spin 1s linear infinite" }} /> : "Get Report"}
//           </button>
//         </div>
//       )}

//       {/* Step 3: Report */}
//       {step === 3 && (
//         <div style={{ background: "rgba(255,255,255,0.1)", borderRadius: "20px", padding: "2.5rem", maxWidth: "700px", margin: "2rem auto", textAlign: "center" }}>
//           <h2>{selectedCalculator.label} Report</h2>
//           <pre style={{ textAlign: "left", whiteSpace: "pre-wrap", background: "rgba(255,255,255,0.1)", padding: "1rem", borderRadius: "10px", margin: "1.5rem 0" }}>
//             {backendData ? JSON.stringify(backendData, null, 2) : "No data available"}
//           </pre>
//           <button
//             onClick={resetForm}
//             style={{
//               background: "linear-gradient(90deg, #ff00ff, #00ffff)",
//               border: "none",
//               color: "#fff",
//               padding: "10px 30px",
//               borderRadius: "25px",
//               fontWeight: 600,
//               cursor: "pointer",
//             }}
//           >
//             Back to Calculators
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Astrology;

// import React, { useState } from "react";
// import { Loader2, Sparkles } from "lucide-react";
// import {
//   KundliAPI,
//   NumerologyAPI,
//   CompatibilityAPI,
//   GemstoneAPI,
//   PlanetaryAPI,
//   TransitAPI,
//   ZodiacAPI,
//   ManglikAPI,
//   DashaAPI,
//   NakshatraAPI,
//   DailyPredictionAPI,
//   HoroscopeAPI,
// } from "../../api/apiService";

// const calculators = [
//   { label: "Kundli", deliverable: "Chart", price: "Free", desc: "Generate your complete birth chart with planetary positions" },
//   { label: "Numerology", deliverable: "Report", price: "Free", desc: "Discover your life path number and destiny insights" },
//   { label: "Compatibility", deliverable: "PDF", price: "Paid", desc: "Analyze relationship compatibility between two souls" },
//   { label: "Gemstone Recommendation", deliverable: "Report", price: "Free", desc: "Find your lucky gemstones based on planetary alignment" },
//   { label: "Dasha (Vimshottari)", deliverable: "Report", price: "Paid", desc: "Explore your planetary periods and life phases" },
//   { label: "Manglik Calculator", deliverable: "Report", price: "Free", desc: "Check Manglik dosha and its effects on your life" },
//   { label: "Nakshatra Calculator", deliverable: "Report", price: "Paid", desc: "Discover your birth star and its cosmic influence" },
//   { label: "Planetary Calculator", deliverable: "Report", price: "Paid", desc: "Analyze planetary strengths and their impact" },
//   { label: "Transit Calculator", deliverable: "Report", price: "Paid", desc: "Track current planetary movements affecting you" },
//   { label: "Zodiac Calculator", deliverable: "Report", price: "Free", desc: "Find your sun, moon, and rising zodiac signs" },
//   { label: "Daily Predictions", deliverable: "Report", price: "Paid", desc: "Get personalized daily astrological guidance" },
//   { label: "Horoscope", deliverable: "Report", price: "Free", desc: "Read your detailed horoscope and predictions" },
// ];

// const Astrology = () => {
//   const [step, setStep] = useState(1);
//   const [selectedCalculator, setSelectedCalculator] = useState(null);
//   const [formData, setFormData] = useState({});
//   const [backendData, setBackendData] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const handleCalculatorSelect = (calc) => {
//     setSelectedCalculator(calc);
//     setStep(2);
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   // 🔮 Universal API Handler
//   const handleFormSubmit = async () => {
//     setLoading(true);
//     try {
//       let response;
//       let payload = { ...formData };

//       switch (selectedCalculator.label) {
//         case "Kundli":
//           payload = {
//             name: formData.fullName,
//             dateOfBirth: formData.dob,
//             timeOfBirth: formData.timeSlot,
//             placeOfBirth: formData.birthPlace,
//           };
//           response = await KundliAPI.calculate(payload);
//           break;

//         case "Compatibility":
//           payload = {
//             boyName: formData.fullNameA,
//             boyDob: formData.dobA,
//             boyTob: formData.timeSlotA,
//             boyPlace: formData.birthPlaceA,
//             girlName: formData.fullNameB,
//             girlDob: formData.dobB,
//             girlTob: formData.timeSlotB,
//             girlPlace: formData.birthPlaceB,
//           };
//           response = await CompatibilityAPI.calculate(payload);
//           break;

//         case "Numerology":
//           payload = { name: formData.fullName, dateOfBirth: formData.dob };
//           response = await NumerologyAPI.calculate(payload);
//           break;

//         case "Gemstone Recommendation":
//           payload = { name: formData.name, dateOfBirth: formData.dob, zodiacSign: formData.zodiacSign };
//           response = await GemstoneAPI.calculate(payload);
//           break;

//         case "Manglik Calculator":
//           payload = {
//             name: formData.name,
//             dateOfBirth: formData.dob,
//             timeOfBirth: formData.timeSlot,
//             placeOfBirth: formData.birthPlace,
//           };
//           response = await ManglikAPI.calculate(payload);
//           break;

//         case "Nakshatra Calculator":
//           payload = {
//             name: formData.name,
//             dateOfBirth: formData.dob,
//             timeOfBirth: formData.timeSlot,
//             placeOfBirth: formData.birthPlace,
//           };
//           response = await NakshatraAPI.calculate(payload);
//           break;

//         case "Dasha (Vimshottari)":
//           payload = {
//             name: formData.name,
//             dateOfBirth: formData.dob,
//             timeOfBirth: formData.timeSlot,
//             placeOfBirth: formData.birthPlace,
//           };
//           response = await DashaAPI.calculate(payload);
//           break;

//         case "Planetary Calculator":
//           payload = {
//             name: formData.name,
//             dateOfBirth: formData.dob,
//             timeOfBirth: formData.timeSlot,
//             placeOfBirth: formData.birthPlace,
//           };
//           response = await PlanetaryAPI.calculate(payload);
//           break;

//         case "Transit Calculator":
//           payload = {
//             name: formData.name,
//             dateOfBirth: formData.dob,
//             timeOfBirth: formData.timeSlot,
//             placeOfBirth: formData.birthPlace,
//           };
//           response = await TransitAPI.calculate(payload);
//           break;

//         case "Zodiac Calculator":
//           payload = {
//             name: formData.fullName,
//             dateOfBirth: formData.dob,
//             timeOfBirth: formData.timeSlot,
//             placeOfBirth: formData.birthPlace,
//           };
//           response = await ZodiacAPI.calculate(payload);
//           break;

//         case "Daily Predictions":
//           payload = { date: formData.date, zodiacSign: formData.zodiacSign };
//           response = await DailyPredictionAPI.create(payload);
//           break;
// case "Horoscope":
//   payload = {
//     name: formData.name,
//     dateOfBirth: formData.dob,
//     timeOfBirth: formData.timeSlot,
//     placeOfBirth: formData.birthPlace,
//   };
//   response = await HoroscopeAPI.calculate(payload);
//   break;


//         default:
//           response = { data: { message: "No API mapped!" } };
//       }

//       setBackendData(response.data || response);
//       setStep(3);
//     } catch (err) {
//       setBackendData({ error: err.response?.data?.message || "Something went wrong!" });
//       setStep(3);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const resetForm = () => {
//     setStep(1);
//     setSelectedCalculator(null);
//     setBackendData(null);
//     setFormData({});
//   };

//   return (
//     <div
//       style={{
//         minHeight: "100vh",
//         background: "radial-gradient(circle at top, #0a0018, #1e003f)",
//         color: "#fff",
//         fontFamily: "'Poppins', sans-serif",
//       }}
//     >
//       {/* 🌟 HEADER */}
//       <div style={{ textAlign: "center", padding: "5rem 1.5rem 2rem" }}>
//         <h1 style={{ fontSize: "2.5rem", fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", gap: "10px" }}>
//           <Sparkles size={26} /> Astro Calculators
//         </h1>
//         <p style={{ fontSize: "1.1rem", color: "#ccc" }}>Unlock astrological insights anytime, anywhere</p>
//       </div>

//       {/* 🔹 Step 1 — All Calculators Grid */}
//       {step === 1 && (
//         <div
//           style={{
//             display: "grid",
//             gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
//             gap: "2rem",
//             padding: "1rem 2rem 4rem",
//             maxWidth: "1200px",
//             margin: "0 auto",
//           }}
//         >
//           {calculators.map((calc, i) => (
//             <div
//               key={i}
//               onClick={() => handleCalculatorSelect(calc)}
//               style={{
//                 background: "rgba(255,255,255,0.15)",
//                 borderRadius: "20px",
//                 padding: "2rem 1.5rem",
//                 textAlign: "center",
//                 cursor: "pointer",
//                 transition: "0.4s",
//               }}
//             >
//               <h3 style={{ fontSize: "1.3rem", fontWeight: 600 }}>{calc.label}</h3>
//               <p style={{ fontSize: "0.95rem", color: "#ddd" }}>{calc.desc}</p>
//               <p>Deliverable: {calc.deliverable}</p>
//               <p>
//                 Pricing:{" "}
//                 <span style={{ color: calc.price === "Free" ? "#00ffcc" : "#ff66cc", fontWeight: 600 }}>
//                   {calc.price}
//                 </span>
//               </p>
//             </div>
//           ))}
//         </div>
//       )}

//       {/* 🔹 Step 2 — Dynamic Input Form */}
//       {step === 2 && (
//         <div
//           style={{
//             background: "rgba(255,255,255,0.1)",
//             borderRadius: "20px",
//             padding: "2.5rem 2rem",
//             maxWidth: "700px",
//             margin: "2rem auto",
//             textAlign: "center",
//           }}
//         >
//           <h2
//             style={{
//               background: "linear-gradient(90deg, #ff00ff, #00ffff)",
//               WebkitBackgroundClip: "text",
//               WebkitTextFillColor: "transparent",
//               marginBottom: "1.5rem",
//             }}
//           >
//             {selectedCalculator.label}
//           </h2>

//           <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
//             {/* ✅ Handle all calculator inputs dynamically */}
//             {["Kundli", "Zodiac Calculator", "Dasha (Vimshottari)", "Manglik Calculator", "Nakshatra Calculator", "Planetary Calculator", "Transit Calculator"].includes(selectedCalculator.label) && (
//               <>
//                 <input name="fullName" placeholder="Full Name" onChange={handleChange} />
//                 <input type="date" name="dob" onChange={handleChange} />
//                 <input type="time" name="timeSlot" onChange={handleChange} />
//                 <input name="birthPlace" placeholder="Place of Birth" onChange={handleChange} />
//               </>
//             )}

//             {selectedCalculator.label === "Numerology" && (
//               <>
//                 <input name="fullName" placeholder="Full Name" onChange={handleChange} />
//                 <input type="date" name="dob" onChange={handleChange} />
//               </>
//             )}

//             {selectedCalculator.label === "Compatibility" && (
//               <>
//                 <h4 style={{ color: "#00ffff" }}>Person A</h4>
//                 <input name="fullNameA" placeholder="Full Name" onChange={handleChange} />
//                 <input type="date" name="dobA" onChange={handleChange} />
//                 <input type="time" name="timeSlotA" onChange={handleChange} />
//                 <input name="birthPlaceA" placeholder="Place of Birth" onChange={handleChange} />
//                 <h4 style={{ color: "#ff66cc" }}>Person B</h4>
//                 <input name="fullNameB" placeholder="Full Name" onChange={handleChange} />
//                 <input type="date" name="dobB" onChange={handleChange} />
//                 <input type="time" name="timeSlotB" onChange={handleChange} />
//                 <input name="birthPlaceB" placeholder="Place of Birth" onChange={handleChange} />
//               </>
//             )}

//             {selectedCalculator.label === "Gemstone Recommendation" && (
//               <>
//                 <input name="name" placeholder="Full Name" onChange={handleChange} />
//                 <input type="date" name="dob" onChange={handleChange} />
//                 <input name="zodiacSign" placeholder="Zodiac Sign (Optional)" onChange={handleChange} />
//               </>
//             )}

//             {selectedCalculator.label === "Daily Predictions" && (
//               <>
//                 <input type="date" name="date" onChange={handleChange} />
//                 <input name="zodiacSign" placeholder="Zodiac Sign" onChange={handleChange} />
//               </>
//             )}

//             {selectedCalculator.label === "Horoscope" && (
//                <>
//     <input name="name" placeholder="Full Name" onChange={handleChange} />
//     <input type="date" name="dob" onChange={handleChange} />
//     <input type="time" name="timeSlot" onChange={handleChange} />
//     <input name="birthPlace" placeholder="Place of Birth" onChange={handleChange} />
//   </>
//             )}
//           </div>

//           <button
//             onClick={handleFormSubmit}
//             style={{
//               marginTop: "2rem",
//               padding: "12px 36px",
//               background: "linear-gradient(90deg, #ff00ff, #00ffff)",
//               border: "none",
//               borderRadius: "30px",
//               color: "#fff",
//               fontWeight: 600,
//               cursor: "pointer",
//             }}
//           >
//             {loading ? <Loader2 size={20} style={{ animation: "spin 1s linear infinite" }} /> : "Get Report"}
//           </button>
//         </div>
//       )}

//       {/* 🔹 Step 3 — Result View */}
//       {step === 3 && (
//         <div
//           style={{
//             background: "rgba(255,255,255,0.1)",
//             borderRadius: "20px",
//             padding: "2.5rem",
//             maxWidth: "700px",
//             margin: "2rem auto",
//             textAlign: "center",
//           }}
//         >
//           <h2>{selectedCalculator.label} Report</h2>
//           {backendData?.error ? (
//             <p style={{ color: "salmon" }}>❌ {backendData.error}</p>
//           ) : (
//             <pre
//               style={{
//                 textAlign: "left",
//                 whiteSpace: "pre-wrap",
//                 background: "rgba(255,255,255,0.1)",
//                 padding: "1rem",
//                 borderRadius: "10px",
//                 margin: "1.5rem 0",
//               }}
//             >
//               {backendData ? JSON.stringify(backendData, null, 2) : "No data available"}
//             </pre>
//           )}

//           <button
//             onClick={resetForm}
//             style={{
//               background: "linear-gradient(90deg, #ff00ff, #00ffff)",
//               border: "none",
//               color: "#fff",
//               padding: "10px 30px",
//               borderRadius: "25px",
//               fontWeight: 600,
//               cursor: "pointer",
//             }}
//           >
//             Back to Calculators
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Astrology;

// import React, { useState } from "react";
// import { Loader2, Sparkles } from "lucide-react";
// import {
//   KundliAPI,
//   NumerologyAPI,
//   CompatibilityAPI,
//   GemstoneAPI,
//   PlanetaryAPI,
//   TransitAPI,
//   ZodiacAPI,
//   ManglikAPI,
//   DashaAPI,
//   NakshatraAPI,
//   DailyPredictionAPI,
//   HoroscopeAPI,
// } from "../../api/apiService";

// const calculators = [
//   { label: "Kundli", deliverable: "Chart", price: "Free", desc: "Generate your complete birth chart with planetary positions" },
//   { label: "Numerology", deliverable: "Report", price: "Free", desc: "Discover your life path number and destiny insights" },
//   { label: "Compatibility", deliverable: "PDF", price: "Paid", desc: "Analyze relationship compatibility between two souls" },
//   { label: "Gemstone Recommendation", deliverable: "Report", price: "Free", desc: "Find your lucky gemstones based on planetary alignment" },
//   { label: "Dasha (Vimshottari)", deliverable: "Report", price: "Paid", desc: "Explore your planetary periods and life phases" },
//   { label: "Manglik Calculator", deliverable: "Report", price: "Free", desc: "Check Manglik dosha and its effects on your life" },
//   { label: "Nakshatra Calculator", deliverable: "Report", price: "Paid", desc: "Discover your birth star and its cosmic influence" },
//   { label: "Planetary Calculator", deliverable: "Report", price: "Paid", desc: "Analyze planetary strengths and their impact" },
//   { label: "Transit Calculator", deliverable: "Report", price: "Paid", desc: "Track current planetary movements affecting you" },
//   { label: "Zodiac Calculator", deliverable: "Report", price: "Free", desc: "Find your sun, moon, and rising zodiac signs" },
//   { label: "Daily Predictions", deliverable: "Report", price: "Paid", desc: "Get personalized daily astrological guidance" },
//   { label: "Horoscope", deliverable: "Report", price: "Free", desc: "Read your detailed horoscope and predictions" },
// ];

// const navLinks = [
//   { name: "Home", link: "/" },
//   { name: "About Us", link: "/about-us" },
//   { name: "Energy", link: "/energy" },
//   { name: "Astrology", link: "/astrology" },
//   { name: "Vastu", link: "/vastu" },
//   { name: "Manifestation", link: "/manifestation" },
//   { name: "Material", link: "/material" },
//   { name: "Blogs", link: "/blogs" },
//   { name: "Contact", link: "/contact" },
//   { name: "Login / Signup", link: "/auth" },
// ];

// const Astrology = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [step, setStep] = useState(1);
//   const [selectedCalculator, setSelectedCalculator] = useState(null);
//   const [formData, setFormData] = useState({});
//   const [backendData, setBackendData] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const handleCalculatorSelect = (calc) => {
//     setSelectedCalculator(calc);
//     setStep(2);
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleFormSubmit = async () => {
//     setLoading(true);
//     try {
//       let response;
//       let payload = { ...formData };

//       switch (selectedCalculator.label) {
//         case "Kundli":
//           payload = {
//             name: formData.fullName,
//             dateOfBirth: formData.dob,
//             timeOfBirth: formData.timeSlot,
//             placeOfBirth: formData.birthPlace,
//           };
//           response = await KundliAPI.calculate(payload);
//           break;

//         case "Compatibility":
//           payload = {
//             boyName: formData.fullNameA,
//             boyDob: formData.dobA,
//             boyTob: formData.timeSlotA,
//             boyPlace: formData.birthPlaceA,
//             girlName: formData.fullNameB,
//             girlDob: formData.dobB,
//             girlTob: formData.timeSlotB,
//             girlPlace: formData.birthPlaceB,
//           };
//           response = await CompatibilityAPI.calculate(payload);
//           break;

//         case "Numerology":
//           payload = { name: formData.fullName, dateOfBirth: formData.dob };
//           response = await NumerologyAPI.calculate(payload);
//           break;

//         case "Gemstone Recommendation":
//           payload = { name: formData.name, dateOfBirth: formData.dob, zodiacSign: formData.zodiacSign };
//           response = await GemstoneAPI.calculate(payload);
//           break;

//         case "Manglik Calculator":
//         case "Nakshatra Calculator":
//         case "Dasha (Vimshottari)":
//         case "Planetary Calculator":
//         case "Transit Calculator":
//         case "Horoscope":
//           payload = {
//             name: formData.fullName || formData.name,
//             dateOfBirth: formData.dob,
//             timeOfBirth: formData.timeSlot,
//             placeOfBirth: formData.birthPlace,
//           };
//           response = await ({
//             "Manglik Calculator": ManglikAPI,
//             "Nakshatra Calculator": NakshatraAPI,
//             "Dasha (Vimshottari)": DashaAPI,
//             "Planetary Calculator": PlanetaryAPI,
//             "Transit Calculator": TransitAPI,
//             "Horoscope": HoroscopeAPI,
//           }[selectedCalculator.label]).calculate(payload);
//           break;

//         case "Zodiac Calculator":
//           payload = {
//             name: formData.fullName,
//             dateOfBirth: formData.dob,
//             timeOfBirth: formData.timeSlot,
//             placeOfBirth: formData.birthPlace,
//           };
//           response = await ZodiacAPI.calculate(payload);
//           break;

//         case "Daily Predictions":
//           payload = { date: formData.date, zodiacSign: formData.zodiacSign };
//           response = await DailyPredictionAPI.create(payload);
//           break;

//         default:
//           response = { data: { message: "No API mapped!" } };
//       }

//       setBackendData(response.data || response);
//       setStep(3);
//     } catch (err) {
//       setBackendData({ error: err.response?.data?.message || "Something went wrong!" });
//       setStep(3);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const resetForm = () => {
//     setStep(1);
//     setSelectedCalculator(null);
//     setBackendData(null);
//     setFormData({});
//   };

//   return (
//     <div
//       style={{
//         minHeight: "100vh",
//         background: "radial-gradient(circle at top, #0a0018, #1e003f)",
//         color: "#fff",
//         fontFamily: "'Poppins', sans-serif",
//         overflowX: "hidden",
//       }}
//     >
    
//       {/* ⭐ OUTSIDE OVERLAY (click → close sidebar) */}
//       {sidebarOpen && (
//         <div
//           onClick={() => setSidebarOpen(false)}
//           style={{
//             position: "fixed",
//             inset: 0,
//             background: "rgba(0,0,0,0.4)",
//             zIndex: 900,
//           }}
//         />
//       )}

//       {/* ⭐ SIDEBAR (inside click → close too) */}
//       <div
//         onClick={() => setSidebarOpen(false)}
//         style={{
//           position: "fixed",
//           top: 0,
//           left: sidebarOpen ? 0 : "-270px",
//           width: "270px",
//           height: "100vh",
//           background: "linear-gradient(180deg, rgba(20,0,40,0.95), rgba(5,0,20,0.9))",
//           backdropFilter: "blur(14px)",
//           boxShadow: "6px 0 25px rgba(255, 0, 255, 0.25)",
//           transition: "left 0.4s ease",
//           zIndex: 1000,
//           padding: "30px 20px",
//         }}
//       >
//         <h2
//           style={{
//             fontSize: "26px",
//             fontWeight: 700,
//             textAlign: "center",
//             background: "linear-gradient(90deg, #ff00ff, #00ffff)",
//             WebkitBackgroundClip: "text",
//             WebkitTextFillColor: "transparent",
//             marginBottom: "25px",
//           }}
//         >
//           🔮 AstroConnect
//         </h2>

//         <ul style={{ listStyle: "none", padding: 0 }}>
//           {navLinks.map((item, idx) => (
//             <li key={idx} style={{ margin: "12px 0" }}>
//               <a
//                 href={item.link}
//                 onClick={() => setSidebarOpen(false)}
//                 style={{
//                   color: "#ccc",
//                   textDecoration: "none",
//                   display: "block",
//                   padding: "10px 14px",
//                   borderRadius: "10px",
//                   transition: "0.3s",
//                 }}
//                 onMouseEnter={(e) => (e.target.style.color = "#fff")}
//                 onMouseLeave={(e) => (e.target.style.color = "#ccc")}
//               >
//                 {item.name}
//               </a>
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* ⭐ HAMBURGER → only open */}
//       {!sidebarOpen && (
//         <button
//           onClick={() => setSidebarOpen(true)}
//           style={{
//             position: "fixed",
//             top: "25px",
//             left: "25px",
//             background: "linear-gradient(135deg, #ff00ff, #7b2cbf)",
//             border: "none",
//             color: "#fff",
//             fontSize: "26px",
//             width: "55px",
//             height: "55px",
//             borderRadius: "50%",
//             cursor: "pointer",
//             boxShadow: "0 0 25px rgba(255, 0, 255, 0.4)",
//             zIndex: 1100,
//           }}
//         >
//           ☰
//         </button>
//       )}

//       {/* 🌟 HEADER */}
//       <div style={{ textAlign: "center", padding: "5rem 1.5rem 2rem" }}>
//         <h1 style={{ fontSize: "2.5rem", fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", gap: "10px" }}>
//           <Sparkles size={26} /> Astro Calculators
//         </h1>
//         <p style={{ fontSize: "1.1rem", color: "#ccc" }}>Unlock astrological insights anytime, anywhere</p>
//       </div>

//       {/* Step 1: All Calculators */}
//       {step === 1 && (
//         <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "2rem", padding: "1rem 2rem 4rem", maxWidth: "1200px", margin: "0 auto" }}>
//           {calculators.map((calc, i) => (
//             <div key={i} onClick={() => handleCalculatorSelect(calc)} style={{ background: "rgba(255,255,255,0.15)", borderRadius: "20px", padding: "2rem 1.5rem", textAlign: "center", cursor: "pointer", transition: "0.4s" }}>
//               <h3 style={{ fontSize: "1.3rem", fontWeight: 600 }}>{calc.label}</h3>
//               <p style={{ fontSize: "0.95rem", color: "#ddd" }}>{calc.desc}</p>
//               <p>Deliverable: {calc.deliverable}</p>
//               <p>Pricing: <span style={{ color: calc.price === "Free" ? "#00ffcc" : "#ff66cc", fontWeight: 600 }}>{calc.price}</span></p>
//             </div>
//           ))}
//         </div>
//       )}

//       {/* Step 2: Dynamic Form */}
//       {step === 2 && (
//         <div style={formContainerStyle}>
//           <h2 style={titleStyle}>{selectedCalculator.label}</h2>

//           <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
//             {["Kundli", "Zodiac Calculator", "Dasha (Vimshottari)", "Manglik Calculator", "Nakshatra Calculator", "Planetary Calculator", "Transit Calculator", "Horoscope"].includes(selectedCalculator.label) && (
//               <>
//                 <input name="fullName" placeholder="Full Name" onChange={handleChange} />
//                 <input type="date" name="dob" onChange={handleChange} />
//                 <input type="time" name="timeSlot" onChange={handleChange} />
//                 <input name="birthPlace" placeholder="Place of Birth" onChange={handleChange} />
//               </>
//             )}

//             {selectedCalculator.label === "Numerology" && (
//               <>
//                 <input name="fullName" placeholder="Full Name" onChange={handleChange} />
//                 <input type="date" name="dob" onChange={handleChange} />
//               </>
//             )}

//             {selectedCalculator.label === "Compatibility" && (
//               <>
//                 <h4 style={{ color: "#00ffff" }}>Person A</h4>
//                 <input name="fullNameA" placeholder="Full Name" onChange={handleChange} />
//                 <input type="date" name="dobA" onChange={handleChange} />
//                 <input type="time" name="timeSlotA" onChange={handleChange} />
//                 <input name="birthPlaceA" placeholder="Place of Birth" onChange={handleChange} />
//                 <h4 style={{ color: "#ff66cc" }}>Person B</h4>
//                 <input name="fullNameB" placeholder="Full Name" onChange={handleChange} />
//                 <input type="date" name="dobB" onChange={handleChange} />
//                 <input type="time" name="timeSlotB" onChange={handleChange} />
//                 <input name="birthPlaceB" placeholder="Place of Birth" onChange={handleChange} />
//               </>
//             )}

//             {selectedCalculator.label === "Gemstone Recommendation" && (
//               <>
//                 <input name="name" placeholder="Full Name" onChange={handleChange} />
//                 <input type="date" name="dob" onChange={handleChange} />
//                 <input name="zodiacSign" placeholder="Zodiac Sign (Optional)" onChange={handleChange} />
//               </>
//             )}

//             {selectedCalculator.label === "Daily Predictions" && (
//               <>
//                 <input type="date" name="date" onChange={handleChange} />
//                 <input name="zodiacSign" placeholder="Zodiac Sign" onChange={handleChange} />
//               </>
//             )}
//           </div>

//           <button onClick={handleFormSubmit} style={{ marginTop: "2rem", padding: "12px 36px", background: "linear-gradient(90deg, #ff00ff, #00ffff)", border: "none", borderRadius: "30px", color: "#fff", fontWeight: 600, cursor: "pointer" }}>
//             {loading ? <Loader2 size={20} style={{ animation: "spin 1s linear infinite" }} /> : "Get Report"}
//           </button>

//           <button onClick={resetForm} style={{ marginTop: "1rem", background: "linear-gradient(90deg, #ff00ff, #00ffff)", border: "none", padding: "10px 25px", borderRadius: "25px", color: "#fff", cursor: "pointer", fontWeight: 600 }}>
//             ⬅ Back
//           </button>
//         </div>
//       )}

//       {/* Step 3: Results */}
//       {step === 3 && (
//         <div style={resultContainerStyle}>
//           <h2>{selectedCalculator.label} Report</h2>
//           {backendData?.error ? (
//             <p style={{ color: "salmon" }}>❌ {backendData.error}</p>
//           ) : (
//             <pre style={preStyle}>{backendData ? JSON.stringify(backendData, null, 2) : "No data available"}</pre>
//           )}
//           <button onClick={resetForm} style={backBtnStyle}>
//             ⬅ Back to Calculators
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// // ✅ Reusable Inline Styles
// const formContainerStyle = {
//   background: "rgba(255,255,255,0.1)",
//   borderRadius: "20px",
//   padding: "2.5rem 2rem",
//   maxWidth: "700px",
//   margin: "2rem auto",
//   textAlign: "center",
// };
// const resultContainerStyle = {
//   background: "rgba(255,255,255,0.1)",
//   borderRadius: "20px",
//   padding: "2.5rem",
//   maxWidth: "700px",
//   margin: "2rem auto",
//   textAlign: "center",
// };
// const titleStyle = {
//   background: "linear-gradient(90deg, #ff00ff, #00ffff)",
//   WebkitBackgroundClip: "text",
//   WebkitTextFillColor: "transparent",
//   marginBottom: "1.5rem",
// };
// const preStyle = {
//   textAlign: "left",
//   whiteSpace: "pre-wrap",
//   background: "rgba(255,255,255,0.1)",
//   padding: "1rem",
//   borderRadius: "10px",
//   margin: "1.5rem 0",
// };
// const backBtnStyle = {
//   background: "linear-gradient(90deg, #ff00ff, #00ffff)",
//   border: "none",
//   color: "#fff",
//   padding: "10px 30px",
//   borderRadius: "25px",
//   fontWeight: 600,
//   cursor: "pointer",
// };

// export default Astrology;


import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Loader2, Sparkles } from "lucide-react";

import {
  KundliAPI,
  NumerologyAPI,
  CompatibilityAPI,
  GemstoneAPI,
  PlanetaryAPI,
  TransitAPI,
  ZodiacAPI,
  ManglikAPI,
  DashaAPI,
  NakshatraAPI,
  DailyPredictionAPI,
  HoroscopeAPI,
} from "../../api/apiService";

// ============ CALCULATOR LIST ============
const calculators = [
  { label: "Kundli", deliverable: "Chart", price: "Free", desc: "Generate your complete birth chart with planetary positions" },
  { label: "Numerology", deliverable: "Report", price: "Free", desc: "Discover your life path number and destiny insights" },
  { label: "Compatibility", deliverable: "PDF", price: "Paid", desc: "Analyze relationship compatibility between two souls" },
  { label: "Gemstone Recommendation", deliverable: "Report", price: "Free", desc: "Find your lucky gemstones based on planetary alignment" },
  { label: "Dasha (Vimshottari)", deliverable: "Report", price: "Paid", desc: "Explore your planetary periods and life phases" },
  { label: "Manglik Calculator", deliverable: "Report", price: "Free", desc: "Check Manglik dosha and its effects on your life" },
  { label: "Nakshatra Calculator", deliverable: "Report", price: "Paid", desc: "Discover your birth star and its cosmic influence" },
  { label: "Planetary Calculator", deliverable: "Report", price: "Paid", desc: "Analyze planetary strengths and their impact" },
  { label: "Transit Calculator", deliverable: "Report", price: "Paid", desc: "Track current planetary movements affecting you" },
  { label: "Zodiac Calculator", deliverable: "Report", price: "Free", desc: "Find your sun, moon, and rising zodiac signs" },
  { label: "Daily Predictions", deliverable: "Report", price: "Paid", desc: "Get personalized daily astrological guidance" },
  { label: "Horoscope", deliverable: "Report", price: "Free", desc: "Read your detailed horoscope and predictions" },
];

const navLinks = [
  { name: "Home", link: "/" },
  { name: "About Us", link: "/about-us" },
  { name: "Energy", link: "/energy" },
  { name: "Astrology", link: "/astrology" },
  { name: "Vastu", link: "/vastu" },
  { name: "Manifestation", link: "/manifestation" },
  { name: "Material", link: "/material" },
  { name: "Blogs", link: "/blogs" },
  { name: "Contact", link: "/contact" },
  { name: "Login / Signup", link: "/auth" },
];

const Astrology = () => {
  const navigate = useNavigate();

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [selectedCalculator, setSelectedCalculator] = useState(null);
  const [formData, setFormData] = useState({});
  const [backendData, setBackendData] = useState(null);
  const [loading, setLoading] = useState(false);

  

  const handleCalculatorSelect = (calc) => {
    setSelectedCalculator(calc);
    setFormData({});
    setStep(2);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async () => {
    setLoading(true);
    try {
      let response;
      let payload = { ...formData };

      switch (selectedCalculator.label) {
        case "Kundli":
          payload = {
            name: formData.fullName,
            dateOfBirth: formData.dob,
            timeOfBirth: formData.timeSlot,
            placeOfBirth: formData.birthPlace,
          };
          response = await KundliAPI.calculate(payload);
          break;

        case "Compatibility":
          payload = {
            boyName: formData.fullNameA,
            boyDob: formData.dobA,
            boyTob: formData.timeSlotA,
            boyPlace: formData.birthPlaceA,
            girlName: formData.fullNameB,
            girlDob: formData.dobB,
            girlTob: formData.timeSlotB,
            girlPlace: formData.birthPlaceB,
          };
          response = await CompatibilityAPI.calculate(payload);
          break;

        case "Numerology":
          payload = { name: formData.fullName, dateOfBirth: formData.dob };
          response = await NumerologyAPI.calculate(payload);
          break;

        case "Gemstone Recommendation":
          payload = { name: formData.name, dateOfBirth: formData.dob, zodiacSign: formData.zodiacSign };
          response = await GemstoneAPI.calculate(payload);
          break;

        case "Manglik Calculator":
        case "Nakshatra Calculator":
        case "Dasha (Vimshottari)":
        case "Planetary Calculator":
        case "Transit Calculator":
        case "Horoscope":
          payload = {
            name: formData.fullName || formData.name,
            dateOfBirth: formData.dob,
            timeOfBirth: formData.timeSlot,
            placeOfBirth: formData.birthPlace,
          };
          response = await ({
            "Manglik Calculator": ManglikAPI,
            "Nakshatra Calculator": NakshatraAPI,
            "Dasha (Vimshottari)": DashaAPI,
            "Planetary Calculator": PlanetaryAPI,
            "Transit Calculator": TransitAPI,
            "Horoscope": HoroscopeAPI,
          }[selectedCalculator.label]).calculate(payload);
          break;

        case "Zodiac Calculator":
          payload = {
            name: formData.fullName,
            dateOfBirth: formData.dob,
            timeOfBirth: formData.timeSlot,
            placeOfBirth: formData.birthPlace,
          };
          response = await ZodiacAPI.calculate(payload);
          break;

        case "Daily Predictions":
          payload = { date: formData.date, zodiacSign: formData.zodiacSign };
          response = await DailyPredictionAPI.create(payload);
          break;

        default:
          response = { data: { message: "No API mapped!" } };
      }

      console.log("✅ API Response:", response);
      setBackendData(response.data || response);
      setStep(3);
    } catch (err) {
      console.error("❌ API Error:", err);
      setBackendData({ error: err.response?.data?.message || "Something went wrong!" });
      setStep(3);
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setStep(1);
    setSelectedCalculator(null);
    setBackendData(null);
    setFormData({});
  };

  const renderReport = () => {
    if (!backendData || backendData.error) {
      return (
        <div style={{ padding: "2rem", textAlign: "center", color: "#ff6b6b" }}>
          <h3>❌ Error Processing Report</h3>
          <p>{backendData?.error || "Failed to generate report"}</p>
        </div>
      );
    }

    switch (selectedCalculator.label) {
      case "Kundli":
        return <KundliReport data={backendData} formData={formData} />;
      case "Numerology":
        return <NumerologyReport data={backendData} formData={formData} />;
      case "Compatibility":
        return <CompatibilityReport data={backendData} formData={formData} />;
      case "Gemstone Recommendation":
        return <GemstoneReport data={backendData} formData={formData} />;
      case "Dasha (Vimshottari)":
        return <DashaReport data={backendData} formData={formData} />;
      case "Manglik Calculator":
        return <ManglikReport data={backendData} formData={formData} />;
      case "Nakshatra Calculator":
        return <NakshatraReport data={backendData} formData={formData} />;
      case "Planetary Calculator":
        return <PlanetaryReport data={backendData} formData={formData} />;
      case "Transit Calculator":
        return <TransitReport data={backendData} formData={formData} />;
      case "Zodiac Calculator":
        return <ZodiacReport data={backendData} formData={formData} />;
      case "Daily Predictions":
        return <DailyPredictionReport data={backendData} formData={formData} />;
      case "Horoscope":
        return <HoroscopeReport data={backendData} formData={formData} />;
      default:
        return <GenericReport data={backendData} formData={formData} />;
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "radial-gradient(circle at top, #0a0018, #1e003f)",
        color: "#fff",
        fontFamily: "'Poppins', sans-serif",
        overflowX: "hidden",
      }}
    >
      {/* OVERLAY */}
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
        onClick={() => setSidebarOpen(false)}
        style={{
          position: "fixed",
          top: 0,
          left: sidebarOpen ? 0 : "-270px",
          width: "270px",
          height: "100vh",
          background: "linear-gradient(180deg, rgba(20,0,40,0.95), rgba(5,0,20,0.9))",
          backdropFilter: "blur(14px)",
          boxShadow: "6px 0 25px rgba(255, 0, 255, 0.25)",
          transition: "left 0.4s ease",
          zIndex: 1000,
          padding: "30px 20px",
        }}
      >
        <h2 style={{ fontSize: "26px", fontWeight: 700, textAlign: "center", background: "linear-gradient(90deg, #ff00ff, #00ffff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", marginBottom: "25px" }}>
          THE FIFTH CUSP
        </h2>

        <ul style={{ listStyle: "none", padding: 0 }}>
          {navLinks.map((item, idx) => (
            <li key={idx} style={{ margin: "12px 0" }}>
              <a href={item.link} onClick={() => setSidebarOpen(false)} style={{ color: "#ccc", textDecoration: "none", display: "block", padding: "10px 14px", borderRadius: "10px", transition: "0.3s" }} onMouseEnter={(e) => (e.target.style.color = "#fff")} onMouseLeave={(e) => (e.target.style.color = "#ccc")}>
                {item.name}
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
            top: "25px",
            left: "25px",
            background: "linear-gradient(135deg, #ff00ff, #7b2cbf)",
            border: "none",
            color: "#fff",
            fontSize: "26px",
            width: "55px",
            height: "55px",
            borderRadius: "50%",
            cursor: "pointer",
            boxShadow: "0 0 25px rgba(255, 0, 255, 0.4)",
            zIndex: 1100,
          }}
        >
          ☰
        </button>
      )}

      {/* HEADER */}
      <div style={{ textAlign: "center", padding: "5rem 1.5rem 2rem" }}>
        <h1 style={{ fontSize: "2.5rem", fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", gap: "10px" }}>
          <Sparkles size={26} /> Astro Calculators
        </h1>
        <p style={{ fontSize: "1.1rem", color: "#ccc" }}>Unlock astrological insights anytime, anywhere</p>
      </div>

      {/* STEP 1: CALCULATOR SELECTION */}
      {step === 1 && (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem", padding: "1rem 2rem 4rem", maxWidth: "1200px", margin: "0 auto" }}>
          {calculators.map((calc, i) => (
            <div
              key={i}
              onClick={() => handleCalculatorSelect(calc)}
              style={{
                background: "rgba(255,255,255,0.08)",
                borderRadius: "20px",
                padding: "2rem 1.5rem",
                textAlign: "center",
                cursor: "pointer",
                transition: "0.4s",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-8px)";
                e.currentTarget.style.boxShadow = "0 15px 40px rgba(255,0,255,0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <h3 style={{ fontSize: "1.3rem", fontWeight: 600, marginBottom: "0.5rem" }}>{calc.label}</h3>
              <p style={{ fontSize: "0.95rem", color: "#ddd", marginBottom: "1rem" }}>{calc.desc}</p>
              <p style={{ fontSize: "0.9rem", marginBottom: "0.5rem" }}>📄 {calc.deliverable}</p>
              <p>
                <span style={{ color: calc.price === "Free" ? "#00ffcc" : "#ff66cc", fontWeight: 600 }}>
                  {calc.price}
                </span>
              </p>
            </div>
          ))}
        </div>
      )}

      {/* STEP 2: FORM */}
      {step === 2 && (
        <div style={formContainerStyle}>
          <h2 style={titleStyle}>{selectedCalculator.label}</h2>
          <p style={{ color: "#ccc", marginBottom: "2rem" }}>{selectedCalculator.desc}</p>

          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {["Kundli", "Zodiac Calculator", "Dasha (Vimshottari)", "Manglik Calculator", "Nakshatra Calculator", "Planetary Calculator", "Transit Calculator", "Horoscope"].includes(selectedCalculator.label) && (
              <>
                <input name="fullName" placeholder="Full Name *" onChange={handleChange} value={formData.fullName || ""} style={inputStyle} required />
                <input type="date" name="dob" onChange={handleChange} value={formData.dob || ""} style={inputStyle} required />
                <input type="time" name="timeSlot" onChange={handleChange} value={formData.timeSlot || ""} style={inputStyle} required />
                <input name="birthPlace" placeholder="Place of Birth *" onChange={handleChange} value={formData.birthPlace || ""} style={inputStyle} required />
              </>
            )}

            {selectedCalculator.label === "Numerology" && (
              <>
                <input name="fullName" placeholder="Full Name *" onChange={handleChange} value={formData.fullName || ""} style={inputStyle} required />
                <input type="date" name="dob" onChange={handleChange} value={formData.dob || ""} style={inputStyle} required />
              </>
            )}

            {selectedCalculator.label === "Compatibility" && (
              <>
                <h4 style={{ color: "#00ffff", marginTop: "1rem" }}>👨 Person A</h4>
                <input name="fullNameA" placeholder="Full Name *" onChange={handleChange} value={formData.fullNameA || ""} style={inputStyle} required />
                <input type="date" name="dobA" onChange={handleChange} value={formData.dobA || ""} style={inputStyle} required />
                <input type="time" name="timeSlotA" onChange={handleChange} value={formData.timeSlotA || ""} style={inputStyle} required />
                <input name="birthPlaceA" placeholder="Place of Birth *" onChange={handleChange} value={formData.birthPlaceA || ""} style={inputStyle} required />

                <h4 style={{ color: "#ff66cc", marginTop: "1.5rem" }}>👩 Person B</h4>
                <input name="fullNameB" placeholder="Full Name *" onChange={handleChange} value={formData.fullNameB || ""} style={inputStyle} required />
                <input type="date" name="dobB" onChange={handleChange} value={formData.dobB || ""} style={inputStyle} required />
                <input type="time" name="timeSlotB" onChange={handleChange} value={formData.timeSlotB || ""} style={inputStyle} required />
                <input name="birthPlaceB" placeholder="Place of Birth *" onChange={handleChange} value={formData.birthPlaceB || ""} style={inputStyle} required />
              </>
            )}

            {selectedCalculator.label === "Gemstone Recommendation" && (
              <>
                <input name="name" placeholder="Full Name *" onChange={handleChange} value={formData.name || ""} style={inputStyle} required />
                <input type="date" name="dob" onChange={handleChange} value={formData.dob || ""} style={inputStyle} required />
                <input name="zodiacSign" placeholder="Zodiac Sign (Optional)" onChange={handleChange} value={formData.zodiacSign || ""} style={inputStyle} />
              </>
            )}

            {selectedCalculator.label === "Daily Predictions" && (
              <>
                <input type="date" name="date" onChange={handleChange} value={formData.date || ""} style={inputStyle} required />
                <input name="zodiacSign" placeholder="Zodiac Sign *" onChange={handleChange} value={formData.zodiacSign || ""} style={inputStyle} required />
              </>
            )}
          </div>

          <button onClick={handleFormSubmit} disabled={loading} style={submitBtnStyle}>
            {loading ? (
              <>
                <Loader2 size={20} style={{ animation: "spin 1s linear infinite" }} /> Generating...
              </>
            ) : (
              "✨ Generate Report"
            )}
          </button>

          <button onClick={resetForm} style={backBtnStyle}>
            ⬅ Back to Calculators
          </button>
        </div>
      )}

      {/* STEP 3: REPORT */}
      {step === 3 && (
        <div style={resultContainerStyle}>
          <h2 style={titleStyle}>📊 {selectedCalculator.label} Report</h2>
          {renderReport()}
          <button onClick={resetForm} style={backBtnStyle}>
            ⬅ Back to Calculators
          </button>
        </div>
      )}
    </div>
  );
};

// ============ REPORT COMPONENTS ============

const ReportSection = ({ title, children, icon }) => (
  <div style={sectionStyle}>
    <h3 style={sectionTitleStyle}>
      {icon && <span style={{ marginRight: "8px" }}>{icon}</span>}
      {title}
    </h3>
    <div style={sectionContentStyle}>{children}</div>
  </div>
);

const InfoRow = ({ label, value }) => (
  <div style={infoRowStyle}>
    <span style={labelStyle}>{label}:</span>
    <span style={valueStyle}>{value && value !== "N/A" ? value : "Not Provided"}</span>
  </div>
);

// ⭐ UNIVERSAL & SAFE KUNDLI REPORT
const KundliReport = ({ data, formData }) => {
  const kundli = data?.kundli?.kundliData || data?.kundliData || data?.data || data || {};

  return (
    <div>

      {/* BASIC DETAILS */}
      <ReportSection title="Basic Information" icon="👤">
        <InfoRow label="Name" value={formData?.fullName || data?.name || "-"} />
        <InfoRow label="Date of Birth" value={formData?.dob || data?.dateOfBirth || "-"} />
        <InfoRow label="Time of Birth" value={formData?.timeSlot || data?.timeOfBirth || "-"} />
        <InfoRow label="Place of Birth" value={formData?.birthPlace || data?.placeOfBirth || "-"} />
      </ReportSection>

      {/* ZODIAC DETAILS */}
      {(kundli.sunSign || kundli.moonSign || kundli.ascendant || kundli.zodiac) && (
        <ReportSection title="Zodiac Details" icon="🌞">
          <InfoRow label="Sun Sign" value={kundli.sunSign || "-"} />
          <InfoRow label="Moon Sign" value={kundli.moonSign || "-"} />
          <InfoRow label="Ascendant (Lagna)" value={kundli.ascendant || "-"} />
          <InfoRow label="Zodiac Sign" value={kundli.zodiac || "-"} />
        </ReportSection>
      )}

      {/* NAKSHATRA */}
      {(kundli.nakshatra || kundli.nakshatraLord) && (
        <ReportSection title="Nakshatra Details" icon="✨">
          <InfoRow label="Nakshatra" value={kundli.nakshatra || "-"} />
          <InfoRow label="Nakshatra Lord" value={kundli.nakshatraLord || "-"} />
        </ReportSection>
      )}

      {/* PLANETS */}
      {kundli.planets && Object.keys(kundli.planets).length > 0 && (
        <ReportSection title="Planetary Positions" icon="🪐">
          {Object.entries(kundli.planets).map(([planet, details]) => (
            <InfoRow
              key={planet}
              label={planet}
              value={`${details?.sign || ""}  ${details?.degree ? details.degree + "°" : ""}`}
            />
          ))}
        </ReportSection>
      )}

      {/* HOUSE DETAILS */}
      {kundli.houses && Object.keys(kundli.houses).length > 0 && (
        <ReportSection title="House Details" icon="🏠">
          {Object.entries(kundli.houses).map(([house, sign]) => (
            <InfoRow key={house} label={`House ${house}`} value={sign || "-"} />
          ))}
        </ReportSection>
      )}

      {/* MANGAL DOSHA */}
      {kundli.mangalDosha && (
        <ReportSection title="Mangal Dosha" icon="🔥">
          <InfoRow
            label="Status"
            value={kundli.mangalDosha.hasDosha ? "Present" : "Not Present"}
          />
          <InfoRow
            label="Description"
            value={kundli.mangalDosha.description || "-"}
          />
        </ReportSection>
      )}

      {/* YOGAS */}
      {kundli.yogas?.length > 0 && (
        <ReportSection title="Yogas in Kundli" icon="🔯">
          {kundli.yogas.map((y, i) => (
            <InfoRow key={i} label={y.name} value={y.description} />
          ))}
        </ReportSection>
      )}

      {/* NAVAMSA (if exists) */}
      {kundli.navaamsas && (
        <ReportSection title="Navamsa Chart" icon="🌙">
          {Object.entries(kundli.navaamsas).map(([key, val]) => (
            <InfoRow key={key} label={key} value={val} />
          ))}
        </ReportSection>
      )}

      {/* DESCRIPTION */}
      {kundli.description && (
        <ReportSection title="Summary" icon="📝">
          <InfoRow label="Details" value={kundli.description} />
        </ReportSection>
      )}

    </div>
  );
};


// 2. NUMEROLOGY REPORT
const NumerologyReport = ({ data, formData }) => {
  const report = data?.data || data || {};

  return (
    <div>

      {/* BASIC INFO */}
      <ReportSection title="Basic Information" icon="👤">
        <InfoRow label="Name" value={formData?.fullName || report?.name || "-"} />
        <InfoRow label="Date of Birth" value={formData?.dob || report?.dateOfBirth || "-"} />
      </ReportSection>

      {/* CORE NUMBERS */}
      <ReportSection title="Core Numbers" icon="🔢">
        <InfoRow label="Life Path Number" value={report?.lifePathNumber || "-"} />
        <InfoRow label="Destiny Number" value={report?.destinyNumber || "-"} />
        <InfoRow label="Soul Urge Number" value={report?.soulUrgeNumber || "-"} />
        <InfoRow label="Personality Number" value={report?.personalityNumber || "-"} />
        {/* <InfoRow label="Birthday Number" value={report?.birthdayNumber || "-"} />
        <InfoRow label="Expression Number" value={report?.expressionNumber || "-"} /> */}
      </ReportSection>

      {/* LIFE PATH INTERPRETATION */}
      {report?.lifePathInterpretation && (
        <ReportSection title="Life Path Interpretation" icon="✨">
          <p style={textStyle}>{report.lifePathInterpretation}</p>
        </ReportSection>
      )}

      {/* PERSONALITY DESCRIPTION */}
      {report?.description && (
        <ReportSection title="Overall Personality" icon="🧠">
          <p style={textStyle}>{report.description}</p>
        </ReportSection>
      )}

      {/* STRENGTHS */}
      {report?.strengths && (
        <ReportSection title="Strengths" icon="💪">
          <p style={textStyle}>{report.strengths}</p>
        </ReportSection>
      )}

      {/* WEAKNESSES */}
      {report?.weaknesses && (
        <ReportSection title="Weaknesses" icon="⚠️">
          <p style={textStyle}>{report.weaknesses}</p>
        </ReportSection>
      )}

      {/* LUCKY NUMBERS */}
      {report?.luckyNumbers && (
        <ReportSection title="Lucky Numbers" icon="🍀">
          <p style={textStyle}>
            {Array.isArray(report.luckyNumbers)
              ? report.luckyNumbers.join(", ")
              : report.luckyNumbers}
          </p>
        </ReportSection>
      )}

      {/* LUCKY COLOR */}
      {report?.luckyColor && (
        <ReportSection title="Lucky Color" icon="🎨">
          <p style={textStyle}>{report.luckyColor}</p>
        </ReportSection>
      )}

      {/* LUCKY DAYS */}
      {report?.luckyDays && (
        <ReportSection title="Lucky Days" icon="📅">
          <p style={textStyle}>
            {Array.isArray(report.luckyDays)
              ? report.luckyDays.join(", ")
              : report.luckyDays}
          </p>
        </ReportSection>
      )}

      {/* LUCKY DIRECTION */}
      {report?.luckyDirection && (
        <ReportSection title="Lucky Direction" icon="🧭">
          <p style={textStyle}>{report.luckyDirection}</p>
        </ReportSection>
      )}

    </div>
  );
};


// ⭐ UNIVERSAL COMPATIBILITY REPORT
const CompatibilityReport = ({ data, formData }) => {
  const report = data?.data || data || {};

  const score = report?.score || report?.compatibilityScore || 0;
  const percentage = Math.round((score / (report?.maxScore || 36)) * 100);

  return (
    <div>

      {/* PERSONS INFO */}
      <ReportSection title="Persons Information" icon="👥">
        <h4 style={{ color: "#00ffff" }}>Person A</h4>
        <InfoRow label="Name" value={formData?.fullNameA} />
        <InfoRow label="Date of Birth" value={formData?.dobA} />
        <InfoRow label="Time of Birth" value={formData?.timeSlotA} />
        <InfoRow label="Place of Birth" value={formData?.birthPlaceA} />

        <h4 style={{ color: "#ff66cc", marginTop: "1rem" }}>Person B</h4>
        <InfoRow label="Name" value={formData?.fullNameB} />
        <InfoRow label="Date of Birth" value={formData?.dobB} />
        <InfoRow label="Time of Birth" value={formData?.timeSlotB} />
        <InfoRow label="Place of Birth" value={formData?.birthPlaceB} />
      </ReportSection>

      {/* OVERALL SCORE */}
      <ReportSection title="Overall Compatibility" icon="💑">
        <div style={{ textAlign: "center", margin: "2rem 0" }}>
          <div
            style={{
              fontSize: "3rem",
              fontWeight: "bold",
              background: "linear-gradient(90deg, #ff00ff, #00ffff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {percentage}%
          </div>

          <p style={textStyle}>{report?.message || report?.compatibilityLevel || "Compatibility Assessment"}</p>
        </div>
      </ReportSection>

      {/* BOY DOSHA */}
      {report?.boyDosha && (
        <ReportSection title="Person A - Mangal Dosha" icon="🔥">
          <InfoRow label="Has Dosha" value={report.boyDosha.hasDosha ? "Yes" : "No"} />
          <InfoRow label="Type" value={report.boyDosha.dosha_type || "N/A"} />
          <InfoRow label="Exception" value={report.boyDosha.has_exception ? "Yes" : "No"} />
          <InfoRow label="Description" value={report.boyDosha.description} />
        </ReportSection>
      )}

      {/* GIRL DOSHA */}
      {report?.girlDosha && (
        <ReportSection title="Person B - Mangal Dosha" icon="🔥">
          <InfoRow label="Has Dosha" value={report.girlDosha.hasDosha ? "Yes" : "No"} />
          <InfoRow label="Type" value={report.girlDosha.dosha_type || "N/A"} />
          <InfoRow label="Exception" value={report.girlDosha.has_exception ? "Yes" : "No"} />
          <InfoRow label="Description" value={report.girlDosha.description} />
        </ReportSection>
      )}

      {/* ASHTA KOOT MATCHING */}
      {Array.isArray(report.kutas) && report.kutas.length > 0 && (
        <ReportSection title="Ashta Koota Matching" icon="🔯">
          {report.kutas.map((k, i) => (
            <div key={i} style={{ marginBottom: "1rem", padding: "1rem", background: "rgba(255,255,255,0.06)", borderRadius: "10px" }}>
              <InfoRow label="Koot" value={k.name} />
              <InfoRow label="Points" value={`${k.obtained_points}/${k.maximum_points}`} />
              <InfoRow label="Person A (Boy)" value={k.boy_koot} />
              <InfoRow label="Person B (Girl)" value={k.girl_koot} />
              <p style={{ ...textStyle, marginTop: "0.5rem" }}>{k.description}</p>
            </div>
          ))}
        </ReportSection>
      )}

      {/* LOVE COMPATIBILITY */}
      {report?.loveCompatibility && (
        <ReportSection title="Love & Romance" icon="❤️">
          <p style={textStyle}>{report.loveCompatibility}</p>
        </ReportSection>
      )}

      {/* COMMUNICATION */}
      {report?.communication && (
        <ReportSection title="Communication" icon="💬">
          <p style={textStyle}>{report.communication}</p>
        </ReportSection>
      )}

      {/* EMOTIONAL CONNECTION */}
      {report?.emotionalConnection && (
        <ReportSection title="Emotional Connection" icon="🧡">
          <p style={textStyle}>{report.emotionalConnection}</p>
        </ReportSection>
      )}

      {/* LONG TERM POTENTIAL */}
      {report?.longTermPotential && (
        <ReportSection title="Long-Term Potential" icon="🔮">
          <p style={textStyle}>{report.longTermPotential}</p>
        </ReportSection>
      )}

      {/* RECOMMENDATIONS */}
      {report?.recommendations && (
        <ReportSection title="Recommendations" icon="💡">
          <p style={textStyle}>{report.recommendations}</p>
        </ReportSection>
      )}
    </div>
  );
};


// ⭐ UNIVERSAL GEMSTONE REPORT
const GemstoneReport = ({ data, formData }) => {
  const report = data?.data || data || {};

  return (
    <div>

      {/* BASIC INFO */}
      <ReportSection title="Basic Information" icon="👤">
        <InfoRow label="Name" value={formData?.name || report?.name || "-"} />
        <InfoRow label="Date of Birth" value={formData?.dob || report?.dateOfBirth || "-"} />
        <InfoRow label="Zodiac Sign" value={formData?.zodiacSign || report?.zodiacSign || "-"} />
      </ReportSection>

      {/* PRIMARY GEMSTONE */}
      <ReportSection title="Primary Gemstone" icon="💎">
        <InfoRow label="Recommended Stone" value={report?.primaryGemstone || report?.gemstone || "-"} />
        {/* <InfoRow label="Ruling Planet" value={report?.rulingPlanet || report?.planet || "-"} />
        <InfoRow label="Metal to Wear" value={report?.metal || "-"} />
        <InfoRow label="Finger to Wear" value={report?.finger || "-"} />
        <InfoRow label="Day to Wear" value={report?.day || "-"} />
        <InfoRow label="Weight (Carats)" value={report?.weight || "-"} /> */}
      </ReportSection>

      {/* BENEFITS */}
      {report?.benefits && (
        <ReportSection title="Benefits" icon="✨">
          <p style={textStyle}>{report.benefits}</p>
        </ReportSection>
      )}

      {/* ALTERNATIVE GEMSTONES */}
      {report?.alternativeGemstones && (
        <ReportSection title="Alternative Gemstones" icon="💠">
          <p style={textStyle}>
            {Array.isArray(report.alternativeGemstones)
              ? report.alternativeGemstones.join(", ")
              : report.alternativeGemstones}
          </p>
        </ReportSection>
      )}

      {/* PRECAUTIONS */}
      {report?.precautions && (
        <ReportSection title="Precautions" icon="⚠️">
          <p style={textStyle}>{report.precautions}</p>
        </ReportSection>
      )}

      {/* PRICE RANGE */}
      {report?.price && (
        <ReportSection title="Price Range" icon="💰">
          <p style={textStyle}>{report.price}</p>
        </ReportSection>
      )}
    </div>
  );
};

// ⭐ UNIVERSAL DASHA REPORT
const DashaReport = ({ data, formData }) => {
  const report = data?.data || data || {};

  return (
    <div>

      {/* BASIC INFO */}
      <ReportSection title="Basic Information" icon="👤">
        <InfoRow label="Name" value={formData?.fullName || report?.name || "-"} />
        <InfoRow label="Date of Birth" value={formData?.dob || report?.dateOfBirth || "-"} />
        <InfoRow label="Time of Birth" value={formData?.timeSlot || report?.timeOfBirth || "-"} />
        <InfoRow label="Place of Birth" value={formData?.birthPlace || report?.placeOfBirth || "-"} />
      </ReportSection>

      {/* CURRENT DASHA */}
      <ReportSection title="Current Dasha Period" icon="⏰">
        <InfoRow label="Maha Dasha" value={report?.mahaDasha || report?.current?.mahaDasha || "-"} />
        <InfoRow label="Antar Dasha" value={report?.antarDasha || report?.current?.antarDasha || "-"} />
        <InfoRow label="Pratyantara Dasha" value={report?.pratyantaraDasha || report?.current?.pratyantarDasha || "-"} />
        <InfoRow label="Start Date" value={report?.startDate || report?.current?.start || "-"} />
        <InfoRow label="End Date" value={report?.endDate || report?.current?.end || "-"} />
      </ReportSection>

      {/* EFFECTS */}
      {report?.effects && (
        <ReportSection title="Current Period Effects" icon="🌟">
          <p style={textStyle}>{report.effects}</p>
        </ReportSection>
      )}

      {/* DETAILED EFFECTS OBJECT (Optional) */}
      {report?.current?.effects && (
        <ReportSection title="Detailed Effects" icon="✨">
          {Object.entries(report.current.effects).map(([key, value], idx) => (
            <InfoRow key={idx} label={key} value={value} />
          ))}
        </ReportSection>
      )}

      {/* UPCOMING DASHA LIST */}
      {Array.isArray(report?.upcomingDashas) && report.upcomingDashas.length > 0 && (
        <ReportSection title="Upcoming Dasha Periods" icon="📅">
          {report.upcomingDashas.map((d, i) => (
            <div
              key={i}
              style={{
                marginBottom: "1rem",
                padding: "0.75rem",
                background: "rgba(255,255,255,0.05)",
                borderRadius: "8px",
              }}
            >
              <InfoRow label="Planet" value={d?.planet || "-"} />
              <InfoRow label="Start Date" value={d?.startDate || "-"} />
              <InfoRow label="End Date" value={d?.endDate || "-"} />
            </div>
          ))}
        </ReportSection>
      )}

      {/* NESTED UPCOMING MAHADASHA → ANTARDASHA → PRATYANTAR */}
      {report?.timeline && (
        <ReportSection title="Detailed Dasha Timeline" icon="🕰️">
          {Object.entries(report.timeline).map(([planet, details], idx) => (
            <div
              key={idx}
              style={{
                padding: "0.8rem",
                marginBottom: "1rem",
                background: "rgba(255,255,255,0.06)",
                borderRadius: "8px",
              }}
            >
              <h4 style={{ color: "#00ffff", marginBottom: "0.5rem" }}>{planet} Maha Dasha</h4>
              <InfoRow label="Period" value={`${details.startDate} - ${details.endDate}`} />

              {details?.antarDashas && (
                <div style={{ marginTop: "0.5rem" }}>
                  {details.antarDashas.map((antar, x) => (
                    <div
                      key={x}
                      style={{
                        marginTop: "0.5rem",
                        padding: "0.5rem",
                        background: "rgba(255,255,255,0.04)",
                        borderRadius: "6px",
                      }}
                    >
                      <InfoRow label="Antar Dasha" value={antar.planet} />
                      <InfoRow label="Period" value={`${antar.startDate} - ${antar.endDate}`} />
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </ReportSection>
      )}

      {/* RECOMMENDATIONS */}
      {report?.recommendations && (
        <ReportSection title="Recommendations" icon="💡">
          <p style={textStyle}>{report.recommendations}</p>
        </ReportSection>
      )}
    </div>
  );
};

// ⭐ UNIVERSAL MANGLIK REPORT
const ManglikReport = ({ data, formData }) => {
  const report = data?.data || data || {};

  // Detect Manglik from all API types
  const isManglik =
    report?.isManglik ||
    report?.manglik ||
    report?.hasDosha ||
    report?.mangalDosha?.hasDosha ||
    report?.dosha?.hasDosha ||
    false;

  const doshaData =
    report?.mangalDosha ||
    report?.dosha ||
    report?.dosha_details ||
    report;

  return (
    <div>

      {/* BASIC INFO */}
      <ReportSection title="Basic Information" icon="👤">
        <InfoRow label="Name" value={formData.fullName || report?.name || "-"} />
        <InfoRow label="Date of Birth" value={formData.dob || report?.dateOfBirth || "-"} />
        <InfoRow label="Time of Birth" value={formData.timeSlot || report?.timeOfBirth || "-"} />
        <InfoRow label="Place of Birth" value={formData.birthPlace || report?.placeOfBirth || "-"} />
      </ReportSection>

      {/* MANGALIK STATUS */}
      <ReportSection title="Manglik Status" icon="🔴">
        <div style={{ textAlign: "center", margin: "2rem 0" }}>
          <div
            style={{
              fontSize: "2.6rem",
              fontWeight: "bold",
              color: isManglik ? "#ff4444" : "#44ff44",
            }}
          >
            {isManglik ? "✓ Yes, Manglik" : "✗ No, Not Manglik"}
          </div>

          {doshaData?.description && (
            <p style={{ ...textStyle, marginTop: "1rem" }}>{doshaData.description}</p>
          )}
        </div>
      </ReportSection>

      {/* IF MANGALIK – SHOW DETAILS */}
      {isManglik && (
        <>
          <ReportSection title="Manglik Dosha Details" icon="⚠️">
            <InfoRow label="Mars House" value={doshaData?.house || doshaData?.marsHouse || "-"} />
            <InfoRow label="Dosha Type" value={doshaData?.doshaType || doshaData?.dosha_type || "-"} />
            <InfoRow label="Intensity" value={doshaData?.intensity || "-"} />
            <InfoRow label="Affected Planet" value={doshaData?.planet || "Mars"} />
            <InfoRow label="Has Exception" value={doshaData?.hasException ? "Yes" : "No"} />
          </ReportSection>

          {doshaData?.effects && (
            <ReportSection title="Effects" icon="📊">
              <p style={textStyle}>{doshaData.effects}</p>
            </ReportSection>
          )}

          {doshaData?.remedies && (
            <ReportSection title="Remedies" icon="🙏">
              <p style={textStyle}>{doshaData.remedies}</p>
            </ReportSection>
          )}
        </>
      )}

      {/* IF NOT MANGALIK */}
      {!isManglik && (
        <ReportSection title="Analysis" icon="✅">
          <p style={textStyle}>No Manglik Dosha detected. Marriage compatibility is favourable.</p>
        </ReportSection>
      )}
    </div>
  );
};

// ⭐ UNIVERSAL NAKSHATRA REPORT
const NakshatraReport = ({ data, formData }) => {
  const report = data?.data || data || {};

  // Detect Nakshatra from any format
  const nakshatra =
    report?.nakshatra ||
    report?.nakshatra_name ||
    report?.nakshatraDetails?.nakshatra ||
    report?.nakshatraDetails?.name ||
    report?.star ||
    "-";

  const pada =
    report?.pada ||
    report?.nakshatraDetails?.pada ||
    report?.quarter ||
    "-";

  const deity =
    report?.deity ||
    report?.nakshatraDetails?.deity ||
    report?.rulingDeity ||
    "-";

  const rulingPlanet =
    report?.rulingPlanet ||
    report?.lord ||
    report?.nakshatraDetails?.planet ||
    "-";

  const symbol =
    report?.symbol ||
    report?.nakshatraDetails?.symbol ||
    "-";

  const element =
    report?.element ||
    report?.nakshatraDetails?.element ||
    "-";

  return (
    <div>

      {/* BASIC INFO */}
      <ReportSection title="Basic Information" icon="👤">
        <InfoRow label="Name" value={formData.fullName || report?.name || "-"} />
        <InfoRow label="Date of Birth" value={formData.dob || report?.dateOfBirth || "-"} />
        <InfoRow label="Time of Birth" value={formData.timeSlot || report?.timeOfBirth || "-"} />
        <InfoRow label="Place of Birth" value={formData.birthPlace || report?.placeOfBirth || "-"} />
      </ReportSection>

      {/* NAKSHATRA MAIN DETAILS */}
      <ReportSection title="Birth Nakshatra" icon="⭐">
        <InfoRow label="Nakshatra" value={nakshatra} />
        {/* <InfoRow label="Pada (Quarter)" value={pada} />
        <InfoRow label="Ruling Deity" value={deity} />
        <InfoRow label="Ruling Planet" value={rulingPlanet} />
        <InfoRow label="Symbol" value={symbol} />
        <InfoRow label="Element" value={element} /> */}
      </ReportSection>

      {/* PERSONALITY */}
      {(report?.personality || report?.traits) && (
        <ReportSection title="Personality Traits" icon="👤">
          <p style={textStyle}>{report.personality || report.traits}</p>
        </ReportSection>
      )}

      {/* CAREER */}
      {(report?.career || report?.profession) && (
        <ReportSection title="Career & Profession" icon="💼">
          <p style={textStyle}>{report.career || report.profession}</p>
        </ReportSection>
      )}

      {/* STRENGTHS */}
      {report?.strengths && (
        <ReportSection title="Strengths" icon="⚡">
          <p style={textStyle}>{report.strengths}</p>
        </ReportSection>
      )}

      {/* WEAKNESSES */}
      {report?.weaknesses && (
        <ReportSection title="Weaknesses" icon="⚠️">
          <p style={textStyle}>{report.weaknesses}</p>
        </ReportSection>
      )}

      {/* LUCKY ATTRIBUTES */}
      {(report?.luckyAttributes || report?.lucky) && (
        <ReportSection title="Lucky Attributes" icon="🍀">
          <InfoRow
            label="Lucky Color"
            value={
              report?.luckyAttributes?.color ||
              report?.lucky?.color ||
              "-"
            }
          />
          <InfoRow
            label="Lucky Number"
            value={
              report?.luckyAttributes?.number ||
              report?.lucky?.number ||
              "-"
            }
          />
          <InfoRow
            label="Lucky Day"
            value={
              report?.luckyAttributes?.day ||
              report?.lucky?.day ||
              "-"
            }
          />
        </ReportSection>
      )}

    </div>
  );
};

// ⭐ UNIVERSAL PLANETARY REPORT
const PlanetaryReport = ({ data, formData }) => {
  const report = data?.data || data || {};

  // Planet list from any format
  const planets =
    report?.planets ||
    report?.planetPositions ||
    report?.planetaryPositions ||
    {};

  return (
    <div>

      {/* BASIC INFO */}
      <ReportSection title="Basic Information" icon="👤">
        <InfoRow label="Name" value={formData.fullName || report?.name || "-"} />
        <InfoRow label="Date of Birth" value={formData.dob || report?.dateOfBirth || "-"} />
        <InfoRow label="Time of Birth" value={formData.timeSlot || report?.timeOfBirth || "-"} />
        <InfoRow label="Place of Birth" value={formData.birthPlace || report?.placeOfBirth || "-"} />
      </ReportSection>

      {/* PLANETARY POSITIONS */}
      <ReportSection title="Planetary Positions" icon="🪐">
        {Object.entries(planets).map(([planet, sign]) => (
          <InfoRow key={planet} label={planet} value={sign || "-"} />
        ))}
      </ReportSection>

    </div>
  );
};

// 9. TRANSIT REPORT
const TransitReport = ({ data, formData }) => {
  const reportData = data?.data || data;
  return (
    <div>
      <ReportSection title="Basic Information" icon="👤">
        <InfoRow label="Name" value={formData.fullName} />
        <InfoRow label="Date of Birth" value={formData.dob} />
      </ReportSection>

      {reportData?.transits && Object.keys(reportData.transits).length > 0 && (
        <ReportSection title="Current Planetary Transits" icon="🔄">
          {Object.entries(reportData.transits).map(([planet, details]) => (
            <div key={planet} style={{ marginBottom: "1rem" }}>
              <InfoRow label={planet} value={`Currently in ${details?.sign || "N/A"}`} />
              {details?.effects && <p style={{ ...textStyle, fontSize: "0.9rem", marginLeft: "1rem" }}>{details.effects}</p>}
            </div>
          ))}
        </ReportSection>
      )}

      <ReportSection title="Impact on Life Areas" icon="🎯">
        <InfoRow label="Career" value={reportData?.careerImpact} />
        <InfoRow label="Finance" value={reportData?.financeImpact} />
        <InfoRow label="Relationships" value={reportData?.relationshipImpact} />
        <InfoRow label="Health" value={reportData?.healthImpact} />
      </ReportSection>

      {reportData?.importantDates && (
        <ReportSection title="Important Dates" icon="📅">
          <p style={textStyle}>{reportData.importantDates}</p>
        </ReportSection>
      )}

      {reportData?.remedies && (
        <ReportSection title="Remedies" icon="🙏">
          <p style={textStyle}>{reportData.remedies}</p>
        </ReportSection>
      )}
    </div>
  );
};

// 10. ZODIAC REPORT
// ⭐ UNIVERSAL ZODIAC REPORT (Format A Compatible)
const ZodiacReport = ({ data, formData }) => {
  const report = data?.data || data || {};

  // Auto-detect zodiac from any API structure
  const zodiac =
    report?.zodiac ||
    report?.zodiacSign ||
    report?.sunSign ||
    report?.sign ||
    "-";

  const sunSign =
    report?.sunSign ||
    report?.sun ||
    "-";

  const moonSign =
    report?.moonSign ||
    report?.moon ||
    "-";

  const risingSign =
    report?.risingSign ||
    report?.ascendant ||
    report?.lagna ||
    "-";

  const rulingPlanet =
    report?.rulingPlanet ||
    report?.lord ||
    "-";

  return (
    <div>

      {/* BASIC DETAILS */}
      <ReportSection title="Basic Information" icon="👤">
        <InfoRow label="Name" value={formData.fullName || report?.name || "-"} />
        <InfoRow label="Date of Birth" value={formData.dob || report?.dateOfBirth || "-"} />
        <InfoRow label="Time of Birth" value={formData.timeSlot || report?.timeOfBirth || "-"} />
        <InfoRow label="Place of Birth" value={formData.birthPlace || report?.placeOfBirth || "-"} />
      </ReportSection>

      {/* MAIN ZODIAC SIGN */}
      <ReportSection title="Zodiac Sign" icon="♓">
        <InfoRow label="Zodiac Sign" value={zodiac} />
        {/* <InfoRow label="Sun Sign" value={sunSign} />
        <InfoRow label="Moon Sign" value={moonSign} />
        <InfoRow label="Rising Sign (Ascendant)" value={risingSign} /> */}
      </ReportSection>

      {/* PERSONALITY TEXTS */}
      {report?.sunSignTraits && (
        <ReportSection title="Sun Sign Traits" icon="☀️">
          <p style={textStyle}>{report.sunSignTraits}</p>
        </ReportSection>
      )}

      {report?.moonSignTraits && (
        <ReportSection title="Moon Sign Traits" icon="🌙">
          <p style={textStyle}>{report.moonSignTraits}</p>
        </ReportSection>
      )}

      {report?.risingSignTraits && (
        <ReportSection title="Rising Sign Traits" icon="⬆️">
          <p style={textStyle}>{report.risingSignTraits}</p>
        </ReportSection>
      )}

      {/* ELEMENT & MODALITY */}
      {/* {(report?.element || report?.modality || rulingPlanet) && (
        <ReportSection title="Element & Modality" icon="🔥">
          <InfoRow label="Element" value={report?.element || "-"} />
          <InfoRow label="Modality" value={report?.modality || "-"} />
          <InfoRow label="Ruling Planet" value={rulingPlanet} />
        </ReportSection>
      )} */}

      {/* COMPATIBILITY */}
      {report?.compatibility && (
        <ReportSection title="Compatibility" icon="💕">
          <p style={textStyle}>{report.compatibility}</p>
        </ReportSection>
      )}
    </div>
  );
};

// 11. DAILY PREDICTION REPORT
const DailyPredictionReport = ({ data, formData }) => {
  const report = data?.data || data || {};

  return (
    <div>

      {/* TODAY'S OVERVIEW */}
      <ReportSection title="Today's Overview" icon="📅">
        <InfoRow label="Date" value={formData.date} />
        <InfoRow label="Zodiac Sign" value={formData.zodiacSign} />
        <InfoRow label="Lucky Number" value={report?.luckyNumber || "-"} />
        <InfoRow label="Lucky Color" value={report?.luckyColor || "-"} />
        <InfoRow label="Mood" value={report?.mood || "-"} />
      </ReportSection>

      {report?.dailyGuidance && (
        <ReportSection title="Daily Guidance" icon="✨">
          <p style={textStyle}>{report.dailyGuidance}</p>
        </ReportSection>
      )}

      {report?.love && (
        <ReportSection title="Love & Relationships" icon="❤️">
          <p style={textStyle}>{report.love}</p>
        </ReportSection>
      )}

      {report?.career && (
        <ReportSection title="Career & Finance" icon="💼">
          <p style={textStyle}>{report.career}</p>
        </ReportSection>
      )}

      {report?.health && (
        <ReportSection title="Health & Wellness" icon="🏥">
          <p style={textStyle}>{report.health}</p>
        </ReportSection>
      )}

      {report?.tips && (
        <ReportSection title="Tips for the Day" icon="💡">
          <p style={textStyle}>{report.tips}</p>
        </ReportSection>
      )}
    </div>
  );
};


// 12. HOROSCOPE REPORT
const HoroscopeReport = ({ data, formData }) => {
  const reportData = data?.data || data;
  return (
    <div>
      <ReportSection title="Horoscope Overview" icon="🔮">
        <InfoRow label="Name" value={formData.fullName} />
        <InfoRow label="Date of Birth" value={formData.dob} />
        <InfoRow label="Zodiac Sign" value={reportData?.zodiacSign} />
      </ReportSection>

      {reportData?.monthlyPrediction && (
        <ReportSection title="This Month's Prediction" icon="📆">
          <p style={textStyle}>{reportData.monthlyPrediction}</p>
        </ReportSection>
      )}

      {reportData?.love && (
        <ReportSection title="Love & Romance" icon="💕">
          <p style={textStyle}>{reportData.love}</p>
        </ReportSection>
      )}

      {reportData?.career && (
        <ReportSection title="Career & Money" icon="💰">
          <p style={textStyle}>{reportData.career}</p>
        </ReportSection>
      )}

      {reportData?.health && (
        <ReportSection title="Health & Wellness" icon="🧘">
          <p style={textStyle}>{reportData.health}</p>
        </ReportSection>
      )}

      <ReportSection title="Lucky Factors" icon="🍀">
        <InfoRow label="Lucky Day" value={reportData?.luckyDay} />
        <InfoRow label="Lucky Number" value={reportData?.luckyNumber} />
        <InfoRow label="Lucky Color" value={reportData?.luckyColor} />
      </ReportSection>

      {reportData?.advice && (
        <ReportSection title="Advice" icon="🌟">
          <p style={textStyle}>{reportData.advice}</p>
        </ReportSection>
      )}
    </div>
  );
};

// GENERIC FALLBACK REPORT
const GenericReport = ({ data, formData }) => {
  const reportData = data?.data || data;
  return (
    <div>
      <ReportSection title="Report Details" icon="📄">
        {Object.entries(reportData || {})
          .filter(([key, value]) => value && value !== "N/A")
          .map(([key, value]) => (
            <InfoRow
              key={key}
              label={key.replace(/([A-Z])/g, " $1").trim()}
              value={typeof value === "object" ? JSON.stringify(value) : String(value).substring(0, 200)}
            />
          ))}
      </ReportSection>
    </div>
  );
};

// ============ STYLES ============
const formContainerStyle = {
  background: "rgba(255,255,255,0.08)",
  borderRadius: "20px",
  padding: "2.5rem 2rem",
  maxWidth: "700px",
  margin: "2rem auto",
  textAlign: "center",
  border: "1px solid rgba(255,255,255,0.1)",
};

const resultContainerStyle = {
  background: "rgba(255,255,255,0.08)",
  borderRadius: "20px",
  padding: "2.5rem",
  maxWidth: "900px",
  margin: "2rem auto",
  border: "1px solid rgba(255,255,255,0.1)",
};

const titleStyle = {
  background: "linear-gradient(90deg, #ff00ff, #00ffff)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  marginBottom: "1.5rem",
  fontSize: "2rem",
  fontWeight: "700",
};

const inputStyle = {
  width: "100%",
  padding: "12px 16px",
  borderRadius: "10px",
  border: "1px solid rgba(255,255,255,0.2)",
  background: "rgba(255,255,255,0.05)",
  color: "#fff",
  fontSize: "1rem",
  outline: "none",
  transition: "0.3s",
};

const submitBtnStyle = {
  marginTop: "2rem",
  padding: "14px 40px",
  background: "linear-gradient(90deg, #ff00ff, #00ffff)",
  border: "none",
  borderRadius: "30px",
  color: "#fff",
  fontWeight: 600,
  cursor: "pointer",
  fontSize: "1.05rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "8px",
  margin: "2rem auto 1rem",
  transition: "0.3s",
};

const backBtnStyle = {
  background: "rgba(255,255,255,0.1)",
  border: "1px solid rgba(255,255,255,0.2)",
  color: "#fff",
  padding: "10px 30px",
  borderRadius: "25px",
  fontWeight: 600,
  cursor: "pointer",
  marginTop: "1.5rem",
  transition: "0.3s",
};

const sectionStyle = {
  background: "rgba(255,255,255,0.05)",
  borderRadius: "15px",
  padding: "1.5rem",
  marginBottom: "1.5rem",
  border: "1px solid rgba(255,255,255,0.1)",
};

const sectionTitleStyle = {
  fontSize: "1.4rem",
  fontWeight: "600",
  color: "#00ffff",
  marginBottom: "1rem",
  display: "flex",
  alignItems: "center",
};

const sectionContentStyle = {
  fontSize: "1rem",
  lineHeight: "1.8",
};

const infoRowStyle = {
  display: "flex",
  justifyContent: "space-between",
  padding: "0.75rem 0",
  borderBottom: "1px solid rgba(255,255,255,0.05)",
};

const labelStyle = {
  color: "#aaa",
  fontWeight: "500",
};

const valueStyle = {
  color: "#fff",
  fontWeight: "600",
  textAlign: "right",
  maxWidth: "50%",
  wordBreak: "break-word",
};

const textStyle = {
  color: "#ddd",
  lineHeight: "1.8",
  marginBottom: "0.5rem",
};

export default Astrology;
