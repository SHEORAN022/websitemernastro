// import React, { useEffect, useState } from "react";
// import "../../styles/SavedReports.css";
// import { UserReportAPI } from "../../api/apiService";

// export default function SavedReports() {
//   const [user, setUser] = useState(null);
//   const [reports, setReports] = useState([]);
//   const [loading, setLoading] = useState(true);

//   // Load logged-in user
//   useEffect(() => {
//     const u = JSON.parse(localStorage.getItem("user"));
//     if (u) {
//       setUser(u);
//       loadReports(u._id);
//     }
//   }, []);

//   // Load Saved Reports
//   const loadReports = async (userId) => {
//     try {
//       setLoading(true);
//       const data = await UserReportAPI.getUserReports(userId);

//       if (data.success) {
//         setReports(data.reports || []);
//       }
//     } catch (err) {
//       console.log("Report Load Error:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (!user) return <h2 className="please-login">Please Login First</h2>;

//   return (
//     <div className="saved-reports-wrapper">
//       {/* Page Heading */}
//       <div className="page-header">
//         <h1>📁 Saved Reports</h1>
//         <p className="sub-text">All your saved astrological reports in one place</p>
//       </div>

//       {/* Loading State */}
//       {loading ? (
//         <div className="loader-container">
//           <div className="spinner"></div>
//           <p>Fetching your saved reports...</p>
//         </div>
//       ) : reports.length === 0 ? (
//         // Empty State
//         <div className="empty-box">
//           <img
//             src="https://cdn-icons-png.flaticon.com/512/4076/4076500.png"
//             alt="empty"
//             className="empty-img"
//           />
//           <h3>No Reports Found</h3>
//           <p>You have not saved any reports yet.</p>
//         </div>
//       ) : (
//         // Report List
//         <div className="report-grid">
//           {reports.map((r) => (
//             <div className="report-card" key={r._id}>
//               <div className="report-header">
//                 <h3>{r.title}</h3>
//                 <span className="status-tag">{r.type || "general"}</span>
//               </div>

//               <p className="report-type">
//                 Report Type: <strong>{r.type || "Not defined"}</strong>
//               </p>

//               <p className="report-date">
//                 Saved On: {new Date(r.createdAt).toLocaleDateString()}
//               </p>

//               <div className="report-actions">
//                 <button className="view-btn">View</button>
//                 <button className="download-btn">Download</button>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }
import React, { useEffect, useState } from "react";
import "../../styles/SavedReports.css";
import { UserReportAPI } from "../../api/apiService";

export default function SavedReports() {
  const [user, setUser] = useState(null);
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const u = JSON.parse(localStorage.getItem("user"));
    if (u) {
      setUser(u);
      loadReports(u._id);
    }
  }, []);

  const loadReports = async (userId) => {
    try {
      setLoading(true);
      const data = await UserReportAPI.getUserReports(userId);

      if (data.success) setReports(data.reports || []);
    } catch (err) {
      console.log("Report Load Error:", err);
    } finally {
      setLoading(false);
    }
  };

  if (!user) return <h2 className="please-login">Please Login First</h2>;

  return (
    <div className="saved-reports-wrapper">

      {/* HEADER SECTION */}
      <div className="page-header fade-in">
        <h1>📁 Saved Reports</h1>
        <p>Your downloaded & saved astrology reports appear here.</p>
      </div>

      {/* LOADING */}
      {loading ? (
        <div className="loader-container fade-in">
          <div className="spinner"></div>
          <p>Fetching your reports...</p>
        </div>
      ) : reports.length === 0 ? (

        /* EMPTY STATE */
        <div className="empty-box fade-in">
          <img
            src="https://cdn-icons-png.flaticon.com/512/4076/4076500.png"
            alt="empty"
            className="empty-img"
          />
          <h3>No Reports Found</h3>
          <p>You haven't saved any reports yet.</p>
        </div>

      ) : (

        /* REPORT GRID LIST */
        <div className="report-grid fade-in">
          {reports.map((r) => (
            <div className="report-card slide-up" key={r._id}>
              
              <div className="report-header">
                <h3>{r.title}</h3>
                <span className="status-tag">
                  {r.type || "general"}
                </span>
              </div>

              <p className="report-type">
                <strong>Type:</strong> {r.type || "Not defined"}
              </p>

              <p className="report-date">
                <strong>Saved On:</strong> {new Date(r.createdAt).toLocaleDateString()}
              </p>

              {/* ACTIONS */}
              <div className="report-actions">
                <button className="view-btn">View</button>
                <button className="download-btn">Download</button>
              </div>

            </div>
          ))}
        </div>
      )}
    </div>
  );
}
