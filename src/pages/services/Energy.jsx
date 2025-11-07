// import React, { useState } from "react";
// import { jsPDF } from "jspdf";
// import "../../styles/Energy.css";
// import {
//   Loader2,
//   CheckCircle,
//   FileText,
//   Sparkles,
//   CreditCard,
//   ClipboardList,
//   Check,
// } from "lucide-react";

// const Energy = () => {
//   const [step, setStep] = useState(1);
//   const [serviceType, setServiceType] = useState("");
//   const [question, setQuestion] = useState("");
//   const [details, setDetails] = useState("");
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [dob, setDob] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [confirmationMsg, setConfirmationMsg] = useState("");
//   const [pdfReady, setPdfReady] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setStep(2);
//   };

//   const handlePayment = () => {
//     setLoading(true);
//     setTimeout(() => {
//       setLoading(false);
//       setStep(3);
//       setConfirmationMsg(
//         `✨ Hi ${name}, your "${serviceType}" reading has been successfully received. Expect your insights within 24–48 hours!`
//       );
//       if (["personalEnergy", "petEnergy", "spaceEnergy"].includes(serviceType)) {
//         generatePDF();
//       }
//     }, 2000);
//   };

//   const generatePDF = () => {
//     const doc = new jsPDF();
//     doc.setFontSize(18);
//     doc.text("Energy Reading Report", 20, 20);
//     doc.setFontSize(12);
//     doc.text(`Name: ${name}`, 20, 40);
//     doc.text(`Email/Phone: ${email}`, 20, 50);
//     doc.text(`Date of Birth: ${dob}`, 20, 60);
//     doc.text(`Service Type: ${serviceType}`, 20, 70);
//     if (serviceType === "yesNo") doc.text(`Question: ${question}`, 20, 80);
//     if (details) doc.text(`Details: ${details}`, 20, 90, { maxWidth: 170 });

//     doc.text("Energy Insights & Recommendations:", 20, 110);
//     doc.text(
//       "Your energy appears harmonious with minor blockages in the sacral chakra. Practice mindfulness, journaling, and grounding meditation for balance.",
//       20,
//       120,
//       { maxWidth: 170 }
//     );
//     doc.save(`${serviceType}_Energy_Report.pdf`);
//     setPdfReady(true);
//   };

//   const steps = [
//     { number: 1, label: "Form", icon: <ClipboardList size={18} /> },
//     { number: 2, label: "Payment", icon: <CreditCard size={18} /> },
//     { number: 3, label: "Confirmation", icon: <Check size={18} /> },
//   ];

//   const progressWidth = ((step - 1) / (steps.length - 1)) * 100;

//   const renderStars = (count) =>
//     Array.from({ length: count }).map((_, i) => (
//       <div
//         key={i}
//         className="star"
//         style={{
//           top: `${Math.random() * 100}%`,
//           left: `${Math.random() * 100}%`,
//           width: `${1 + Math.random() * 2}px`,
//           height: `${1 + Math.random() * 2}px`,
//           animationDuration: `${2 + Math.random() * 3}s`,
//         }}
//       ></div>
//     ));

//   return (
//     <div className="energy-page cosmic-bg">
//       <div className="stars-container">{renderStars(50)}</div>

//       <div className="energy-main">
//         <h1 className="energy-title">
//           <Sparkles size={28} /> Energy Reading Services
//         </h1>
//         <p className="energy-subtitle">
//           Discover what your aura reveals and how to align your energy for inner peace.
//         </p>

//         {/* Progress Bar */}
//         <div className="progress-container">
//           <div className="progress-track" />
//           <div
//             className="progress-fill"
//             style={{ width: `${progressWidth}%` }}
//           />
//           {steps.map((s) => (
//             <div
//               key={s.number}
//               className={`progress-step ${step >= s.number ? "active" : ""}`}
//             >
//               <div className="circle">{s.icon}</div>
//               <span>{s.label}</span>
//             </div>
//           ))}
//         </div>

//         {/* Step 1: Form */}
//         {step === 1 && (
//           <form className="energy-form glass-card" onSubmit={handleSubmit}>
//             <div className="form-group">
//               <label>Service Type</label>
//               <select
//                 value={serviceType}
//                 onChange={(e) => setServiceType(e.target.value)}
//                 required
//               >
//                 <option value="">Select a service</option>
//                 <option value="yesNo">Yes / No / Possibly</option>
//                 <option value="personalEnergy">Personal Energy Reading</option>
//                 <option value="spaceEnergy">Energy Reading for Space</option>
//                 <option value="compatibility">Compatibility Reading</option>
//                 <option value="auraChakra">Aura & Chakra Reading</option>
//                 <option value="petEnergy">Pet Energy Reading</option>
//               </select>
//             </div>

//             {serviceType === "yesNo" && (
//               <div className="form-group">
//                 <label>Your Question</label>
//                 <input
//                   type="text"
//                   value={question}
//                   onChange={(e) => setQuestion(e.target.value)}
//                   placeholder="Is this house good for me to buy?"
//                   required
//                 />
//               </div>
//             )}

