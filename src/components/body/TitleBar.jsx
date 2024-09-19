import React from "react";

const TitleBar = ({ title }) => {
  return (
    <div className="w-full bg-neutral-700 text-white">
      <h3 className="container mx-auto">Popular {title}</h3>
    </div>
  );
};

export default TitleBar;
