import React, { useEffect } from 'react';
import NavBar from './NavBar';
import PhysicalOne from '../images/Testing-two.jpeg'
import heart from '../images/heart.png';
import X_ray from '../images/x-ray.png';
import Labs from '../images/labs.png';
import PhysicalS from '../images/physicals.png';
import Medicine from '../images/medicine.png';
import Weight from '../images/weight.png';
import { Link } from 'react-router-dom';
import PhysicalTwo from '../images/Physical-testing-two.avif'
import Footer from './Footer';

const Physicals = () => {
   useEffect(() => {
     window.scrollTo(0,0);
   }, [])
  return (
    <div>
        <div>
            <NavBar/>
        </div>
        
         <div style={{backgroundImage: `url(${PhysicalOne})`}} className=' bg-center bg-contain  bg-no-repeat md:h-52 h-72 w-full mt-44 flex justify-center items-center'>
                            <div className='absolute inset-0 bg-transparent/40 md:h-56 h-64 md:mt-[170px] mt-[210px] '></div>
                            <div className='relative flex flex-col items-center justify-center'>
                                <p className='text-white text-3xl'><b>Physicals</b></p>
                                <p className='text-white text-lg text-center'>Comprehensive physical testing</p>
                            </div>
         </div>

         <div className='md:h-20 h-28 w-full bg-[rgb(6,70,137)]  '>
            <p className='text-white text-center text-2xl  pt-5'> Changing the way healthcare is <br className='md:hidden block' /> delivered</p>
        </div>

         <div className='relative bg-center bg-cover bg-no-repeat min-h-screen pt-20 pb-20 w-full md:pl-14 pl-2   flex flex-col items-center justify-center' style={{backgroundImage: `url(${PhysicalTwo})`, backgroundAttachment: "fixed" }}>
                                    <div  className="absolute inset-0 bg-blue-400/20 backdrop-blur-sm -mt-2 "></div>
                                    <div className='relative flex flex-col gap-20'>
                                      <div className='flex md:flex-row md:flex-wrap flex-col items-center justify-center gap-20'>
                                       <div className='md:w-[450px] w-[350px] bg-[rgb(247,248,249)] px-4 py-4  shadow-md rounded-md shadow-black'>
                                         <h3 className='text-[rgb(12,113,195)] text-2xl font-bold pb-3'>Physicals</h3>
                                         <p className='text-[rgb(158,159,159)]'>Sports/School Physicals- If your school or sports team is requiring a physical prior to activity, Beaumont Urgent Care is here to help. Physical exams are important as children age and develop to make sure they aren’t at serious risk for injury. They assess a child’s health to ensure that they are physically fit to go to school or participate in athletic activities. We also provide many common immunizations including yearly Flu vaccine.</p>
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
                                            <img src={PhysicalS} className='md:h-9 md:w-11 h-11 w-14 items-center' alt="" />
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

export default Physicals