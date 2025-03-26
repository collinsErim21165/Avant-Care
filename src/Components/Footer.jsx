import React from 'react'
import avant from '../images/avant_care.png';
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='flex flex-col '>
    <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 items-start justify-center   bg-[rgb(9,71,153)] md:gap-6 gap-6  pb-5 px-5'>
        <div className='h-32 rounded-md bg-white mt-5 pt-4 ml-3'>
            <img src={avant} className='h-24 w-60' alt="" />
        </div>
        <div className=''>
            <h3 className='text-[rgb(0,152,163)] font-bold text-xl py-3'>MENU</h3>
            <Link to='/' className='flex flex-row items-center justify-start gap-3 text-white'><FaArrowRight /> Home</Link>
            <Link to='/About-us' className='flex flex-row items-center justify-start gap-3 text-white'><FaArrowRight /> About</Link>
            <Link to='/Contact-us' className='flex flex-row items-center justify-start gap-3 text-white'><FaArrowRight /> Contact</Link>
            <Link to='/Urgent-Care' className='flex flex-row items-center justify-start gap-3 text-white'><FaArrowRight /> Urgent Care</Link>
            <Link to='/X-ray' className='flex flex-row items-center justify-start gap-3 text-white'><FaArrowRight /> X-Ray</Link>
            <Link to='/Occupational-medcine' className='flex flex-row items-center justify-start gap-3 text-white'><FaArrowRight /> Occupational Medicine</Link>
            <Link to='/Labs' className='flex flex-row items-center justify-start gap-3 text-white'><FaArrowRight /> Labs</Link>
            <Link to='/Physical' className='flex flex-row items-center justify-start gap-3 text-white'><FaArrowRight /> Physicals</Link>
            <Link to='/Weight-loss' className='flex flex-row items-center justify-start gap-3 text-white'><FaArrowRight /> weight Loss</Link>
        </div>
        <div>
            <h3 className='text-[rgb(0,152,163)] font-bold text-xl py-3'>CONTACT</h3>
            <p className='flex flex-row items-start justify-start gap-3 text-white'><FaLocationDot />  3650 N. Major Dr. Suite A <br /> Beaumont, TX 77713</p>
            <p className='flex flex-row items-center justify-start gap-3 text-white'><FaPhoneAlt /> 409-333-1372</p>
        </div>
        {/* Google Map */}
        <div className=''>
          <h3 className="text-[rgb(0,152,163)] font-bold text-xl py-3">VISIT US</h3>
          <iframe
            title="Google Map Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.9589737941983!2d3.3613455!3d6.526865900000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8db5a62a8b39%3A0x48107a835551d8ae!2s19%20Igbarere%20St%2C%20Fadeyi%2C%20Lagos%20102215%2C%20Lagos%2C%20Nigeria!5e0!3m2!1sen!2sus!4v1738926806571!5m2!1sen!2sus"
            width="250"
            height="200"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
    </div>
     <div >
        <p className='text-center py-1 bg-[rgb(0,45,96)] text-white'>Copyright 2025 Avant Care</p>
     </div>
    </div>
  )
}

export default Footer