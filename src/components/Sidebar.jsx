// import React from "react";
// import { NavLink } from "react-router-dom";
// import "../styles/Sidebar.css";

// const Sidebar = () => {
//   return (
//     <div className="sidebar">
//       <h2>AstroConnect</h2>
//       <nav className="sidebar-nav">
//         <NavLink to="/" activeclassname="active">Home</NavLink>
//         <NavLink to="/astrology" activeclassname="active">Astrology</NavLink>
//         <NavLink to="/tarot" activeclassname="active">Tarot Reading</NavLink>
//         <NavLink to="/energy" activeclassname="active">Energy Reading</NavLink>
//         <NavLink to="/numerology" activeclassname="active">Numerology</NavLink>
//         <NavLink to="/about" activeclassname="active">About Us</NavLink>
//         <NavLink to="/contact" activeclassname="active">Contact Us</NavLink>
//       </nav>
//     </div>
//   );
// };

// export default Sidebar;

import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/Sidebar.css";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Hamburger for mobile */}
      <div className="hamburger" onClick={toggleSidebar}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <h2>AstroConnect</h2>
        <nav className="sidebar-nav">
          <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")} onClick={toggleSidebar}>Home</NavLink>
          <NavLink to="/astrology" className={({ isActive }) => (isActive ? "active" : "")} onClick={toggleSidebar}>Astrology</NavLink>
          <NavLink to="/tarot" className={({ isActive }) => (isActive ? "active" : "")} onClick={toggleSidebar}>Tarot Reading</NavLink>
          <NavLink to="/energy" className={({ isActive }) => (isActive ? "active" : "")} onClick={toggleSidebar}>Energy Reading</NavLink>
          <NavLink to="/numerology" className={({ isActive }) => (isActive ? "active" : "")} onClick={toggleSidebar}>Numerology</NavLink>
          <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")} onClick={toggleSidebar}>About Us</NavLink>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")} onClick={toggleSidebar}>Contact Us</NavLink>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
