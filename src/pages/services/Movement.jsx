// import React, { useState } from "react";
// import { Loader2, Sparkles } from "lucide-react";
// import KundliReport from "./reports/KundliReport";
// import NumerologyReport from "./reports/NumerologyReport";
// import CompatibilityReport from "./reports/CompatibilityReport";
// import {
//   KundliAPI,
//   NumerologyAPI,
//   CompatibilityAPI,
//   GemstoneAPI,
//   PanchangAPI,
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
//   { label: "Kundli", deliverable: "Chart", price: "Free", icon: "🔮", desc: "Generate your complete birth chart with planetary positions" },
//   { label: "Numerology", deliverable: "Report", price: "Free", icon: "🔢", desc: "Discover your life path number and destiny insights" },
//   { label: "Compatibility", deliverable: "PDF", price: "Paid", icon: "💕", desc: "Analyze relationship compatibility between two souls" },
//   { label: "Gemstone Recommendation", deliverable: "Report", price: "Paid", icon: "💎", desc: "Find your lucky gemstones based on planetary alignment" },
//   { label: "Dasha (Vimshottari)", deliverable: "Report", price: "Paid", icon: "⏳", desc: "Explore your planetary periods and life phases" },
//   { label: "Manglik Calculator", deliverable: "Report", price: "Paid", icon: "🔥", desc: "Check Manglik dosha and its effects on your life" },
//   { label: "Nakshatra Calculator", deliverable: "Report", price: "Paid", icon: "⭐", desc: "Discover your birth star and its cosmic influence" },
//   { label: "Planetary Calculator", deliverable: "Report", price: "Paid", icon: "🪐", desc: "Analyze planetary strengths and their impact" },
//   { label: "Transit Calculator", deliverable: "Report", price: "Paid", icon: "🌍", desc: "Track current planetary movements affecting you" },
//   { label: "Zodiac Calculator", deliverable: "Report", price: "Free", icon: "♈", desc: "Find your sun, moon, and rising zodiac signs" },
//   { label: "Daily Predictions", deliverable: "Report", price: "Paid", icon: "📅", desc: "Get personalized daily astrological guidance" },
//   { label: "Horoscope", deliverable: "Report", price: "Free", icon: "🌙", desc: "Read your detailed horoscope and predictions" },
// ];

// const Movement = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [step, setStep] = useState(1);
//   const [selectedCalculator, setSelectedCalculator] = useState(null);
//   const [formData, setFormData] = useState({
//     fullName: "",
//     dob: "",
//     timeSlot: "",
//     birthPlace: "",
//     fullNameA: "",
//     dobA: "",
//     timeSlotA: "",
//     birthPlaceA: "",
//     fullNameB: "",
//     dobB: "",
//     timeSlotB: "",
//     birthPlaceB: "",
//     date: "",
//   });
//   const [backendData, setBackendData] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const navLinks = [
//     { name: "Home", link: "/", icon: "🏠" },
//     { name: "About Us", link: "/about-us", icon: "✨" },
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

