import React, { useEffect } from 'react'
import NavBar from './NavBar'
import LabOne from '../images/Labs-one.jpg';
import weight from '../images/Labs-two.jpeg';
import heart from '../images/heart.png';
import X_ray from '../images/x-ray.png';
import LabS from '../images/labs.png';
import Physicals from '../images/physicals.png';
import Medicine from '../images/medicine.png';
import Weight from '../images/weight.png';
import { Link } from 'react-router-dom';
import Footer from './Footer';

const Labs = () => {
   useEffect(() => {
     window.scrollTo(0,0);
   },[])
  return (
    <div>
        <div>
            <NavBar/>
        </div>
        
        <div style={{backgroundImage: `url(${LabOne})`, backgroundAttachment: "fixed"}} className='bg-cover  md:h-48 h-60 w-full mt-44 flex flex-col  items-center justify-center'>
                    <div className='absolute inset-0 bg-transparent/10 md:h-52 h-64 mt-[175px]'></div>
                    <div className='relative flex flex-col items-center justify-center'>
                        <p className='text-3xl text-white'><b>Labs</b></p>
                        <p className='text-xl text-white'>Convenient and fast testing</p>
                    </div>
        </div>

        <div className='md:h-20 h-28 w-full bg-[rgb(6,70,137)]  '>
            <p className='text-white text-center text-2xl  pt-5'> Changing the way healthcare is <br className='md:hidden block' /> delivered</p>
        </div>

         <div className='relative md:bg-cover bg-center bg-cover bg-no-repeat min-h-screen pt-20 pb-20 w-full md:pl-14 pl-2   flex flex-col items-center justify-center' style={{backgroundImage: `url(${weight})`, backgroundAttachment: "fixed" }}>
                                             <div  className="absolute inset-0 bg-blue-400/20 backdrop-blur-sm -mt-2 "></div>
                                             <div className='relative flex flex-col gap-20'>
                                               <div className='flex md:flex-row md:flex-wrap flex-col items-center justify-center gap-20'>
                                                <div className='md:w-[450px] w-[350px] bg-[rgb(247,248,249)] px-4 py-4  shadow-md rounded-md shadow-black'>
                                                  <h3 className='text-[rgb(12,113,195)] text-2xl font-bold pb-3'>Labs</h3>
                                                  <p className='text-[rgb(158,159,159)]'>Beaumont Urgent Care on-site lab testing is fast, convenient and affordable. We offer many tests including Covid-19, Flu, Strep, Urinalysis, Mono and STD testing with results usually in just a few minutes.</p>
                                                </div>
                                                <div className='bg-[rgb(11,128,191)] md:w-[400px] w-[350px]  md:h-36 h-40 px-6 rounded-b-md pt-3 shadow-lg shadow-black'>
                                                  <h3 className='text-white font-bold text-2xl'>Contact Us</h3>
                                                  <p className='text-white '> Have any questions? Contact us below and we’ll get back to you as soon as we can. For immediate assistance, call us at <em className='text-[rgb(15,248,252)] md:pl-3 md:pt-0 pt-6  text-xl'>(409) 333-1272</em></p>
                                                </div>
                                               </div>
                                 
                                             <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 lg:w-full md:w-[490px] w-[276px] lg:ml-0 md:ml-36 ml-9 items-center justify-center border-2 rounded-md border-[rgb(157,158,159)]  shadow-md shadow-black'>
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
                                                     <img src={X_ray} className='md:h-9 md:w-11 h-11 w-14 items-center' alt="" />
                                                   </div>
                                                   <div className='bg-[rgb(57,146,161)]  md:w-40 w-[270px] md:h-16 h-20 flex items-center justify-center'>
                                                     <p className='text-white font-bold text-xl'>X-Ray</p>
                                                   </div>
                                                 </Link>
                                               </div>
                                               <div className='flex flex-col items-center justify-center border border-l-2 border-[rgb(44,179,180)] border-r-0 border-t-0 border-b-0'>
                                                 <Link to="/Labs">
                                                   <div className='bg-[rgb(28,203,187)]  md:w-40 w-[270px] md:h-16 h-20 flex items-center justify-center '>
                                                     <img src={LabS} className='md:h-9 md:w-11 h-11 w-14 items-center' alt="" />
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

export default Labs