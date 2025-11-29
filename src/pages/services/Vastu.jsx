
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import "../../styles/Vastu.css";

const API_URL = "https://adminastrotalk-1.onrender.com/api/payments";

const services = [
  {
    id: "residential",
    label: "Residential E-Vastu",
    description:
      "Comprehensive Vastu evaluation for flats, villas, independent houses, builder floors, or farmhouses.",
    benefits: [
      "Enhanced peace & harmony",
      "Improved family relationships",
      "Better health & prosperity",
    ],
    amount: 500,
    popular: true,
  },
  {
    id: "commercial",
    label: "Commercial E-Vastu",
    description: "Boost success and productivity in your business workspace.",
    benefits: ["Increased revenue", "Better client attraction", "Improved team harmony"],
    amount: 1000,
    popular: false,
  },
  {
    id: "industrial",
    label: "Industrial E-Vastu",
    description: "Specialized guidance for manufacturing units, IT parks, and industrial plants.",
    benefits: ["Optimized workflow", "Better machinery placement", "Enhanced productivity"],
    amount: 2000,
    popular: false,
  },
  {
    id: "b2b",
    label: "B2B Solutions",
    description: "Custom Vastu consultancy for corporates, showrooms, hotels, restaurants, and more.",
    benefits: ["Tailored solutions", "Industry-specific guidance", "Comprehensive analysis"],
    amount: 5000,
    popular: false,
  },
];

const b2bSubcategories = [
  { name: "Real Estate & Construction" },
  { name: "Corporate Offices & Startups" },
  { name: "Retail Chains & Showrooms" },
  { name: "Hotels & Hospitality" },
  { name: "Warehouses & Logistics" },
  { name: "Creative Studios" },
  { name: "Banks & Financial" },
  { name: "Restaurants & QSR" },
  { name: "Automobile Industry" },
  { name: "Fashion & Beauty" },
];

const deliveryModes = [
  { value: "PDF Report", desc: "Detailed PDF analysis" },
  { value: "Call Discussion", desc: "30-min consultation call" },
  { value: "Video Consultation", desc: "60-min video session" },
  { value: "On-Site Visit", desc: "In-person consultation (Extra charges)" },
];
const navLinks = [
  { name: "Home", link: "/#home" },
  { name: "About Us", link: "/about-us" },
  { name: "Energy", link: "/energy" },
  { name: "Astrology", link: "/astrology" },
  { name: "Vastu", link: "/vastu" },
  { name: "Manifestation", link: "/manifestation" },
  { name: "Material", link: "/material" },
  { name: "Blogs", link: "/blogs" },
  { name: "Careers", link: "/careers" },
  { name: "Contact", link: "/contact" },
  { name: "Login / Signup", link: "/auth" },
];

