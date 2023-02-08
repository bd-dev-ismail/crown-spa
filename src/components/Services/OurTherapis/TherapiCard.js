import React from 'react';
import { FaLongArrowAltRight } from 'react-icons/fa';
import img1 from '../../../assets/lotus-spa-template-hero-img-bg-.png';
import img2 from '../../../assets/services-img-4.jpg';
const TherapiCard = () => {
    return (
      <div className="lg:flex justify-around items-center">
        <div className="card card-compact  h-[42rem] mb-16 lg:mb-0 w-full lg:w-[28rem] bg-base-100 shadow-xl">
          <figure>
            <img src={img1} alt="Shoes" className="h-[25rem] w-full" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-2xl font-bold text-primary">
              Crown Spa & Salon Holistic Packages
            </h2>
            <p className="text-secondary font-semibold">
              Scrub + Therapy. <br />{" "}
              <span className="text-primary">Pricing: Rs. 4,500/- 90 Mins</span>{" "}
            </p>
            <p className="text-secondary font-semibold my-4">
              Scrub + Polishing. <br />{" "}
              <span className="text-primary">Pricing: Rs. 4,500/- 90 Mins</span>{" "}
            </p>
            <div className="card-actions justify-center">
              <button className="btn-primary btn text-white">
                Book Now <FaLongArrowAltRight className="ml-3" />{" "}
              </button>
            </div>
          </div>
        </div>
        <div className="card card-compact  h-[42rem] w-full lg:w-[28rem] bg-base-100 shadow-xl">
          <figure>
            <img src={img2} alt="Shoes" className="h-[25rem] w-full" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-2xl font-bold text-primary">
              Relax Detox Pack
            </h2>
            <p className="text-secondary font-semibold">
              Swedish | Balinese | Aroma Therapeutic | Deep Tissue Massage (60
              Min) + Head Massage (30 Min) + Foot Reflex (30 Min)
            </p>
            <p className="text-primary font-semibold my-4">
              Pricing: Rs. 8,699 120 Mins (Each)
            </p>
            <div className="card-actions justify-center">
              <a
                href="#appointment"
                className="text-sm w-[10rem] btn  btn-primary mt-5 text-white flex items-center font-semibold "
              >
                Book Now <FaLongArrowAltRight className="ml-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
};

export default TherapiCard;