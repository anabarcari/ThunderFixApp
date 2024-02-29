// Inside the Navbar component
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { menu, close } from "../assets";
import logo from "../assets/Thunderfix2.png";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20`}
      style={{
        background: "linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(20, 20, 20, 0.0))",
      }}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-32 h-20 object-contain" />
          <p className="text-white text-[16px] font-bold cursor-pointer flex">
            Thunder Fix &nbsp;
            <span className="sm:block hidden">| Auto Hail Repair</span>
          </p>
        </Link>

        {/* Call Now Button */}
        <div className="flex-grow text-center">
          <div className="text-white text-[16px] font-bold flex items-left">
            <span role="img" aria-label="phone emoji" className="mr-4" style={{ color: "white" }}>
              
            </span>
            <a href="tel: +1888-503-0755">Tel: 888-503-0755</a>
          </div>
        </div>

        {/* Navigation Links (About, Work, Contact) */}
        <ul className="list-none hidden lg:flex flex-row gap-8">
          {navLinks.map((Link) => (
            <li
              key={Link.id}
              className={`${
                active === Link.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(Link.title)}
            >
              <a href={`#${Link.id}`}>{Link.title}</a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden flex items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[48px] h-[18px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          ></img>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          !toggle ? "hidden" : "flex"
        } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
      >
        <ul className="list-none flex flex-col gap-4">
          {navLinks.map((Link) => (
            <li
              key={Link.id}
              className={`${
                active === Link.title ? "text-white" : "text-secondary"
              } font-poppins font-medium cursor-pointer text-[16px]`}
              onClick={() => {
                setToggle(!toggle);
                setActive(Link.title);
              }}
            >
              <a href={`#${Link.id}`}>{Link.title}</a>
            </li>
          ))}

          {/* Call Now Button for Mobile */}
          <li className="text-white font-poppins font-medium cursor-pointer text-[16px] text-center">
            <div className="text-[15px] font-bold flex items-center">
              <span role="img" aria-label="phone emoji" className="mr-2" style={{ color: "white" }}>
                📞
              </span>
              <a href="tel: +1888-503-0755">888-503-0755</a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
