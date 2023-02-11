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
        <title>
          Spa & Massages in Banjara Hills | Full body Massage | Crown spa &
          salon -Spa & Massages | Memberships | Best Spa in Banjara Hills Full
          body massage in Banjara Hills | Salon & Spa services | Crown Spa &
          Salon Aroma Therapy | Swedish Massage | Thai Massage | Full Body
          Massages | Spa & Salon | Crown Spa & Salon
        </title>
        <meta
          name="description"
          content="At Crown Spa & Salon in Banjarahills, Hyderabad, we believe that beauty starts from within. Our wide range of beauty and wellness services are designed to help you look and feel your best, both inside and out. Whether you're looking for a relaxing massage, a rejuvenating body treatment, or a revitalizing facial, our experienced therapists are here to provide you with the ultimate spa experience. Book your appointment today and discover the beauty within."
        />
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
