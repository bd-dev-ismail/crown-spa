import React from "react";
import { FaLocationArrow, FaRegClock, FaPhoneAlt } from "react-icons/fa";
import Swal from "sweetalert2";
const MakeAppointment = () => {
  const handleBtn = () => {
    Swal.fire("Thanks For Subbmit!", "You recived your mail!", "success");
  };
  const services = [
    { name: "Balinese Massage" },
    { name: "Hot & Cold Stone Therapy" },
    { name: "Therapies For Stress Relief" },
    { name: "Body Scrubs" },
    { name: "African Cocoa Butter" },
    { name: "Dry Therapy" },
    { name: "Body Polish" },
    { name: "Relax Detox Pack" },
    { name: "Foot Reflexology" },
    { name: "Specific Therapy" },
  ];
  return (
    <div
      id="appointment"
      className="mx-auto pt-[5rem] sm:max-w-xl px-4 md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8"
    >
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
            <div className="mt-2">
              <a
                href="https://www.google.com/maps/dir//Crown+Spa+%26+Salon+2nd+Floor+Road+No.+12,+Owner's+Pride+Building+Banjara+Hills,+Hyderabad,+Telangana+500003,+India/@17.4078351,78.4424775,18z/data=!4m5!4m4!1m0!1m2!1m1!1s0x3bcb977d5cfc603b:0x8d7c82ab8b19ca7b"
                className="text-secondary font-semibold"
                target="_blank"
                rel="noopener noreferrer"
              >
                2nd Floor, Road No. 12, Owner's Pride Building, Banjara Hills,{" "}
                <br />
                Hyderabad, Telangana 500003
              </a>
            </div>
          </div>
          <div className="divider"></div>
          <div className="lg:flex items-center  justify-between">
            <div>
              <p className="text-primary font-semibold flex gap-3 items-center">
                <FaRegClock /> Opening Hours
              </p>
              <p className="text-secondary pl-7 font-semibold">
                Days: Mon - Sun <br /> Time: 10:00 AM – 09:00 PM
              </p>
            </div>
            <div className="mt-4 lg:mt-0">
              <p className="text-primary font-semibold flex gap-3 items-center">
                <FaPhoneAlt /> Contact
              </p>
              <h3 className="text-secondary pl-7 font-semibold">
                Phone: <a href="tel:+919000151837">+919000151837</a> /
                <a href="tel:+919000151836">+919000151836</a>
              </h3>

              <a
                href="mailto:crownspansalon@gmail.com"
                rel="noopener noreferrer"
                className="text-secondary pl-7 font-semibold"
              >
                Email: crownspansalon@gmail.com
              </a>
            </div>
          </div>
        </div>
        <div className="lg:ml-[8.5rem] ">
          <form action="https://formspree.io/f/xeqwalrn"  method="POST">
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text font-bold">Name</span>
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder="Enter Your Full Name"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="form-control my-3w-full max-w-xs">
              <label className="label">
                <span className="label-text font-bold">Email</span>
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="Enter Your Email"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text font-bold">Phone</span>
              </label>
              <input
                type="number"
                name="phone"
                placeholder="Enter Your Phone Number"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="form-control my-3 w-full max-w-xs">
              <label className="label">
                <span className="label-text font-bold">Services</span>
              </label>
              <select required className="select select-bordered">
                <option disabled selected>
                  Select Your Service Pack
                </option>
                {services?.map((item, idx) => (
                  <option  className="text-sm font-bold" key={idx}>
                    {item.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-control  w-full max-w-xs">
              <label className="label">
                <span className="label-text font-bold">Your Message</span>
              </label>
              <textarea required
                className="textarea textarea-bordered h-24"
                placeholder="Feel Free to add text"
              ></textarea>
            </div>
            <div className="my-6">
              <button
                onClick={handleBtn}
                type="submit"
                style={{ color: "#fff" }}
                className="btn btn-primary "
              >
                Book an appointment
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MakeAppointment;
