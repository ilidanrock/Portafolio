import React, { useState, useRef } from "react"
import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
//import { client } from "../../client";
import emailjs from '@emailjs/browser';
import "./Footer.scss";
import { environmentsVariables } from "../../config/config";


const Footer = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  console.log(environmentsVariables);
  

  const { username, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  
    const sendEmail = (e) => {
      e.preventDefault();
      setLoading(true);
      emailjs
        .sendForm(environmentsVariables.REACT_APP_EMAILJS_SERVICE_ID, environmentsVariables.REACT_APP_EMAILJS_TEMPLATE_ID, form.current, {
          publicKey: environmentsVariables.REACT_APP_EMAILJS_PUBLIC_KEY,
        })
        .then(
          () => {
            console.log('SUCCESS!', form.current);
            setFormData({
              name: "",
              email: "",
              message: "",
            });
            setLoading(false);
          },
          (error) => {
            console.log('FAILED...', error.text);
            setFormData({
              name: "",
              email: "",
              message: "",
            });
            setLoading(false);
            alert(
              "Something went wrong, please try again later."
            );
            
          },
        );
    };


  return (
    <>
    <form ref={form} onSubmit={sendEmail} className="app__footer-cards">
      <h2 className="head-text">Take a coffee & chat with me</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <img src={images.email} alt="email" />
          <a href="mailto:rluis747@gmail.com" className="p-text">
            rluis747@gmail.com
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="phone" />
          <a href="https://wa.me/+51920300340" className="p-text">
            +51920300340
          </a>
        </div>
      </div> 
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input
              className="p-text"
              type="text"
              placeholder="Your Name"
              name="name"
              value={username}
              onChange={handleChangeInput}
            />
          </div>
          <div className="app__flex">
            <input
              className="p-text"
              type="email"
              placeholder="Your Email"
              name="email"
              value={email}
              onChange={handleChangeInput}
            />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          <button type="button" className="p-text" onClick={sendEmail}>
            {loading ? "Sending..." : "Send Message"}
          </button>
        </div>
      </form>
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__whitebg"
);
