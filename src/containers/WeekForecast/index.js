import React from 'react';
import Wrapper from './Styled';
import { Typography, Box, Grid } from '@material-ui/core';
import WeatherCard from '../../components/WeatherCard';

const WeatherForecast = () => {
  return (
    <Wrapper 
      container
      item
      direction="column"
      justify="space-between"
      md={10}
    >
      <Box pb={4}/>
      <Typography className="title">
        Previsão para a semana:
      </Typography>
      <Box pb={3}/>
      <Grid 
        container
        justify="space-between"
      >
        <WeatherCard />
        <WeatherCard />
        <WeatherCard />
        <WeatherCard />
        <WeatherCard />
      </Grid>
    </Wrapper>
  )
}

export default WeatherForecast;