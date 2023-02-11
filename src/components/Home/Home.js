import React from "react";
import Banner from "./Banner/Banner";
import BestService from "./BestService/BestService";
import ExperticesArea from "./ExperticesArea/ExperticesArea";
import MakeAppointment from "./MakeAppointment/MakeAppointment";
import OurMission from "./OurMission/OurMission";
import { Helmet } from "react-helmet";
const Home = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Welcome to Crown Spa & Salon | Best Spa in Banjara Hills | Spa Near Me
          -Home
        </title>
        <meta
          name="description"
          content="Experience the ultimate in luxury and relaxation at Crown Spa & Salon. Our Banjarahills, Hyderabad location offers a wide range of beauty and wellness services, including massages, body treatments, facials, and more. Indulge in a day of pampering and emerge feeling refreshed and rejuvenated. Book your appointment today!"
        />
      </Helmet>
      <Banner />
      <div className="mt-[5rem]">
        <ExperticesArea />
      </div>
      <div className="my-[5rem]">
        <OurMission />
      </div>
      <div className="my-[5rem]">
        <BestService />
      </div>
      <div className="my-[5rem]">
        <MakeAppointment />
      </div>
    </div>
  );
};

export default Home;
