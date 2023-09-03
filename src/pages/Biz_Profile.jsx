import React from "react";
import { Space, TimePicker } from "antd";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

const Biz_Profile = () => {
  const onChange = (time, timeString) => {
    console.log(time, timeString);
  };
  return (
    <>
      <div className="w-full px-[180px] pt-[60px] pb-[200px] bg-white flex-col justify-start items-start gap-2.5 inline-flex font-Roboto">
        <div className="self-stretch  flex-col justify-center items-start gap-[25px] flex">
          <div className="self-stretch justify-start items-start gap-[120px] inline-flex">
            {/* --------------------------- business profile data -------------------------- */}

            <div className="self-stretch flex-col justify-start items-start gap-[18px] inline-flex">
              <div className="w-[185.64px] h-[43px] text-gray-800 text-lg font-normal">
                Business profile
              </div>
              {/* --------------------------- Business name  ------------------  */}

              <div className="w-80  px-2.5 bg-white rounded-[5px] border border-neutral-800 border-opacity-50 flex-col justify-start items-start gap-2.5 flex">
                <input
                  className="self-stretch py-2 focus:outline-none  text-[#212121] text-[15px] font-normal"
                  placeholder="Brand name"
                />
              </div>

              {/* --------------------------- Business logo  ------------------  */}

              <div className="self-stretch justify-start items-center gap-5 inline-flex">
                <div className="text-black text-lg font-normal">Logo:</div>
                <input
                  type="file"
                  accept="image/*"
                  multiple="multiple"
                  // onChange={(e) => handleDrop(e.target.files)}
                />
              </div>

              {/* /----------------------- time ---------------------------- */}

              <div className="w-80  rounded-[7px] border border-neutral-800 border-opacity-50 flex-col justify-start items-start gap-2.5 flex">
                <Space wrap>
                  <TimePicker.RangePicker
                    placeholder={["Openning Time", "Closing Time"]}
                    bordered={false}
                    changeOnBlur={true}
                    className="w-80  py-2 text-[#212121] text-[15px] font-normal"
                    use12Hours
                    format="h:mm a"
                    onChange={onChange}
                  />
                </Space>
              </div>

              {/* --------------------------- Business category ------------------  */}

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

              {/* --------------------------- Phone number  ------------------  */}

              <div className="w-80  px-2.5 bg-white rounded-[5px] border border-neutral-800 border-opacity-50 flex-col justify-start items-start gap-2.5 flex">
                <PhoneInput
                  className="border-none placeholder-[#848688] font-light font-roboto text-[18px] bg-white self-stretch flex-1 rounded-[5px] flex flex-row py-2 items-center justify-start"
                  placeholder="Phone number"
                  numberInputProps={{ className: "focus:outline-none" }}
                  defaultCountry="IN"
                  //   value={phone}
                  //   onChange={setPhone}
                  rules={{ required: true }}
                  limitMaxLength
                />
              </div>

              {/* --------------------------- Address  ------------------  */}

              <div className="w-80  px-2.5 bg-white rounded-[5px] border border-neutral-800 border-opacity-50 flex-col justify-start items-start gap-2.5 flex">
                <input
                  className="self-stretch py-2 focus:outline-none  text-[#212121] text-[15px] font-normal"
                  placeholder="Adress"
                />
              </div>

              {/* --------------------------- city  ------------------  */}

              <div className="w-80  px-2.5 bg-white rounded-[5px] border border-neutral-800 border-opacity-50 flex-col justify-start items-start gap-2.5 flex">
                <input
                  className="self-stretch py-2 focus:outline-none  text-[#212121] text-[15px] font-normal"
                  placeholder="City"
                />
              </div>

              {/* --------------------------- zipcode  ------------------  */}

              <div className="w-80  px-2.5 bg-white rounded-[5px] border border-neutral-800 border-opacity-50 flex-col justify-start items-start gap-2.5 flex">
                <input
                  className="self-stretch py-2 focus:outline-none  text-[#212121] text-[15px] font-normal"
                  placeholder="Zip code / pin code"
                />
              </div>

              {/* --------------------------- State  ------------------  */}

              <div className="w-80  px-2.5 bg-white rounded-[5px] border border-neutral-800 border-opacity-50 flex-col justify-start items-start gap-2.5 flex">
                <input
                  className="self-stretch py-2 focus:outline-none  text-[#212121] text-[15px] font-normal"
                  placeholder="State"
                />
              </div>

              {/* --------------------------- Country  ------------------  */}

              <div className="w-80  px-2.5 bg-white rounded-[5px] border border-neutral-800 border-opacity-50 flex-col justify-start items-start gap-2.5 flex">
                <input
                  className="self-stretch py-2 focus:outline-none  text-[#212121] text-[15px] font-normal"
                  placeholder="Country"
                />
              </div>
              {/* --------------------------- Latitude  ------------------  */}

              <div className="w-80  px-2.5 bg-white rounded-[5px] border border-neutral-800 border-opacity-50 flex-col justify-start items-start gap-2.5 flex">
                <input
                  className="self-stretch py-2 focus:outline-none  text-[#212121] text-[15px] font-normal"
                  placeholder="Latitude"
                />
              </div>

              {/* --------------------------- Longitude  ------------------  */}

              <div className="w-80  px-2.5 bg-white rounded-[5px] border border-neutral-800 border-opacity-50 flex-col justify-start items-start gap-2.5 flex">
                <input
                  className="self-stretch py-2 focus:outline-none  text-[#212121] text-[15px] font-normal"
                  placeholder="Longitude"
                />
              </div>

              {/* --------------------------- Google map link  ------------------  */}

              <div className="w-80  px-2.5 bg-white rounded-[5px] border border-neutral-800 border-opacity-50 flex-col justify-start items-start gap-2.5 flex">
                <input
                  className="self-stretch py-2 focus:outline-none  text-[#212121] text-[15px] font-normal"
                  placeholder="Google map link"
                />
              </div>
            </div>

            {/* --------------------------- Contact details -------------------------- */}

            <div className="flex-col justify-start items-start gap-[18px] inline-flex">
              <div className="w-[185.64px] h-[43px] text-gray-800 text-lg font-normal">
                Contact details{" "}
              </div>
              {/* --------------------------- user name  ------------------  */}

              <div className="w-80  px-2.5 bg-white rounded-[5px] border border-neutral-800 border-opacity-50 flex-col justify-start items-start gap-2.5 flex">
                <input
                  className="self-stretch py-2 focus:outline-none  text-[#212121] text-[15px] font-normal"
                  placeholder="Brand name"
                />
              </div>

              {/* --------------------------- Phone number  ------------------  */}

              <div className="w-80  px-2.5 bg-white rounded-[5px] border border-neutral-800 border-opacity-50 flex-col justify-start items-start gap-2.5 flex">
                <PhoneInput
                  className="border-none placeholder-[#848688] font-light font-roboto text-[18px] bg-white self-stretch flex-1 rounded-[5px] flex flex-row py-2 items-center justify-start"
                  placeholder="Phone number"
                  numberInputProps={{ className: "focus:outline-none" }}
                  defaultCountry="IN"
                  //   value={phone}
                  //   onChange={setPhone}
                  rules={{ required: true }}
                  limitMaxLength
                />
              </div>

              {/* --------------------------- Email  ------------------  */}

              <div className="w-80  px-2.5 bg-white rounded-[5px] border border-neutral-800 border-opacity-50 flex-col justify-start items-start gap-2.5 flex">
                <input
                  className="self-stretch py-2 focus:outline-none  text-[#212121] text-[15px] font-normal"
                  placeholder="Email"
                />
              </div>

              {/* --------------------------- Job title  ------------------  */}

              <div className="w-80  px-2.5 bg-white rounded-[5px] border border-neutral-800 border-opacity-50 flex-col justify-start items-start gap-2.5 flex">
                <input
                  className="self-stretch py-2 focus:outline-none  text-[#212121] text-[15px] font-normal"
                  placeholder="Job title"
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

export default Biz_Profile;
