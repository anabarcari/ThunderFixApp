import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const Feedbacks = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText} style={{ textShadow: ' 0 0 10px #aaa6c3,  0 0 30px #000000, 0 0 35px #000000' }}>
          Questions & Answers 
        </h2>
      </motion.div>
      <section id="faq" className="container relative mx-auto py-15 px-2">

        <div className="my-6">
        <div className="rounded-t-2xl bg-gradient-to-r from-[black] to-[#46404E] w-full cursor-pointer select-none border-2 border-blue-600/30 px-4 py-4 text-gray-100 transition duration-300 hover:border-purple-600/80 hover:text-white">
            <h4 className="text-lg font-bold">Is PDR safe for my car?</h4>
          </div>
          <div className="inline-flex w-full rounded-b-2xl border-x-2 border-b-2 border-dashed border-blue-600/30 bg-third bg-cover bg-center px-4 py-4 text-white-800 " >
            <h5 className="text-white text-[16px]  bg-white p-3 rounded-lg shadow-lg backdrop-filter backdrop-blur-lg bg-opacity-0 text-container">
              Absolutely!
              <br />
              We take pride in our professional approach to restoring your vehicle to its pre-hail condition.

            </h5>
          </div>
        </div>

        <div className="my-8">
        <div className="rounded-t-2xl bg-gradient-to-r from-[black] to-[#46404E] w-full cursor-pointer select-none border-2 border-blue-600/30 px-4 py-4 text-gray-100 transition duration-300 hover:border-purple-600/80 hover:text-white">
            <h4 className="text-lg font-bold">Will my car retain its value after repair?</h4>
          </div>
          <div className="inline-flex w-full rounded-b-2xl border-x-2 border-b-2 border-dashed border-blue-600/30 bg-third bg-cover bg-center px-4 py-4 text-white-800 " >
            <h5 className="text-white text-[16px]  bg-white p-3 rounded-lg shadow-lg backdrop-filter backdrop-blur-lg bg-opacity-0 text-container">
            Yes! After our repairs, you can rest assured that your vehicle's value will be as it was before the hail damage. </h5>
          </div>
        </div>

        <div className="my-8">
          <div className="rounded-t-2xl bg-gradient-to-r from-[black] to-[#46404E] w-full cursor-pointer select-none border-2 border-blue-600/30 px-4 py-4 text-gray-100 transition duration-300 hover:border-purple-600/80 hover:text-white">
            <h4 className="text-lg font-bold">Is there a warranty on your PDR services?</h4>
          </div>
          <div className="inline-flex w-full rounded-b-2xl border-x-2 border-b-2 border-dashed border-blue-600/30 bg-third bg-cover bg-center px-4 py-4 text-white-800 " >
            <h5 className="text-white text-[16px]  bg-white p-3 rounded-lg shadow-lg backdrop-filter backdrop-blur-lg bg-opacity-0 text-container">
            Absolutely! We stand by the quality of our work, and every PDR service is backed by our satisfaction guarantee.
              <br />
              Our repairs come with a warranty to provide you with peace of mind regarding the longevity and durability of our work.
            </h5>
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionWrapper(Feedbacks, "");
