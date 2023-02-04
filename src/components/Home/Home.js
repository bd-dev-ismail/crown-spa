import React from "react";
import Banner from "./Banner/Banner";
import ExperticesArea from "./ExperticesArea/ExperticesArea";
import OurMission from "./OurMission/OurMission";

const Home = () => {
  return (
    <div>
      <Banner />
      <div className="mt-[5rem]">
        <ExperticesArea />
      </div>
      <div>
        <OurMission />
      </div>
    </div>
  );
};

export default Home;
