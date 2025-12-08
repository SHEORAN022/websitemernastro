// import React, { useState } from "react";
// import { useParams } from "react-router-dom";

// import {
//   KundliAPI,
//   NumerologyAPI,
//   ZodiacAPI,
//   ManglikAPI,
//   HoroscopeAPI,
// } from "../api/apiService";

// export default function FreeCalculatorPage() {
//   const { type } = useParams();
//   const [formData, setFormData] = useState({});
//   const [result, setResult] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const calcName = type
//     ?.replace(/-/g, " ")
//     ?.replace(/\b\w/g, (c) => c.toUpperCase());

//   // FIELDS LIST
//   const fields = {
//     "kundli": ["fullName", "dob", "timeSlot", "birthPlace"],
//     "numerology": ["fullName", "dob"],
//     "zodiac-calculator": ["fullName", "dob", "timeSlot", "birthPlace"],
//     "horoscope": ["fullName", "dob", "timeSlot", "birthPlace"],
//     "manglik-calculator": ["fullName", "dob", "timeSlot", "birthPlace"],
//   };

//   // API Mapping
//   const apiMap = {
//     "kundli": KundliAPI,
//     "numerology": NumerologyAPI,
//     "zodiac-calculator": ZodiacAPI,
//     "horoscope": HoroscopeAPI,
//     "manglik-calculator": ManglikAPI,
//   };

//   const handleSubmit = async () => {
//     if (!apiMap[type]) {
//       setResult({ error: "This calculator is not available" });
//       return;
//     }

//     // Empty check
//     for (let key of fields[type]) {
//       if (!formData[key]) {
//         alert(`Please enter ${key}`);
//         return;
//       }
//     }

//     setLoading(true);
//     try {
//       const response = await apiMap[type].calculate(formData);
//       setResult(response.data || response);
//     } catch (err) {
//       setResult({
//         error: err.response?.data?.message || "Failed to generate report",
//       });
//     }
//     setLoading(false);
//   };

//   const handleChange = (e) => {
//     setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   // If wrong type
//   if (!fields[type]) {
//     return (
//       <h2 style={{ color: "red", textAlign: "center", marginTop: "4rem" }}>
//         ❌ Invalid Calculator Type
//       </h2>
//     );
//   }

//   return (
//     <div
//       style={{
//         minHeight: "100vh",
//         background: "radial-gradient(circle at top, #0a0018, #1e003f)",
//         padding: "2rem",
//         color: "#fff",
//       }}
//     >
//       <h1
//         style={{
//           fontSize: "2.8rem",
//           textAlign: "center",
//           background: "linear-gradient(90deg,#ff00ff,#00ffff)",
//           WebkitBackgroundClip: "text",
//           WebkitTextFillColor: "transparent",
//           marginBottom: "2rem",
//           fontWeight: 700,
//         }}
//       >
//         {calcName}
//       </h1>

//       {/* FORM */}
//       <div
//         style={{
//           background: "rgba(255,255,255,0.08)",
//           padding: "2rem",
//           borderRadius: "20px",
//           maxWidth: "650px",
//           margin: "auto",
//         }}
//       >
//         {fields[type].map((field) => (
//           <input
//             key={field}
//             name={field}
//             placeholder={field
//               .replace(/([A-Z])/g, " $1")
//               .replace("-", " ")
//               .toUpperCase()}
//             type={field === "dob" ? "date" : field === "timeSlot" ? "time" : "text"}
//             onChange={handleChange}
//             style={{
//               padding: "12px",
//               borderRadius: "10px",
//               background: "rgba(255,255,255,0.1)",
//               border: "1px solid rgba(255,255,255,0.3)",
//               color: "white",
//               width: "100%",
//               marginBottom: "1rem",
//             }}
//           />
//         ))}

//         <button
//           onClick={handleSubmit}
//           disabled={loading}
//           style={{
//             width: "100%",
//             padding: "14px",
//             borderRadius: "30px",
//             background: "linear-gradient(90deg,#ff00ff,#00ffff)",
//             border: "none",
//             cursor: "pointer",
//             marginTop: "10px",
//             fontWeight: "bold",
//             color: "#fff",
//           }}
//         >
//           {loading ? "Processing..." : "Generate Report"}
//         </button>
//       </div>

//       {/* RESULT BOX */}
//       {result && (
//         <div
//           style={{
//             marginTop: "2rem",
//             maxWidth: "700px",
//             margin: "2rem auto",
//             background: "rgba(255,255,255,0.1)",
//             padding: "1.5rem",
//             borderRadius: "15px",
//           }}
//         >
//           <h3 style={{ color: "#00ffff", marginBottom: "1rem" }}>Report Output:</h3>

//           <pre style={{ whiteSpace: "pre-wrap", color: "#ddd" }}>
//             {JSON.stringify(result, null, 2)}
//           </pre>
//         </div>
//       )}
//     </div>
//   );
// }


// import React, { useState } from "react";
// import { useParams } from "react-router-dom";

// import {
//   KundliAPI,
//   NumerologyAPI,
//   ZodiacAPI,
//   ManglikAPI,
//   HoroscopeAPI,
// } from "../api/apiService";

// export default function FreeCalculatorPage() {
//   const { type } = useParams();
//   const [formData, setFormData] = useState({});
//   const [result, setResult] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const calcName = type
//     ?.replace(/-/g, " ")
//     ?.replace(/\b\w/g, (c) => c.toUpperCase());

//   // FIELDS LIST
//   const fields = {
//     "kundli": ["fullName", "dob", "timeSlot", "birthPlace"],
//     "numerology": ["fullName", "dob"],
//     "zodiac-calculator": ["fullName", "dob", "timeSlot", "birthPlace"],
//     "horoscope": ["fullName", "dob", "timeSlot", "birthPlace"],
//     "manglik-calculator": ["fullName", "dob", "timeSlot", "birthPlace"],
//   };

//   // API Mapping
//   const apiMap = {
//     "kundli": KundliAPI,
//     "numerology": NumerologyAPI,
//     "zodiac-calculator": ZodiacAPI,
//     "horoscope": HoroscopeAPI,
//     "manglik-calculator": ManglikAPI,
//   };

//   const handleSubmit = async () => {
//     if (!apiMap[type]) {
//       setResult({ error: "This calculator is not available" });
//       return;
//     }

//     // Empty check
//     for (let key of fields[type]) {
//       if (!formData[key]) {
//         alert(`Please enter ${key}`);
//         return;
//       }
//     }

//     setLoading(true);
//     try {
//       const response = await apiMap[type].calculate(formData);
//       setResult(response.data || response);
//     } catch (err) {
//       setResult({
//         error: err.response?.data?.message || "Failed to generate report",
//       });
//     }
//     setLoading(false);
//   };

//   const handleChange = (e) => {
//     setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   // If wrong type
//   if (!fields[type]) {
//     return (
//       <h2 style={{ color: "red", textAlign: "center", marginTop: "4rem" }}>
//         ❌ Invalid Calculator Type
//       </h2>
//     );
//   }

//   return (
//     <div
//       style={{
//         minHeight: "100vh",
//         background: "radial-gradient(circle at top, #0a0018, #1e003f)",
//         padding: "2rem",
//         color: "#fff",
//       }}
//     >
//       <h1
//         style={{
//           fontSize: "2.8rem",
//           textAlign: "center",
//           background: "linear-gradient(90deg,#ff00ff,#00ffff)",
//           WebkitBackgroundClip: "text",
//           WebkitTextFillColor: "transparent",
//           marginBottom: "2rem",
//           fontWeight: 700,
//         }}
//       >
//         {calcName}
//       </h1>

//       {/* FORM */}
//       <div
//         style={{
//           background: "rgba(255,255,255,0.08)",
//           padding: "2rem",
//           borderRadius: "20px",
//           maxWidth: "650px",
//           margin: "auto",
//         }}
//       >
//         {fields[type].map((field) => (
//           <input
//             key={field}
//             name={field}
//             placeholder={field
//               .replace(/([A-Z])/g, " $1")
//               .replace("-", " ")
//               .toUpperCase()}
//             type={field === "dob" ? "date" : field === "timeSlot" ? "time" : "text"}
//             onChange={handleChange}
//             style={{
//               padding: "12px",
//               borderRadius: "10px",
//               background: "rgba(255,255,255,0.1)",
//               border: "1px solid rgba(255,255,255,0.3)",
//               color: "white",
//               width: "100%",
//               marginBottom: "1rem",
//             }}
//           />
//         ))}

//         <button
//           onClick={handleSubmit}
//           disabled={loading}
//           style={{
//             width: "100%",
//             padding: "14px",
//             borderRadius: "30px",
//             background: "linear-gradient(90deg,#ff00ff,#00ffff)",
//             border: "none",
//             cursor: "pointer",
//             marginTop: "10px",
//             fontWeight: "bold",
//             color: "#fff",
//           }}
//         >
//           {loading ? "Processing..." : "Generate Report"}
//         </button>
//       </div>

//       {/* RESULT BOX */}
//       {result && (
//         <div
//           style={{
//             marginTop: "2rem",
//             maxWidth: "700px",
//             margin: "2rem auto",
//             background: "rgba(255,255,255,0.1)",
//             padding: "1.5rem",
//             borderRadius: "15px",
//           }}
//         >
//           <h3 style={{ color: "#00ffff", marginBottom: "1rem" }}>Report Output:</h3>

//           <pre style={{ whiteSpace: "pre-wrap", color: "#ddd" }}>
//             {JSON.stringify(result, null, 2)}
//           </pre>
//         </div>
//       )}
//     </div>
//   );
// }
//   return (
//     <div
//       style={{
//         minHeight: "100vh",
//         background: "radial-gradient(circle at top, #0a0018, #1e003f)",
//         padding: "2rem",
//         color: "#fff",
//         fontFamily: "'Poppins', sans-serif",
//       }}
//     >