//             {["personalEnergy", "petEnergy", "compatibility", "auraChakra", "spaceEnergy"].includes(serviceType) && (
//               <div className="form-group">
//                 <label>Details / Context</label>
//                 <textarea
//                   value={details}
//                   onChange={(e) => setDetails(e.target.value)}
//                   placeholder="Describe your situation, dream, or environment..."
//                   required
//                 />
//               </div>
//             )}

//             <div className="form-row">
//               <div className="form-group">
//                 <label>Full Name</label>
//                 <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
//               </div>

//               <div className="form-group">
//                 <label>Email / Phone</label>
//                 <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} required />
//               </div>
//             </div>

//             <div className="form-group">
//               <label>Date of Birth</label>
//               <input type="date" value={dob} onChange={(e) => setDob(e.target.value)} required />
//             </div>

//             <button type="submit" className="submit-btn glow-btn">
//               Continue to Payment
//             </button>
//           </form>
//         )}

//         {/* Step 2: Payment */}
//         {step === 2 && (
//           <div className="payment-section glass-card">
//             <h2>Payment Summary</h2>
//             <p>Service: <strong>{serviceType}</strong></p>
//             <p>Amount: <strong>₹499</strong></p>
//             <button onClick={handlePayment} className="submit-btn glow-btn" disabled={loading}>
//               {loading ? <Loader2 className="spinner" size={20} /> : "Complete Payment"}
//             </button>
//           </div>
//         )}

//         {/* Step 3: Confirmation */}
//         {step === 3 && (
//           <div className="confirmation-section glass-card">
//             <CheckCircle size={60} color="#4ade80" />
//             <h2>Thank You!</h2>
//             <p>{confirmationMsg}</p>
//             {pdfReady && (
//               <div className="pdf-status">
//                 <FileText size={20} /> Your Energy Report has been downloaded automatically.
//               </div>
//             )}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Energy;

// import React, { useState } from "react";
// import { jsPDF } from "jspdf";
// import {
//   Loader2,
//   CheckCircle,
//   FileText,
//   Sparkles,
//   CreditCard,
//   ClipboardList,
//   Check,
// } from "lucide-react";

// const Energy = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [step, setStep] = useState(1);
//   const [serviceType, setServiceType] = useState("");
//   const [question, setQuestion] = useState("");
//   const [details, setDetails] = useState("");
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [dob, setDob] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [confirmationMsg, setConfirmationMsg] = useState("");
//   const [pdfReady, setPdfReady] = useState(false);

//   const navLinks = [
//     { name: "Home", link: "/" },
//     { name: "About Us", link: "/about-us" },
//     { name: "Movement", link: "/movement" },
//     { name: "Space Vastu", link: "/space-vastu" },
//     { name: "Manifestation", link: "/manifestation" },
//     { name: "Material", link: "/material" },
//     { name: "Blogs", link: "/blogs" },
//     { name: "Careers", link: "/careers" },
//     { name: "Login / Signup", link: "/auth" },
//   ];

//   const steps = [
//     { number: 1, label: "Form", icon: <ClipboardList size={18} /> },
//     { number: 2, label: "Payment", icon: <CreditCard size={18} /> },
//     { number: 3, label: "Confirmation", icon: <Check size={18} /> },
//   ];
//   const progressWidth = ((step - 1) / (steps.length - 1)) * 100;

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setStep(2);
//   };

//   const handlePayment = () => {
//     setLoading(true);
//     setTimeout(() => {
//       setLoading(false);
//       setStep(3);
//       setConfirmationMsg(
//         `✨ Hi ${name}, your "${serviceType}" reading has been successfully received. Expect your insights within 24–48 hours!`
//       );
//       if (["personalEnergy", "petEnergy", "spaceEnergy"].includes(serviceType)) {
//         generatePDF();
//       }
//     }, 2000);
//   };

//   const generatePDF = () => {
//     const doc = new jsPDF();
//     doc.setFontSize(18);
//     doc.text("Energy Reading Report", 20, 20);
//     doc.setFontSize(12);
//     doc.text(`Name: ${name}`, 20, 40);
//     doc.text(`Email/Phone: ${email}`, 20, 50);
//     doc.text(`Date of Birth: ${dob}`, 20, 60);
//     doc.text(`Service Type: ${serviceType}`, 20, 70);
//     if (serviceType === "yesNo") doc.text(`Question: ${question}`, 20, 80);
//     if (details) doc.text(`Details: ${details}`, 20, 90, { maxWidth: 170 });
//     doc.text("Energy Insights & Recommendations:", 20, 110);
//     doc.text(
//       "Your energy appears harmonious with minor blockages in the sacral chakra. Practice mindfulness, journaling, and grounding meditation for balance.",
//       20,
//       120,
//       { maxWidth: 170 }
//     );
//     doc.save(`${serviceType}_Energy_Report.pdf`);
//     setPdfReady(true);
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
//       }}
//     >
//       <style>{`
//         @keyframes twinkle { 0%,100%{opacity:0.3;} 50%{opacity:1;} }

