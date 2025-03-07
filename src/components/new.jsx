import React from "react";
import { Element } from "react-scroll";
import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { Link } from "react-scroll";
import whatsappLogo from "../../assets/images/whatsapp.jpeg";
import facebookLogo from "../../assets/images/face.png";
import linkedinLogo from "../../assets/images/linkedin.png";

const Contactusdiv = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const height = useTransform(scrollYProgress, [0, 0.8], ["0%", "100%"]);
  const transitionWhiteLine = useTransform(
    scrollYProgress,
    [0.1, 0.12, 0.15, 0.2, 0.25, 0.3, 0.35, 0.4],
    ["0.5s", "0.5s", "0.5s", "0.5s", "0.5s", "0.5s", "0.5s", "0.5s"]
  );

  return (
    <Element name="Contact">
      <div
        className="relative flex items-center justify-center h-screen mt-8 sm:mt-0"
        ref={targetRef}
      >
        {/* White Line Animation */}
        <motion.div
          className="w-0 border-[2px] h-[45%] border-solid border-white absolute top-0 z-[-1] mx-auto sm:left-[50%]"
          style={{
            height,
            transition: transitionWhiteLine,
            transitionDelay: "500ms"
          }}
        ></motion.div>

        {/* Contact Section */}
        <Link
          activeClass="active"
          to="MainContact"
          spy={true}
          smooth={true}
          offset={-70}
          duration={1000}
        >
          <div className="flex flex-col items-center justify-center gap-10">
            {/* Contact Title */}
            <motion.div
              className="flex items-center uppercase group z-10 justify-center h-16 mx-auto text-[25px] leading-9 font-semibold tracking-wider w-56 backdrop-blur-2xl cursor-pointer rounded-[14px] bg-bgPrimary xl:mt-8"
              style={{ opacity }}
            >
              CONTACT US
            </motion.div>

            {/* Contact Cards */}
            <div className="flex flex-col items-center justify-center sm:flex-row gap-12">
              {/* WhatsApp Card */}
              <div className="p-10 rounded-lg bg-[#4a4a4a] bg-opacity-50 w-[361px] h-[360px] backdrop-blur flex flex-col justify-center items-center">
                <div className="flex flex-row items-center justify-center gap-5 font-Kanit">
                  <div>
                    <img
                      src={whatsappLogo}
                      width="120px"
                      className="mt-5 mb-6"
                      alt="WhatsApp Logo"
                    />
                  </div>
                  <div className="flex flex-col gap-5 whitespace-nowrap">
                    <p>Chat with Us on WhatsApp</p>
                    <div className="flex justify-start">
                      <a
                        href="https://wa.me/1234567890"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex px-3 justify-center items-center gap-2 rounded-sm bg-green-600 text-white py-2 px-4"
                      >
                        Message Us
                      </a>
                    </div>
                  </div>
                </div>
                <p className="w-[240px]">
                  Connect with us instantly on WhatsApp for inquiries, support,
                  and collaborations.
                </p>
              </div>

              {/* Facebook Card */}
              <div className="p-10 rounded-lg bg-[#4a4a4a] bg-opacity-50 w-[361px] h-[360px] backdrop-blur flex flex-col justify-center items-center">
                <div className="flex flex-row items-center justify-center gap-5 font-Kanit">
                  <div>
                    <img
                      src={facebookLogo}
                      width="120px"
                      className="mt-5 mb-6"
                      alt="Facebook Logo"
                    />
                  </div>
                  <div className="flex flex-col gap-5 whitespace-nowrap">
                    <p>Follow Us on Facebook</p>
                    <div className="flex justify-start">
                      <a
                        href="https://facebook.com/fiscoratech"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex px-3 justify-center items-center gap-2 rounded-sm bg-blue-600 text-white py-2 px-4"
                      >
                        Visit Page
                      </a>
                    </div>
                  </div>
                </div>
                <p className="w-[240px]">
                  Stay updated with our latest projects, announcements, and
                  community discussions on Facebook.
                </p>
              </div>

              {/* LinkedIn Card */}
              <div className="p-10 rounded-lg bg-[#4a4a4a] bg-opacity-50 w-[361px] h-[360px] backdrop-blur flex flex-col justify-center items-center">
                <div className="flex flex-row items-center justify-center gap-5 font-Kanit">
                  <div>
                    <img
                      src={linkedinLogo}
                      width="120px"
                      className="mt-5 mb-6"
                      alt="LinkedIn Logo"
                    />
                  </div>
                  <div className="flex flex-col gap-5 whitespace-nowrap">
                    <p>Connect with Us on LinkedIn</p>
                    <div className="flex justify-start">
                      <a
                        href="https://linkedin.com/company/fiscoratech"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex px-3 justify-center items-center gap-2 rounded-sm bg-blue-800 text-white py-2 px-4"
                      >
                        Connect
                      </a>
                    </div>
                  </div>
                </div>
                <p className="w-[240px]">
                  Follow our company on LinkedIn to learn about our expertise,
                  innovations, and career opportunities.
                </p>
              </div>
            </div>
          </div>
        </Link>

        {/* White Line Animation */}
        <motion.div
          className="w-0 border-[2px] h-[45%] border-solid border-white absolute bottom-0 z-[-1] mx-auto sm:left-[50%]"
          style={{
            height,
            transition: transitionWhiteLine,
            transitionDelay: "500ms"
          }}
        ></motion.div>
      </div>
    </Element>
  );
};

export default Contactusdiv;
