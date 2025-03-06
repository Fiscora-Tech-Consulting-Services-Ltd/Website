import React, { memo, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Element } from "react-scroll";

// import Navbar2 from "./Navbar2";
const About = memo(() => {
  // used for rotation of planet in framer motion instead of uing state
  //   const [rotate, cycleRotate] = useCycle(0,360);
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"]
  });

  const height = useTransform(scrollYProgress, [0, 0.3], ["0vh", "120vh"]);

  // TRansition to make it better(Line)
  const transitionWhiteLine = useTransform(
    scrollYProgress,
    [0.1, 0.12, 0.15, 0.2, 0.25, 0.3, 0.35, 0.4],
    ["2s", "2s", "2s", "2s", "2s", "2s", "2s", "2s"]
  );

  return (
    <>
      <Element name="About" className="relative">
        {/* White line */}
        {/* White line */}
        <motion.div
          className="w-0 border-[2px] h-[30%] xl:h-[17.5%]   border-solid border-white  absolute top-0 z-[1]  mx-auto  left-[50%]"
          style={{
            height: height,
            transition: transitionWhiteLine,
            transitionDelay: "500ms"
          }}
        ></motion.div>
        <motion.div className="">
          <motion.div className="container flex flex-col items-center justify-around gap-10 p-4 mx-auto">
            <br />
            <br />

            <section className="flex flex-col justify-center sm:flex sm:flex-row sm:justify-between  pt-10 sm:pt-0   text-white rounded-lg backdrop-blur-sm gap-8 sm:gap-0  bg-opacity-80 bg-[rgba(43,43,43,0.26)] sm:w-[85%] w-full z-10 ">
              <div className=" sm:w-[500px] sm:h-[212px] sm:flex sm:items-center sm:justify-start sm:px-16">
                {" "}
                <h1 className="px-6 mt-2 text-5xl text-center sm:text-5xl sm:mt-5 font-Kanit sm:text-left">
                  About
                </h1>
              </div>
              <div className="bg-[#101010] px-6 pb-4  pt-5  sm:pr-0 sm:w-[720px]">
                <p className="leading-7 sm:px-[40px] text-lg">
                  At{" "}
                  <span className="font-semibold">
                    Fiscora Tech Consulting Services
                  </span>
                  , we are more than just an IT consulting firm—we are
                  **innovators, problem-solvers, and technology enthusiasts 
                  dedicated to transforming ideas into reality. Our expertise
                  spans across web development, software engineering, and IT
                  solutions, ensuring that businesses of all sizes stay ahead
                  in the digital era. We take pride in offering tailored
                  strategies that align with your unique goals, combining
                  cutting-edge technology, user-centric design, and industry
                  best practices. With a strong focus on efficiency,
                  security, and scalability, we work closely with our clients
                  to build seamless, high-performing solutions that drive
                  success. Whether you're a startup looking to establish your
                  digital presence or an enterprise aiming to optimize
                  operations, Fiscora Tech is your trusted partner in
                  innovation. Let’s build the future together—one breakthrough
                  at a time! 🚀
                </p>
              </div>
            </section>
            <section className="backdrop-blur-sm text-white flex flex-col justify-center sm:flex sm:flex-row sm:justify-between gap-8  bg-opacity-80  pt-[10px] sm:w-[85%] w-full pb-[20px] sm:py-0 rounded-lg  bg-[rgba(43,43,43,0.26)] z-10">
              <div className=" sm:w-[500px] sm:h-[212px] sm:flex sm:items-center sm:justify-start sm:px-16">
                <h1 className="px-6 mt-5 text-5xl text-center sm:text-left sm:text-5xl font-Kanit whitespace-nowrap">
                  What we do
                </h1>
              </div>

              <div className="bg-[#101010] w-full pt-5 sm:pr-3 sm:w-[720px] ">
                <p className="leading-7 px-6 sm:px-[40px] lg:pl-16 lg:pb-4 text-lg">
                  At{" "}
                  <span className="font-semibold">
                    Fiscora Tech Consulting Services
                  </span>
                  , we are a startup on a mission to revolutionize the way
                  businesses leverage technology. As we prepare for our official
                  launch, our team is working tirelessly to build **cutting-edge
                  digital solutions** that drive business success and
                  innovation. While we are in the early stages, our vision is
                  clear, to empower businesses with high-performance websites,
                  applications, and scalable tech solutions. We are laying the
                  foundation for a company that prioritizes efficiency,
                  security, and user experience, ensuring that our clients
                  receive world-class services tailored to their unique needs.
                  Our journey is not just about technology; it's about
                  creating a community of forward-thinkers, innovators, and
                  problem-solvers. With our growing Discord and tech
                  community, we are building a network of passionate
                  individuals eager to shape the future of technology together.
                  This is just the beginning. Fiscora is not just another tech
                  consultancy; we are the future of digital transformation.**
                  Stay tuned as we gear up for an exciting launch, and let's
                  build something extraordinary together! 🚀
                </p>
              </div>
            </section>
          </motion.div>
        </motion.div>
      </Element>
    </>
  );
});

export default About;
