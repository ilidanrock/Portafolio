import React, { useState } from "react";
import "./Navbar.scss";
import images from "../../constants/images";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

export const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="logo" />
      </div>
      <ul className="app__navbar-links">
        {["home", "about", "work", "skills", "contact"].map((element) => (
          <li className="app__flex p-text" key={`link-${element}`}>
            <div />
            <a href={`#${element}`}>{element}</a>
          </li>
        ))}
      </ul>
      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85 }}
          >
            <HiX onClick={() => setToggle(false)} />
            {["home", "about", "work", "skills", "contact"].map((element) => (
              <ul>
                <li key={element}>
                  <a href={`#${element}`} onClick={() => setToggle(false)}>
                    {element}
                  </a>
                </li>
              </ul>
            ))}
          </motion.div>
        )}
      </div>
    </nav>
  );
};
