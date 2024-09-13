import React from "react";

function Ship() {
  return (
    <>
      <div className="side-padding mt-[-40px] py-6 pb-2 fade_top_image bg-repeat-x bg-top">
        <h1 className="head_text text-center">How to Ship Barrels</h1>
        <ul className="">
            <li className="sm:text-[33px] text-[20px]">1. Load Items inside Barrel and lock it</li>
            <li className="sm:text-[33px] text-[20px]">2. Deliver Barrel to our shopping yard</li>
            <li className="sm:text-[33px] text-[20px]">3. Sign the shipping papers</li>
            <li className="sm:text-[33px] text-[20px]">4. Tracking numbers will be forwarded to customers</li>
            <li className="sm:text-[33px] text-[20px]">5. Our Agent will notify customer a week before shipment arrive Nigeria port on how to pick up barrel(s)</li>
        </ul>
      </div>
    </>
  );
}

export default Ship;
