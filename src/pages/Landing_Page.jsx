import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";

const Landing_Page = () => {
  // const navigate = useNavigate();

  // const onprivacy = useCallback(() => {
  //   navigate("/privacy-policy");
  // }, [navigate]);

  // const onterms = useCallback(() => {
  //   navigate("/terms-conditions");
  // }, [navigate]);

  return (
    <>
      {" "}
      <HelmetProvider>
        <div className="w-full h-screen SE:bg-[url(/hero-img-3.jpg)] bg-white SE:h-screen SE:bg-cover bg-center bg-cover flex-col justify-between items-center SE:items-start gap-2.5 inline-flex font-Roboto">
          {/* ------------- Dyanamic meta-tags --------------------- */}

          <Helmet>
            {/* Standard metadata tags */}
            <title>hellow world</title>
            <meta name="title" content="hellow world" />
            <meta name="description" content="hello how are you" />
            <meta property="og:type" content="website" />

            {/* Facebook tags */}
            <meta property="og:title" content="hellow world" />
            <meta property="og:type" content="website" />
            <meta property="og:description" content="hello how are you" />

            {/* End Facebook tags */}

            {/* Twitter tags */}
            <meta property="twitter:title" content="hellow world" />
            <meta property="twitter:description" content="hello how are you" />
            <meta property="twitter:card" content="summary_large_image" />
          </Helmet>
          <div className="self-stretch visible SE:invisible flex h-screen bg-transparent absolute top-0 right-0 z-10">
            <div className="self-stretch h-full inline-flex ">
              <video
                poster="/vid-thumb.jpg"
                autoPlay
                loop
                muted
                className="w-full h-screen object-cover flex"
              >
                <source src="/expo-1.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
          <div className="self-stretch z-30 grow shrink basis-0 pl-[32px] SE:pl-[100px] pr-[30px] pt-5 SE:pt-5 pb-5 flex-col justify-start items-start gap-[50px] SE:gap-[80px] flex">
            <div className="flex-col justify-start items-start flex">
              <img src="/logo-w.svg" className="w-[40px] SE:hidden block" />
              <img src="/logo_w.svg" className="w-[40px] hidden SE:block" />
            </div>
            <div className=" self-stretch SE:max-w-[620px] flex-col justify-center items-center SE:justify-start SE:items-start gap-10 SE:gap-6 flex">
              <div className="self-stretch text-white SE:text-neutral-900 text-center SE:text-left text-[34px] SE:text-[48px] font-bold tracking-[2.70px]">
                Discover Amazing Places & Experience Through Videos.
              </div>
              <div className="self-stretch SE:max-w-[420px] text-white SE:text-neutral-900 text-base SE:text-lg text-center SE:text-left font-regular SE:font-medium tracking-wide">
                With Club 100, discover hidden gems, amazing restaurants, and
                unique experiences around your city.
              </div>
              <a
                href="https://play.google.com/store/apps/details?id=com.one100.app"
                target="_blank"
                rel="noreferrer"
                className="flex pt-6 "
              >
                <img src="/playstore.svg" className="w-[180px] SE:w-[180px]" />
              </a>
            </div>
          </div>
          <div className="w-full SE:self-stretch px-1 SE:px-5 z-30 justify-between SE:flex-row items-center SE:justify-end SE:items-end gap-1 SE:gap-5 inline-flex">
            <a
              href="https://www.instagram.com/club100app"
              target="_blank"
              className="w-full SE:max-w-[80px] cursor-pointer text-white SE:text-neutral-900 text-center text-xs SE:text-sm font-regular leading-1  tracking-[2px] SE:leading-10 SE:tracking-[3px]"
            >
              Instagram
            </a>
            <a
              href="https://twitter.com/Club100app"
              target="_blank"
              className=" w-full SE:max-w-[80px] cursor-pointer text-white SE:text-neutral-900 text-center text-xs SE:text-sm font-regular leading-1  tracking-[2px] SE:leading-10 SE:tracking-[3px]"
            >
              Twitter
            </a>
            <a
              // onClick={onprivacy}
              className="w-full SE:self-stretch max-w-[140px] cursor-pointer text-white SE:text-neutral-900 text-center text-xs SE:text-sm font-regular leading-1  tracking-[2px] SE:leading-10 SE:tracking-[3px]"
            >
              Privacy Policy
            </a>
            <a
              // onClick={onterms}
              className="w-full SE:self-stretch max-w-[180px] cursor-pointer text-white SE:text-neutral-900 text-center text-xs SE:text-sm font-regular leading-1  tracking-[2px] SE:leading-10 SE:tracking-[3px]"
            >
              Terms & Conditions
            </a>
          </div>
        </div>
      </HelmetProvider>
    </>
  );
};

export default Landing_Page;
