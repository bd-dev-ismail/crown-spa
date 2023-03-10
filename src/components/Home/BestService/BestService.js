import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

import img from "../../../assets/homepage-service-img.jpg";
import bg from "../../../assets/section-grad-bg.svg";
const BestService = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        backgroundPosition: "50vw 0px",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
      }}
    >
      <div className="mx-auto pt-[5rem] sm:max-w-xl px-4 md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="grid lg:grid-cols-3 items-center grid-cols-1 gap-8">
          <div>
            <h3 className="text-primary text-4xl mb-3 font-bold">
              The best of <br /> services
            </h3>
            <p className="text-secondary text-sm my-7">
              The services include facials, massages, and body treatments. Crown
              spa and salon also offers memberships, Happy Spa Hours, Combo spa
              & massage offers at reasonable prices. Spa & salon also have a
              team of experienced and professional stylists, estheticians, and
              massage therapists provide personalized care to meet the specific
              needs of each individual customer
            </p>

            <a
              href="#appointment"
              className="text-sm w-[10rem]   btn  btn-primary mt-5 text-white flex items-center font-semibold "
            >
              Book Now <FaLongArrowAltRight className="ml-4" />
            </a>
          </div>
          <div>
            <img src={img} alt="" className="rounded-2xl" />
          </div>
          <div>
            <div>
              <div className="divider"></div>
              <h4
                className="text-2xl pb-3 font-semibold text-primary
          "
              >
                Balinese Massage
              </h4>
              <p className="text-secondary">
                It involves gentle to medium pressure and long strokes to
                promote relaxation and increase circulation. It also
                incorporates the use of natural oils and spices to nourish and
                revitalize the skin.
              </p>
              <a
                href="#appointment"
                className="text-sm mt-3 flex items-center font-semibold text-primary"
              >
                Book Now <FaLongArrowAltRight className="ml-4" />
              </a>
              <div className="divider"></div>
            </div>
            <div>
              <h4
                className="text-2xl pb-3 font-semibold text-primary
          "
              >
                Hot and cold stone therapy
              </h4>
              <p className="text-secondary">
                This helps to relax tense muscles, improve circulation, and
                relieve pain. The cold stones, usually made of marble, are used
                to help reduce inflammation, soothe skin and reduce pain. The
                alternating use of hot and cold stones in massage therapy helps
                to balance the body and mind, leaving you feeling refreshed and
                rejuvenated.
              </p>
              <a
                href="#appointment"
                className="text-sm mt-3 flex items-center font-semibold text-primary"
              >
                Book Now <FaLongArrowAltRight className="ml-4" />
              </a>
              <div className="divider"></div>
            </div>
            <div>
              <h4
                className="text-2xl pb-3 font-semibold text-primary
          "
              >
                Swedish Massage
              </h4>
              <p className="text-secondary">
                Swedish massage is a popular choice for those seeking a relaxing
                and therapeutic massage experience. It can help relieve stress,
                improve sleep, and reduce muscle pain and tension. It is also
                often used as a complementary therapy to complement other
                medical treatments and improve overall health and well-being.
              </p>
              <a
                href="#appointment"
                className="text-sm mt-3 flex items-center font-semibold text-primary"
              >
                Book Now <FaLongArrowAltRight className="ml-4" />
              </a>
              <div className="divider"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestService;
