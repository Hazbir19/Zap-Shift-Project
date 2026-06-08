import React from "react";
import logo from "../../assets/Logo.png";
function Logo() {
  return (
    <div className="flex items-end">
      <img src={logo} alt=""></img>
      <h3 className="text-3xl font-bold -ms-2">zapShift</h3>
    </div>
  );
}

export default Logo;
