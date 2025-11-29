
// import React, { useState } from "react";
// import axios from "axios";

// const api = axios.create({ baseURL: "http://localhost:7000/api" });

// export default function UserWebsiteFrontend() {
//   const [mode, setMode] = useState("login"); // "login" or "signup"
//   const [step, setStep] = useState("email"); // email → otp → dashboard
//   const [email, setEmail] = useState("");
//   const [otp, setOtp] = useState("");
//   const [user, setUser] = useState(null);
//   const [message, setMessage] = useState("");
//   const [loading, setLoading] = useState(false);

//   // SEND OTP
//   const sendOtp = async () => {
//     if (!email) return setMessage("Please enter your email");
//     try {
//       setLoading(true);
//       setMessage("");
//       const res = await api.post("/userweb/auth/send-otp", { email });
//       if (res.data.success) {
//         setMessage("OTP sent successfully!");
//         setStep("otp");
//       } else setMessage(res.data.message || "Failed to send OTP");
//     } catch (err) {
//       setMessage(err?.response?.data?.message || "Server error sending OTP");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // VERIFY OTP
//   const verifyOtp = async () => {
//     if (!otp) return setMessage("Enter OTP");
//     try {
//       setLoading(true);
//       setMessage("");
//       const res = await api.post("/userweb/auth/verify-otp", { email, otp });
//       if (res.data.success) {
//         localStorage.setItem("token", res.data.token);
//         setUser(res.data.user);
//         setMessage("Login Successful!");
//         setStep("dashboard");
//       } else setMessage(res.data.message || "Invalid OTP");
//     } catch (err) {
//       setMessage(err?.response?.data?.message || "Invalid OTP");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // UI COMPONENT
//   return (
//     <div style={{ maxWidth: 420, margin: "40px auto", padding: 20, background: "#fff", borderRadius: 10, boxShadow: "0 0 10px #ddd" }}>

//       <h2 style={{ textAlign: "center", fontWeight: 700, marginBottom: 15 }}>
//         {mode === "signup" ? "Create Account" : "Login"}
//       </h2>

//       {message && <p style={{ color: "red", textAlign: "center" }}>{message}</p>}

//       {/* EMAIL SCREEN */}
//       {step === "email" && (
//         <>
//           <input
//             placeholder="Enter Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             style={{ width: "100%", padding: 12, marginBottom: 10, borderRadius: 6, border: "1px solid #ccc" }}
//           />

//           <button onClick={sendOtp} disabled={loading} style={{ width: "100%", padding: 12, background: "blue", color: "#fff", borderRadius: 6 }}>
//             {loading ? "Sending..." : mode === "signup" ? "Send OTP for Signup" : "Send OTP for Login"}
//           </button>

//           <p style={{ marginTop: 12, textAlign: "center", cursor: "pointer", color: "blue" }}
//              onClick={() => { setMode(mode === "signup" ? "login" : "signup"); setMessage(""); }}>
//             {mode === "signup" ? "Already have an account? Login" : "Don't have an account? Signup"}
//           </p>
//         </>
//       )}

//       {/* OTP SCREEN */}
//       {step === "otp" && (
//         <>
//           <input
//             placeholder="Enter OTP"
//             value={otp}
//             onChange={(e) => setOtp(e.target.value)}
//             style={{ width: "100%", padding: 12, marginBottom: 10, borderRadius: 6, border: "1px solid #ccc" }}
//           />

//           <button onClick={verifyOtp} disabled={loading} style={{ width: "100%", padding: 12, background: "green", color: "#fff", borderRadius: 6 }}>
//             {loading ? "Verifying..." : "Verify OTP"}
//           </button>

//           <p style={{ marginTop: 12, textAlign: "center", color: "blue", cursor: "pointer" }} onClick={sendOtp}>Resend OTP</p>
//         </>
//       )}

//       {/* DASHBOARD SCREEN */}
//       {step === "dashboard" && user && (
//         <div style={{ textAlign: "center" }}>
//           <h3>Welcome, {user.email}</h3>
//           <p>User ID: {user.id}</p>
//           <button
//             onClick={() => window.location.reload()}
//             style={{ marginTop: 20, width: "100%", padding: 12, background: "#333", color: "#fff", borderRadius: 6 }}>
//             Logout
//           </button>
//         </div>
//       )}
//     </div>
//   );
// } 

// import React, { useState } from "react";
// import axios from "axios";

// const api = axios.create({ baseURL: "http://localhost:7000/api" });

