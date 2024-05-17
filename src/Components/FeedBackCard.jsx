import React from "react";
import { quotes } from "../assets";
import { feedbacks } from "../util/const";

const FeedBackCard = ({ content, idx, name, title }) => {
  return (
    <div className={`flex  justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr mr-0  my-5 cursor-pointer feedback-card ${idx !== feedbacks.length -1  ? ' md:mr-0 sm:mr-0 mr mr-0  my-0 ' : ' md:mr-10 sm:mr-5 mr mr-0  my-5 '} `}>
      <img
        src={quotes}
        alt="quotes"
        className="w-[42px] h-[72px] object-contain "
      />
      <p className="font-montserrat font-normal text-[18px] leading-[32px] text-white my-10">
        {content}
      </p>

      <div className="flex flex-row ">
        <div className="w-[50px] h-[50px] flex justify-center items-center bg-slate-400 rounded-full sm:mx-[10px] ml-[2px] text-[22px] bg-dark-gradient ">
          <p className="text-gradient font-semibold font-montserrat">
            {name
              .split( ' ' )
              .map(c=>c[0])
              .join(".")
              .toUpperCase()}
          </p>
        </div>
        <div className="flex flex-col ">
          <h4 className="font-montserrat font-semibold text-[20px] leading-[32p] text-white ">
            {name}
          </h4>
          <p className="font-montserrat font-normal leading-[24px] text-lightWhite  ">
            {title}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeedBackCard;
