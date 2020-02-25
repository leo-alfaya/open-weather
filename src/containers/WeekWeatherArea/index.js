import React from 'react';
import Wrapper from './Styled';
import CitySearch from '../CitySearch';
import WeekForecast from '../WeekForecast';

const WeekWeatherArea = () => (
  <Wrapper
    container 
    item 
    justify="center"
    alignContent="flex-start"
    md={7}
  >
    <CitySearch />
    <WeekForecast />
  </Wrapper>
)

export default WeekWeatherArea;