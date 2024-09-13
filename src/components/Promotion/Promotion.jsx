import React from "react";
import styles from "./Promotion.module.css";
function Promotion() {
  return (
    <>
      <div className="side-padding  my-4">
        <h1 className="head_text text-center">Special Promotion</h1>
        <div className="flex flex-row sm:gap-10 gap-2">
          <div  className={`flex-1 flex lg:flex-row flex-col items-center gap-5 rounded-[2rem]  ${styles.shadow_box} sm:p-4 p-2`}>
            <div className="">
              <img src="/images/barrel1.png" alt="" className="w-[100px] h-[150px] sm:w-[150px] sm:h-[250px]"/>
            </div>
            <div className="">
              <h2 className="sm:text-[20px] text-[16px]">One Barrel</h2>
              <i className="sm:text-[50px] text-[30px] leading-10 font-bold text-green-900">$199</i>
            </div>
          </div>
          <div
            className={`flex-[1.5] items-center gap-5 flex lg:flex-row flex-col rounded-[2rem]  ${styles.shadow_box} sm:p-4 p-2`}
          >
            <div className="flex">
              <img src="/images/barrel1.png" alt="" className="w-[100px] h-[150px] sm:w-[150px] sm:h-[250px] sm:object-[initial] object-contain sm:mr-3 mr-2"/>
              <img src="/images/barrel1.png" alt="" className="w-[100px] h-[150px] sm:w-[150px] sm:h-[250px] sm:object-[initial] object-contain"/>
            </div>
            <div className="">
              <h2 className="sm:text-[20px] text-[16px]">Two Barrels</h2>
              <i className="sm:text-[50px] text-[30px] leading-10 font-bold text-green-900">$389</i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Promotion;
