import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services2 } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import backgroundVideo from "../assets/video2.mp4";

const ServiceCard = ({ index, title, description }) => (
  <Tilt className="xs:w-[260px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", 0.2 * index, 0.75)}
      className="w-full p-[1px] rounded-[24px]"
      style={{
        background:
          "linear-gradient(180deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)",
        boxShadow:
          "0 0 22px rgba(0,0,0,0.85), 0 0 8px rgba(0,0,0,0.65)",
      }}
    >
      <div
        className="rounded-[24px] py-6 px-6 flex flex-col gap-6"
        style={{
          background: "rgba(15,15,15,0.55)",
          border: "1px solid rgba(255,255,255,0.06)",
          backdropFilter: "blur(6px)",
        }}
      >
        <h3 className="text-white text-[18px] font-semibold text-center">
          {title}
        </h3>

        <p className="text-white/80 text-[15px] text-center leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  </Tilt>
);

const Works = () => {
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
          Why Choose Thunder Fix Auto Hail Repair?
        </h2>
      </motion.div>

      {/* Video Frame */}
      <div
        className="mt-12 rounded-2xl p-[1px]"
        style={{
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)",
          boxShadow:
            "0 0 25px rgba(0,0,0,0.85), 0 0 10px rgba(0,0,0,0.7)",
        }}
      >
        <div
          className="rounded-2xl overflow-hidden"
          style={{
            background: "rgba(15,15,15,0.6)",
            border: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src={backgroundVideo} type="video/mp4" />
          </video>
        </div>
      </div>

      {/* Cards */}
      <div className="mt-16 flex flex-wrap gap-8 justify-center">
        {services2.map((service, index) => (
          <ServiceCard
            key={service.title}
            index={index}
            {...service}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");