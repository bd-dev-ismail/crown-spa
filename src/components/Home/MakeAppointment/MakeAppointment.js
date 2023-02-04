import React from 'react';
import { FaLocationArrow, FaRegClock, FaPhoneAlt } from "react-icons/fa";

const MakeAppointment = () => {
    return (
      <div className="mx-auto pt-[5rem] sm:max-w-xl px-4 md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16  ">
          <div>
            <h5 className="text-sm font-bold  uppercase text-[#53A292]">
              What are you waiting for...
            </h5>
            <h3
              className="lg:text-5xl my-4 text-4xl font-bold text-primary
            "
            >
              Make an Appointment
            </h3>
            <p className="text-secondary mb-5">
              We look forward to providing you with an exceptional spa and salon
              experience. Thank you for choosing Crown Spa & Salon.
            </p>
            <div className="my-5">
              <p className="text-primary font-semibold flex gap-3 items-center">
                <FaLocationArrow /> Our Location
              </p>
              <p className="text-secondary pl-7 font-semibold">
                2nd Floor, Road No. 12, Owner's Pride Building, Banjara Hills,
                Hyderabad, Telangana 500003
              </p>
            </div>
            <div className="divider"></div>
            <div className="flex items-center justify-between">
              <div className="my-5">
                <p className="text-primary font-semibold flex gap-3 items-center">
                  <FaRegClock /> Opening Hours
                </p>
                <p className="text-secondary pl-7 font-semibold">
                  Mon - Sun: 10:00 AM – 09:00 PM
                </p>
              </div>
              <div className="my-5">
                <p className="text-primary font-semibold flex gap-3 items-center">
                  <FaPhoneAlt /> Contact
                </p>
                <p className="text-secondary pl-7 font-semibold">
                  Phone: +919000151837 / +919000151836 <br />
                  Email: crownspansalon@gmail.com
                </p>
              </div>
            </div>
          </div>
          <div className='lg:ml-[8rem]'>
            <div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Your Full Name"
                  className="input input-bordered w-full max-w-xs"
                />
              </div>
              <div className="form-control my-5 w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="input input-bordered w-full max-w-xs"
                />
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Phone</span>
                </label>
                <input
                  type="number"
                  placeholder="Enter Your Phone Number"
                  className="input input-bordered w-full max-w-xs"
                />
              </div>
              <div className="my-6">
                <button className="btn btn-primary text-white btn-outline">
                  Save Up to 50% Today
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default MakeAppointment;