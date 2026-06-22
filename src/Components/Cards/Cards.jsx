import React from "react";
import TitleBanner from "../titlebanner/TitleBanner";

const Cards = ({
  image,
  title,
  description,
  imageClassName = "",
  contentClassName = "",
  className = "",
  descripClassName = "",
  tileClassName = "",
}) => {
  return (
    <div className={`p-6 rounded-xl ${className}`}>
      <img
        src={image}
        alt={title}
        className={`w-12 h-12 mb-4 ${imageClassName}`}
      />
      <TitleBanner
        title={title}
        description={description}
        descripClassName={descripClassName}
        contentClassName={contentClassName}
        tileClassName={tileClassName}
      />
    </div>
  );
};

export default Cards;
