import React from 'react';
import Wrapper from './Wrapper';
import logo from '../../icons/logo.png';
import home from '../../icons/home.png';
import Timer from '../../components/Timer';

const Menu = () => (
  <Wrapper 
    container 
    item 
    direction="column" 
    alignItems="center"
    justify="space-between"
    md={1}
  >
    <img src={logo} alt="logo" />
    <img src={home} className="home" alt="home" />
    <Timer />
  </Wrapper>
)

export default Menu;