//       {/* ⭐ STEP – 1 : SELECT CALCULATOR */}
//       {step === 1 && (
//         <div
//           style={{
//             maxWidth: "1200px",
//             margin: "0 auto",
//             display: "grid",
//             gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
//             gap: "2rem",
//             paddingTop: "2rem",
//           }}
//         >
//           {calculators.map((calc, index) => (
//             <div
//               key={index}
//               onClick={() => selectCalculator(calc)}
//               style={{
//                 background: "rgba(255,255,255,0.08)",
//                 borderRadius: "20px",
//                 padding: "1.8rem",
//                 cursor: "pointer",
//                 textAlign: "center",
//                 border: "1px solid rgba(255,255,255,0.15)",
//                 transition: "0.4s",
//               }}
//               onMouseEnter={(e) => {
//                 e.currentTarget.style.transform = "translateY(-8px)";
//                 e.currentTarget.style.boxShadow =
//                   "0 15px 40px rgba(255,0,255,0.25)";
//               }}
//               onMouseLeave={(e) => {
//                 e.currentTarget.style.transform = "translateY(0)";
//                 e.currentTarget.style.boxShadow = "none";
//               }}
//             >
//               <h2
//                 style={{
//                   fontSize: "1.4rem",
//                   marginBottom: "0.5rem",
//                   background: "linear-gradient(90deg,#ff00ff,#00ffff)",
//                   WebkitBackgroundClip: "text",
//                   WebkitTextFillColor: "transparent",
//                 }}
//               >
//                 {calc.label}
//               </h2>

//               <p style={{ color: "#ccc", marginBottom: "1rem", fontSize: "0.95rem" }}>
//                 {calc.desc}
//               </p>

//               <p style={{ fontWeight: "bold", color: calc.free ? "#00ffcc" : "#ff66cc" }}>
//                 {calc.free ? "Free" : "Paid"}
//               </p>
//             </div>
//           ))}
//         </div>
//       )}

//       {/* ⭐ STEP – 2 : FORM */}
//       {step === 2 && selectedCalc && (
//         <div
//           style={{
//             background: "rgba(255,255,255,0.08)",
//             borderRadius: "20px",
//             maxWidth: "650px",
//             margin: "3rem auto",
//             padding: "2rem",
//             border: "1px solid rgba(255,255,255,0.15)",
//           }}
//         >
//           <h2
//             style={{
//               fontSize: "2rem",
//               textAlign: "center",
//               marginBottom: "1rem",
//               background: "linear-gradient(90deg,#ff00ff,#00ffff)",
//               WebkitBackgroundClip: "text",
//               WebkitTextFillColor: "transparent",
//             }}
//           >
//             {selectedCalc.label}
//           </h2>

//           <p style={{ textAlign: "center", color: "#ccc", marginBottom: "2rem" }}>
//             {selectedCalc.desc}
//           </p>

//           {fieldsMap[selectedCalc.id].map((field) => (
//             <input
//               key={field}
//               name={field}
//               onChange={handleChange}
//               placeholder={field.replace(/([A-Z])/g, " $1").toUpperCase()}
//               type={field === "dob" ? "date" : field === "timeSlot" ? "time" : "text"}
//               style={{
//                 width: "100%",
//                 padding: "12px",
//                 marginBottom: "1rem",
//                 borderRadius: "10px",
//                 background: "rgba(255,255,255,0.1)",
//                 border: "1px solid rgba(255,255,255,0.3)",
//                 color: "#fff",
//               }}
//             />
//           ))}

//           <button
//             onClick={submitForm}
//             disabled={loading}
//             style={{
//               width: "100%",
//               padding: "14px",
//               background: "linear-gradient(90deg,#ff00ff,#00ffff)",
//               borderRadius: "30px",
//               border: "none",
//               marginTop: "1rem",
//               color: "#fff",
//               fontWeight: "bold",
//               cursor: "pointer",
//             }}
//           >
//             {loading ? "Processing..." : "Generate Report"}
//           </button>

//           <button
//             onClick={back}
//             style={{
//               marginTop: "1rem",
//               width: "100%",
//               padding: "12px",
//               background: "rgba(255,255,255,0.1)",
//               borderRadius: "25px",
//               border: "1px solid rgba(255,255,255,0.3)",
//               color: "#fff",
//               cursor: "pointer",
//             }}
//           >
//             ⬅ Back
//           </button>
//         </div>
//       )}
// import React, { useState } from "react";
// import { useParams } from "react-router-dom";

// import {
//   KundliAPI,
//   NumerologyAPI,
//   ZodiacAPI,
//   ManglikAPI,
//   HoroscopeAPI,
// } from "../api/apiService";

// export default function FreeCalculatorPage() {
//   const { type } = useParams();
//   const [formData, setFormData] = useState({});
//   const [result, setResult] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const calcName = type
//     ?.replace(/-/g, " ")
//     ?.replace(/\b\w/g, (c) => c.toUpperCase());

//   // कौन से fields दिखने हैं किस calculator में
//   const fields = {
//     kundli: ["fullName", "dob", "timeSlot", "birthPlace"],
//     numerology: ["fullName", "dob"],
//     "zodiac-calculator": ["fullName", "dob", "timeSlot", "birthPlace"],
//     horoscope: ["fullName", "dob", "timeSlot", "birthPlace"],
//     "manglik-calculator": ["fullName", "dob", "timeSlot", "birthPlace"],
//   };

//   // API mapping
//   const apiMap = {
//     kundli: KundliAPI,
//     numerology: NumerologyAPI,
//     "zodiac-calculator": ZodiacAPI,
//     horoscope: HoroscopeAPI,
//     "manglik-calculator": ManglikAPI,
//   };

//   const handleSubmit = async () => {
//     if (!apiMap[type]) {
//       setResult({ error: "This calculator is not available" });
//       return;
//     }

//     // simple empty check
//     for (let key of fields[type]) {
//       if (!formData[key]) {
//         alert(`Please enter ${key}`);
//         return;
//       }
//     }

//     setLoading(true);
//     setResult(null);

//     try {
//       let payload = {};

//       // Payload को थोड़ा smart बनाते हैं (Astrology.jsx के जैसा)
//       if (type === "kundli" || type === "zodiac-calculator" || type === "horoscope" || type === "manglik-calculator") {
//         payload = {
//           name: formData.fullName,
//           dateOfBirth: formData.dob,
//           timeOfBirth: formData.timeSlot,
//           placeOfBirth: formData.birthPlace,
//         };
//       } else if (type === "numerology") {
//         payload = {
//           name: formData.fullName,
//           dateOfBirth: formData.dob,
//         };
//       } else {
//         payload = { ...formData };
//       }

//       const response = await apiMap[type].calculate(payload);
//       setResult(response.data || response);
//     } catch (err) {
//       setResult({
//         error: err?.response?.data?.message || "Failed to generate report",
//       });
//     }
//     setLoading(false);
//   };

//   const handleChange = (e) => {
//     setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   // अगर गलत type है
//   if (!fields[type]) {
//     return (
//       <div
//         style={{
//           minHeight: "100vh",
//           background: "radial-gradient(circle at top, #0a0018, #1e003f)",
//           color: "#fff",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           fontFamily: "'Poppins', sans-serif",
//         }}
//       >
//         <h2 style={{ color: "red", textAlign: "center" }}>
//           ❌ Invalid Calculator Type
//         </h2>
//       </div>
//     );
//   }

//   const renderReport = () => {
//     if (!result) return null;

//     if (result.error) {
//       return (
//         <div style={{ padding: "2rem", textAlign: "center", color: "#ff6b6b" }}>
//           <h3>❌ Error Processing Report</h3>
//           <p>{result.error}</p>
//         </div>
//       );
//     }

//     switch (type) {
//       case "kundli":
//         return <KundliReport data={result} formData={formData} />;

//       case "numerology":
//         return <NumerologyReport data={result} formData={formData} />;

//       case "zodiac-calculator":
//         return <ZodiacReport data={result} formData={formData} />;

//       case "manglik-calculator":
//         return <ManglikReport data={result} formData={formData} />;

//       case "horoscope":
//         return <HoroscopeReport data={result} formData={formData} />;

//       default:
//         return <GenericReport data={result} formData={formData} />;
//     }
//   };

//   return (
//     <div
//       style={{
//         minHeight: "100vh",
//         background: "radial-gradient(circle at top, #0a0018, #1e003f)",
//         padding: "2rem 1.5rem 4rem",
//         color: "#fff",
//         fontFamily: "'Poppins', sans-serif",
//       }}
//     >
//       {/* TITLE */}
//       <h1
//         style={{
//           fontSize: "2.8rem",
//           textAlign: "center",
//           background: "linear-gradient(90deg,#ff00ff,#00ffff)",
//           WebkitBackgroundClip: "text",
//           WebkitTextFillColor: "transparent",
//           marginBottom: "1rem",
//           fontWeight: 700,
//         }}
//       >
//         {calcName}
//       </h1>

//       <p
//         style={{
//           textAlign: "center",
//           color: "#ccc",
//           maxWidth: "700px",
//           margin: "0 auto 2rem",
//         }}
//       >
//         Use this free calculator to generate your personalised{" "}
//         <strong>{calcName}</strong> report with modern Vedic insights.
//       </p>

//       {/* FORM CARD */}
//       <div style={formContainerStyle}>
//         {fields[type].map((field) => (
//           <input
//             key={field}
//             name={field}
//             placeholder={field
//               .replace(/([A-Z])/g, " $1")
//               .replace("-", " ")
//               .toUpperCase()}
//             type={
//               field === "dob" ? "date" : field === "timeSlot" ? "time" : "text"
//             }
//             onChange={handleChange}
//             value={formData[field] || ""}
//             style={inputStyle}
//           />
//         ))}

//         <button
//           onClick={handleSubmit}
//           disabled={loading}
//           style={submitBtnStyle}
//         >
//           {loading ? "Processing..." : "✨ Generate Free Report"}
//         </button>
//       </div>

//       {/* RESULT SECTION */}
//       {result && (
//         <div style={resultContainerStyle}>
//           <h2 style={titleStyle}>📊 {calcName} Report</h2>
//           {renderReport()}
//         </div>
//       )}
//     </div>
//   );
// }



