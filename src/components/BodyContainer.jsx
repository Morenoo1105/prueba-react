import React from "react";
import TitleBar from "./body/TitleBar";

const BodyContainer = ({ title, children }) => {
  return (
    <>
      <TitleBar title={title} />
      <section className="py-10 container mx-auto min-h-full">
        {children}
      </section>
    </>
  );
};

export default BodyContainer;
