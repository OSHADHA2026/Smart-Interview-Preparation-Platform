import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Auth/Login/login";
import Register from "./pages/Auth/Register/register";
import Dashboard from "./pages/Dashboard/dashboard";
import Home from "./pages/Home/home";
import Navbar from "./components/Navbar/navbar";
import Footer from "./components/Footer/footer";

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
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
