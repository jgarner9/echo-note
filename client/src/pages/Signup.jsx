import { Link } from "react-router-dom";
import "../stylesheets/Signup.css";
import logo from "../assets/logo_light.svg";
import { useState } from "react";
import createUser from "../controllers/createUser";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div id="signup-page-container">
      <Link to="/home">
        <img src={logo} alt="logo" id="logo" />
      </Link>
      <h1 id="echo-note-title">Echo Note</h1>
      <div id="signup-element-container">
        <h1 id="signup-title">Sign Up</h1>
        <form
          id="signup-form"
          onSubmit={async (e) => {
            setIsLoading(true)
            await createUser(e);
            setIsLoading(false)
          }}
        >
          <label>Username:</label>
          <input
            type="text"
            id="username-input"
            className="input-field"
            name="username"
            placeholder="Enter a username"
            autoComplete="off"
            autoFocus
            disabled={isLoading}
            required
          />
          <label>Password:</label>
          <input
            type={showPassword ? "text" : "password"}
            id="password-input"
            className="input-field"
            name="password"
            placeholder="Enter a password"
            minLength="5"
            maxLength="32"
            disabled={isLoading}
            required
          />
          <label>Confirm Password:</label>
          <input
            type={showPassword ? "text" : "password"}
            id="confirmation-password-input"
            name="confirmation_password"
            className="input-field"
            placeholder="Confirm your password"
            minLength="5"
            maxLength="32"
            disabled={isLoading}
            required
          />
          <div id="show-password">
            <input
              type="checkbox"
              disabled={isLoading}
              onClick={() => {
                showPassword ? setShowPassword(false) : setShowPassword(true);
              }}
            />
            <h3 id="show-password-text">Show Password</h3>
          </div>
          <input
            type="submit"
            id="signup-button"
            value="Sign Up"
            className="button"
            disabled={isLoading}
          />
        </form>
        <h3 id="password-too-short-error" className="error-message" hidden>
          The password must be at least 5 characters long
        </h3>
        <h3 id="passwords-mismatch-error" className="error-message" hidden>
          The passwords do not match, please try again
        </h3>
        <h3 id="username-taken-error" className="error-message" hidden>
          This username is already taken, please try again
        </h3>
        <Link
          to="/login"
          id="login-page-button"
          className="hover-underline-animation"
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default Signup;
