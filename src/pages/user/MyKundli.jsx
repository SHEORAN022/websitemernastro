// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "../../styles/MyProfile.css"; 

// const MyKundli = () => {
//   const [user, setUser] = useState(null);
//   const [editMode, setEditMode] = useState(false);
//   const [form, setForm] = useState({});
//   const [loading, setLoading] = useState(true);

//   // ================================
//   // LOAD USER KUNDLI DETAILS
//   // ================================
//   useEffect(() => {
//     const fetchKundli = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         if (!token) return;

//         const res = await axios.get(
//           "http://localhost:7000/api/userweb/kundli/me",
//           { headers: { Authorization: `Bearer ${token}` } }
//         );

//         if (res.data.success) {
//           let u = res.data.kundli;

//           // FIX ID
//           u._id = u._id || u.id;

//           setUser(u);
//         }
//       } catch (err) {
//         console.log("Kundli fetch error:", err);
//       }
//       setLoading(false);
//     };

//     fetchKundli();
//   }, []);

//   // ================================
//   // UPDATE KUNDLI DETAILS
//   // ================================
//   const updateKundli = async () => {
//     try {
//       const token = localStorage.getItem("token");

//       const res = await axios.put(
//         `http://localhost:7000/api/userweb/kundli/update/${user._id}`,
//         form,
//         { headers: { Authorization: `Bearer ${token}` } }
//       );

//       if (res.data.success) {
//         alert("Kundli Details Updated!");
//         setUser(res.data.data);
//         setEditMode(false);
//       }
//     } catch (err) {
//       console.log("Update kundli error:", err);
//       alert("Update failed");
//     }
//   };

//   if (loading)
//     return (
//       <h2 style={{ textAlign: "center", marginTop: "50px" }}>Loading Kundli...</h2>
//     );

//   if (!user)
//     return (
//       <h2 style={{ textAlign: "center", marginTop: "50px" }}>
//         Kundli Not Found
//       </h2>
//     );

//   return (
//     <div className="mp-wrapper">

//       {/* HEADER */}
//       <div className="mp-header">
//         <h1>My Kundli</h1>
//         <p>View & manage your Birth Chart and Astrological Details</p>
//       </div>

//       {/* MAIN CONTENT */}
//       <div className="mp-container">

//         {/* LEFT - BIRTH DETAILS */}
//         <div className="mp-card profile-card">
//           <h2>Birth Details</h2>

//           <div className="mp-info-list">
//             <p><strong>Date of Birth:</strong> {user.dob || "Not Added"}</p>
//             <p><strong>Time of Birth:</strong> {user.birthTime || "Not Added"}</p>
//             <p><strong>Birth Place:</strong> {user.birthPlace || "Not Added"}</p>
//             <p><strong>Timezone:</strong> {user.timezone || "Not Added"}</p>
//           </div>

//           <button
//             className="mp-btn full"
//             onClick={() => {
//               setForm(user);
//               setEditMode(true);
//             }}
//           >
//             Edit Birth Details
//           </button>
//         </div>

//         {/* RIGHT - ASTRO DETAILS */}
//         <div className="mp-card astro-card">
//           <h2>Astrological Info</h2>

//           <div className="astro-grid">
//             <div className="astro-item">
//               <h4>Moon Sign</h4>
//               <p>{user.moonSign || "Not Available"}</p>
//             </div>

//             <div className="astro-item">
//               <h4>Ascendant</h4>
//               <p>{user.ascendant || "Not Available"}</p>
//             </div>

//             <div className="astro-item">
//               <h4>Nakshatra</h4>
//               <p>{user.nakshatra || "Not Available"}</p>
//             </div>

//             <div className="astro-item">
//               <h4>Dasha</h4>
//               <p>{user.currentDasha || "Not Available"}</p>
//             </div>
//           </div>

//           <h3 className="sub-heading">Kundli Status</h3>
//           <div className="mp-info-list">
//             <p><strong>Kundli Generated:</strong> {user.kundliStatus ? "Yes" : "No"}</p>
//             <p><strong>Reports Saved:</strong> {user.reports || 0}</p>
//             <p><strong>Remedies Active:</strong> {user.remedies || 0}</p>
//           </div>

//           <button className="mp-btn ghost">Download Kundli PDF</button>
//         </div>
//       </div>

//       {/* EDIT FORM */}
//       {editMode && (
//         <div className="mp-card" style={{ marginTop: "20px" }}>
//           <h2>Edit Birth Details</h2>

