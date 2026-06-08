import React from "react";
import Footer from "../pages/shared/Footer";
import { Outlet } from "react-router";
import Navbar from "../pages/shared/Navbar";

function Rootlayouts() {
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar />
      <div className="min-h-115">
        <Outlet />
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Rootlayouts;