//         .sidebar {
//           position: fixed;
//           top: 0;
//           left: -280px;
//           width: 280px;
//           height: 100%;
//           background: rgba(20, 0, 40, 0.98);
//           backdrop-filter: blur(12px);
//           transition: left 0.3s ease;
//           z-index: 1000;
//           padding: 25px;
//           box-shadow: 2px 0 25px rgba(138, 43, 226, 0.3);
//         }

//         .sidebar.open { left: 0; }
//         .sidebar h2 {
//           font-size: 26px;
//           background: linear-gradient(90deg, #ff00ff, #00ffff);
//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//           margin-bottom: 30px;
//         }

//         .sidebar ul { list-style: none; padding: 0; margin: 0; }
//         .sidebar li { margin: 12px 0; }
//         .sidebar a {
//           color: #ccc;
//           text-decoration: none;
//           display: block;
//           padding: 10px 14px;
//           border-radius: 10px;
//           transition: all 0.3s;
//         }
//         .sidebar a:hover {
//           background: rgba(138, 43, 226, 0.3);
//           color: #fff;
//         }

//         .sidebar-toggle {
//           position: fixed;
//           top: 20px;
//           left: 20px;
//           background: linear-gradient(135deg, #ff00ff, #8a2be2);
//           border: none;
//           color: white;
//           font-size: 26px;
//           width: 55px;
//           height: 55px;
//           border-radius: 50%;
//           cursor: pointer;
//           z-index: 1100;
//           box-shadow: 0 0 20px rgba(255, 0, 255, 0.4);
//           transition: all 0.3s ease;
//         }
//         .sidebar-toggle:hover { transform: scale(1.1); }

//         .energy-container {
//           max-width: 800px;
//           margin: 120px auto;
//           padding: 20px;
//           text-align: center;
//         }

//         .glass-card {
//           background: rgba(255, 255, 255, 0.1);
//           backdrop-filter: blur(15px);
//           border-radius: 20px;
//           padding: 2rem;
//           box-shadow: 0 0 30px rgba(255, 0, 255, 0.2);
//           animation: fadeIn 0.8s ease;
//         }

//         .glow-btn {
//           width: 100%;
//           background: linear-gradient(90deg, #ff00ff, #8a2be2);
//           border: none;
//           color: #fff;
//           font-weight: 600;
//           padding: 14px;
//           border-radius: 50px;
//           cursor: pointer;
//           transition: all 0.3s;
//         }
//         .glow-btn:hover {
//           transform: scale(1.05);
//           box-shadow: 0 0 25px rgba(255, 0, 255, 0.4);
//         }

//         label { text-align:left; display:block; margin:10px 0 5px; color:#ccc; font-weight:600; }
//         input, select, textarea {
//           width:100%; padding:10px; border:none; border-radius:10px;
//           background:rgba(255,255,255,0.15); color:#fff; outline:none;
//         }

//         @keyframes fadeIn { from{opacity:0;transform:translateY(10px);} to{opacity:1;transform:translateY(0);} }

//         @media(max-width:768px){
//           .sidebar-toggle{width:45px;height:45px;}
//           .energy-container{margin:100px 15px;}
//         }
//       `}</style>

//       {/* Sidebar */}
//       <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
//         <h2>AstroConnect</h2>
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

//       {/* Hamburger Button */}
//       <button className="sidebar-toggle" onClick={() => setSidebarOpen(!sidebarOpen)}>
//         ☰
//       </button>

//       <div className="energy-container">
//         <div className="glass-card">
//           <h1 style={{ background: "linear-gradient(90deg,#ff00ff,#00ffff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
//             <Sparkles size={28} /> Energy Reading Services
//           </h1>

//           {step === 1 && (
//             <form onSubmit={handleSubmit}>
//               <label>Service Type</label>
//               <select value={serviceType} onChange={(e) => setServiceType(e.target.value)} required>
//                 <option value="">Choose your service</option>
//                 <option value="yesNo">🔮 Yes / No / Possibly</option>
//                 <option value="personalEnergy">🌙 Personal Energy Reading</option>
//                 <option value="spaceEnergy">🏡 Space Energy Reading</option>
//                 <option value="compatibility">💞 Compatibility Reading</option>
//                 <option value="auraChakra">🌀 Aura & Chakra Reading</option>
//                 <option value="petEnergy">🐾 Pet Energy Reading</option>
//               </select>

//               {serviceType === "yesNo" && (
//                 <>
//                   <label>Your Question</label>
//                   <input type="text" value={question} onChange={(e) => setQuestion(e.target.value)} required />
//                 </>
//               )}

//               <label>Full Name</label>
//               <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />

//               <label>Email / Phone</label>
//               <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} required />

//               <label>Date of Birth</label>
//               <input type="date" value={dob} onChange={(e) => setDob(e.target.value)} required />

