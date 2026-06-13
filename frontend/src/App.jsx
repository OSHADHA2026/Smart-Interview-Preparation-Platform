import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Auth/Login/login";
import Register from "./pages/Auth/Register/register";
import Dashboard from "./pages/Dashboard/dashboard";
import Home from "./pages/Home/home";
import Navbar from "./components/Navbar/navbar";
import Footer from "./components/Footer/footer";
import About from "./pages/About/about";
import Contact from "./pages/Contact/contact";
import Profile from "./pages/Profile/profile";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