// const ReportSection = ({ title, children, icon }) => (
//   <div style={sectionStyle}>
//     <h3 style={sectionTitleStyle}>
//       {icon && <span style={{ marginRight: "8px" }}>{icon}</span>}
//       {title}
//     </h3>
//     <div style={sectionContentStyle}>{children}</div>
//   </div>
// );

// const InfoRow = ({ label, value }) => (
//   <div style={infoRowStyle}>
//     <span style={labelStyle}>{label}:</span>
//     <span style={valueStyle}>
//       {value && value !== "N/A" ? value : "Not Provided"}
//     </span>
//   </div>
// );

// /* ⭐ KUNDLI REPORT */
// const KundliReport = ({ data, formData }) => {
//   const kundli =
//     data?.kundli?.kundliData || data?.kundliData || data?.data || data || {};

//   return (
//     <div>
//       <ReportSection title="Basic Information" icon="👤">
//         <InfoRow label="Name" value={formData?.fullName || data?.name || "-"} />
//         <InfoRow
//           label="Date of Birth"
//           value={formData?.dob || data?.dateOfBirth || "-"}
//         />
//         <InfoRow
//           label="Time of Birth"
//           value={formData?.timeSlot || data?.timeOfBirth || "-"}
//         />
//         <InfoRow
//           label="Place of Birth"
//           value={formData?.birthPlace || data?.placeOfBirth || "-"}
//         />
//       </ReportSection>

//       {(kundli.sunSign ||
//         kundli.moonSign ||
//         kundli.ascendant ||
//         kundli.zodiac) && (
//         <ReportSection title="Zodiac Details" icon="🌞">
//           <InfoRow label="Sun Sign" value={kundli.sunSign || "-"} />
//           <InfoRow label="Moon Sign" value={kundli.moonSign || "-"} />
//           <InfoRow label="Ascendant (Lagna)" value={kundli.ascendant || "-"} />
//           <InfoRow label="Zodiac Sign" value={kundli.zodiac || "-"} />
//         </ReportSection>
//       )}

//       {(kundli.nakshatra || kundli.nakshatraLord) && (
//         <ReportSection title="Nakshatra Details" icon="✨">
//           <InfoRow label="Nakshatra" value={kundli.nakshatra || "-"} />
//           <InfoRow
//             label="Nakshatra Lord"
//             value={kundli.nakshatraLord || "-"}
//           />
//         </ReportSection>
//       )}

//       {kundli.planets && Object.keys(kundli.planets).length > 0 && (
//         <ReportSection title="Planetary Positions" icon="🪐">
//           {Object.entries(kundli.planets).map(([planet, details]) => (
//             <InfoRow
//               key={planet}
//               label={planet}
//               value={`${details?.sign || ""} ${
//                 details?.degree ? details.degree + "°" : ""
//               }`}
//             />
//           ))}
//         </ReportSection>
//       )}

//       {kundli.houses && Object.keys(kundli.houses).length > 0 && (
//         <ReportSection title="House Details" icon="🏠">
//           {Object.entries(kundli.houses).map(([house, sign]) => (
//             <InfoRow key={house} label={`House ${house}`} value={sign || "-"} />
//           ))}
//         </ReportSection>
//       )}

//       {kundli.mangalDosha && (
//         <ReportSection title="Mangal Dosha" icon="🔥">
//           <InfoRow
//             label="Status"
//             value={kundli.mangalDosha.hasDosha ? "Present" : "Not Present"}
//           />
//           <InfoRow
//             label="Description"
//             value={kundli.mangalDosha.description || "-"}
//           />
//         </ReportSection>
//       )}

//       {kundli.yogas?.length > 0 && (
//         <ReportSection title="Yogas in Kundli" icon="🔯">
//           {kundli.yogas.map((y, i) => (
//             <InfoRow key={i} label={y.name} value={y.description} />
//           ))}
//         </ReportSection>
//       )}

//       {kundli.navaamsas && (
//         <ReportSection title="Navamsa Chart" icon="🌙">
//           {Object.entries(kundli.navaamsas).map(([key, val]) => (
//             <InfoRow key={key} label={key} value={val} />
//           ))}
//         </ReportSection>
//       )}

//       {kundli.description && (
//         <ReportSection title="Summary" icon="📝">
//           <InfoRow label="Details" value={kundli.description} />
//         </ReportSection>
//       )}
//     </div>
//   );
// };

// /* ⭐ NUMEROLOGY REPORT */
// const NumerologyReport = ({ data, formData }) => {
//   const report = data?.data || data || {};

//   return (
//     <div>
//       <ReportSection title="Basic Information" icon="👤">
//         <InfoRow
//           label="Name"
//           value={formData?.fullName || report?.name || "-"}
//         />
//         <InfoRow
//           label="Date of Birth"
//           value={formData?.dob || report?.dateOfBirth || "-"}
//         />
//       </ReportSection>

//       <ReportSection title="Core Numbers" icon="🔢">
//         <InfoRow
//           label="Life Path Number"
//           value={report?.lifePathNumber || "-"}
//         />
//         <InfoRow
//           label="Destiny Number"
//           value={report?.destinyNumber || "-"}
//         />
//         <InfoRow
//           label="Soul Urge Number"
//           value={report?.soulUrgeNumber || "-"}
//         />
//         <InfoRow
//           label="Personality Number"
//           value={report?.personalityNumber || "-"}
//         />
//       </ReportSection>

//       {report?.lifePathInterpretation && (
//         <ReportSection title="Life Path Interpretation" icon="✨">
//           <p style={textStyle}>{report.lifePathInterpretation}</p>
//         </ReportSection>
//       )}

//       {report?.description && (
//         <ReportSection title="Overall Personality" icon="🧠">
//           <p style={textStyle}>{report.description}</p>
//         </ReportSection>
//       )}

//       {report?.strengths && (
//         <ReportSection title="Strengths" icon="💪">
//           <p style={textStyle}>{report.strengths}</p>
//         </ReportSection>
//       )}

//       {report?.weaknesses && (
//         <ReportSection title="Weaknesses" icon="⚠️">
//           <p style={textStyle}>{report.weaknesses}</p>
//         </ReportSection>
//       )}

//       {report?.luckyNumbers && (
//         <ReportSection title="Lucky Numbers" icon="🍀">
//           <p style={textStyle}>
//             {Array.isArray(report.luckyNumbers)
//               ? report.luckyNumbers.join(", ")
//               : report.luckyNumbers}
//           </p>
//         </ReportSection>
//       )}

//       {report?.luckyColor && (
//         <ReportSection title="Lucky Color" icon="🎨">
//           <p style={textStyle}>{report.luckyColor}</p>
//         </ReportSection>
//       )}

//       {report?.luckyDays && (
//         <ReportSection title="Lucky Days" icon="📅">
//           <p style={textStyle}>
//             {Array.isArray(report.luckyDays)
//               ? report.luckyDays.join(", ")
//               : report.luckyDays}
//           </p>
//         </ReportSection>
//       )}

//       {report?.luckyDirection && (
//         <ReportSection title="Lucky Direction" icon="🧭">
//           <p style={textStyle}>{report.luckyDirection}</p>
//         </ReportSection>
//       )}
//     </div>
//   );
// };

// /* ⭐ ZODIAC REPORT */
// const ZodiacReport = ({ data, formData }) => {
//   const report = data?.data || data || {};

//   const zodiac =
//     report?.zodiac ||
//     report?.zodiacSign ||
//     report?.sunSign ||
//     report?.sign ||
//     "-";

//   return (
//     <div>
//       <ReportSection title="Basic Information" icon="👤">
//         <InfoRow
//           label="Name"
//           value={formData.fullName || report?.name || "-"}
//         />
//         <InfoRow
//           label="Date of Birth"
//           value={formData.dob || report?.dateOfBirth || "-"}
//         />
//         <InfoRow
//           label="Time of Birth"
//           value={formData.timeSlot || report?.timeOfBirth || "-"}
//         />
//         <InfoRow
//           label="Place of Birth"
//           value={formData.birthPlace || report?.placeOfBirth || "-"}
//         />
//       </ReportSection>

//       <ReportSection title="Zodiac Sign" icon="♓">
//         <InfoRow label="Zodiac Sign" value={zodiac} />
//       </ReportSection>

//       {report?.sunSignTraits && (
//         <ReportSection title="Sun Sign Traits" icon="☀️">
//           <p style={textStyle}>{report.sunSignTraits}</p>
//         </ReportSection>
//       )}

//       {report?.moonSignTraits && (
//         <ReportSection title="Moon Sign Traits" icon="🌙">
//           <p style={textStyle}>{report.moonSignTraits}</p>
//         </ReportSection>
//       )}

//       {report?.risingSignTraits && (
//         <ReportSection title="Rising Sign Traits" icon="⬆️">
//           <p style={textStyle}>{report.risingSignTraits}</p>
//         </ReportSection>
//       )}

//       {report?.compatibility && (
//         <ReportSection title="Compatibility" icon="💕">
//           <p style={textStyle}>{report.compatibility}</p>
//         </ReportSection>
//       )}
//     </div>
//   );
// };

// /* ⭐ MANGLIK REPORT */
// const ManglikReport = ({ data, formData }) => {
//   const report = data?.data || data || {};

//   const isManglik =
//     report?.isManglik ||
//     report?.manglik ||
//     report?.hasDosha ||
//     report?.mangalDosha?.hasDosha ||
//     report?.dosha?.hasDosha ||
//     false;

//   const doshaData =
//     report?.mangalDosha || report?.dosha || report?.dosha_details || report;

//   return (
//     <div>
//       <ReportSection title="Basic Information" icon="👤">
//         <InfoRow
//           label="Name"
//           value={formData.fullName || report?.name || "-"}
//         />
//         <InfoRow
//           label="Date of Birth"
//           value={formData.dob || report?.dateOfBirth || "-"}
//         />
//         <InfoRow
//           label="Time of Birth"
//           value={formData.timeSlot || report?.timeOfBirth || "-"}
//         />
//         <InfoRow
//           label="Place of Birth"
//           value={formData.birthPlace || report?.placeOfBirth || "-"}
//         />
//       </ReportSection>

