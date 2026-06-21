import React from "react";
import Banner from "../Banner/Banner";
import Cards from "../../../Components/Cards/Cards";
import bookingIcon from "../../../assets/bookingIcon.png";
import serviceIcon from "../../../assets/service.png";
import TitleBanner from "./../../../Components/titlebanner/TitleBanner";
function HomePage() {
  return (
    <div>
      {/*---Banner Section----- */}
      <div>
        <Banner />
      </div>
      {/*---How its work Section----- */}
      <div>
        <TitleBanner
          title="How it Works"
          tileClassName="text-green-900 ml-10 text-3xl"
        />
      </div>
      <div className="flex space-x-4 p-6 items-center justify-center">
        <div>
          <Cards
            image={bookingIcon}
            className="w-72 h-72"
            title="Booking Pick & Drop"
            description={
              "From personal packages to business shipments — we deliver on time, every time."
            }
            tileClassName="text-xl text-green-900"
            descripClassName="justify text-gray-500 mt-2"
          />
        </div>
        <div>
          <Cards
            image={bookingIcon}
            className="w-72 h-72"
            title="Cash On Delivery"
            description="From personal packages to business shipments — we deliver on time, every time."
            tileClassName="text-xl text-green-900"
            descripClassName="justify text-gray-500 mt-2"
          />
        </div>
        <div>
          <Cards
            image={bookingIcon}
            className="w-72 h-72"
            title="Delivery Hub"
            tileClassName="text-xl text-green-900"
            description="From personal packages to business shipments — we deliver on time, every time."
            descripClassName="justify text-gray-500 mt-2"
          />
        </div>
        <div>
          <Cards
            image={bookingIcon}
            className="w-72 h-72"
            title="Booking SME & Corporate"
            tileClassName="text-xl text-green-900"
            description="From personal packages to business shipments — we deliver on time, every time."
            descripClassName="justify text-gray-500 mt-2"
          />
        </div>
      </div>
      {/* Our Service Section */}
      <div className="bg-green-950">
        <div className="">
          <Cards
            image={serviceIcon}
            title="Express  & Standard Delivery"
            tileClassName="text-white"
            imageClassName="items-center justify-center"
          />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
