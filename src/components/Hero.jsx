
import React from 'react';
import { styles } from '../styles';
import bmw from '../assets/Thunderfix.png';
import '../heroStyles.css';

import { FiInstagram } from 'react-icons/fi';
import { FaMapMarkerAlt, FaFacebookF } from 'react-icons/fa';

const Hero = () => {
  const locations = [
    {
      name: 'Waterloo Location',
      addressLine1: '1328 La Porte Rd',
      addressLine2: 'Waterloo, IA 50702',
      mapUrl: 'https://maps.app.goo.gl/PwYNbYN5abLT2r4h9',
    },
    {
      name: 'Lauderdale Location',
      addressLine1: '2520 Larpenteur Ave W',
      addressLine2: 'Lauderdale, MN 55113',
      mapUrl: 'https://maps.app.goo.gl/9uTXQA3eHpta1Mby5',
    },
  ];

  return (
    <section className="hero-container min-h-screen overflow-y-auto">
      <div className="relative min-h-screen w-full bg-primary bg-top bg-contain bg-no-repeat sm:bg-fixed md:bg-cover">
        <div
          className={`
            relative mx-auto flex min-h-screen w-full max-w-7xl
            flex-col items-center justify-center
            ${styles.paddingX}
            py-8
          `}
        >
          {/* Main image */}
          <img
            src={bmw}
            alt="Thunder Fix Auto Hail Repair"
            className="
              relative z-0 mx-auto
              mt-6 h-56 w-auto object-contain
              sm:h-72
              md:-mt-12 md:h-80
              lg:h-96
              xl:h-[500px]
            "
          />

          {/* Main content card */}
          <div
            className="
              relative z-10 mx-auto
              -mt-10 w-full max-w-4xl
              rounded-2xl border border-white/20
              bg-black/25 px-4 py-6
              text-center shadow-2xl
              backdrop-blur-md
              sm:px-6
              md:-mt-36 md:px-8 md:py-8
            "
          >
            <h1
              className={`${styles.heroHeadText} text-white`}
              style={{
                textShadow:
                  '0 0 10px #aaa6c3, 0 0 30px #000000, 0 0 35px #000000',
              }}
            >
              WE CARE ABOUT YOUR CAR
            </h1>

            <p
              className={`${styles.heroSubText} mt-3 text-white/90`}
              style={{
                textShadow:
                  '0 0 10px #aaa6c3, 0 0 30px #000000, 0 0 35px #000000',
              }}
            >
              After a heavy hailstorm, your vehicle may suffer from dents and
              damage. At Thunder Fix Auto Hail Repair, we specialize in
              preserving your car&apos;s finish and value with expert paintless
              dent repair.
            </p>

            <p
              className={`${styles.heroSubText} mt-2 font-semibold text-white`}
              style={{
                textShadow:
                  '0 0 10px #aaa6c3, 0 0 30px #000000, 0 0 35px #000000',
              }}
            >
              Your satisfaction is our priority.
            </p>

{/* Action buttons */} <div className="mx-auto mt-6 grid w-full max-w-md grid-cols-2 gap-3"> <a href="tel:+18885030755" className=" flex min-h-[56px] items-center justify-center rounded-xl bg-tertiary px-4 py-3 text-center font-semibold text-white transition duration-300 hover:scale-[1.03] hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-white/60 " > Call Now </a> <a href="#contact" className=" flex min-h-[56px] items-center justify-center rounded-xl bg-tertiary px-4 py-3 text-center font-semibold text-white transition duration-300 hover:scale-[1.03] hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-white/60 " > Contact Us </a> </div>

            {/* Social media */}
            <div className="mt-6 flex items-center justify-center gap-4">
              <a
                href="https://www.instagram.com/thunder_fix_pdr?igsh=MmdidG15MXU2NTVk"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Thunder Fix Instagram"
                className="
                  flex h-11 w-11 items-center justify-center
                  rounded-full border border-white/20
                  bg-white/10 text-white
                  backdrop-blur-sm
                  transition duration-300
                  hover:scale-110 hover:bg-white/20
                  focus:outline-none focus:ring-2 focus:ring-white/60
                "
              >
                <FiInstagram className="text-2xl" />
              </a>

              <a
                href="https://www.facebook.com/share/17uSW1EDie/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Thunder Fix Facebook"
                className="
                  flex h-11 w-11 items-center justify-center
                  rounded-full border border-white/20
                  bg-white/10 text-white
                  backdrop-blur-sm
                  transition duration-300
                  hover:scale-110 hover:bg-blue-600
                  focus:outline-none focus:ring-2 focus:ring-white/60
                "
              >
                <FaFacebookF className="text-xl" />
              </a>
            </div>

            {/* Divider */}
            <div className="mx-auto my-6 h-px w-28 bg-white/30" />

            {/* Locations */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {locations.map((location) => (
                <a
                  key={location.name}
                  href={location.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    group flex items-center gap-4
                    rounded-xl border border-white/20
                    bg-black/25 px-4 py-4
                    text-left backdrop-blur-sm
                    transition duration-300
                    hover:-translate-y-1
                    hover:border-white/40
                    hover:bg-black/40
                    hover:shadow-lg
                    focus:outline-none
                    focus:ring-2 focus:ring-white/60
                  "
                >
                  <div
                    className="
                      flex h-11 w-11 shrink-0
                      items-center justify-center
                      rounded-full bg-tertiary
                      text-white shadow-lg
                    "
                  >
                    <FaMapMarkerAlt className="text-xl" />
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-white/60">
                      {location.name}
                    </p>

                    <p className="mt-1 text-sm font-medium leading-snug text-white">
                      {location.addressLine1}
                      <br />
                      {location.addressLine2}
                    </p>

                    <span className="mt-1 inline-block text-xs text-white/60 group-hover:text-white group-hover:underline">
                      View on Google Maps
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
