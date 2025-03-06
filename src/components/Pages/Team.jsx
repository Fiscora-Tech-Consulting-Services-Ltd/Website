import React , {useRef} from 'react'
import abouthr from '../../assets/images/abouthr.svg'
import abouthr2 from '../../assets/images/abouthr2.svg'
import Card from "../Card/Card";

const Team = () => {


  // For Left and Right in Card Section

  const contentRef = useRef()


  const scrollLeft = () => {

    if (contentRef.current) {

      contentRef.current.scrollLeft -= 300

    }

  }


  const scrollRight = () => {

    if (contentRef.current) {

      contentRef.current.scrollLeft += 300

    }

  }

    return (
        <div className="flex flex-col gap-4 mb bg-[#0B0B0B] bg-fixed bg-center bg-no-repeat bg-cover min-h-[104vh] z-10 relative mt-44">
            <p className="flex items-center justify-center pt-8 text-5xl font-bold font-Kanit ">THE TEAM</p>
            <img src={abouthr} className="w-full mt-8" alt="" />



            <div ref={contentRef}
                className="flex flex-row items-center justify-start p-8 overflow-x-auto scrollbar-hide scroll-smooth ">
                <div>
                    <Card />
                </div>
            </div>

            <div className="relative flex items-center justify-center gap-8 p-2 overflow-x-auto">
                <button onClick={scrollLeft} className="text-2xl"><img src="https://img.icons8.com/ios-glyphs/30/FFFFFF/sort-left.png" alt="" /></button>
                <button onClick={scrollRight} className="text-2xl"><img src="https://img.icons8.com/ios-glyphs/30/FFFFFF/sort-right.png" alt="" /></button>
            </div>

            <img src={abouthr2} className="w-full mt-8 mb-10" alt="" />


        </div>)
}

export default Team