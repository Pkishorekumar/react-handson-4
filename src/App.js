import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/layouts/navbar";
import Home from "./components/pages/home";

import StudentsBuild from "./components/pages/student-build";
import Contact from "./components/pages/contact";

import "./App.css";


function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="StudentsBuild" element={<StudentsBuild />} />
          <Route path="Contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
