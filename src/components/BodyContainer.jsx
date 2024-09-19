import React from "react";
import TitleBar from "./body/TitleBar";

const BodyContainer = ({ title, children }) => {
  return (
    <>
      <TitleBar title={title} />
      <section className="py-10 flex-1 container mx-auto">
        {children}
      </section>
    </>
  );
};

export default BodyContainer;
