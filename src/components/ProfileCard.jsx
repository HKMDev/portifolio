import React from "react";
import * as C from "../styles/Cards";

import profile_k from "../img/profile_k.jpg";

const ProfileCard = () => {
  return (
    <C.Cards>
      <C.CardArea>
        <img src={profile_k} alt="perfil" />
        <C.CardContainer>
          <h2>Heloisa</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            ultrices eros non tristique tempor. Integer laoreet purus cursus
            metus pulvinar placerat.
          </p>
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
        </C.CardContainer>
      </C.CardArea>

      <C.CardArea>
        <img src={profile_k} alt="perfil" />
        <C.CardContainer>
          <h2>Milena</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            ultrices eros non tristique tempor. Integer laoreet purus cursus
            metus pulvinar placerat.
          </p>
        </C.CardContainer>
      </C.CardArea>
    </C.Cards>
  );
};

export default ProfileCard;
