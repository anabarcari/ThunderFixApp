import React from 'react';
import { styles } from '../styles';
import bmw from '../assets/Thunderfix.png'; // Import your PNG image
import '../heroStyles.css';
import { motion } from 'framer-motion';
import { FiInstagram } from 'react-icons/fi';

const Hero = () => {
  const handleButtonClick = () => {
    // Replace this with the actual phone number
    window.location.href = 'tel:+18885030755';
  };

  return (
    <section className="relative w-full h-screen mx-auto bg-primary bg-cover bg-center bg-fixed">
      <div className={`absolute inset-0 max-w-7xl mx-auto ${styles.paddingX} flex flex-col items-center justify-center`}>
        <div className='flex flex-col justify-center items-center  xs:mt-[-8rem] md:mt-[-18.5rem] '>
          <img src={bmw} alt="Car Image" className="mb-1" style={{ maxWidth: '65%', height: 'auto' }} />
        </div>

        <div className="text-center mt-[20rem] xs:mt-[-5rem] md:mt-[-14rem] lg:mt-[-12rem] xl:mt-[-12rem] bg-white p-3 rounded-lg shadow-lg backdrop-filter backdrop-blur-lg bg-opacity-15 text-container rounded-lg shadow-neon ">
          {/* Adjusted the margin-top */}
          <h1 className={`${styles.heroHeadText} text-white`} style={{ textShadow: ' 0 0 10px #aaa6c3,  0 0 30px #000000, 0 0 35px #000000' }}>
            <span className='text-[white] '>WE CARE ABOUT YOUR CAR</span>
          </h1>
          <p className={`${styles.heroSubText} mt-0 text-white-100`} style={{ textShadow: ' 0 0 10px #aaa6c3,  0 0 30px #000000, 0 0 35px #000000' }}>
            After a heavy hailstorm, your vehicle may suffer from dents and damage. At Thunder Fix Auto Hail Repair, we specialize in preserving your vehicle's finish and value with our top-notch paintless dent repair, known as PDR. Thunder Fix Auto Hail Repair-Your satisfaction is our priority!
          </p>

          {/* Two buttons added */}
          <div className="flex mt-4 justify-center items-center">
            <button
              onClick={handleButtonClick}
              className="mr-4 bg-tertiary text-white px-4 py-2 rounded-lg transition duration-300 hover:purple"
            >
              Call Now
            </button>
            <a href="#contact">
              <button className="bg-tertiary text-white text-bold px-4 py-2 rounded-lg">Contact Us</button>
            </a>
          </div>

          {/* Instagram icon added */}
          <a className="flex justify-center items-center mt-4" href="https://www.instagram.com/thunderfixpdr/?igsh=MmdidG15MXU2NTVk" target="_blank" rel="noopener noreferrer">
            <FiInstagram className="text-white text-4xl mt-4 cursor-pointer " />
          </a>
        </div>
      </div>

      <div className='absolute xs:bottom-3 bottom-30 w-full flex justify-center items-center'>
        <a href="#about">
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