//               <button type="submit" className="glow-btn">Continue to Payment ⚡</button>
//             </form>
//           )}

//           {step === 2 && (
//             <div>
//               <h3>Complete Payment</h3>
//               <p>Service: <strong>{serviceType}</strong></p>
//               <p>Amount: <strong>₹499</strong></p>
//               <button onClick={handlePayment} className="glow-btn" disabled={loading}>
//                 {loading ? <Loader2 className="spinner" size={20} /> : "Pay Now 💫"}
//               </button>
//             </div>
//           )}

//           {step === 3 && (
//             <div>
//               <CheckCircle size={60} color="#4ade80" />
//               <h2>Thank You!</h2>
//               <p>{confirmationMsg}</p>
//               {pdfReady && (
//                 <p>
//                   <FileText size={20} /> Your Energy Report has been downloaded automatically.
//                 </p>
//               )}
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Energy;

// import React, { useState } from "react";
// import { jsPDF } from "jspdf";
// import "../../styles/Energy.css";
// import {
//   Loader2,
//   CheckCircle,
//   FileText,
//   Sparkles,
//   CreditCard,
//   ClipboardList,
//   Check,
// } from "lucide-react";

// const Energy = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [step, setStep] = useState(1);
//   const [serviceType, setServiceType] = useState("");
//   const [question, setQuestion] = useState("");
//   const [details, setDetails] = useState("");
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [dob, setDob] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [confirmationMsg, setConfirmationMsg] = useState("");
//   const [pdfReady, setPdfReady] = useState(false);

//   const navLinks = [
//     { name: "Home", link: "/" },
//     { name: "About Us", link: "/about-us" },
//     { name: "Movement", link: "/movement" },
//     { name: "Space Vastu", link: "/space-vastu" },
//     { name: "Manifestation", link: "/manifestation" },
//     { name: "Material", link: "/material" },
//     { name: "Blogs", link: "/blogs" },
//     { name: "Careers", link: "/careers" },
//     { name: "Contact", link: "/contact" },
//     { name: "Login / Signup", link: "/auth" },
//   ];

//   const steps = [
//     { number: 1, label: "Form", icon: <ClipboardList size={18} /> },
//     { number: 2, label: "Payment", icon: <CreditCard size={18} /> },
//     { number: 3, label: "Confirmation", icon: <Check size={18} /> },
//   ];
//   const progressWidth = ((step - 1) / (steps.length - 1)) * 100;

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setStep(2);
//   };

//   const handlePayment = () => {
//     setLoading(true);
//     setTimeout(() => {
//       setLoading(false);
//       setStep(3);
//       setConfirmationMsg(
//         `✨ Hi ${name}, your "${serviceType}" reading has been successfully received. Expect your insights within 24–48 hours!`
//       );
//       if (["personalEnergy", "petEnergy", "spaceEnergy"].includes(serviceType)) {
//         generatePDF();
//       }
//     }, 2000);
//   };

//   const generatePDF = () => {
//     const doc = new jsPDF();
//     doc.setFontSize(18);
//     doc.text("Energy Reading Report", 20, 20);
//     doc.setFontSize(12);
//     doc.text(`Name: ${name}`, 20, 40);
//     doc.text(`Email/Phone: ${email}`, 20, 50);
//     doc.text(`Date of Birth: ${dob}`, 20, 60);
//     doc.text(`Service Type: ${serviceType}`, 20, 70);
//     if (serviceType === "yesNo") doc.text(`Question: ${question}`, 20, 80);
//     if (details) doc.text(`Details: ${details}`, 20, 90, { maxWidth: 170 });
//     doc.text("Energy Insights & Recommendations:", 20, 110);
//     doc.text(
//       "Your energy appears harmonious with minor blockages in the sacral chakra. Practice mindfulness, journaling, and grounding meditation for balance.",
//       20,
//       120,
//       { maxWidth: 170 }
//     );
//     doc.save(`${serviceType}_Energy_Report.pdf`);
//     setPdfReady(true);
//   };

//   return (
//     <div
//       style={{
//         fontFamily: "Poppins, sans-serif",
//         color: "#fff",
//         background: "linear-gradient(180deg, #1a0033 0%, #0d001a 100%)",
//         minHeight: "100vh",
//         margin: 0,
//         padding: 0,
//         overflowX: "hidden",
//       }}
//     >
//       <style>{`
//         html, body {
//           margin: 0;
//           padding: 0;
//           overflow-x: hidden;
//           background: linear-gradient(180deg, #1a0033 0%, #0d001a 100%);
//         }

//         @keyframes twinkle { 0%,100%{opacity:0.3;} 50%{opacity:1;} }

//         /* ==== SIDEBAR ==== */
//         .sidebar {
//           position: fixed;
//           top: 0;
//           left: -280px;
//           width: 280px;
//           height: 100%;
//           background: rgba(20, 0, 40, 0.98);
//           backdrop-filter: blur(12px);
//           transition: left 0.3s ease;
//           z-index: 1000;
//           padding: 25px;
//           box-shadow: 2px 0 25px rgba(138, 43, 226, 0.3);
//         }
//         .sidebar.open { left: 0; }