//       <ReportSection title="Manglik Status" icon="🔴">
//         <div style={{ textAlign: "center", margin: "2rem 0" }}>
//           <div
//             style={{
//               fontSize: "2.6rem",
//               fontWeight: "bold",
//               color: isManglik ? "#ff4444" : "#44ff44",
//             }}
//           >
//             {isManglik ? "✓ Yes, Manglik" : "✗ No, Not Manglik"}
//           </div>

//           {doshaData?.description && (
//             <p style={{ ...textStyle, marginTop: "1rem" }}>
//               {doshaData.description}
//             </p>
//           )}
//         </div>
//       </ReportSection>

//       {isManglik && (
//         <>
//           <ReportSection title="Manglik Dosha Details" icon="⚠️">
//             <InfoRow
//               label="Mars House"
//               value={doshaData?.house || doshaData?.marsHouse || "-"}
//             />
//             <InfoRow
//               label="Dosha Type"
//               value={doshaData?.doshaType || doshaData?.dosha_type || "-"}
//             />
//             <InfoRow
//               label="Intensity"
//               value={doshaData?.intensity || "-"}
//             />
//             <InfoRow
//               label="Affected Planet"
//               value={doshaData?.planet || "Mars"}
//             />
//             <InfoRow
//               label="Has Exception"
//               value={doshaData?.hasException ? "Yes" : "No"}
//             />
//           </ReportSection>

//           {doshaData?.effects && (
//             <ReportSection title="Effects" icon="📊">
//               <p style={textStyle}>{doshaData.effects}</p>
//             </ReportSection>
//           )}

//           {doshaData?.remedies && (
//             <ReportSection title="Remedies" icon="🙏">
//               <p style={textStyle}>{doshaData.remedies}</p>
//             </ReportSection>
//           )}
//         </>
//       )}

//       {!isManglik && (
//         <ReportSection title="Analysis" icon="✅">
//           <p style={textStyle}>
//             No Manglik Dosha detected. Marriage compatibility is favourable.
//           </p>
//         </ReportSection>
//       )}
//     </div>
//   );
// };

// /* ⭐ HOROSCOPE REPORT */
// const HoroscopeReport = ({ data, formData }) => {
//   const reportData = data?.data || data || {};
//   return (
//     <div>
//       <ReportSection title="Horoscope Overview" icon="🔮">
//         <InfoRow label="Name" value={formData.fullName} />
//         <InfoRow label="Date of Birth" value={formData.dob} />
//         <InfoRow label="Zodiac Sign" value={reportData?.zodiacSign} />
//       </ReportSection>

//       {reportData?.monthlyPrediction && (
//         <ReportSection title="This Month's Prediction" icon="📆">
//           <p style={textStyle}>{reportData.monthlyPrediction}</p>
//         </ReportSection>
//       )}

//       {reportData?.love && (
//         <ReportSection title="Love & Romance" icon="💕">
//           <p style={textStyle}>{reportData.love}</p>
//         </ReportSection>
//       )}

//       {reportData?.career && (
//         <ReportSection title="Career & Money" icon="💰">
//           <p style={textStyle}>{reportData.career}</p>
//         </ReportSection>
//       )}

//       {reportData?.health && (
//         <ReportSection title="Health & Wellness" icon="🧘">
//           <p style={textStyle}>{reportData.health}</p>
//         </ReportSection>
//       )}

//       <ReportSection title="Lucky Factors" icon="🍀">
//         <InfoRow label="Lucky Day" value={reportData?.luckyDay} />
//         <InfoRow label="Lucky Number" value={reportData?.luckyNumber} />
//         <InfoRow label="Lucky Color" value={reportData?.luckyColor} />
//       </ReportSection>

//       {reportData?.advice && (
//         <ReportSection title="Advice" icon="🌟">
//           <p style={textStyle}>{reportData.advice}</p>
//         </ReportSection>
//       )}
//     </div>
//   );
// };

// /* GENERIC FALLBACK */
// const GenericReport = ({ data }) => {
//   const reportData = data?.data || data;
//   return (
//     <div>
//       <ReportSection title="Report Details" icon="📄">
//         {Object.entries(reportData || {})
//           .filter(([_, value]) => value && value !== "N/A")
//           .map(([key, value]) => (
//             <InfoRow
//               key={key}
//               label={key.replace(/([A-Z])/g, " $1").trim()}
//               value={
//                 typeof value === "object"
//                   ? JSON.stringify(value)
//                   : String(value).substring(0, 200)
//               }
//             />
//           ))}
//       </ReportSection>
//     </div>
//   );
// };

// /* -------- STYLES (Astrology.jsx जैसा ही look) -------- */

// const formContainerStyle = {
//   background: "rgba(255,255,255,0.08)",
//   borderRadius: "20px",
//   padding: "2rem",
//   maxWidth: "650px",
//   margin: "0 auto",
//   border: "1px solid rgba(255,255,255,0.15)",
// };

// const resultContainerStyle = {
//   background: "rgba(255,255,255,0.08)",
//   borderRadius: "20px",
//   padding: "2.5rem 2rem",
//   maxWidth: "900px",
//   margin: "3rem auto 0",
//   border: "1px solid rgba(255,255,255,0.15)",
// };

// const titleStyle = {
//   background: "linear-gradient(90deg, #ff00ff, #00ffff)",
//   WebkitBackgroundClip: "text",
//   WebkitTextFillColor: "transparent",
//   marginBottom: "1.5rem",
//   fontSize: "2rem",
//   fontWeight: "700",
// };

// const inputStyle = {
//   width: "100%",
//   padding: "12px 16px",
//   borderRadius: "10px",
//   border: "1px solid rgba(255,255,255,0.2)",
//   background: "rgba(255,255,255,0.05)",
//   color: "#fff",
//   fontSize: "1rem",
//   outline: "none",
//   marginBottom: "1rem",
// };

// const submitBtnStyle = {
//   marginTop: "0.5rem",
//   padding: "14px 40px",
//   background: "linear-gradient(90deg, #ff00ff, #00ffff)",
//   border: "none",
//   borderRadius: "30px",
//   color: "#fff",
//   fontWeight: 600,
//   cursor: "pointer",
//   fontSize: "1.05rem",
//   width: "100%",
// };

// const sectionStyle = {
//   background: "rgba(255,255,255,0.05)",
//   borderRadius: "15px",
//   padding: "1.5rem",
//   marginBottom: "1.5rem",
//   border: "1px solid rgba(255,255,255,0.1)",
// };

// const sectionTitleStyle = {
//   fontSize: "1.4rem",
//   fontWeight: "600",
//   color: "#00ffff",
//   marginBottom: "1rem",
//   display: "flex",
//   alignItems: "center",
// };

// const sectionContentStyle = {
//   fontSize: "1rem",
//   lineHeight: "1.8",
// };

// const infoRowStyle = {
//   display: "flex",
//   justifyContent: "space-between",
//   padding: "0.75rem 0",
//   borderBottom: "1px solid rgba(255,255,255,0.05)",
// };

// const labelStyle = {
//   color: "#aaa",
//   fontWeight: "500",
// };

// const valueStyle = {
//   color: "#fff",
//   fontWeight: "600",
//   textAlign: "right",
//   maxWidth: "55%",
//   wordBreak: "break-word",
// };

// const textStyle = {
//   color: "#ddd",
//   lineHeight: "1.8",
//   marginBottom: "0.5rem",
// };

// import React, { useState } from "react";
// import { useParams } from "react-router-dom";

// import {
//   KundliAPI,
//   NumerologyAPI,
//   ZodiacAPI,
//   ManglikAPI,
//   HoroscopeAPI,
// } from "../api/apiService";

// export default function FreeCalculatorPage() {
//   const { type } = useParams();
//   const [formData, setFormData] = useState({});
//   const [result, setResult] = useState(null);
//   const [loading, setLoading] = useState(false);

//   console.log("FreeCalculatorPage TYPE =>", type);

//   const calcName = type
//     ?.replace(/-/g, " ")
//     ?.replace(/\b\w/g, (c) => c.toUpperCase());

//   // कौन से fields दिखने हैं किस calculator में
//   const fields = {
//     kundli: ["fullName", "dob", "timeSlot", "birthPlace"],
//     numerology: ["fullName", "dob"],
//     "zodiac-calculator": ["fullName", "dob", "timeSlot", "birthPlace"],
//     horoscope: ["fullName", "dob", "timeSlot", "birthPlace"],
//     "manglik-calculator": ["fullName", "dob", "timeSlot", "birthPlace"],
//   };

//   // API mapping
//   const apiMap = {
//     kundli: KundliAPI,
//     numerology: NumerologyAPI,
//     "zodiac-calculator": ZodiacAPI,
//     horoscope: HoroscopeAPI,
//     "manglik-calculator": ManglikAPI,
//   };

//   const handleSubmit = async () => {
//     if (!apiMap[type]) {
//       setResult({ error: "This calculator is not available" });
//       return;
//     }

//     // simple empty check
//     for (let key of fields[type]) {
//       if (!formData[key]) {
//         alert(`Please enter ${key}`);
//         return;
//       }
//     }

//     setLoading(true);
//     setResult(null);

//     try {
//       let payload = {};

//       // Payload को थोड़ा smart बनाते हैं (Astrology.jsx के जैसा)
//       if (
//         type === "kundli" ||
//         type === "zodiac-calculator" ||
//         type === "horoscope" ||
//         type === "manglik-calculator"
//       ) {
//         payload = {
//           name: formData.fullName,
//           dateOfBirth: formData.dob,
//           timeOfBirth: formData.timeSlot,
//           placeOfBirth: formData.birthPlace,
//         };
//       } else if (type === "numerology") {
//         payload = {
//           name: formData.fullName,
//           dateOfBirth: formData.dob,
//         };
//       } else {
//         payload = { ...formData };
//       }

