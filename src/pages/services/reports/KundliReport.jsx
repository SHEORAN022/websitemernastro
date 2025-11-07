// src/pages/services/reports/KundliReport.jsx
import React from "react";
// import "../../styles/KundliReport.css";

const KundliReport = ({ kundli }) => {
  if (!kundli) return null;

  const { name, timeOfBirth, kundliData } = kundli;
  const { sunSign, moonSign, ascendant, description } = kundliData || {};

  return (
    <div className="kundli-report-container">
      <h2>Kundli Report</h2>

      {/* Personal Info */}
      <div className="kundli-personal-card">
        <p><strong>Name:</strong> {name}</p>
        <p><strong>Time of Birth:</strong> {timeOfBirth}</p>
      </div>

      {/* Zodiac Info */}
      <div className="kundli-zodiac-card">
        <p><strong>Sun Sign:</strong> {sunSign}</p>
        <p><strong>Moon Sign:</strong> {moonSign}</p>
        <p><strong>Ascendant (Lagna):</strong> {ascendant}</p>
        <p><strong>Summary:</strong> {description}</p>
      </div>
    </div>
  );
};

export default KundliReport;
