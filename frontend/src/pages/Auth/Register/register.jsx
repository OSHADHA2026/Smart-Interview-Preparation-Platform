import {useState} from "react"
import "../Auth.css"

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!formData.name || 
      !formData.email || 
      !formData.password || 
      !formData.confirmPassword) {
      alert("Please fill in all fields");
      return;
    }

      // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(formData.email)) {
      alert("Please enter a valid email address");
      return;
    }

    // Password validation
    if (formData.password.length < 8) {
      alert("Password must be at least 8 characters");
      return;
    }

      if(formData.password !== formData.confirmPassword){
        alert("Passwords do not match");
        return;
      }
    
      alert("Account created successfully!");
  };


  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1>Create Account</h1>

        <input
          name="name"
          type="text"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
        />

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

        <input
          name="confirmPassword"
          type="password"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
        />

        <button onClick={handleSubmit} type="submit">
          Create Account
        </button>
      </div>
    </div>
  );
}

export default Register;