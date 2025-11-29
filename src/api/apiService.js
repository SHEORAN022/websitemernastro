
import axios from "axios";

// 🌐 BASE API URL
const API_BASE =
  // process.env.REACT_APP_API_URL || "https://adminastrotalk-1.onrender.com/api";
    process.env.REACT_APP_API_URL || "http://localhost:7000/api";

// ⚙️ Common axios instance
const api = axios.create({
  baseURL: API_BASE,
  headers: { "Content-Type": "application/json" },
});

// ===============================
// 🔮 1. KUNDLI CALCULATOR (Updated)
// ===============================
export const KundliAPI = {
  // 🧮 Calculate & Save Kundli
  calculate: async (data) => {
    try {
      console.log("🪔 Sending Kundli Data:", data);
      const res = await api.post("/kundlis/calculate", data, {
        timeout: 60000, // ⏱️ prevent hanging if Prokerala takes time
      });

      if (res.data?.success) {
        console.log("✅ Kundli Calculated Successfully:", res.data);
      } else {
        console.warn("⚠️ Unexpected Kundli Response:", res.data);
      }

      return res.data;
    } catch (err) {
      console.error("❌ Kundli Calculation Error:", err.response?.data || err.message);
      throw new Error(
        err.response?.data?.message || "Kundli calculation failed. Please try again."
      );
    }
  },

  // 📜 Get All Kundlis
  getAll: async () => {
    try {
      const res = await api.get("/kundlis", { timeout: 30000 });
      console.log("📋 Fetched Kundlis:", res.data);
      return res.data.data || res.data; // handles both wrapped/unwrapped formats
    } catch (err) {
      console.error("❌ Error Fetching Kundlis:", err.response?.data || err.message);
      throw new Error("Unable to fetch kundli list.");
    }
  },

  // 🔍 Get Single Kundli by ID
  getById: async (id) => {
    try {
      const res = await api.get(`/kundlis/${id}`);
      console.log("📄 Single Kundli Data:", res.data);
      return res.data;
    } catch (err) {
      console.error("❌ Error Fetching Single Kundli:", err.response?.data || err.message);
      throw new Error("Failed to load kundli details.");
    }
  },

  // ✏️ Update Existing Kundli
  update: async (id, data) => {
    try {
      const res = await api.put(`/kundlis/${id}`, data);
      console.log("📝 Kundli Updated:", res.data);
      return res.data;
    } catch (err) {
      console.error("❌ Kundli Update Error:", err.response?.data || err.message);
      throw new Error("Failed to update kundli.");
    }
  },

  // 🗑️ Delete Kundli
  delete: async (id) => {
    try {
      const res = await api.delete(`/kundlis/${id}`);
      console.log("🗑️ Kundli Deleted:", res.data);
      return res.data;
    } catch (err) {
      console.error("❌ Kundli Deletion Error:", err.response?.data || err.message);
      throw new Error("Failed to delete kundli.");
    }
  },
};


// ===============================
// 🔢 2. NUMEROLOGY CALCULATOR
// ===============================
export const NumerologyAPI = {
  // 🧮 Calculate Numerology (Prokerala + local fallback)
  calculate: async (data) => {
    try {
      console.log("🪄 Sending Numerology Request:", data);
      const res = await api.post("/numerology/calculate", data);
      console.log("✅ Numerology API Response:", res.data);
      return res.data.numerology || res.data.data || res.data;
    } catch (err) {
      console.error("❌ Numerology Error:", err.response?.data || err.message);
      throw new Error(err.response?.data?.message || "Numerology calculation failed.");
    }
  },

  getAll: async () => {
    try {
      const res = await api.get("/numerology");
      console.log("📋 Numerology List:", res.data);
      return res.data.data || [];
    } catch (err) {
      console.error("❌ Fetch Error:", err.response?.data || err.message);
      throw new Error("Failed to fetch numerology records.");
    }
  },

  update: async (id, data) => {
    try {
      const res = await api.put(`/numerology/${id}`, data);
      console.log("📝 Numerology Updated:", res.data);
      return res.data.data || res.data;
    } catch (err) {
      console.error("❌ Update Error:", err.response?.data || err.message);
      throw new Error("Failed to update numerology record.");
    }
  },

  delete: async (id) => {
    try {
      const res = await api.delete(`/numerology/${id}`);
      console.log("🗑️ Numerology Deleted:", res.data);
      return res.data;
    } catch (err) {
      console.error("❌ Delete Error:", err.response?.data || err.message);
      throw new Error("Failed to delete numerology record.");
    }
  },
};

