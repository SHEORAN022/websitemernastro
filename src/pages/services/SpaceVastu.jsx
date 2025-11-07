// // // import React, { useState } from "react";
// // // import "../../styles/SpaceVastu.css";
// // // import { Sparkles, Loader2, CheckCircle } from "lucide-react";

// // // const services = [
// // //   {
// // //     label: "Residential E-Vastu",
// // //     description:
// // //       "Comprehensive Vastu evaluation for flats, villas, independent houses, builder floors, or farmhouses. Enhances peace, prosperity, and family harmony.",
// // //     amount: 499,
// // //   },
// // //   {
// // //     label: "Commercial E-Vastu",
// // //     description:
// // //       "Boost success and productivity in your business. Ensures your workspace supports growth, client attraction, and operational efficiency.",
// // //     amount: 999,
// // //   },
// // //   {
// // //     label: "Industrial E-Vastu",
// // //     description:
// // //       "Specialized guidance for manufacturing units, IT parks, data centers, and industrial plants. Optimizes workflow, machinery placement, and employee zones.",
// // //     amount: 1999,
// // //   },
// // //   {
// // //     label: "B2B Solutions",
// // //     description:
// // //       "Custom Vastu consultancy for corporates, showrooms, hotels, restaurants, and more. Proposal-based service.",
// // //     amount: 4999,
// // //   },
// // // ];

// // // const deliveryModes = ["PDF Report", "Call Discussion", "On-Site Visit (Chargeable)"];

// // // const SpaceVastu = () => {
// // //   const [sidebarOpen, setSidebarOpen] = useState(false);
// // //   const [step, setStep] = useState(1);
// // //   const [selectedService, setSelectedService] = useState(null);
// // //   const [formData, setFormData] = useState({
// // //     fullName: "",
// // //     email: "",
// // //     phone: "",
// // //     address: "",
// // //     propertyStage: "",
// // //     issue: "",
// // //     uploads: [],
// // //     deliveryMode: "",
// // //   });
// // //   const [errors, setErrors] = useState({});
// // //   const [loading, setLoading] = useState(false);

// // //   const navLinks = [
// // //     { name: "Home", link: "/" },
// // //     { name: "About Us", link: "/about-us" },
// // //     { name: "Energy", link: "/energy" },
// // //     { name: "Movement", link: "/movement" },
// // //     { name: "Space Vastu", link: "/space-vastu" },
// // //     { name: "Manifestation", link: "/manifestation" },
// // //     { name: "Material", link: "/material" },
// // //     { name: "Blogs", link: "/blogs" },
// // //     { name: "Careers", link: "/careers" },
// // //     { name: "Login / Signup", link: "/auth" },
// // //   ];

// // //   const handleServiceSelect = (service) => {
// // //     setSelectedService(service);
// // //     setStep(2);
// // //   };

// // //   const handleChange = (e) => {
// // //     const { name, value, files } = e.target;
// // //     if (files) {
// // //       setFormData({ ...formData, [name]: files });
// // //     } else {
// // //       setFormData({ ...formData, [name]: value });
// // //     }
// // //   };

// // //   const validateForm = () => {
// // //     const newErrors = {};
// // //     if (!formData.fullName) newErrors.fullName = "Full Name is required";
// // //     if (!formData.email) newErrors.email = "Email is required";
// // //     if (!formData.phone) newErrors.phone = "Phone is required";
// // //     if (!formData.address) newErrors.address = "Property Address is required";
// // //     if (!formData.propertyStage) newErrors.propertyStage = "Property Stage is required";
// // //     if (!formData.deliveryMode) newErrors.deliveryMode = "Please select a delivery mode";
// // //     setErrors(newErrors);
// // //     return Object.keys(newErrors).length === 0;
// // //   };

// // //   const handleFormSubmit = (e) => {
// // //     e.preventDefault();
// // //     if (!validateForm()) return;
// // //     setStep(3);
// // //   };

