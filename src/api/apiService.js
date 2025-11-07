
import axios from "axios";

// 🌐 BASE API URL
const API_BASE =
  process.env.REACT_APP_API_URL || "https://adminastrotalk-1.onrender.com/api";

// ⚙️ Common axios instance
const api = axios.create({
  baseURL: API_BASE,
  headers: { "Content-Type": "application/json" },
});

// ===============================
// 🔮 1. KUNDLI CALCULATOR
// ===============================
export const KundliAPI = {
  calculate: (data) => api.post("/kundlis/calculate", data),
  getAll: () => api.get("/kundlis"),
  getById: (id) => api.get(`/kundlis/${id}`),
  delete: (id) => api.delete(`/kundlis/${id}`),
};

// ===============================
// 🔢 2. NUMEROLOGY CALCULATOR
// ===============================
export const NumerologyAPI = {
  calculate: (data) => api.post("/numerology/calculate", data),
  getAll: () => api.get("/numerology"),
  update: (id, data) => api.put(`/numerology/${id}`, data),
  delete: (id) => api.delete(`/numerology/${id}`),
};

// ===============================
// 💞 3. COMPATIBILITY CALCULATOR
// ===============================
export const CompatibilityAPI = {
  calculate: (data) => api.post("/compatibility/calculate", data),
  getAll: () => api.get("/compatibility"),
};

// ===============================
// 💎 4. GEMSTONE RECOMMENDATION
// ===============================
export const GemstoneAPI = {
  calculate: (data) => api.post("/gemstonerecommendation/calculate", data),
};

// ===============================
// 🪔 5. PANCHANG CALCULATOR
// ===============================
export const PanchangAPI = {
  calculate: (data) => api.post("/panchang", data),
};

// ===============================
// 🪐 6. PLANETARY POSITION
// ===============================
export const PlanetaryAPI = {
  calculate: (data) => api.post("/planetary/calculate", data),
  getAll: () => api.get("/planetary"),
  update: (id, data) => api.put(`/planetary/${id}`, data),
  delete: (id) => api.delete(`/planetary/${id}`),
};

// ===============================
// 🌠 7. TRANSIT CALCULATOR
// ===============================
export const TransitAPI = {
  calculate: (data) => api.post("/transits/calculate", data),
  getAll: () => api.get("/transits"),
  update: (id, data) => api.put(`/transits/${id}`, data),
  delete: (id) => api.delete(`/transits/${id}`),
};

// ===============================
// ♌ 8. ZODIAC CALCULATOR
// ===============================
export const ZodiacAPI = {
  calculate: (data) => api.post("/zodiac/calculate", data),
  getAll: () => api.get("/zodiac"),
  update: (id, data) => api.put(`/zodiac/${id}`, data),
  delete: (id) => api.delete(`/zodiac/${id}`),
};

// ===============================
// 🔥 9. MANGLIK CALCULATOR
// ===============================
export const ManglikAPI = {
  calculate: (data) => api.post("/manglik/calculate", data),
};

// ===============================
// 🪶 10. DASHA CALCULATOR
// ===============================
export const DashaAPI = {
  calculate: (data) => api.post("/dashas/calculate", data),
  getAll: () => api.get("/dashas"),
  update: (id, data) => api.put(`/dashas/${id}`, data),
  delete: (id) => api.delete(`/dashas/${id}`),
};

// ===============================
// 🌙 11. NAKSHATRA CALCULATOR
// ===============================
export const NakshatraAPI = {
  calculate: (data) => api.post("/nakshatra/calculate", data),
  getAll: () => api.get("/nakshatra"),
  update: (id, data) => api.put(`/nakshatra/${id}`, data),
  delete: (id) => api.delete(`/nakshatra/${id}`),
};

// ===============================
// ☀️ 12. DAILY PREDICTION
// ===============================
export const DailyPredictionAPI = {
  getAll: () => api.get("/daily-predictions"),
  create: (data) => api.post("/daily-predictions", data),
  update: (id, data) => api.put(`/daily-predictions/${id}`, data),
  delete: (id) => api.delete(`/daily-predictions/${id}`),
};

// ===============================
// ♈ 13. HOROSCOPE CALCULATOR (🆕 Added)
// ===============================
export const HoroscopeAPI = {
  calculate: (data) => api.post("/horoscope/calculate", data),
  getAll: () => api.get("/horoscope"),
  update: (id, data) => api.put(`/horoscope/${id}`, data),
  delete: (id) => api.delete(`/horoscope/${id}`),
};

// ===============================
// 🌍 EXPORT EVERYTHING
// ===============================
export const apiService = {
  KundliAPI,
  NumerologyAPI,
  CompatibilityAPI,
  GemstoneAPI,
  PanchangAPI,
  PlanetaryAPI,
  TransitAPI,
  ZodiacAPI,
  ManglikAPI,
  DashaAPI,
  NakshatraAPI,
  DailyPredictionAPI,
  HoroscopeAPI, // ✅ added here
};

export default apiService;
