import React, { useEffect, useState } from "react";
import "./App.css";
import Home from "./Home";
import Appbar from "./Appbar";
import Cards from "./Cards";
import Slider from "./Slider";
import Registration from "./Registration";
import Loginup from "./Loginup";
import UplodaCourse from "./UploadCourse";
import UpdateCourse from "./UpdateCourse";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./Footer";
import AllCourses from "./AllCourses";

function App() {
  return (
    <>
      <div
        style={{
          width: "100%",
          height: "100vh",
        }}
      >
        <Router>
          <Appbar />
          <Routes>
            <Route path={"/addcourse"} element={<UplodaCourse />} />
            <Route path={"/course/"} element={<UpdateCourse />} />
            <Route path={"/courses"} element={<AllCourses />} />
            <Route path={"/singup"} element={<Registration />} />
            <Route path={"/singin"} element={<Loginup />} />
            <Route path={"/*"} element={<Home />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </>
  );
}

export default App;