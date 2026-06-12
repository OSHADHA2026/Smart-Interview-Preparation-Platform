import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Auth.css";
import { loginUser } from "../../../services/authServices";

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || 
      !formData.password) {
      alert("Please fill in all fields");
      return;
    }

      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        alert("Please enter a valid email address");
        return;
      }
      if (formData.password.length < 8) {
        alert("Password must be at least 8 characters");
        return;
      }

      // call login API
      // handle response
      const result = await loginUser(formData);
      if (!result.success) {
        alert(result.message);
        return;
      }

      // STORE TOKEN HERE
      localStorage.setItem("token", result.token);

      alert("Login successful!");
      navigate("/dashboard");
    };


  const handleRegister = () => {
    // register logic

    navigate("/register");
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1>Welcome Back!</h1>

        <input
          name="email"
          type="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        

        <button onClick={handleSubmit} type="submit">
          Login
        </button>

        <p>
          Don't have an account?
          <span onClick={handleRegister}> Sign Up</span>
        </p>
      </div>
    </div>
  );
}

export default Login;