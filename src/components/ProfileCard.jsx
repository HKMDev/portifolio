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
            No segundo semestre de 2021 mergulhei no mundo do Desenvolvimento Web, e de lá pra cá tenho conhecido muitos conceitos importantes.
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
          <h2>Keitey</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            ultrices eros non tristique tempor. Integer laoreet purus cursus
            metus pulvinar placerat.
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
            Sou Engenheira Química e Desenvolvedora Frontend. Criatividade, layouts inovadores e funcionais, são minha verdadeira paixão! Sou muito cuidadosa com tudo que faço, para que o resultado seja apaixonante! Organização e planejamento são meus sobrenomes! Minhas principais áreas de conhecimento são: HTML, CSS, JavaScript e React.
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
