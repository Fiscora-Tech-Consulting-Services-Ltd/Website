import React, { useState, useEffect } from "react";
import "tailwindcss/tailwind.css";
import Icon from '../../assets/images/Icon.svg'
import LeftArrowIcon from '../../assets/images/leftArrowIcon.svg';
import RightArrowIcon from '../../assets/images/rightArrowIcon.svg';
import { motion, AnimatePresence } from "framer-motion";
const Carousel = () => {

    const items = [
        {
            id: 1,
            title: 'KODIAC LABS',
            description: 'Our development team created a revolutionary website that seamlessly integerate discord bots with non fungible tokens(NFTS). The client Provided a visually-stunning design, and our team expertly utilized the react framework to bring it to life in just three weeks',
            image: `${Icon}`,
            softwareUsed: [
                'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png',
                'https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png',
                'https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_640.png'
            ]
        },
        {
            id: 2,
            title: 'Carbon Coins',
            description: 'We developed the innovative Carbon Coins mobile app, utilizing flutter technology and utilizing firebase as its database, to efficiently track and reduce carbon emissions from vehicles. Our team successfully delivered this solution in just two months.',
            image: `${Icon}`,
            softwareUsed: [
                'https://cdn.iconscout.com/icon/free/png-256/free-flutter-2038877-1720090.png',
                'https://firebase.google.com/static/downloads/brand-guidelines/PNG/logo-logomark.png'
            ]

        },
        {
            id: 3,
            title: 'News App',
            description: 'The news app notify you when a news is released instantly. Our flutter team successfully completed the app for an agency within 3 months of a time period. The project contained the app, the backend panel and rest api with AWS servers.',
            image: `${Icon}`,
            softwareUsed: [
                'https://cdn.iconscout.com/icon/free/png-256/free-flutter-2038877-1720090.png',
                'https://static-00.iconduck.com/assets.00/aws-icon-512x512-hniukvcn.png',
                'https://apps.odoo.com/apps/icon_image?module_id=37657'
            ]

        },
    ];
    const [activeIndex, setActiveIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((activeIndex + 1) % items.length);
        }, 2000);
        return () => clearInterval(interval);
    }, [activeIndex, items]);

    const nextItem = () => {
        setActiveIndex((activeIndex + 1) % items.length);
    };

    const prevItem = () => {
        setActiveIndex(activeIndex === 0 ? items.length - 1 : activeIndex - 1);
    };

    return (

        <div className="relative w-[90%] lg:w-[80%] xl:w-[60rem] mx-auto flex items-center flex-col sm:flex-row sm:justify-between ">

            {/* Mapping the projects */}
            <div className="w-full mx-auto sm:flex sm:items-center sm:justify-center" >
                <div
                    className="relative sm:w-[87%] lg:w-[97%] h-[800px] sm:h-[500px] xl:w-[900px] rounded-lg overflow-visible sm:overflow-hidden">
                    <AnimatePresence initial={false} custom={activeIndex}>
                        {items.map((item, index) => (
                            <motion.div
                                key={index}
                                className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${index === activeIndex ? "" : "hidden"
                                    }`}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                custom={activeIndex}
                                style={{ zIndex: index === activeIndex ? 1 : 0 }}
                            >
                                {/* Layout of projects container */}
                                <div className="w-full xl:w-[56.125rem] h-[50.5rem] sm:h-[38rem] md:h-[35rem] bg-[rgba(43,43,43,0.26)] mx-auto rounded-[14px]  backdrop-blur-[10px]  flex flex-col-reverse sm:flex-row items-center justify-evenly sm:justify-between">
                                    <div className="h-1/2 w-[80%] sm:w-1/2 sm:h-full text-white">
                                        <div className="w-[90%] sm:w-[90%] h-[90%] pt-8 sm:pt-16 flex flex-col items-start justify-between sm:justify-around mx-auto">
                                            <div className="flex flex-col items-start justify-center gap-2 sm:gap-4 items">
                                                {/* Project Title */}
                                                <h1 className="font-Kanit font-medium text-[20px] sm:text-[24px] leading-9 w-44 h-9 tracking-wider whitespace-nowrap">
                                                    {item.title}
                                                </h1>
                                                {/* Project Description */}
                                                <p className="w-full  h-9 font-light text-[12px] sm:text-[18px] text-left leading-6 py-4 tracking-wider">
                                                    {item.description}
                                                </p>
                                            </div>
                                            {/* Software Used */}
                                            <div className="flex flex-col items-start justify-center gap-2 mt-12 items">
                                                <p className="w-28 h-5 font-Kanit font-light text-[14px] leading-5">
                                                    Software Used :
                                                </p>
                                                <div
                                                    className="w-[10rem] h-[3rem] sm:w-[13.875rem] sm:h-[4.6875rem] bg-[rgba(0,0,0,0.15)] rounded-md flex items-center justify-evenly gap-1"
                                                    style={{ boxShadow: `inset 0px 0px 3.2px #292929` }}
                                                >
                                                    {item.softwareUsed.map((software) => (
                                                        <img
                                                            src={software}
                                                            alt=""
                                                            className="w-8 h-8 sm:w-10 sm:h-10"
                                                        />
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Project Images */}
                                    <div className="relative flex items-center justify-center w-full bg-black rounded-r-lg sm:w-1/2 h-1/2 sm:h-full">
                                        <img
                                            src={item.image}
                                            alt=""
                                            className="absolute w-72 top-1/4 sm:w-auto left-1/4 sm:-left-2 sm:bottom-32 lg:-left-12 lg:top-16 md:bottom-20 md:-left-4"
                                        />
                                        <img
                                            src={item.image}
                                            alt=""
                                            className="absolute w-72 bottom-1/4 right-1/4 sm:left-8 sm:top-28 sm:w-auto lg:top-2 lg:left-16 md:top-28 md:left-8"
                                        />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>

            {/* Arrow Buttons */}
            <div className="absolute -bottom-14 sm:-right-7  lg:-right-10  sm:top-20 flex flex-row sm:flex-col items-center justify-center xl:gap-12 gap-10 pl-[6px] w-[62%] sm:px-2 md:px-0 md:w-[10%] lg:px-0 sm:w-[10%] lg:w-[4%]  xl:px-0 h-12 sm:h-96">

                <button
                    className="text-[50px] sm:text-[70px]  lg:text-[100px] xl:text-[120px] h-20 2xl:h-32 2xl:text-[180px] font-extralight text-center flex items-center justify-center bg-none p-2 sm:p-0"
                    onClick={prevItem}
                >
                    <img src={LeftArrowIcon} alt="" className="w-8 h-8 sm:w-9 lg:w-10 sm:h-16" />
                </button>
                <button
                    className="text-[50px] sm:text-[70px]  lg:text-[100px] xl:text-[120px] h-20 2xl:h-32 2xl:text-[180px] font-extralight text-center flex items-center justify-center bg-none p-2  sm:p-0"
                    onClick={nextItem}
                >
                    <img src={RightArrowIcon} alt="" className="w-8 h-8 sm:w-9 lg:w-10 sm:h-20" />
                </button>
            </div>
        </div>
    );
};

export default Carousel;