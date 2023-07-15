import React, { useState } from "react";
import "./App.css";
import Home from "./Home";
import Appbar from "./Appbar";
import Cards from "./Cards";
import Slider from "./Slider";
import Registration from "./Registration";
import Loginup from "./Loginup";
import UplodaCourse from "./UploadCourse";
import UpdateCourse from "./UpdateCourse";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Footer";

function App() {
  return (
    <>
      <div
        style={{
          width: "100%",
          height: "100vh",
        }}
      >
        {/* <Home />
        <Slider />
        <Registration />
        <Loginup />
        <UplodaCourse />
        <UpdateCourse /> */}
        <Appbar />

        <Home />

        <Footer />
      </div>
    </>
  );
}

export default App;
