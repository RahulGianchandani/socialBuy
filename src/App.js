import './App.css';
import Header from './Components/Header';
import {
  BrowserRouter as Router,
  Routes,
  Route, Redirect, Navigate
} from "react-router-dom";
import Home from './Pages/home';
import Footer from './Components/Footer';

import Login from './Pages/login';
import { ToastContainer } from 'react-toastify';
import AdminDashboard from './Pages/dashboard';
import CustomerReviews from './Pages/customerReviews';
import ContactUs from './Pages/contactUs';

export default function App() {
  const token = localStorage.getItem('token');

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/socialBuy" element={<Home />} />
        <Route path="/customer-reviews" element={<CustomerReviews />} />
        <Route path="/contact-us" element={<ContactUs />} />
        {/* <Route path="/admin-login" element={<Login />} /> */}
        {/* {token === "admin" && */}
          {/* <Route path="/admin-dashboard" element={<AdminDashboard />} /> */}
        {/* } */}
      </Routes>
      <ToastContainer />
      <Footer />
    </Router>
  );
}