//           <div className="edit-grid">
//             <label>Date of Birth</label>
//             <input
//               type="date"
//               value={form.dob || ""}
//               onChange={(e) => setForm({ ...form, dob: e.target.value })}
//             />

//             <label>Birth Time</label>
//             <input
//               type="time"
//               value={form.birthTime || ""}
//               onChange={(e) => setForm({ ...form, birthTime: e.target.value })}
//             />

//             <label>Birth Place</label>
//             <input
//               value={form.birthPlace || ""}
//               onChange={(e) => setForm({ ...form, birthPlace: e.target.value })}
//             />

//             <label>Timezone</label>
//             <input
//               value={form.timezone || ""}
//               onChange={(e) => setForm({ ...form, timezone: e.target.value })}
//             />
//           </div>

//           <button className="mp-btn" onClick={updateKundli}>
//             Save Changes
//           </button>

//           <button
//             className="mp-btn ghost"
//             onClick={() => setEditMode(false)}
//             style={{ marginLeft: "10px" }}
//           >
//             Cancel
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default MyKundli;

// import React, { useEffect, useState } from "react";
// import "../../styles/MyProfile.css";
// import { KundliAPI } from "../../api/apiService";

// const MyKundli = () => {
//   const [kundli, setKundli] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [form, setForm] = useState({
//     fullName: "",
//     dob: "",
//     timeOfBirth: "",
//     birthPlace: "",
//   });
//   const [generating, setGenerating] = useState(false);

//   // ============================
//   // LOAD SAVED KUNDLI IF EXISTS
//   // ============================
//   useEffect(() => {
//     const load = async () => {
//       try {
//         const res = await KundliAPI.getSavedKundli();
//         if (res.data.success) {
//           setKundli(res.data.kundli || res.data.data);
//         }
//       } catch {}
//       setLoading(false);
//     };
//     load();
//   }, []);

//   // ============================
//   // GENERATE & SAVE KUNDLI
//   // ============================
//   const generateKundli = async () => {
//     if (!form.fullName || !form.dob || !form.timeOfBirth || !form.birthPlace) {
//       alert("Please fill all fields");
//       return;
//     }

//     setGenerating(true);

//     try {
//       // 1️⃣ GENERATE KUNDLI FROM API
//       const payload = {
//         name: form.fullName,
//         dateOfBirth: form.dob,
//         timeOfBirth: form.timeOfBirth,
//         placeOfBirth: form.birthPlace,
//       };

//       const res = await KundliAPI.calculate(payload);
//       const kundliData = res.data.kundli || res.data.data || res.data;

//       // 2️⃣ SAVE IN DATABASE
//       await KundliAPI.saveKundli({
//         ...payload,
//         kundliData,
//       });

//       // 3️⃣ UPDATE UI
//       setKundli(kundliData);
//       alert("Kundli Generated Successfully!");
//     } catch (err) {
//       console.log("Error generating kundli:", err);
//       alert("Failed to generate kundli");
//     }

//     setGenerating(false);
//   };

//   if (loading)
//     return (
//       <h2 style={{ textAlign: "center", marginTop: "50px" }}>Loading…</h2>
//     );

//   return (
//     <div className="mp-wrapper">
//       <div className="mp-header">
//         <h1>My Kundli</h1>
//         <p>Generate & view your complete birth chart</p>
//       </div>

//       {/* IF NO KUNDLI — SHOW GENERATE FORM */}
//       {!kundli && (
//         <div className="mp-card" style={{ maxWidth: "600px", margin: "0 auto" }}>
//           <h2>Generate Kundli</h2>

//           <div className="edit-grid">
//             <label>Full Name</label>
//             <input
//               value={form.fullName}
//               onChange={(e) => setForm({ ...form, fullName: e.target.value })}
//             />

//             <label>Date of Birth</label>
//             <input
//               type="date"
//               value={form.dob}
//               onChange={(e) => setForm({ ...form, dob: e.target.value })}
//             />

//             <label>Time of Birth</label>
//             <input
//               type="time"
//               value={form.timeOfBirth}
//               onChange={(e) =>
//                 setForm({ ...form, timeOfBirth: e.target.value })
//               }
//             />

//             <label>Birth Place</label>
//             <input
//               value={form.birthPlace}
//               onChange={(e) => setForm({ ...form, birthPlace: e.target.value })}
//             />
//           </div>

