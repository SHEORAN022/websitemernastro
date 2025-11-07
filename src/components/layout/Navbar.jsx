import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import "../../styles/Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about-us" }, 
    { name: "Energy", path: "/energy" },
    { name: "Movement", path: "/movement" },
    { name: "Space Vastu", path: "/space-vastu" },
    { name: "Manifestation", path: "/manifestation" },
    { name: "Material", path: "/material" },
    { name: "Blogs", path: "/blogs" },
    { name: "Login / Signup", path: "/auth" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/" className="navbar-logo">
          <img
            src="https://res.cloudinary.com/doerrm32l/image/upload/v1761893673/astrologo_fjndbn.png"
            alt="Astro Logo"
            loading="lazy"
          />
          <span>AstroConnect</span>
        </Link>

        {/* Navigation Links */}
        <div className={`navbar-links ${isOpen ? "open" : ""}`}>
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `nav-item ${isActive ? "active" : ""}`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        {/* Hamburger */}
        <div
          className={`hamburger ${isOpen ? "active" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
