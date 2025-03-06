import React from "react";
import { Element } from "react-scroll";
import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { Link } from "react-scroll";
import disclogo from "../../assets/images/discordlogo.svg";
import instalogo from "../../assets/images/instalogo.svg";

const Contactusdiv = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const height = useTransform(scrollYProgress, [0, 0.8], ["0%", "100%"]);
  const transitionWhiteLine = useTransform(
    scrollYProgress,
    [0.1, 0.12, 0.15, 0.20, 0.25, 0.30, 0.35, 0.40],
    ["0.5s", "0.5s", "0.5s", "0.5s", "0.5s", "0.5s", "0.5s", "0.5s"]
  );

  return (
    <Element name="Contact">
      <div
        className="relative flex items-center justify-center h-screen mt-8 sm:mt-0 "
        ref={targetRef}
      >
        {/* White line */}
        <motion.div className='w-0 border-[2px] h-[45%] border-solid border-white  absolute top-0 z-[-1]  mx-auto  sm:left-[50%]' style={{ height, transition: transitionWhiteLine, transitionDelay: "500ms" }} >
        </motion.div>
        {/* Contact us div */}
        <Link
          activeClass="active"
          to="MainContact"
          spy={true}
          smooth={true}
          offset={-70}
          duration={1000}
        >
          <div className="flex flex-col items-center justify-center gap-10">
            <motion.div
              className=" flex items-center uppercase group z-10 justify-center h-16 mx-auto text-[25px] leading-9 font-semibold tracking-wider w-56 backdrop-blur-2xl cursor-pointer rounded-[14px] bg-bgPrimary xl:mt-8"
              style={{ opacity }}
            >
              CONTACT US
            </motion.div>
            <div className="flex flex-col items-center justify-center sm:flex-row gap-36">
            <div className="p-10  rounded-lg bg-[#4a4a4a]  bg-opacity-50 w-[361px] h-[360px] backdrop-blur flex flex-col justify-center items-center">
                <div className="flex flex-row items-center justify-center gap-5 font-Kanit">
                  <div>
                    {" "}
                    <img
                      src={disclogo}
                      width="120px"
                      className="mt-5 mb-6"
                      alt=""
                    />{" "}
                  </div>
                  <div className="flex flex-col gap-5 whitespace-nowrap">
                    <p>Join Us on Instagram</p>
                    <div className="flex justify-start">
                    <button className=" flex px-3 justify-center items-center gap-2 rounded-sm ">
                      <Link to="/" className="button-animation" target="_blank">
    <span className="font-Kanit capitalize flex justify-center items-center gap-5 w-20 h-5 text-sm">
    Join
     <img
                          src="https://img.icons8.com/material-rounded/24/FFFFFF/long-arrow-right.png"
                          alt="long-arrow-right"
                        />{" "} </span>
    <div class="liquid"></div>
</Link>
                        
                      </button>
                    </div>
                  </div>
                </div>
                <p className="w-[240px] ">
                  {" "}
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Iusto cum commodi expedita velit eum amet! Laudantium nemo
                  distinctio magnam at.
                </p>
              </div>
              <div className="p-10  rounded-lg bg-[#4a4a4a]  bg-opacity-50 w-[361px] h-[360px] backdrop-blur flex flex-col justify-center items-center">
                <div className="flex flex-row items-center justify-center gap-5 font-Kanit">
                  <div>
                    {" "}
                    <img
                      src={instalogo}
                      width="120px"
                      className="mt-5 mb-6"
                      alt=""
                    />{" "}
                  </div>
                  <div className="flex flex-col gap-5 whitespace-nowrap">
                    <p>Join Us on Instagram</p>
                    <div className="flex justify-start">
                      <button className=" flex px-3 justify-center items-center gap-2 rounded-sm ">
                      <Link to="/" className="button-animation" target="_blank">
    <span className="font-Kanit capitalize flex justify-center items-center gap-5 w-20 h-5 text-sm">
    Join
     <img
                          src="https://img.icons8.com/material-rounded/24/FFFFFF/long-arrow-right.png"
                          alt="long-arrow-right"
                        />{" "} </span>
    <div class="liquid"></div>
</Link>
                        
                      </button>
                    </div>
                  </div>
                </div>
                <p className="w-[240px] ">
                  {" "}
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Iusto cum commodi expedita velit eum amet! Laudantium nemo
                  distinctio magnam at.
                </p>
              </div>
            </div>
          </div>
        </Link>
        {/* White line */}
        <motion.div
          className="w-0 border-[2px] h-[45%] border-solid border-white  absolute bottom-0 z-[-1]  mx-auto  sm:left-[50%]"
          style={{
            height,
            transition: transitionWhiteLine,
            transitionDelay: "500ms",
          }}
        ></motion.div>
      </div>
    </Element>
  );
};

export default Contactusdiv;