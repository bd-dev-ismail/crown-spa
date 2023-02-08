import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import { Nav } from "../components/Nav/Nav";
// import {Footer} from '../components/Footer/Footer';
import { RiWhatsappFill } from "react-icons/ri";
import ReactWhatsapp from "react-whatsapp";
const Main = () => {
  return (
    <div>
      <div className=" fixed top-[90%] right-5 z-50">
        <ReactWhatsapp
          number="+919000151837"
          message="I am Interested in Crown Spa & Salon Services!!!"
        >
          <RiWhatsappFill
            title="Direct Message"
            className="text-[#25D366] text-6xl"
          />
        </ReactWhatsapp>
      </div>
      <Nav />
      <Outlet />
      {/* <Footer/> */}
      <Footer />
    </div>
  );
};

export default Main;
