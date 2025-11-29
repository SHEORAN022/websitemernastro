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
      {/* Hamburger for Mobile */}
      <div className="hamburger" onClick={toggleSidebar}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      {/* SIDEBAR */}
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <h2 className="sidebar-logo">AstroConnect</h2>

        <nav className="sidebar-nav">

          {/* HOME MENU GROUP */}
          <div className="sidebar-group">
            <p className="sidebar-group-title">Home</p>

            <NavLink 
              to="/" 
              className={({ isActive }) => (isActive ? "active" : "")} 
              onClick={toggleSidebar}
            >
              Home
            </NavLink>

            <NavLink 
              to="/about-us" 
              className={({ isActive }) => (isActive ? "active" : "")} 
              onClick={toggleSidebar}
            >
              About Us
            </NavLink>

            <NavLink 
              to="/services" 
              className={({ isActive }) => (isActive ? "active" : "")} 
              onClick={toggleSidebar}
            >
              Our Services
            </NavLink>

            <NavLink 
              to="/careers" 
              className={({ isActive }) => (isActive ? "active" : "")} 
              onClick={toggleSidebar}
            >
              Careers
            </NavLink>

            <NavLink 
              to="/faqs" 
              className={({ isActive }) => (isActive ? "active" : "")} 
              onClick={toggleSidebar}
            >
              FAQs
            </NavLink>
          </div>

          {/* OTHER MAIN MENU ITEMS */}
          <NavLink 
            to="/energy" 
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={toggleSidebar}
          >
            Energy
          </NavLink>

          <NavLink 
            to="/astrology" 
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={toggleSidebar}
          >
            Astrology
          </NavLink>

          <NavLink 
            to="/vastu" 
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={toggleSidebar}
          >
            Vastu
          </NavLink>

          <NavLink 
            to="/manifestation" 
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={toggleSidebar}
          >
            Manifestation
          </NavLink>

          <NavLink 
            to="/material" 
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={toggleSidebar}
          >
            Material
          </NavLink>

          <NavLink 
            to="/blogs" 
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={toggleSidebar}
          >
            Blogs
          </NavLink>

          <NavLink 
            to="/account" 
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={toggleSidebar}
          >
            Your Account
          </NavLink>

        </nav>
      </div>
    </>
  );
};

export default Sidebar;
