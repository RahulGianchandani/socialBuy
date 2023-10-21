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
import Terms from './Pages/terms';
import Privacy from './Pages/privacy';
import ScrollToTop from './Components/scrollTop';
import Refund from './Pages/refund';

export default function App() {
  const token = localStorage.getItem('token');

  return (
    <Router>
      <Header />
      <ScrollToTop>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/socialBuy" element={<Home />} />
        <Route path="/customer-reviews" element={<CustomerReviews />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/terms-conditions" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/refund-policy" element={<Refund />} />
        {/* <Route path="/admin-login" element={<Login />} /> */}
        {/* {token === "admin" && */}
          {/* <Route path="/admin-dashboard" element={<AdminDashboard />} /> */}
        {/* } */}
      </Routes>
      </ScrollToTop>
      <ToastContainer />
      <Footer />
    </Router>
  );
}