// export default function UserWebsiteFrontend() {
//   const [mode, setMode] = useState("login"); 
//   const [step, setStep] = useState("email"); 
//   const [email, setEmail] = useState("");
//   const [otp, setOtp] = useState("");
//   const [user, setUser] = useState(null);
//   const [message, setMessage] = useState("");
//   const [loading, setLoading] = useState(false);

//   // ================= SEND OTP =================
//   const sendOtp = async () => {
//     if (!email) return setMessage("Please enter your email");

//     try {
//       setLoading(true);
//       setMessage("");

//       // 1) CHECK USER EXISTS
//       const userCheck = await api.post("/userweb/auth/check-user", { email });

//       if (mode === "signup" && userCheck.data.exists) {
//         return setMessage("Account already exists! Please login.");
//       }

//       if (mode === "login" && !userCheck.data.exists) {
//         return setMessage("Account does not exist! Please signup first.");
//       }

//       // 2) SEND OTP
//       const res = await api.post("/userweb/auth/send-otp", { email });

//       if (res.data.success) {
//         setMessage("OTP sent successfully!");
//         setStep("otp");
//       } else {
//         setMessage(res.data.message || "Failed to send OTP");
//       }

//     } catch (err) {
//       setMessage(err?.response?.data?.message || "Server error sending OTP");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // ================= VERIFY OTP =================
//   const verifyOtp = async () => {
//     if (!otp) return setMessage("Enter OTP");

//     try {
//       setLoading(true);
//       setMessage("");

//       const res = await api.post("/userweb/auth/verify-otp", { email, otp });

//       if (res.data.success) {
//         setUser(res.data.user);
//         localStorage.setItem("token", res.data.token);
//         setMessage(mode === "signup" ? "Signup Successful!" : "Login Successful!");
//         setStep("dashboard");
//       } else {
//         setMessage(res.data.message || "Invalid OTP");
//       }
//     } catch (err) {
//       setMessage(err?.response?.data?.message || "Invalid OTP");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // ================= UI =================

//   return (
//     <div style={{ maxWidth: 420, margin: "40px auto", padding: 20, background: "#fff", borderRadius: 10, boxShadow: "0 0 10px #ddd" }}>
//       <h2 style={{ textAlign: "center", fontWeight: 700, marginBottom: 15 }}>
//         {mode === "signup" ? "Create Account" : "Login"}
//       </h2>

//       {message && <p style={{ color: "red", textAlign: "center" }}>{message}</p>}

//       {/* EMAIL SCREEN */}
//       {step === "email" && (
//         <>
//           <input
//             placeholder="Enter Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             style={{ width: "100%", padding: 12, marginBottom: 10, borderRadius: 6, border: "1px solid #ccc" }}
//           />

//           <button
//             onClick={sendOtp}
//             disabled={loading}
//             style={{ width: "100%", padding: 12, background: "blue", color: "#fff", borderRadius: 6 }}
//           >
//             {loading ? "Sending..." : mode === "signup" ? "Send OTP for Signup" : "Send OTP for Login"}
//           </button>

//           <p
//             style={{ marginTop: 12, textAlign: "center", cursor: "pointer", color: "blue" }}
//             onClick={() => {
//               setMode(mode === "signup" ? "login" : "signup");
//               setMessage("");
//             }}
//           >
//             {mode === "signup"
//               ? "Already have an account? Login"
//               : "Don't have an account? Signup"}
//           </p>
//         </>
//       )}

//       {/* OTP SCREEN */}
//       {step === "otp" && (
//         <>
//           <input
//             placeholder="Enter OTP"
//             value={otp}
//             onChange={(e) => setOtp(e.target.value)}
//             style={{ width: "100%", padding: 12, marginBottom: 10, borderRadius: 6, border: "1px solid #ccc" }}
//           />

//           <button
//             onClick={verifyOtp}
//             disabled={loading}
//             style={{ width: "100%", padding: 12, background: "green", color: "#fff", borderRadius: 6 }}
//           >
//             {loading ? "Verifying..." : "Verify OTP"}
//           </button>

//           <p style={{ marginTop: 12, textAlign: "center", color: "blue", cursor: "pointer" }} onClick={sendOtp}>
//             Resend OTP
//           </p>
//         </>
//       )}

//       {/* DASHBOARD */}
//       {step === "dashboard" && user && (
//         <div style={{ textAlign: "center" }}>
//           <h3>Welcome, {user.email}</h3>
//           <p>User ID: {user.id}</p>

