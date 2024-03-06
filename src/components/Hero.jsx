import React from 'react';
import { styles } from '../styles';
import bmw from '../assets/Thunderfix.png';
import '../heroStyles.css';
import { FiInstagram } from 'react-icons/fi';

const Hero = () => {
  return (
    <section className="hero-container" style={{ overflow: 'auto', height: '100vh' }}>
      <div className="relative w-full h-full bg-primary bg-top bg-contain md:bg-cover sm:bg-fixed bg-no-repeat z-0">
        <div className={`relative inset-0 max-w-7xl mx-auto ${styles.paddingX} flex flex-col items-center justify-center z-0`}>
          <img src={bmw} alt="BMW" className="p-15 mt-[38px] md:mt-[-59px] w-76 w-auto h-56 mx-auto sm:h-82 lg:h-96 xl:h-[500px] z-0" />
          <div className="text-center bg-white p-5 rounded-lg shadow-lg backdrop-filter backdrop-blur-lg bg-opacity-15 text-container rounded-lg shadow-neon mt-[-40px] md:mt-[-150px] z-0 ">
            <h1 className={`${styles.heroHeadText} text-white`} style={{ textShadow: '0 0 10px #aaa6c3, 0 0 30px #000000, 0 0 35px #000000' }}>
              <span className='text-white'>WE CARE ABOUT YOUR CAR</span>
            </h1>
            <p className={`${styles.heroSubText} mt-4 text-white-100`} style={{ textShadow: '0 0 10px #aaa6c3, 0 0 30px #000000, 0 0 35px #000000' }}>
              After a heavy hailstorm, your vehicle may suffer from dents and damage. At Thunder Fix Auto Hail Repair, we specialize in preserving your vehicle's finish and value with our top-notch paintless dent repair, known as PDR. Thunder Fix Auto Hail Repair-Your satisfaction is our priority!
            </p>
            <div className="flex mt-4 justify-center items-center">
              <a href="tel:+18885030755" className="mr-4 bg-tertiary text-white px-4 py-2 rounded-lg transition duration-300 hover:bg-purple-600">
                Call Now
              </a>
              <a href="#contact">
                <button className="bg-tertiary text-white text-bold px-4 py-2 rounded-lg">Contact Us</button>
              </a>
            </div>
            <a className="flex justify-center items-center mt-4" href="https://www.instagram.com/thunderfixpdr/?igsh=MmdidG15MXU2NTVk" target="_blank" rel="noopener noreferrer">
              <FiInstagram className="text-white text-4xl mt-4 cursor-pointer" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
