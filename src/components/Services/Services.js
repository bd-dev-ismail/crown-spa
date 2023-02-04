import React from "react";
import OurTherapis from "./OurTherapis/OurTherapis";
import ServiceBanner from "./ServiceBanner/ServiceBanner";

const Services = () => {
  return (
    <div className="bg-white">
      <div>
        <ServiceBanner />
      </div>
      <div className="my-[5rem]">
        <OurTherapis/>
      </div>
    </div>
  );
};

export default Services;
