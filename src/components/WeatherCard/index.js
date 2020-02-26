import React from 'react';
import { Typography, Box } from '@material-ui/core';
import { Wrapper, Header, Content } from './Styled';
import cloud from '../../icons/cloud.png';
import average from '../../utils/average';
import moment from 'moment';

const WeatherCard = ({ dayWeather }) => (
  <Wrapper>
    <Header 
      container
      justify="space-between"  
    >
      <img src={cloud} alt="rainy icon" />
      <Typography>
        {moment(dayWeather[0].dt_txt).format('ddd')}
      </Typography>
    </Header>
    <Box pb={5} />
    <Content>
      <Typography className="temperature">
        {`${average(dayWeather, 'main.temp', 1)}°C`}
      </Typography>
      <Box pb={2} />
      <Typography>
      {`${average(dayWeather, 'wind.speed', 2)}m/s`}
      </Typography>
      <Typography>
      clouds: {`${average(dayWeather, 'clouds.all', 0)} %`}
      </Typography>
    </Content>
  </Wrapper>
)

export default WeatherCard;