//       const response = await apiMap[type].calculate(payload);
//       setResult(response.data || response);
//     } catch (err) {
//       setResult({
//         error: err?.response?.data?.message || "Failed to generate report",
//       });
//     }
//     setLoading(false);
//   };

//   const handleChange = (e) => {
//     setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   // अगर गलत type है
//   if (!fields[type]) {
//     return (
//       <div
//         style={{
//           minHeight: "100vh",
//           background: "radial-gradient(circle at top, #0a0018, #1e003f)",
//           color: "#fff",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           fontFamily: "'Poppins', sans-serif",
//         }}
//       >
//         <h2 style={{ color: "red", textAlign: "center" }}>
//           ❌ Invalid Calculator Type
//         </h2>
//       </div>
//     );
//   }

//   const renderReport = () => {
//     if (!result) return null;

//     if (result.error) {
//       return (
//         <div style={{ padding: "2rem", textAlign: "center", color: "#ff6b6b" }}>
//           <h3>❌ Error Processing Report</h3>
//           <p>{result.error}</p>
//         </div>
//       );
//     }

//     switch (type) {
//       case "kundli":
//         return <KundliReport data={result} formData={formData} />;

//       case "numerology":
//         return <NumerologyReport data={result} formData={formData} />;

//       case "zodiac-calculator":
//         return <ZodiacReport data={result} formData={formData} />;

//       case "manglik-calculator":
//         return <ManglikReport data={result} formData={formData} />;

//       case "horoscope":
//         return <HoroscopeReport data={result} formData={formData} />;

//       default:
//         return <GenericReport data={result} formData={formData} />;
//     }
//   };

//   return (
//     <div
//       style={{
//         minHeight: "100vh",
//         background: "radial-gradient(circle at top, #0a0018, #1e003f)",
//         padding: "2rem 1.5rem 4rem",
//         color: "#fff",
//         fontFamily: "'Poppins', sans-serif",
//       }}
//     >
//       {/* TITLE */}
//       <h1
//         style={{
//           fontSize: "2.8rem",
//           textAlign: "center",
//           background: "linear-gradient(90deg,#ff00ff,#00ffff)",
//           WebkitBackgroundClip: "text",
//           WebkitTextFillColor: "transparent",
//           marginBottom: "1rem",
//           fontWeight: 700,
//         }}
//       >
//         {calcName}
//       </h1>

//       <p
//         style={{
//           textAlign: "center",
//           color: "#ccc",
//           maxWidth: "700px",
//           margin: "0 auto 2rem",
//         }}
//       >
//         Use this free calculator to generate your personalised{" "}
//         <strong>{calcName}</strong> report with modern Vedic insights.
//       </p>

//       {/* FORM CARD */}
//       <div style={formContainerStyle}>
//         {fields[type].map((field) => (
//           <input
//             key={field}
//             name={field}
//             placeholder={field
//               .replace(/([A-Z])/g, " $1")
//               .replace("-", " ")
//               .toUpperCase()}
//             type={
//               field === "dob" ? "date" : field === "timeSlot" ? "time" : "text"
//             }
//             onChange={handleChange}
//             value={formData[field] || ""}
//             style={inputStyle}
//           />
//         ))}

//         <button
//           onClick={handleSubmit}
//           disabled={loading}
//           style={submitBtnStyle}
//         >
//           {loading ? "Processing..." : "✨ Generate Free Report"}
//         </button>
//       </div>

//       {/* RESULT SECTION */}
//       {result && (
//         <div style={resultContainerStyle}>
//           <h2 style={titleStyle}>📊 {calcName} Report</h2>
//           {renderReport()}
//         </div>
//       )}
//     </div>
//   );
// }

// const ReportSection = ({ title, children, icon }) => (
//   <div style={sectionStyle}>
//     <h3 style={sectionTitleStyle}>
//       {icon && <span style={{ marginRight: "8px" }}>{icon}</span>}
//       {title}
//     </h3>
//     <div style={sectionContentStyle}>{children}</div>
//   </div>
// );

// const InfoRow = ({ label, value }) => (
//   <div style={infoRowStyle}>
//     <span style={labelStyle}>{label}:</span>
//     <span style={valueStyle}>
//       {value && value !== "N/A" ? value : "Not Provided"}
//     </span>
//   </div>
// );

// /* ⭐ KUNDLI REPORT */
// const KundliReport = ({ data, formData }) => {
//   const kundli =
//     data?.kundli?.kundliData || data?.kundliData || data?.data || data || {};

//   return (
//     <div>
//       <ReportSection title="Basic Information" icon="👤">
//         <InfoRow label="Name" value={formData?.fullName || data?.name || "-"} />
//         <InfoRow
//           label="Date of Birth"
//           value={formData?.dob || data?.dateOfBirth || "-"}
//         />
//         <InfoRow
//           label="Time of Birth"
//           value={formData?.timeSlot || data?.timeOfBirth || "-"}
//         />
//         <InfoRow
//           label="Place of Birth"
//           value={formData?.birthPlace || data?.placeOfBirth || "-"}
//         />
//       </ReportSection>

//       {(kundli.sunSign ||
//         kundli.moonSign ||
//         kundli.ascendant ||
//         kundli.zodiac) && (
//         <ReportSection title="Zodiac Details" icon="🌞">
//           <InfoRow label="Sun Sign" value={kundli.sunSign || "-"} />
//           <InfoRow label="Moon Sign" value={kundli.moonSign || "-"} />
//           <InfoRow label="Ascendant (Lagna)" value={kundli.ascendant || "-"} />
//           <InfoRow label="Zodiac Sign" value={kundli.zodiac || "-"} />
//         </ReportSection>
//       )}

//       {(kundli.nakshatra || kundli.nakshatraLord) && (
//         <ReportSection title="Nakshatra Details" icon="✨">
//           <InfoRow label="Nakshatra" value={kundli.nakshatra || "-"} />
//           <InfoRow
//             label="Nakshatra Lord"
//             value={kundli.nakshatraLord || "-"}
//           />
//         </ReportSection>
//       )}

//       {kundli.planets && Object.keys(kundli.planets).length > 0 && (
//         <ReportSection title="Planetary Positions" icon="🪐">
//           {Object.entries(kundli.planets).map(([planet, details]) => (
//             <InfoRow
//               key={planet}
//               label={planet}
//               value={`${details?.sign || ""} ${
//                 details?.degree ? details.degree + "°" : ""
//               }`}
//             />
//           ))}
//         </ReportSection>
//       )}

//       {kundli.houses && Object.keys(kundli.houses).length > 0 && (
//         <ReportSection title="House Details" icon="🏠">
//           {Object.entries(kundli.houses).map(([house, sign]) => (
//             <InfoRow key={house} label={`House ${house}`} value={sign || "-"} />
//           ))}
//         </ReportSection>
//       )}

//       {kundli.mangalDosha && (
//         <ReportSection title="Mangal Dosha" icon="🔥">
//           <InfoRow
//             label="Status"
//             value={kundli.mangalDosha.hasDosha ? "Present" : "Not Present"}
//           />
//           <InfoRow
//             label="Description"
//             value={kundli.mangalDosha.description || "-"}
//           />
//         </ReportSection>
//       )}

//       {kundli.yogas?.length > 0 && (
//         <ReportSection title="Yogas in Kundli" icon="🔯">
//           {kundli.yogas.map((y, i) => (
//             <InfoRow key={i} label={y.name} value={y.description} />
//           ))}
//         </ReportSection>
//       )}

//       {kundli.navaamsas && (
//         <ReportSection title="Navamsa Chart" icon="🌙">
//           {Object.entries(kundli.navaamsas).map(([key, val]) => (
//             <InfoRow key={key} label={key} value={val} />
//           ))}
//         </ReportSection>
//       )}

//       {kundli.description && (
//         <ReportSection title="Summary" icon="📝">
//           <InfoRow label="Details" value={kundli.description} />
//         </ReportSection>
//       )}
//     </div>
//   );
// };

// /* ⭐ NUMEROLOGY REPORT */
// const NumerologyReport = ({ data, formData }) => {
//   const report = data?.data || data || {};

//   return (
//     <div>
//       <ReportSection title="Basic Information" icon="👤">
//         <InfoRow
//           label="Name"
//           value={formData?.fullName || report?.name || "-"}
//         />
//         <InfoRow
//           label="Date of Birth"
//           value={formData?.dob || report?.dateOfBirth || "-"}
//         />
//       </ReportSection>

//       <ReportSection title="Core Numbers" icon="🔢">
//         <InfoRow
//           label="Life Path Number"
//           value={report?.lifePathNumber || "-"}
//         />
//         <InfoRow
//           label="Destiny Number"
//           value={report?.destinyNumber || "-"}
//         />
//         <InfoRow
//           label="Soul Urge Number"
//           value={report?.soulUrgeNumber || "-"}
//         />
//         <InfoRow
//           label="Personality Number"
//           value={report?.personalityNumber || "-"}
//         />
//       </ReportSection>

//       {report?.lifePathInterpretation && (
//         <ReportSection title="Life Path Interpretation" icon="✨">
//           <p style={textStyle}>{report.lifePathInterpretation}</p>
//         </ReportSection>
//       )}

//       {report?.description && (
//         <ReportSection title="Overall Personality" icon="🧠">
//           <p style={textStyle}>{report.description}</p>
//         </ReportSection>
//       )}

//       {report?.strengths && (
//         <ReportSection title="Strengths" icon="💪">
//           <p style={textStyle}>{report.strengths}</p>
//         </ReportSection>
//       )}

//       {report?.weaknesses && (
//         <ReportSection title="Weaknesses" icon="⚠️">
//           <p style={textStyle}>{report.weaknesses}</p>
//         </ReportSection>
//       )}

//       {report?.luckyNumbers && (
//         <ReportSection title="Lucky Numbers" icon="🍀">
//           <p style={textStyle}>
//             {Array.isArray(report.luckyNumbers)
//               ? report.luckyNumbers.join(", ")
//               : report.luckyNumbers}
//           </p>
//         </ReportSection>
//       )}

