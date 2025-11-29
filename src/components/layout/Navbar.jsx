// import React from "react";
// import "../../styles/Navbar.css";
// import { Bell } from "lucide-react";
// import { User } from "lucide-react";

// const Navbar = () => {
//   return (
//     <nav className="navbar">
//       <div className="navbar-right">

//         {/* Notification */}
//         <div className="notif-box">
//           <Bell className="notif-icon" />
//           <span className="notif-dot"></span>
//         </div>
// <div className="profile-box">
//   <User className="profile-icon" />
// </div>


//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState, useRef, useEffect } from "react";
import "../../styles/Navbar.css";
import { Bell, User } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Close menu when clicked outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-right">

        {/* Notification */}
        <div className="notif-box">
          <Bell className="notif-icon" />
          <span className="notif-dot"></span>
        </div>

        {/* Profile Icon */}
        <div
          className="profile-box"
          onClick={() => setMenuOpen(!menuOpen)}
          ref={menuRef}
        >
          <User className="profile-icon" />

          {/* Dropdown Menu */}
          {menuOpen && (
            <div className="profile-menu">
              <a href="user/profile">My Profile</a>
              <a href="user/kundli">My Kundli</a>
              {/* <a href="/orders">My Orders</a> */}
              <a href="user/bookings">My Bookings</a>
              <a href="/saved-reports">Saved Reports</a>

              {/* <a href="/matchmaking">Matchmaking</a> */}
            <a href="/user/wallet">My Wallet</a>
              <a href="/user/settings">Settings</a>

              <a href="/auth">Login / Logout</a>
            </div>
          )}
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
