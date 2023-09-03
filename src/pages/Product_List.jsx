import React, { useState } from "react";
import axios from "axios";
import { Space, TimePicker } from "antd";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

const Product_List = () => {
  const onChange = (time, timeString) => {
    console.log(time, timeString);
  };

  //------------------------  video upload------------------- //

  const [file, setFile] = useState(null);

  const handleUpload = () => {
    const formData = new FormData();
    formData.append("video", file);

    axios
      .post("http://localhost:5000/compress", formData, {
        responseType: "blob",
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error uploading video:", error);
      });
  };

  return (
    <>
      <div className="w-full px-[180px] pt-[60px] pb-[200px] bg-white flex-col justify-start items-start gap-2.5 inline-flex font-Roboto">
        <div className="justify-start items-start gap-[180px] inline-flex">
          <div className="flex-col justify-start items-start gap-[38px] inline-flex">
            <div className="self-stretch text-gray-800 text-lg font-normal">
              Product details
            </div>
            {/* ------------------ data entry ------------------------------- */}

            <div className="flex-col justify-start items-start gap-4 flex">
              {/* --------------------------- Business name  ------------------  */}

              <div className="w-80  px-2.5 bg-white rounded-[5px] border border-neutral-800 border-opacity-50 flex-col justify-start items-start gap-2.5 flex">
                <input
                  className="self-stretch py-2 focus:outline-none  text-[#212121] text-[15px] font-normal"
                  placeholder="Brand name"
                />
              </div>

              {/* --------------------------- Product name ------------------  */}

              <div className="w-80  px-2.5 bg-white rounded-[5px] border border-neutral-800 border-opacity-50 flex-col justify-start items-start gap-2.5 flex">
                <input
                  className="self-stretch py-2 focus:outline-none  text-[#212121] text-[15px] font-normal"
                  placeholder="Product name"
                />
              </div>

              {/* --------------------------- Main category ------------------  */}

              <div className="w-80  px-2.5 bg-white rounded-[5px] border border-neutral-800 border-opacity-50 flex-col justify-start items-start gap-2.5 flex">
                <select
                  className="self-stretch py-2 focus:outline-none  text-[#212121] text-[15px] font-normal items-start justify-center gap-[10px]"
                  required
                  name="gender"
                  //   onChange={handleChange}
                >
                  <option className="text-[#848688]" value={"formData.gender"}>
                    {<>Select category</>}
                  </option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Others">Others</option>
                </select>
              </div>

              {/* --------------------------- sub category ------------------  */}

              <div className="w-80  px-2.5 bg-white rounded-[5px] border border-neutral-800 border-opacity-50 flex-col justify-start items-start gap-2.5 flex">
                <select
                  className="self-stretch py-2 focus:outline-none  text-[#212121] text-[15px] font-normal items-start justify-center gap-[10px]"
                  required
                  name="gender"
                  //   onChange={handleChange}
                >
                  <option className="text-[#848688]" value={"formData.gender"}>
                    {<>Select sub-category</>}
                  </option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Others">Others</option>
                </select>
              </div>

              {/* --------------------------- Product type ------------------  */}

              <div className="w-80  px-2.5 bg-white rounded-[5px] border border-neutral-800 border-opacity-50 flex-col justify-start items-start gap-2.5 flex">
                <select
                  className="self-stretch py-2 focus:outline-none  text-[#212121] text-[15px] font-normal items-start justify-center gap-[10px]"
                  required
                  name="gender"
                  //   onChange={handleChange}
                >
                  <option className="text-[#848688]" value={"formData.gender"}>
                    {<>Product Type</>}
                  </option>
                  <option value="In-store">In-store</option>
                  <option value="Online">Online Store</option>
                </select>
              </div>

              {/* --------------------------- price ------------------  */}

              <div className="w-80  px-2.5 bg-white rounded-[5px] border border-neutral-800 border-opacity-50 flex-col justify-start items-start gap-2.5 flex">
                <select
                  className="self-stretch py-2 focus:outline-none  text-[#212121] text-[15px] font-normal items-start justify-center gap-[10px]"
                  required
                  name="gender"
                  //   onChange={handleChange}
                >
                  <option className="text-[#848688]" value={"formData.gender"}>
                    {<>Select price range</>}
                  </option>
                  <option value="₹">₹</option>
                  <option value="₹₹">₹₹</option>
                  <option value="₹₹₹">₹₹₹</option>
                  <option value="₹₹₹₹">₹₹₹₹</option>
                  <option value="₹₹₹₹₹">₹₹₹₹₹</option>
                </select>
              </div>

              {/* --------------------------- Product Details ------------------  */}

              <div className="w-80 px-2.5 bg-white rounded-[5px] border border-neutral-800 border-opacity-50 flex-col justify-start items-start gap-2.5 flex">
                <textarea
                  rows="4"
                  className="self-stretch py-2  focus:outline-none  text-[#212121] text-[15px] font-normal"
                  placeholder="Product details"
                />
              </div>

              {/* --------------------------- Address How to get there ------------------  */}

              <div className="w-80 px-2.5 bg-white rounded-[5px] border border-neutral-800 border-opacity-50 flex-col justify-start items-start gap-2.5 flex">
                <textarea
                  rows="4"
                  className="self-stretch py-2  focus:outline-none  text-[#212121] text-[15px] font-normal"
                  placeholder="How to get there guide / address "
                />
              </div>

              {/* /----------------------- time ---------------------------- */}

              <div className="w-80  rounded-[7px] border border-neutral-800 border-opacity-50 flex-col justify-start items-start gap-2.5 flex">
                <Space wrap>
                  <TimePicker.RangePicker
                    placeholder={["Opening Time", "Closing Time"]}
                    bordered={false}
                    changeOnBlur={true}
                    className="w-80  py-2 text-[#212121] text-[15px] font-normal"
                    use12Hours
                    format="h:mm a"
                    onChange={onChange}
                  />
                </Space>
              </div>

              {/* --------------------------- Close days ------------------  */}

              <div className="w-80  px-2.5 bg-white rounded-[5px] border border-neutral-800 border-opacity-50 flex-col justify-start items-start gap-2.5 flex">
                <select
                  className="self-stretch py-2 focus:outline-none  text-[#212121] text-[15px] font-normal items-start justify-center gap-[10px]"
                  required
                  name="gender"
                  //   onChange={handleChange}
                >
                  <option className="text-[#848688]" value={"formData.gender"}>
                    {<>Select store closed days</>}
                  </option>
                  <option value="Monday closed">Monday closed</option>
                  <option value="Tuesday closed">Tuesday closed</option>
                  <option value="Wednesday closed">Wednesday closed</option>
                  <option value="Thursday closed">Thursday closed</option>
                  <option value="Friday closed">Friday closed</option>
                  <option value="Saturday closed">Saturday closed</option>
                  <option value="Sunday closed">Sunday closed</option>
                </select>
              </div>

              {/* --------------------------- Phone number ------------------  */}

              <div className="w-80  px-2.5 bg-white rounded-[5px] border border-neutral-800 border-opacity-50 flex-col justify-start items-start gap-2.5 flex">
                <PhoneInput
                  className="border-none placeholder-[#848688] font-light font-roboto text-[18px] bg-white self-stretch flex-1 rounded-[5px] flex flex-row py-2 items-center justify-start"
                  placeholder="Store phone number"
                  numberInputProps={{ className: "focus:outline-none" }}
                  defaultCountry="IN"
                  //   value={phone}
                  //   onChange={setPhone}
                  rules={{ required: true }}
                  limitMaxLength
                />
              </div>

              {/* --------------------------- Latitude ------------------  */}

              <div className="w-80  px-2.5 bg-white rounded-[5px] border border-neutral-800 border-opacity-50 flex-col justify-start items-start gap-2.5 flex">
                <input
                  className="self-stretch py-2 focus:outline-none  text-[#212121] text-[15px] font-normal"
                  placeholder="Latitude"
                />
              </div>

              {/* --------------------------- Longitude ------------------  */}

              <div className="w-80  px-2.5 bg-white rounded-[5px] border border-neutral-800 border-opacity-50 flex-col justify-start items-start gap-2.5 flex">
                <input
                  className="self-stretch py-2 focus:outline-none  text-[#212121] text-[15px] font-normal"
                  placeholder="Longitude"
                />
              </div>

              {/* --------------------------- Website ------------------  */}

              <div className="w-80  px-2.5 bg-white rounded-[5px] border border-neutral-800 border-opacity-50 flex-col justify-start items-start gap-2.5 flex">
                <input
                  className="self-stretch py-2 focus:outline-none  text-[#212121] text-[15px] font-normal"
                  placeholder="Website"
                />
              </div>

              {/* --------------------------- Google iframe ------------------  */}

              <div className="w-80  px-2.5 bg-white rounded-[5px] border border-neutral-800 border-opacity-50 flex-col justify-start items-start gap-2.5 flex">
                <input
                  className="self-stretch py-2 focus:outline-none  text-[#212121] text-[15px] font-normal"
                  placeholder="Google maps iframe code"
                />
              </div>
            </div>
          </div>

          {/* ------------------ Image and video entry ------------------------------- */}

          <div className="flex-col justify-center items-start gap-[79px] inline-flex">
            <div className="flex-col justify-start items-start gap-10 flex">
              <div className="w-[185.64px] h-[43px] text-gray-800 text-lg font-normal">
                Image & video
              </div>
              <div className="flex-col justify-start items-start gap-[30px] flex">
                {/* ------------------------ image upload ------------------- */}

                <div className="self-stretch justify-start items-center gap-5 inline-flex">
                  <div className="text-black text-lg font-normal">
                    Images Upload :
                  </div>
                  <input
                    type="file"
                    accept="image/*"
                    multiple="multiple"
                    // onChange={(e) => handleDrop(e.target.files)}
                  />
                </div>

                {/* ------------------- video upload --------------- */}
                <div className="self-stretch justify-between items-center gap-[30px] inline-flex">
                  <div className="text-black text-lg font-normal">
                    Video Upload :
                  </div>
                  <input
                    type="file"
                    accept="video/*"
                    // onChange={(e) => handleDrop(e.target.files)}
                  />
                </div>
              </div>
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
    </>
  );
};

export default Product_List;