//   const handleCalculatorSelect = (calc) => {
//     setSelectedCalculator(calc);
//     setStep(2);
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const validateForm = () => {
//     if (!selectedCalculator) return false;
//     const type = selectedCalculator.label;
//     if (type === "Compatibility") {
//       const requiredA = ["fullNameA", "dobA", "birthPlaceA", "timeSlotA"];
//       const requiredB = ["fullNameB", "dobB", "birthPlaceB", "timeSlotB"];
//       for (let f of [...requiredA, ...requiredB]) {
//         if (!formData[f]) {
//           alert("Please fill all fields for Person A and B");
//           return false;
//         }
//       }
//     } else if (type === "Numerology" && (!formData.fullName || !formData.dob)) {
//       alert("Please fill Name and Date of Birth");
//       return false;
//     } else if (type === "Daily Predictions" && !formData.date) {
//       alert("Please select a date");
//       return false;
//     } else if (
//       !["Numerology", "Daily Predictions"].includes(type) &&
//       (!formData.dob || !formData.timeSlot || !formData.birthPlace)
//     ) {
//       alert("Please fill Date, Time, and Place of Birth");
//       return false;
//     }
//     return true;
//   };

//   const handleFormSubmit = async () => {
//     if (!validateForm()) return;
//     setLoading(true);
//     setBackendData(null);

//     let response;
//     try {
//       switch (selectedCalculator.label) {
//         case "Kundli":
//           response = await KundliAPI.calculate(formData);
//           break;
//         case "Numerology":
//           response = await NumerologyAPI.calculate(formData);
//           break;
//         case "Compatibility":
//           response = await CompatibilityAPI.calculate(formData);
//           break;
//         case "Gemstone Recommendation":
//           response = await GemstoneAPI.calculate(formData);
//           break;
//         case "Dasha (Vimshottari)":
//           response = await DashaAPI.calculate(formData);
//           break;
//         case "Manglik Calculator":
//           response = await ManglikAPI.calculate(formData);
//           break;
//         case "Nakshatra Calculator":
//           response = await NakshatraAPI.calculate(formData);
//           break;
//         case "Planetary Calculator":
//           response = await PlanetaryAPI.calculate(formData);
//           break;
//         case "Transit Calculator":
//           response = await TransitAPI.calculate(formData);
//           break;
//         case "Zodiac Calculator":
//           response = await ZodiacAPI.calculate(formData);
//           break;
//         case "Daily Predictions":
//           response = await DailyPredictionAPI.create(formData);
//           break;
//         case "Horoscope":
//           response = await HoroscopeAPI.calculate(formData);
//           break;
//         default:
//           response = { data: { message: "No API mapped!" } };
//       }
//       setBackendData(response.data);
//       setStep(3);
//     } catch (error) {
//       setBackendData({ error: error.message || "API Error" });
//       setStep(3);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const resetForm = () => {
//     setStep(1);
//     setSelectedCalculator(null);
//     setBackendData(null);
//     setFormData({
//       fullName: "",
//       dob: "",
//       timeSlot: "",
//       birthPlace: "",
//       fullNameA: "",
//       dobA: "",
//       timeSlotA: "",
//       birthPlaceA: "",
//       fullNameB: "",
//       dobB: "",
//       timeSlotB: "",
//       birthPlaceB: "",
//       date: "",
//     });
//   };

//   const renderStars = (count) =>
//     Array.from({ length: count }).map((_, i) => (
//       <div
//         key={i}
//         style={{
//           position: "absolute",
//           top: `${Math.random() * 100}%`,
//           left: `${Math.random() * 100}%`,
//           width: `${1 + Math.random() * 2}px`,
//           height: `${1 + Math.random() * 2}px`,
//           background: "#fff",
//           borderRadius: "50%",
//           animation: `twinkle ${2 + Math.random() * 3}s linear infinite`,
//         }}
//       />
//     ));

//   return (
//     <div
//       style={{
//         display: "flex",
//         minHeight: "100vh",
//         background: "radial-gradient(circle at top, #0a0018, #1e003f)",
//         fontFamily: "'Poppins', sans-serif",
//         color: "#fff",
//         overflow: "hidden",
//         position: "relative",
//       }}
//     >
//       <style>{`
//         @keyframes twinkle {
//           0%, 100% { opacity: 0.3; }
//           50% { opacity: 1; }
//         }
//         @keyframes spin { to { transform: rotate(360deg); } }
//         @keyframes glowMove {
//           0% { background-position: 0% 50%; }
//           50% { background-position: 100% 50%; }
//           100% { background-position: 0% 50%; }
//         }
//       `}</style>

//       <div style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0 }}>{renderStars(80)}</div>

//       {/* Sidebar - same as Home.jsx */}
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

//       {/* Hamburger */}
//       <button
//         onClick={() => setSidebarOpen(!sidebarOpen)}
//         style={{
//           position: "fixed",
//           top: "22px",
//           left: "25px",
//           background: "linear-gradient(135deg, #ff00ff, #7b2cbf)",
//           color: "#fff",
//           border: "none",
//           fontSize: "26px",
//           borderRadius: "50%",
//           width: "55px",
//           height: "55px",
//           cursor: "pointer",
//           zIndex: 1100,
//           boxShadow: "0 0 25px rgba(255, 0, 255, 0.4)",
//           transition: "all 0.3s ease-in-out",
//           transform: sidebarOpen ? "rotate(90deg)" : "none",
//         }}
//       >
//         ☰
//       </button>

//       {/* Main Content */}
//       <div
//         style={{
//           flex: 1,
//           padding: "6rem 3rem 4rem",
//           maxWidth: "1600px",
//           margin: "0 auto",
//           zIndex: 5,
//           marginLeft: sidebarOpen ? "270px" : "0",
//           transition: "margin-left 0.6s ease",
//         }}
//       >
//         <h1
//           style={{
//             fontSize: "2.5rem",
//             fontWeight: 700,
//             textAlign: "center",
//             marginBottom: "1rem",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             gap: "10px",
//           }}
//         >
//           <Sparkles size={26} /> Astro Calculators
//         </h1>

//         <p
//           style={{
//             textAlign: "center",
//             fontSize: "1.1rem",
//             marginBottom: "3rem",
//           }}
//         >
//           Unlock astrological insights and align with your cosmic blueprint 🌙
//         </p>

//         {/* === Step 1: Calculator Grid === */}
//         {step === 1 && (
//           <div
//             style={{
//               display: "grid",
//               gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))",
//               gap: "2.5rem",
//               width: "100%",
//               maxWidth: "1300px",
//               margin: "0 auto",
//               padding: "2rem 2rem 4rem",
//             }}
//           >
//             {calculators.map((calc, idx) => (
//               <div
//                 key={idx}
//                 onClick={() => handleCalculatorSelect(calc)}
//                 style={{
//                   background: "rgba(255, 255, 255, 0.2)",
//                   backdropFilter: "blur(15px)",
//                   borderRadius: "22px",
//                   padding: "2rem 1.6rem",
//                   textAlign: "center",
//                   cursor: "pointer",
//                   transition: "all 0.4s ease",
//                   width: "100%",
//                   maxWidth: "270px",
//                   minHeight: "280px",
//                   display: "flex",
//                   flexDirection: "column",
//                   justifyContent: "space-between",
//                   boxShadow: "0 0 25px rgba(255, 0, 255, 0.15)",
//                   border: "1px solid rgba(255, 255, 255, 0.1)",
//                 }}
//                 onMouseEnter={(e) => {
//                   e.currentTarget.style.transform = "translateY(-10px) scale(1.05)";
//                   e.currentTarget.style.boxShadow = "0 0 40px rgba(255, 0, 255, 0.45)";
//                 }}
//                 onMouseLeave={(e) => {
//                   e.currentTarget.style.transform = "translateY(0) scale(1)";
//                   e.currentTarget.style.boxShadow = "0 0 25px rgba(255, 0, 255, 0.15)";
//                 }}
//               >
//                 <span style={{ fontSize: "3.5rem", marginBottom: "0.5rem" }}>{calc.icon}</span>
//                 <h3
//                   style={{
//                     fontSize: "1.45rem",
//                     fontWeight: 700,
//                     background: "linear-gradient(90deg, #ffffff, #aef5ff)",
//                     WebkitBackgroundClip: "text",
//                     WebkitTextFillColor: "transparent",
//                   }}
//                 >
//                   {calc.label}
//                 </h3>
//                 <p style={{ color: "#e7e4ff", fontSize: "0.95rem", lineHeight: 1.4 }}>{calc.desc}</p>
//                 <p>Deliverable: {calc.deliverable}</p>
//                 <p>Price: {calc.price}</p>
//               </div>
//             ))}
//           </div>
//         )}

//         {/* === Step 2: Form === */}
//         {step === 2 && (
//           <div
//             style={{
//               background: "rgba(255,255,255,0.13)",
//               backdropFilter: "blur(17px)",
//               borderRadius: "24px",
//               padding: "3rem 2rem",
//               maxWidth: "720px",
//               margin: "3rem auto",
//               textAlign: "center",
//             }}
//           >
//             <h2 style={{ fontSize: "2rem", marginBottom: "2rem" }}>
//               {selectedCalculator.icon} {selectedCalculator.label}
//             </h2>
//             <div>
//               {/* Conditional Inputs */}
//               {selectedCalculator.label === "Compatibility" ? (
//                 <>
//                   <h4 style={{ color: "#aef5ff" }}>Person A</h4>
//                   <input name="fullNameA" placeholder="Full Name" onChange={handleChange} />
//                   <input type="date" name="dobA" onChange={handleChange} />
//                   <input name="birthPlaceA" placeholder="Place of Birth" onChange={handleChange} />
//                   <input type="time" name="timeSlotA" onChange={handleChange} />
//                   <h4 style={{ color: "#aef5ff" }}>Person B</h4>
//                   <input name="fullNameB" placeholder="Full Name" onChange={handleChange} />
//                   <input type="date" name="dobB" onChange={handleChange} />
//                   <input name="birthPlaceB" placeholder="Place of Birth" onChange={handleChange} />
//                   <input type="time" name="timeSlotB" onChange={handleChange} />
//                 </>
//               ) : selectedCalculator.label === "Numerology" ? (
//                 <>
//                   <input name="fullName" placeholder="Full Name" onChange={handleChange} />
//                   <input type="date" name="dob" onChange={handleChange} />
//                 </>
//               ) : selectedCalculator.label === "Daily Predictions" ? (
//                 <input type="date" name="date" onChange={handleChange} />
//               ) : (
//                 <>
//                   <input name="fullName" placeholder="Full Name" onChange={handleChange} />
//                   <input type="date" name="dob" onChange={handleChange} />
//                   <input type="time" name="timeSlot" onChange={handleChange} />
//                   <input name="birthPlace" placeholder="Place of Birth" onChange={handleChange} />
//                 </>
//               )}

//               <button
//                 onClick={handleFormSubmit}
//                 disabled={loading}
//                 style={{
//                   display: "inline-flex",
//                   alignItems: "center",
//                   gap: "8px",
//                   background: "linear-gradient(90deg, #ff00ff, #8a2be2, #00ffff)",
//                   border: "none",
//                   color: "#fff",
//                   padding: "14px 36px",
//                   borderRadius: "40px",
//                   fontWeight: "600",
//                   marginTop: "1rem",
//                 }}
//               >
//                 {loading ? (
//                   <Loader2 size={20} style={{ animation: "spin 1s linear infinite" }} />
//                 ) : (
//                   "Get Report 💫"
//                 )}
//               </button>
//             </div>
//           </div>
//         )}

//         {/* === Step 3: Report === */}
//         {step === 3 && (
//           <div
//             style={{
//               background: "rgba(255,255,255,0.13)",
//               borderRadius: "24px",
//               padding: "3rem 2rem",
//               maxWidth: "720px",
//               margin: "3rem auto",
//               textAlign: "center",
//             }}
//           >
//             <h2>
//               {selectedCalculator.icon} Your {selectedCalculator.label} Report
//             </h2>
//             <div
//               style={{
//                 background: "rgba(255,255,255,0.1)",
//                 padding: "2rem",
//                 borderRadius: "15px",
//                 marginBottom: "2rem",
//                 whiteSpace: "pre-wrap",
//                 textAlign: "left",
//               }}
//             >
//               {backendData ? JSON.stringify(backendData, null, 2) : "No data available"}
//             </div>
//             <button
//               onClick={resetForm}
//               style={{
//                 background: "linear-gradient(90deg, #ff00ff, #8a2be2, #00ffff)",
//                 border: "none",
//                 color: "#fff",
//                 padding: "14px 36px",
//                 borderRadius: "40px",
//                 fontWeight: "600",
//                 cursor: "pointer",
//               }}
//             >
//               Back to Calculators
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Movement;

// // import React, { useState } from "react";
// // import { Loader2, Sparkles } from "lucide-react";
// // import KundliReport from "./reports/KundliReport";
// // import NumerologyReport from "./reports/NumerologyReport";
// // import CompatibilityReport from "./reports/CompatibilityReport";
// // import {
// //   KundliAPI,
// //   NumerologyAPI,
// //   CompatibilityAPI,
// //   GemstoneAPI,
// //   PanchangAPI,
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
// //   { label: "Kundli", deliverable: "Chart", price: "Free", icon: "🔮", desc: "Generate your complete birth chart with planetary positions" },
// //   { label: "Numerology", deliverable: "Report", price: "Free", icon: "🔢", desc: "Discover your life path number and destiny insights" },
// //   { label: "Compatibility", deliverable: "PDF", price: "Paid", icon: "💕", desc: "Analyze relationship compatibility between two souls" },
// //   { label: "Gemstone Recommendation", deliverable: "Report", price: "Paid", icon: "💎", desc: "Find your lucky gemstones based on planetary alignment" },
// //   { label: "Dasha (Vimshottari)", deliverable: "Report", price: "Paid", icon: "⏳", desc: "Explore your planetary periods and life phases" },
// //   { label: "Manglik Calculator", deliverable: "Report", price: "Paid", icon: "🔥", desc: "Check Manglik dosha and its effects on your life" },
// //   { label: "Nakshatra Calculator", deliverable: "Report", price: "Paid", icon: "⭐", desc: "Discover your birth star and its cosmic influence" },
// //   { label: "Planetary Calculator", deliverable: "Report", price: "Paid", icon: "🪐", desc: "Analyze planetary strengths and their impact" },
// //   { label: "Transit Calculator", deliverable: "Report", price: "Paid", icon: "🌍", desc: "Track current planetary movements affecting you" },
// //   { label: "Zodiac Calculator", deliverable: "Report", price: "Free", icon: "♈", desc: "Find your sun, moon, and rising zodiac signs" },
// //   { label: "Daily Predictions", deliverable: "Report", price: "Paid", icon: "📅", desc: "Get personalized daily astrological guidance" },
// //   { label: "Horoscope", deliverable: "Report", price: "Free", icon: "🌙", desc: "Read your detailed horoscope and predictions" },
// // ];

// // const Movement = () => {
// //   const [sidebarOpen, setSidebarOpen] = useState(false);
// //   const [step, setStep] = useState(1);
// //   const [selectedCalculator, setSelectedCalculator] = useState(null);
// //   const [formData, setFormData] = useState({
// //     fullName: "",
// //     dob: "",
// //     timeSlot: "",
// //     birthPlace: "",
// //     fullNameA: "",
// //     dobA: "",
// //     timeSlotA: "",
// //     birthPlaceA: "",
// //     fullNameB: "",
// //     dobB: "",
// //     timeSlotB: "",
// //     birthPlaceB: "",
// //     date: "",
// //   });
// //   const [backendData, setBackendData] = useState(null);
// //   const [loading, setLoading] = useState(false);

// //   const navLinks = [
// //     { name: "Home", link: "/", icon: "🏠" },
// //     { name: "About Us", link: "/about-us", icon: "✨" },
// //     { name: "Energy", link: "/energy", icon: "⚡" },
// //     { name: "Movement", link: "/movement", icon: "🌊" },
// //     { name: "Space Vastu", link: "/space-vastu", icon: "🏛️" },
// //     { name: "Manifestation", link: "/manifestation", icon: "💫" },
// //     { name: "Material", link: "/material", icon: "💎" },
// //     { name: "Blogs", link: "/blogs", icon: "📝" },
// //     { name: "Careers", link: "/careers", icon: "💼" },
// //     { name: "Contact", link: "/contact", icon: "📧" },
// //     { name: "Login / Signup", link: "/auth", icon: "🔐" },
// //   ];

// //   const handleCalculatorSelect = (calc) => {
// //     setSelectedCalculator(calc);
// //     setStep(2);
// //   };

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData((prev) => ({ ...prev, [name]: value }));
// //   };

// //   const validateForm = () => {
// //     if (!selectedCalculator) return false;
// //     const type = selectedCalculator.label;
// //     if (type === "Compatibility") {
// //       const requiredA = ["fullNameA", "dobA", "birthPlaceA", "timeSlotA"];
// //       const requiredB = ["fullNameB", "dobB", "birthPlaceB", "timeSlotB"];
// //       for (let f of [...requiredA, ...requiredB]) {
// //         if (!formData[f]) {
// //           alert("Please fill all fields for Person A and B");
// //           return false;
// //         }
// //       }
// //     } else if (type === "Numerology" && (!formData.fullName || !formData.dob)) {
// //       alert("Please fill Name and Date of Birth");
// //       return false;
// //     } else if (type === "Daily Predictions" && !formData.date) {
// //       alert("Please select a date");
// //       return false;
// //     } else if (
// //       !["Numerology", "Daily Predictions"].includes(type) &&
// //       (!formData.dob || !formData.timeSlot || !formData.birthPlace)
// //     ) {
// //       alert("Please fill Date, Time, and Place of Birth");
// //       return false;
// //     }
// //     return true;
// //   };

// //   const handleFormSubmit = async () => {
// //     if (!validateForm()) return;
// //     setLoading(true);
// //     setBackendData(null);

// //     let response;
// //     try {
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
// //     } catch (error) {
// //       setBackendData({ error: error.message || "API Error" });
// //       setStep(3);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   const resetForm = () => {
// //     setStep(1);
// //     setSelectedCalculator(null);
// //     setBackendData(null);
// //     setFormData({
// //       fullName: "",
// //       dob: "",
// //       timeSlot: "",
// //       birthPlace: "",
// //       fullNameA: "",
// //       dobA: "",
// //       timeSlotA: "",
// //       birthPlaceA: "",
// //       fullNameB: "",
// //       dobB: "",
// //       timeSlotB: "",
// //       birthPlaceB: "",
// //       date: "",
// //     });
// //   };

// //   const renderStars = (count) =>
// //     Array.from({ length: count }).map((_, i) => (
// //       <div
// //         key={i}
// //         style={{
// //           position: "absolute",
// //           top: `${Math.random() * 100}%`,
// //           left: `${Math.random() * 100}%`,
// //           width: `${1 + Math.random() * 2}px`,
// //           height: `${1 + Math.random() * 2}px`,
// //           background: "#fff",
// //           borderRadius: "50%",
// //           animation: `twinkle ${2 + Math.random() * 3}s linear infinite`,
// //         }}
// //       />
// //     ));

// //   return (
// //     <div
// //       style={{
// //         display: "flex",
// //         minHeight: "100vh",
// //         background: "radial-gradient(circle at top, #0a0018, #1e003f)",
// //         fontFamily: "'Poppins', sans-serif",
// //         color: "#fff",
// //         overflow: "hidden",
// //         position: "relative",
// //       }}
// //     >
// //       <style>{`
// //         @keyframes twinkle {
// //           0%, 100% { opacity: 0.3; }
// //           50% { opacity: 1; }
// //         }
// //         @keyframes spin { to { transform: rotate(360deg); } }
// //       `}</style>

// //       <div style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0 }}>{renderStars(80)}</div>

// //       {/* Sidebar */}
// //       <div
// //         className={`sidebar ${sidebarOpen ? "open" : ""}`}
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
// //               transition: "all 0.3s ease",
// //             }}
// //             onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1) rotate(90deg)")}
// //             onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1) rotate(0deg)")}
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
// //           ✨ AstroConnect
// //         </h2>
// //         <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
// //           {navLinks.map((item, idx) => (
// //             <li key={idx} style={{ margin: "14px 0" }}>
// //               <a
// //                 href={item.link}
// //                 onClick={() => setSidebarOpen(false)}
// //                 style={{
// //                   color: "#ccc",
// //                   display: "flex",
// //                   alignItems: "center",
// //                   gap: "10px",
// //                   padding: "12px 18px",
// //                   borderRadius: "10px",
// //                   textDecoration: "none",
// //                   fontSize: "1rem",
// //                   fontWeight: 500,
// //                   transition: "all 0.3s ease",
// //                 }}
// //               >
// //                 <span style={{ fontSize: "1.4rem" }}>{item.icon}</span>
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
// //             transition: "all 0.3s ease-in-out",
// //           }}
// //         >
// //           ☰
// //         </button>
// //       )}

// //       {/* Main Content */}
// //       <div
// //         style={{
// //           flex: 1,
// //           padding: "6rem 3rem 4rem",
// //           maxWidth: "1600px",
// //           margin: "0 auto",
// //           zIndex: 5,
// //           marginLeft: sidebarOpen ? "270px" : "0",
// //           transition: "margin-left 0.6s ease",
// //         }}
// //       >
// //         <h1
// //           style={{
// //             fontSize: "2.5rem",
// //             fontWeight: 700,
// //             textAlign: "center",
// //             marginBottom: "1rem",
// //             display: "flex",
// //             alignItems: "center",
// //             justifyContent: "center",
// //             gap: "10px",
// //           }}
// //         >
// //           <Sparkles size={26} /> Astro Calculators
// //         </h1>
// //         <p
// //           style={{
// //             textAlign: "center",
// //             fontSize: "1.1rem",
// //             marginBottom: "3rem",
// //           }}
// //         >
// //           Unlock astrological insights and align with your cosmic blueprint 🌙
// //         </p>

// //         {/* === Steps and Reports (unchanged) === */}
// //         {step === 1 && (
// //           <div
// //             style={{
// //               display: "grid",
// //               gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))",
// //               gap: "2.5rem",
// //               width: "100%",
// //               maxWidth: "1300px",
// //               margin: "0 auto",
// //               padding: "2rem 2rem 4rem",
// //             }}
// //           >
// //             {calculators.map((calc, idx) => (
// //               <div
// //                 key={idx}
// //                 onClick={() => handleCalculatorSelect(calc)}
// //                 style={{
// //                   background: "rgba(255, 255, 255, 0.2)",
// //                   backdropFilter: "blur(15px)",
// //                   borderRadius: "22px",
// //                   padding: "2rem 1.6rem",
// //                   textAlign: "center",
// //                   cursor: "pointer",
// //                   transition: "all 0.4s ease",
// //                   width: "100%",
// //                   maxWidth: "270px",
// //                   minHeight: "280px",
// //                   display: "flex",
// //                   flexDirection: "column",
// //                   justifyContent: "space-between",
// //                   boxShadow: "0 0 25px rgba(255, 0, 255, 0.15)",
// //                   border: "1px solid rgba(255, 255, 255, 0.1)",
// //                 }}
// //               >
// //                 <span style={{ fontSize: "3.5rem", marginBottom: "0.5rem" }}>{calc.icon}</span>
// //                 <h3
// //                   style={{
// //                     fontSize: "1.45rem",
// //                     fontWeight: 700,
// //                     background: "linear-gradient(90deg, #ffffff, #aef5ff)",
// //                     WebkitBackgroundClip: "text",
// //                     WebkitTextFillColor: "transparent",
// //                   }}
// //                 >
// //                   {calc.label}
// //                 </h3>
// //                 <p style={{ color: "#e7e4ff", fontSize: "0.95rem", lineHeight: 1.4 }}>{calc.desc}</p>
// //                 <p>Deliverable: {calc.deliverable}</p>
// //                 <p>Price: {calc.price}</p>
// //               </div>
// //             ))}
// //           </div>
// //         )}

// //         {/* Steps 2 and 3 remain exactly as before */}
// //         {step === 2 && (
// //           <div style={{ background: "rgba(255,255,255,0.13)", padding: "3rem 2rem", borderRadius: "24px", maxWidth: "720px", margin: "3rem auto", textAlign: "center" }}>
// //             <h2 style={{ fontSize: "2rem", marginBottom: "2rem" }}>{selectedCalculator.icon} {selectedCalculator.label}</h2>
// //             {/* Inputs logic same */}
// //             <button onClick={handleFormSubmit} disabled={loading} style={{ background: "linear-gradient(90deg, #ff00ff, #8a2be2, #00ffff)", border: "none", color: "#fff", padding: "14px 36px", borderRadius: "40px", fontWeight: "600", marginTop: "1rem" }}>
// //               {loading ? <Loader2 size={20} style={{ animation: "spin 1s linear infinite" }} /> : "Get Report 💫"}
// //             </button>
// //           </div>
// //         )}
// //         {step === 3 && (
// //           <div style={{ background: "rgba(255,255,255,0.13)", borderRadius: "24px", padding: "3rem 2rem", maxWidth: "720px", margin: "3rem auto", textAlign: "center" }}>
// //             <h2>{selectedCalculator.icon} Your {selectedCalculator.label} Report</h2>
// //             <pre style={{ background: "rgba(255,255,255,0.1)", padding: "2rem", borderRadius: "15px", textAlign: "left" }}>
// //               {backendData ? JSON.stringify(backendData, null, 2) : "No data available"}
// //             </pre>
// //             <button onClick={resetForm} style={{ background: "linear-gradient(90deg, #ff00ff, #8a2be2, #00ffff)", border: "none", color: "#fff", padding: "14px 36px", borderRadius: "40px", fontWeight: "600", cursor: "pointer" }}>
// //               Back to Calculators
// //             </button>
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default Movement;

import React, { useState } from "react";
import { Loader2, Sparkles } from "lucide-react";
import KundliReport from "./reports/KundliReport";
import NumerologyReport from "./reports/NumerologyReport";
import CompatibilityReport from "./reports/CompatibilityReport";
import {
  KundliAPI,
  NumerologyAPI,
  CompatibilityAPI,
  GemstoneAPI,
  PanchangAPI,
  PlanetaryAPI,
  TransitAPI,
  ZodiacAPI,
  ManglikAPI,
  DashaAPI,
  NakshatraAPI,
  DailyPredictionAPI,
  HoroscopeAPI,
} from "../../api/apiService";

const calculators = [
  { label: "Kundli", deliverable: "Chart", price: "Free", icon: "🔮", desc: "Generate your complete birth chart with planetary positions" },
  { label: "Numerology", deliverable: "Report", price: "Free", icon: "🔢", desc: "Discover your life path number and destiny insights" },
  { label: "Compatibility", deliverable: "PDF", price: "Paid", icon: "💕", desc: "Analyze relationship compatibility between two souls" },
  { label: "Gemstone Recommendation", deliverable: "Report", price: "Paid", icon: "💎", desc: "Find your lucky gemstones based on planetary alignment" },
  { label: "Dasha (Vimshottari)", deliverable: "Report", price: "Paid", icon: "⏳", desc: "Explore your planetary periods and life phases" },
  { label: "Manglik Calculator", deliverable: "Report", price: "Paid", icon: "🔥", desc: "Check Manglik dosha and its effects on your life" },
  { label: "Nakshatra Calculator", deliverable: "Report", price: "Paid", icon: "⭐", desc: "Discover your birth star and its cosmic influence" },
  { label: "Planetary Calculator", deliverable: "Report", price: "Paid", icon: "🪐", desc: "Analyze planetary strengths and their impact" },
  { label: "Transit Calculator", deliverable: "Report", price: "Paid", icon: "🌍", desc: "Track current planetary movements affecting you" },
  { label: "Zodiac Calculator", deliverable: "Report", price: "Free", icon: "♈", desc: "Find your sun, moon, and rising zodiac signs" },
  { label: "Daily Predictions", deliverable: "Report", price: "Paid", icon: "📅", desc: "Get personalized daily astrological guidance" },
  { label: "Horoscope", deliverable: "Report", price: "Free", icon: "🌙", desc: "Read your detailed horoscope and predictions" },
];

const Movement = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [selectedCalculator, setSelectedCalculator] = useState(null);
  const [formData, setFormData] = useState({
    fullName: "",
    dob: "",
    timeSlot: "",
    birthPlace: "",
    fullNameA: "",
    dobA: "",
    timeSlotA: "",
    birthPlaceA: "",
    fullNameB: "",
    dobB: "",
    timeSlotB: "",
    birthPlaceB: "",
    date: "",
  });
  const [backendData, setBackendData] = useState(null);
  const [loading, setLoading] = useState(false);

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

  const handleCalculatorSelect = (calc) => {
    setSelectedCalculator(calc);
    setStep(2);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    if (!selectedCalculator) return false;
    const type = selectedCalculator.label;

    if (type === "Compatibility") {
      const requiredA = ["fullNameA", "dobA", "birthPlaceA", "timeSlotA"];
      const requiredB = ["fullNameB", "dobB", "birthPlaceB", "timeSlotB"];
      for (let f of [...requiredA, ...requiredB]) {
        if (!formData[f]) {
          alert("Please fill all fields for Person A and B");
          return false;
        }
      }
    } else if (type === "Numerology" && (!formData.fullName || !formData.dob)) {
      alert("Please fill Name and Date of Birth");
      return false;
    } else if (type === "Daily Predictions" && !formData.date) {
      alert("Please select a date");
      return false;
    } else if (
      !["Numerology", "Daily Predictions"].includes(type) &&
      (!formData.dob || !formData.timeSlot || !formData.birthPlace)
    ) {
      alert("Please fill Date, Time, and Place of Birth");
      return false;
    }
    return true;
  };

  const handleFormSubmit = async () => {
    if (!validateForm()) return;
    setLoading(true);
    setBackendData(null);

    let response;
    try {
      switch (selectedCalculator.label) {
        case "Kundli":
          response = await KundliAPI.calculate(formData);
          break;
        case "Numerology":
          response = await NumerologyAPI.calculate(formData);
          break;
        case "Compatibility":
          response = await CompatibilityAPI.calculate(formData);
          break;
        case "Gemstone Recommendation":
          response = await GemstoneAPI.calculate(formData);
          break;
        case "Dasha (Vimshottari)":
          response = await DashaAPI.calculate(formData);
          break;
        case "Manglik Calculator":
          response = await ManglikAPI.calculate(formData);
          break;
        case "Nakshatra Calculator":
          response = await NakshatraAPI.calculate(formData);
          break;
        case "Planetary Calculator":
          response = await PlanetaryAPI.calculate(formData);
          break;
        case "Transit Calculator":
          response = await TransitAPI.calculate(formData);
          break;
        case "Zodiac Calculator":
          response = await ZodiacAPI.calculate(formData);
          break;
        case "Daily Predictions":
          response = await DailyPredictionAPI.create(formData);
          break;
        case "Horoscope":
          response = await HoroscopeAPI.calculate(formData);
          break;
        default:
          response = { data: { message: "No API mapped!" } };
      }
      setBackendData(response.data);
      setStep(3);
    } catch (error) {
      setBackendData({ error: error.message || "API Error" });
      setStep(3);
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setStep(1);
    setSelectedCalculator(null);
    setBackendData(null);
    setFormData({
      fullName: "",
      dob: "",
      timeSlot: "",
      birthPlace: "",
      fullNameA: "",
      dobA: "",
      timeSlotA: "",
      birthPlaceA: "",
      fullNameB: "",
      dobB: "",
      timeSlotB: "",
      birthPlaceB: "",
      date: "",
    });
  };

  const renderStars = (count) =>
    Array.from({ length: count }).map((_, i) => (
      <div
        key={i}
        style={{
          position: "absolute",
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          width: `${1 + Math.random() * 2}px`,
          height: `${1 + Math.random() * 2}px`,
          background: "#fff",
          borderRadius: "50%",
          animation: `twinkle ${2 + Math.random() * 3}s linear infinite`,
        }}
      />
    ));

  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        background: "radial-gradient(circle at top, #0a0018, #1e003f)",
        fontFamily: "'Poppins', sans-serif",
        color: "#fff",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>

      <div style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0 }}>{renderStars(80)}</div>

      {/* Sidebar */}
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
              >
                <span style={{ fontSize: "1.4rem" }}>{item.icon}</span>
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Hamburger (only visible when sidebar closed) */}
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

      {/* Main Content */}
      <div
        style={{
          flex: 1,
          padding: "6rem 3rem 4rem",
          maxWidth: "1600px",
          margin: "0 auto",
          zIndex: 5,
          marginLeft: sidebarOpen ? "270px" : "0",
          transition: "margin-left 0.6s ease",
        }}
      >
        <h1
          style={{
            fontSize: "2.5rem",
            fontWeight: 700,
            textAlign: "center",
            marginBottom: "1rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
          }}
        >
          <Sparkles size={26} /> Astro Calculators
        </h1>

        <p
          style={{
            textAlign: "center",
            fontSize: "1.1rem",
            marginBottom: "3rem",
          }}
        >
          Unlock astrological insights and align with your cosmic blueprint 🌙
        </p>

        {/* === Step 1: Calculator Grid === */}
        {step === 1 && (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))",
              gap: "2.5rem",
              width: "100%",
              maxWidth: "1300px",
              margin: "0 auto",
              padding: "2rem 2rem 4rem",
            }}
          >
            {calculators.map((calc, idx) => (
              <div
                key={idx}
                onClick={() => handleCalculatorSelect(calc)}
                style={{
                  background: "rgba(255, 255, 255, 0.2)",
                  backdropFilter: "blur(15px)",
                  borderRadius: "22px",
                  padding: "2rem 1.6rem",
                  textAlign: "center",
                  cursor: "pointer",
                  transition: "all 0.4s ease",
                  width: "100%",
                  maxWidth: "270px",
                  minHeight: "280px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  boxShadow: "0 0 25px rgba(255, 0, 255, 0.15)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-10px) scale(1.05)";
                  e.currentTarget.style.boxShadow = "0 0 40px rgba(255, 0, 255, 0.45)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0) scale(1)";
                  e.currentTarget.style.boxShadow = "0 0 25px rgba(255, 0, 255, 0.15)";
                }}
              >
                <span style={{ fontSize: "3.5rem", marginBottom: "0.5rem" }}>{calc.icon}</span>
                <h3
                  style={{
                    fontSize: "1.45rem",
                    fontWeight: 700,
                    background: "linear-gradient(90deg, #ffffff, #aef5ff)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {calc.label}
                </h3>
                <p style={{ color: "#e7e4ff", fontSize: "0.95rem", lineHeight: 1.4 }}>{calc.desc}</p>
                <p>Deliverable: {calc.deliverable}</p>
                <p>Price: {calc.price}</p>
              </div>
            ))}
          </div>
        )}
{/* === Step 2: Form (Iconic Cosmic Edition) === */}
{step === 2 && (
  <div
    style={{
      background: "rgba(255,255,255,0.1)",
      backdropFilter: "blur(20px)",
      borderRadius: "28px",
      padding: "3.5rem 3rem",
      maxWidth: "720px",
      margin: "3rem auto",
      boxShadow: "0 0 45px rgba(255, 0, 255, 0.3)",
      textAlign: "center",
      transition: "all 0.5s ease-in-out",
    }}
  >
    <h2
      style={{
        fontSize: "2.3rem",
        marginBottom: "2.5rem",
        background: "linear-gradient(90deg, #ff00ff, #00ffff)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        textShadow: "0 0 25px rgba(255, 0, 255, 0.5)",
      }}
    >
      {selectedCalculator.icon} {selectedCalculator.label}
    </h2>

    <style>{`
      .form-container {
        display: flex;
        flex-direction: column;
        gap: 1.8rem;
        width: 100%;
        max-width: 500px;
        margin: 0 auto;
        position: relative;
      }

      .form-group {
        position: relative;
        width: 100%;
      }

      .form-group input {
        width: 100%;
        padding: 15px 16px 15px 48px;
        font-size: 1rem;
        background: rgba(255,255,255,0.08);
        border: 1.5px solid rgba(255,255,255,0.2);
        border-radius: 14px;
        color: #fff;
        outline: none;
        transition: all 0.35s ease;
        box-shadow: 0 0 10px rgba(255,255,255,0.05);
      }

      .form-group input:hover {
        border-color: rgba(255,255,255,0.4);
      }

      .form-group input:focus {
        border-color: #ff00ff;
        box-shadow: 0 0 18px rgba(255,0,255,0.5);
        background: rgba(255,255,255,0.12);
      }

      .form-group label {
        position: absolute;
        left: 48px;
        top: 50%;
        transform: translateY(-50%);
        color: #bbb;
        font-size: 0.95rem;
        pointer-events: none;
        transition: all 0.3s ease;
      }

      .form-group input:focus + label,
      .form-group input:not(:placeholder-shown) + label {
        top: -9px;
        left: 42px;
        background: radial-gradient(circle at top left, #1a002f, #0a0018);
        padding: 0 6px;
        color: #ff9cff;
        font-size: 0.8rem;
      }

      .form-group .icon {
        position: absolute;
        left: 14px;
        top: 50%;
        transform: translateY(-50%);
        color: #aaa;
        font-size: 20px;
        transition: color 0.3s ease;
      }

      .form-group input:focus ~ .icon {
        color: #ff66ff;
        filter: drop-shadow(0 0 8px #ff00ff);
      }

      .glow-btn {
        margin-top: 2.5rem;
        background: linear-gradient(90deg, #ff00ff, #8a2be2, #00ffff);
        border: none;
        color: #fff;
        padding: 15px 50px;
        border-radius: 50px;
        font-weight: 700;
        font-size: 1.05rem;
        cursor: pointer;
        transition: all 0.4s ease;
        box-shadow: 0 0 25px rgba(255,0,255,0.3);
      }

      .glow-btn:hover {
        box-shadow: 0 0 45px rgba(255,0,255,0.7);
        transform: scale(1.08);
      }

      .glow-btn:active {
        transform: scale(0.98);
        box-shadow: 0 0 25px rgba(255,255,255,0.4);
      }
    `}</style>

    <div className="form-container">
      {selectedCalculator.label === "Compatibility" ? (
        <>
          <h4 style={{ color: "#aef5ff", textAlign: "left" }}>💫 Person A</h4>
          <div className="form-group">
            <i className="icon">👤</i>
            <input name="fullNameA" placeholder=" " onChange={handleChange} />
            <label>Full Name</label>
          </div>
          <div className="form-group">
            <i className="icon">📅</i>
            <input type="date" name="dobA" placeholder=" " onChange={handleChange} />
            <label>Date of Birth</label>
          </div>
          <div className="form-group">
            <i className="icon">⏰</i>
            <input type="time" name="timeSlotA" placeholder=" " onChange={handleChange} />
            <label>Time of Birth</label>
          </div>
          <div className="form-group">
            <i className="icon">📍</i>
            <input name="birthPlaceA" placeholder=" " onChange={handleChange} />
            <label>Place of Birth</label>
          </div>

          <h4 style={{ color: "#aef5ff", textAlign: "left", marginTop: "1.5rem" }}>💞 Person B</h4>
          <div className="form-group">
            <i className="icon">👤</i>
            <input name="fullNameB" placeholder=" " onChange={handleChange} />
            <label>Full Name</label>
          </div>
          <div className="form-group">
            <i className="icon">📅</i>
            <input type="date" name="dobB" placeholder=" " onChange={handleChange} />
            <label>Date of Birth</label>
          </div>
          <div className="form-group">
            <i className="icon">⏰</i>
            <input type="time" name="timeSlotB" placeholder=" " onChange={handleChange} />
            <label>Time of Birth</label>
          </div>
          <div className="form-group">
            <i className="icon">📍</i>
            <input name="birthPlaceB" placeholder=" " onChange={handleChange} />
            <label>Place of Birth</label>
          </div>
        </>
      ) : selectedCalculator.label === "Numerology" ? (
        <>
          <div className="form-group">
            <i className="icon">👤</i>
            <input name="fullName" placeholder=" " onChange={handleChange} />
            <label>Full Name</label>
          </div>
          <div className="form-group">
            <i className="icon">📅</i>
            <input type="date" name="dob" placeholder=" " onChange={handleChange} />
            <label>Date of Birth</label>
          </div>
        </>
      ) : selectedCalculator.label === "Daily Predictions" ? (
        <div className="form-group">
          <i className="icon">📆</i>
          <input type="date" name="date" placeholder=" " onChange={handleChange} />
          <label>Select Date</label>
        </div>
      ) : (
        <>
          <div className="form-group">
            <i className="icon">👤</i>
            <input name="fullName" placeholder=" " onChange={handleChange} />
            <label>Full Name</label>
          </div>
          <div className="form-group">
            <i className="icon">📅</i>
            <input type="date" name="dob" placeholder=" " onChange={handleChange} />
            <label>Date of Birth</label>
          </div>
          <div className="form-group">
            <i className="icon">⏰</i>
            <input type="time" name="timeSlot" placeholder=" " onChange={handleChange} />
            <label>Time of Birth</label>
          </div>
          <div className="form-group">
            <i className="icon">📍</i>
            <input name="birthPlace" placeholder=" " onChange={handleChange} />
            <label>Place of Birth</label>
          </div>
        </>
      )}

      <button className="glow-btn" onClick={handleFormSubmit} disabled={loading}>
        {loading ? <Loader2 size={20} style={{ animation: "spin 1s linear infinite" }} /> : "⚡ Get Report ✨"}
      </button>
    </div>
  </div>
)}

        {/* === Step 3: Report === */}
        {step === 3 && (
          <div
            style={{
              background: "rgba(255,255,255,0.13)",
              borderRadius: "24px",
              padding: "3rem 2rem",
              maxWidth: "720px",
              margin: "3rem auto",
              textAlign: "center",
            }}
          >
            <h2>
              {selectedCalculator.icon} Your {selectedCalculator.label} Report
            </h2>
            <div
              style={{
                background: "rgba(255,255,255,0.1)",
                padding: "2rem",
                borderRadius: "15px",
                marginBottom: "2rem",
                whiteSpace: "pre-wrap",
                textAlign: "left",
              }}
            >
              {backendData ? JSON.stringify(backendData, null, 2) : "No data available"}
            </div>
            <button
              onClick={resetForm}
              style={{
                background: "linear-gradient(90deg, #ff00ff, #8a2be2, #00ffff)",
                border: "none",
                color: "#fff",
                padding: "14px 36px",
                borderRadius: "40px",
                fontWeight: "600",
                cursor: "pointer",
              }}
            >
              Back to Calculators
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Movement;
