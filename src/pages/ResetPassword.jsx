// import { useState, useEffect } from "react";
// import axios from "axios";
// import { useLocation, useNavigate } from "react-router-dom";
// import LockB from "../assets/Lock.jpg";

// function ResetPassword() {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const email = location.state?.email;

//   const [otp, setOtp] = useState("");
//   const [newPassword, setNewPassword] = useState("");
//   const [loading, setLoading] = useState(false);

  
//   useEffect(() => {
//     if (!email) {
//       navigate("/forgotpassword");
//     }
//   }, [email, navigate]);


//   export const resetPassword = async (data) => {
//   try {
//     const response = await instance.post(
//       "/api/auth/reset-password",
//       data   // ✅ send email, otp, newPassword
//     );
//     return response.data;
//   } catch (error) {
//     console.error("Reset Error:", error.response?.data || error.message);
//     throw error;
//   }
// };

//   const handleReset = async (e) => {
//     e.preventDefault();

//     if (!otp || !newPassword) {
//       alert("Please fill all fields");
//       return;
//     }

//     if (otp.length !== 6) {
//       alert("OTP must be 6 digits");
//       return;
//     }

//     if (newPassword.length < 6) {
//       alert("Password must be at least 6 characters");
//       return;
//     }

//     try {
//       setLoading(true);

//       const res = await axios.post(
//         "http://localhost:5000/api/auth/reset-password",
//         {
//           email,
//           otp,
//           newPassword,
//         }
//       );

      
//       if (res?.data?.success) {
//         alert("Password reset successful...!");
//         navigate("/login");
//       } else {
//         alert(res?.data?.message || "Reset failed");
//       }

//     } catch (error) {
//       alert(
//         error?.response?.data?.message || "Invalid OTP ❌"
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div
//       className="min-h-screen flex justify-center items-center bg-cover bg-center p-4"
//       style={{ backgroundImage: `url(${LockB})` }}
//     >
//       <form
//         onSubmit={handleReset}
//         className="bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-xl w-full max-w-md"
//       >
//         <h2 className="text-2xl font-bold mb-2 text-center">
//           Reset Password
//         </h2>

//         <p className="text-gray-500 text-sm text-center mb-6">
//           OTP sent to <span className="font-semibold">{email}</span>
//         </p>

//         <input
//           type="text"
//           placeholder="Enter OTP"
//           maxLength={6}
//           className="w-full border border-gray-500 p-3 rounded-lg mb-3  tracking-widest focus:outline-none focus:border-black"
//           value={otp}
//           onChange={(e) => setOtp(e.target.value)}
//         />

//         <input
//           type="password"
//           placeholder="New Password"
//           className="w-full border border-gray-500 p-3 rounded-lg mb-4 focus:outline-none focus:border-black"
//           value={newPassword}
//           onChange={(e) => setNewPassword(e.target.value)}
//         />

//         <button
//           type="submit"
//           disabled={loading || !otp || !newPassword}
//           className="w-full bg-black hover:bg-gray-800 disabled:bg-gray-700 text-white py-3 rounded-lg transition"
//         >
//           {loading ? "Resetting..." : "Reset Password"}
//         </button>

//         {/* <button
//           type="button"
//           onClick={() => navigate("/forgotpassword")}
//           className="w-full text-sm text-gray-700 mt-4 hover:underline"
//         >
//            Change email
//         </button> */}
//       </form>
//     </div>
//   );
// }

// export default ResetPassword;
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import LockB from "../assets/Lock.jpg";
import { resetPassword } from "../services/user.service";

function ResetPassword() {
  const location = useLocation();
  const navigate = useNavigate();
  const email = location.state?.email;

  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!email) {
      navigate("/forgotpassword");
    }
  }, [email, navigate]);

  const handleReset = async (e) => {
    e.preventDefault();

    // Validation
    if (!otp || !newPassword) {
      alert("Please fill all fields");
      return;
    }

    if (otp.length !== 6) {
      alert("OTP must be 6 digits");
      return;
    }

    if (newPassword.length < 6) {
      alert("Password must be at least 6 characters");
      return;
    }

    try {
      setLoading(true);

      const res = await resetPassword({
        email,
        otp,
        newPassword,
      });

      if (res?.success) {
        alert("Password reset successful ✅");
        navigate("/login");
      } else {
        alert(res?.message || "Reset failed");
      }
    } catch (error) {
      alert(error?.response?.data?.message || "Invalid OTP ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen flex justify-center items-center bg-cover bg-center p-4"
      style={{ backgroundImage: `url(${LockB})` }}
    >
      <form
        onSubmit={handleReset}
        className="bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-xl w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-2 text-center">
          Reset Password
        </h2>

        <p className="text-gray-500 text-sm text-center mb-6">
          OTP sent to <span className="font-semibold">{email}</span>
        </p>

        <input
          type="text"
          placeholder="Enter OTP"
          maxLength={6}
          className="w-full border border-gray-500 p-3 rounded-lg mb-3 tracking-widest focus:outline-none focus:border-black"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
        />

        <input
          type="password"
          placeholder="New Password"
          className="w-full border border-gray-500 p-3 rounded-lg mb-4 focus:outline-none focus:border-black"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />

        <button
          type="submit"
          disabled={loading || !otp || !newPassword}
          className="w-full bg-black hover:bg-gray-800 disabled:bg-gray-700 text-white py-3 rounded-lg transition"
        >
          {loading ? "Resetting..." : "Reset Password"}
        </button>

        {/* Optional: back to forgot */}
        <p
          onClick={() => navigate("/forgotpassword")}
          className="text-center text-sm text-gray-500 mt-4 cursor-pointer hover:underline"
        >
          Change email
        </p>
      </form>
    </div>
  );
}

export default ResetPassword;