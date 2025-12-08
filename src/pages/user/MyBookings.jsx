// // // import React, { useEffect, useState } from "react";
// // // import { BookingAPI } from "../../api/apiService";
// // // import "../../styles/MyBookings.css";

// // // export default function MyBookings() {
// // //   const [user, setUser] = useState(null);
// // //   const [bookings, setBookings] = useState([]);

// // //   useEffect(() => {
// // //     const u = JSON.parse(localStorage.getItem("user"));
// // //     if (u) {
// // //       setUser(u);
// // //       loadBookings(u._id);
// // //     }
// // //   }, []);

// // //   const loadBookings = async (userId) => {
// // //     const res = await BookingAPI.getMyBookings(userId);
// // //     if (res.success) {
// // //       setBookings(res.bookings);
// // //     }
// // //   };

// // //   if (!user) return <h2>Please Login First</h2>;

// // //   return (
// // //     <div className="booking-wrapper">
// // //       <h1>My Bookings</h1>

// // //       {bookings.length === 0 ? (
// // //         <p>No bookings found.</p>
// // //       ) : (
// // //         bookings.map((b) => (
// // //           <div className="booking-card" key={b._id}>
// // //             <h3>{b.serviceName}</h3>
// // //             <p>Type: {b.serviceType}</p>
// // //             <p>Amount: ₹{b.amount}</p>
// // //             <p>Status: {b.status}</p>
// // //             <span>{new Date(b.date).toLocaleString()}</span>
// // //           </div>
// // //         ))
// // //       )}
// // //     </div>
// // //   );
// // // }

// // // import React, { useEffect, useState } from "react";
// // // import { BookingAPI } from "../../api/apiService";
// // // import "../../styles/MyBookings.css";

// // // export default function MyBookings() {
// // //   const [user, setUser] = useState(null);
// // //   const [bookings, setBookings] = useState([]);

// // //   useEffect(() => {
// // //     const u = JSON.parse(localStorage.getItem("user"));
// // //     if (u) {
// // //       setUser(u);
// // //       loadBookings(u._id);
// // //     }
// // //   }, []);

// // //   const loadBookings = async (userId) => {
// // //     const res = await BookingAPI.getMyBookings(userId);
// // //     if (res.success) {
// // //       setBookings(res.bookings || []);
// // //     }
// // //   };

// // //   if (!user) return <h2>Please Login First</h2>;

// // //   return (
// // //     <div className="booking-wrapper">
// // //       <h1>My Bookings</h1>

// // //       {/* Always show container box */}
// // //       <div className="booking-container">
// // //         {bookings.length === 0 ? (
// // //           <div className="booking-card empty">
// // //             <h3>No Bookings Found</h3>
// // //             <p>You haven't booked any service yet.</p>
// // //           </div>
// // //         ) : (
// // //           bookings.map((b) => (
// // //             <div className="booking-card" key={b._id}>
// // //               <h3>{b.serviceName || "Service"}</h3>
// // //               <p>Type: {b.serviceType}</p>
// // //               <p>Amount: ₹{b.amount}</p>
// // //               <p>Status: {b.status}</p>
// // //               <span>{new Date(b.date).toLocaleString()}</span>
// // //             </div>
// // //           ))
// // //         )}
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // import React, { useEffect, useState } from "react";
// // import { BookingAPI } from "../../api/apiService";
// // import "../../styles/MyBookings.css";
// // import { Calendar, CreditCard, CheckCircle, XCircle, Clock } from "lucide-react";

// // export default function MyBookings() {
// //   const [user, setUser] = useState(null);
// //   const [bookings, setBookings] = useState([]);

// //   useEffect(() => {
// //     const u = JSON.parse(localStorage.getItem("user"));
// //     if (u) {
// //       setUser(u);
// //       loadBookings(u._id);
// //     }
// //   }, []);

// //   const loadBookings = async (userId) => {
// //     const res = await BookingAPI.getMyBookings(userId);
// //     if (res.success) {
// //       setBookings(res.bookings || []);
// //     }
// //   };

// //   if (!user) return <h2 className="center-text">Please Login First</h2>;

// //   return (
// //     <div className="booking-wrapper">
// //       <h1 className="booking-title">My Bookings</h1>

