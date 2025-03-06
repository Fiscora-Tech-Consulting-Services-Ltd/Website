import React, { memo } from 'react'
import { Element } from 'react-scroll'
import Participant from '../Contributors/Participant'
import { useRef, useState, useEffect } from 'react'
import { useScroll, useTransform, motion } from 'framer-motion'
import { contributors } from '../Contributors/contributorsData'

const Contributors = memo(() => {
  // Setting windowWidth for making the site responsive
  let width;
  if (typeof window !== "undefined") {
    width = window.innerWidth;
  }
  const [windowWidth, setWindowWidth] = useState(width);

  useEffect(() => {

    // function to set real time screen width
    function watchWidth() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener("resize", watchWidth);
  }, [windowWidth]);

  // Framer motion stuff
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });


  //Setting height for white line in top of contributor's page 
  const height = useTransform(scrollYProgress, [0, 0.5], ["0%", "50%"
    // `${windowWidth < 600 ?
    //   // less than 600px responsive code for line height
    //   '25%'
    //   :
    //   // If not less than 600 then according to variation rsponsiveness 
    //   `${windowWidth > 650 ?
    //     '14.5%'
    //     :
    //     '25%'
    //   }`

    // }`
  ])

  //Setting height for white line in bottom of contributor's page 
  const height2 = useTransform(scrollYProgress, [0.2, 0.4], ["0%", "50%"

    // // less than 600px responsive code
    // `${windowWidth < 600 ?
    //   '25%'
    //   :
    //   // If not less than 600 then according to variation rsponsiveness 
    //   `${windowWidth > 650 ?
    //     '14.5%'
    //     :
    //     '25%'
    //   }`

    // }`
  ])

  // TRansition to make it better(Line)
  const transitionWhiteLine = useTransform(
    scrollYProgress,
    [0.1, 0.12, 0.15, 0.20, 0.25, 0.30, 0.35, 0.40],
    ["1.5s", "1.5s", "1.5s", "1.5s", "1.5s", "1.5s", "1.5s", "1.5s"]
  );

  return (
    <Element name='Contributors'>
      <div ref={targetRef} className='relative flex flex-col items-center justify-center w-full h-screen overflow-x-hidden overflow-y-hidden gap-36 xl:gap-12' >

        {/* White line */}
        <motion.div className='w-0 border-[2px] h-[30%] xl:h-[17.5%]   border-solid border-white  absolute top-0 z-[1]  mx-auto  sm:left-[50%]' style={{ height: height, transition: transitionWhiteLine }}>
        </motion.div>

        {/* Contributors heading */}
        <div className="z-30 flex items-center group justify-center h-16 mx-auto hover:bg-slate-900 text-[25px] leading-9 font-semibold tracking-wider w-64 backdrop-blur-2xl cursor-pointer rounded-[14px] bg-bgPrimary xl:mt-8 transition-all duration-1000">
          <span>
            CONTRIBUTORS
          <span class="block w-0 group-hover:w-full transition-all duration-1000 h-0.5 navLink"></span>
            </span>
            {/* <span class="">
              CONTRIBUTORS
            <span class="absolute left-0 bottom-0 right-0 h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100  transition-transform duration-1000"></span>
            </span> */}
        </div>
        {/* Main circle containing ids */}
        <div
          className={`${windowWidth < 300 ? 'w-[17rem] h-[17rem] px-2 py-10' : 'w-[20rem] h-[20rem] px-8 py-10'} sm:w-[25.6875rem] sm:h-[25.375rem] sm:px-8 lg:px-0 lg:py-10 xl:py-14  gradient-border xl:px-10 sm:py-16 2xl:px-10 2xl:py-20  mx-auto rounded-full z-30 flex flex-wrap items-center justify-center gap-4 sm:gap-10 relative sm:max-w-[40rem] backdrop-blur-xl bg-black bg-opacity-[0.56] border-4 border-white`}
        >
          {contributors.map(contributor => <Participant
            key={contributor.id}
            link={contributor.link}
            icon={contributor.icon}
            title={contributor.title}
          />)}
        </div>

        {/* White line */}
        <motion.div className='w-0 border-[2px] h-[30%] xl:h-[17.5%]  border-solid border-white  absolute bottom-0 z-10  mx-auto  sm:left-[50%]' style={{ height: height2, transition: transitionWhiteLine }}>
        </motion.div>
      </div>

    </Element>
  )
}
);
export default Contributors