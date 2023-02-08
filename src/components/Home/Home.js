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
        <title>Crown Spa & Salon -Home</title>
        
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
