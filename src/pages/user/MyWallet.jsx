
// import React, { useEffect, useState } from "react";
// import "../../styles/MyWallet.css";
// import { PaymentAPI } from "../../api/apiService";

// export default function MyWallet() {
//   const [user, setUser] = useState(null);
//   const [wallet, setWallet] = useState(null);
//   const [amount, setAmount] = useState("");

//   // 👉 Load logged-in user
//   useEffect(() => {
//     const u = JSON.parse(localStorage.getItem("user"));
//     if (u) setUser(u);
//   }, []);

//   // 👉 Load wallet after user loads
//   useEffect(() => {
//     if (user) loadWallet();
//   }, [user]);

//   // ------------------------------
//   // 🔹 Load Wallet API
//   // ------------------------------
//   const loadWallet = async () => {
//     try {
//       const res = await fetch(
//         `${process.env.REACT_APP_API_URL}/wallet/${user._id}`
//       );
//       const data = await res.json();

//       if (data.success) {
//         setWallet(data.wallet);
//       }
//     } catch (err) {
//       console.log("Wallet load error:", err);
//     }
//   };

//   // ------------------------------
//   // 🔹 Razorpay Add Money
//   // ------------------------------
//   const addMoney = async () => {
//     if (!amount || amount <= 0) {
//       alert("Enter valid amount");
//       return;
//     }

//     try {
//       // 1️⃣ CREATE ORDER
//       const response = await PaymentAPI.createOrder({
//         amount: Number(amount),
//         userId: user._id,
//       });

//       if (!response?.success) {
//         alert("Order creation failed!");
//         return;
//       }

//       // 2️⃣ RAZORPAY CHECKOUT
//       const rzp = new window.Razorpay({
//         key: process.env.REACT_APP_RAZORPAY_KEY_ID,
//         amount: response.order.amount,
//         currency: response.order.currency,
//         name: "Astro App Wallet",
//         description: "Add Money to Wallet",
//         order_id: response.order.id,

//         handler: async (res) => {
//           const verifyRes = await PaymentAPI.verifyPayment({
//             ...res,
//             amount,
//             userId: user._id,
//           });

//           if (verifyRes.success) {
//             alert("Money Added Successfully!");
//             setAmount("");
//             loadWallet();
//           } else {
//             alert("Payment verification failed");
//           }
//         },

//         prefill: {
//           name: user.name,
//           email: user.email,
//         },

//         theme: { color: "#f4b400" },
//       });

//       rzp.on("payment.failed", (err) => {
//         console.log("Payment failed:", err);
//         alert("Payment failed! Try again.");
//       });

//       rzp.open();
//     } catch (err) {
//       console.log("Payment Error:", err);
//       alert("Payment failed!");
//     }
//   };

//   // ------------------------------
//   // UI Section
//   // ------------------------------

//   if (!user) return <h2>Please Login First</h2>;
//   if (!wallet) return <h2>Loading Wallet...</h2>;

//   return (
//     <div className="wallet-wrapper">
//       <h1>My Wallet</h1>

//       {/* BALANCE CARD */}
//       <div className="wallet-balance-card">
//         <h2>Available Balance</h2>
//         <div className="balance-amount">₹{wallet.balance}</div>

//         {/* ADD MONEY */}
//         <div className="add-money-box">
//           <input
//             type="number"
//             placeholder="Enter Amount"
//             value={amount}
//             onChange={(e) => setAmount(e.target.value)}
//           />
//           <button onClick={addMoney}>Add Money</button>
//         </div>
//       </div>

//       {/* TRANSACTIONS */}
//       <div className="wallet-transactions-card">
//         <h2>Transaction History</h2>

//         {wallet.transactions.length === 0 && (
//           <p className="no-transactions">No transactions yet.</p>
//         )}

//         {wallet.transactions.map((tx) => (
//           <div className="transaction-item" key={tx._id}>
//             <div>
//               <h4>{tx.type === "credit" ? "Money Added" : "Money Used"}</h4>
//               <span>{new Date(tx.date).toLocaleString()}</span>
//             </div>