//         .sidebar h2 {
//           font-size: 26px;
//           background: linear-gradient(90deg, #ff00ff, #00ffff);
//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//           margin-bottom: 30px;
//         }

//         .sidebar ul { list-style: none; padding: 0; margin: 0; }
//         .sidebar li { margin: 12px 0; }

//         .sidebar a {
//           color: #ccc;
//           text-decoration: none;
//           display: block;
//           padding: 10px 14px;
//           border-radius: 10px;
//           transition: all 0.3s;
//         }
//         .sidebar a:hover {
//           background: rgba(138, 43, 226, 0.3);
//           color: #fff;
//         }

//         /* ==== HAMBURGER ==== */
//         .sidebar-toggle {
//           position: fixed;
//           top: 15px;
//           left: 20px;
//           background: linear-gradient(135deg, #ff00ff, #8a2be2);
//           border: none;
//           color: white;
//           font-size: 26px;
//           width: 55px;
//           height: 55px;
//           border-radius: 50%;
//           cursor: pointer;
//           z-index: 1100;
//           box-shadow: 0 0 20px rgba(255, 0, 255, 0.4);
//           transition: all 0.3s ease;
//         }
//         .sidebar-toggle:hover { transform: scale(1.1); }

//         /* ==== PAGE ==== */
//         .energy-container {
//           max-width: 800px;
//           margin: 60px auto 0; /* reduced top margin */
//           padding: 20px;
//           text-align: center;
//         }

//         .glass-card {
//           background: rgba(255, 255, 255, 0.1);
//           backdrop-filter: blur(15px);
//           border-radius: 20px;
//           padding: 2rem;
//           box-shadow: 0 0 30px rgba(255, 0, 255, 0.2);
//           animation: fadeIn 0.8s ease;
//         }

//         .glow-btn {
//           width: 100%;
//           background: linear-gradient(90deg, #ff00ff, #8a2be2);
//           border: none;
//           color: #fff;
//           font-weight: 600;
//           padding: 14px;
//           border-radius: 50px;
//           cursor: pointer;
//           transition: all 0.3s;
//           margin-top: 10px;
//         }
//         .glow-btn:hover {
//           transform: scale(1.05);
//           box-shadow: 0 0 25px rgba(255, 0, 255, 0.4);
//         }

//         label { text-align:left; display:block; margin:10px 0 5px; color:#ccc; font-weight:600; }
//         input, select, textarea {
//           width:100%; padding:10px; border:none; border-radius:10px;
//           background:rgba(255,255,255,0.15); color:#fff; outline:none;
//         }

//         @keyframes fadeIn { from{opacity:0;transform:translateY(10px);} to{opacity:1;transform:translateY(0);} }

//         @media(max-width:768px){
//           .sidebar-toggle{width:45px;height:45px;}
//           .energy-container{margin:80px 15px;}
//         }
//       `}</style>

//       {/* Sidebar */}
//       <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
//         <h2>AstroConnect</h2>
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

//       {/* Hamburger Button */}
//       <button className="sidebar-toggle" onClick={() => setSidebarOpen(!sidebarOpen)}>
//         ☰
//       </button>

//       {/* Page Content */}
//       <div className="energy-container">
//         <div className="glass-card">
//           <h1
//             style={{
//               background: "linear-gradient(90deg,#ff00ff,#00ffff)",
//               WebkitBackgroundClip: "text",
//               WebkitTextFillColor: "transparent",
//             }}
//           >
//             <Sparkles size={28} /> Energy Reading Services
//           </h1>

//           {step === 1 && (
//             <form onSubmit={handleSubmit}>
//               <label>Service Type</label>
//               <select value={serviceType} onChange={(e) => setServiceType(e.target.value)} required>
//                 <option value="">Choose your service</option>
//                 <option value="yesNo">🔮 Yes / No / Possibly</option>
//                 <option value="personalEnergy">🌙 Personal Energy Reading</option>
//                 <option value="spaceEnergy">🏡 Space Energy Reading</option>
//                 <option value="compatibility">💞 Compatibility Reading</option>
//                 <option value="auraChakra">🌀 Aura & Chakra Reading</option>
//                 <option value="petEnergy">🐾 Pet Energy Reading</option>
//               </select>

//               {serviceType === "yesNo" && (
//                 <>
//                   <label>Your Question</label>
//                   <input type="text" value={question} onChange={(e) => setQuestion(e.target.value)} required />
//                 </>
//               )}

//               <label>Full Name</label>
//               <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />

//               <label>Email / Phone</label>
//               <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} required />

//               <label>Date of Birth</label>
//               <input type="date" value={dob} onChange={(e) => setDob(e.target.value)} required />

//               <button type="submit" className="glow-btn">Continue to Payment ⚡</button>
//             </form>
//           )}

