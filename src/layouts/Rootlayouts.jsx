import React from "react";
import Footer from "../pages/shared/Footer";
import { Outlet } from "react-router";
import Navbar from "../pages/shared/Navbar";

function Rootlayouts() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer></Footer>
    </div>
  );
}

export default Rootlayouts;
