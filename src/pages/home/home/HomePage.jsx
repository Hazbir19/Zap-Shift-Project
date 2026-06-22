import React from "react";
import Banner from "../Banner/Banner";
import Cards from "../../../Components/Cards/Cards";
import bookingIcon from "../../../assets/bookingIcon.png";
import serviceIcon from "../../../assets/service.png";
import TitleBanner from "./../../../Components/titlebanner/TitleBanner";
import ServiceSection from "./ServiceSection";
import WorkSection from "./WorkSection";

function HomePage() {
  return (
    <div>
      {/*---Banner Section----- */}
      <div>
        <Banner />
      </div>
      {/*---How its work Section----- */}
      <div>
        <WorkSection />
      </div>
      <div>
        <ServiceSection />
      </div>
    </div>
  );
}

export default HomePage;
