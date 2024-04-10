import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div id="signup-page-container">
      <h1>Sign Up</h1>
      <form id="signup-form">
        <label>Username:</label>
        <input type="text" id="username-input" required />
        <label>Password:</label>
        <input type="password" id="password-input" required />
        <label>Confirm Password:</label>
        <input type="password" id="password-input" required />
        <input type="submit" id="signup-button" value="Sign Up" />
      </form>
      <Link to="/login">Login</Link>
    </div>
  );
};

export default Signup;