//       {report?.luckyColor && (
//         <ReportSection title="Lucky Color" icon="🎨">
//           <p style={textStyle}>{report.luckyColor}</p>
//         </ReportSection>
//       )}

//       {report?.luckyDays && (
//         <ReportSection title="Lucky Days" icon="📅">
//           <p style={textStyle}>
//             {Array.isArray(report.luckyDays)
//               ? report.luckyDays.join(", ")
//               : report.luckyDays}
//           </p>
//         </ReportSection>
//       )}

//       {report?.luckyDirection && (
//         <ReportSection title="Lucky Direction" icon="🧭">
//           <p style={textStyle}>{report.luckyDirection}</p>
//         </ReportSection>
//       )}
//     </div>
//   );
// };

// /* ⭐ ZODIAC REPORT */
// const ZodiacReport = ({ data, formData }) => {
//   const report = data?.data || data || {};

//   const zodiac =
//     report?.zodiac ||
//     report?.zodiacSign ||
//     report?.sunSign ||
//     report?.sign ||
//     "-";

//   return (
//     <div>
//       <ReportSection title="Basic Information" icon="👤">
//         <InfoRow
//           label="Name"
//           value={formData.fullName || report?.name || "-"}
//         />
//         <InfoRow
//           label="Date of Birth"
//           value={formData.dob || report?.dateOfBirth || "-"}
//         />
//         <InfoRow
//           label="Time of Birth"
//           value={formData.timeSlot || report?.timeOfBirth || "-"}
//         />
//         <InfoRow
//           label="Place of Birth"
//           value={formData.birthPlace || report?.placeOfBirth || "-"}
//         />
//       </ReportSection>

//       <ReportSection title="Zodiac Sign" icon="♓">
//         <InfoRow label="Zodiac Sign" value={zodiac} />
//       </ReportSection>

//       {report?.sunSignTraits && (
//         <ReportSection title="Sun Sign Traits" icon="☀️">
//           <p style={textStyle}>{report.sunSignTraits}</p>
//         </ReportSection>
//       )}

//       {report?.moonSignTraits && (
//         <ReportSection title="Moon Sign Traits" icon="🌙">
//           <p style={textStyle}>{report.moonSignTraits}</p>
//         </ReportSection>
//       )}

//       {report?.risingSignTraits && (
//         <ReportSection title="Rising Sign Traits" icon="⬆️">
//           <p style={textStyle}>{report.risingSignTraits}</p>
//         </ReportSection>
//       )}

//       {report?.compatibility && (
//         <ReportSection title="Compatibility" icon="💕">
//           <p style={textStyle}>{report.compatibility}</p>
//         </ReportSection>
//       )}
//     </div>
//   );
// };

// /* ⭐ MANGLIK REPORT */
// const ManglikReport = ({ data, formData }) => {
//   const report = data?.data || data || {};

//   const isManglik =
//     report?.isManglik ||
//     report?.manglik ||
//     report?.hasDosha ||
//     report?.mangalDosha?.hasDosha ||
//     report?.dosha?.hasDosha ||
//     false;

//   const doshaData =
//     report?.mangalDosha || report?.dosha || report?.dosha_details || report;

//   return (
//     <div>
//       <ReportSection title="Basic Information" icon="👤">
//         <InfoRow
//           label="Name"
//           value={formData.fullName || report?.name || "-"}
//         />
//         <InfoRow
//           label="Date of Birth"
//           value={formData.dob || report?.dateOfBirth || "-"}
//         />
//         <InfoRow
//           label="Time of Birth"
//           value={formData.timeSlot || report?.timeOfBirth || "-"}
//         />
//         <InfoRow
//           label="Place of Birth"
//           value={formData.birthPlace || report?.placeOfBirth || "-"}
//         />
//       </ReportSection>

//       <ReportSection title="Manglik Status" icon="🔴">
//         <div style={{ textAlign: "center", margin: "2rem 0" }}>
//           <div
//             style={{
//               fontSize: "2.6rem",
//               fontWeight: "bold",
//               color: isManglik ? "#ff4444" : "#44ff44",
//             }}
//           >
//             {isManglik ? "✓ Yes, Manglik" : "✗ No, Not Manglik"}
//           </div>

//           {doshaData?.description && (
//             <p style={{ ...textStyle, marginTop: "1rem" }}>
//               {doshaData.description}
//             </p>
//           )}
//         </div>
//       </ReportSection>

//       {isManglik && (
//         <>
//           <ReportSection title="Manglik Dosha Details" icon="⚠️">
//             <InfoRow
//               label="Mars House"
//               value={doshaData?.house || doshaData?.marsHouse || "-"}
//             />
//             <InfoRow
//               label="Dosha Type"
//               value={doshaData?.doshaType || doshaData?.dosha_type || "-"}
//             />
//             <InfoRow
//               label="Intensity"
//               value={doshaData?.intensity || "-"}
//             />
//             <InfoRow
//               label="Affected Planet"
//               value={doshaData?.planet || "Mars"}
//             />
//             <InfoRow
//               label="Has Exception"
//               value={doshaData?.hasException ? "Yes" : "No"}
//             />
//           </ReportSection>

//           {doshaData?.effects && (
//             <ReportSection title="Effects" icon="📊">
//               <p style={textStyle}>{doshaData.effects}</p>
//             </ReportSection>
//           )}

//           {doshaData?.remedies && (
//             <ReportSection title="Remedies" icon="🙏">
//               <p style={textStyle}>{doshaData.remedies}</p>
//             </ReportSection>
//           )}
//         </>
//       )}

//       {!isManglik && (
//         <ReportSection title="Analysis" icon="✅">
//           <p style={textStyle}>
//             No Manglik Dosha detected. Marriage compatibility is favourable.
//           </p>
//         </ReportSection>
//       )}
//     </div>
//   );
// };

// /* ⭐ HOROSCOPE REPORT */
// const HoroscopeReport = ({ data, formData }) => {
//   const reportData = data?.data || data || {};
//   return (
//     <div>
//       <ReportSection title="Horoscope Overview" icon="🔮">
//         <InfoRow label="Name" value={formData.fullName} />
//         <InfoRow label="Date of Birth" value={formData.dob} />
//         <InfoRow label="Zodiac Sign" value={reportData?.zodiacSign} />
//       </ReportSection>

//       {reportData?.monthlyPrediction && (
//         <ReportSection title="This Month's Prediction" icon="📆">
//           <p style={textStyle}>{reportData.monthlyPrediction}</p>
//         </ReportSection>
//       )}

//       {reportData?.love && (
//         <ReportSection title="Love & Romance" icon="💕">
//           <p style={textStyle}>{reportData.love}</p>
//         </ReportSection>
//       )}

//       {reportData?.career && (
//         <ReportSection title="Career & Money" icon="💰">
//           <p style={textStyle}>{reportData.career}</p>
//         </ReportSection>
//       )}

//       {reportData?.health && (
//         <ReportSection title="Health & Wellness" icon="🧘">
//           <p style={textStyle}>{reportData.health}</p>
//         </ReportSection>
//       )}

//       <ReportSection title="Lucky Factors" icon="🍀">
//         <InfoRow label="Lucky Day" value={reportData?.luckyDay} />
//         <InfoRow label="Lucky Number" value={reportData?.luckyNumber} />
//         <InfoRow label="Lucky Color" value={reportData?.luckyColor} />
//       </ReportSection>

//       {reportData?.advice && (
//         <ReportSection title="Advice" icon="🌟">
//           <p style={textStyle}>{reportData.advice}</p>
//         </ReportSection>
//       )}
//     </div>
//   );
// };

// /* GENERIC FALLBACK */
// const GenericReport = ({ data }) => {
//   const reportData = data?.data || data;
//   return (
//     <div>
//       <ReportSection title="Report Details" icon="📄">
//         {Object.entries(reportData || {})
//           .filter(([_, value]) => value && value !== "N/A")
//           .map(([key, value]) => (
//             <InfoRow
//               key={key}
//               label={key.replace(/([A-Z])/g, " $1").trim()}
//               value={
//                 typeof value === "object"
//                   ? JSON.stringify(value)
//                   : String(value).substring(0, 200)
//               }
//             />
//           ))}
//       </ReportSection>
//     </div>
//   );
// };

// /* -------- STYLES -------- */

// const formContainerStyle = {
//   background: "rgba(255,255,255,0.08)",
//   borderRadius: "20px",
//   padding: "2rem",
//   maxWidth: "650px",
//   margin: "0 auto",
//   border: "1px solid rgba(255,255,255,0.15)",
// };

// const resultContainerStyle = {
//   background: "rgba(255,255,255,0.08)",
//   borderRadius: "20px",
//   padding: "2.5rem 2rem",
//   maxWidth: "900px",
//   margin: "3rem auto 0",
//   border: "1px solid rgba(255,255,255,0.15)",
// };

// const titleStyle = {
//   background: "linear-gradient(90deg, #ff00ff, #00ffff)",
//   WebkitBackgroundClip: "text",
//   WebkitTextFillColor: "transparent",
//   marginBottom: "1.5rem",
//   fontSize: "2rem",
//   fontWeight: "700",
// };

// const inputStyle = {
//   width: "100%",
//   padding: "12px 16px",
//   borderRadius: "10px",
//   border: "1px solid rgba(255,255,255,0.2)",
//   background: "rgba(255,255,255,0.05)",
//   color: "#fff",
//   fontSize: "1rem",
//   outline: "none",
//   marginBottom: "1rem",
// };

// const submitBtnStyle = {
//   marginTop: "0.5rem",
//   padding: "14px 40px",
//   background: "linear-gradient(90deg, #ff00ff, #00ffff)",
//   border: "none",
//   borderRadius: "30px",
//   color: "#fff",
//   fontWeight: 600,
//   cursor: "pointer",
//   fontSize: "1.05rem",
//   width: "100%",
// };