const Vastu = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    propertyStage: "",
    issue: "",
    deliveryMode: "",
  });

  // Detect Mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
      if (window.innerWidth < 1024) setSidebarOpen(false);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Close sidebar on ANY outside click
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (sidebarOpen) {
        setSidebarOpen(false);
      }
    };
    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, [sidebarOpen]);

  const handleServiceSelect = (service) => {
    if (service.id === "b2b") {
      setSelectedService(service);
      setStep("b2b");
    } else {
      setSelectedService(service);
      setStep(2);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const required = ["fullName", "email", "phone", "address", "propertyStage", "deliveryMode"];
    return required.every((f) => formData[f]);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setStep(3);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      alert("⚠️ Please complete all required fields.");
    }
  };

  const handlePayment = async () => {
    try {
      setLoading(true);
      const userId = "guest";
      const amount = selectedService.amount;

      const orderRes = await axios.post(`${API_URL}/create-order`, { amount, userId });

      if (!orderRes.data.success) {
        alert("❌ Failed to create order");
        setLoading(false);
        return;
      }

      const { order, key } = orderRes.data;

      const options = {
        key,
        amount: order.amount,
        currency: "INR",
        name: "AstroConnect",
        description: selectedService.label,
        order_id: order.id,

        handler: async (response) => {
          const verifyRes = await axios.post(`${API_URL}/verify`, {
            ...response,
            amount,
            userId,
          });

          if (verifyRes.data.success) {
            setStep(4);
            window.scrollTo({ top: 0, behavior: "smooth" });
          } else {
            alert("❌ Payment verification failed");
          }
        },

        prefill: {
          name: formData.fullName,
          email: formData.email,
          contact: formData.phone,
        },

        theme: { color: "#7b2cbf" },
      };

      const razor = new window.Razorpay(options);
      razor.on("payment.failed", () => alert("Payment failed. Please try again."));
      razor.open();
      setLoading(false);
    } catch (err) {
      alert("Payment process failed!");
      setLoading(false);
    }
  };

  const resetForm = () => {
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      address: "",
      propertyStage: "",
      issue: "",
      deliveryMode: "",
    });
    setSelectedService(null);
    setStep(1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="vastu-page">

      {/* Overlay — click to close sidebar */}
      {sidebarOpen && (
        <div className="sidebar-overlay" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Sidebar */}
      <aside
        className={`sidebar ${sidebarOpen ? "open" : ""}`}
        onClick={() => setSidebarOpen(false)}
      >
        <button className="sidebar-close">✕</button>

        <h2 className="sidebar-title">AstroConnect</h2>

        <nav className="sidebar-nav">
          {navLinks.map((item, i) => (
            <a key={i} href={item.link} className="sidebar-link">
              {item.name}
            </a>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className={`main-content ${!isMobile && sidebarOpen ? "shifted" : ""}`}>

        {/* Hamburger */}
        <button
          className="hamburger"
          onClick={(e) => {
            e.stopPropagation(); // prevent sidebar auto-close
            setSidebarOpen(!sidebarOpen);
          }}
        >
          {sidebarOpen ? "✕" : "☰"}
        </button>

        {/* HERO SECTION */}
        {step === 1 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <section className="hero-section">
              <div className="hero-container">

                <div className="hero-content">
                  <div className="hero-badge">Authentic Vastu Consultancy</div>

                  <h1 className="hero-title">
                    Transform Your Space with{" "}
                    <span className="gradient-text">Vastu Shastra</span>
                  </h1>

                  <p className="hero-description">
                    Harmonize your home or workplace with ancient Vastu wisdom.
                    Personalized solutions to enhance prosperity and positivity.
                  </p>

                  <button
                    className="hero-cta"
                    onClick={() =>
                      document
                        .querySelector(".services-section")
                        .scrollIntoView({ behavior: "smooth" })
                    }
                  >
                    Explore Services →
                  </button>
                </div>

                <motion.div
                  className="hero-image"
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80"
                    alt="home"
                  />
                </motion.div>
              </div>
            </section>

            {/* SERVICES SECTION */}
            <section className="services-section">
              <div className="container">
                <div className="section-header">
                  <h2 className="section-title">Our Vastu Services</h2>
                  <p className="section-subtitle">
                    Choose the perfect consultation package for your needs
                  </p>
                </div>

                <div className="services-grid">
                  {services.map((service, i) => (
                    <motion.div
                      key={i}
                      className={`service-card ${service.popular ? "popular" : ""}`}
                      onClick={() => handleServiceSelect(service)}
                      initial={{ opacity: 0, y: 40 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      {service.popular && (
                        <div className="popular-badge">Most Popular</div>
                      )}

                      <h3 className="service-title">{service.label}</h3>
                      <p className="service-desc">{service.description}</p>

                      <div className="service-benefits">
                        {service.benefits.map((b, idx) => (
                          <div key={idx} className="benefit-item">
                            • {b}
                          </div>
                        ))}
                      </div>

                      <div className="service-footer">
                        <div className="service-price">₹{service.amount}</div>
                        <button className="service-button">Select →</button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>
          </motion.div>
        )}
        {/* B2B CATEGORY STEP */}
        {step === "b2b" && (
          <motion.section className="form-section" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <div className="form-container">
              <button className="back-button" onClick={() => setStep(1)}>
                ← Back to Services
              </button>

              <h2 className="form-title">B2B Solutions</h2>
              <p className="form-subtitle">Select your industry sector</p>

              <div className="b2b-grid">
                {b2bSubcategories.map((cat, i) => (
                  <motion.div
                    key={i}
                    className="b2b-card"
                    onClick={() => {
                      setSelectedService({
                        ...selectedService,
                        label: `B2B – ${cat.name}`,
                        description: cat.name,
                      });
                      setStep(2);
                    }}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <h3>{cat.name}</h3>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>
        )}

        {/* FORM STEP */}
        {step === 2 && (
          <motion.section className="form-section" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <div className="form-container">
              <button
                className="back-button"
                onClick={() => setStep(selectedService.id === "b2b" ? "b2b" : 1)}
              >
                ← Back
              </button>

              <div className="selected-service-header">
                <div>
                  <h2 className="form-title">{selectedService.label}</h2>
                  <p className="form-subtitle">{selectedService.description}</p>
                </div>
              </div>

              <form className="consultation-form" onSubmit={handleFormSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label>Full Name *</label>
                    <input
                      name="fullName"
                      placeholder="Enter your full name"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>Email *</label>
                    <input
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Phone Number *</label>
                    <input
                      name="phone"
                      placeholder="+91 XXXXX XXXXX"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>Property Stage *</label>
                    <select
                      name="propertyStage"
                      value={formData.propertyStage}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select stage</option>
                      <option>Pre-Demolition</option>
                      <option>Layout Finalization</option>
                      <option>Under Construction</option>
                      <option>Constructed</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label>Property Address *</label>
                  <input
                    name="address"
                    placeholder="Complete address with city and pincode"
                    value={formData.address}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Describe Your Requirements (Optional)</label>
                  <textarea
                    name="issue"
                    placeholder="Share specific concerns or areas you'd like us to focus on..."
                    value={formData.issue}
                    onChange={handleChange}
                    rows={4}
                  />
                </div>

                <div className="form-group">
                  <label>Preferred Delivery Mode *</label>
                  <div className="delivery-options">
                    {deliveryModes.map((mode) => (
                      <label
                        key={mode.value}
                        className={`delivery-option ${
                          formData.deliveryMode === mode.value ? "selected" : ""
                        }`}
                      >
                        <input
                          type="radio"
                          name="deliveryMode"
                          value={mode.value}
                          checked={formData.deliveryMode === mode.value}
                          onChange={handleChange}
                          required
                        />

                        <div className="option-content">
                          <div>
                            <div className="option-title">{mode.value}</div>
                            <div className="option-desc">{mode.desc}</div>
                          </div>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                <button type="submit" className="submit-button">
                  Proceed to Payment →
                </button>
              </form>
            </div>
          </motion.section>
        )}

        {/* PAYMENT STEP */}
        {step === 3 && (
          <motion.section className="form-section" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <div className="form-container payment-container">
              <h2 className="form-title">Confirm & Pay</h2>
              <p className="form-subtitle">Review your consultation details</p>

              <div className="payment-summary">
                <div className="summary-row">
                  <span>Service</span> <strong>{selectedService.label}</strong>
                </div>
                <div className="summary-row">
                  <span>Name</span> <strong>{formData.fullName}</strong>
                </div>
                <div className="summary-row">
                  <span>Email</span> <strong>{formData.email}</strong>
                </div>
                <div className="summary-row">
                  <span>Delivery Mode</span> <strong>{formData.deliveryMode}</strong>
                </div>

                <div className="summary-row total">
                  <span>Total Amount</span>
                  <strong className="total-amount">₹{selectedService.amount}</strong>
                </div>
              </div>

              <button className="pay-button" onClick={handlePayment} disabled={loading}>
                {loading ? "Processing..." : "Pay Securely Now →"}
              </button>

              <button className="back-link" onClick={() => setStep(2)}>← Edit Details</button>
            </div>
          </motion.section>
        )}

        {/* SUCCESS STEP */}
        {step === 4 && (
          <motion.section className="form-section" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <div className="form-container success-container">
              <h2 className="success-title">Payment Successful!</h2>

              <p className="success-message">
                Thank you for choosing our Vastu consultation service.
                <br />
                <strong>{selectedService.label}</strong> has been booked successfully.
              </p>

              <div className="success-details">
                <div className="detail-item">
                  <span>Email: </span> <strong>{formData.email}</strong>
                </div>

                <div className="detail-item">
                  <span>Phone: </span> <strong>{formData.phone}</strong>
                </div>

                <div className="detail-item">
                  <span>Delivery Mode: </span> <strong>{formData.deliveryMode}</strong>
                </div>
              </div>

              <button onClick={resetForm} className="submit-button">
                Book Another Consultation →
              </button>
            </div>
          </motion.section>
        )}
      </main>
    </div>
  );
};

export default Vastu;