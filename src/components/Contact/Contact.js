import React from "react";
import MakeAppointment from "../Home/MakeAppointment/MakeAppointment";
import ContactBanner from "./ContactBanner/ContactBanner";
import Location from "./Location/Location";
import { Helmet } from "react-helmet";
const Contact = () => {
  return (
    <div className="bg-white">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Crown Spa & Salon -Contact Us</title>
        
      </Helmet>
      <div>
        <ContactBanner />
      </div>
      <div className="my-[5rem]">
        <MakeAppointment />
      </div>
      <div className="mt-[5rem]">
        <Location />
      </div>
    </div>
  );
};

export default Contact;