//           <button
//             onClick={() => window.location.reload()}
//             style={{ marginTop: 20, width: "100%", padding: 12, background: "#333", color: "#fff", borderRadius: 6 }}
//           >
//             Logout
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }

// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";   
// const api = axios.create({ baseURL: "http://localhost:7000/api" });

// export default function UserWebsiteFrontend() {
//   const navigate = useNavigate(); // ✅ INITIALIZE

//   const [mode, setMode] = useState("login"); 
//   const [step, setStep] = useState("email"); 
//   const [email, setEmail] = useState("");
//   const [otp, setOtp] = useState("");
//   const [message, setMessage] = useState("");
//   const [loading, setLoading] = useState(false);

//   // ================= SEND OTP =================
//   const sendOtp = async () => {
//     if (!email) return setMessage("Please enter your email");

//     try {
//       setLoading(true);
//       setMessage("");

//       // Check user exists
//       const userCheck = await api.post("/userweb/auth/check-user", { email });

//       if (mode === "signup" && userCheck.data.exists) {
//         return setMessage("Account already exists! Please login.");
//       }

//       if (mode === "login" && !userCheck.data.exists) {
//         return setMessage("Account does not exist! Please signup first.");
//       }

//       // Send OTP
//       const res = await api.post("/userweb/auth/send-otp", { email });

//       if (res.data.success) {
//         setMessage("OTP sent successfully!");
//         setStep("otp");
//       } else {
//         setMessage(res.data.message || "Failed to send OTP");
//       }

//     } catch (err) {
//       setMessage(err?.response?.data?.message || "Server error sending OTP");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // ================= VERIFY OTP =================
//   const verifyOtp = async () => {
//     if (!otp) return setMessage("Enter OTP");

//     try {
//       setLoading(true);
//       setMessage("");

//       const res = await api.post("/userweb/auth/verify-otp", { email, otp });

//       if (res.data.success) {
//         localStorage.setItem("token", res.data.token);

//         // 🔥 Redirect to Website Home Page
//         navigate("/");

//       } else {
//         setMessage(res.data.message || "Invalid OTP");
//       }
//     } catch (err) {
//       setMessage(err?.response?.data?.message || "Invalid OTP");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // ================= UI =================

//   return (
//     <div
//       style={{
//         maxWidth: 420,
//         margin: "40px auto",
//         padding: 20,
//         background: "#fff",
//         borderRadius: 10,
//         boxShadow: "0 0 10px #ddd",
//       }}
//     >
//       <h2 style={{ textAlign: "center", fontWeight: 700, marginBottom: 15 }}>
//         {mode === "signup" ? "Create Account" : "Login"}
//       </h2>

//       {message && <p style={{ color: "red", textAlign: "center" }}>{message}</p>}

//       {/* EMAIL SCREEN */}
//       {step === "email" && (
//         <>
//           <input
//             placeholder="Enter Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             style={{
//               width: "100%",
//               padding: 12,
//               marginBottom: 10,
//               borderRadius: 6,
//               border: "1px solid #ccc",
//             }}
//           />

//           <button
//             onClick={sendOtp}
//             disabled={loading}
//             style={{
//               width: "100%",
//               padding: 12,
//               background: "blue",
//               color: "#fff",
//               borderRadius: 6,
//             }}
//           >
//             {loading
//               ? "Sending..."
//               : mode === "signup"
//               ? "Send OTP for Signup"
//               : "Send OTP for Login"}
//           </button>

//           <p
//             style={{
//               marginTop: 12,
//               textAlign: "center",
//               cursor: "pointer",
//               color: "blue",
//             }}
//             onClick={() => {
//               setMode(mode === "signup" ? "login" : "signup");
//               setMessage("");
//             }}
//           >
//             {mode === "signup"
//               ? "Already have an account? Login"
//               : "Don't have an account? Signup"}
//           </p>
//         </>
//       )}

//       {/* OTP SCREEN */}
//       {step === "otp" && (
//         <>
//           <input
//             placeholder="Enter OTP"
//             value={otp}
//             onChange={(e) => setOtp(e.target.value)}
//             style={{
//               width: "100%",
//               padding: 12,
//               marginBottom: 10,
//               borderRadius: 6,
//               border: "1px solid #ccc",
//             }}
//           />