//           <button
//             className="mp-btn"
//             onClick={generateKundli}
//             disabled={generating}
//           >
//             {generating ? "Generating..." : "Generate Kundli"}
//           </button>
//         </div>
//       )}

//       {/* IF KUNDLI EXISTS — SHOW DETAILS */}
//       {kundli && (
//         <div className="mp-container">
//           <div className="mp-card profile-card">
//             <h2>Birth Details</h2>
//             <p><strong>Name:</strong> {form.fullName}</p>
//             <p><strong>Date of Birth:</strong> {form.dob}</p>
//             <p><strong>Time of Birth:</strong> {form.timeOfBirth}</p>
//             <p><strong>Birth Place:</strong> {form.birthPlace}</p>
//           </div>

//           <div className="mp-card astro-card">
//             <h2>Astrological Details</h2>

//             <div className="astro-grid">
//               <div className="astro-item">
//                 <h4>Sun Sign</h4>
//                 <p>{kundli.sunSign}</p>
//               </div>
//               <div className="astro-item">
//                 <h4>Moon Sign</h4>
//                 <p>{kundli.moonSign}</p>
//               </div>
//               <div className="astro-item">
//                 <h4>Ascendant</h4>
//                 <p>{kundli.ascendant}</p>
//               </div>
//               <div className="astro-item">
//                 <h4>Nakshatra</h4>
//                 <p>{kundli.nakshatra}</p>
//               </div>
//             </div>

//             <button className="mp-btn ghost">Download Kundli</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default MyKundli;

// import React, { useEffect, useState } from "react";
// import "../../styles/MyProfile.css";
// import { KundliAPI } from "../../api/apiService";

// const MyKundli = () => {
//   const [kundli, setKundli] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [generating, setGenerating] = useState(false);

//   const [form, setForm] = useState({
//     fullName: "",
//     dob: "",
//     timeOfBirth: "",
//     birthPlace: "",
//   });

//   // ===============================
//   // LOAD SAVED KUNDLI FROM BACKEND
//   // ===============================
//   const loadKundli = async () => {
//     try {
//       const res = await KundliAPI.getAll();

//       if (res && res.length > 0) {
//         setKundli(res[0]); // show first saved kundli
//       }
//     } catch (err) {
//       console.log("Error loading kundli:", err);
//     }
//     setLoading(false);
//   };

//   useEffect(() => {
//     loadKundli();
//   }, []);

//   // ===============================
//   // GENERATE KUNDLI (SAVE AUTO)
//   // ===============================
//   const generateKundli = async () => {
//     if (!form.fullName || !form.dob || !form.timeOfBirth || !form.birthPlace) {
//       alert("Please fill all fields");
//       return;
//     }

//     setGenerating(true);

//     try {
//       const payload = {
//         name: form.fullName,
//         dateOfBirth: form.dob,
//         timeOfBirth: form.timeOfBirth,
//         placeOfBirth: form.birthPlace,
//       };

//       // 🔮 CALL KUNDLI CALCULATE
//       const res = await KundliAPI.calculate(payload);

//       // ✔ API हमेशा kundli को database में auto save कर देता है (आपने backend में ऐसा setup किया है)
//       // इसलिए दोबारा save करने की जरूरत नहीं

//       // ✔ Now reload saved kundli
//       await loadKundli();

//       alert("Kundli Generated Successfully!");
//     } catch (err) {
//       console.log(err);
//       alert("Failed to generate kundli");
//     }

//     setGenerating(false);
//   };

//   if (loading) {
//     return <h2 style={{ textAlign: "center", marginTop: "50px" }}>Loading…</h2>;
//   }

//   return (
//     <div className="mp-wrapper">
//       <div className="mp-header">
//         <h1>My Kundli</h1>
//         <p>Generate & view your complete birth chart</p>
//       </div>

//       {/* IF NO KUNDLI → SHOW FORM */}
//       {!kundli && (
//         <div className="mp-card" style={{ maxWidth: "600px", margin: "0 auto" }}>
//           <h2>Generate Kundli</h2>

//           <div className="edit-grid">
//             <label>Full Name</label>
//             <input
//               value={form.fullName}
//               onChange={(e) => setForm({ ...form, fullName: e.target.value })}
//             />

//             <label>Date of Birth</label>
//             <input
//               type="date"
//               value={form.dob}
//               onChange={(e) => setForm({ ...form, dob: e.target.value })}
//             />

//             <label>Time of Birth</label>
//             <input
//               type="time"
//               value={form.timeOfBirth}
//               onChange={(e) => setForm({ ...form, timeOfBirth: e.target.value })}
//             />

