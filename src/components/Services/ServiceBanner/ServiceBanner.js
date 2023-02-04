import React from 'react';
import banner from '../../../assets/services-header-img-bg.jpg';

const ServiceBanner = () => {
    return (
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
              malesuada posuere sed ullamcorper nulla eleifend eleifend in arcu
              feugiat <br /> tempor blandit cursus
            </p>
          </div>
        </div>
      </div>
    );
};

export default ServiceBanner;