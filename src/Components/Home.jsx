import React, { useEffect } from 'react';
import NavBar from './NavBar';
import medical from '../images/medical.png';
import { FaCircleArrowRight } from "react-icons/fa6";
import heart from '../images/heart.png';
import xray from '../images/x-ray.png';
import labs from '../images/labs.png';
import persons from '../images/physicals.png';
import medicine from '../images/medicine.png';
import weight from '../images/weight.png';
import news from '../images/news.png';
import news2 from '../images/news4.png';
import Footer from './Footer';
import CommentSection from './CommentSection';
import "../App.css"
import HomeSection from './HomeSection';
import '../App.css';


const Home = () => {

   useEffect(() => {
    window.scrollTo(0,0);
   }, [])


  const redirect = () => {
    window.location.href = '/About-us'
  }

  const redirectClick = () => {
    window.location.href = 'https://www.medicalnewstoday.com/articles/live-updates-coronavirus-covid-19#1';
  }

  const healthNews = () => {
    window.location.href = 'https://www.healthline.com/health-news';
  }

  const redirectClickTwo = () => {
    window.location.href = 'https://www.medicalnewstoday.com/articles/shifting-goalposts-research-in-the-time-of-the-coronavirus';
  }

  const healthNewsTwho = () => {
    window.location.href = 'https://www.medicalnewstoday.com/';
  }

  return (
    <div className="flex flex-col min-h-screen w-full">
  {/* Navbar */}
  <div>
    <NavBar className='fixed'/>
  </div>

  <div className=''>
    <HomeSection/>
  </div>

  <div className='h-full w-full flex md:flex-row flex-col items-center justify-between  bg-white '>
    <div className='md:w-[50%]'>
      <img src={medical} alt="" />
    </div>
    <div className='flex flex-col items-start justify-between md:w-[50%]  md:pl-0 pl-4  md:pb-0 pb-8 gap-4'>
      <h1 className='md:text-4xl text-2xl font-bold text-[#37489E]'>We're Changing the <br className='md:flex hidden' /> Way Healthcare is <br className='md:flex hidden' /> Delivered</h1>
      <p className='text-xl text-[rgb(151,151,151)] md:w-[380px] w-[360px]'>For Minor emergencies that need Major  attention, Beaumont Urgent Care is here to give  you the attention you need and deserve. Injuries  and illnesses, school or work physicals, X-ray and  lab on site ,no appointment needed. Insurance or  cash pay options.</p>
      <button onClick={redirect} className='bg-[#37489E] group hover:bg-[rgb(255,186,90)] hover:ease-in-out hover:transition hover:duration-300 rounded-md  flex flex-row items-center  justify-center gap-4 group transition duration-300 ease-in-out text-white p-3 w-36 hover:w-40'>
        Read More
        <span className='  items-center group-hover:block hidden'>
        <FaCircleArrowRight size={20}/>
        </span>
     </button>
    </div>

  </div>

  <div className=' h-full  bg-[#081B45] flex flex-col items-center justify-center flex-wrap gap-4 pt-12 pb-12 '>
    <div className='flex md:flex-row flex-col items-center justify-center md:flex-wrap gap-8   '>
      <div className='bg-white h-72 w-[300px] flex flex-col items-center justify-center gap-3 px-4 rounded-xl'>
        <img src={heart} className='h-10 w-10'  alt="" />
        <h1 className='font-bold text-2xl text-[rgb(121,133,240)]'>Urgent Care</h1>
        <p className='text-center text-[rgb(151,151,151)]'>Need to see a specialist immediately? Our hours are Monday to Friday 8am to 8pm, and Saturday-Sunday 9am to 5pm</p>
      </div>
      <div className='bg-white h-72 w-[300px] flex flex-col items-center justify-center gap-3 px-4 rounded-xl'>
        <img src={xray} className='h-10 w-10' alt="" />
        <h1 className='font-bold text-2xl text-[rgb(121,133,240)]'>X-Ray</h1>
        <p className='text-center text-[rgb(151,151,151)]'>Walk-In Today for a fast, convenient Imaging Test. Beaumont Urgent Care is outfitted with a state-of-the-art digital x-ray for a more comprehensive healthcare experience.</p>
      </div>
      <div className='bg-white h-72 w-[300px] flex flex-col items-center justify-center gap-3 px-4 rounded-xl'>
        <img src={labs} className='h-10 w-10'  alt="" />
        <h1 className='font-bold text-2xl text-[rgb(121,133,240)]'>Labs</h1>
        <p className='text-center text-[rgb(151,151,151)]'>Beaumont Urgent Care on-site lab testing is fast, convenient and affordable. We offer many tests including Covid-19, Flu, Strep, Urinalysis, Mono and STD testing with results usually in just a few minutes.</p>
      </div>
      <div className='bg-white h-72 w-[300px] flex flex-col items-center justify-center gap-3 px-4 rounded-xl'>
        <img src={persons} className='h-10 w-10' alt="" />
        <h1 className='font-bold text-2xl text-[rgb(121,133,240)]'>Physicals</h1>
        <p className='text-center text-[rgb(151,151,151)]'>Sports/School Physicals- If your school or sports team is requiring a physical prior to activity, Beaumont Urgent Care is here to help.</p>
      </div>
      <div className='bg-white h-72 w-[300px] flex flex-col items-center justify-center gap-3 px-4 rounded-xl'>
        <img src={medicine} className='h-10 w-10'   alt="" />
        <h1 className='font-bold text-2xl text-[rgb(121,133,240)]'>Occupational Medicine</h1>
        <p className='text-center text-[rgb(151,151,151)]'>Beaumont Urgent Care is a full-service occupational health provider. We offer many services to local employers to help improve employee health and safety.</p>
      </div>
      <div className='bg-white h-72 w-[300px] flex flex-col items-center justify-center gap-3 px-4 rounded-xl'>
        <img src={weight} className='h-10 w-10' alt="" />
        <h1 className='font-bold text-2xl text-[rgb(121,133,240)]'>Weight Loss</h1>
        <p className='text-center text-[rgb(151,151,151)]'>Beaumont Urgent Care offers the most reliable tools for safe and effective weight loss through physical exams, medical testing, and prescription support.</p>
      </div>
    </div>
  </div>

  <div className='bg-[rgb(247,247,247)] py-8 '>
     <h1 className='text-center text-3xl pb-6 font-bold text-[rgb(12,113,195)]'>LATEST NEWS</h1>
     <div className='flex md:flex-row flex-col items-center justify-center gap-6'>
     <div className='flex flex-col items-center justify-center gap-5  shadow w-80 px-8 py-8 bg-white'>
      <img src={news} className='' alt="" />
      <h1 className='text-center text-xl text-[rgb(121,133,240)] '>Shifting goalposts: Research in the time of the coronavirus</h1>
      <p className='text-center text-[rgb(151,151,151)]'>The COVID-19 pandemic has turned life, travel, and the economy upside down all around the world.</p>
      <button onClick={redirectClickTwo} className='h-12 w-28 group transition-all duration-200 ease-in-out delay-200 flex flex-row items-center justify-center   gap-2 hover:w-36 bg-red-600 text-white rounded-sm'>Click Here
      <span className='group-hover:opacity-100 opacity-0 scale-90 group-hover:scale-100 transition-all ease-in duration-200 delay-200 text-white'>
         <FaCircleArrowRight  size={20}/>
       </span>
      </button>
      <button onClick={healthNewsTwho} className='h-16 w-44 group rounded-sm ease-in transition-all duration-200 delay-200 flex flex-row items-center justify-center gap-1 hover:w-52 bg-blue-900 text-white'>Read All Medical  News
       <span className='group-hover:opacity-100 opacity-0 hover:scale-100 scale-90 transition-all ease-in duration-200 text-white'>
         <FaCircleArrowRight  size={20}/>
       </span>
       </button>
     </div>
     <div className='flex flex-col items-center justify-center gap-5  shadow w-80 px-8 py-12 bg-white'>
     <img src={news2}  alt="" />
      <h1 className='text-center text-xl text-[rgb(121,133,240)] '>Here Are the States Where COVID-19 Is Increasing</h1>
      <p className='text-center text-[rgb(151,151,151)]'>New COVID-19 cases are declining again this week as death remain above 1,000 per day</p>
      <button onClick={redirectClick} className='h-12 w-28 text-center group flex flex-row items-center justify-center ease-in transition-all duration-200 delay-200  gap-2 hover:w-36 bg-red-600 text-white rounded-sm'>Click Here
      <span className='group-hover:opacity-100 opacity-0 scale-90 hover:scale-100 transition-all ease-in duration-200 delay-200 text-white'>
         <FaCircleArrowRight  size={20}/>
       </span>
      </button>
      <button onClick={healthNews} className='h-16 w-44 group rounded-sm  transition-all duration-200 ease-in delay-200  flex flex-row items-center justify-center gap-1 hover:w-52 bg-blue-900 text-white'>Read All Medical  News
       <span className='group-hover:opacity-100 group-hover:scale-100 opacity-0 scale-90 transition-all ease duration-200 delay-200  text-white'>
         <FaCircleArrowRight  size={20}/>
       </span>
       </button>
     </div>
     </div>
  </div>

  <div className='h-20 w-full bg-red-800 text-white flex items-center justify-center '>
    <h1 className='text-2xl text-center '>WHAT OUR PARENTS SAY ABOUT US</h1>
  </div>

  <div className=''>
     <CommentSection/>
  </div>

  <div className=''>
    <Footer/>
  </div>
</div>
  )
}

export default Home