//             <label>Birth Place</label>
//             <input
//               value={form.birthPlace}
//               onChange={(e) => setForm({ ...form, birthPlace: e.target.value })}
//             />
//           </div>

//           <button className="mp-btn" onClick={generateKundli} disabled={generating}>
//             {generating ? "Generating..." : "Generate Kundli"}
//           </button>
//         </div>
//       )}

//       {/* IF KUNDLI EXISTS → SHOW RESULT */}
//       {kundli && (
//         <div className="mp-container">
//           {/* Birth Details */}
//           <div className="mp-card profile-card">
//             <h2>Birth Details</h2>
//             <p><strong>Name:</strong> {kundli.name}</p>
//             <p><strong>Date of Birth:</strong> {kundli.dateOfBirth}</p>
//             <p><strong>Time of Birth:</strong> {kundli.timeOfBirth}</p>
//             <p><strong>Birth Place:</strong> {kundli.placeOfBirth}</p>
//           </div>

//           {/* Astro Details */}
//           <div className="mp-card astro-card">
//             <h2>Astrological Details</h2>

//             <div className="astro-grid">
//               <div className="astro-item">
//                 <h4>Sun Sign</h4>
//                 <p>{kundli.kundliData?.sunSign}</p>
//               </div>
//               <div className="astro-item">
//                 <h4>Moon Sign</h4>
//                 <p>{kundli.kundliData?.moonSign}</p>
//               </div>
//               {/* <div className="astro-item">
//                 <h4>Ascendant</h4>
//                 <p>{kundli.kundliData?.ascendant}</p>
//               </div> */}
//               <div className="astro-item">
//                 <h4>Nakshatra</h4>
//                 <p>{kundli.kundliData?.nakshatra}</p>
//               </div>
//             </div>

//             <button className="mp-btn ghost">Download Kundli</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default MyKundli;

// import React, { useEffect, useState } from "react";
// import "../../styles/MyProfile.css";
// import { KundliAPI } from "../../api/apiService";

// const MyKundli = () => {
//   const [kundli, setKundli] = useState(null);
//   const [loading, setLoading] = useState(true);

//   const [form, setForm] = useState({
//     fullName: "",
//     dob: "",
//     timeOfBirth: "",
//     birthPlace: "",
//   });

//   const [generating, setGenerating] = useState(false);

//   const loadKundli = async () => {
//     try {
//       const res = await KundliAPI.getAll();
//       if (res && res.length > 0) {
//         setKundli(res[0]);
//       }
//     } catch (err) {
//       console.log("Error loading kundli");
//     }
//     setLoading(false);
//   };

//   useEffect(() => {
//     loadKundli();
//   }, []);

//   const generateKundli = async () => {
//     if (!form.fullName || !form.dob || !form.timeOfBirth || !form.birthPlace) {
//       alert("Fill all fields"); return;
//     }

//     setGenerating(true);
//     try {
//       const payload = {
//         name: form.fullName,
//         dateOfBirth: form.dob,
//         timeOfBirth: form.timeOfBirth,
//         placeOfBirth: form.birthPlace,
//       };

//       await KundliAPI.calculate(payload);
//       await loadKundli();
//       alert("Kundli Generated!");
//     } catch (err) {
//       alert("Generation Failed!");
//     }
//     setGenerating(false);
//   };

//   if (loading) return <h2 style={{ textAlign: "center" }}>Loading...</h2>;

//   return (
//     <div className="mp-wrapper">

//       <div className="mp-header">
//         <h1>My Kundli</h1>
//         <p>Generate & view your complete birth chart</p>
//       </div>

//       {!kundli && (
//         <div className="mp-card" style={{ maxWidth: "600px", margin: "0 auto" }}>
//           <h2>Generate Kundli</h2>

//           <div className="edit-grid">
//             <label>Full Name</label>
//             <input value={form.fullName} onChange={(e) => setForm({ ...form, fullName: e.target.value })} />

//             <label>Date of Birth</label>
//             <input type="date" value={form.dob} onChange={(e) => setForm({ ...form, dob: e.target.value })} />

//             <label>Time of Birth</label>
//             <input type="time" value={form.timeOfBirth} onChange={(e) => setForm({ ...form, timeOfBirth: e.target.value })} />

//             <label>Birth Place</label>
//             <input value={form.birthPlace} onChange={(e) => setForm({ ...form, birthPlace: e.target.value })} />
//           </div>