//           {step === 2 && (
//             <div>
//               <h3>Complete Payment</h3>
//               <p>Service: <strong>{serviceType}</strong></p>
//               <p>Amount: <strong>₹499</strong></p>
//               <button onClick={handlePayment} className="glow-btn" disabled={loading}>
//                 {loading ? <Loader2 className="spinner" size={20} /> : "Pay Now 💫"}
//               </button>
//             </div>
//           )}

//           {step === 3 && (
//             <div>
//               <CheckCircle size={60} color="#4ade80" />
//               <h2>Thank You!</h2>
//               <p>{confirmationMsg}</p>
//               {pdfReady && (
//                 <p>
//                   <FileText size={20} /> Your Energy Report has been downloaded automatically.
//                 </p>
//               )}
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Energy;

// import React, { useState } from "react";
// import { jsPDF } from "jspdf";
// import "../../styles/Energy.css";
// import {
//   Loader2,
//   CheckCircle,
//   FileText,
//   Sparkles,
//   CreditCard,
//   ClipboardList,
//   Check,
// } from "lucide-react";

// const Energy = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [step, setStep] = useState(1);
//   const [serviceType, setServiceType] = useState("");
//   const [question, setQuestion] = useState("");
//   const [details, setDetails] = useState("");
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [dob, setDob] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [confirmationMsg, setConfirmationMsg] = useState("");
//   const [pdfReady, setPdfReady] = useState(false);

//   const navLinks = [
//     { name: "Home", link: "/", icon: "🏠" },
//     { name: "About Us", link: "/about-us", icon: "✨" },
//     { name: "Movement", link: "/movement", icon: "🌊" },
//     { name: "Space Vastu", link: "/space-vastu", icon: "🏛️" },
//     { name: "Manifestation", link: "/manifestation", icon: "💫" },
//     { name: "Material", link: "/material", icon: "💎" },
//     { name: "Blogs", link: "/blogs", icon: "📝" },
//     { name: "Careers", link: "/careers", icon: "💼" },
//     { name: "Contact", link: "/contact", icon: "📧" },
//     { name: "Login / Signup", link: "/auth", icon: "🔐" },
//   ];

//   const steps = [
//     { number: 1, label: "Form", icon: <ClipboardList size={18} /> },
//     { number: 2, label: "Payment", icon: <CreditCard size={18} /> },
//     { number: 3, label: "Confirmation", icon: <Check size={18} /> },
//   ];
//   const progressWidth = ((step - 1) / (steps.length - 1)) * 100;

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setStep(2);
//   };

//   const handlePayment = () => {
//     setLoading(true);
//     setTimeout(() => {
//       setLoading(false);
//       setStep(3);
//       setConfirmationMsg(
//         `✨ Hi ${name}, your "${serviceType}" reading has been successfully received. Expect your insights within 24–48 hours!`
//       );
//       if (["personalEnergy", "petEnergy", "spaceEnergy"].includes(serviceType)) {
//         generatePDF();
//       }
//     }, 2000);
//   };

//   const generatePDF = () => {
//     const doc = new jsPDF();
//     doc.setFontSize(18);
//     doc.text("Energy Reading Report", 20, 20);
//     doc.setFontSize(12);
//     doc.text(`Name: ${name}`, 20, 40);
//     doc.text(`Email/Phone: ${email}`, 20, 50);
//     doc.text(`Date of Birth: ${dob}`, 20, 60);
//     doc.text(`Service Type: ${serviceType}`, 20, 70);
//     if (serviceType === "yesNo") doc.text(`Question: ${question}`, 20, 80);
//     if (details) doc.text(`Details: ${details}`, 20, 90, { maxWidth: 170 });
//     doc.text("Energy Insights & Recommendations:", 20, 110);
//     doc.text(
//       "Your energy appears harmonious with minor blockages in the sacral chakra. Practice mindfulness, journaling, and grounding meditation for balance.",
//       20,
//       120,
//       { maxWidth: 170 }
//     );
//     doc.save(`${serviceType}_Energy_Report.pdf`);
//     setPdfReady(true);
//   };

//   return (
//     <div
//       style={{
//         fontFamily: "Poppins, sans-serif",
//         color: "#fff",
//         background: "linear-gradient(180deg, #1a0033 0%, #0d001a 100%)",
//         minHeight: "100vh",
//         margin: 0,
//         padding: 0,
//         overflowX: "hidden",
//       }}
//     >
//       {/* Sidebar */}
//       <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
//         <h2>AstroConnect</h2>
//         <ul>
//           {navLinks.map((item, idx) => (
//             <li key={idx}>
//               <a
//                 href={item.link}
//                 onClick={() => setSidebarOpen(false)}
//                 style={{ display: "flex", alignItems: "center", gap: "8px" }}
//               >
//                 <span style={{ fontSize: "1.3rem" }}>{item.icon}</span>
//                 {item.name}
//               </a>
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Hamburger Button */}
//       <button className="sidebar-toggle" onClick={() => setSidebarOpen(!sidebarOpen)}>
//         ☰
//       </button>

