import authenticate from "../controllers/authenticate";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div id="login-page-container">
      <h1 id="invalid-login-error" hidden>
        Invalid Login
      </h1>
      <h1>Login</h1>
      <form
        id="login-form"
        onSubmit={(e) => {
          authenticate(e);
        }}
      >
        <label>Username:</label>
        <input type="text" id="username-input" name="username" required />
        <label>Password:</label>
        <input type="password" id="password-input" name="password" required />
        <input type="submit" id="login-button" value="Login" />
      </form>
      <Link to="/signup">Sign Up</Link>
    </div>
  );
};

export default Login;
