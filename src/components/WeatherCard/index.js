import React from 'react';
import { Typography, Box } from '@material-ui/core';
import { Wrapper, Header, Content } from './Styled';
import cloud from '../../icons/cloud.png';

const WeatherCard = () => (
  <Wrapper>
    <Header 
      container
      justify="space-between"  
    >
      <img src={cloud} alt="rainy icon" />
      <Typography>
        SEG
      </Typography>
    </Header>
    <Box pb={5} />
    <Content>
      <Typography className="temperature">
        24.7°C
      </Typography>
      <Box pb={2} />
      <Typography>
        3.15m/s
      </Typography>
      <Typography>
        clouds:33%
      </Typography>
    </Content>
  </Wrapper>
)

export default WeatherCard;