//           <button className="mp-btn" onClick={generateKundli} disabled={generating}>
//             {generating ? "Generating..." : "Generate Kundli"}
//           </button>
//         </div>
//       )}

//       {/* If Kundli Exists → Show Complete Kundli Details */}
//       {kundli && (
//         <div className="mp-container">

//           {/* Birth Details */}
//           <div className="mp-card profile-card">
//             <h2>Birth Details</h2>
//             <p><strong>Name:</strong> {kundli.name}</p>
//             <p><strong>Date:</strong> {kundli.dateOfBirth}</p>
//             <p><strong>Time:</strong> {kundli.timeOfBirth}</p>
//             <p><strong>Place:</strong> {kundli.placeOfBirth}</p>
//           </div>

//           {/* Zodiac Details */}
//           <div className="mp-card astro-card">
//             <h2>🌞 Zodiac Details</h2>

//             <p><strong>Sun Sign:</strong> {kundli.kundliData?.sunSign || "-"}</p>
//             <p><strong>Moon Sign:</strong> {kundli.kundliData?.moonSign || "-"}</p>
//             {/* <p><strong>Ascendant:</strong> {kundli.kundliData?.ascendant || "-"}</p> */}
//             <p><strong>Zodiac Sign:</strong> {kundli.kundliData?.zodiac || "-"}</p>
//           </div>

//           {/* Nakshatra */}
//           <div className="mp-card astro-card">
//             <h2>✨ Nakshatra Details</h2>

//             <p><strong>Nakshatra:</strong> {kundli.kundliData?.nakshatra || "-"}</p>
//             <p><strong>Nakshatra Lord:</strong> {kundli.kundliData?.nakshatraLord || "-"}</p>
//           </div>

//           {/* Mangal Dosha */}
//           <div className="mp-card astro-card">
//             <h2>🔥 Mangal Dosha</h2>

//             <p><strong>Status:</strong> {kundli.kundliData?.mangalDosha?.hasDosha ? "Present" : "Not Present"}</p>
//             <p><strong>Description:</strong> {kundli.kundliData?.mangalDosha?.description || "-"}</p>
//           </div>

//           {/* Yogas */}
//           <div className="mp-card astro-card">
//             <h2>🔯 Yogas in Kundli</h2>

//             <p><strong>Major Yogas:</strong> {kundli.kundliData?.yogas?.major || 0}</p>
//             <p><strong>Chandra Yogas:</strong> {kundli.kundliData?.yogas?.chandra || 0}</p>
//             <p><strong>Soorya Yogas:</strong> {kundli.kundliData?.yogas?.soorya || 0}</p>
//             <p><strong>Inauspicious Yogas:</strong> {kundli.kundliData?.yogas?.inauspicious || 0}</p>
//           </div>

//           <button className="mp-btn ghost">Download Kundli</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default MyKundli;

// import React, { useEffect, useState } from "react";
// import "../../styles/Kundli.css";
// import { KundliAPI } from "../../api/apiService";

// const MyKundli = () => {
//   const [kundli, setKundli] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [generating, setGenerating] = useState(false);
//   const [editMode, setEditMode] = useState(false);

//   const [form, setForm] = useState({
//     fullName: "",
//     dob: "",
//     timeOfBirth: "",
//     birthPlace: "",
//   });

//   // ======================
//   // LOAD SAVED KUNDLI
//   // ======================
//   const loadKundli = async () => {
//     try {
//       const res = await KundliAPI.getAll();
//       if (res && res.length > 0) {
//         setKundli(res[0]);
//       }
//     } catch {
//       console.log("Error loading kundli");
//     }
//     setLoading(false);
//   };

//   useEffect(() => {
//     loadKundli();
//   }, []);

//   // ======================
//   // GENERATE KUNDLI
//   // ======================
//   const generateKundli = async () => {
//     if (!form.fullName || !form.dob || !form.timeOfBirth || !form.birthPlace) {
//       alert("Fill all fields");
//       return;
//     }

//     setGenerating(true);

//     try {
//       const payload = {
//         name: form.fullName,
//         dateOfBirth: form.dob,
//         timeOfBirth: form.timeOfBirth,
//         placeOfBirth: form.birthPlace,
//       };

//       await KundliAPI.calculate(payload);
//       await loadKundli();
//       alert("Kundli Generated!");
//     } catch {
//       alert("Failed to generate kundli");
//     }

//     setGenerating(false);
//   };

