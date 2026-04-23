import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

import Img1 from "../assets/imgs/lexus_before2.jpg";
import Img2 from "../assets/imgs/lexus_after.jpg";
import Img3 from "../assets/imgs/4.jpg";
import Img4 from "../assets/imgs/14.jpg";
import Img6 from "../assets/imgs/21.jpg";
import Img7 from "../assets/imgs/23.jpg";
import Img8 from "../assets/imgs/30.jpg";
import Img9 from "../assets/imgs/27.jpg";
import Img10 from "../assets/imgs/299.jpg";
import Img11 from "../assets/imgs/31.jpg";
import Img12 from "../assets/imgs/45.jpg";
import Img13 from "../assets/imgs/bmw_before.jpg";
import Img14 from "../assets/imgs/1.jpg";
import Img15 from "../assets/imgs/2.jpg";
import Img16 from "../assets/imgs/3.jpg";
import Img17 from "../assets/imgs/5.jpg";
import Img18 from "../assets/imgs/6.jpg";
import Img19 from "../assets/imgs/7.jpg";
import Img20 from "../assets/imgs/8.jpg";
import Img21 from "../assets/imgs/9.jpg";
import Img22 from "../assets/imgs/10.jpg";
import Img23 from "../assets/imgs/12.jpg";
import Img24 from "../assets/imgs/13.jpg";
import Img25 from "../assets/imgs/15.jpg";
import Img26 from "../assets/imgs/16.jpg";

import Carousel from "./Carousel";

const Tech = () => {
  const slides = [
    Img15, Img3, Img4, Img6, Img7, Img8, Img9, Img10,
    Img11, Img12, Img13, Img1, Img2, Img14, Img16, Img17,
    Img18, Img19, Img20, Img21, Img22, Img23, Img24, Img25, Img26
  ];

  return (
    <>
      <motion.div variants={textVariant()}>
        <h2
          className={`${styles.sectionHeadText} text-center`}
          style={{
            textShadow:
              "0 0 10px rgba(0,0,0,0.9), 0 0 25px rgba(0,0,0,0.95)",
          }}
        >
          Work Gallery
        </h2>
        <p className="text-white/70 text-center mt-3">
          Before & after hail damage repairs (PDR).
        </p>
      </motion.div>

      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-10 rounded-2xl p-[1px]"
        style={{
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0.03) 100%)",
          boxShadow:
            "0 0 25px rgba(0,0,0,0.85), 0 0 10px rgba(0,0,0,0.7)",
        }}
      >
        <div
          className="rounded-2xl p-3"
          style={{
            background: "rgba(15,15,15,0.55)",
            border: "1px solid rgba(255,255,255,0.06)",
            backdropFilter: "blur(6px)",
          }}
        >
          <Carousel slides={slides} />
        </div>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Tech, "photo");