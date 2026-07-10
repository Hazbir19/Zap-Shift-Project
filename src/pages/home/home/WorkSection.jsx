import React from "react";
import Cards from "../../../Components/Cards/Cards";
import TitleBanner from "../../../Components/titlebanner/TitleBanner";
import bookingIcon from "../../../assets/bookingIcon.png";
const WorkSection = () => {
  return (
    <>
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
            className="w-72 h-72 shadow-xl"
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
            className="w-72 h-72 shadow-xl"
            title="Cash On Delivery"
            description="From personal packages to business shipments — we deliver on time, every time."
            tileClassName="text-xl text-green-900"
            descripClassName="justify text-gray-500 mt-2"
          />
        </div>
        <div>
          <Cards
            image={bookingIcon}
            className="w-72 h-72 shadow-xl"
            title="Delivery Hub"
            tileClassName="text-xl text-green-900"
            description="From personal packages to business shipments — we deliver on time, every time."
            descripClassName="justify text-gray-500 mt-2"
          />
        </div>
        <div>
          <Cards
            image={bookingIcon}
            className="w-72 h-72 shadow-xl"
            title="Booking SME & Corporate"
            tileClassName="text-xl text-green-900"
            description="From personal packages to business shipments — we deliver on time, every time."
            descripClassName="justify text-gray-500 mt-2"
          />
        </div>
      </div>
    </>
  );
};

export default WorkSection;
