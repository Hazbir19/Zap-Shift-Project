import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import BannerImage1 from "../../../assets/banner/banner1.png";
import BannerImage2 from "../../../assets/banner/banner2.png";
import BannerImage3 from "../../../assets/banner/banner3.png";
import { Carousel } from "react-responsive-carousel";
import { FaSquareArrowUpRight } from "react-icons/fa6";
const Banner = () => {
  return (
    <div className="my-8 px-8 relative">
      <Carousel autoPlay={true} infiniteLoop={true}>
        <div>
          <img src={BannerImage1} />
        </div>
        <div>
          <img src={BannerImage2} />
        </div>
        <div>
          <img src={BannerImage3} />
        </div>
      </Carousel>
      <div className="flex space-x-2 absolute top-108 ml-12">
        {/* Button */}
        <div className="flex bg-primary p-1.5 rounded-2xl space-x-1.5 w-40 items-center justify-center">
          <button type="button" className="text-center text-sm cursor-pointer">
            Track Your Parcel
          </button>
          <FaSquareArrowUpRight />
        </div>
        <div>
          {/* icons  */}
          <button
            type="button"
            className="border border-gray-200 rounded-lg p-2 text-sm cursor-pointer"
          >
            Be A Rider
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
