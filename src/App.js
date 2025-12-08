// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/layout/Navbar";
// import Footer from "./components/layout/Footer";

// // Main pages
// import Home from "./pages/Home";
// import Blogs from "./pages/Blogs";
// import BlogDetail from "./pages/BlogDetail";
// import Book from "./pages/Book";
// import AboutUs from "./pages/AboutUs";
// import Contact from "./pages/Contact";
// import Careers from "./pages/Careers";
// import Auth from "./pages/Auth";

// // Services
// import Energy from "./pages/services/Energy";
// import Movement from "./pages/services/Movement";
// import SpaceVastu from "./pages/services/SpaceVastu";
// import Manifestation from "./pages/services/Manifestation";
// import Material from "./pages/services/Material";
// import ServiceDetails from "./pages/services/ServiceDetails";

// export default function App() {
//   return (
//     <Router>
//       <Navbar />
//       <div style={{ minHeight: "80vh" }}>
//         <Routes>
//           {/* Main pages */}
//           <Route path="/" element={<Home />} />
//           <Route path="/blogs" element={<Blogs />} />
//           <Route path="/blog/:id" element={<BlogDetail />} />
//           <Route path="/book" element={<Book />} />
//           <Route path="/about-us" element={<AboutUs />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/careers" element={<Careers />} /> 
//           <Route path="/auth" element={<Auth />} />

//           {/* Services */}
//           <Route path="/energy" element={<Energy />} />
//           <Route path="/movement" element={<Movement />} />
//           <Route path="/space-vastu" element={<SpaceVastu />} />
//           <Route path="/manifestation" element={<Manifestation />} />
//           <Route path="/material" element={<Material />} />
//           <Route path="/service/:id" element={<ServiceDetails />} />

//           {/* Fallback for 404 */}
//           <Route
//             path="*"
//             element={
//               <div className="text-center py-20 text-gray-600 text-lg">
//                 404 - Page Not Found
//               </div>
//             }
//           />
//         </Routes>
//       </div>
//       <Footer />
//     </Router>
//   );
// }

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Main pages
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import BlogDetail from "./pages/BlogDetail";
import Book from "./pages/Book";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Careers from "./pages/Careers";
import Auth from "./pages/Auth";
import KnowMore from "./pages/KnowMore";
import FreeCalculatorPage from "./pages/FreeCalculatorPage";

// Services
import Energy from "./pages/services/Energy";
import Astrology from "./pages/services/Astrology";
import Vastu from "./pages/services/Vastu";
import Manifestation from "./pages/services/Manifestation";
import Material from "./pages/services/Material";
import ServiceDetails from "./pages/services/ServiceDetails";
import TarotReading from "./pages/services/TarotReading";
import MyProfile from "./pages/user/MyProfile";
import MyKundli from "./pages/user/MyKundli";
import MyWallet from "./pages/user/MyWallet";
import MyBookings from "./pages/user/MyBookings";  
import SavedReports from "./pages/user/SavedReports";
import Settings from "./pages/user/Settings";
import PaymentPage from "./pages/PaymentPage";


// Layout components
// import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

export default function App() {
  return (
    <Router>
      {/* <Navbar /> */}

      <div style={{ minHeight: "100vh" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/book" element={<Book />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/user/profile" element={<MyProfile />} />
          <Route path="/user/kundli" element={<MyKundli />} />
          <Route path="/user/wallet" element={<MyWallet />} />
          <Route path="/user/bookings" element={<MyBookings  />} />
          <Route path="/saved-reports" element={<SavedReports />} />
          <Route path="/user/settings" element={<Settings />} />
          <Route path="/pay" element={<PaymentPage />} />
          
  <Route path="/know-more" element={<KnowMore />} />
 <Route path="/free-calculator" element={<FreeCalculatorPage />} />


  



          {/* Services */}
          <Route path="/energy" element={<Energy />} />
          <Route path="/astrology" element={<Astrology />} />
          <Route path="/vastu" element={<Vastu />} />
          <Route path="/manifestation" element={<Manifestation />} />
          <Route path="/material" element={<Material />} />
          <Route path="/service/:id" element={<ServiceDetails />} />
          <Route path="/tarotreading" element={<TarotReading />} />

          {/* 404 Page */}
          <Route
            path="*"
            element={
              <div className="text-center py-20 text-gray-600 text-lg">
                404 - Page Not Found
              </div>
            }
          />
        </Routes>
      </div>

      <Footer />
    </Router>
  );
}
