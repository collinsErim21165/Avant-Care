import React, { useEffect } from 'react'
import NavBar from './NavBar'
import heart from '../images/heart.png';
import Xray from '../images/x-ray.png';
import Labs from '../images/labs.png';
import Physicals from '../images/physicals.png';
import Medicine from '../images/medicine.png';
import Weight from '../images/weight.png';
import Footer from '../Components/Footer';

const Services = () => {
    useEffect(() => {
        window.scrollTo(0,0);
    }, [])
  return (
    <div>
        <div>
            <NavBar/>
        </div>

        <div className='flex flex-col items-center justify-center bg-[rgb(8,28,70)] mt-44 py-14'>
            <h1 className='text-4xl font-bold text-white pb-7'>Our Services</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 md:px-20 px-10'>
                <div className='bg-white flex flex-col items-center justify-center gap-3 h-[280px] w-[300px] rounded-lg'>
                    <img src={heart} className='h-10 w-10' alt="" />
                    <h3 className='text-[rgb(9,81,163)] text-xl font-bold'>Urgent Care</h3>
                    <p className='text-center px-8 text-[rgb(134,134,134)]'>Need to see a specialist immediately? Our hours are Monday to Friday 8am to 8pm, and Saturday-Sunday 9am to 5pm</p>
                </div>
                <div  className='bg-white flex flex-col items-center justify-center gap-3 h-[280px] w-[300px] rounded-lg'>
                    <img src={Xray} className='h-10 w-10' alt="" />
                    <h3 className='text-[rgb(9,81,163)] text-xl font-bold'>X-Ray</h3>
                    <p className='text-center px-6 text-[rgb(134,134,134)]'>Walk-In Today for a fast, convenient Imaging Test. Beaumont Urgent Care is outfitted with a state-of-the-art digital x-ray for a more comprehensive healthcare experience.</p>
                </div>
                <div  className='bg-white flex flex-col items-center justify-center gap-3 h-[280px] w-[300px] rounded-lg'>
                    <img src={Labs} className='h-10 w-10' alt="" />
                    <h3 className='text-[rgb(9,81,163)] text-xl font-bold'>Labs</h3>
                    <p className='text-center px-5 text-[rgb(134,134,134)]'>Beaumont Urgent Care on-site lab testing is fast, convenient and affordable. We offer many tests including Covid-19, Flu, Strep, Urinalysis, Mono and STD testing with results usually in just a few minutes.</p>
                </div>
                <div  className='bg-white flex flex-col items-center justify-center gap-3 h-[280px] w-[300px] rounded-lg'>
                    <img src={Physicals} className='h-10 w-10' alt="" />
                    <h3 className='text-[rgb(9,81,163)] text-xl font-bold'>Physicals</h3>
                    <p className='text-center px-8 text-[rgb(134,134,134)]'>Sports/School Physicals- If your school or sports team is requiring a physical prior to activity, Beaumont Urgent Care is here to help.</p>
                </div>
                <div  className='bg-white flex flex-col items-center justify-center gap-3 h-[280px] w-[300px] rounded-lg'>
                    <img src={Medicine} className='h-10 w-10' alt="" />
                    <h3 className='text-[rgb(9,81,163)] text-xl font-bold'>Occupational Medicine</h3>
                    <p className='text-center px-8 text-[rgb(134,134,134)]'>Beaumont Urgent Care is a full-service occupational health provider. We offer many services to local employers to help improve employee health and safety.</p>
                </div>
                <div  className='bg-white flex flex-col items-center justify-center gap-3 h-[280px] w-[300px] rounded-lg'>
                    <img src={Weight} className='h-10 w-10'  alt="" />
                    <h3 className='text-[rgb(9,81,163)] text-xl font-bold'>Weight Loss</h3>
                    <p className='text-center px-8 text-[rgb(134,134,134)]'>Beaumont Urgent Care offers the most reliable tools for safe and effective weight loss through physical exams, medical testing, and prescription support.</p>
                </div>
            </div>
        </div>

        <div>
            <Footer/>
        </div>
    </div>
  )
}

export default Services