//             <div className={`tx-amount ${tx.type}`}>
//               {tx.type === "credit" ? "+" : "-"} ₹{tx.amount}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
import React, { useEffect, useState } from "react";
import "../../styles/MyWallet.css";
import { PaymentAPI } from "../../api/apiService";

export default function MyWallet() {
  const [user, setUser] = useState(null);
  const [wallet, setWallet] = useState(null);
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(true);

  // 👉 Load logged-in user
  useEffect(() => {
    const u = JSON.parse(localStorage.getItem("user"));
    if (u) setUser(u);
  }, []);

  // 👉 Load wallet after user loads
  useEffect(() => {
    if (user) loadWallet();
  }, [user]);

  // ------------------------------
  // 🔹 Load Wallet API
  // ------------------------------
  const loadWallet = async () => {
    try {
      setLoading(true);

      const res = await fetch(
        `${process.env.REACT_APP_API_URL}/wallet/${user._id}`
      );
      const data = await res.json();

      console.log("Wallet API Response:", data);

      if (data.success) {
        // ALWAYS set safe values
        setWallet({
          balance: data.wallet?.balance || 0,
          transactions: data.wallet?.transactions || [],
        });
      } else {
        setWallet({ balance: 0, transactions: [] });
      }
    } catch (err) {
      console.log("Wallet load error:", err);
      setWallet({ balance: 0, transactions: [] });
    } finally {
      setLoading(false);
    }
  };

  // ------------------------------
  // 🔹 Razorpay Add Money
  // ------------------------------
  const addMoney = async () => {
    if (!amount || amount <= 0) {
      alert("Enter valid amount");
      return;
    }

    try {
      const response = await PaymentAPI.createOrder({
        amount: Number(amount),
        userId: user._id,
      });

      if (!response?.success) {
        alert("Order creation failed!");
        return;
      }

      const rzp = new window.Razorpay({
        key: process.env.REACT_APP_RAZORPAY_KEY_ID,
        amount: response.order.amount,
        currency: response.order.currency,
        name: "Astro App Wallet",
        description: "Add Money to Wallet",
        order_id: response.order.id,

        handler: async (res) => {
          const verifyRes = await PaymentAPI.verifyPayment({
            ...res,
            amount,
            userId: user._id,
          });

          if (verifyRes.success) {
            alert("Money Added Successfully!");
            setAmount("");
            loadWallet(); // reload wallet
          } else {
            alert("Payment verification failed");
          }
        },

        prefill: {
          name: user.name,
          email: user.email,
        },

        theme: { color: "#f4b400" },
      });

      rzp.on("payment.failed", (err) => {
        console.log("Payment failed:", err);
        alert("Payment failed! Try again.");
      });

      rzp.open();
    } catch (err) {
      console.log("Payment Error:", err);
      alert("Payment failed!");
    }
  };

  // ------------------------------
  // UI Section
  // ------------------------------

  if (!user) return <h2>Please Login First</h2>;
  if (loading) return <h2>Loading Wallet...</h2>;

  return (
    <div className="wallet-wrapper">
      <h1>My Wallet</h1>

      {/* BALANCE CARD */}
      <div className="wallet-balance-card">
        <h2>Available Balance</h2>
        <div className="balance-amount">₹{wallet.balance}</div>

        {/* ADD MONEY */}
        <div className="add-money-box">
          <input
            type="number"
            placeholder="Enter Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <button onClick={addMoney}>Add Money</button>
        </div>
      </div>

      {/* TRANSACTIONS */}
      <div className="wallet-transactions-card">
        <h2>Transaction History</h2>

        {wallet.transactions.length === 0 ? (
          <p className="no-transactions">No transactions yet.</p>
        ) : (
          wallet.transactions.map((tx, i) => (
            <div className="transaction-item" key={i}>
              <div>
                <h4>{tx.type === "credit" ? "Money Added" : "Money Used"}</h4>
                <span>{new Date(tx.date).toLocaleString()}</span>
              </div>

              <div className={`tx-amount ${tx.type}`}>
                {tx.type === "credit" ? "+" : "-"} ₹{tx.amount}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
