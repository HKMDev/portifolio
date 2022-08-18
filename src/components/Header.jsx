import React from 'react'
import * as C from '../styles/Header';
import logo from '../img/logo.png'

import { Link } from '@mui/material';

const Header = () => {
  return (
    <C.Menu>
        <div>
            <img src={logo} alt="" />
        </div>
    <div className="link">
        <Link href="#" underline="none" style={{color: '#506de6'}}>Quem Somos</Link>
        <Link href="#" underline="none">Nossos Trabalhos</Link>
        <Link href="#" underline="none">Contato</Link>
    </div>
    </C.Menu>
  )
}

export default Header