//           <button
//             onClick={verifyOtp}
//             disabled={loading}
//             style={{
//               width: "100%",
//               padding: 12,
//               background: "green",
//               color: "#fff",
//               borderRadius: 6,
//             }}
//           >
//             {loading ? "Verifying..." : "Verify OTP"}
//           </button>

//           <p
//             style={{
//               marginTop: 12,
//               textAlign: "center",
//               color: "blue",
//               cursor: "pointer",
//             }}
//             onClick={sendOtp}
//           >
//             Resend OTP
//           </p>
//         </>
//       )}
//     </div>
//   );
// }

import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";   

// ⭐ Correct API prefix
const api = axios.create({ baseURL: "http://localhost:7000/api" });

export default function UserWebsiteFrontend() {
  const navigate = useNavigate();

  const [mode, setMode] = useState("login"); 
  const [step, setStep] = useState("email"); 
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // ================= SEND OTP =================
  const sendOtp = async () => {
    if (!email) return setMessage("Please enter your email");

    try {
      setLoading(true);
      setMessage("");

      // Check user exists
      const userCheck = await api.post("/userweb/auth/check-user", { email });

      if (mode === "signup" && userCheck.data.exists) {
        return setMessage("Account already exists! Please login.");
      }

      if (mode === "login" && !userCheck.data.exists) {
        return setMessage("Account does not exist! Please signup first.");
      }

      // Send OTP
      const res = await api.post("/userweb/auth/send-otp", { email });

      if (res.data.success) {
        setMessage("OTP sent successfully!");
        setStep("otp");
      } else {
        setMessage(res.data.message || "Failed to send OTP");
      }

    } catch (err) {
      setMessage(err?.response?.data?.message || "Server error sending OTP");
    } finally {
      setLoading(false);
    }
  };

  // ================= VERIFY OTP =================
  const verifyOtp = async () => {
    if (!otp) return setMessage("Enter OTP");

    try {
      setLoading(true);
      setMessage("");

      const res = await api.post("/userweb/auth/verify-otp", { email, otp });

      if (res.data.success) {
        localStorage.setItem("token", res.data.token);

        // 🔥 Redirect to Website Home Page
        navigate("/");

      } else {
        setMessage(res.data.message || "Invalid OTP");
      }
    } catch (err) {
      setMessage(err?.response?.data?.message || "Invalid OTP");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        maxWidth: 420,
        margin: "40px auto",
        padding: 20,
        background: "#fff",
        borderRadius: 10,
        boxShadow: "0 0 10px #ddd",
      }}
    >
      <h2 style={{ textAlign: "center", fontWeight: 700, marginBottom: 15 }}>
        {mode === "signup" ? "Create Account" : "Login"}
      </h2>

      {message && <p style={{ color: "red", textAlign: "center" }}>{message}</p>}

      {/* EMAIL SCREEN */}
      {step === "email" && (
        <>
          <input
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              width: "100%",
              padding: 12,
              marginBottom: 10,
              borderRadius: 6,
              border: "1px solid #ccc",
            }}
          />

          <button
            onClick={sendOtp}
            disabled={loading}
            style={{
              width: "100%",
              padding: 12,
              background: "blue",
              color: "#fff",
              borderRadius: 6,
            }}
          >
            {loading
              ? "Sending..."
              : mode === "signup"
              ? "Send OTP for Signup"
              : "Send OTP for Login"}
          </button>

          <p
            style={{
              marginTop: 12,
              textAlign: "center",
              cursor: "pointer",
              color: "blue",
            }}
            onClick={() => {
              setMode(mode === "signup" ? "login" : "signup");
              setMessage("");
            }}
          >
            {mode === "signup"
              ? "Already have an account? Login"
              : "Don't have an account? Signup"}
          </p>
        </>
      )}

      {/* OTP SCREEN */}
      {step === "otp" && (
        <>
          <input
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            style={{
              width: "100%",
              padding: 12,
              marginBottom: 10,
              borderRadius: 6,
              border: "1px solid #ccc",
            }}
          />

          <button
            onClick={verifyOtp}
            disabled={loading}
            style={{
              width: "100%",
              padding: 12,
              background: "green",
              color: "#fff",
              borderRadius: 6,
            }}
          >
            {loading ? "Verifying..." : "Verify OTP"}
          </button>

          <p
            style={{
              marginTop: 12,
              textAlign: "center",
              color: "blue",
              cursor: "pointer",
            }}
            onClick={sendOtp}
          >
            Resend OTP
          </p>
        </>
      )}
    </div>
  );
}
