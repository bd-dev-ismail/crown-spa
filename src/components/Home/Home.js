import React from "react";
import Banner from "./Banner/Banner";
import BestService from "./BestService/BestService";
import ExperticesArea from "./ExperticesArea/ExperticesArea";
import OurMission from "./OurMission/OurMission";

const Home = () => {
  return (
    <div>
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
    </div>
  );
};

export default Home;
