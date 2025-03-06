import React from 'react'

const Marquee = () => {
  return (
    <div className='fixed top-0  h-full bg-transparent' >
     <marquee style={{height: "100%",}} direction="up" className="text-[#969B9F] "  behavior="smooth" scrollamount="13" loop="infinite" >
        <p   style={{writingMode: "vertical-lr"}} className='text-2xl uppercase lg:text-4xl font-Kanit'>Web Development</p>&nbsp;
        <p   style={{writingMode: "vertical-lr"}}  className='mt-3 text-2xl uppercase lg:text-4xl font-Kanit'>App Development</p>&nbsp;
        <p   style={{writingMode: "vertical-lr"}}  className='mt-3 text-2xl uppercase lg:text-4xl font-Kanit'>IT Consultant</p>&nbsp;
        <p   style={{writingMode: "vertical-lr"}} className='text-2xl uppercase lg:text-4xl font-Kanit'>Web Development</p>&nbsp;
        <p   style={{writingMode: "vertical-lr"}}  className='mt-3 text-2xl uppercase lg:text-4xl font-Kanit'>App Development</p>&nbsp;
        <p   style={{writingMode: "vertical-lr"}}  className='mt-3 text-2xl uppercase lg:text-4xl font-Kanit'>IT Consultant</p>&nbsp;
        <p   style={{writingMode: "vertical-lr"}} className='text-2xl uppercase lg:text-4xl font-Kanit'>Web Development</p>&nbsp;
        <p   style={{writingMode: "vertical-lr"}}  className='mt-3 text-2xl uppercase lg:text-4xl font-Kanit'>App Development</p>&nbsp;
        <p   style={{writingMode: "vertical-lr"}}  className='mt-3 text-2xl uppercase lg:text-4xl font-Kanit'>IT Consultant</p>&nbsp;
    
     </marquee>
    </div>
  )
}

export default Marquee
