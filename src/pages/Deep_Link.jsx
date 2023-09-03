import React, { useEffect, useRef, useState } from "react";
import Review_Card from "../components/Review_Card";
import { isAndroid, isIOS } from "react-device-detect";
import { Rate } from "antd";
import { useParams } from "react-router-dom";
import { supabaseUser } from "../Supabase/SupabaseUser";
import { useInView } from "react-intersection-observer";
// import LoadingAnimation from "../components/LoadingAnimation";
import Meta_Tags from "../components/Daynamic_Meta_Tags";
import { Helmet, HelmetProvider } from "react-helmet-async";

const Deep_Link = () => {
  const productId = "fba9ab59-8fa7-4882-8db4-5f94e73a28f4";
  console.log(productId);
  // State variables
  const [loaded, setLoaded] = useState(false);
  const [inViewRef, inView] = useInView({ threshold: 0.9 });
  const [currentVideoIndex, setCurrentVideoIndex] = useState(null);
  const [videoPlaying, setVideoPlaying] = useState(false);
  const [muted, setMuted] = useState(true);
  const [nextVideoIndex, setNextVideoIndex] = useState(null);
  const videoRef = useRef(null);
  const nextVideoRef = useRef(null);
  const [pDetails, setPDetails] = useState("");
  const [loading, setLoading] = useState(false);
  console.log(pDetails);
  const DeepUrl =
    // "intent://myclub100.com/#Intent;scheme=https;package=com.one100.app;end";
    "intent://myclub100.com/search-detail-page/" +
    productId +
    "#Intent;scheme=https;package=com.one100.app;end";

  // ------------------------- deep link app inent code ---------------------- //

  useEffect(() => {
    setLoading(true);
    fetchProductDetails().then(() => {
      // Once product details are fetched, preload the image
      const image = new Image();
      image.src = pDetails.thumbnails;
      image.onload = () => {
        setLoading(false); // Set loading to false after image is loaded
      };
      if (isAndroid) {
        window.location.replace(DeepUrl);
      } else if (isIOS) {
        // window.location.replace("instagram://");
        window.location.replace("https://myclub100.com/");

        setTimeout(() => {
          window.location.replace(
            // "https://apps.apple.com/us/app/instagram/id389801252"
            "https://myclub100.com/"
          );
        }, 10000);
      }
    });
  }, []);

  // ------------------ product detail fetch -------------------- //

  async function fetchProductDetails() {
    const { data, error } = await supabaseUser
      .from("product_list")
      .select()
      .eq("product_uid", productId)
      .single();
    if (data) {
      setPDetails(data);
      setTimeout(() => {
        setLoading(false);
      }, 500);
    } else {
      console.log(error);
      setTimeout(() => {
        setLoading(false);
      }, 500);
    }
  }

  // Function to mute and unmute video
  const handleClick = () => {
    if (videoRef.current) {
      // Toggle muted state
      videoRef.current.muted = !muted; // Use context's muted state here
      setMuted(!muted); // Update the muted state in the context
    }
  };

  // Function to handle playing or pausing video based on scroll
  const handleScrollPlayPause = () => {
    if (videoRef.current) {
      if (inView) {
        videoRef.current.play();
        // setCurrentVideoIndex(videoIndex);
        setVideoPlaying(true);
      } else {
        videoRef.current.pause();
        setVideoPlaying(false);
      }
    }
  };

  // Effect to load and play/pause the video based on scroll
  useEffect(() => {
    // Load video when in view
    if (inView && videoRef.current && !loaded) {
      videoRef.current.load();
      setLoaded(true);
    }

    // Play/pause video based on scroll
    handleScrollPlayPause();
  }, [inView, loaded]);

  // Effect to preload the next video and cleanup on unmount
  useEffect(() => {
    if (nextVideoRef.current) {
      nextVideoRef.current.preload = "auto";
      nextVideoRef.current.load();
    }
    return () => {
      if (nextVideoRef.current) {
        nextVideoRef.current.preload = "none";
      }
    };
  }, []);

  return (
    <>
      <HelmetProvider>
        <>
          <Helmet>
            {/* Standard metadata tags */}
            <title>{pDetails.product_name}</title>
            <meta name="title" content={pDetails.product_name} />
            <meta name="description" content={pDetails.details} />
            <meta property="og:type" content="website" />

            {/* Facebook tags */}
            <meta property="og:title" content={pDetails.product_name} />
            <meta property="og:type" content="website" />
            <meta property="og:description" content={pDetails.details} />

            {/* End Facebook tags */}

            {/* Twitter tags */}
            <meta property="twitter:title" content={pDetails.product_name} />
            <meta property="twitter:description" content={pDetails.details} />
            <meta property="twitter:card" content="summary_large_image" />
          </Helmet>

          <div className="w-full bg-white flex-col justify-start items-start inline-flex font-roboto">
            {/* ------------- Dyanamic meta-tags --------------------- */}

            {/* ---------------------------- business profile header  ------------------------------------  */}

            <div className="self-stretch bg-white h-[60px] flex flex-row py-2.5 px-3 box-border items-center justify-center gap-[16px]">
              <img
                className="w-[42px] h-[42px] object-cover"
                alt=""
                src={pDetails ? JSON.parse(pDetails.biz_logo)[0] : ""}
              />

              <p className="m-0 self-stretch text-[#212121] font-regular text-xs SE:text-sm flex-1 leading-[22px] flex items-center">
                {pDetails.biz_name}
              </p>
            </div>
            {/* ---------------------------- video card  ------------------------------------  */}

            <div
              ref={inViewRef}
              onClick={handleClick} //for play video muted and unmuted
              className="self-stretch flex flex-col items-center justify-center relative"
            >
              <video
                className="self-stretch aspect-2/3 overflow-hidden shrink-0 object-cover"
                poster={pDetails.thumbnails} //-add poster img here
                ref={videoRef}
                src={loaded ? pDetails.video_url : pDetails.video_url}
                width="100%"
                height="100%"
                loop
                playsInline
                autoPlay={inView && loaded}
                preload="none" // Set the data-index attribute for identifying the video element
                muted={muted} // Set muted state here
                // controls
              />
              <button className="absolute bottom-0 right-0 mr-2.5 mb-2.5">
                <img
                  src={muted == true ? "/mute.svg" : "/unmute.svg"}
                  className="w-6 h-6"
                />
              </button>
            </div>

            <div className="self-stretch flex flex-col items-center justify-center text-[16px]">
              {/* ---------------------------- business info  ------------------------------------  */}

              <div
                // to={`/detail-page/${pDetails.product_uid}`}
                className="self-stretch p-3 pb-6 bg-white border-b border-neutral-800 border-opacity-10 justify-center items-center gap-2.5 inline-flex"
              >
                <div className="grow shrink basis-0 self-stretch  flex-col justify-center items-start gap-5 inline-flex">
                  <div className="self-stretch justify-between items-center gap-2.5 inline-flex">
                    <div className="grow shrink basis-0 self-stretch flex-col justify-start items-start gap-1.5 inline-flex">
                      <div className="self-stretch justify-center items-center gap-2.5 inline-flex">
                        <div className="grow shrink basis-0 text-[#212121] text-base font-medium tracking-wide">
                          {pDetails.product_name}
                        </div>
                      </div>

                      <div className="self-stretch justify-start items-start flex-wrap gap-1 XSE:gap-1 SE:gap-1.5 inline-flex">
                        <div className="text-neutral-500 pr-1 text-sm font-normal tracking-wide">
                          {pDetails.price}
                        </div>
                        <div className="self-stretch pr-1 justify-start items-center gap-[5px] flex">
                          <div className="w-[5px] h-[5px] bg-neutral-500 rounded-full" />
                          <div className="text-neutral-500 text-sm font-normal tracking-wide">
                            {pDetails.time}
                          </div>
                        </div>
                        <div className="self-stretch pr-1 justify-start items-center gap-[5px] flex">
                          <div className="h-5 items-center justify-center">
                            <img className="w-4 h-4" alt="" src="/star.svg" />
                          </div>
                          <div className="text-neutral-500 text-sm font-normal tracking-wide">
                            4.5
                          </div>
                          <div className="text-neutral-500 text-sm font-normal tracking-wide">
                            (800)
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ---------------------------- action button ------------------------------------  */}

            <div className="self-stretch bg-white flex flex-col py-3 px-0 items-center justify-center">
              <div className="self-stretch flex flex-col items-center justify-center">
                <p className=" pt-5 self-stretch text-base text-center px-20 font-normal text-[#969696]">
                  For Location and other details Download the app
                </p>
                <a
                  href="https://play.google.com/store/apps/details?id=com.one100.app"
                  target="_blank"
                  className="cursor-pointer [border:none] py-10 px-0 bg-[transparent] flex-1 flex flex-row box-border items-center justify-center gap-[10px]"
                >
                  <img
                    className=" w-[220px] overflow-hidden shrink-0"
                    alt=""
                    src="/playstore_logo.svg"
                  />
                </a>
              </div>
            </div>

            {/*------------------------------ Review ---------------------------------  */}
            <div className="w-full pb-[42px] flex-col justify-start items-start inline-flex font-roboto">
              {/* ---------------- Title ------------- */}

              <div className="self-stretch px-4 py-4 bg-white border-b border-t border-neutral-800 border-opacity-20 justify-between items-center gap-[19px] inline-flex">
                <div className="grow shrink basis-0 text-neutral-800 text-xl font-normal tracking-wide">
                  Reviews
                </div>

                <div className="justify-start h-5 items-center flex gap-1.5 ">
                  {/* <ReactStars count={5} value={4.5} size={28} color2={"#ffd700"} /> */}
                  <Rate allowHalf disabled defaultValue={4.5} />

                  <div className=" mt-2 text-neutral-800 text-[15px] font-normal tracking-wide">
                    (4.5)
                  </div>
                </div>
              </div>

              {/* ----------------- review card -------------------- */}

              <Review_Card />
              <Review_Card />
              <Review_Card />

              {/* ---------- Read all -----------------  */}

              <div className="self-stretch mt-2 py-5 justify-center items-center flex">
                <a
                  href="https://play.google.com/store/apps/details?id=com.one100.app"
                  target="_blank"
                  className="self-stretch text-center text-neutral-800 text-sm font-reglar tracking-wide border-b border-neutral-800 border-opacity-60"
                >
                  Read all
                </a>
              </div>
            </div>
          </div>
        </>
      </HelmetProvider>
    </>
  );
};

export default Deep_Link;
