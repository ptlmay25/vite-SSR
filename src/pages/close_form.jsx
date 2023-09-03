import React, { useState } from "react";
import { useCallback } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Confirmation_Pop from "./Confirmation_Pop";

const CloseForm = () => {
  const [closeForm, setCloseForm] = useState({
    name: "",
    phone: "",
    email: "",
    accId: "",
  });

  const [showConfirmation, setShowConfirmation] = useState(false);

  const navigate = useNavigate();

  //-------------------------------------------------handle submit------------------------------------------
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  //-------------------------------------------------handle click------------------------------------------

  const handleClick = () => {
    if (
      closeForm.name != "" &&
      closeForm.phone != "" &&
      closeForm.accId != "" &&
      closeForm.email != ""
    ) {
      setShowConfirmation(true);
    }
  };

  //-------------------------------------------------handle confirm------------------------------------------

  const handleConfirm = async () => {
    const { data, error } = await supabaseUser
      .from("user_profile_delete_request")
      .insert({
        name: closeForm.name,
        phone: closeForm.phone,
        email: closeForm.email,
        account_id: closeForm.accId,
      })
      .select();
    if (data) {
      toast.error(
        "your account and your data will be permanently deleted after 90 days"
      );
      setShowConfirmation(false);
      setTimeout(() => {
        setCloseForm({
          name: "",
          phone: "",
          email: "",
          accId: "",
        });
      }, 100);
      // console.log(data);
    } else {
      // toast.error(error.message);
      console.log(error);
    }
  };
  //-------------------------------------------------handle cancel------------------------------------------

  const handleCancel = () => {
    setShowConfirmation(false);
  };

  const onLogoClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  //-------------------------------------------------handle change------------------------------------------
  function handleChange(e) {
    const { name, value } = e.target;
    setCloseForm((prev) => {
      return { ...prev, [name]: value };
    });
  }

  return (
    <div className="relative bg-white w-full overflow-hidden flex flex-col px-0 box-border items-center justify-center text-left text-gray-100 font-roboto">
      <div className="self-stretch cursor-pointer bg-white h-[70px] flex flex-row py-3.5 px-[42px] box-border items-center justify-between">
        <img
          className="relative w-[120.88px] h-9 overflow-hidden shrink-0"
          alt=""
          src="/logo_w.svg"
          onClick={onLogoClick}
        />
        <a
          href="mailto:support@myclub100.com"
          target="_blank"
          className="cursor-pointer py-0 px-2.5 bg-white self-stretch rounded-xs8 box-border w-[140px] hover:text-white text-[#212121] flex flex-row items-center justify-start gap-[10px] border-[1px] border-solid hover:bg-[#4A93FF] border-[#212121]"
        >
          <div className="flex-1 relative text-lg font-regular font-roboto text-center flex items-center justify-center h-6">
            Contact Us
          </div>
        </a>
      </div>
      <div className="self-stretch pt-[80px] pb-[140px] flex-col justify-center items-center gap-20 inline-flex">
        <div className="self-stretch text-center text-neutral-800 text-[32px] font-normal">
          Request for Account closure
        </div>
        <div className="self-stretch  flex-col justify-center items-center gap-6 flex">
          <form onSubmit={handleSubmit}>
            <div className="justify-center items-center gap-10 inline-flex">
              <div className="flex-col justify-center items-center gap-6 inline-flex">
                <div className="flex-col justify-start items-start flex">
                  <div className="self-stretch h-[42px] text-neutral-800 text-base font-normal">
                    Name:
                  </div>
                  <input
                    required
                    type="text"
                    name="name"
                    onChange={handleChange}
                    value={closeForm.name}
                    className="w-[360px] h-[42px] bg-white text-[#212121] text-base px-5 rounded-[5px] border border-neutral-500"
                  />
                </div>
                <div className="flex-col justify-start items-start flex">
                  <div className="self-stretch h-[42px] text-neutral-800 text-base font-normal">
                    Email :
                  </div>
                  <input
                    required
                    type="email"
                    name="email"
                    onChange={handleChange}
                    value={closeForm.email}
                    className="w-[360px] h-[42px] bg-white text-[#212121] text-base px-5 rounded-[5px] border border-neutral-500"
                  />
                </div>
              </div>
              <div className="flex-col justify-center items-center gap-6 inline-flex">
                <div className="flex-col justify-start items-start flex">
                  <div className="self-stretch h-[42px] text-neutral-800 text-base font-normal">
                    Phone :
                  </div>
                  <input
                    required
                    type="tel"
                    name="phone"
                    onChange={handleChange}
                    value={closeForm.phone}
                    className="w-[360px] h-[42px] bg-white text-[#212121] text-base px-5 rounded-[5px] border border-neutral-500"
                  />
                </div>
                <div className="flex-col justify-start items-start flex">
                  <div className="self-stretch h-[42px] text-neutral-800 text-base font-normal">
                    Account ID:
                  </div>
                  <input
                    required
                    type="text"
                    name="accId"
                    onChange={handleChange}
                    value={closeForm.accId}
                    className="w-[360px] h-[42px] bg-white text-[#212121] text-base px-5 rounded-[5px] border border-neutral-500"
                  />
                </div>
              </div>
            </div>
            <div className="self-stretch  py-10 flex-col justify-center items-center gap-6 flex">
              <div className="self-stretch h-[60px] text-center text-neutral-800 text-sm font-light">
                By filling above account closure form you agree to our{" "}
                <Link className="text-blue-700" to="/close-policy">
                  Account closure policy.
                </Link>
              </div>
              <button onClick={handleClick} className="w-[360px]">
                <div className="h-[48px] px-[50px] py-3.5 bg-orange-800 rounded-[5px] flex-col justify-start items-center gap-2.5 flex text-white text-lg font-normal">
                  Submit
                </div>
              </button>
            </div>
          </form>
          {showConfirmation && (
            <Confirmation_Pop
              message="Are you sure you want delete your account?"
              onConfirm={handleConfirm}
              onCancel={handleCancel}
            />
          )}
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
          />
        </div>
      </div>
    </div>
  );
};

export default CloseForm;
