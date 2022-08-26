import React from "react";
import * as C from "../styles/Contact";
import { MdEmail } from "react-icons/md";
import robo from "../img/robo.gif";

const Contact = () => {
  return (
    <C.ContactText>
      <img src={robo} alt="" />
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
