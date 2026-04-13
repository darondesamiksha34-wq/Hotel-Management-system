import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signin from "./pages/signin";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hotel from "./pages/Hotel";
import Home from "./pages/Home";
import About from "./pages/About";
import Experience from "./pages/Experience";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";


function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotel" element={<Hotel />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/login" element={<Signin />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/about" element={<About />} />

      </Routes>

          <Footer />
      </div>
  );
}

export default App;


