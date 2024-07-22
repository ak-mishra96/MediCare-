import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Appointment from "./components/AppointementForm.jsx";
import Register from "./pages/Register.jsx";
import Login from "./pages/Login.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import { Context } from "./index.js";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import Profile from "./profile/Profile.jsx";

function App() {
  const { isAuthenticated, setIsAuthenticated,user, setUser } = useContext(Context);
  const [isLoading, setIsLoading] = useState(true); // State to track initial loading

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/user/patient/me",
          {
            withCredentials: true,
          }
        );
        setIsAuthenticated(true);
        console.log(user);
        setUser(response.data.user);
      } catch (error) {
        setIsAuthenticated(false);
        setUser({});
      } finally {
        setIsLoading(false); // Set loading to false after fetching user
      }
    };

    fetchUser();
  }, [setIsAuthenticated]);

  if (isLoading) {
    return <div>Loading...</div>; // Optional: Show loading indicator while fetching user
  }

  return (
    <Router>
      {isAuthenticated && <Navbar />}
      <Routes>
        {/* Conditionally render based on isAuthenticated */}
        {!isAuthenticated ? (
          <>
            {/* Show login page first */}
            <Route path="/" element={<Navigate to="/login" replace />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </>
        ) : (
          <>
            {/* Once authenticated, show other routes */}
            <Route path="/" element={<Home />} />
            <Route path="/appointment" element={<Appointment />} />
            <Route path="/about" element={<About />} />
            <Route path="/profile" element={<Profile />} />
          </>
        )}
      </Routes>
      {isAuthenticated && <Footer />}
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </Router>
  );
}

export default App;