// //       <div className="booking-container">
// //         {bookings.length === 0 ? (
// //           <div className="empty-booking-card">
// //             <img
// //               src="https://cdn-icons-png.flaticon.com/512/4076/4076503.png"
// //               alt="no booking"
// //               className="empty-img"
// //             />
// //             <h3>No Bookings Yet</h3>
// //             <p>Your booked services will appear here.</p>
// //           </div>
// //         ) : (
// //           bookings.map((b) => (
// //             <div className="modern-booking-card" key={b._id}>
// //               <div className="booking-header">
// //                 <h3>{b.serviceName || "Service"}</h3>

// //                 <span
// //                   className={`status-badge ${
// //                     b.status === "completed"
// //                       ? "status-success"
// //                       : b.status === "pending"
// //                       ? "status-pending"
// //                       : "status-cancel"
// //                   }`}
// //                 >
// //                   {b.status === "completed" && <CheckCircle size={16} />}
// //                   {b.status === "pending" && <Clock size={16} />}
// //                   {b.status === "cancelled" && <XCircle size={16} />}
// //                   {b.status}
// //                 </span>
// //               </div>

// //               <div className="booking-details">
// //                 <p>
// //                   <strong>Service Type:</strong> {b.serviceType}
// //                 </p>

// //                 <p className="amount-row">
// //                   <CreditCard size={16} /> ₹{b.amount}
// //                 </p>

// //                 <p className="date-row">
// //                   <Calendar size={16} /> {new Date(b.date).toLocaleString()}
// //                 </p>
// //               </div>
// //             </div>
// //           ))
// //         )}
// //       </div>
// //     </div>
// //   );
// // }

// import React, { useEffect, useState } from "react";
// import { BookingAPI } from "../../api/apiService";
// import "../../styles/MyBookings.css";
// import { Calendar, CreditCard, CheckCircle, XCircle, Clock } from "lucide-react";

// export default function MyBookings() {
//   const [user, setUser] = useState(null);
//   const [bookings, setBookings] = useState([]);

//   useEffect(() => {
//     const u = JSON.parse(localStorage.getItem("user"));
//     if (u) {
//       setUser(u);
//       loadBookings(u._id);
//     }
//   }, []);

//   const loadBookings = async (userId) => {
//     const res = await BookingAPI.getMyBookings(userId);
//     if (res.success) {
//       setBookings(res.bookings || []);
//     }
//   };

//   // ⭐ STARFIELD GENERATOR
//   useEffect(() => {
//     const container = document.querySelector(".booking-stars");
//     if (container && container.childElementCount === 0) {
//       for (let i = 0; i < 150; i++) {
//         const star = document.createElement("div");
//         star.className = "booking-star";
//         star.style.width = star.style.height = Math.random() * 3 + "px";
//         star.style.top = Math.random() * 100 + "%";
//         star.style.left = Math.random() * 100 + "%";
//         star.style.animationDuration = 2 + Math.random() * 3 + "s";
//         container.appendChild(star);
//       }
//     }
//   }, []);

//   if (!user) return <h2 className="center-text">Please Login First</h2>;

//   return (
//     <div className="booking-page">

//       {/* ⭐ Stars */}
//       <div className="booking-stars"></div>

//       {/* 🌈 Orbs */}
//       <div className="booking-orb booking-orb1"></div>
//       <div className="booking-orb booking-orb2"></div>

//       <div className="booking-wrapper">
//         <h1 className="booking-title">My Bookings</h1>

//         <div className="booking-container">
//           {bookings.length === 0 ? (
//             <div className="empty-booking-card">
//               <img
//                 src="https://cdn-icons-png.flaticon.com/512/4076/4076503.png"
//                 alt="no booking"
//                 className="empty-img"
//               />
//               <h3>No Bookings Yet</h3>
//               <p>Your booked services will appear here.</p>
//             </div>
//           ) : (
//             bookings.map((b) => (
//               <div className="modern-booking-card" key={b._id}>
//                 <div className="booking-header">
//                   <h3>{b.serviceName || "Service"}</h3>

//                   <span
//                     className={`status-badge ${
//                       b.status === "completed"
//                         ? "status-success"
//                         : b.status === "pending"
//                         ? "status-pending"
//                         : "status-cancel"
//                     }`}
//                   >
//                     {b.status === "completed" && <CheckCircle size={16} />}
//                     {b.status === "pending" && <Clock size={16} />}
//                     {b.status === "cancelled" && <XCircle size={16} />}
//                     {b.status}
//                   </span>
//                 </div>

//                 <div className="booking-details">
//                   <p><strong>Service Type:</strong> {b.serviceType}</p>

//                   <p className="amount-row">
//                     <CreditCard size={16} /> ₹{b.amount}
//                   </p>

