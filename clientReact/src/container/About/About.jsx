import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import images from "../../constants/images";
import {urlFor , client } from '../../client'

import "./About.scss";

// const abouts = [
//   {
//     title: "Full Stack Developer",
//     description: `I'm good web developer`,
//     imgUrl: images.about01,
//   },
//   {
//     title: "Mechanical Engineer",
//     description: `I'm good mechanical engineer`,
//     imgUrl: images.about02,
//   },
//   {
//     title: "Privete Pilot",
//     description: `I like fly my Piper 28`,
//     imgUrl: images.about03,
//   },
// ];

const About = () => {

  const [abouts , setAbouts] = useState([])

  useEffect(() => {
    const query = '*[_type == "abouts"]'
    client.fetch(query)
    .then((data) => setAbouts(data))
  }, [])
  
  return (
    <>
      <h2 className="head-text">I know that <span> Good App</span><br />means<span> Good business</span></h2>
      <dir className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </dir>
    </>
  );
};

export default About;
