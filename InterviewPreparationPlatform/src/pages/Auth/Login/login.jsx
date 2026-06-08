import { useNavigate } from "react-router-dom";
import "../Auth.css";

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    // login logic

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
          type="email"
          placeholder="Email Address"
        />

        <input
          type="password"
          placeholder="Password"
        />

        <button onClick={handleLogin}>Login</button>

        <p>
          Don't have an account?
          <span onClick={handleRegister}> Sign Up</span>
        </p>
      </div>
    </div>
  );
}

export default Login;