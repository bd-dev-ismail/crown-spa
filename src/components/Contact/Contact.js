import React from "react";
import MakeAppointment from "../Home/MakeAppointment/MakeAppointment";
import ContactBanner from "./ContactBanner/ContactBanner";
import Location from "./Location/Location";

const Contact = () => {
  return (
    <div className="bg-white">
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
