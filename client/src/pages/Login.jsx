import loginController from "../controllers/loginController.jsx";
import { Link } from "react-router-dom";
import "../stylesheets/Login.css";
import { useState } from "react";
import logo from "../assets/logo_light.svg";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div id="login-page-container">
      <Link to="/home">
        <img src={logo} alt="logo" id="logo" />
      </Link>
      <h1 id="echo-note-title">Echo Note</h1>
      <div id="login-element-container">
        <h2 id="login-title">Login</h2>
        <h1 id="invalid-login-error" hidden>
          Invalid Login Credentials: Please try again.
        </h1>
        <form
          id="login-form"
          onSubmit={(e) => {
            loginController(e);
          }}
        >
          <label>Username:</label>
          <input
            type="text"
            id="username-input"
            name="username"
            className="input-field"
            placeholder="Enter your username"
            autoComplete="off"
            autoFocus
            required
          />
          <label>Password:</label>
          <input
            type={showPassword ? "text" : "password"}
            id="password-input"
            name="password"
            className="input-field"
            placeholder="Enter your password"
            autoComplete="off"
            required
          />
          <div id="show-password">
            <input
              type="checkbox"
              onClick={() => {
                showPassword ? setShowPassword(false) : setShowPassword(true);
              }}
            />
            <h3 id="show-password-text">Show Password</h3>
          </div>
          <input
            type="submit"
            id="login-button"
            value="Login"
            className="button"
          />
        </form>
        <Link
          to="/signup"
          className="hover-underline-animation"
          id="signup-page-button"
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default Login;
