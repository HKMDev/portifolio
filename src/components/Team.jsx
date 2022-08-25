import React from "react";
import * as C from "../styles/About";
import ProfileCard from "../components/ProfileCard"

const About = () => {
  return (
    <C.About>
      <div className="largura-strict">
        <h1>HKM Developer</h1>
        <p>
        Somos a HKM Developer, equipe especialista em soluções Web!
          Alguns de nossos serviços incluem construção, desenvolvimento e manutenção de sites, linktrees criativos e inteligentes e construção de materiais para sua rede social!
          Conheça abaixo o time HKM!
        </p>
      </div>
      <div>
        <ProfileCard />
      </div>
    </C.About>
  );
};

export default About;
