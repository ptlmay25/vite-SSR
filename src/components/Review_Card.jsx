import React from "react";

const Review_Card = () => {
  return (
    <div className="self-stretch border-b py-10 px-6 flex-col justify-center items-center gap-6 flex font-roboto">
      <div className="self-stretch  flex-col justify-start items-center gap-6 flex">
        <div className="self-stretch justify-start items-center gap-3 inline-flex">
          <img
            className="w-[50px] h-[50px] bg-stone-300 rounded-full"
            src="/profile_img.svg"
          />
          <div className="grow shrink basis-0 flex-col justify-center items-start inline-flex">
            <div className="self-stretch text-neutral-800 text-base font-normal tracking-wide">
              Name
            </div>
            <div className="self-stretch text-neutral-600 text-[13px] font-regular tracking-wide">
              25/12/20023
            </div>
          </div>
        </div>
        <div className="self-stretch text-neutral-800 text-sm font-light leading-snug tracking-wide">
          Definitely the fanciest restaurant on the island. A very
          Michelin-esque vibe. The food is good as are the drinks, albeit a
          little overpriced.
          <br />
          <br />
          It's a greta fancy spot if you're looking for one during your
          vacation, however I didn't feel the quality of the food necessitated
          the prices.
        </div>
      </div>
    </div>
  );
};

export default Review_Card;
