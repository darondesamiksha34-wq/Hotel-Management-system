import { useState } from "react";
import BG from "../assets/Login1.jpg";
import { MdOutlineEmail, MdLockOutline } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/user.service";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const data = {
                 email,
                 password
             }
             loginUser(data)
  };

  return (
    <div
      className="min-h-screen flex justify-center items-center bg-cover bg-center px-4 p-5"
      style={{ backgroundImage: `url(${BG})` }}
    >
      <div className="bg-white w-90 min-h-90 mt-20 p-4 rounded-2xl shadow-5xl">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold">Welcome Back</h1>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>

          
          <div>
            <div className="flex items-center gap-2 text-gray-500 mb-1 text-sm">
              <MdOutlineEmail />
              <label>Email Address</label>
            </div>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full h-11 border border-gray-300 rounded-lg px-3 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          
          <div>
            <div className="flex items-center gap-2 text-gray-500 mb-1 text-sm">
              <MdLockOutline />
              <label>Password</label>
            </div>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full h-11 border border-gray-300 rounded-lg px-3 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          
          <div className="flex justify-end">
            <button
              type="button"
              onClick={() => navigate("/forgotpassword")}
              className="text-xs text-gray-400 hover:text-black"
            >
              Forgot password?
            </button>
          </div>

          
          <button
            type="submit"
            disabled={loading}
            className={`w-full h-11 text-white rounded-lg transition ${
              loading ? "bg-gray-400 cursor-not-allowed" : "bg-black hover:bg-gray-800"
            }`}
          >
            {loading ? "Signing In..." : "Sign In"}
          </button>

        </form>

        
        <div className="flex items-center my-4">
          <div className="flex-1 border-t border-gray-300"></div>
          <span className="px-3 text-gray-400 text-sm">or</span>
          <div className="flex-1 border-t border-gray-300"></div>
        </div>

       
        <button className="w-full flex items-center justify-center gap-2 border border-gray-300 h-11 rounded-lg hover:bg-gray-50 transition text-sm">
          <FcGoogle />
          Continue with Google
        </button>

        
        <div className="mt-6 text-center text-sm text-gray-500">
          Don’t have an account?{" "}
          <button
            className="text-blue-500 font-medium hover:underline"
            onClick={() => navigate("/signin")}
          >
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;