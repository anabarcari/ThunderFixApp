import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';
import Img1 from '../assets/imgs/Rev1.png';
import Img2 from '../assets/imgs/Rev6.png';
import Img3 from '../assets/imgs/Rev3.png';
import Img4 from '../assets/imgs/Rev5.png';
import Img5 from '../assets/imgs/Rev7.png';
import Img6 from '../assets/imgs/Rev2.png';

const imageUrls = [Img1, Img2, Img3, Img4, Img5, Img6];

const Feedbacks = () => {
  // Inline style objects
  const imageWrapperStyle = {
    borderRadius: '20px',
    padding: '1px',
    background: 'linear-gradient(45deg, #ff0000, #ff00ff)', // Optional: gradient background
    boxShadow: '0 0 10px #aaa6c3, 0 0 30px #000000, 0 0 35px #000000', // Neon shadow effect
    margin: '10px', // Optional: Adds some margin between images
  };

  const imageStyle = {
    borderRadius: '15px',
    boxShadow: '0 0 10px #aaa6c3, 0 0 30px #000000, 0 0 35px #000000', // Neon shadow effect
    width: '100%',
    height: 'auto', // Ensures images maintain aspect ratio
  };

  return (
    <>
      <motion.div variants={textVariant()}>
        <h2
          style={{
            textShadow: '0 0 10px #aaa6c3, 0 0 30px #000000, 0 0 35px #000000',
            fontSize: '4rem',
            fontWeight: 'bold',
            textAlign: 'center',
            margin: '20px 0',
          }}
        >
          Reviews
        </h2>
      </motion.div>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {imageUrls.map((url, index) => (
          <motion.div
            key={index}
            variants={fadeIn('up', 'spring', index * 0.5, 0.75)}
            style={imageWrapperStyle}
          >
            <img src={url} alt={`Review ${index + 1}`} style={imageStyle} />
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Feedbacks, "");
