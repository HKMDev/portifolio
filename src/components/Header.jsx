import React from "react";
import * as C from "../styles/Header";
import logo from "../img/logo.png";
import banner from "../img/banner-hero.jpg";

import { Box, Link } from "@mui/material";

const Header = () => {
  return (
    <Box>
      <C.Menu>
        <div>
          <img src={logo} alt="" />
        </div>
        <div className="link">
          <Link href="#team" underline="none" style={{color: '#1A8CD8'}}
        >Quem Somos</Link>
          <Link href="#job" underline="none">
            Nossos Trabalhos
          </Link>
          <Link href="#contact" underline="none">
            Contato
          </Link>
        </div>
      </C.Menu>
      <Box>
        <img src={banner} alt="" />
      </Box>
    </Box>
  );
};

export default Header;