// ===============================
// 💞 3. COMPATIBILITY CALCULATOR (Updated)
// ===============================
export const CompatibilityAPI = {
  // 🔮 Calculate Compatibility
  calculate: async (data) => {
    try {
      console.log("💞 Sending Compatibility Data:", data);
      const res = await api.post("/compatibility/calculate", {
        boyName: data.fullNameA || data.boyName,
        boyDob: data.dobA || data.boyDob,
        boyTob: data.timeSlotA || data.boyTob,
        boyPlace: data.birthPlaceA || data.boyPlace,
        girlName: data.fullNameB || data.girlName,
        girlDob: data.dobB || data.girlDob,
        girlTob: data.timeSlotB || data.girlTob,
        girlPlace: data.birthPlaceB || data.girlPlace,
      });
      console.log("✅ Compatibility Response:", res.data);
      return res;
    } catch (err) {
      console.error("❌ Compatibility API Error:", err.response?.data || err.message);
      throw err;
    }
  },

  // 📋 Fetch all records
  getAll: async () => {
    try {
      const res = await api.get("/compatibility");
      console.log("📜 Compatibility Records:", res.data);
      return res;
    } catch (err) {
      console.error("❌ Fetch Compatibility Error:", err.response?.data || err.message);
      throw err;
    }
  },

  // ✏️ Update existing record
  update: async (id, data) => {
    try {
      const res = await api.put(`/compatibility/${id}`, data);
      console.log("📝 Updated Compatibility Record:", res.data);
      return res;
    } catch (err) {
      console.error("❌ Update Compatibility Error:", err.response?.data || err.message);
      throw err;
    }
  },

  // ❌ Delete a record
  delete: async (id) => {
    try {
      const res = await api.delete(`/compatibility/${id}`);
      console.log("🗑️ Deleted Compatibility Record:", res.data);
      return res;
    } catch (err) {
      console.error("❌ Delete Compatibility Error:", err.response?.data || err.message);
      throw err;
    }
  },
};

// ===============================
// 💎 4. GEMSTONE RECOMMENDATION (Updated)
// ===============================
export const GemstoneAPI = {
  // 🧮 Calculate & Save Gemstone Recommendation
  calculate: async (data) => {
    try {
      console.log("💎 Sending Gemstone Data:", data);

      // 🧭 API endpoint (updated to your backend route)
      const res = await api.post("/calculators/gemstone", data, {
        timeout: 30000, // avoid hanging requests
      });

      if (res.data?.success) {
        console.log(`✅ Gemstone Calculated (${res.data.source}):`, res.data.result);
        return res.data.result;
      } else {
        console.warn("⚠️ Unexpected Gemstone Response:", res.data);
        throw new Error(res.data?.message || "Gemstone calculation failed");
      }
    } catch (err) {
      console.error("❌ Gemstone Calculation Error:", err.response?.data || err.message);
      throw new Error(
        err.response?.data?.message ||
          "Unable to calculate gemstone recommendation. Please try again."
      );
    }
  },

  // 📜 Fetch All Previous Gemstone Records
  getAll: async () => {
    try {
      const res = await api.get("/calculators/gemstone");
      console.log("📋 Gemstone List:", res.data);
      return res.data.data || [];
    } catch (err) {
      console.error("❌ Error Fetching Gemstone Records:", err.response?.data || err.message);
      throw new Error("Failed to load gemstone records.");
    }
  },
};


// ===============================
// 🪔 5. PANCHANG CALCULATOR
// ===============================
export const PanchangAPI = {
  calculate: (data) => api.post("/panchang", data),
};

