import React from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

import Img1 from "../assets/imgs/Rev1.png";
import Img2 from "../assets/imgs/Rev6.png";
import Img3 from "../assets/imgs/Rev3.png";
import Img4 from "../assets/imgs/Rev5.png";
import Img5 from "../assets/imgs/Rev7.png";
import Img6 from "../assets/imgs/Rev2.png";

const imageUrls = [Img1, Img2, Img3, Img4, Img5, Img6];

const Feedbacks = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2
          className="text-center font-bold"
          style={{
            fontSize: "3rem",
            margin: "20px 0 10px",
            textShadow:
              "0 0 10px rgba(0,0,0,0.9), 0 0 25px rgba(0,0,0,0.95)",
          }}
        >
          Reviews
        </h2>
      </motion.div>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {imageUrls.map((url, index) => (
          <motion.div
            key={index}
            variants={fadeIn("up", "spring", index * 0.15, 0.75)}
            className="rounded-2xl p-[1px]"
            style={{
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0.03) 100%)",
              boxShadow:
                "0 0 22px rgba(0,0,0,0.85), 0 0 8px rgba(0,0,0,0.65)",
            }}
          >
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                backgroundColor: "rgba(15,15,15,0.55)",
                border: "1px solid rgba(255,255,255,0.06)",
                backdropFilter: "blur(6px)",
              }}
            >
              <img
                src={url}
                alt={`Review ${index + 1}`}
                className="w-full h-auto block"
                style={{
                  // makes screenshots look cleaner
                  filter: "contrast(1.02) brightness(0.98)",
                }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Feedbacks, "");