//   // ======================
//   // UPDATE BIRTH DETAILS
//   // ======================
//   const updateBirthDetails = async () => {
//     try {
//       const payload = {
//         name: form.fullName,
//         dateOfBirth: form.dob,
//         timeOfBirth: form.timeOfBirth,
//         placeOfBirth: form.birthPlace,
//       };

//       await KundliAPI.update(kundli._id, payload);

//       await loadKundli();
//       alert("Birth details updated!");

//       setEditMode(false);
//     } catch {
//       alert("Update failed");
//     }
//   };

//   if (loading) return <h2 style={{ textAlign: "center" }}>Loading...</h2>;

//   return (
//     <div className="mp-wrapper">

//       <div className="mp-header">
//         <h1>My Kundli</h1>
//         <p>Generate & view your complete birth chart</p>
//       </div>

//       {/* GENERATE FORM */}
//       {!kundli && (
//         <div className="mp-card" style={{ maxWidth: "600px", margin: "0 auto" }}>
//           <h2>Generate Kundli</h2>

//           <div className="edit-grid">
//             <label>Full Name</label>
//             <input value={form.fullName} onChange={(e) => setForm({ ...form, fullName: e.target.value })} />

//             <label>Date of Birth</label>
//             <input type="date" value={form.dob} onChange={(e) => setForm({ ...form, dob: e.target.value })} />

//             <label>Time of Birth</label>
//             <input type="time" value={form.timeOfBirth} onChange={(e) => setForm({ ...form, timeOfBirth: e.target.value })} />

//             <label>Birth Place</label>
//             <input value={form.birthPlace} onChange={(e) => setForm({ ...form, birthPlace: e.target.value })} />
//           </div>

//           <button className="mp-btn" onClick={generateKundli} disabled={generating}>
//             {generating ? "Generating..." : "Generate Kundli"}
//           </button>
//         </div>
//       )}

//       {/* SHOW KUNDLI DETAILS */}
//       {kundli && (
//         <div className="mp-container">

//           {/* Birth Details */}
//           <div className="mp-card profile-card">
//             <h2>Birth Details</h2>

//             <p><strong>Name:</strong> {kundli.name}</p>
//             <p><strong>Date:</strong> {kundli.dateOfBirth}</p>
//             <p><strong>Time:</strong> {kundli.timeOfBirth}</p>
//             <p><strong>Place:</strong> {kundli.placeOfBirth}</p>

//             <button
//               className="mp-btn full"
//               onClick={() => {
//                 setForm({
//                   fullName: kundli.name,
//                   dob: kundli.dateOfBirth,
//                   timeOfBirth: kundli.timeOfBirth,
//                   birthPlace: kundli.placeOfBirth,
//                 });
//                 setEditMode(true);
//               }}
//             >
//               ✏️ Edit Birth Details
//             </button>
//           </div>

//           {/* Zodiac */}
//           <div className="mp-card astro-card">
//             <h2>🌞 Zodiac Details</h2>

//             <p><strong>Sun Sign:</strong> {kundli.kundliData?.sunSign}</p>
//             <p><strong>Moon Sign:</strong> {kundli.kundliData?.moonSign}</p>
//             <p><strong>Zodiac Sign:</strong> {kundli.kundliData?.zodiac || "-"}</p>
//           </div>

//           {/* Nakshatra */}
//           <div className="mp-card astro-card">
//             <h2>✨ Nakshatra Details</h2>

//             <p><strong>Nakshatra:</strong> {kundli.kundliData?.nakshatra}</p>
//             <p><strong>Nakshatra Lord:</strong> {kundli.kundliData?.nakshatraLord}</p>
//           </div>

//           {/* Mangal Dosha */}
//           <div className="mp-card astro-card">
//             <h2>🔥 Mangal Dosha</h2>

//             <p><strong>Status:</strong> {kundli.kundliData?.mangalDosha?.hasDosha ? "Present" : "Not Present"}</p>
//             <p><strong>Description:</strong> {kundli.kundliData?.mangalDosha?.description}</p>
//           </div>

//           {/* Yogas */}
//           <div className="mp-card astro-card">
//             <h2>🔯 Yogas in Kundli</h2>

//             <p><strong>Major Yogas:</strong> {kundli.kundliData?.yogas?.major}</p>
//             <p><strong>Chandra Yogas:</strong> {kundli.kundliData?.yogas?.chandra}</p>
//             <p><strong>Soorya Yogas:</strong> {kundli.kundliData?.yogas?.soorya}</p>
//             <p><strong>Inauspicious Yogas:</strong> {kundli.kundliData?.yogas?.inauspicious}</p>
//           </div>

