import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Courses from "../pages/Courses";
import Error from "../pages/Error";
import {Register, Login} from "../pages/Auth";
import Dashboard from "../pages/Dashboard";
import Logout from "../pages/Auth/Logout";
import Services from "../pages/Services";
import Admin from "../Layouts/Admin";
import AdminUsers from "../Layouts/Admin/Users";
import AdminContact from "../Layouts/Admin/Contact";
import AdminUpdate from "../Layouts/Admin/AdminUpdate";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/*" element={<Error />} />
      <Route path="/services" element={<Services />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/admin/" element={<Admin />}>
        <Route path="users" element={<AdminUsers />} />
        <Route path="users/:id/edit" element={<AdminUpdate />} />
        <Route path="contacts" element={<AdminContact />} />
        <Route path="courses" element={<h1>AdminCourses</h1>} />
        <Route path="services" element={<h1>AdminServices</h1>} />
      </Route>
    </Routes>
  );
};

export default Routers;