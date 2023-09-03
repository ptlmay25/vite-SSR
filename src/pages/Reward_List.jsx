import React from "react";

const Reward_List = () => {
  return (
    <>
      <div className="w-full px-[180px] pt-[60px] pb-[200px] bg-white flex-col justify-start items-start gap-2.5 inline-flex">
        <div className="self-stretch h-[499px] flex-col justify-center items-start gap-[25px] flex">
          <div className="self-stretch justify-start items-start gap-[120px] inline-flex">
            <div className="grow shrink basis-0 flex-col justify-start items-start gap-[18px] inline-flex">
              <div className="self-stretch h-[43px] text-gray-800 text-lg font-normal">
                Reward name
              </div>
              {/* --------------------------- Reward name  ------------------  */}

              <div className="w-80  px-2.5 bg-white rounded-[5px] border border-neutral-800 border-opacity-50 flex-col justify-start items-start gap-2.5 flex">
                <input
                  className="self-stretch py-2 focus:outline-none  text-[#212121] text-[15px] font-normal"
                  placeholder="Reward name"
                />
              </div>

              {/* --------------------------- Reward Category  ------------------  */}

              <div className="w-80  px-2.5 bg-white rounded-[5px] border border-neutral-800 border-opacity-50 flex-col justify-start items-start gap-2.5 flex">
                <select
                  className="self-stretch py-2 focus:outline-none  text-[#212121] text-[15px] font-normal items-start justify-center gap-[10px]"
                  required
                  name="gender"
                  //   onChange={handleChange}
                >
                  <option className="text-[#848688]" value={"formData.gender"}>
                    {<>Select Business category</>}
                  </option>
                  <option value="Food">Food</option>
                  <option value="Travel">Travel</option>
                  <option value="Others">Others</option>
                </select>
              </div>

              {/* --------------------------- Image ------------------  */}

              <div className="self-stretch justify-start items-center gap-5 inline-flex">
                <div className="text-black text-lg font-normal">
                  Reward Img:
                </div>
                <input
                  type="file"
                  accept="image/*"
                  multiple="multiple"
                  // onChange={(e) => handleDrop(e.target.files)}
                />
              </div>

              {/* --------------------------- Min qty ------------------  */}

              <div className="w-80  px-2.5 bg-white rounded-[5px] border border-neutral-800 border-opacity-50 flex-col justify-start items-start gap-2.5 flex">
                <input
                  className="self-stretch py-2 focus:outline-none  text-[#212121] text-[15px] font-normal"
                  placeholder="Minimum Qty"
                />
              </div>

              {/* --------------------------- Address ------------------  */}

              <div className="w-80  px-2.5 bg-white rounded-[5px] border border-neutral-800 border-opacity-50 flex-col justify-start items-start gap-2.5 flex">
                <input
                  className="self-stretch py-2 focus:outline-none  text-[#212121] text-[15px] font-normal"
                  placeholder="Redeem location address"
                />
              </div>

              {/* --------------------------- Google map link ------------------  */}

              <div className="w-80  px-2.5 bg-white rounded-[5px] border border-neutral-800 border-opacity-50 flex-col justify-start items-start gap-2.5 flex">
                <input
                  className="self-stretch py-2 focus:outline-none  text-[#212121] text-[15px] font-normal"
                  placeholder="Google map link"
                />
              </div>

              {/* --------------- submit button -------------------- */}
              <div className="pt-[40px] flex-col justify-center items-start gap-2.5 flex">
                <button className="w-[340px] py-3 left-0 top-0  bg-green-700 rounded-[5px]">
                  <p className="w-[340px] text-center text-white text-base font-medium">
                    Add / Update
                  </p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reward_List;
