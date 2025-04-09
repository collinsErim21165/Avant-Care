import { motion } from "framer-motion";
import firstImg from '../images/hospital-home.jpg';

const HomeSection = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
    <div className="fixed inset-0 z-0">
      <img
        src={firstImg}
        alt="background"
        className="w-full h-full object-cover"
      />
    </div>
  
    {/* Overlay */}
    <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
  
    {/* Content */}
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="relative z-20 flex items-center justify-center h-full px-6 md:px-12 lg:px-20 text-white text-center max-w-3xl mx-auto"
    >
      <div>
        <h1 className="text-3xl md:text-5xl font-bold leading-tight">
          Your Health, Our Priority
        </h1>
        <p className="mt-4 text-lg md:text-xl">
          Compassionate care, advanced technology, and a dedicated team to serve you.
        </p>
        <button className="mt-6 px-6 py-3 bg-[#37489E] hover:bg-[rgb(255,186,90)] transition duration-300 rounded-lg text-white font-semibold text-lg">
          Book an Appointment
        </button>
      </div>
    </motion.div>
  </div>
  );
};

export default HomeSection;