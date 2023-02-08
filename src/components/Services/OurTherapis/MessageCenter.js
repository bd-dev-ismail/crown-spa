import React from "react";
import img1 from "../../../assets/services-img-1.jpg";
import img2 from "../../../assets/services-img-2.jpg";
import img3 from "../../../assets/services-img-3.jpg";
import img4 from "../../../assets/services-img-4.jpg";
import { AiFillCaretRight } from "react-icons/ai";
import { FaLongArrowAltRight } from "react-icons/fa";
import TherapiCard from "./TherapiCard";
const MessageCenter = () => {
  return (
    <div>
      <div className="lg:flex items-center gap-16 my-[5rem]">
        <img src={img1} alt="" className="mb-5 lg:mb-0 rounded" />
        <div className="px-4">
          <h3 className="text-3xl font-bold text-primary">Balinese Massage </h3>
          <p className="text-secondary my-4">
            It involves gentle to medium pressure and long strokes to promote
            relaxation and increase circulation. It also incorporates the use of
            natural oils and spices to nourish and revitalize the skin.
          </p>
          <p className="font-bold text-xl text-primary mb-3">Pricing:</p>
          <p className="font-semibold text-primary my-2">Rs. 3000/- 60 Min</p>
          <p className="font-semibold text-primary">Rs. 4000/- 90 Min</p>
          <div className="mt-5">
            <a
              href="#appointment"
              className="text-sm w-[10rem] btn  btn-primary mt-5 text-white flex items-center font-semibold "
            >
              Book Now <FaLongArrowAltRight className="ml-4" />
            </a>
          </div>
        </div>
      </div>
      <div className="lg:flex flex-row-reverse items-center gap-16 my-[5rem]">
        <img src={img2} alt="" className="mb-5 lg:mb-0 rounded" />
        <div className="px-4">
          <h3 className="text-3xl font-bold text-primary">
            Hot & Cold Stone Therapy{" "}
          </h3>
          <p className="text-secondary my-4">
            This helps to relax tense muscles, improve circulation, and relieve
            pain. The cold stones, usually made of marble, are used to help
            reduce inflammation, soothe skin and reduce pain. The alternating
            use of hot and cold stones in massage therapy helps to balance the
            body and mind, leaving you feeling refreshed and rejuvenated.
          </p>
          <p className="font-bold text-xl text-primary mb-3">Pricing:</p>
          <p className="font-semibold text-primary my-2">
            Rs. 35,000/- 90 Mins
          </p>
          <div className="mt-5">
            <a
              href="#appointment"
              className="text-sm w-[10rem] btn  btn-primary mt-5 text-white flex items-center font-semibold "
            >
              Book Now <FaLongArrowAltRight className="ml-4" />
            </a>
          </div>
        </div>
      </div>
      <div className="lg:flex items-center gap-16 my-[5rem]">
        <img src={img3} alt="" className="mb-5 lg:mb-0 rounded" />
        <div className="px-4">
          <h3 className="text-3xl font-bold text-primary">
            Therapies For Stress Relief | Tiredness | Mental Pressure{" "}
          </h3>
          <p className="text-secondary my-4">
            An Advanced form of aroma therapy. This treatment focuses on using
            direct medium tissue pressure on muscles and connecting tissue. It
            includes techniques like circular pressure applied by the hands and
            palms, firm kneading, percussion like tapping, bending and
            stretching.
          </p>
          <p className="flex items-center text-secondary">
            <AiFillCaretRight className="text-primary" />
            Shea & Coconut Butter (Not recommended for oily skin)
          </p>
          <p className="flex items-center text-secondary my-4">
            <AiFillCaretRight className="text-primary" />
            Sweet Almond Oil
          </p>
          <p className="flex items-center text-secondary">
            <AiFillCaretRight className="text-primary" />
            Plant Based Oil Extracts
          </p>
          <p className="font-bold text-xl text-primary mt-5 mb-3">Pricing:</p>
          <p className="font-semibold text-primary my-2">Rs. 2,800/- 60 Mins</p>
          <p className="font-semibold text-primary">Rs. 3,800/- 90 Mins</p>
          <div className="mt-5">
            <a
              href="#appointment"
              className="text-sm w-[10rem] btn  btn-primary mt-5 text-white flex items-center font-semibold "
            >
              Book Now <FaLongArrowAltRight className="ml-4" />
            </a>
          </div>
        </div>
      </div>
      <div className="lg:flex flex-row-reverse items-center gap-16 my-[5rem]">
        <img src={img4} alt="" className="mb-5 lg:mb-0 rounded" />
        <div className="px-4">
          <h3 className="text-3xl font-bold text-primary">
            Body Scrubs Whitening Exotic Vanilla Rose Body Scrub
          </h3>
          <p className="text-secondary my-4">
            A fantastic treatment for making the skin baby soft and smooth. The
            body is scrubbed using rosehip extracts along with shea butter and
            essential aroma oils, leaving your skin awake and glossy. It is
            designed to nourish and lighten dark or discoloured areas of your
            skin.
          </p>
          <p className="font-bold text-xl text-primary mb-3">Pricing:</p>
          <p className="font-semibold text-primary my-2">Rs. 3,000/- 60 Mins</p>
          <div className="mt-5">
            <a
              href="#appointment"
              className="text-sm w-[10rem] btn  btn-primary mt-5 text-white flex items-center font-semibold "
            >
              Book Now <FaLongArrowAltRight className="ml-4" />
            </a>
          </div>
        </div>
      </div>
      <div className="lg:flex  items-center gap-16 my-[5rem]">
        <img src={img1} alt="" className="mb-5 lg:mb-0 rounded" />
        <div className="px-4">
          <h3 className="text-3xl font-bold text-primary">
            African Cocoa Butter Body Scrub
          </h3>
          <p className="text-secondary my-4">
            This scrub is specially formulated with cocoa and shea butter to
            nourish, natural crushed cocoa beans to gently exfoliate and
            enriched with Vitamin E to promote skin renewal. Infused with the
            rich aroma of chocolate, this scrub gently exfoliates, refines and
            polishes to reveal glowing new skin.
          </p>
          <p className="font-bold text-xl text-primary mb-3">Pricing:</p>
          <p className="font-semibold text-primary my-2">Rs. 3,200/- 60 Mins</p>
          <div className="mt-5">
            <a
              href="#appointment"
              className="text-sm w-[10rem] btn  btn-primary mt-5 text-white flex items-center font-semibold "
            >
              Book Now <FaLongArrowAltRight className="ml-4" />
            </a>
          </div>
        </div>
      </div>
      <div className="lg:flex flex-row-reverse  items-center gap-16 my-[5rem]">
        <img src={img2} alt="" className="mb-5 lg:mb-0 rounded" />
        <div className="px-4">
          <h3 className="text-3xl font-bold text-primary">
            Authentic Traditional Thai Massage (Dry Therapy)
          </h3>
          <p className="text-secondary my-4">
            At Crown Spa & Salon, we offer the authentic traditional Thai
            massage, to help you rejuvenate and refresh your mind, body and
            soul. Our experienced therapists are trained in the traditional
            techniques of Thai massage, using gentle pressure and stretching to
            release tension and improve flexibility. So why wait? Book your
            Authentic Traditional Thai Massage session today and experience the
            many benefits for yourself.
          </p>
          <p className="font-bold text-xl text-primary mb-3">Pricing:</p>
          <p className="font-semibold text-primary my-2">Rs. 2,000/- 60 Mins</p>
          <p className="font-semibold text-primary my-2">Rs. 3,000/- 90 Mins</p>
          <div className="mt-5">
            <a
              href="#appointment"
              className="text-sm w-[10rem] btn  btn-primary mt-5 text-white flex items-center font-semibold "
            >
              Book Now <FaLongArrowAltRight className="ml-4" />
            </a>
          </div>
        </div>
      </div>
      <div className="lg:flex  items-center gap-16 my-[5rem]">
        <img src={img3} alt="" className="mb-5 lg:mb-0 rounded" />
        <div className="px-4">
          <h3 className="text-3xl font-bold text-primary">
            Aroma Therapeutic Massage (Oil Therapy)
          </h3>
          <p className="text-secondary my-4">
            At Crown Spa & Salon, we believe in the power of aromatherapy to
            help you achieve a state of total relaxation and rejuvenation. Our
            Aroma Therapeutic Massage, also known as Oil Therapy, combines the
            therapeutic benefits of massage with the soothing scents of
            essential oils to create a truly unique and rejuvenating experience.
            Don't miss out on the chance to experience the many benefits of
            Aroma Therapeutic Massage. Book your appointment today by contacting
            us.
          </p>
          <p className="font-bold text-xl text-primary mb-3">Pricing:</p>
          <p className="font-semibold text-primary my-2">Rs. 2,500/- 60 Mins</p>
          <p className="font-semibold text-primary my-2">Rs. 3,500/- 90 Mins</p>
          <div className="mt-5">
            <a
              href="#appointment"
              className="text-sm w-[10rem] btn  btn-primary mt-5 text-white flex items-center font-semibold "
            >
              Book Now <FaLongArrowAltRight className="ml-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="lg:flex flex-row-reverse items-center gap-16 my-[5rem]">
        <img src={img4} alt="" className="mb-5 lg:mb-0 rounded" />
        <div className="px-4">
          <h3 className="text-3xl font-bold text-primary">
            Body Polish-Lemon Grass Salt Glow
          </h3>
          <p className="text-secondary my-4">
            Our expert therapists will use a blend of lemon grass and salt to
            gently exfoliate and remove dead skin cells, revealing brighter,
            more radiant skin. The natural antioxidants and anti-inflammatory
            properties of lemon grass work to nourish and hydrate your skin,
            leaving it feeling refreshed and rejuvenated. Book your appointment
            today by contacting us. We can't wait to help you achieve smooth,
            revitalized skin.
          </p>
          <p className="font-bold text-xl text-primary mb-3">Pricing:</p>
          <p className="font-semibold text-primary my-2">Rs. 3,000/- 60 Mins</p>
          {/* <p className="font-semibold text-primary my-2">Rs. 3,500/- 90 Mins</p> */}
          <div className="mt-5">
            <a
              href="#appointment"
              className="text-sm w-[10rem] btn  btn-primary mt-5 text-white flex items-center font-semibold "
            >
              Book Now <FaLongArrowAltRight className="ml-4" />
            </a>
          </div>
        </div>
      </div>
      <div className="lg:flex  items-center gap-16 my-[5rem]">
        <img src={img1} alt="" className="mb-5 lg:mb-0 rounded" />
        <div className="px-4">
          <h3 className="text-3xl font-bold text-primary">
            Body Polish – Raw Brown Sugar & Coffee
          </h3>
          <p className="text-secondary my-4">
            At Crown Spa & Salon, we know that a little pick-me-up can go a long
            way. That's why we're proud to offer our Raw Brown Sugar & Coffee
            Body Polish, a luxurious treatment designed to invigorate and awaken
            your skin. We can't wait to help you reveal the best version of your
            skin.
          </p>
          <p className="font-bold text-xl text-primary mb-3">Pricing:</p>
          <p className="font-semibold text-primary my-2">Rs. 3,000/- 60 Mins</p>
          {/* <p className="font-semibold text-primary my-2">Rs. 3,500/- 90 Mins</p> */}
          <div className="mt-5">
            <a
              href="#appointment"
              className="text-sm w-[10rem] btn  btn-primary mt-5 text-white flex items-center font-semibold "
            >
              Book Now <FaLongArrowAltRight className="ml-4" />
            </a>
          </div>
        </div>
      </div>
      <div>
        <TherapiCard />
      </div>
      <div className="lg:flex  items-center gap-16 my-[5rem]">
        <img src={img2} alt="" className="mb-5 lg:mb-0 rounded" />
        <div className="px-4">
          <h3 className="text-3xl font-bold text-primary">
            Foot Reflexology | Zone Therapy
          </h3>
          <p className="text-secondary my-4">
            At Crown Spa & Salon, we believe that taking care of your body
            should be a top priority. That's why we offer our Foot Reflexology
            treatment, a unique therapy designed to soothe and refresh your mind
            and body.
          </p>
          <p className="font-bold text-xl text-primary mb-3">Pricing:</p>
          <p className="font-semibold text-primary my-2">Rs. 1,100/- 30 Mins</p>
          <p className="font-semibold text-primary my-2">
            Rs. 1,900/- 60 Mins{" "}
          </p>
          <p className="font-semibold text-primary my-2">Rs. 2,200/- 90 Mins</p>
          <div className="mt-5">
            <a
              href="#appointment"
              className="text-sm w-[10rem] btn  btn-primary mt-5 text-white flex items-center font-semibold "
            >
              Book Now <FaLongArrowAltRight className="ml-4" />
            </a>
          </div>
        </div>
      </div>
      <div className="lg:flex flex-row-reverse items-center gap-16 my-[5rem]">
        <img src={img3} alt="" className="mb-5 lg:mb-0 rounded" />
        <div className="px-4">
          <h3 className="text-3xl font-bold text-primary">
            Foot Reflexology | Zone Therapy
          </h3>
          <p className="text-secondary my-4">
            At Crown Spa & Salon, we believe that taking care of your body
            should be a top priority. That's why we offer our Foot Reflexology
            treatment, a unique therapy designed to soothe and refresh your mind
            and body.
          </p>
          <p className="font-bold text-xl text-primary mb-3">Pricing:</p>
          <p className="font-semibold text-primary my-2">Rs. 1,100/- 30 Mins</p>
          <p className="font-semibold text-primary my-2">
            Rs. 1,900/- 60 Mins{" "}
          </p>
          <p className="font-semibold text-primary my-2">Rs. 2,200/- 90 Mins</p>
          <div className="mt-5">
            <a
              href="#appointment"
              className="text-sm w-[10rem] btn  btn-primary mt-5 text-white flex items-center font-semibold "
            >
              Book Now <FaLongArrowAltRight className="ml-4" />
            </a>
          </div>
        </div>
      </div>
      <div className="lg:flex items-center gap-16 my-[5rem]">
        <img src={img4} alt="" className="mb-5 lg:mb-0 rounded" />
        <div className="px-4">
          <h3 className="text-3xl font-bold text-primary">
            Specific Therapy (Shoulder, Neck & Back Head, Neck & Shoulder)
          </h3>
          <p className="text-secondary my-4">
            Ancient inception healing relieves sore muscles, stimulates
            circulation as well as increases energy flow. Massages relaxes the
            scalps well as the neck & shoulder area while increasing supply of
            oxygen to the brain to eliminate mental exhaustion.
          </p>
          <p className="font-bold text-xl text-primary mb-3">Pricing:</p>
          <p className="font-semibold text-primary my-2">Rs. 1,050/- 30 Mins</p>
          <p className="font-semibold text-primary my-2">
            Rs. 1,900/- 60 Mins{" "}
          </p>

          <div className="mt-5">
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

export default MessageCenter;
