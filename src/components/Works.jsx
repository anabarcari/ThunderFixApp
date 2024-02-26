import { Tilt } from 'react-tilt';
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services2 } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import backgroundVideo from "../assets/video2.mp4";
import React, { useRef, useState, useEffect } from "react";

const PlayIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="50px" height="50px">
    <path d="M8 5v14l11-7z" />
    <path d="M0 0h24v24H0z" fill="none" />
  </svg>
);

const PauseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="50px" height="50px">
    <path d="M6 5h4v14H6zm8 0h4v14h-4z" />
    <path d="M0 0h24v24H0z" fill="none" />
  </svg>
);

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
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isButtonVisible, setIsButtonVisible] = useState(true);

  const handleTogglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVideoClick = () => {
    setIsButtonVisible(!isButtonVisible);
  };

  useEffect(() => {
    let idleTimeout;

    const handleMouseMove = () => {
      if (!isButtonVisible) {
        setIsButtonVisible(true);
      }

      // Reset idle timeout
      clearTimeout(idleTimeout);

      // Set a new idle timeout (e.g., 5 seconds)
      idleTimeout = setTimeout(() => {
        setIsButtonVisible(false);
      }, 3000); // 5000 milliseconds = 5 seconds
    };

    // Add event listeners
    document.addEventListener("mousemove", handleMouseMove);

    // Clean up event listeners on component unmount
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(idleTimeout);
    };
  }, [isButtonVisible]);


  return (
    <>
      <motion.div variants={textVariant()}>
        
        <h2 className={styles.sectionHeadText} style={{ textShadow: ' 0 0 10px #aaa6c3,  0 0 30px #000000, 0 0 35px #000000' }}>Why Choose Thunder Fix Auto Hail Repair?</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        
        onClick={handleVideoClick}
      >
       
      </motion.p>
      <div className="video-container relative rounded-lg shadow-neon">
        <video ref={videoRef} autoPlay loop muted id="video" className="w-full h-full object-cover rounded-lg" onClick={handleVideoClick}> 
          <source src={backgroundVideo} type="video/mp4" />
        </video>
        {isButtonVisible && (
          <motion.button 
            onClick={handleTogglePlay} 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full"
            whileHover={{ opacity: 0.7 }}
          >
            {isPlaying ? <PauseIcon /> : <PlayIcon />}
          </motion.button>
        )}
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
