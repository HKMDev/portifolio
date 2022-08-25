import React from "react";
import * as C from "../styles/Contact";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <C.ContactText>
      Entre em contato conosco
      <a href="mailto:hkmdev22@gmail.com" target="_blank" rel="noopener noreferrer">
        <MdEmail size={25}/>
      </a>
    </C.ContactText>
  );
};

export default Contact;
