import React from "react";
import * as C from "../styles/Contact";
import { MdEmail } from "react-icons/md";
import robot from "../img/robot.gif";

const Contact = () => {
  return (
    <C.ContactText>
      <img src={robot} alt="" />
      <div className="contact">
      Entre em contato conosco
      <a
        href="mailto:hkmdev22@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <MdEmail size={32} />
      </a>
      </div>
    </C.ContactText>
  );
};

export default Contact;
