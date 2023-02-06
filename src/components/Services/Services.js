import React from "react";
import MakeAppointment from "../Home/MakeAppointment/MakeAppointment";
import OurTherapis from "./OurTherapis/OurTherapis";
import ServiceBanner from "./ServiceBanner/ServiceBanner";
import ServiceOffer from "./ServiceOffer/ServiceOffer";

const Services = () => {
  return (
    <div className="bg-white">
      <div>
        <ServiceBanner />
      </div>
      <div className="my-[5rem]">
        <OurTherapis />
      </div>
      <div className="my-[5rem]">
        <ServiceOffer />
      </div>
      <div className="my-[5rem]">
        <MakeAppointment />
      </div>
    </div>
  );
};

export default Services;
