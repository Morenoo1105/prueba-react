import React from "react";

const TitleBar = ({ title }) => {
  return (
    <div className="w-full bg-neutral-700 text-white py-2">
      <h3 className="container mx-auto font-semibold text-xl">Popular {title}</h3>
    </div>
  );
};

export default TitleBar;
