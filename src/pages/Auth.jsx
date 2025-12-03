// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// // API base url
// const api = axios.create({ baseURL: "https://adminastrotalk-1.onrender.com/api" });

// export default function Auth() {
//   const navigate = useNavigate();

//   const [mode, setMode] = useState("login");  // login | signup
//   const [step, setStep] = useState("email");  // email | otp
//   const [email, setEmail] = useState("");
//   const [otp, setOtp] = useState("");
//   const [message, setMessage] = useState("");
//   const [loading, setLoading] = useState(false);

//   // ================== SEND OTP ==================
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

//   // ================== VERIFY OTP ==================
//   const verifyOtp = async () => {
//     if (!otp) return setMessage("Enter OTP");

//     try {
//       setLoading(true);
//       setMessage("");

//       const res = await api.post("/userweb/auth/verify-otp", { email, otp });

//       if (res.data.success) {
//         // Save token
//         localStorage.setItem("token", res.data.token);

//         // ⭐ IMPORTANT — Navbar reads this
//         localStorage.setItem("login", "true");

//         // Redirect to Home
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

//   // ================== UI ==================
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

//       {/* EMAIL STEP */}
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

//       {/* OTP STEP */}
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
import "./Auth.css"; // import css

// API base url
const api = axios.create({ baseURL: "https://adminastrotalk-1.onrender.com/api" });

export default function Auth() {
  const navigate = useNavigate();

  const [mode, setMode] = useState("login");  
  const [step, setStep] = useState("email");  
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // SEND OTP
  const sendOtp = async () => {
    if (!email) return setMessage("Please enter your email");

    try {
      setLoading(true);
      setMessage("");

      const userCheck = await api.post("/userweb/auth/check-user", { email });

      if (mode === "signup" && userCheck.data.exists)
        return setMessage("Account already exists! Please login.");

      if (mode === "login" && !userCheck.data.exists)
        return setMessage("Account does not exist! Please signup first.");

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

  // VERIFY OTP
  const verifyOtp = async () => {
    if (!otp) return setMessage("Enter OTP");

    try {
      setLoading(true);
      setMessage("");

      const res = await api.post("/userweb/auth/verify-otp", { email, otp });

      if (res.data.success) {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("login", "true");
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
    <div className="auth-wrapper">
      <div className="auth-box">

        <h2 className="auth-title">
          {mode === "signup" ? "Create Account" : "Login"}
        </h2>

        {message && <p className="auth-message">{message}</p>}

        {/* EMAIL STEP */}
        {step === "email" && (
          <>
            <input
              className="auth-input"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <button className="auth-btn" onClick={sendOtp} disabled={loading}>
              {loading
                ? "Sending..."
                : mode === "signup"
                ? "Send OTP for Signup"
                : "Send OTP for Login"}
            </button>

            <p
              className="auth-switch"
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

        {/* OTP STEP */}
        {step === "otp" && (
          <>
            <input
              className="auth-input"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />

            <button
              className="auth-btn auth-btn-green"
              onClick={verifyOtp}
              disabled={loading}
            >
              {loading ? "Verifying..." : "Verify OTP"}
            </button>

            <p className="auth-resend" onClick={sendOtp}>
              Resend OTP
            </p>
          </>
        )}
      </div>
    </div>
  );
}
