import { Tilt } from 'react-tilt';
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services2 } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import backgroundVideo from "../assets/video2.mp4";
import React, { useRef, useState, useEffect } from "react";



const ServiceCard = ({ index, title, description }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      className="w-full orange-purple-gradient p-[1px] rounded-[25px] shadow-card" 
      
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-sec bg-cover bg-center rounded-[30px] py-5 px-12 min-h-[50px] flex justify-evenly items-center flex-col "style={{ height: "300px" }}
      >
        
        <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
        <h4 className="text-white text-[20px] text-center bg-white p-3 rounded-lg shadow-lg backdrop-filter backdrop-blur-lg bg-opacity-0 text-container">{description}</h4>
      </div>
    </motion.div>
  </Tilt>
);

const Works = () => {
  

  return (
    <>
      <motion.div variants={textVariant()}>
        
        <h2 className={styles.sectionHeadText} style={{ textShadow: ' 0 0 10px #aaa6c3,  0 0 30px #000000, 0 0 35px #000000' }}>Why Choose Thunder Fix Auto Hail Repair?</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        
        
      >
       
      </motion.p>
      <div className="video-container relative rounded-lg shadow-neon">
        <video autoPlay loop muted playsInline id="video" className="w-full h-full object-cover rounded-lg" > 
          <source src={backgroundVideo} type="video/mp4" />
        </video>
        
      </div>
      <div className="mt-20 flex flex-wrap gap-10">
        {services2.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
