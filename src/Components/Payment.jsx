import React, { useEffect } from 'react'
import NavBar from './NavBar';
import paymentimg from '../images/payment-bg.jpg';
import Footer from './Footer'

const Payment = () => {
   useEffect(() => {
     window.scrollTo(0,0);
   },[])
  return (
    <div>
        <div>
            <NavBar/>
        </div>

        <div style={{backgroundImage: `url(${paymentimg})`}} className='h-80 w-full bg-no-repeat bg-cover bg-bottom md:mt-40 mt-52 flex flex-col items-center justify-center'>
          <div className='absolute inset-0 bg-[rgb(58,103,148)]/60 h-80  md:mt-40 mt-52'></div>
          <div className='relative flex flex-col items-center justify-center gap-2'>
           <p className='text-white text-3xl'>Make A Payment</p>
           <p className='text-white md:text-xl text-center'>Thank you for doing business with us. <br className='md:hidden flex' /> You will be contacted shortly!</p>
           <p className='text-white md:text-xl text-center'>For billing questions, please call <br className='md:hidden flex' /> <i className='text-[rgb(0,109,193)]'>409-291-4298</i></p>
           <button className='h-12 w-48 border-2 rounded-sm mt-4 text-xl border-white bg-[rgb(0,109,193)] text-white'>Make A Payment</button>
          </div>
        </div>
        
        <div>
           <Footer/>
        </div>
    </div>
  )
}

export default Payment