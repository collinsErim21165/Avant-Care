import React, { useEffect } from 'react'
import NavBar from './NavBar'
import medical from '../images/medical-equipment.jpg'
import heart from '../images/heart.png';
import Xray from '../images/x-ray.png';
import Labs from '../images/labs.png';
import Physicals from '../images/physicals.png';
import Medicine from '../images/medicine.png';
import Weight from '../images/weight.png';
import { Link } from 'react-router-dom';
import Footer from './Footer';

const ContactUs = () => {
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

        <div style={{backgroundImage: `url(${medical})`, backgroundAttachment: "fixed"}} className='w-full h-full bg-cover'>
            {/* <div className='absolute inset-0 bg-[rgb(234,241,247)]/60 md:mt-60 mt-[300px] h-screen '></div> */}
            <div className='relative pt-20 pb-20 flex flex-col items-center justify-center  gap-20'>
               <div className='grid lg:grid-cols-2 md:grid-cols-1  items-center justify-center md:gap-20 gap-14'>
                  <div className='flex flex-col items-start justify-center gap-2 lg:w-[40vw] md:w-[58vw] sm:w-[80vw] lg:h-[32vh] md:h-[18vh] h-[20vh] bg-[rgb(246,246,247)] bg-opacity-90 rounded-md pl-4 shadow-black shadow-md'>
                     <p className='text-[rgb(12,113,195)] md:text-2xl text-2xl'><b>Contact Us</b></p>
                     <p className='text-[rgb(61,168,242)] text-xl '>(409) 333-1272</p>
                     <p className='text-[rgb(145,145,145)] text-xl'>For billing questions, please call <br className='md:hidden flex' /> <i className='text-[rgb(61,168,242)]'>409-291-4298</i></p>
                  </div>
                  <div className='flex flex-col items-start justify-center gap-2 lg:w-[30vw] md:w-[48vw] w-[85vw] lg:h-[30vh] md:h-[20vh] h-[20vh] md:pr-0 pr-3 bg-[rgb(246,246,247)] bg-opacity-90 rounded-md pl-4 shadow-black shadow-md'>
                     <p className='text-[rgb(12,113,195)] text-2xl'><b>Hours of Operation</b></p>
                     <p className='text-[rgb(111,111,111)] text-xl'><b>Monday to Friday:</b> <i>8am to 8pm</i></p>
                     <p className='text-[rgb(111,111,111)] text-xl'><b>Saturday and Sunday:</b> <i>9am to 5pm</i></p>
                  </div>
               </div>

                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 lg:w-[965px] md:w-[490px] w-[276px] lg:ml-0 md:ml-12 ml-9 items-center justify-center border-2 rounded-md border-[rgb(157,158,159)]  shadow-md shadow-black'>
                                             <div className='flex flex-col items-center justify-center border border-r-0 border-l-0 border-t-0 border-b-0'>
                                               <Link to="/Urgent-Care">
                                                 <div className='bg-[rgb(28,203,187)] md:w-40 w-[270px] md:h-16 h-20 flex items-center justify-center '>
                                                   <img src={heart} className='md:h-9 md:w-11 h-11 w-14 items-center' alt="" />
                                                  </div>
                                                  <div className='bg-[rgb(57,146,161)] md:w-40 w-[270px] md:h-16 h-20 flex items-center justify-center'>
                                                   <p className='text-white font-bold text-xl'>Urgent Care</p>
                                                  </div>
                                               </Link>
                                             </div>
                                             <div className='flex flex-col items-center justify-center border border-l-2 border-[rgb(44,179,180)] border-r-0 border-t-0 border-b-0'>
                                               <Link to="/X-ray">
                                                <div className='bg-[rgb(28,203,187)]  md:w-40 w-[270px] md:h-16 h-20 flex items-center justify-center '>
                                                   <img src={Xray} className='md:h-9 md:w-11 h-11 w-14 items-center' alt="" />
                                                 </div>
                                                 <div className='bg-[rgb(57,146,161)]  md:w-40 w-[270px] md:h-16 h-20 flex items-center justify-center'>
                                                   <p className='text-white font-bold text-xl'>X-Ray</p>
                                                 </div>
                                               </Link>
                                             </div>
                                             <div className='flex flex-col items-center justify-center border border-l-2 border-[rgb(44,179,180)] border-r-0 border-t-0 border-b-0'>
                                               <Link to="/Labs">
                                                 <div className='bg-[rgb(28,203,187)]  md:w-40 w-[270px] md:h-16 h-20 flex items-center justify-center '>
                                                   <img src={Labs} className='md:h-9 md:w-11 h-11 w-14 items-center' alt="" />
                                                 </div>
                                                 <div className='bg-[rgb(57,146,161)]  md:w-40 w-[270px] md:h-16 h-20 flex items-center justify-center'>
                                                  <p className='text-white font-bold text-xl'>Labs</p>
                                                 </div>
                                               </Link>
                                             </div>
                                             <div className='flex flex-col items-center justify-center border border-l-2 border-[rgb(44,179,180)] border-r-0 border-t-0 border-b-0'>
                                               <Link to="/Physical">
                                                 <div className='bg-[rgb(28,203,187)]  md:w-40 w-[270px] md:h-16 h-20 flex items-center justify-center '>
                                                   <img src={Physicals} className='md:h-9 md:w-11 h-11 w-14 items-center' alt="" />
                                                 </div>
                                                 <div className='bg-[rgb(57,146,161)]  md:w-40 w-[270px] md:h-16 h-20 flex items-center justify-center'>
                                                   <p className='text-white font-bold text-xl'>Physicals</p>
                                                 </div>
                                               </Link>
                                             </div>
                                             <div className='flex flex-col items-center justify-center border border-l-2 border-[rgb(44,179,180)] border-r-0 border-t-0 border-b-0'>
                                               <Link to="/Occupational-medcine">
                                                 <div className='bg-[rgb(28,203,187)]  md:w-40 w-[270px] md:h-16 h-20 flex items-center justify-center '>
                                                   <img src={Medicine} className='md:h-9 md:w-11 h-11 w-14 items-center' alt="" />
                                                  </div>
                                                  <div className='bg-[rgb(57,146,161)]  md:w-40 w-[270px] md:h-16 h-20 flex items-center justify-center'>
                                                   <p className='text-white font-bold text-center text-xl'>Occupational Medicine</p>
                                                  </div>
                                               </Link>
                                             </div>
                                             <div className='flex flex-col items-center justify-center border border-l-2 border-[rgb(44,179,180)] border-r-0  border-t-0 border-b-0'>
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

export default ContactUs