// const sectionStyle = {
//   background: "rgba(255,255,255,0.05)",
//   borderRadius: "15px",
//   padding: "1.5rem",
//   marginBottom: "1.5rem",
//   border: "1px solid rgba(255,255,255,0.1)",
// };

// const sectionTitleStyle = {
//   fontSize: "1.4rem",
//   fontWeight: "600",
//   color: "#00ffff",
//   marginBottom: "1rem",
//   display: "flex",
//   alignItems: "center",
// };

// const sectionContentStyle = {
//   fontSize: "1rem",
//   lineHeight: "1.8",
// };

// const infoRowStyle = {
//   display: "flex",
//   justifyContent: "space-between",
//   padding: "0.75rem 0",
//   borderBottom: "1px solid rgba(255,255,255,0.05)",
// };

// const labelStyle = {
//   color: "#aaa",
//   fontWeight: "500",
// };

// const valueStyle = {
//   color: "#fff",
//   fontWeight: "600",
//   textAlign: "right",
//   maxWidth: "55%",
//   wordBreak: "break-word",
// };

// const textStyle = {
//   color: "#ddd",
//   lineHeight: "1.8",
//   marginBottom: "0.5rem",
// };


import React, { useState } from "react";
import { Loader2, Sparkles } from "lucide-react";


import {
  KundliAPI,
  NumerologyAPI,
  ZodiacAPI,
  ManglikAPI,
  HoroscopeAPI,
} from "../api/apiService";

// ============ FREE CALCULATOR LIST ============

const freeCalculators = [
  {
    label: "Kundli",
    deliverable: "Chart",
    price: "Free",
    desc: "Generate your complete birth chart with planetary positions",
  },
  {
    label: "Numerology",
    deliverable: "Report",
    price: "Free",
    desc: "Discover your life path number and destiny insights",
  },
  {
    label: "Zodiac Calculator",
    deliverable: "Report",
    price: "Free",
    desc: "Find your sun, moon, and rising zodiac signs",
  },
  {
    label: "Manglik Calculator",
    deliverable: "Report",
    price: "Free",
    desc: "Check Manglik dosha and its effects on your life",
  },
  {
    label: "Horoscope",
    deliverable: "Report",
    price: "Free",
    desc: "Read your detailed horoscope and predictions",
  },
];

