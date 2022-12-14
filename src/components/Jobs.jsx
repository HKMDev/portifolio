import React from "react";
import { Carousel, Card } from "react-bootstrap";
import * as C from "../styles/Jobs";

import iuhhu from "../img/iuhuu.jpg";
import bluemed from "../img/bluemed.jpg";
import titan from "../img/titan.jpg";
import agency from "../img/agency.jpg";
import agencia from "../img/agencia.jpg";
import cafe from "../img/cafe.jpg";
import carflix from "../img/carflix.jpg";
import electrum from "../img/electrum.jpg";

function Jobs() {
  return (
    <C.JobContainer id="job">
      
        <h3>Conheça um pouco mais do nosso trabalho</h3>
      
      <Carousel fade>
        <Carousel.Item>
          <a
            href="https://iuhuu.com.br/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="d-block w-100" src={iuhhu} alt="iuhhu" />
          </a>
        </Carousel.Item>
     <Carousel.Item>
         <a
            href="https://bluemedconventioncenter.com.br/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="d-block w-100" src={titan} alt="titan" />
          </a>
        </Carousel.Item>

        <Carousel.Item>
          <a
            href="https://www.titanlat.com/site/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="d-block w-100" src={bluemed} alt="bluemed" />
          </a>
        </Carousel.Item>

        <Carousel.Item>
          <a
            href="https://agency-react-project.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="d-block w-100" src={agency} alt="agency" />
          </a>
        </Carousel.Item>

        <Carousel.Item>
          <a
            href="https://keitey.github.io/electrum-sass/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="d-block w-100" src={electrum} alt="electrum" />
          </a>
        </Carousel.Item>

        <Carousel.Item>
          <a
            href="https://milenamarlim.github.io/Landing-Page-Cafe/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="d-block w-100" src={cafe} alt="cafe" />
          </a>
        </Carousel.Item>

        <Carousel.Item>
          <a
            href="https://milenamarlim.github.io/landing-page-agencia/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="d-block w-100" src={agencia} alt="agencia" />
          </a>
        </Carousel.Item>

        <Carousel.Item>
          <a
            href="https://milenamarlim.github.io/carfix_landingpage/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="d-block w-100" src={carflix} alt="carflix" />
          </a>
        </Carousel.Item>
      </Carousel>
      <Card.Text>
        *alguns projetos contaram apenas com nossa participação
      </Card.Text>
    </C.JobContainer>
  );
}


export default Jobs;