//                   <p className="date-row">
//                     <Calendar size={16} /> {new Date(b.date).toLocaleString()}
//                   </p>
//                 </div>
//               </div>
//             ))
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";
import axios from "axios";
import { BookingAPI } from "../../api/apiService";
import "../../styles/MyBookings.css";
import { Calendar, CreditCard, CheckCircle, XCircle, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function MyBookings() {
  const [user, setUser] = useState(null);
  const [bookings, setBookings] = useState([]);

  const navigate = useNavigate(); // ✅ BACK BUTTON NAVIGATION

  // ✅ TOKEN SE USER FETCH
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) return;

        const res = await axios.get(
          "https://adminastrotalk-1.onrender.com/api/userweb/auth/me",
          { headers: { Authorization: `Bearer ${token}` } }
        );

        if (res.data.success) {
          const u = res.data.user;
          u._id = u._id || u.id;
          setUser(u);
          loadBookings(u._id);
        }
      } catch (err) {
        console.log("User fetch error:", err);
      }
    };

    fetchUser();
  }, []);

  const loadBookings = async (userId) => {
    const res = await BookingAPI.getMyBookings(userId);
    if (res?.success) {
      setBookings(res.bookings || []);
    }
  };

  // ⭐ STARFIELD EFFECT
  useEffect(() => {
    const container = document.querySelector(".booking-stars");
    if (container && container.childElementCount === 0) {
      for (let i = 0; i < 150; i++) {
        const star = document.createElement("div");
        star.className = "booking-star";
        star.style.width = star.style.height = Math.random() * 3 + "px";
        star.style.top = Math.random() * 100 + "%";
        star.style.left = Math.random() * 100 + "%";
        star.style.animationDuration = 2 + Math.random() * 3 + "s";
        container.appendChild(star);
      }
    }
  }, []);

  if (!user) return <h2 className="center-text">Please Login First</h2>;

  return (
    <div className="booking-page">

      <div className="booking-stars"></div>
      <div className="booking-orb booking-orb1"></div>
      <div className="booking-orb booking-orb2"></div>

      <div className="booking-wrapper">

        {/* 🔥 3D BACK BUTTON */}
        <button
          onClick={() => navigate("/")}
          style={{
            background: "linear-gradient(145deg, #ffcc33, #e6b800)",
            border: "none",
            borderRadius: "10px",
            padding: "10px 18px",
            marginBottom: "18px",
            fontWeight: "600",
            fontSize: "14px",
            cursor: "pointer",
            color: "#000",
            boxShadow: "5px 5px 12px #bfa100, -5px -5px 12px #fff3b0",
            transition: "0.2s",
          }}
          onMouseDown={(e) =>
            (e.currentTarget.style.boxShadow =
              "inset 4px 4px 8px #bfa100, inset -4px -4px 8px #fff3b0")
          }
          onMouseUp={(e) =>
            (e.currentTarget.style.boxShadow =
              "5px 5px 12px #bfa100, -5px -5px 12px #fff3b0")
          }
        >
          ⬅ Back to Home
        </button>

        <h1 className="booking-title">My Bookings</h1>

        <div className="booking-container">
          {bookings.length === 0 ? (
            <div className="empty-booking-card">
              <img
                src="https://cdn-icons-png.flaticon.com/512/4076/4076503.png"
                alt="no booking"
                className="empty-img"
              />
              <h3>No Bookings Yet</h3>
              <p>Your booked services will appear here.</p>
            </div>
          ) : (
            bookings.map((b) => (
              <div className="modern-booking-card" key={b._id}>
                <div className="booking-header">
                  <h3>{b.serviceName || "Service"}</h3>

                  <span
                    className={`status-badge ${
                      b.status === "completed"
                        ? "status-success"
                        : b.status === "pending"
                        ? "status-pending"
                        : "status-cancel"
                    }`}
                  >
                    {b.status === "completed" && <CheckCircle size={16} />}
                    {b.status === "pending" && <Clock size={16} />}
                    {b.status === "cancelled" && <XCircle size={16} />}
                    {b.status}
                  </span>
                </div>

                <div className="booking-details">
                  <p><strong>Service Type:</strong> {b.serviceType}</p>

                  <p className="amount-row">
                    <CreditCard size={16} /> ₹{b.amount}
                  </p>

                  <p className="date-row">
                    <Calendar size={16} />{" "}
                    {new Date(b.date).toLocaleString()}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
