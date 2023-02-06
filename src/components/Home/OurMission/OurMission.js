import React from 'react';
import { FaEye, FaHandsWash } from "react-icons/fa";
const OurMission = () => {
    return (
      <div className="bg-[#002244]">
        <div className="lg:px-16 px-4 text-center py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <div className="flex justify-center items-center">
              <FaHandsWash className="text-white text-4xl font-bold" />
            </div>
            <h3 className="text-white text-4xl font-bold my-4">About Us</h3>
            <p className="text-sm text-gray-200">
              A crown spa and salon offers a wide range of beauty and wellness
              services for its customers. The services include facials,
              massages, and body treatments. Crown spa and salon also offers
              memberships, Happy Spa Hours, Combo spa & massage offers at
              reasonable prices. Spa & salon also have a team of experienced and
              professional stylists, estheticians, and massage therapists
              provide personalized care to meet the specific needs of each
              individual customer. Crown Spa and salon is a luxury place,
              providing high-end services, in a comfortable and relaxing
              atmosphere.
            </p>
          </div>
          <div>
            <div className="flex justify-center items-center">
              <FaEye className="text-white text-4xl font-bold" />
            </div>
            <h3 className="text-white text-4xl font-bold my-4">Vission</h3>
            <p className="text-sm text-gray-200">
              At Crown Spa and Salon, our vision is to be the leading
              destination for beauty, wellness, and relaxation. We aim to
              provide exceptional services and experiences that enhance our
              clients' confidence, beauty, and overall wellbeing. Our commitment
              to constantly evolve, through cutting-edge trends, advanced
              techniques, and innovative technology, ensures that every visit to
              Crown Spa and Salon is a rejuvenating journey.
            </p>
          </div>

          <div>
            <div className="flex justify-center items-center">
              <FaHandsWash className="text-white text-4xl font-bold" />
            </div>
            <h3 className="text-white text-4xl font-bold my-4">Mission</h3>
            <p className="text-sm text-gray-200">
              Our mission at Crown Spa and Salon is to create a nurturing and
              tranquil environment where our clients can escape the stress of
              everyday life and indulge in the ultimate pampering experience.
              Our team of highly trained professionals is dedicated to
              delivering exceptional services that leave our clients feeling
              refreshed, revitalized, and confident. We strive to provide an
              atmosphere of serenity and relaxation, while offering the latest
              in beauty and wellness trends and techniques, in order to enhance
              our clients' overall wellbeing.
            </p>
          </div>
        </div>
      </div>
    );
};

export default OurMission;