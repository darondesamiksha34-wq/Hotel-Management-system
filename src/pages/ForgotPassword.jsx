// import { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import LockB from "../assets/Lock.jpg";
// import { sendResetOtp } from "../services/auth.service";


// function ForgotPassword() {
//   const [email, setEmail] = useState("");
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleSendOtp = async (e) => {
//     e.preventDefault();

//     if (!email) {
//       alert("Please enter your email");
//       return;
//     }

//     try {
//       setLoading(true);

//       // const res = await axios.post(
//       //   "https://hotel-management-system-backend-production-0c8a.up.railway.app/api/auth/send-reset-otp" ,
//       //   { email }
//       // );
//       const res = await sendResetOtp(email);

//       if (res?.data?.success) {
//         alert("OTP sent to your email.....");
//         navigate("/resetpassword", { state: { email } });
//       } else {
//         alert(res?.data?.message || "Failed to send OTP");
//       }

//     } catch (error) {
//       alert(
//         error?.response?.data?.message || "User not found ❌"
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
//         onSubmit={handleSendOtp}
//         className="bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-xl w-full max-w-md "
//       >
//         <h2 className="text-2xl font-bold mb-2 text-center">
//           Forgot Password
//         </h2>

//         <p className="text-gray-500 text-sm text-center mb-6">
//           Enter your registered email to receive OTP
//         </p>

//         <input
//           type="email"
//           placeholder="Enter your email"
//           className="w-full  border-2 border-gray-500 p-3 rounded-lg mb-4 focus:outline-none focus:border-black"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />

//         <button
//           type="submit"
//           disabled={loading || !email}
//           className="w-full bg-black hover:bg-gray-800 disabled:bg-gray-700 text-white py-3 rounded-lg transition"
//         >
//           {loading ? "Sending..." : "Send OTP"}
//         </button>

//         <p className="text-center text-sm text-gray-500 mt-6">
//           Remember your password?{" "}
//           <span
//             onClick={() => navigate("/login")}
//             className="text-black font-semibold cursor-pointer hover:underline"
//           >
//             Sign in
//           </span>
//         </p>
//       </form>
//     </div>
//   );
// }

// export default ForgotPassword;


import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LockB from "../assets/Lock.jpg";
import { sendResetOtp } from "../services/user.service";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSendOtp = async (e) => {
    e.preventDefault();

    if (!email) {
      alert("Please enter your email");
      return;
    }

    try {
      setLoading(true);

      const res = await sendResetOtp(email);

      if (res?.success) {
        alert("OTP sent to your email 📩");
        navigate("/resetpassword", { state: { email } });
      } else {
        alert(res?.message || "Failed to send OTP");
      }

    } catch (error) {
      alert(
        error?.response?.data?.message || "User not found ❌"
      );
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
        onSubmit={handleSendOtp}
        className="bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-xl w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-2 text-center">
          Forgot Password
        </h2>

        <p className="text-gray-500 text-sm text-center mb-6">
          Enter your registered email to receive OTP
        </p>

        <input
          type="email"
          placeholder="Enter your email"
          className="w-full border-2 border-gray-500 p-3 rounded-lg mb-4 focus:outline-none focus:border-black"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <button
          type="submit"
          disabled={loading || !email}
          className="w-full bg-black hover:bg-gray-800 disabled:bg-gray-700 text-white py-3 rounded-lg transition"
        >
          {loading ? "Sending..." : "Send OTP"}
        </button>

        <p className="text-center text-sm text-gray-500 mt-6">
          Remember your password?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-black font-semibold cursor-pointer hover:underline"
          >
            Sign in
          </span>
        </p>
      </form>
    </div>
  );
}

export default ForgotPassword;