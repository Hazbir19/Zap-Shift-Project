import React from "react";

const TitleBanner = ({
  title,
  description,
  tileClassName = "",
  descripClassName = "",
  ContentClassName = "",
}) => {
  return (
    <div className={`${ContentClassName}`}>
      <div>
        <h1 className={`text-bold ${tileClassName}`}>{title}</h1>
      </div>
      <div>
        <p className={`text-sm text-bold ${descripClassName}`}>{description}</p>
      </div>
    </div>
  );
};

export default TitleBanner;
