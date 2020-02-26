import React from 'react';
import { connect } from 'react-redux';
import { Wrapper, ForecastList } from './Styled';
import { Typography, Box } from '@material-ui/core';
import WeatherCard from '../../components/WeatherCard';

const WeatherForecast = ({ weather }) => {
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
      <ForecastList>
        {weather.map((dayWeather, idx) => (
          <WeatherCard dayWeather={dayWeather} key={idx}/>
        ))}
      </ForecastList>
    </Wrapper>
  )
}

const mapStateToProps = state => ({
  weather: state.weather
})

export default connect(
  mapStateToProps,
  null
)(WeatherForecast);