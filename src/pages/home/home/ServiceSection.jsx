import React from "react";
import TitleBanner from "../../../Components/titlebanner/TitleBanner";
import Cards from "../../../Components/Cards/Cards";
import ServiceSection from "./ServiceSection";
const ServiceSection = () => {
  return (
    <div className="bg-green-950 p-12 rounded-3xl m-12">
      <div className="flex flex-col mx-auto">
        <div>
          <TitleBanner
            tileClassName="text-white text-center text-3xl mb-4"
            title="Our Services"
            description="Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time."
            descripClassName=" text-center mb-4 w-200 mx-auto text-gray-300"
          />
        </div>
        <div className="grid grid-cols-3 m-8">
          <div className="bg-white w-72 items-centerjustify-center rounded-2xl mt-12">
            <Cards
              image={serviceIcon}
              title="Express  & Standard Delivery"
              tileClassName="text-green-950 font-bold mb-4 text-center text-2xl"
              imageClassName="mx-auto"
              description="We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off."
              descripClassName="text-[#606060] mb-2 text-center text-justify"
            />
          </div>
          <div className="bg-white w-72 items-centerjustify-center rounded-2xl mt-12">
            <Cards
              image={serviceIcon}
              title="Express  & Standard Delivery"
              tileClassName="text-green-950 font-bold mb-4 text-center text-2xl"
              imageClassName="mx-auto"
              description="We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off."
              descripClassName="text-[#606060] mb-2 text-center text-justify"
            />
          </div>
          <div className="bg-white w-72 items-centerjustify-center rounded-2xl mt-12">
            <Cards
              image={serviceIcon}
              title="Express  & Standard Delivery"
              tileClassName="text-green-950 font-bold mb-4 text-center text-2xl"
              imageClassName="mx-auto"
              description="We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off."
              descripClassName="text-[#606060] mb-2 text-center text-justify"
            />
          </div>
          <div className="bg-white w-72 items-centerjustify-center rounded-2xl mt-12">
            <Cards
              image={serviceIcon}
              title="Express  & Standard Delivery"
              tileClassName="text-green-950 font-bold mb-4 text-center text-2xl"
              imageClassName="mx-auto"
              description="We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off."
              descripClassName="text-[#606060] mb-2 text-center text-justify"
            />
          </div>
          <div className="bg-white w-72 items-centerjustify-center rounded-2xl mt-12">
            <Cards
              image={serviceIcon}
              title="Express  & Standard Delivery"
              tileClassName="text-green-950 font-bold mb-4 text-center text-2xl"
              imageClassName="mx-auto"
              description="We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off."
              descripClassName="text-[#606060] mb-2 text-center text-justify"
            />
          </div>
          <div className="bg-white w-72 items-centerjustify-center rounded-2xl mt-12">
            <Cards
              image={serviceIcon}
              title="Express  & Standard Delivery"
              tileClassName="text-green-950 font-bold mb-4 text-center text-2xl"
              imageClassName="mx-auto"
              description="We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off."
              descripClassName="text-[#606060] mb-2 text-center text-justify"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
