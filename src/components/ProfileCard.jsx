import React from "react";
import * as C from "../styles/Cards";

import profile_k from "../img/profile_k.jpg";

const ProfileCard = () => {
  return (
    <C.Cards>
      <C.CardArea>
        <img src={profile_k} alt="perfil" />
        <C.CardContainer>
          <h2>Heloisa Magalhães</h2>
          <p>
            Com vivência na área de informática, mergulhei no mundo do Desenvolvimento Web, com prática diária de construção de sites.
            Tenho bons conhecimentos em: HTML, CSS, Wordpress, Javascript e SASS.
          </p>

          <a href="https://www.linkedin.com/in/heloisa-magalhães-290453181" target="_blanck">
            <i class="fab fa-linkedin-in"></i>
          </a>
        </C.CardContainer>
      </C.CardArea>

      <C.CardArea>
        <img src={profile_k} alt="perfil" />
        <C.CardContainer>
          <h2>Keitey Barros</h2>
          <p>
            Sou Engenheira de Produção e Desenvolvedora Frontend.
            Minhas áreas de conhecimento são: HTML, CSS, Javascript, React, SCRUM, PBI, WordPress, Typescript, SASS, BOOTSTRAP, Nodejs e Express.
          </p>

          <a href="https://www.linkedin.com/in/milena-marlim/" target="_blanck">
            <i class="fab fa-linkedin-in"></i>
          </a>
        </C.CardContainer>
      </C.CardArea>

      <C.CardArea>
        <img src={profile_k} alt="perfil" />
        <C.CardContainer>
          <h2>Milena Marlim</h2>
          <p>
            Sou Engenheira Química e Desenvolvedora Frontend. Criatividade, layouts inovadores e funcionais, são minha verdadeira paixão!  Organização e planejamento são meus pontos fortes! Minhas principais áreas de conhecimento são: HTML, CSS, JavaScript e React.
          </p>
          <a href="https://www.linkedin.com/in/milena-marlim/" target="_blanck">
            <i class="fab fa-linkedin-in"></i>
          </a>
        </C.CardContainer>
      </C.CardArea>
    </C.Cards>
  );
};

export default ProfileCard;
