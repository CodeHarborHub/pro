import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Courses from "../pages/Courses";
// import Error from "../pages/Error";
import {Register, Login} from "../pages/Auth";
import Dashboard from "../pages/Dashboard";
import Logout from "../pages/Auth/Logout";
import Services from "../pages/Services";

const Routers = () => {
  return (
    <Routes>
      <Route path="/pro" element={<Home />} />
      <Route path="/pro/about" element={<About />} />
      <Route path="/pro/contact" element={<Contact />} />
      <Route path="/pro/courses" element={<Courses />} />
      {/* <Route path="*" element={<Error />} /> */}
      <Route path="/pro/services" element={<Services />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/logout" element={<Logout />} />
    </Routes>
  );
};

export default Routers;