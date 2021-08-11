import React from "react";
import { MdLocationOn } from "react-icons/md";
import { AiFillMail } from "react-icons/ai";
import { AiFillPhone } from "react-icons/ai";

export const Footer = () => {
  return (
    <footer>
      <div className="contact-container">
        <div className="icon">
          <MdLocationOn />
        </div>
        <div className="text">
          <p>127, New Road, Sydney</p>
        </div>
      </div>
      <div className="contact-container">
        <div className="icon">
          <AiFillMail />
        </div>
        <div className="text">
          <p>mail@yourdomain.com</p>
        </div>
      </div>
      <div className="contact-container">
        <div className="icon">
          <AiFillPhone />
        </div>
        <div className="text">
          <p>00 123 456 789</p>
        </div>
      </div>
    </footer>
  );
};
