import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authService } from "../../services/authService";
import "../../styles/Login.css";

function LoginForm() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await authService.login(email, password);

      if (response.success) {
        localStorage.setItem("user", JSON.stringify(response.user));
        navigate("/dashboard");
      }
      else {
        alert(response.message);
      }
    } catch (error) {
  console.log(error);
  console.log(error.response);
  console.log(error.message);

  alert("Server Error");
}
  };

  return (
    <div className="login-form-container">

      <h2>Sign In</h2>

      <p>
        Login to access your APAX Portfolio Vault
      </p>

      <form onSubmit={handleLogin}>

        <div className="input-group">

          <label>Email</label>

          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

        </div>

        <div className="input-group">

          <label>Password</label>

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

        </div>

        <button
          type="submit"
          className="login-btn"
        >
          Login
        </button>

      </form>

    </div>
  );
}

export default LoginForm;