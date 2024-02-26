// About.jsx
import React from "react";
import { Tilt } from 'react-tilt';
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";


const ServiceCard = ({ index, title, icon }) => (
 
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full orange-purple-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[250px] flex justify-evenly items-center flex-col"
        >
        
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  );


const About = () => {
  return (
    <>

      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>About</p>
        <h2 className={styles.sectionHeadText}style={{ textShadow: ' 0 0 10px #aaa6c3,  0 0 30px #000000, 0 0 35px #000000' }}>Thunder Fix Auto Hail Repair</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-hero text-[17px] max-w-3xl leading-[30px] bg-white p-3 rounded-lg shadow-lg backdrop-filter backdrop-blur-lg bg-opacity-15 text-container rounded-lg shadow-neon" style={{ textShadow: ' 0 0 10px #aaa6c3,  0 0 30px #000000, 0 0 35px #000000' }}
      >
        Thunder Fix Auto Hail Repair: Your top choice for expert auto hail damage repair using the innovative Paintless Dent Repair (PDR) method.
        Our skilled technicians specialize in PDR for all car panels, ensuring efficient, one-day completion. Trust Thunder Fix Auto Hail Repair for precision
        dent removal without paint, offering a cost-effective and time-saving solution. We take pride in our professional approach to restoring
        your vehicle to its pristine condition. We accept all car insurances and assist you seamlessly with negotiations. Choose Thunder Fix Auto Hail
        Repair for a reliable journey to restore your vehicle's aesthetic appeal.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
