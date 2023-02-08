import React from "react";
import MakeAppointment from "../Home/MakeAppointment/MakeAppointment";
import Membership from "./Membership/Membership";
import OurTherapis from "./OurTherapis/OurTherapis";
import ServiceBanner from "./ServiceBanner/ServiceBanner";
import ServiceOffer from "./ServiceOffer/ServiceOffer";
import { Helmet } from "react-helmet";
const Services = () => {
  return (
    <div className="bg-white">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Crown Spa & Salon -Services</title>
      </Helmet>
      <div>
        <ServiceBanner />
      </div>
      <div className="my-[5rem]">
        <OurTherapis />
      </div>
      <div className="my-[5rem]">
        <Membership />
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
