import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import NotFound from "./pages/404";
import loggedIn from "./controllers/loggedIn";
import "./stylesheets/App.css"

export default function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          loggedIn() ? <Navigate to="/home" /> : <Navigate to="/login" />
        }
      />
      <Route
        path="/login"
        element={loggedIn() ? <Navigate to="/home" /> : <Login />}
      />
      <Route
        path="/signup"
        element={loggedIn() ? <Navigate to="/home" /> : <Signup />}
      />
      <Route
        path="/home"
        element={loggedIn() ? <Home /> : <Navigate to="/login" />}
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
