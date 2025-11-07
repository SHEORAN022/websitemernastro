import React, { useState } from "react";
import "../styles/Book.css";

const Book = () => {
  const [formData, setFormData] = useState({ name:"", email:"", phone:"", service:"", date:"", time:"",place: ""  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! Your ${formData.service} is booked for ${formData.date} at ${formData.time}.`);
  };

  return (
    <div className="book-container">
      <h1>Book Your Reading</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} />
        <input type="text" name="place" placeholder="Your City / Place" value={formData.place} onChange={handleChange} required />
        <select name="service" value={formData.service} onChange={handleChange} required>
          <option value="">Select Service</option>
          <option value="Astrology">Astrology</option>
          <option value="Tarot Reading">Tarot Reading</option>
          <option value="Energy Reading">Energy Reading</option>
          <option value="Manifestation">Manifestation</option>
        </select>
        <input type="date" name="date" value={formData.date} onChange={handleChange} required />
        <input type="time" name="time" value={formData.time} onChange={handleChange} required />
        <button type="submit">Book Now</button>
      </form>
    </div>
  );
};

export default Book;