// // //   const handlePayment = async () => {
// // //     setLoading(true);
// // //     try {
// // //       await new Promise((resolve) => setTimeout(resolve, 2000));
// // //       alert(`Payment of ₹${selectedService.amount} successful for "${selectedService.label}"!`);
// // //       setStep(4);
// // //     } catch (err) {
// // //       alert("Payment failed! Please try again.");
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   const resetForm = () => {
// // //     setFormData({
// // //       fullName: "",
// // //       email: "",
// // //       phone: "",
// // //       address: "",
// // //       propertyStage: "",
// // //       issue: "",
// // //       uploads: [],
// // //       deliveryMode: "",
// // //     });
// // //     setSelectedService(null);
// // //     setStep(1);
// // //     setErrors({});
// // //   };

// // //   return (
// // //     <div
// // //       style={{
// // //         fontFamily: "Poppins, sans-serif",
// // //         color: "#fff",
// // //         background: "linear-gradient(180deg, #1a0033 0%, #0d001a 100%)",
// // //         minHeight: "100vh",
// // //         margin: 0,
// // //         padding: 0,
// // //       }}
// // //     >
// // //       <style>{`
// // //         html, body {
// // //           margin: 0;
// // //           padding: 0;
// // //           background: linear-gradient(180deg, #1a0033 0%, #0d001a 100%);
// // //         }

// // //         /* Sidebar */
// // //         .sidebar {
// // //           position: fixed;
// // //           top: 0;
// // //           left: -280px;
// // //           width: 280px;
// // //           height: 100%;
// // //           background: rgba(20, 0, 40, 0.98);
// // //           backdrop-filter: blur(12px);
// // //           transition: left 0.3s ease;
// // //           z-index: 1000;
// // //           padding: 25px;
// // //           box-shadow: 2px 0 25px rgba(138, 43, 226, 0.3);
// // //         }
// // //         .sidebar.open { left: 0; }
// // //         .sidebar h2 {
// // //           font-size: 26px;
// // //           background: linear-gradient(90deg, #ff00ff, #00ffff);
// // //           -webkit-background-clip: text;
// // //           -webkit-text-fill-color: transparent;
// // //           margin-bottom: 30px;
// // //         }
// // //         .sidebar ul { list-style: none; padding: 0; margin: 0; }
// // //         .sidebar li { margin: 12px 0; }
// // //         .sidebar a {
// // //           color: #ccc;
// // //           text-decoration: none;
// // //           display: block;
// // //           padding: 10px 14px;
// // //           border-radius: 10px;
// // //           transition: all 0.3s;
// // //         }
// // //         .sidebar a:hover {
// // //           background: rgba(138, 43, 226, 0.3);
// // //           color: #fff;
// // //         }

// // //         /* Hamburger */
// // //         .sidebar-toggle {
// // //           position: fixed;
// // //           top: 15px;
// // //           left: 20px;
// // //           background: linear-gradient(135deg, #ff00ff, #8a2be2);
// // //           border: none;
// // //           color: white;
// // //           font-size: 26px;
// // //           width: 55px;
// // //           height: 55px;
// // //           border-radius: 50%;
// // //           cursor: pointer;
// // //           z-index: 1100;
// // //           box-shadow: 0 0 20px rgba(255, 0, 255, 0.4);
// // //           transition: all 0.3s ease;
// // //         }
// // //         .sidebar-toggle:hover { transform: scale(1.1); }

// // //         /* Container */
// // //         .vastu-container {
// // //           padding: 100px 20px 40px;
// // //           max-width: 1200px;
// // //           margin: auto;
// // //           text-align: center;
// // //         }

// // //         .glass-card {
// // //           background: rgba(255,255,255,0.1);
// // //           backdrop-filter: blur(15px);
// // //           border-radius: 20px;
// // //           padding: 2rem;
// // //           box-shadow: 0 0 25px rgba(255,0,255,0.2);
// // //           margin-top: 30px;
// // //           color: #fff;
// // //         }

// // //         .glow-btn {
// // //           background: linear-gradient(90deg,#ff00ff,#8a2be2);
// // //           border:none;
// // //           color:white;
// // //           font-weight:600;
// // //           padding:14px 36px;
// // //           border-radius:50px;
// // //           cursor:pointer;
// // //           transition:all .3s;
// // //           box-shadow:0 5px 25px rgba(255,0,255,0.4);
// // //           margin-top:10px;
// // //         }
// // //         .glow-btn:hover{transform:scale(1.05);}

// // //         .service-card {
// // //           background: rgba(255,255,255,0.1);
// // //           border-radius: 20px;
// // //           padding: 20px;
// // //           margin: 15px;
// // //           cursor: pointer;
// // //           box-shadow: 0 0 20px rgba(255,0,255,0.2);
// // //           transition: all 0.3s;
// // //         }
// // //         .service-card:hover { transform: translateY(-5px); }

// // //         input, select, textarea {
// // //           width:100%;
// // //           padding:12px;
// // //           border:none;
// // //           border-radius:10px;
// // //           background:rgba(255,255,255,0.15);
// // //           color:#fff;
// // //           outline:none;
// // //           margin-bottom:10px;
// // //         }
// // //         label {text-align:left;display:block;margin:10px 0 5px;color:#ccc;}

// // //       `}</style>

// // //       {/* Sidebar */}
// // //       <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
// // //         <h2>AstroConnect</h2>
// // //         <ul>
// // //           {navLinks.map((item, idx) => (
// // //             <li key={idx}>
// // //               <a href={item.link} onClick={() => setSidebarOpen(false)}>
// // //                 {item.name}
// // //               </a>
// // //             </li>
// // //           ))}
// // //         </ul>
// // //       </div>

// // //       {/* Hamburger */}
// // //       <button className="sidebar-toggle" onClick={() => setSidebarOpen(!sidebarOpen)}>
// // //         ☰
// // //       </button>

// // //       {/* Main Content */}
// // //       <div className="vastu-container">
// // //         <h1
// // //           style={{
// // //             background: "linear-gradient(90deg,#ff00ff,#00ffff)",
// // //             WebkitBackgroundClip: "text",
// // //             WebkitTextFillColor: "transparent",
// // //             fontSize: "2.5rem",
// // //           }}
// // //         >
// // //           <Sparkles size={26} /> Space Vastu Consultation
// // //         </h1>

// // //         {/* Step 1: Service Selection */}
// // //         {step === 1 && (
// // //           <div>
// // //             <p>Select the service that best fits your needs:</p>
// // //             <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
// // //               {services.map((service, idx) => (
// // //                 <div key={idx} className="service-card" onClick={() => handleServiceSelect(service)}>
// // //                   <h3>{service.label}</h3>
// // //                   <p>{service.description}</p>
// // //                   <p><strong>₹{service.amount}</strong></p>
// // //                 </div>
// // //               ))}
// // //             </div>
// // //           </div>
// // //         )}

// // //         {/* Step 2: Form */}
// // //         {step === 2 && (
// // //           <div className="glass-card">
// // //             <h2>{selectedService.label}</h2>
// // //             <p>{selectedService.description}</p>
// // //             <form onSubmit={handleFormSubmit}>
// // //               <input name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} />
// // //               <input name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
// // //               <input name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} />
// // //               <input name="address" placeholder="Property Address" value={formData.address} onChange={handleChange} />
// // //               <select name="propertyStage" value={formData.propertyStage} onChange={handleChange}>
// // //                 <option value="">-- Property Stage --</option>
// // //                 <option>Pre-Demolition</option>
// // //                 <option>Layout Finalization</option>
// // //                 <option>Under Construction</option>
// // //                 <option>Constructed</option>
// // //               </select>
// // //               <textarea name="issue" placeholder="Describe your issue..." rows={3} value={formData.issue} onChange={handleChange} />
// // //               <select name="deliveryMode" value={formData.deliveryMode} onChange={handleChange}>
// // //                 <option value="">-- Mode of Delivery --</option>
// // //                 {deliveryModes.map((m) => <option key={m}>{m}</option>)}
// // //               </select>
// // //               <button className="glow-btn">Proceed to Payment 💫</button>
// // //             </form>
// // //           </div>
// // //         )}

// // //         {/* Step 3: Payment */}
// // //         {step === 3 && (
// // //           <div className="glass-card">
// // //             <h2>Confirm & Pay</h2>
// // //             <p><strong>{selectedService.label}</strong></p>
// // //             <p>{selectedService.description}</p>
// // //             <h3>Amount: ₹{selectedService.amount}</h3>
// // //             <button onClick={handlePayment} className="glow-btn" disabled={loading}>
// // //               {loading ? <Loader2 size={20} className="animate-spin" /> : "Pay Now 🔮"}
// // //             </button>
// // //           </div>
// // //         )}

// // //         {/* Step 4: Confirmation */}
// // //         {step === 4 && (
// // //           <div className="glass-card">
// // //             <CheckCircle size={50} color="#4ade80" />
// // //             <h2>Thank You!</h2>
// // //             <p>Your Vastu request for <strong>{selectedService.label}</strong> has been received.</p>
// // //             <p>We will contact you soon via your selected delivery mode.</p>
// // //             <button onClick={resetForm} className="glow-btn">Back to Services</button>
// // //           </div>
// // //         )}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default SpaceVastu;

// // import React, { useState } from "react";
// // import "../../styles/SpaceVastu.css";
// // import { Sparkles, Loader2, CheckCircle } from "lucide-react";

// // const services = [
// //   {
// //     label: "Residential E-Vastu",
// //     description:
// //       "Comprehensive Vastu evaluation for flats, villas, independent houses, builder floors, or farmhouses. Enhances peace, prosperity, and family harmony.",
// //     amount: 499,
// //   },
// //   {
// //     label: "Commercial E-Vastu",
// //     description:
// //       "Boost success and productivity in your business. Ensures your workspace supports growth, client attraction, and operational efficiency.",
// //     amount: 999,
// //   },
// //   {
// //     label: "Industrial E-Vastu",
// //     description:
// //       "Specialized guidance for manufacturing units, IT parks, data centers, and industrial plants. Optimizes workflow, machinery placement, and employee zones.",
// //     amount: 1999,
// //   },
// //   {
// //     label: "B2B Solutions",
// //     description:
// //       "Custom Vastu consultancy for corporates, showrooms, hotels, restaurants, and more. Proposal-based service.",
// //     amount: 4999,
// //   },
// // ];

// // const deliveryModes = ["PDF Report", "Call Discussion", "On-Site Visit (Chargeable)"];

// // const SpaceVastu = () => {
// //   const [sidebarOpen, setSidebarOpen] = useState(false);
// //   const [step, setStep] = useState(1);
// //   const [selectedService, setSelectedService] = useState(null);
// //   const [formData, setFormData] = useState({
// //     fullName: "",
// //     email: "",
// //     phone: "",
// //     address: "",
// //     propertyStage: "",
// //     issue: "",
// //     uploads: [],
// //     deliveryMode: "",
// //   });
// //   const [errors, setErrors] = useState({});
// //   const [loading, setLoading] = useState(false);

// //   const navLinks = [
// //     { name: "Home", link: "/" },
// //     { name: "About Us", link: "/about-us" },
// //     { name: "Energy", link: "/energy" },
// //     { name: "Movement", link: "/movement" },
// //     { name: "Space Vastu", link: "/space-vastu" },
// //     { name: "Manifestation", link: "/manifestation" },
// //     { name: "Material", link: "/material" },
// //     { name: "Blogs", link: "/blogs" },
// //     { name: "Careers", link: "/careers" },
// //     { name: "Login / Signup", link: "/auth" },
// //   ];

// //   const handleServiceSelect = (service) => {
// //     setSelectedService(service);
// //     setStep(2);
// //   };

// //   const handleChange = (e) => {
// //     const { name, value, files } = e.target;
// //     if (files) {
// //       setFormData({ ...formData, [name]: files });
// //     } else {
// //       setFormData({ ...formData, [name]: value });
// //     }
// //   };

// //   const validateForm = () => {
// //     const newErrors = {};
// //     if (!formData.fullName) newErrors.fullName = "Full Name is required";
// //     if (!formData.email) newErrors.email = "Email is required";
// //     if (!formData.phone) newErrors.phone = "Phone is required";
// //     if (!formData.address) newErrors.address = "Property Address is required";
// //     if (!formData.propertyStage) newErrors.propertyStage = "Property Stage is required";
// //     if (!formData.deliveryMode) newErrors.deliveryMode = "Please select a delivery mode";
// //     setErrors(newErrors);
// //     return Object.keys(newErrors).length === 0;
// //   };

// //   const handleFormSubmit = (e) => {
// //     e.preventDefault();
// //     if (!validateForm()) return;
// //     setStep(3);
// //   };

// //   const handlePayment = async () => {
// //     setLoading(true);
// //     try {
// //       await new Promise((resolve) => setTimeout(resolve, 2000));
// //       alert(`Payment of ₹${selectedService.amount} successful for "${selectedService.label}"!`);
// //       setStep(4);
// //     } catch (err) {
// //       alert("Payment failed! Please try again.");
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   const resetForm = () => {
// //     setFormData({
// //       fullName: "",
// //       email: "",
// //       phone: "",
// //       address: "",
// //       propertyStage: "",
// //       issue: "",
// //       uploads: [],
// //       deliveryMode: "",
// //     });
// //     setSelectedService(null);
// //     setStep(1);
// //     setErrors({});
// //   };

// //   return (
// //     <div className={`space-vastu-page ${sidebarOpen ? "sidebar-open" : ""}`}>
// //       {/* 🧭 Sidebar */}
// //       <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
// //         <h2>AstroConnect</h2>
// //         <ul>
// //           {navLinks.map((item, idx) => (
// //             <li key={idx}>
// //               <a href={item.link} onClick={() => setSidebarOpen(false)}>
// //                 {item.name}
// //               </a>
// //             </li>
// //           ))}
// //         </ul>
// //       </div>

// //       {/* 🌑 Overlay */}
// //       <div
// //         className={`sidebar-overlay ${sidebarOpen ? "visible" : ""}`}
// //         onClick={() => setSidebarOpen(false)}
// //       ></div>

// //       {/* 🍔 Hamburger */}
// //       <button className="sidebar-toggle" onClick={() => setSidebarOpen(!sidebarOpen)}>
// //         ☰
// //       </button>

// //       {/* 🌌 Main Content */}
// //       <div className="space-vastu-content">
// //         <div className="vastu-container">
// //           <h1
// //             style={{
// //               background: "linear-gradient(90deg,#ff00ff,#00ffff)",
// //               WebkitBackgroundClip: "text",
// //               WebkitTextFillColor: "transparent",
// //               fontSize: "2.5rem",
// //             }}
// //           >
// //             <Sparkles size={26} /> Space Vastu Consultation
// //           </h1>

// //           {/* Step 1: Services */}
// //           {step === 1 && (
// //             <div>
// //               <p>Select the service that best fits your needs:</p>
// //               <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
// //                 {services.map((service, idx) => (
// //                   <div key={idx} className="service-card" onClick={() => handleServiceSelect(service)}>
// //                     <h3>{service.label}</h3>
// //                     <p>{service.description}</p>
// //                     <p>
// //                       <strong>₹{service.amount}</strong>
// //                     </p>
// //                   </div>
// //                 ))}
// //               </div>
// //             </div>
// //           )}

// //           {/* Step 2: Form */}
// //           {step === 2 && (
// //             <div className="glass-card">
// //               <h2>{selectedService.label}</h2>
// //               <p>{selectedService.description}</p>
// //               <form onSubmit={handleFormSubmit}>
// //                 <input name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} />
// //                 <input name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
// //                 <input name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} />
// //                 <input name="address" placeholder="Property Address" value={formData.address} onChange={handleChange} />
// //                 <select name="propertyStage" value={formData.propertyStage} onChange={handleChange}>
// //                   <option value="">-- Property Stage --</option>
// //                   <option>Pre-Demolition</option>
// //                   <option>Layout Finalization</option>
// //                   <option>Under Construction</option>
// //                   <option>Constructed</option>
// //                 </select>
// //                 <textarea name="issue" placeholder="Describe your issue..." rows={3} value={formData.issue} onChange={handleChange} />
// //                 <select name="deliveryMode" value={formData.deliveryMode} onChange={handleChange}>
// //                   <option value="">-- Mode of Delivery --</option>
// //                   {deliveryModes.map((m) => (
// //                     <option key={m}>{m}</option>
// //                   ))}
// //                 </select>
// //                 <button className="glow-btn">Proceed to Payment 💫</button>
// //               </form>
// //             </div>
// //           )}

// //           {/* Step 3: Payment */}
// //           {step === 3 && (
// //             <div className="glass-card">
// //               <h2>Confirm & Pay</h2>
// //               <p>
// //                 <strong>{selectedService.label}</strong>
// //               </p>
// //               <p>{selectedService.description}</p>
// //               <h3>Amount: ₹{selectedService.amount}</h3>
// //               <button onClick={handlePayment} className="glow-btn" disabled={loading}>
// //                 {loading ? <Loader2 size={20} className="animate-spin" /> : "Pay Now 🔮"}
// //               </button>
// //             </div>
// //           )}

// //           {/* Step 4: Confirmation */}
// //           {step === 4 && (
// //             <div className="glass-card">
// //               <CheckCircle size={50} color="#4ade80" />
// //               <h2>Thank You!</h2>
// //               <p>
// //                 Your Vastu request for <strong>{selectedService.label}</strong> has been received.
// //               </p>
// //               <p>We will contact you soon via your selected delivery mode.</p>
// //               <button onClick={resetForm} className="glow-btn">
// //                 Back to Services
// //               </button>
// //             </div>
// //           )}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default SpaceVastu;

// // import React, { useState } from "react";
// // import { motion } from "framer-motion";
// // import { Sparkles, Loader2, CheckCircle } from "lucide-react";
// // import "../../styles/SpaceVastu.css";

// // const services = [
// //   {
// //     label: "Residential E-Vastu",
// //     description:
// //       "Comprehensive Vastu evaluation for flats, villas, independent houses, builder floors, or farmhouses. Enhances peace, prosperity, and family harmony.",
// //     amount: 499,
// //   },
// //   {
// //     label: "Commercial E-Vastu",
// //     description:
// //       "Boost success and productivity in your business. Ensures your workspace supports growth, client attraction, and operational efficiency.",
// //     amount: 999,
// //   },
// //   {
// //     label: "Industrial E-Vastu",
// //     description:
// //       "Specialized guidance for manufacturing units, IT parks, data centers, and industrial plants. Optimizes workflow, machinery placement, and employee zones.",
// //     amount: 1999,
// //   },
// //   {
// //     label: "B2B Solutions",
// //     description:
// //       "Custom Vastu consultancy for corporates, showrooms, hotels, restaurants, and more. Proposal-based service.",
// //     amount: 4999,
// //   },
// // ];

// // const deliveryModes = ["PDF Report", "Call Discussion", "On-Site Visit (Chargeable)"];

// // const SpaceVastu = () => {
// //   const [sidebarOpen, setSidebarOpen] = useState(false);
// //   const [step, setStep] = useState(1);
// //   const [selectedService, setSelectedService] = useState(null);
// //   const [formData, setFormData] = useState({
// //     fullName: "",
// //     email: "",
// //     phone: "",
// //     address: "",
// //     propertyStage: "",
// //     issue: "",
// //     deliveryMode: "",
// //   });
// //   const [loading, setLoading] = useState(false);

// //  const navLinks = [
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

// // // JSX Sidebar snippet:
// // <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
// //   <h2>AstroConnect</h2>
// //   <ul>
// //     {navLinks.map((item, idx) => (
// //       <li key={idx}>
// //         <a href={item.link} onClick={() => setSidebarOpen(false)} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 15px', color: '#ccc', textDecoration: 'none', borderRadius: '8px', transition: 'all 0.3s' }}
// //           onMouseEnter={e => { e.target.style.background = 'rgba(255,255,255,0.1)'; e.target.style.color = '#fff'; }}
// //           onMouseLeave={e => { e.target.style.background = 'transparent'; e.target.style.color = '#ccc'; }}>
// //           <span style={{ fontSize: '1.3rem' }}>{item.icon}</span> {item.name}
// //         </a>
// //       </li>
// //     ))}
// //   </ul>
// // </div>


// //   const handleServiceSelect = (service) => {
// //     setSelectedService(service);
// //     setStep(2);
// //   };

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData((prev) => ({ ...prev, [name]: value }));
// //   };

// //   const validateForm = () => {
// //     const errors = {};
// //     if (!formData.fullName) errors.fullName = "Full Name required";
// //     if (!formData.email) errors.email = "Email required";
// //     if (!formData.phone) errors.phone = "Phone required";
// //     if (!formData.address) errors.address = "Address required";
// //     if (!formData.propertyStage) errors.propertyStage = "Property Stage required";
// //     if (!formData.deliveryMode) errors.deliveryMode = "Delivery mode required";
// //     return Object.keys(errors).length === 0;
// //   };

// //   const handleFormSubmit = (e) => {
// //     e.preventDefault();
// //     if (validateForm()) setStep(3);
// //   };

// //   const handlePayment = async () => {
// //     setLoading(true);
// //     await new Promise((r) => setTimeout(r, 1500));
// //     setStep(4);
// //     setLoading(false);
// //   };

// //   const resetForm = () => {
// //     setFormData({
// //       fullName: "",
// //       email: "",
// //       phone: "",
// //       address: "",
// //       propertyStage: "",
// //       issue: "",
// //       deliveryMode: "",
// //     });
// //     setSelectedService(null);
// //     setStep(1);
// //   };

// //   return (
// //     <div className={`space-vastu-page ${sidebarOpen ? "sidebar-open" : ""}`}>
// //       {/* ===== SIDEBAR ===== */}
// //       <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
// //         <h2>AstroConnect</h2>
// //         <ul>
// //           {navLinks.map((item, i) => (
// //             <li key={i}>
// //               <a href={item.link} onClick={() => setSidebarOpen(false)}>
// //                 {item.name}
// //               </a>
// //             </li>
// //           ))}
// //         </ul>
// //       </div>

// //       {/* ===== OVERLAY ===== */}
// //       <div
// //         className={`sidebar-overlay ${sidebarOpen ? "visible" : ""}`}
// //         onClick={() => setSidebarOpen(false)}
// //       ></div>

// //       {/* ===== HAMBURGER ===== */}
// //       <button
// //         className={`sidebar-toggle ${sidebarOpen ? "active" : ""}`}
// //         onClick={() => setSidebarOpen(!sidebarOpen)}
// //       >
// //         ☰
// //       </button>

// //       {/* ===== MAIN CONTENT ===== */}
// //       <div className="space-vastu-content">
// //         <div className="vastu-container">
// //           <h1>
// //             <Sparkles size={26} /> Space Vastu Consultation
// //           </h1>

// //           {/* STEP 1: SERVICES */}
// //           {step === 1 && (
// //             <>
// //               <p>Select the service that best fits your needs:</p>
// //               <div className="space-vastu-services">
// //                 {services.map((service, i) => (
// //                   <motion.div
// //                     key={i}
// //                     className="space-vastu-card"
// //                     onClick={() => handleServiceSelect(service)}
// //                     initial={{ opacity: 0, y: 40 }}
// //                     animate={{ opacity: 1, y: 0 }}
// //                     transition={{ delay: i * 0.2, duration: 0.6 }}
// //                   >
// //                     <h3>{service.label}</h3>
// //                     <p>{service.description}</p>
// //                     <div className="amount">₹{service.amount}</div>
// //                   </motion.div>
// //                 ))}
// //               </div>
// //             </>
// //           )}

// //           {/* STEP 2: FORM */}
// //           {step === 2 && (
// //             <div className="glass-card">
// //               <h2>{selectedService.label}</h2>
// //               <p>{selectedService.description}</p>
// //               <form onSubmit={handleFormSubmit}>
// //                 <input
// //                   name="fullName"
// //                   placeholder="Full Name"
// //                   value={formData.fullName}
// //                   onChange={handleChange}
// //                 />
// //                 <input
// //                   name="email"
// //                   placeholder="Email"
// //                   value={formData.email}
// //                   onChange={handleChange}
// //                 />
// //                 <input
// //                   name="phone"
// //                   placeholder="Phone"
// //                   value={formData.phone}
// //                   onChange={handleChange}
// //                 />
// //                 <input
// //                   name="address"
// //                   placeholder="Property Address"
// //                   value={formData.address}
// //                   onChange={handleChange}
// //                 />
// //                 <select
// //                   name="propertyStage"
// //                   value={formData.propertyStage}
// //                   onChange={handleChange}
// //                 >
// //                   <option value="">-- Property Stage --</option>
// //                   <option>Pre-Demolition</option>
// //                   <option>Layout Finalization</option>
// //                   <option>Under Construction</option>
// //                   <option>Constructed</option>
// //                 </select>
// //                 <textarea
// //                   name="issue"
// //                   placeholder="Describe your issue..."
// //                   rows={3}
// //                   value={formData.issue}
// //                   onChange={handleChange}
// //                 />
// //                 <select
// //                   name="deliveryMode"
// //                   value={formData.deliveryMode}
// //                   onChange={handleChange}
// //                 >
// //                   <option value="">-- Mode of Delivery --</option>
// //                   {deliveryModes.map((m) => (
// //                     <option key={m}>{m}</option>
// //                   ))}
// //                 </select>
// //                 <button className="glow-btn">Proceed to Payment 💫</button>
// //               </form>
// //             </div>
// //           )}

// //           {/* STEP 3: PAYMENT */}
// //           {step === 3 && (
// //             <div className="glass-card">
// //               <h2>Confirm & Pay</h2>
// //               <p><strong>{selectedService.label}</strong></p>
// //               <h3>Amount: ₹{selectedService.amount}</h3>
// //               <button onClick={handlePayment} className="glow-btn" disabled={loading}>
// //                 {loading ? <Loader2 size={20} className="animate-spin" /> : "Pay Now 🔮"}
// //               </button>
// //             </div>
// //           )}

// //           {/* STEP 4: CONFIRMATION */}
// //           {step === 4 && (
// //             <div className="glass-card">
// //               <CheckCircle size={50} color="#4ade80" />
// //               <h2>Thank You!</h2>
// //               <p>Your request for <strong>{selectedService.label}</strong> has been received.</p>
// //               <p>We’ll contact you soon via your chosen delivery mode.</p>
// //               <button onClick={resetForm} className="glow-btn">
// //                 Back to Services
// //               </button>
// //             </div>
// //           )}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default SpaceVastu;

// // import React, { useState } from "react";
// // import { motion } from "framer-motion";
// // import { Sparkles, Loader2, CheckCircle } from "lucide-react";
// // import "../../styles/SpaceVastu.css";

// // const services = [
// //   {
// //     label: "Residential E-Vastu",
// //     description:
// //       "Comprehensive Vastu evaluation for flats, villas, independent houses, builder floors, or farmhouses. Enhances peace, prosperity, and family harmony.",
// //     amount: 499,
// //   },
// //   {
// //     label: "Commercial E-Vastu",
// //     description:
// //       "Boost success and productivity in your business. Ensures your workspace supports growth, client attraction, and operational efficiency.",
// //     amount: 999,
// //   },
// //   {
// //     label: "Industrial E-Vastu",
// //     description:
// //       "Specialized guidance for manufacturing units, IT parks, data centers, and industrial plants. Optimizes workflow, machinery placement, and employee zones.",
// //     amount: 1999,
// //   },
// //   {
// //     label: "B2B Solutions",
// //     description:
// //       "Custom Vastu consultancy for corporates, showrooms, hotels, restaurants, and more. Proposal-based service.",
// //     amount: 4999,
// //   },
// // ];

// // const deliveryModes = ["PDF Report", "Call Discussion", "On-Site Visit (Chargeable)"];

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

// // const SpaceVastu = () => {
// //   const [sidebarOpen, setSidebarOpen] = useState(false);
// //   const [step, setStep] = useState(1);
// //   const [selectedService, setSelectedService] = useState(null);
// //   const [formData, setFormData] = useState({
// //     fullName: "",
// //     email: "",
// //     phone: "",
// //     address: "",
// //     propertyStage: "",
// //     issue: "",
// //     deliveryMode: "",
// //   });
// //   const [loading, setLoading] = useState(false);

// //   const handleServiceSelect = (service) => {
// //     setSelectedService(service);
// //     setStep(2);
// //   };

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData((prev) => ({ ...prev, [name]: value }));
// //   };

// //   const validateForm = () => {
// //     const errors = {};
// //     if (!formData.fullName) errors.fullName = "Full Name required";
// //     if (!formData.email) errors.email = "Email required";
// //     if (!formData.phone) errors.phone = "Phone required";
// //     if (!formData.address) errors.address = "Address required";
// //     if (!formData.propertyStage) errors.propertyStage = "Property Stage required";
// //     if (!formData.deliveryMode) errors.deliveryMode = "Delivery mode required";
// //     return Object.keys(errors).length === 0;
// //   };

// //   const handleFormSubmit = (e) => {
// //     e.preventDefault();
// //     if (validateForm()) setStep(3);
// //   };

// //   const handlePayment = async () => {
// //     setLoading(true);
// //     await new Promise((r) => setTimeout(r, 1500));
// //     setStep(4);
// //     setLoading(false);
// //   };

// //   const resetForm = () => {
// //     setFormData({
// //       fullName: "",
// //       email: "",
// //       phone: "",
// //       address: "",
// //       propertyStage: "",
// //       issue: "",
// //       deliveryMode: "",
// //     });
// //     setSelectedService(null);
// //     setStep(1);
// //   };

// //   return (
// //     <div className={`space-vastu-page ${sidebarOpen ? "sidebar-open" : ""}`}>
// //       {/* ===== SIDEBAR ===== */}
// //       <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
// //         <h2>AstroConnect</h2>
// //         <ul>
// //           {navLinks.map((item, i) => (
// //             <li key={i}>
// //               <a
// //                 href={item.link}
// //                 onClick={() => setSidebarOpen(false)}
// //                 style={{ display: "flex", alignItems: "center", gap: "10px", padding: "10px 15px", color: "#ccc", textDecoration: "none", borderRadius: "8px", transition: "all 0.3s" }}
// //                 onMouseEnter={(e) => {
// //                   e.target.style.background = "rgba(255,255,255,0.1)";
// //                   e.target.style.color = "#fff";
// //                 }}
// //                 onMouseLeave={(e) => {
// //                   e.target.style.background = "transparent";
// //                   e.target.style.color = "#ccc";
// //                 }}
// //               >
// //                 <span style={{ fontSize: "1.3rem" }}>{item.icon}</span> {item.name}
// //               </a>
// //             </li>
// //           ))}
// //         </ul>
// //       </div>

// //       {/* ===== OVERLAY ===== */}
// //       <div
// //         className={`sidebar-overlay ${sidebarOpen ? "visible" : ""}`}
// //         onClick={() => setSidebarOpen(false)}
// //       ></div>

// //       {/* ===== HAMBURGER ===== */}
// //       <button className={`sidebar-toggle ${sidebarOpen ? "active" : ""}`} onClick={() => setSidebarOpen(!sidebarOpen)}>
// //         ☰
// //       </button>

// //       {/* ===== MAIN CONTENT ===== */}
// //       <div className="space-vastu-content">
// //         <div className="vastu-container">
// //           <h1>
// //             <Sparkles size={26} /> Space Vastu Consultation
// //           </h1>

// //           {/* STEP 1: SERVICES */}
// //           {step === 1 && (
// //             <>
// //               <p>Select the service that best fits your needs:</p>
// //               <div className="space-vastu-services">
// //                 {services.map((service, i) => (
// //                   <motion.div
// //                     key={i}
// //                     className="space-vastu-card"
// //                     onClick={() => handleServiceSelect(service)}
// //                     initial={{ opacity: 0, y: 40 }}
// //                     animate={{ opacity: 1, y: 0 }}
// //                     transition={{ delay: i * 0.2, duration: 0.6 }}
// //                   >
// //                     <h3>{service.label}</h3>
// //                     <p>{service.description}</p>
// //                     <div className="amount">₹{service.amount}</div>
// //                   </motion.div>
// //                 ))}
// //               </div>
// //             </>
// //           )}

// //           {/* STEP 2: FORM */}
// //           {step === 2 && (
// //             <div className="glass-card">
// //               <h2>{selectedService.label}</h2>
// //               <p>{selectedService.description}</p>
// //               <form onSubmit={handleFormSubmit}>
// //                 <input name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} />
// //                 <input name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
// //                 <input name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} />
// //                 <input name="address" placeholder="Property Address" value={formData.address} onChange={handleChange} />
// //                 <select name="propertyStage" value={formData.propertyStage} onChange={handleChange}>
// //                   <option value="">-- Property Stage --</option>
// //                   <option>Pre-Demolition</option>
// //                   <option>Layout Finalization</option>
// //                   <option>Under Construction</option>
// //                   <option>Constructed</option>
// //                 </select>
// //                 <textarea name="issue" placeholder="Describe your issue..." rows={3} value={formData.issue} onChange={handleChange} />
// //                 <select name="deliveryMode" value={formData.deliveryMode} onChange={handleChange}>
// //                   <option value="">-- Mode of Delivery --</option>
// //                   {deliveryModes.map((m) => (
// //                     <option key={m}>{m}</option>
// //                   ))}
// //                 </select>
// //                 <button className="glow-btn">Proceed to Payment 💫</button>
// //               </form>
// //             </div>
// //           )}

// //           {/* STEP 3: PAYMENT */}
// //           {step === 3 && (
// //             <div className="glass-card">
// //               <h2>Confirm & Pay</h2>
// //               <p>
// //                 <strong>{selectedService.label}</strong>
// //               </p>
// //               <h3>Amount: ₹{selectedService.amount}</h3>
// //               <button onClick={handlePayment} className="glow-btn" disabled={loading}>
// //                 {loading ? <Loader2 size={20} className="animate-spin" /> : "Pay Now 🔮"}
// //               </button>
// //             </div>
// //           )}

// //           {/* STEP 4: CONFIRMATION */}
// //           {step === 4 && (
// //             <div className="glass-card">
// //               <CheckCircle size={50} color="#4ade80" />
// //               <h2>Thank You!</h2>
// //               <p>
// //                 Your request for <strong>{selectedService.label}</strong> has been received.
// //               </p>
// //               <p>We’ll contact you soon via your chosen delivery mode.</p>
// //               <button onClick={resetForm} className="glow-btn">
// //                 Back to Services
// //               </button>
// //             </div>
// //           )}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default SpaceVastu;


// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { Sparkles, Loader2, CheckCircle } from "lucide-react";
// import "../../styles/SpaceVastu.css";

// const services = [
//   {
//     icon: "🏠",
//     label: "Residential E-Vastu",
//     description:
//       "Comprehensive Vastu evaluation for flats, villas, independent houses, builder floors, or farmhouses. Enhances peace, prosperity, and family harmony.",
//     amount: 499,
//   },
//   {
//     icon: "🏢",
//     label: "Commercial E-Vastu",
//     description:
//       "Boost success and productivity in your business. Ensures your workspace supports growth, client attraction, and operational efficiency.",
//     amount: 999,
//   },
//   {
//     icon: "🏭",
//     label: "Industrial E-Vastu",
//     description:
//       "Specialized guidance for manufacturing units, IT parks, data centers, and industrial plants. Optimizes workflow, machinery placement, and employee zones.",
//     amount: 1999,
//   },
//   {
//     icon: "🤝",
//     label: "B2B Solutions",
//     description:
//       "Custom Vastu consultancy for corporates, showrooms, hotels, restaurants, and more. Proposal-based service.",
//     amount: 4999,
//   },
// ];

// const deliveryModes = ["PDF Report", "Call Discussion", "On-Site Visit (Chargeable)"];

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

// const SpaceVastu = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [step, setStep] = useState(1);
//   const [selectedService, setSelectedService] = useState(null);
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     phone: "",
//     address: "",
//     propertyStage: "",
//     issue: "",
//     deliveryMode: "",
//   });
//   const [loading, setLoading] = useState(false);

//   const handleServiceSelect = (service) => {
//     setSelectedService(service);
//     setStep(2);
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const validateForm = () => {
//     const errors = {};
//     if (!formData.fullName) errors.fullName = "Full Name required";
//     if (!formData.email) errors.email = "Email required";
//     if (!formData.phone) errors.phone = "Phone required";
//     if (!formData.address) errors.address = "Address required";
//     if (!formData.propertyStage) errors.propertyStage = "Property Stage required";
//     if (!formData.deliveryMode) errors.deliveryMode = "Delivery mode required";
//     return Object.keys(errors).length === 0;
//   };

//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     if (validateForm()) setStep(3);
//   };

//   const handlePayment = async () => {
//     setLoading(true);
//     await new Promise((r) => setTimeout(r, 1500));
//     setStep(4);
//     setLoading(false);
//   };

//   const resetForm = () => {
//     setFormData({
//       fullName: "",
//       email: "",
//       phone: "",
//       address: "",
//       propertyStage: "",
//       issue: "",
//       deliveryMode: "",
//     });
//     setSelectedService(null);
//     setStep(1);
//   };

//   return (
//     <div className={`space-vastu-page ${sidebarOpen ? "sidebar-open" : ""}`}>
//       {/* Sidebar */}
//       <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
//         <h2>AstroConnect</h2>
//         <ul>
//           {navLinks.map((item, i) => (
//             <li key={i}>
//               <a
//                 href={item.link}
//                 onClick={() => setSidebarOpen(false)}
//                 style={{ display: "flex", alignItems: "center", gap: "10px", padding: "10px 15px", color: "#ccc", textDecoration: "none", borderRadius: "8px", transition: "all 0.3s" }}
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

//       {/* Overlay */}
//       <div className={`sidebar-overlay ${sidebarOpen ? "visible" : ""}`} onClick={() => setSidebarOpen(false)}></div>

//       {/* Hamburger Menu */}
//       <button className={`sidebar-toggle ${sidebarOpen ? "active" : ""}`} onClick={() => setSidebarOpen(!sidebarOpen)}>
//         ☰
//       </button>

//       {/* Main Content */}
//       <div className="space-vastu-content">
//         <h1>
//           <Sparkles size={26} /> Space Vastu Consultation
//         </h1>

//         {/* Step 1: Services */}
//         {step === 1 && (
//           <>
//             <p>Select the service that best fits your needs:</p>
//             <div className="space-vastu-services">
//               {services.map((service, i) => (
//                 <motion.div
//                   key={i}
//                   className="space-vastu-card"
//                   onClick={() => handleServiceSelect(service)}
//                   initial={{ opacity: 0, y: 40 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: i * 0.2, duration: 0.6 }}
//                 >
//                   <div className="card-icon" style={{ fontSize: "32px", marginBottom: "12px" }}>
//                     {service.icon}
//                   </div>
//                   <h3>{service.label}</h3>
//                   <p>{service.description}</p>
//                   <div className="amount">₹{service.amount}</div>
//                 </motion.div>
//               ))}
//             </div>
//           </>
//         )}

//         {/* Step 2: Form */}
//         {step === 2 && (
//           <div className="glass-card">
//             <h2>{selectedService.label}</h2>
//             <p>{selectedService.description}</p>
//             <form onSubmit={handleFormSubmit}>
//               <input name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} />
//               <input name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
//               <input name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} />
//               <input name="address" placeholder="Property Address" value={formData.address} onChange={handleChange} />
//               <select name="propertyStage" value={formData.propertyStage} onChange={handleChange}>
//                 <option value="">-- Property Stage --</option>
//                 <option>Pre-Demolition</option>
//                 <option>Layout Finalization</option>
//                 <option>Under Construction</option>
//                 <option>Constructed</option>
//               </select>
//               <textarea name="issue" placeholder="Describe your issue..." rows={3} value={formData.issue} onChange={handleChange} />
//               <select name="deliveryMode" value={formData.deliveryMode} onChange={handleChange}>
//                 <option value="">-- Mode of Delivery --</option>
//                 {deliveryModes.map((m) => (
//                   <option key={m}>{m}</option>
//                 ))}
//               </select>
//               <button className="glow-btn">Proceed to Payment 💫</button>
//             </form>
//           </div>
//         )}

//         {/* Step 3: Payment */}
//         {step === 3 && (
//           <div className="glass-card">
//             <h2>Confirm & Pay</h2>
//             <p>
//               <strong>{selectedService.label}</strong>
//             </p>
//             <h3>Amount: ₹{selectedService.amount}</h3>
//             <button onClick={handlePayment} className="glow-btn" disabled={loading}>
//               {loading ? <Loader2 size={20} className="animate-spin" /> : "Pay Now 🔮"}
//             </button>
//           </div>
//         )}

//         {/* Step 4: Confirmation */}
//         {step === 4 && (
//           <div className="glass-card">
//             <CheckCircle size={50} color="#4ade80" />
//             <h2>Thank You!</h2>
//             <p>Your request for <strong>{selectedService.label}</strong> has been received.</p>
//             <p>We’ll contact you soon via your chosen delivery mode.</p>
//             <button onClick={resetForm} className="glow-btn">Back to Services</button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default SpaceVastu;

// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { Sparkles, Loader2, CheckCircle } from "lucide-react";
// import "../../styles/SpaceVastu.css";

// const services = [
//   {
//     icon: "🏠",
//     label: "Residential E-Vastu",
//     description:
//       "Comprehensive Vastu evaluation for flats, villas, independent houses, builder floors, or farmhouses. Enhances peace, prosperity, and family harmony.",
//     amount: 499,
//   },
//   {
//     icon: "🏢",
//     label: "Commercial E-Vastu",
//     description:
//       "Boost success and productivity in your business. Ensures your workspace supports growth, client attraction, and operational efficiency.",
//     amount: 999,
//   },
//   {
//     icon: "🏭",
//     label: "Industrial E-Vastu",
//     description:
//       "Specialized guidance for manufacturing units, IT parks, data centers, and industrial plants. Optimizes workflow, machinery placement, and employee zones.",
//     amount: 1999,
//   },
//   {
//     icon: "🤝",
//     label: "B2B Solutions",
//     description:
//       "Custom Vastu consultancy for corporates, showrooms, hotels, restaurants, and more. Proposal-based service.",
//     amount: 4999,
//   },
// ];

// const deliveryModes = ["PDF Report", "Call Discussion", "On-Site Visit (Chargeable)"];

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

// const SpaceVastu = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [step, setStep] = useState(1);
//   const [selectedService, setSelectedService] = useState(null);
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     phone: "",
//     address: "",
//     propertyStage: "",
//     issue: "",
//     deliveryMode: "",
//   });
//   const [loading, setLoading] = useState(false);

//   const handleServiceSelect = (service) => {
//     setSelectedService(service);
//     setStep(2);
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const validateForm = () => {
//     const errors = {};
//     if (!formData.fullName) errors.fullName = "Full Name required";
//     if (!formData.email) errors.email = "Email required";
//     if (!formData.phone) errors.phone = "Phone required";
//     if (!formData.address) errors.address = "Address required";
//     if (!formData.propertyStage) errors.propertyStage = "Property Stage required";
//     if (!formData.deliveryMode) errors.deliveryMode = "Delivery mode required";
//     return Object.keys(errors).length === 0;
//   };

//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     if (validateForm()) setStep(3);
//     else alert("Please complete all required fields.");
//   };

//   const handlePayment = async () => {
//     setLoading(true);
//     await new Promise((r) => setTimeout(r, 1500));
//     setStep(4);
//     setLoading(false);
//   };

//   const resetForm = () => {
//     setFormData({
//       fullName: "",
//       email: "",
//       phone: "",
//       address: "",
//       propertyStage: "",
//       issue: "",
//       deliveryMode: "",
//     });
//     setSelectedService(null);
//     setStep(1);
//   };

//   return (
//     <div className={`space-vastu-page ${sidebarOpen ? "sidebar-open" : ""}`}>
//       {/* Sidebar */}
//       <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
//         <h2>AstroConnect</h2>
//         <ul>
//           {navLinks.map((item, i) => (
//             <li key={i}>
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

//       {/* Overlay */}
//       <div className={`sidebar-overlay ${sidebarOpen ? "visible" : ""}`} onClick={() => setSidebarOpen(false)}></div>

//       {/* Hamburger Menu */}
//       <button className={`sidebar-toggle ${sidebarOpen ? "active" : ""}`} onClick={() => setSidebarOpen(!sidebarOpen)}>
//         ☰
//       </button>

//       {/* Main Content */}
//       <div className="space-vastu-content">
//         <h1>
//           <Sparkles size={26} /> Space Vastu Consultation
//         </h1>

//         {/* Step 1: Services */}
//         {step === 1 && (
//           <>
//             <p>Select the service that best fits your needs:</p>
//             <div className="space-vastu-services">
//               {services.map((service, i) => (
//                 <motion.div
//                   key={i}
//                   className="space-vastu-card"
//                   onClick={() => handleServiceSelect(service)}
//                   initial={{ opacity: 0, y: 40 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: i * 0.2, duration: 0.6 }}
//                 >
//                   <div className="card-icon" style={{ fontSize: "32px", marginBottom: "12px" }}>
//                     {service.icon}
//                   </div>
//                   <h3>{service.label}</h3>
//                   <p>{service.description}</p>
//                   <div className="amount">₹{service.amount}</div>
//                 </motion.div>
//               ))}
//             </div>
//           </>
//         )}

//         {/* Step 2: Form */}
//         {step === 2 && (
//           <div className="glass-card">
//             <h2>{selectedService.label}</h2>
//             <p>{selectedService.description}</p>
//             <form onSubmit={handleFormSubmit}>
//               <input name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} required />
//               <input name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
//               <input name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} required />
//               <input name="address" placeholder="Property Address" value={formData.address} onChange={handleChange} required />
//               <select name="propertyStage" value={formData.propertyStage} onChange={handleChange} required>
//                 <option value="">-- Property Stage --</option>
//                 <option>Pre-Demolition</option>
//                 <option>Layout Finalization</option>
//                 <option>Under Construction</option>
//                 <option>Constructed</option>
//               </select>
//               <textarea name="issue" placeholder="Describe your issue..." rows={3} value={formData.issue} onChange={handleChange} />
//               <select name="deliveryMode" value={formData.deliveryMode} onChange={handleChange} required>
//                 <option value="">-- Mode of Delivery --</option>
//                 {deliveryModes.map((m) => (
//                   <option key={m}>{m}</option>
//                 ))}
//               </select>
//               <button className="glow-btn" type="submit">Proceed to Payment 💫</button>
//             </form>
//           </div>
//         )}

//         {/* Step 3: Payment */}
//         {step === 3 && (
//           <div className="glass-card">
//             <h2>Confirm & Pay</h2>
//             <p><strong>{selectedService.label}</strong></p>
//             <h3>Amount: ₹{selectedService.amount}</h3>
//             <button onClick={handlePayment} className="glow-btn" disabled={loading}>
//               {loading ? <Loader2 size={20} className="animate-spin" /> : "Pay Now 🔮"}
//             </button>
//           </div>
//         )}

//         {/* Step 4: Confirmation */}
//         {step === 4 && (
//           <div className="glass-card">
//             <CheckCircle size={50} color="#4ade80" />
//             <h2>Thank You!</h2>
//             <p>Your request for <strong>{selectedService.label}</strong> has been received.</p>
//             <p>We’ll contact you soon via your chosen delivery mode.</p>
//             <button onClick={resetForm} className="glow-btn">Back to Services</button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default SpaceVastu;

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Loader2, CheckCircle } from "lucide-react";
import "../../styles/SpaceVastu.css";

const services = [
  {
    icon: "🏠",
    label: "Residential E-Vastu",
    description:
      "Comprehensive Vastu evaluation for flats, villas, independent houses, builder floors, or farmhouses. Enhances peace, prosperity, and family harmony.",
    amount: 499,
  },
  {
    icon: "🏢",
    label: "Commercial E-Vastu",
    description:
      "Boost success and productivity in your business. Ensures your workspace supports growth, client attraction, and operational efficiency.",
    amount: 999,
  },
  {
    icon: "🏭",
    label: "Industrial E-Vastu",
    description:
      "Specialized guidance for manufacturing units, IT parks, data centers, and industrial plants. Optimizes workflow, machinery placement, and employee zones.",
    amount: 1999,
  },
  {
    icon: "🤝",
    label: "B2B Solutions",
    description:
      "Custom Vastu consultancy for corporates, showrooms, hotels, restaurants, and more. Proposal-based service.",
    amount: 4999,
  },
];

const deliveryModes = ["PDF Report", "Call Discussion", "On-Site Visit (Chargeable)"];

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

const SpaceVastu = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState(null);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    propertyStage: "",
    issue: "",
    deliveryMode: "",
  });
  const [loading, setLoading] = useState(false);

  const handleServiceSelect = (service) => {
    setSelectedService(service);
    setStep(2);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.fullName) errors.fullName = "Full Name required";
    if (!formData.email) errors.email = "Email required";
    if (!formData.phone) errors.phone = "Phone required";
    if (!formData.address) errors.address = "Address required";
    if (!formData.propertyStage) errors.propertyStage = "Property Stage required";
    if (!formData.deliveryMode) errors.deliveryMode = "Delivery mode required";
    return Object.keys(errors).length === 0;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) setStep(3);
    else alert("Please complete all required fields.");
  };

  const handlePayment = async () => {
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    setStep(4);
    setLoading(false);
  };

  const resetForm = () => {
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      address: "",
      propertyStage: "",
      issue: "",
      deliveryMode: "",
    });
    setSelectedService(null);
    setStep(1);
  };

  return (
    <div className="space-vastu-page" style={{ color: "#fff", fontFamily: "Poppins, sans-serif" }}>
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
          {navLinks.map((item, i) => (
            <li key={i} style={{ margin: "14px 0" }}>
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
        className="space-vastu-content"
        style={{
          marginLeft: sidebarOpen ? "270px" : "0",
          transition: "margin-left 0.5s ease",
        }}
      >
        <h1>
          <Sparkles size={26} /> Space Vastu Consultation
        </h1>

        {/* Step 1 */}
        {step === 1 && (
          <>
            <p>Select the service that best fits your needs:</p>
            <div className="space-vastu-services">
              {services.map((service, i) => (
                <motion.div
                  key={i}
                  className="space-vastu-card"
                  onClick={() => handleServiceSelect(service)}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.2, duration: 0.6 }}
                >
                  <div className="card-icon" style={{ fontSize: "32px", marginBottom: "12px" }}>
                    {service.icon}
                  </div>
                  <h3>{service.label}</h3>
                  <p>{service.description}</p>
                  <div className="amount">₹{service.amount}</div>
                </motion.div>
              ))}
            </div>
          </>
        )}
{/* Step 2 — Modern Cosmic Form */}
{step === 2 && (
  <div
    className="glass-card"
    style={{
      background: "rgba(255,255,255,0.08)",
      backdropFilter: "blur(20px)",
      borderRadius: "25px",
      padding: "3rem 2.5rem",
      maxWidth: "720px",
      margin: "3rem auto",
      boxShadow: "0 0 45px rgba(255,0,255,0.3)",
      textAlign: "center",
    }}
  >
    <h2
      style={{
        fontSize: "2.2rem",
        marginBottom: "0.8rem",
        background: "linear-gradient(90deg, #ff00ff, #00ffff)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}
    >
      {selectedService.label}
    </h2>
    <p style={{ color: "#d4d2ff", fontSize: "0.95rem", marginBottom: "2rem" }}>
      {selectedService.description}
    </p>

    <style>{`
      .vastu-form {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        max-width: 500px;
        margin: 0 auto;
        position: relative;
      }

      .input-group {
        position: relative;
      }

      .input-group input,
      .input-group select,
      .input-group textarea {
        width: 100%;
        padding: 14px 16px 14px 50px;
        font-size: 1rem;
        border-radius: 12px;
        border: 1.5px solid rgba(255,255,255,0.2);
        background: rgba(255,255,255,0.1);
        color: #fff;
        outline: none;
        transition: all 0.3s ease;
        resize: none;
      }

      .input-group input:focus,
      .input-group select:focus,
      .input-group textarea:focus {
        border-color: #ff00ff;
        box-shadow: 0 0 18px rgba(255,0,255,0.4);
        background: rgba(255,255,255,0.15);
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
      .input-group textarea:not(:placeholder-shown) + label,
      .input-group select:focus + label,
      .input-group select:not([value=""]) + label {
        top: -9px;
        left: 44px;
        font-size: 0.8rem;
        color: #ff9cff;
        background: radial-gradient(circle at top left, #1a002f, #0a0018);
        padding: 0 6px;
      }

      .input-group .icon {
        position: absolute;
        left: 14px;
        top: 50%;
        transform: translateY(-50%);
        color: #aaa;
        font-size: 20px;
        transition: color 0.3s ease;
      }

      .input-group input:focus ~ .icon,
      .input-group textarea:focus ~ .icon,
      .input-group select:focus ~ .icon {
        color: #ff66ff;
        filter: drop-shadow(0 0 6px #ff00ff);
      }

      .glow-btn {
        margin-top: 1.8rem;
        background: linear-gradient(90deg, #ff00ff, #8a2be2, #00ffff);
        border: none;
        color: #fff;
        padding: 14px 40px;
        border-radius: 50px;
        font-weight: 700;
        font-size: 1rem;
        cursor: pointer;
        box-shadow: 0 0 20px rgba(255,0,255,0.4);
        transition: all 0.4s ease;
      }

      .glow-btn:hover {
        transform: scale(1.05);
        box-shadow: 0 0 40px rgba(255,0,255,0.6);
      }

      .glow-btn:active {
        transform: scale(0.98);
      }
    `}</style>

    <form className="vastu-form" onSubmit={handleFormSubmit}>
      <div className="input-group">
        <i className="icon">👤</i>
        <input
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
          name="email"
          type="email"
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
          name="phone"
          type="tel"
          placeholder=" "
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <label>Phone Number</label>
      </div>

      <div className="input-group">
        <i className="icon">🏠</i>
        <input
          name="address"
          placeholder=" "
          value={formData.address}
          onChange={handleChange}
          required
        />
        <label>Property Address</label>
      </div>

      <div className="input-group">
        <i className="icon">🏗️</i>
        <select
          name="propertyStage"
          value={formData.propertyStage}
          onChange={handleChange}
          required
        >
          <option value="">Select Property Stage</option>
          <option>Pre-Demolition</option>
          <option>Layout Finalization</option>
          <option>Under Construction</option>
          <option>Constructed</option>
        </select>
        <label>Property Stage</label>
      </div>

      <div className="input-group">
        <i className="icon">🧿</i>
        <textarea
          name="issue"
          placeholder=" "
          rows="3"
          value={formData.issue}
          onChange={handleChange}
        ></textarea>
        <label>Describe your issue</label>
      </div>

      <div className="input-group">
        <i className="icon">📦</i>
        <select
          name="deliveryMode"
          value={formData.deliveryMode}
          onChange={handleChange}
          required
        >
          <option value="">Select Delivery Mode</option>
          {deliveryModes.map((mode) => (
            <option key={mode}>{mode}</option>
          ))}
        </select>
        <label>Mode of Delivery</label>
      </div>

      <button type="submit" className="glow-btn">
        Proceed to Payment 💫
      </button>
    </form>
  </div>
)}


        {/* Step 3 */}
        {step === 3 && (
          <div className="glass-card">
            <h2>Confirm & Pay</h2>
            <p>
              <strong>{selectedService.label}</strong>
            </p>
            <h3>Amount: ₹{selectedService.amount}</h3>
            <button onClick={handlePayment} className="glow-btn" disabled={loading}>
              {loading ? <Loader2 size={20} className="animate-spin" /> : "Pay Now 🔮"}
            </button>
          </div>
        )}

        {/* Step 4 */}
        {step === 4 && (
          <div className="glass-card">
            <CheckCircle size={50} color="#4ade80" />
            <h2>Thank You!</h2>
            <p>
              Your request for <strong>{selectedService.label}</strong> has been received.
            </p>
            <p>We’ll contact you soon via your chosen delivery mode.</p>
            <button onClick={resetForm} className="glow-btn">
              Back to Services
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SpaceVastu;
