
import React from 'react';
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://twitter.com/luiscrj_7"> <BsTwitter /></a>
      
    </div>
    <div>
      <a href="https://www.facebook.com/profile.php?id=100036093757013"><FaFacebookF /></a>
      
    </div>
    <div>
      <a href="https://www.instagram.com/ilidanrock/"><BsInstagram /></a>
      
    </div>
  </div>
);

export default SocialMedia;