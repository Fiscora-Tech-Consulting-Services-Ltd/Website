import React, { memo } from "react";
import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { Link, Element } from "react-scroll";
const Projectandabout = memo(() => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"]
  });
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const height = useTransform(scrollYProgress, [0, 0], ["0vh", "25vh"]);
  const border = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const transitionWhiteLine = useTransform(
    scrollYProgress,
    [0.1, 0.12, 0.15, 0.2, 0.25, 0.3, 0.35, 0.4],
    ["0.5s", "0.5s", "0.5s", "0.5s", "0.5s", "0.5s", "0.5s", "0.5s"]
  );
  return (
    <div className="relative w-full pt-16 min-h-[60vh] lg:min-h-screen">
      <div className="w-5/6 sm:w-11/12 max-w-[56.125rem] h-max min-h-[70vh] bg-[rgba(43,43,43,0.26)] border border-[#fff] border-opacity-50 mx-auto rounded-[14px]  backdrop-blur-[10px]  flex flex-col items-center justify-center gap-12 px-4 py-2  sm:py-4 sm:px-6 z-[1] 2xl:max-w-4xl">
        <h1 className="w-[98%] sm:w-[90%] text-2xl font-bold text-center transition-all duration-1000 p-4 tracking-normal- rounded-lg hover:bg-slate-900 cursor-pointer group sm:text-4xl lg:text-5xl xl:text-6xl">
          WE ARE FISCORA TECH CONSULTING SERVICES
          <span class="block w-0 group-hover:w-full   transition-all duration-1000 h-0.5 navLink"></span>
        </h1>
        <p className="w-full sm:w-[87%] text-sm font-medium leading-6 text-left sm:text-lg xl:text-xl xl:leading-8 font-Kanit">
          At <span className="font-bold">Fiscora Tech Consulting Services</span>
          , we specialize in transforming ideas into innovative tech
          solutions. Our mission is to empower businesses with
          high-performance, scalable, and secure digital products. Whether
          it's custom web development, mobile apps, cloud services, or API
          integrations, we deliver excellence with cutting-edge
          technologies.
        </p>
      </div>
      {/* white line */}
      <motion.div
        className="w-0 border-[2px] border-solid border-white h-screen mx-auto bottom-0 left-[50%] absolute -z-[1]"
        style={{ height, transition: transitionWhiteLine }}
      ></motion.div>
      {/* <div className='relative h-screen' ref={targetRef}>
        <motion.div className='line w-0 border-[4px] border-solid border-white h-screen z-10 mx-auto top-0 left-[50%] absolute' style={{ height, transition: transitionWhiteLine }}>
          <motion.div className='relative w-24 lg:w-64 border-t-8 border-l-8 rounded-t-lg h-28 top-1/3 left-[-6rem] lg:left-[-16rem]' style={{ border }}>
          </motion.div>
          <Link
            to='Projects'
            spy={true}
            smooth={true}
            offset={-70}
            duration={2000}
          >
            <div className='cursor-pointer relative w-24 lg:w-64 flex items-center justify-center text-2xl rounded-xl h-16 lg:h-28 top-1/3 left-[-9rem] lg:left-[-24rem] text-center font-Kanit bg-white  bg-opacity-25   backdrop-blur-sm'>
              Project
            </div>
          </Link>
          <Link 
          to='About'
          spy={true}
            smooth={true}
            offset={-70}
            duration={1000}
          >
            <div className='cursor-pointer relative w-24 text-center flex items-center justify-center text-2xl rounded-xl h-16 lg:w-64 lg:h-28 top-[20%] left-[3rem] lg:left-[8rem] font-Kanit bg-white  bg-opacity-25   backdrop-blur-sm '>
              About
            </div>
          </Link>
          <div className='relative w-24 border-b-8 border-r-8 rounded-b-lg lg:w-64 h-28 top-[20%] left-1/2'>
          </div>
        </motion.div>
      </div> */}
    </div>
  );
});

export default Projectandabout;
