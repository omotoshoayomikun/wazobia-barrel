import React from "react";
import styles from "./Hero.module.css";
import {
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaTwitter,
  FaPhone,
} from "react-icons/fa6";
import { CiMail } from "react-icons/ci";
import { GoMail } from "react-icons/go";
function Hero() {
  const handleClick = () => {};

  return (
    <section className={`side-padding ${styles.hero_section}`}>
      {/* <div className={`${styles.fade_background}`}></div> */}
      <div className={`${styles.hero_container} gap-2`}>
        <div className="flex-1">
          <img src="/images/barrel1.png" className={`${styles.hero_image}`} />
        </div>
        <div className={` flex-[2]`}>
          <h1 className="flex mb-10 items-center justify-center text-center sm:leading-10 leading-[4px] w-full">
            <div className="flex items-center">
              <span className="text-green-900 lg:text-[6rem] md:text-[5.3rem] text-[3rem] font-bold">
                9
              </span>
              <span className="lg:text-[8.9rem] md:text-[7.3rem] text-[4rem] font-bold">
                J
              </span>
              <span className="text-green-900 lg:text-[6rem] md:text-[5.3rem] text-[3rem] font-bold">
                A
              </span>
            </div>
            <div className="md:text-[38px] font-bold">Barrels</div>
          </h1>

          <h1 className="text-center lg:text-[25px]">
            All you can shop inside barrel to Lagos{" "}
          </h1>
          <a href="tel:5625284851">
            <h1 className="head_text text-center flex justify-center items-center gap-2">
              <FaPhone />
              5625284851
            </h1>
          </a>
          {/* <Btn text="Contact me" handleClick={handleClick} /> */}
        </div>
        {/* <div className="flex gap-10 wrap">
          <a href=" https://www.instagram.com/olumighty_gfx?igsh=MWFnOTJjaXFlMjRnMQ==" target="_blank">
            <FaInstagram className={`${styles.icon_item}`} />
          </a>
          <a href="https://www.facebook.com/Olumigty22" target="_blank">
            <FaFacebook className={`${styles.icon_item}`} />
          </a>
          <a href="https://youtu.be/HZXbl8IU_Lc" target="_blank">
            <FaYoutube className={`${styles.icon_item}`} />
          </a>
          <a href="" target="_blank">
            <FaTwitter className={`${styles.icon_item}`} />
          </a>
          <a href="mailto:korodeopeyemisunday@gmail.com">
          <GoMail  className={`${styles.icon_item}`} />
          </a>
        </div> */}
      </div>
    </section>
  );
}

export default Hero;
