import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';
import Img1 from '../assets/imgs/lexus_before2.jpg';
import Img2 from '../assets/imgs/lexus_after.jpg';
import Img3 from '../assets/imgs/4.jpg';
import Img4 from '../assets/imgs/14.jpg';
import Img5 from '../assets/imgs/11.jpg';
import Img6 from '../assets/imgs/21.jpg';
import Img7 from '../assets/imgs/23.jpg';
import Img8 from '../assets/imgs/30.jpg';
import Img9 from '../assets/imgs/27.jpg';
import Img10 from '../assets/imgs/299.jpg';
import Img11 from '../assets/imgs/31.jpg';
import Img12 from '../assets/imgs/45.jpg';
import Img13 from '../assets/imgs/bmw_before.jpg';
import Carousel from './Carousel';

const Tech = () => {
  const slides = [ Img3, Img4, Img5, Img6, Img7, Img8, Img9, Img10, Img11, Img12, Img13, Img1, Img2];
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}style={{ textShadow: ' 0 0 10px #aaa6c3,  0 0 30px #000000, 0 0 35px #000000' }}>Testimonials</h2>
      </motion.div>
      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-hero text-[17px] max-w-3xl leading-[30px]"
      >
        {/* Add your testimonial content here */}
      </motion.p>

      <div className='relative group'>
      <div className="rounded-lg shadow-neon">
        <Carousel slides={slides} />
      </div>
    </div>
    </>
  );
};

export default SectionWrapper(Tech, 'photo');
