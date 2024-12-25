import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Appointment from "./components/AppointementForm.jsx";
import Register from "./pages/Register.jsx";
import Login from "./pages/Login.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import { Context } from "./index.js";
import { useContext, useEffect} from "react";
import axios from "axios";
import Profile from "./profile/Profile.jsx";
import { url } from "./Api.jsx";
import AppointmentDetails from "./components/AppointementDetails.jsx";
import AviliableDoctors from "./components/AviliableDoctors.jsx";

function App() {
  const { isAuthenticated, setIsAuthenticated, setUser } =useContext(Context);
  

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          `${url}/user/patient/me`,
          {
            withCredentials: true,
          }
        );
        setIsAuthenticated(true);
        setUser(response.data.user);
      } catch (error) {
        setIsAuthenticated(false);
        setUser({});
      }
    };

    fetchUser();
  }, [isAuthenticated]);
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/appointmentData" element={<AppointmentDetails/>}/>
        <Route path="/aviliableDoctors" element={<AviliableDoctors/>}/>
      </Routes>
      <Footer />
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
