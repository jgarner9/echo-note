import authenticate from "../controllers/authenticate"
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div id="login-page-container">
      <h1>Login</h1>
      <form id="login-form" onSubmit={(e) => {authenticate(e)}}>
        <input type="text" id="username-input" required />
        <input type="password" id="password-input" required />
        <input type="submit" id="login-button" value="Login" />
      </form>
      <Link to="/signup">Sign Up</Link>
    </div>
  );
};

export default Login;
