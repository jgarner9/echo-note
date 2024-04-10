import { Link } from "react-router-dom";
import "../stylesheets/Signup.css";

const Signup = () => {
  return (
    <div id="signup-page-container">
      <h1>Sign Up</h1>
      <form id="signup-form">
        <label>Username:</label>
        <input type="text" id="username-input" className="input-field" required />
        <label>Password:</label>
        <input type="password" id="password-input" className="input-field" required />
        <label>Confirm Password:</label>
        <input type="password" id="password-input" className="input-field" required />
        <input type="submit" id="signup-button" value="Sign Up" className="button" />
      </form>
      <Link to="/login">Login</Link>
    </div>
  );
};

export default Signup;