//       {/* Page Content */}
//       <div className="energy-container">
//         <div className="glass-card">
//           <h1
//             style={{
//               background: "linear-gradient(90deg,#ff00ff,#00ffff)",
//               WebkitBackgroundClip: "text",
//               WebkitTextFillColor: "transparent",
//             }}
//           >
//             <Sparkles size={28} /> Energy Reading Services
//           </h1>

//           {/* Progress Bar */}
//           <div style={{ display: "flex", margin: "20px 0" }}>
//             {steps.map((s) => (
//               <div key={s.number} style={{ flex: 1, textAlign: "center" }}>
//                 <div style={{ marginBottom: 8 }}>{s.icon}</div>
//                 <div style={{ color: step === s.number ? "#ff00ff" : "#aaa", fontWeight: "bold" }}>{s.label}</div>
//               </div>
//             ))}
//             <div
//               style={{
//                 position: "absolute",
//                 height: 4,
//                 background: "linear-gradient(90deg,#ff00ff,#00ffff)",
//                 width: `${progressWidth}%`,
//                 top: 36,
//                 left: 0,
//                 borderRadius: 10,
//                 transition: "width 0.3s ease",
//                 zIndex: -1,
//               }}
//             />
//           </div>

//           {/* Step 1: Form */}
//           {step === 1 && (
//             <form onSubmit={handleSubmit}>
//               <label>Service Type</label>
//               <select value={serviceType} onChange={(e) => setServiceType(e.target.value)} required>
//                 <option value="">Choose your service</option>
//                 <option value="yesNo">🔮 Yes / No / Possibly</option>
//                 <option value="personalEnergy">🌙 Personal Energy Reading</option>
//                 <option value="spaceEnergy">🏡 Space Energy Reading</option>
//                 <option value="compatibility">💞 Compatibility Reading</option>
//                 <option value="auraChakra">🌀 Aura & Chakra Reading</option>
//                 <option value="petEnergy">🐾 Pet Energy Reading</option>
//               </select>

//               {serviceType === "yesNo" && (
//                 <>
//                   <label>Your Question</label>
//                   <input type="text" value={question} onChange={(e) => setQuestion(e.target.value)} required />
//                 </>
//               )}

//               <label>Full Name</label>
//               <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />

//               <label>Email / Phone</label>
//               <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} required />

//               <label>Date of Birth</label>
//               <input type="date" value={dob} onChange={(e) => setDob(e.target.value)} required />

//               <button type="submit" className="glow-btn">
//                 Continue to Payment ⚡
//               </button>
//             </form>
//           )}

//           {/* Step 2: Payment */}
//           {step === 2 && (
//             <div>
//               <h3>Complete Payment</h3>
//               <p>
//                 Service: <strong>{serviceType}</strong>
//               </p>
//               <p>
//                 Amount: <strong>₹499</strong>
//               </p>
//               <button onClick={handlePayment} className="glow-btn" disabled={loading}>
//                 {loading ? <Loader2 className="spinner" size={20} /> : "Pay Now 💫"}
//               </button>
//             </div>
//           )}

//           {/* Step 3: Confirmation */}
//           {step === 3 && (
//             <div>
//               <CheckCircle size={60} color="#4ade80" />
//               <h2>Thank You!</h2>
//               <p>{confirmationMsg}</p>
//               {pdfReady && (
//                 <p>
//                   <FileText size={20} /> Your Energy Report has been downloaded automatically.
//                 </p>
//               )}
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Energy;

import React, { useState } from "react";
import { jsPDF } from "jspdf";
import "../../styles/Energy.css";
import {
  Loader2,
  CheckCircle,
  FileText,
  Sparkles,
  CreditCard,
  ClipboardList,
  Check,
} from "lucide-react";

