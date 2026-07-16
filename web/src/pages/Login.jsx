import React from "react";
import LoginForm from "../components/auth/LoginForm";
import "../styles/Login.css";

function Login() {
  return (
    <div className="login-page">

      <div className="login-card">

        <div className="login-left">

          <h1>APAX</h1>

          <h2>Welcome Back</h2>

          <p>
            Manage your tokenized assets securely.
            Track Gold, Silver and Platinum portfolios
            from one secure dashboard.
          </p>

        </div>

        <div className="login-right">

          <LoginForm />

        </div>

      </div>

    </div>
  );
}

export default Login;