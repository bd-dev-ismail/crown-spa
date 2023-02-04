import React from 'react';
import banner from '../../../assets/services-header-img-bg.jpg';
import { BiSpa } from "react-icons/bi";
import { FaHands, FaHandsWash } from "react-icons/fa";
const ServiceBanner = () => {
    return (
      <div>
        <div
          style={{
            backgroundImage: `url(${banner})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          className="text-center h-[60vh] flex justify-center items-center"
        >
          <div>
            <div>
              <h6 className="font-bold text-white text-sm">OUR SERVICES</h6>
              <h3 className="font-semibold my-8 text-white text-4xl lg:text-6xl">
                Spa Center
              </h3>
              <p className="text-white font-semibold">
                Duis id quis rutrum proin laoreet sem semper orci risus semper{" "}
                <br />
                malesuada posuere sed ullamcorper nulla eleifend eleifend in
                arcu feugiat <br /> tempor blandit cursus
              </p>
            </div>
          </div>
        </div>
        <div className="mx-auto sm:max-w-xl bg-white shadow-2xl py-10 lg:mt-[-3rem] md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
          <div>
            <div className="flex gap-8 my-10 text-center lg:text-start flex-wrap lg:flex-nowrap">
              <div>
                <div className="flex lg:block justify-center items-center">
                  <p className="font-semibold text-primary">01</p>
                </div>
                <h4 className="text-2xl font-bold text-primary my-3">
                  Happy Spa Hours
                </h4>
                <p className="text-sm text-secondary">
                  Welcome to Crown Spa & Salon, where every day is a spa day! To
                  help you unwind and rejuvenate, we offer special "Happy Spa
                  Hours" every day starting from 12:00PM – 06:00 PM During this
                  time, select spa services are available at a discounted rate.
                </p>
              </div>
              <div>
                <div className="flex lg:block justify-center items-center">
                  <p className="font-semibold text-primary">02</p>
                </div>
                <h4 className="text-2xl font-bold text-primary my-3">
                  Member Discount
                </h4>
                <p className="text-sm text-secondary">
                  Becoming a member is easy and affordable. Simply sign up for
                  our membership program by filling out the form below or
                  speaking with one of our team members during your next visit.
                  As a member, you will receive a personalized membership card,
                  which you can use to receive your discount on all future
                  visits.
                </p>
              </div>
              <div>
                <div className="flex lg:block justify-center items-center">
                  <p className="font-semibold text-primary">03</p>
                </div>
                <h4 className="text-2xl font-bold text-primary my-3">
                  Unique spa packages
                </h4>
                <p className="text-sm text-secondary">
                  All of our spa packages include access to our state-of-the-art
                  facilities, including our tranquil relaxation rooms, steam
                  rooms, saunas, and more. And, as always, our skilled
                  therapists are here to ensure that you receive the best
                  possible experience
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ServiceBanner;