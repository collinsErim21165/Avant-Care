import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import NavBar from './NavBar'
import AboutUsImg from '../images/AdobeStock.jpeg';
import heart from '../images/heart.png';
import Xray from '../images/x-ray.png';
import Labs from '../images/labs.png';
import Physicals from '../images/physicals.png';
import Medicine from '../images/medicine.png';
import Weight from '../images/weight.png';
import Footer from '../Components/Footer';


const AboutUs = () => {
    useEffect(() => {
      window.scrollTo(0,0);
    }, [])
  return (
    <div>
        <div>
            <NavBar/>
        </div>

        <div className='md:h-20 h-28 w-full bg-[rgb(6,70,137)] md:mt-44 mt-52'>
          <p className='text-white text-center text-2xl  pt-5'> Changing the way healthcare is <br className='md:hidden block' /> delivered</p>
        </div>

        <div className='relative md:bg-cover bg-center  bg-no-repeat min-h-screen pt-20 pb-20 w-full md:pl-14 pl-4  flex flex-col items-center justify-center' style={{backgroundImage: `url(${AboutUsImg})`, backgroundAttachment: "fixed" }}>
            <div  className="absolute inset-0 bg-blue-400/20 backdrop-blur-sm "></div>
            <div className='relative flex flex-col  gap-20'>
              <div className='flex md:flex-row flex-col items-start justify-center md:flex-wrap gap-20'>
               <div className='md:w-[450px] w-[330px] bg-[rgb(247,248,249)]  px-4 py-4  shadow-md rounded-md shadow-black'>
                 <h3 className='text-[rgb(12,113,195)] text-2xl font-bold '>About Us</h3>
                 <p className='text-[rgb(158,159,159)]'>We offer a wide range of services to quickly diagnose and provide appropriate treatment. We are recognized for outstanding customer service with a focus on fast, friendly patient care. We offer urgent, non-critical medical care to patients as an alternative to long waits in the emergency room or when your primary care provider is unavailable. <br /> <br />

                      Our services range from treating many common illnesses and minor injuries to cuts, scrapes, sprains, strains, aches and pains. We have onsite X-ray and labs. We also offer general school and sports physicals, occupational medicine services and workers comp injury treatment. Beaumont Urgent Care accepts most insurance plans, is open seven days a week and we welcome all ages for treatment. Whether you have an illness or an injury, you can count on Beaumont Urgent Care. </p>
               </div>
               <div className='bg-[rgb(11,128,191)] md:w-80 w-72 md:ml-0 ml-6  md:h-28 h-28 px-6 rounded-b-md pt-3 shadow-lg shadow-black'>
                 <h3 className='text-white font-bold text-2xl'>Contact Us</h3>
                 <p className='text-white'>Have any questions? Call us at <br className='md:hidden block' /> <em className='text-[rgb(15,248,252)] md:pl-3 md:pt-0 pt-6  text-xl'>(409) 333-1272</em></p>
               </div>
              </div>

            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 lg:w-full md:w-[490px] w-[276px] lg:ml-0 md:ml-36 ml-9 items-center justify-center border-2 rounded-md border-[rgb(157,158,159)]  shadow-md shadow-black'>
              <div className='flex flex-col items-center justify-center border border-r-0 border-l-0 border-t-0 border-b-0 '>
                <Link to="/Urgent-Care">
                  <div className='bg-[rgb(28,203,187)] md:w-40 w-[270px] md:h-16 h-20 flex items-center justify-center '>
                    <img src={heart} className='md:h-9 md:w-11 h-11 w-14 items-center' alt="" />
                   </div>
                   <div className='bg-[rgb(57,146,161)] md:w-40 w-[270px] md:h-16 h-20 flex items-center justify-center'>
                    <p className='text-white font-bold text-xl'>Urgent Care</p>
                   </div>
                </Link>
              </div>
              <div className='flex flex-col items-center justify-center border border-l-2 border-[rgb(44,179,180)] border-r-0 border-t-0 border-b-0 '>
                <Link to="/X-ray">
                 <div className='bg-[rgb(28,203,187)]  md:w-40 w-[270px] md:h-16 h-20 flex items-center justify-center '>
                    <img src={Xray} className='md:h-9 md:w-11 h-11 w-14 items-center' alt="" />
                  </div>
                  <div className='bg-[rgb(57,146,161)]  md:w-40 w-[270px] md:h-16 h-20 flex items-center justify-center'>
                    <p className='text-white font-bold text-xl'>X-Ray</p>
                  </div>
                </Link>
              </div>
              <div className='flex flex-col items-center justify-center border border-l-2 border-[rgb(44,179,180)] border-r-0 border-t-0 border-b-0 '>
                <Link to="/Labs">
                  <div className='bg-[rgb(28,203,187)]  md:w-40 w-[270px]  md:h-16 h-20 flex items-center justify-center '>
                    <img src={Labs} className='md:h-9 md:w-11 h-11 w-14 items-center' alt="" />
                  </div>
                  <div className='bg-[rgb(57,146,161)]  md:w-40 w-[270px] md:h-16 h-20 flex items-center justify-center'>
                   <p className='text-white font-bold text-xl'>Labs</p>
                  </div>
                </Link>
              </div>
              <div className='flex flex-col items-center justify-center border border-l-2 border-[rgb(44,179,180)] border-r-0 border-t-0 border-b-0 '>
                <Link to="/Physical">
                  <div className='bg-[rgb(28,203,187)]  md:w-40 w-[270px] md:h-16 h-20 flex items-center justify-center '>
                    <img src={Physicals} className='md:h-9 md:w-11 h-11 w-14 items-center' alt="" />
                  </div>
                  <div className='bg-[rgb(57,146,161)]  md:w-40 w-[270px] md:h-16 h-20 flex items-center justify-center'>
                    <p className='text-white font-bold text-xl'>Physicals</p>
                  </div>
                </Link>
              </div>
              <div className='flex flex-col items-center justify-center border border-l-2 border-[rgb(44,179,180)] border-r-0 border-t-0 border-b-0 '>
                <Link to="/Occupational-medcine">
                  <div className='bg-[rgb(28,203,187)]  md:w-40 w-[270px] md:h-16 h-20 flex items-center justify-center '>
                    <img src={Medicine} className='md:h-9 md:w-11 h-11 w-14 items-center' alt="" />
                   </div>
                   <div className='bg-[rgb(57,146,161)]  md:w-40 w-[270px] md:h-16 h-20 flex items-center justify-center'>
                    <p className='text-white font-bold text-center text-xl'>Occupational Medicine</p>
                   </div>
                </Link>
              </div>
              <div className='flex flex-col items-center justify-center border border-l-2 border-[rgb(44,179,180)] border-r-0  border-t-0 border-b-0 '>
                <Link to="/Weight-loss">
                  <div className='bg-[rgb(28,203,187)] md:w-40 w-[270px] md:h-16 h-20 flex items-center justify-center '>
                    <img src={Weight} className='md:h-9 md:w-11 h-11 w-14 items-center' alt="" />
                   </div>
                   <div className='bg-[rgb(57,146,161)] md:w-40 w-[270px] md:h-16 h-20 flex items-center justify-center'>
                     <p className='text-white font-bold text-xl'>Weight Loss</p>
                   </div>
                </Link>
              </div>
            </div>

          </div>

            </div>
          <div>
             <Footer/>
          </div>

    </div>
  )
}

export default AboutUs