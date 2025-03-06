import React from 'react';
import aboutprofile from "../../assets/images/aboutprofile.png";
import aboutprofile2 from "../../assets/images/aboutprofile2.png";
import aboutprofile3 from "../../assets/images/aboutprofile3.png";
import downArrow from "../../assets/images/downArrow.svg";
import noOne from '../../assets/images/noOne.png'
import monisha from '../../assets/images/monisha.jpeg'
import Aryanser from '../../assets/images/Aryanser.png'
import vedant from '../../assets/images/Vedant.png'
import arya from '../../assets/images/arya.png'
const Card = () => {
  const array = [
    {
      image: aboutprofile2,
      title: {
        head: 'Aryan Singh',
        designation: 'Founder & CEO',
        
        img:Aryanser,
        
        name:'Twitter'
      },
      description: 'The visionary founder of Syntax Erreur, leading the way in App and web development as a versatile full-stack developer'
    },
    {
      image: aboutprofile,
      title: {
        head: 'Chamuditha Jayood',
        designation: 'Founder',
        img:vedant,
        name:'Twitter'
      },
      description: 'Founder of Syntax Erreur, mastering mobile and web development as a full-stack developer, with a passion for creating beautiful and functional user interfaces.'
    }, 
    {
      image: aboutprofile2,
      title: {
        head: 'Vedant Sawant',
        designation: 'Cofounder',
        img:noOne,
        
        name:'Twitter'
      },
      description: 'A talented co-founder and skilled developer at Syntax Erreur, specializing in Django and backend development, crafting robust and dynamic web applications.'
    }, 
    {
      image: aboutprofile,
      title: {
        head: 'Rohit Ghosh',
        designation: 'Cofounder',
        img:noOne,
        name:'Instagram'
      },
      description: 'A dedicated co-founder at Syntax Erreur, contributing as a versatile full-stack developer, seamlessly bridging the gap between frontend and backend for exceptional results.      '
    },
    {
      image: aboutprofile,
      title: {
        head: 'Manas Mishra',
        designation: 'Cofounder',
        img:noOne,
        name:'Instagram'
      },
      description: 'The creative co-founder of Syntax Erreur, bringing websites to life with his expertise in web development and a passion for innovative solutions. '
    },
    {
        image: aboutprofile2,
        title: {
          head: 'Vasudha Singh',
          designation: 'Core ',
          img:noOne,
          
          name:'Twitter'
        },
        description: ' A vital core member at Syntax Erreur, diligently overseeing operations with exceptional managerial skills, ensuring smooth functioning and efficient execution'
      },    {
        image: aboutprofile3,
        title: {
          head: 'Monisha Keshwani',
          designation: 'UI / UX Designer',
          img:monisha,
          name:'Twitter'
        },
        description: 'A valued core member at Syntax Erreur, channeling her passion for design into crafting captivating user friendly experiences as a UX/UI designer.'
      },
    {
        image: aboutprofile2,
        title: {
          head: 'Arya Sawant',
          designation: 'UX/UI Designer',
          img:arya,
          name:'Twitter'
        },
        description: ' A core member at Syntax Erreur, shaping exceptional user experiences as a talented UX/UI designer, combining creativity and technical expertise seamlessly.'
      },

      {
        image: aboutprofile3,
        title: {
          head: 'Kaushik  Patil',
          designation: 'Social Media Manager',
          img:noOne,
          name:'Twitter'
        },
        description: "The creative social media addict behind Syntax Erreur's instagram presence using marketing strategies to build a strong online presence and engage with our audience effectively.        "
      }, 

  ];

  return (
    <div className="flex overflow-x-auto">
      {array.map((item, index) => (
        <div
          key={index}
          className='flex justify-center items-center bg-white w-[290px]  h-[340px]  sm:w-[350px] sm:h-[400px] text-black mx-auto rounded-2xl p-5 shadow-lg mr-6'
        >
          <div className='flex flex-col justify-start items-start'>
            <div className='flex flex-row gap-5 justify-center items-center'>
              <img src={item.title.img} alt=''  className='w-20 h-28 rounded-full sm:w-28 sm:h-28' />
              <div className='flex flex-col'>
                <p className='font-semibold uppercase' >{item.title.head}</p>
                <p>{item.title.designation}</p>
                {/* <p>Age: {item.title.age}</p> */}
              </div>
            </div>

            <div className='mt-5'>{item.description}</div>
            <div className='flex justify-center mt-5'>
              {/* <button className='flex items-center justify-between gap-2 px-5 py-2 text-white bg-black rounded-lg'>
                Connect <img alt='downArrow' src={downArrow} className='mt-[6px] w-4 h-2' />
              </button> */}
              <br/>
            </div>
              {/* <div className='flex justify-center  pt-2'>
                <div className='bg-white  border-2 border-black rounded-xl'>
<p className='flex justify-center items-center px-4  w-32 '><img src={item.title.img} width="50px"/> {item.title.name}</p>
                </div>
              </div> */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