//           <button className="mp-btn ghost">Download Kundli</button>
//         </div>
//       )}

//       {/* EDIT FORM POPUP */}
//       {editMode && (
//         <div className="mp-card" style={{ marginTop: "20px" }}>
//           <h2>Edit Birth Details</h2>

//           <div className="edit-grid">

//             <label>Full Name</label>
//             <input value={form.fullName} onChange={(e) => setForm({ ...form, fullName: e.target.value })} />

//             <label>Date of Birth</label>
//             <input type="date" value={form.dob} onChange={(e) => setForm({ ...form, dob: e.target.value })} />

//             <label>Time of Birth</label>
//             <input type="time" value={form.timeOfBirth} onChange={(e) => setForm({ ...form, timeOfBirth: e.target.value })} />

//             <label>Birth Place</label>
//             <input value={form.birthPlace} onChange={(e) => setForm({ ...form, birthPlace: e.target.value })} />

//           </div>

//           <button className="mp-btn" onClick={updateBirthDetails}>
//             Save Changes
//           </button>

//           <button
//             className="mp-btn ghost"
//             style={{ marginLeft: "10px" }}
//             onClick={() => setEditMode(false)}
//           >
//             Cancel
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default MyKundli;

import React, { useEffect, useState } from "react";
import "../../styles/Kundli.css";
import { KundliAPI } from "../../api/apiService";

