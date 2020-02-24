import React from 'react';
import Wrapper from './Wrapper';
import CitySearch from '../CitySearch';

const WeekWeatherArea = () => (
  <Wrapper
    container 
    item 
    justify="center"
    md={7}
  >
    <CitySearch />
  </Wrapper>
)

export default WeekWeatherArea;