// ===============================
// 🪐 12. PLANETARY CALCULATOR (Final Stable Version)
// ===============================
export const PlanetaryAPI = {
  // 🧮 Calculate & Save Planetary Data
  calculate: async (data) => {
    try {
      console.log("🪐 Sending Planetary Data:", data);
      const res = await api.post("/planetary/calculate", data, { timeout: 30000 });

      // Handle different backend response formats safely
      const result =
        res?.data?.data ||
        res?.data?.result ||
        (Array.isArray(res?.data) ? res.data[0] : res?.data);

      if (!result) {
        console.warn("⚠️ Unexpected Planetary API response:", res.data);
        throw new Error("Empty or invalid response from Planetary API");
      }

      console.log("✅ Planetary Calculated:", result);
      return result;
    } catch (err) {
      console.error("❌ Planetary API Error:", err.response?.data || err.message);
      throw new Error(
        err.response?.data?.message ||
          "Something went wrong while calculating planetary positions."
      );
    }
  },

  // 📜 Fetch All Planetary Records
  getAll: async () => {
    try {
      const res = await api.get("/planetary", { timeout: 20000 });
      console.log("📋 All Planetary Records:", res.data);
      return res?.data?.data || res.data;
    } catch (err) {
      console.error("❌ Error fetching planetary records:", err.response?.data || err.message);
      throw new Error("Failed to fetch planetary records.");
    }
  },

  // ✏️ Update an Existing Record
  update: async (id, data) => {
    try {
      console.log("✏️ Updating Planetary Entry:", id);
      const res = await api.put(`/planetary/${id}`, data);
      console.log("✅ Planetary Record Updated:", res.data);
      return res?.data?.data || res.data;
    } catch (err) {
      console.error("❌ Error updating planetary record:", err.response?.data || err.message);
      throw new Error("Failed to update planetary entry.");
    }
  },

  // 🗑️ Delete a Record
  delete: async (id) => {
    try {
      console.log("🗑️ Deleting Planetary Record:", id);
      const res = await api.delete(`/planetary/${id}`);
      console.log("✅ Planetary Record Deleted:", res.data);
      return res?.data?.data || res.data;
    } catch (err) {
      console.error("❌ Error deleting planetary record:", err.response?.data || err.message);
      throw new Error("Failed to delete planetary record.");
    }
  },
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
// ♈ 12. ZODIAC CALCULATOR (Final Stable Version)
// ===============================
export const ZodiacAPI = {
  // 🧮 Calculate & Save Zodiac
  calculate: async (data) => {
    try {
      console.log("♈ Sending Zodiac Data:", data);
      const res = await api.post("/zodiac/calculate", data, { timeout: 20000 });

      if (res.data?._id || res.data?.zodiacSign) {
        console.log("✅ Zodiac Calculated Successfully:", res.data);
        return res.data;
      } else {
        console.warn("⚠️ Unexpected Zodiac API Response:", res.data);
        throw new Error("Unexpected response format from Zodiac API");
      }
    } catch (err) {
      console.error("❌ Zodiac API Error:", err.response?.data || err.message);
      throw new Error(
        err.response?.data?.message || "Zodiac calculation failed. Please try again."
      );
    }
  },

  // 📜 Fetch All Zodiac Entries
  getAll: async () => {
    try {
      const res = await api.get("/zodiac", { timeout: 15000 });
      console.log("📋 All Zodiac Entries:", res.data);
      return Array.isArray(res.data) ? res.data : res.data?.data || [];
    } catch (err) {
      console.error("❌ Error fetching Zodiac entries:", err.response?.data || err.message);
      throw new Error("Unable to fetch Zodiac entries.");
    }
  },

  // ✏️ Update Existing Entry
  update: async (id, data) => {
    try {
      console.log("📝 Updating Zodiac Entry:", id);
      const res = await api.put(`/zodiac/${id}`, data, { timeout: 20000 });
      console.log("✅ Zodiac Updated:", res.data);
      return res.data;
    } catch (err) {
      console.error("❌ Error updating Zodiac entry:", err.response?.data || err.message);
      throw new Error("Failed to update Zodiac entry.");
    }
  },

  // 🗑️ Delete Entry
  delete: async (id) => {
    try {
      console.log("🗑️ Deleting Zodiac Entry:", id);
      const res = await api.delete(`/zodiac/${id}`, { timeout: 15000 });
      console.log("✅ Zodiac Deleted:", res.data);
      return res.data;
    } catch (err) {
      console.error("❌ Error deleting Zodiac entry:", err.response?.data || err.message);
      throw new Error("Failed to delete Zodiac entry.");
    }
  },
};

// ===============================
// 🔯 9. MANGLIK CALCULATOR (Final Tested)
// ===============================
export const ManglikAPI = {
  // 🧮 Calculate & Save Manglik Result
  calculate: async (data) => {
    try {
      console.log("🔯 Sending Manglik Data:", data);
      const res = await api.post("/manglik/calculate", data, {
        timeout: 30000,
      });

      // ✅ Accepts any valid format: { success, data } or { isManglik, ... }
      const result =
        res?.data?.data ||
        res?.data?.result ||
        (res?.data?.success ? res.data : null) ||
        res?.data;

      if (!result) {
        console.warn("⚠️ Unexpected empty response:", res.data);
        throw new Error("Empty response from Manglik API");
      }

      console.log("✅ Manglik Calculated Result:", result);
      return result;
    } catch (err) {
      console.error("❌ Manglik API Error:", err.response?.data || err.message);
      throw new Error(
        err.response?.data?.message ||
          "Something went wrong while calculating Manglik."
      );
    }
  },

  // 📜 Fetch All Manglik Records
  getAll: async () => {
    try {
      const res = await api.get("/manglik", { timeout: 20000 });
      return res?.data?.data || res?.data;
    } catch (err) {
      console.error("❌ Error fetching Manglik records:", err.response?.data || err.message);
      throw new Error("Failed to fetch Manglik list.");
    }
  },

  // ✏️ Update Existing Manglik Record
  update: async (id, data) => {
    try {
      const res = await api.put(`/manglik/${id}`, data);
      return res?.data?.data || res?.data;
    } catch (err) {
      console.error("❌ Error updating Manglik record:", err.response?.data || err.message);
      throw new Error("Failed to update Manglik entry.");
    }
  },

  // 🗑️ Delete Manglik Record
  delete: async (id) => {
    try {
      const res = await api.delete(`/manglik/${id}`);
      return res?.data?.data || res?.data;
    } catch (err) {
      console.error("❌ Error deleting Manglik record:", err.response?.data || err.message);
      throw new Error("Failed to delete Manglik record.");
    }
  },
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
// 🌙 11. NAKSHATRA CALCULATOR (Stable Version)
// ===============================
export const NakshatraAPI = {
  // 🧮 Calculate & Save Nakshatra
  calculate: async (data) => {
    try {
      console.log("🌙 Sending Nakshatra Data:", data);
      const res = await api.post("/nakshatra/calculate", data, { timeout: 30000 });

      const result =
        res?.data?.data ||
        res?.data?.result ||
        (Array.isArray(res?.data) ? res.data[0] : res?.data);

      if (!result) throw new Error("Empty or invalid Nakshatra response");
      console.log("✅ Nakshatra Calculated:", result);
      return result;
    } catch (err) {
      console.error("❌ Nakshatra API Error:", err.response?.data || err.message);
      throw new Error(
        err.response?.data?.message ||
          "Something went wrong while calculating Nakshatra."
      );
    }
  },

  // 📜 Fetch All Nakshatra Entries
  getAll: async () => {
    try {
      const res = await api.get("/nakshatra", { timeout: 20000 });
      return res?.data?.data || res.data;
    } catch (err) {
      throw new Error("Failed to fetch Nakshatra list.");
    }
  },

  // ✏️ Update Nakshatra Entry
  update: async (id, data) => {
    try {
      const res = await api.put(`/nakshatra/${id}`, data);
      return res?.data?.data || res.data;
    } catch (err) {
      throw new Error("Failed to update Nakshatra entry.");
    }
  },

  // 🗑️ Delete Nakshatra Entry
  delete: async (id) => {
    try {
      const res = await api.delete(`/nakshatra/${id}`);
      return res?.data?.data || res.data;
    } catch (err) {
      throw new Error("Failed to delete Nakshatra entry.");
    }
  },
};


// ===============================
// ☀️ 12. DAILY PREDICTION (Prokerala Integrated)
// ===============================
export const DailyPredictionAPI = {
  getAll: () => api.get("/daily-predictions"),

  create: (data) => api.post("/daily-predictions", data),

  update: (id, data) => api.put(`/daily-predictions/${id}`, data),

  delete: (id) => api.delete(`/daily-predictions/${id}`),

  // 🌟 NEW → Fetch Daily Horoscope from Prokerala
  fetchFromProkerala: (data) => api.post("/daily-predictions/fetch", data),
};

// ===============================
// ♈ 13. HOROSCOPE CALCULATOR (✅ Fixed)
// ===============================
export const HoroscopeAPI = {
  calculate: (data) => api.post("/horoscopes/calculate", data),
  getAll: () => api.get("/horoscopes"),
  update: (id, data) => api.put(`/horoscopes/${id}`, data),
  delete: (id) => api.delete(`/horoscopes/${id}`),
};
// ===============================
// 💳 14. PAYMENT API (Razorpay Integration)
// ===============================
export const PaymentAPI = {
  // 🧾 Create Razorpay Order
  createOrder: async ({ amount, userId, planId }) => {
    try {
      console.log("🧾 Creating Razorpay Order:", { amount, userId, planId });

      // ❗ DIRECT BACKEND URL (NO /api PREFIX)
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL.replace("/api", "")}/payments/create-order`,
        {
          amount,
          userId,
          planId,
        }
      );

      return res.data;
    } catch (err) {
      console.error("❌ Payment Order Error:", err.response?.data || err.message);
      return { success: false, error: err.response?.data || err.message };
    }
  },

  // ✅ Verify Payment & Add to Wallet / Booking
  verifyPayment: async (data) => {
    try {
      console.log("🔍 Verifying Payment:", data);

      // ❗ DIRECT BACKEND URL (NO /api PREFIX)
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL.replace("/api", "")}/payments/verify`,
        data
      );

      return res.data;
    } catch (err) {
      console.error("❌ Payment Verification Error:", err.response?.data || err.message);
      return { success: false, error: err.response?.data || err.message };
    }
  },
};
export const BookingAPI = {
  getMyBookings: async (userId) => {
    try {
      const res = await api.get(`/bookings/${userId}`);
      return res.data;
    } catch (err) {
      console.error("Booking Fetch Error:", err);
      return { success: false, bookings: [] };
    }
  },

  addBooking: async (data) => {
    try {
      const res = await api.post("/bookings/add", data);
      return res.data;
    } catch (err) {
      console.error("Booking Add Error:", err);
      return { success: false };
    }
  },
};

// ===============================
// 📝 15. USER SAVED REPORTS API
// ===============================
export const UserReportAPI = {
  // ➕ Add Report
  add: async (data) => {
    try {
      const token = localStorage.getItem("token");

      const res = await api.post("/user-reports/add", data, {
        headers: { Authorization: `Bearer ${token}` },
      });

      return res.data;
    } catch (err) {
      console.error("User Report Add Error:", err);
      return { success: false };
    }
  },

  // 📄 Get all reports for a user
  getByUser: async (userId) => {
    try {
      const token = localStorage.getItem("token");

      const res = await api.get(`/user-reports/${userId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      return res.data;
    } catch (err) {
      console.error("User Report Fetch Error:", err);
      return { success: false, reports: [] };
    }
  },

  // ❌ Delete a Report
  delete: async (id) => {
    try {
      const token = localStorage.getItem("token");

      const res = await api.delete(`/user-reports/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      return res.data;
    } catch (err) {
      console.error("User Report Delete Error:", err);
      return { success: false };
    }
  },
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
  HoroscopeAPI, 
  PaymentAPI, 
  BookingAPI,
  UserReportAPI, 
};

export default apiService;
