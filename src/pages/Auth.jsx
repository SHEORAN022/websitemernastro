// import React, { useState } from "react";
// import "../styles/Auth.css";

// const Auth = () => {
//   const [isLogin, setIsLogin] = useState(true);

//   return (
//     <div className="auth-container">
//       <div className="auth-card">
//         <h2>{isLogin ? "Login to AstroConnect" : "Sign Up to AstroConnect"}</h2>
//         <form>
//           {!isLogin && (
//             <input type="text" placeholder="Full Name" required />
//           )}
//           <input type="email" placeholder="Email" required />
//           <input type="password" placeholder="Password" required />
//           <button type="submit">{isLogin ? "Login" : "Sign Up"}</button>
//         </form>
//         <p className="toggle-text">
//           {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
//           <span onClick={() => setIsLogin(!isLogin)}>
//             {isLogin ? "Sign Up" : "Login"}
//           </span>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Auth;

import React, { useState } from "react";
import "../styles/Auth.css";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      alert("Logging in...");
    } else {
      alert("Signing up...");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <img
            src="https://res.cloudinary.com/doerrm32l/image/upload/v1761893673/astrologo_fjndbn.png"
            alt="Astro Logo"
            className="auth-logo"
          />
          <h2>{isLogin ? "Login to AstroConnect" : "Sign Up to AstroConnect"}</h2>
        </div>

        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <input type="text" placeholder="Full Name" required />
          )}
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">{isLogin ? "Login" : "Sign Up"}</button>
        </form>

        <p className="toggle-text">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <span onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? "Sign Up" : "Login"}
          </span>
        </p>

        <div className="auth-footer">
          <p>Or continue with</p>
          <div className="social-login">
            <button className="google">Google</button>
            <button className="facebook">Facebook</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