const FreeCalculatorPage = () => {
  const [step, setStep] = useState(1);
  const [selectedCalculator, setSelectedCalculator] = useState(null);
  const [formData, setFormData] = useState({});
  const [backendData, setBackendData] = useState(null);
  const [loading, setLoading] = useState(false);

  // select calculator → go to form
  const handleCalculatorSelect = (calc) => {
    setSelectedCalculator(calc);
    setFormData({});
    setBackendData(null);
    setStep(2);
  };

  // form change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // submit → call correct free API
  const handleFormSubmit = async () => {
    if (!selectedCalculator) return;

    setLoading(true);

    try {
      let response;
      let payload = { ...formData };

      switch (selectedCalculator.label) {
        case "Kundli":
        case "Zodiac Calculator":
        case "Manglik Calculator":
        case "Horoscope":
          payload = {
            name: formData.fullName,
            dateOfBirth: formData.dob,
            timeOfBirth: formData.timeSlot,
            placeOfBirth: formData.birthPlace,
          };
          break;

        case "Numerology":
          payload = {
            name: formData.fullName,
            dateOfBirth: formData.dob,
          };
          break;

        default:
          payload = { ...formData };
      }

      switch (selectedCalculator.label) {
        case "Kundli":
          response = await KundliAPI.calculate(payload);
          break;
        case "Numerology":
          response = await NumerologyAPI.calculate(payload);
          break;
        case "Zodiac Calculator":
          response = await ZodiacAPI.calculate(payload);
          break;
        case "Manglik Calculator":
          response = await ManglikAPI.calculate(payload);
          break;
        case "Horoscope":
          response = await HoroscopeAPI.calculate(payload);
          break;
        default:
          response = { data: { message: "No API mapped!" } };
      }

      setBackendData(response.data || response);
      setStep(3);
    } catch (err) {
      setBackendData({
        error: err?.response?.data?.message || "Something went wrong!",
      });
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
    if (!backendData) return null;

    if (backendData.error) {
      return (
        <div
          style={{
            padding: "2rem",
            textAlign: "center",
            color: "#ff6b6b",
          }}
        >
          <h3>❌ Error Processing Report</h3>
          <p>{backendData.error}</p>
        </div>
      );
    }

    if (!selectedCalculator) {
      return <GenericReport data={backendData} />;
    }

    switch (selectedCalculator.label) {
      case "Kundli":
        return <KundliReport data={backendData} formData={formData} />;
      case "Numerology":
        return <NumerologyReport data={backendData} formData={formData} />;
      case "Zodiac Calculator":
        return <ZodiacReport data={backendData} formData={formData} />;
      case "Manglik Calculator":
        return <ManglikReport data={backendData} formData={formData} />;
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
        paddingBottom: "3rem",
      }}
    >
 {/* TOP LEFT BACK BUTTON */}
<div 
  style={{
    position: "absolute",
    top: "20px",
    left: "20px",   // 👉 RIGHT की जगह LEFT कर दिया
    zIndex: 20,
  }}
>
  <button
    onClick={() => window.history.back()}
    style={{
      padding: "10px 20px",
      background: "rgba(255,255,255,0.1)",
      borderRadius: "30px",
      border: "1px solid rgba(255,255,255,0.3)",
      color: "#fff",
      fontWeight: 500,
      cursor: "pointer",
      backdropFilter: "blur(4px)",
      transition: "0.3s",
    }}
    onMouseEnter={(e) => {
      e.target.style.background = "rgba(255,255,255,0.25)";
    }}
    onMouseLeave={(e) => {
      e.target.style.background = "rgba(255,255,255,0.1)";
    }}
  >
    ⬅ Back
  </button>
</div>

      {/* HEADER */}
      <div style={{ textAlign: "center", padding: "4rem 1.5rem 2rem" }}>
        <h1
          style={{
            fontSize: "2.6rem",
            fontWeight: 700,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
          }}
        >
          <Sparkles size={26} />
          Free Astro Calculators
        </h1>
        <p style={{ fontSize: "1.1rem", color: "#ccc" }}>
          100% Free · No login required · Instant personalised reports
        </p>
      </div>

      {/* STEP 1: CALCULATOR SELECTION */}
      {step === 1 && (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "1.8rem",
            padding: "0 1.5rem",
            maxWidth: "1100px",
            margin: "0 auto 3rem",
          }}
        >
          {freeCalculators.map((calc, i) => (
            <div
              key={i}
              onClick={() => handleCalculatorSelect(calc)}
              style={{
                background: "rgba(255,255,255,0.08)",
                borderRadius: "20px",
                padding: "1.8rem 1.5rem",
                cursor: "pointer",
                textAlign: "left",
                border: "1px solid rgba(255,255,255,0.12)",
                transition: "0.35s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-8px)";
                e.currentTarget.style.boxShadow =
                  "0 15px 40px rgba(255,0,255,0.25)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <h3
                style={{
                  fontSize: "1.3rem",
                  fontWeight: 600,
                  marginBottom: "0.4rem",
                }}
              >
                {calc.label}
              </h3>
              <p
                style={{
                  fontSize: "0.95rem",
                  color: "#ddd",
                  marginBottom: "0.8rem",
                }}
              >
                {calc.desc}
              </p>
              <p style={{ fontSize: "0.9rem", marginBottom: "0.3rem" }}>
                📄 {calc.deliverable}
              </p>
              <p>
                <span
                  style={{
                    color: "#00ffcc",
                    fontWeight: 600,
                  }}
                >
                  {calc.price}
                </span>
              </p>
            </div>
          ))}
        </div>
      )}

      {/* STEP 2: FORM */}
      {step === 2 && selectedCalculator && (
        <div style={formContainerStyle}>
          <h2 style={titleStyle}>{selectedCalculator.label}</h2>
          <p style={{ color: "#ccc", marginBottom: "1.5rem", fontSize: "0.98rem" }}>
            {selectedCalculator.desc}
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {/* Kundli / Zodiac / Manglik / Horoscope */}
            {[
              "Kundli",
              "Zodiac Calculator",
              "Manglik Calculator",
              "Horoscope",
            ].includes(selectedCalculator.label) && (
              <>
                <input
                  name="fullName"
                  placeholder="Full Name *"
                  onChange={handleChange}
                  value={formData.fullName || ""}
                  style={inputStyle}
                />
                <input
                  type="date"
                  name="dob"
                  onChange={handleChange}
                  value={formData.dob || ""}
                  style={inputStyle}
                />
                <input
                  type="time"
                  name="timeSlot"
                  onChange={handleChange}
                  value={formData.timeSlot || ""}
                  style={inputStyle}
                />
                <input
                  name="birthPlace"
                  placeholder="Place of Birth *"
                  onChange={handleChange}
                  value={formData.birthPlace || ""}
                  style={inputStyle}
                />
              </>
            )}

            {/* Numerology */}
            {selectedCalculator.label === "Numerology" && (
              <>
                <input
                  name="fullName"
                  placeholder="Full Name *"
                  onChange={handleChange}
                  value={formData.fullName || ""}
                  style={inputStyle}
                />
                <input
                  type="date"
                  name="dob"
                  onChange={handleChange}
                  value={formData.dob || ""}
                  style={inputStyle}
                />
              </>
            )}
          </div>

          <button
            onClick={handleFormSubmit}
            disabled={loading}
            style={submitBtnStyle}
          >
            {loading ? (
              <>
                <Loader2
                  size={20}
                  style={{ animation: "spin 1s linear infinite" }}
                />
                &nbsp; Generating...
              </>
            ) : (
              "✨ Generate Free Report"
            )}
          </button>

          <button onClick={resetForm} style={backBtnStyle}>
            ⬅ Back to Calculators
          </button>
        </div>
      )}

      {/* STEP 3: REPORT */}
      {step === 3 && selectedCalculator && (
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
// ============ SHARED REPORT WRAPPERS ============

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
    <span style={valueStyle}>
      {value && value !== "N/A" ? value : "Not Provided"}
    </span>
  </div>
);

// ============ 1. KUNDLI REPORT ============

const KundliReport = ({ data, formData }) => {
  const kundli =
    data?.kundli?.kundliData || data?.kundliData || data?.data || data || {};

  return (
    <div>
      <ReportSection title="Basic Information" icon="👤">
        <InfoRow label="Name" value={formData.fullName || data?.name || "-"} />
        <InfoRow
          label="Date of Birth"
          value={formData.dob || data?.dateOfBirth || "-"}
        />
        <InfoRow
          label="Time of Birth"
          value={formData.timeSlot || data?.timeOfBirth || "-"}
        />
        <InfoRow
          label="Place of Birth"
          value={formData.birthPlace || data?.placeOfBirth || "-"}
        />
      </ReportSection>

      {(kundli.sunSign || kundli.moonSign || kundli.ascendant || kundli.zodiac) && (
        <ReportSection title="Zodiac Details" icon="🌞">
          <InfoRow label="Sun Sign" value={kundli.sunSign || "-"} />
          <InfoRow label="Moon Sign" value={kundli.moonSign || "-"} />
          <InfoRow label="Ascendant (Lagna)" value={kundli.ascendant || "-"} />
          <InfoRow label="Zodiac Sign" value={kundli.zodiac || "-"} />
        </ReportSection>
      )}

      {(kundli.nakshatra || kundli.nakshatraLord) && (
        <ReportSection title="Nakshatra Details" icon="✨">
          <InfoRow label="Nakshatra" value={kundli.nakshatra || "-"} />
          <InfoRow
            label="Nakshatra Lord"
            value={kundli.nakshatraLord || "-"}
          />
        </ReportSection>
      )}

      {kundli.planets && Object.keys(kundli.planets).length > 0 && (
        <ReportSection title="Planetary Positions" icon="🪐">
          {Object.entries(kundli.planets).map(([planet, details]) => (
            <InfoRow
              key={planet}
              label={planet}
              value={`${details?.sign || ""} ${
                details?.degree ? details.degree + "°" : ""
              }`}
            />
          ))}
        </ReportSection>
      )}

      {kundli.houses && Object.keys(kundli.houses).length > 0 && (
        <ReportSection title="House Details" icon="🏠">
          {Object.entries(kundli.houses).map(([house, sign]) => (
            <InfoRow key={house} label={`House ${house}`} value={sign || "-"} />
          ))}
        </ReportSection>
      )}

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

      {kundli.description && (
        <ReportSection title="Summary" icon="📝">
          <InfoRow label="Details" value={kundli.description} />
        </ReportSection>
      )}
    </div>
  );
};

// ============ 2. NUMEROLOGY REPORT ============

const NumerologyReport = ({ data, formData }) => {
  const report = data?.data || data || {};

  return (
    <div>
      <ReportSection title="Basic Information" icon="👤">
        <InfoRow
          label="Name"
          value={formData.fullName || report?.name || "-"}
        />
        <InfoRow
          label="Date of Birth"
          value={formData.dob || report?.dateOfBirth || "-"}
        />
      </ReportSection>

      <ReportSection title="Core Numbers" icon="🔢">
        <InfoRow
          label="Life Path Number"
          value={report?.lifePathNumber || "-"}
        />
        <InfoRow
          label="Destiny Number"
          value={report?.destinyNumber || "-"}
        />
        <InfoRow
          label="Soul Urge Number"
          value={report?.soulUrgeNumber || "-"}
        />
        <InfoRow
          label="Personality Number"
          value={report?.personalityNumber || "-"}
        />
      </ReportSection>

      {report?.lifePathInterpretation && (
        <ReportSection title="Life Path Interpretation" icon="✨">
          <p style={textStyle}>{report.lifePathInterpretation}</p>
        </ReportSection>
      )}

      {report?.description && (
        <ReportSection title="Overall Personality" icon="🧠">
          <p style={textStyle}>{report.description}</p>
        </ReportSection>
      )}
    </div>
  );
};

// ============ 3. ZODIAC REPORT ============

const ZodiacReport = ({ data, formData }) => {
  const report = data?.data || data || {};

  const zodiac =
    report?.zodiac ||
    report?.zodiacSign ||
    report?.sunSign ||
    report?.sign ||
    "-";

  return (
    <div>
      <ReportSection title="Basic Information" icon="👤">
        <InfoRow
          label="Name"
          value={formData.fullName || report?.name || "-"}
        />
        <InfoRow
          label="Date of Birth"
          value={formData.dob || report?.dateOfBirth || "-"}
        />
        <InfoRow
          label="Time of Birth"
          value={formData.timeSlot || report?.timeOfBirth || "-"}
        />
        <InfoRow
          label="Place of Birth"
          value={formData.birthPlace || report?.placeOfBirth || "-"}
        />
      </ReportSection>

      <ReportSection title="Zodiac Sign" icon="♓">
        <InfoRow label="Zodiac Sign" value={zodiac} />
      </ReportSection>

      {report?.sunSignTraits && (
        <ReportSection title="Sun Sign Traits" icon="☀️">
          <p style={textStyle}>{report.sunSignTraits}</p>
        </ReportSection>
      )}
    </div>
  );
};

// ============ 4. MANGLIK REPORT ============

const ManglikReport = ({ data, formData }) => {
  const report = data?.data || data || {};

  const isManglik =
    report?.isManglik ||
    report?.manglik ||
    report?.hasDosha ||
    report?.mangalDosha?.hasDosha ||
    false;

  const doshaData =
    report?.mangalDosha || report?.dosha || report?.dosha_details || report;

  return (
    <div>
      <ReportSection title="Basic Information" icon="👤">
        <InfoRow
          label="Name"
          value={formData.fullName || report?.name || "-"}
        />
        <InfoRow
          label="Date of Birth"
          value={formData.dob || report?.dateOfBirth || "-"}
        />
      </ReportSection>

      <ReportSection title="Manglik Status" icon="🔴">
        <div style={{ textAlign: "center", margin: "2rem 0" }}>
          <div
            style={{
              fontSize: "2.4rem",
              fontWeight: "bold",
              color: isManglik ? "#ff4444" : "#44ff44",
            }}
          >
            {isManglik ? "✓ Yes, Manglik" : "✗ No, Not Manglik"}
          </div>

          {doshaData?.description && (
            <p style={{ ...textStyle, marginTop: "1rem" }}>
              {doshaData.description}
            </p>
          )}
        </div>
      </ReportSection>
    </div>
  );
};

// ============ 5. HOROSCOPE REPORT ============

const HoroscopeReport = ({ data, formData }) => {
  const reportData = data?.data || data || {};

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
    </div>
  );
};

// ============ 6. GENERIC FALLBACK ============

const GenericReport = ({ data }) => {
  const reportData = data?.data || data || {};
  return (
    <div>
      <ReportSection title="Report Details" icon="📄">
        {Object.entries(reportData)
          .filter(([_, value]) => value && value !== "N/A")
          .map(([key, value]) => (
            <InfoRow
              key={key}
              label={key.replace(/([A-Z])/g, " $1").trim()}
              value={
                typeof value === "object"
                  ? JSON.stringify(value)
                  : String(value).substring(0, 200)
              }
            />
          ))}
      </ReportSection>
    </div>
  );
};
// ============ STYLES (Same visual tone as Astrology.jsx) ============

const formContainerStyle = {
  background: "rgba(255,255,255,0.08)",
  borderRadius: "20px",
  padding: "2.2rem 2rem",
  maxWidth: "700px",
  margin: "0 auto 2.5rem",
  textAlign: "center",
  border: "1px solid rgba(255,255,255,0.15)",
};

const resultContainerStyle = {
  background: "rgba(255,255,255,0.08)",
  borderRadius: "20px",
  padding: "2.5rem 2rem",
  maxWidth: "900px",
  margin: "2.5rem auto 0",
  border: "1px solid rgba(255,255,255,0.15)",
};

const titleStyle = {
  background: "linear-gradient(90deg, #ff00ff, #00ffff)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  marginBottom: "1.2rem",
  fontSize: "2rem",
  fontWeight: 700,
};

const inputStyle = {
  width: "100%",
  padding: "12px 16px",
  borderRadius: "10px",
  border: "1px solid rgba(255,255,255,0.25)",
  background: "rgba(255,255,255,0.06)",
  color: "#fff",
  fontSize: "1rem",
  outline: "none",
  transition: "0.25s",
};

const submitBtnStyle = {
  marginTop: "1.8rem",
  padding: "14px 32px",
  background: "linear-gradient(90deg, #ff00ff, #00ffff)",
  border: "none",
  borderRadius: "30px",
  color: "#fff",
  fontWeight: 600,
  cursor: "pointer",
  fontSize: "1.03rem",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "8px",
};

const backBtnStyle = {
  marginTop: "1.4rem",
  padding: "10px 26px",
  background: "rgba(255,255,255,0.08)",
  borderRadius: "24px",
  border: "1px solid rgba(255,255,255,0.22)",
  color: "#fff",
  fontWeight: 500,
  cursor: "pointer",
};

const sectionStyle = {
  background: "rgba(255,255,255,0.05)",
  borderRadius: "15px",
  padding: "1.5rem",
  marginBottom: "1.5rem",
  border: "1px solid rgba(255,255,255,0.12)",
};

const sectionTitleStyle = {
  fontSize: "1.35rem",
  fontWeight: 600,
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
  padding: "0.7rem 0",
  borderBottom: "1px solid rgba(255,255,255,0.06)",
};

const labelStyle = {
  color: "#aaa",
  fontWeight: 500,
};

const valueStyle = {
  color: "#fff",
  fontWeight: 600,
  textAlign: "right",
  maxWidth: "60%",
  wordBreak: "break-word",
};

const textStyle = {
  color: "#ddd",
  lineHeight: "1.85",
  marginBottom: "0.6rem",
};

export default FreeCalculatorPage;