const Energy = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [serviceType, setServiceType] = useState("");
  const [question, setQuestion] = useState("");
  const [details, setDetails] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [loading, setLoading] = useState(false);
  const [confirmationMsg, setConfirmationMsg] = useState("");
  const [pdfReady, setPdfReady] = useState(false);

  const navLinks = [
    { name: "Home", link: "/", icon: "🏠" },
    { name: "About Us", link: "/about-us", icon: "✨" },
    { name: "Movement", link: "/movement", icon: "🌊" },
    { name: "Space Vastu", link: "/space-vastu", icon: "🏛️" },
    { name: "Manifestation", link: "/manifestation", icon: "💫" },
    { name: "Material", link: "/material", icon: "💎" },
    { name: "Blogs", link: "/blogs", icon: "📝" },
    { name: "Careers", link: "/careers", icon: "💼" },
    { name: "Contact", link: "/contact", icon: "📧" },
    { name: "Login / Signup", link: "/auth", icon: "🔐" },
  ];

  const steps = [
    { number: 1, label: "Form", icon: <ClipboardList size={18} /> },
    { number: 2, label: "Payment", icon: <CreditCard size={18} /> },
    { number: 3, label: "Confirmation", icon: <Check size={18} /> },
  ];
  const progressWidth = ((step - 1) / (steps.length - 1)) * 100;

  const handleSubmit = (e) => {
    e.preventDefault();
    setStep(2);
  };

  const handlePayment = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep(3);
      setConfirmationMsg(
        `✨ Hi ${name}, your "${serviceType}" reading has been successfully received. Expect your insights within 24–48 hours!`
      );
      if (["personalEnergy", "petEnergy", "spaceEnergy"].includes(serviceType)) {
        generatePDF();
      }
    }, 2000);
  };

  const generatePDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text("Energy Reading Report", 20, 20);
    doc.setFontSize(12);
    doc.text(`Name: ${name}`, 20, 40);
    doc.text(`Email/Phone: ${email}`, 20, 50);
    doc.text(`Date of Birth: ${dob}`, 20, 60);
    doc.text(`Service Type: ${serviceType}`, 20, 70);
    if (serviceType === "yesNo") doc.text(`Question: ${question}`, 20, 80);
    if (details) doc.text(`Details: ${details}`, 20, 90, { maxWidth: 170 });
    doc.text("Energy Insights & Recommendations:", 20, 110);
    doc.text(
      "Your energy appears harmonious with minor blockages in the sacral chakra. Practice mindfulness, journaling, and grounding meditation for balance.",
      20,
      120,
      { maxWidth: 170 }
    );
    doc.save(`${serviceType}_Energy_Report.pdf`);
    setPdfReady(true);
  };

  return (
    <div
      style={{
        fontFamily: "Poppins, sans-serif",
        color: "#fff",
        background: "linear-gradient(180deg, #1a0033 0%, #0d001a 100%)",
        minHeight: "100vh",
        margin: 0,
        padding: 0,
        overflowX: "hidden",
      }}
    >
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

      {/* Main Content */}
      <div
        className="energy-container"
        style={{
          marginLeft: sidebarOpen ? "270px" : "0",
          transition: "margin-left 0.6s ease",
        }}
      >
        <div className="glass-card">
          <h1
            style={{
              background: "linear-gradient(90deg,#ff00ff,#00ffff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            <Sparkles size={28} /> Energy Reading Services
          </h1>

          {/* Progress Bar */}
          <div style={{ display: "flex", margin: "20px 0", position: "relative" }}>
            {steps.map((s) => (
              <div key={s.number} style={{ flex: 1, textAlign: "center" }}>
                <div style={{ marginBottom: 8 }}>{s.icon}</div>
                <div style={{ color: step === s.number ? "#ff00ff" : "#aaa", fontWeight: "bold" }}>
                  {s.label}
                </div>
              </div>
            ))}
            <div
              style={{
                position: "absolute",
                height: 4,
                background: "linear-gradient(90deg,#ff00ff,#00ffff)",
                width: `${progressWidth}%`,
                top: 36,
                left: 0,
                borderRadius: 10,
                transition: "width 0.3s ease",
                zIndex: -1,
              }}
            />
          </div>

          {/* Step 1: Form */}
          {step === 1 && (
            <form onSubmit={handleSubmit}>
              <label>Service Type</label>
              <select value={serviceType} onChange={(e) => setServiceType(e.target.value)} required>
                <option value="">Choose your service</option>
                <option value="yesNo">🔮 Yes / No / Possibly</option>
                <option value="personalEnergy">🌙 Personal Energy Reading</option>
                <option value="spaceEnergy">🏡 Space Energy Reading</option>
                <option value="compatibility">💞 Compatibility Reading</option>
                <option value="auraChakra">🌀 Aura & Chakra Reading</option>
                <option value="petEnergy">🐾 Pet Energy Reading</option>
              </select>

              {serviceType === "yesNo" && (
                <>
                  <label>Your Question</label>
                  <input
                    type="text"
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    required
                  />
                </>
              )}

              <label>Full Name</label>
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />

              <label>Email / Phone</label>
              <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} required />

              <label>Date of Birth</label>
              <input type="date" value={dob} onChange={(e) => setDob(e.target.value)} required />

              <button type="submit" className="glow-btn">
                Continue to Payment ⚡
              </button>
            </form>
          )}

          {/* Step 2: Payment */}
          {step === 2 && (
            <div>
              <h3>Complete Payment</h3>
              <p>
                Service: <strong>{serviceType}</strong>
              </p>
              <p>
                Amount: <strong>₹499</strong>
              </p>
              <button onClick={handlePayment} className="glow-btn" disabled={loading}>
                {loading ? <Loader2 className="spinner" size={20} /> : "Pay Now 💫"}
              </button>
            </div>
          )}

          {/* Step 3: Confirmation */}
          {step === 3 && (
            <div>
              <CheckCircle size={60} color="#4ade80" />
              <h2>Thank You!</h2>
              <p>{confirmationMsg}</p>
              {pdfReady && (
                <p>
                  <FileText size={20} /> Your Energy Report has been downloaded automatically.
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Energy;
