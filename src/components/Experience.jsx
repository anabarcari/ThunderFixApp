import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "rgba(15,15,15,0.6)",
        color: "#fff",
        border: "1px solid rgba(255,255,255,0.06)",
        boxShadow: "0 0 20px rgba(0,0,0,0.8)",
        borderRadius: "16px",
      }}
      contentArrowStyle={{
        borderRight: "7px solid rgba(15,15,15,0.6)",
      }}
      date={experience.date}
      dateClassName="text-white"
      iconStyle={{
        background: "#111111",
        boxShadow: "0 0 15px rgba(0,0,0,0.8)",
      }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt=""
            className="w-[60%] h-[60%] object-contain opacity-80"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[22px] font-bold">
          {experience.title}
        </h3>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={index}
            className="text-gray-300 text-[14px] pl-1 tracking-wide"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
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
          Repair Process
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline
          lineColor="rgba(255,255,255,0.1)"
        >
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={index}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");