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
        <title>
          Best Spa in Hyderabad, Banjara Hills | Contact us |Book An Appointment
          | Crown Spa & Salon -Contact
        </title>
        <meta
          name="description"
          content="You can reach us by phone, email, or by filling out the contact form on this page. We will do our best to respond to you as soon as possible. Thank you for choosing Crown Spa & Salon Banjarahills, Hyderabad for all your beauty and wellness needs."
        />
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