const MyKundli = () => {
  const [kundli, setKundli] = useState(null);
  const [loading, setLoading] = useState(true);
  const [generating, setGenerating] = useState(false);
  const [editMode, setEditMode] = useState(false);

  const [form, setForm] = useState({
    fullName: "",
    dob: "",
    timeOfBirth: "",
    birthPlace: "",
  });

  // ======================
  // LOAD SAVED KUNDLI
  // ======================
  const loadKundli = async () => {
    try {
      const res = await KundliAPI.getAll();
      if (res && res.length > 0) {
        setKundli(res[0]);
      }
    } catch {
      console.log("Error loading kundli");
    }
    setLoading(false);
  };

  useEffect(() => {
    loadKundli();
  }, []);

  // ======================
  // GENERATE KUNDLI
  // ======================
  const generateKundli = async () => {
    if (!form.fullName || !form.dob || !form.timeOfBirth || !form.birthPlace) {
      alert("Fill all fields");
      return;
    }

    setGenerating(true);

    try {
      const payload = {
        name: form.fullName,
        dateOfBirth: form.dob,
        timeOfBirth: form.timeOfBirth,
        placeOfBirth: form.birthPlace,
      };

      await KundliAPI.calculate(payload); // auto saves
      await loadKundli();
      alert("Kundli Generated!");
    } catch {
      alert("Failed to generate kundli");
    }

    setGenerating(false);
  };

  // ======================
  // UPDATE BIRTH DETAILS + REGENERATE KUNDLI
  // ======================
  const updateBirthDetails = async () => {
    try {
      // 1) NEW PAYLOAD
      const payload = {
        name: form.fullName,
        dateOfBirth: form.dob,
        timeOfBirth: form.timeOfBirth,
        placeOfBirth: form.birthPlace,
      };

      // 2) UPDATE BIRTH DETAILS (DB)
      await KundliAPI.update(kundli._id, payload);

      // 3) RE-CALCULATE NEW KUNDLI (Auto saves)
      await KundliAPI.calculate(payload);

      // 4) LOAD FRESH KUNDLI
      await loadKundli();

      alert("Birth details updated & Kundli regenerated!");

      setEditMode(false);
    } catch (err) {
      console.log(err);
      alert("Failed to update Kundli");
    }
  };

  if (loading) return <h2 style={{ textAlign: "center" }}>Loading...</h2>;

  return (
    <div className="mp-wrapper">

      <div className="mp-header">
        <h1>My Kundli</h1>
        <p>Generate & view your complete birth chart</p>
      </div>

      {/* GENERATE FORM */}
      {!kundli && (
        <div className="mp-card" style={{ maxWidth: "600px", margin: "0 auto" }}>
          <h2>Generate Kundli</h2>

          <div className="edit-grid">
            <label>Full Name</label>
            <input
              value={form.fullName}
              onChange={(e) => setForm({ ...form, fullName: e.target.value })}
            />

            <label>Date of Birth</label>
            <input
              type="date"
              value={form.dob}
              onChange={(e) => setForm({ ...form, dob: e.target.value })}
            />

            <label>Time of Birth</label>
            <input
              type="time"
              value={form.timeOfBirth}
              onChange={(e) => setForm({ ...form, timeOfBirth: e.target.value })}
            />

            <label>Birth Place</label>
            <input
              value={form.birthPlace}
              onChange={(e) => setForm({ ...form, birthPlace: e.target.value })}
            />
          </div>

          <button className="mp-btn" onClick={generateKundli} disabled={generating}>
            {generating ? "Generating..." : "Generate Kundli"}
          </button>
        </div>
      )}

      {/* SHOW KUNDLI DETAILS */}
      {kundli && (
        <div className="mp-container">

          {/* Birth Details */}
          <div className="mp-card profile-card">
            <h2>Birth Details</h2>

            <p><strong>Name:</strong> {kundli.name}</p>
            <p><strong>Date:</strong> {kundli.dateOfBirth}</p>
            <p><strong>Time:</strong> {kundli.timeOfBirth}</p>
            <p><strong>Place:</strong> {kundli.placeOfBirth}</p>

            <button
              className="mp-btn full"
              onClick={() => {
                setForm({
                  fullName: kundli.name,
                  dob: kundli.dateOfBirth,
                  timeOfBirth: kundli.timeOfBirth,
                  birthPlace: kundli.placeOfBirth,
                });
                setEditMode(true);
              }}
            >
              ✏️ Edit Birth Details
            </button>
          </div>

          {/* Zodiac */}
          <div className="mp-card astro-card">
            <h2>🌞 Zodiac Details</h2>

            <p><strong>Sun Sign:</strong> {kundli.kundliData?.sunSign}</p>
            <p><strong>Moon Sign:</strong> {kundli.kundliData?.moonSign}</p>
            <p><strong>Zodiac Sign:</strong> {kundli.kundliData?.zodiac || "-"}</p>
          </div>

          {/* Nakshatra */}
          <div className="mp-card astro-card">
            <h2>✨ Nakshatra Details</h2>

            <p><strong>Nakshatra:</strong> {kundli.kundliData?.nakshatra}</p>
            <p><strong>Nakshatra Lord:</strong> {kundli.kundliData?.nakshatraLord}</p>
          </div>

          {/* Mangal Dosha */}
          <div className="mp-card astro-card">
            <h2>🔥 Mangal Dosha</h2>

            <p><strong>Status:</strong> {kundli.kundliData?.mangalDosha?.hasDosha ? "Present" : "Not Present"}</p>
            <p><strong>Description:</strong> {kundli.kundliData?.mangalDosha?.description}</p>
          </div>

          {/* Yogas */}
          <div className="mp-card astro-card">
            <h2>🔯 Yogas in Kundli</h2>

            <p><strong>Major Yogas:</strong> {kundli.kundliData?.yogas?.major}</p>
            <p><strong>Chandra Yogas:</strong> {kundli.kundliData?.yogas?.chandra}</p>
            <p><strong>Soorya Yogas:</strong> {kundli.kundliData?.yogas?.soorya}</p>
            <p><strong>Inauspicious Yogas:</strong> {kundli.kundliData?.yogas?.inauspicious}</p>
          </div>

        </div>
      )}

      {/* EDIT FORM */}
      {editMode && (
        <div className="mp-card" style={{ marginTop: "20px" }}>
          <h2>Edit Birth Details</h2>

          <div className="edit-grid">
            <label>Full Name</label>
            <input
              value={form.fullName}
              onChange={(e) => setForm({ ...form, fullName: e.target.value })}
            />

            <label>Date of Birth</label>
            <input
              type="date"
              value={form.dob}
              onChange={(e) => setForm({ ...form, dob: e.target.value })}
            />

            <label>Time of Birth</label>
            <input
              type="time"
              value={form.timeOfBirth}
              onChange={(e) => setForm({ ...form, timeOfBirth: e.target.value })}
            />

            <label>Birth Place</label>
            <input
              value={form.birthPlace}
              onChange={(e) => setForm({ ...form, birthPlace: e.target.value })}
            />
          </div>

          <button className="mp-btn" onClick={updateBirthDetails}>
            Save Changes
          </button>

          <button
            className="mp-btn ghost"
            style={{ marginLeft: "10px" }}
            onClick={() => setEditMode(false)}
          >
            Cancel
          </button>
        </div>
      )}

    </div>
  );
};

export default MyKundli;
