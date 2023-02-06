import React from "react";

const Location = () => {
  return (
    <div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d951.7705747328007!2d78.44193032935581!3d17.40783765787127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb977d5cfc603b%3A0x8d7c82ab8b19ca7b!2sCrown%20Spa%20%26%20Salon!5e0!3m2!1sen!2sbd!4v1675673050227!5m2!1sen!2sbd"
        style={{ border: "0" }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        title="Crown Spa & Salon"
        className="w-full h-[30rem]"
      ></iframe>
    </div>
  );
};

export default Location;
