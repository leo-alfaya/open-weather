import React from 'react';
import Wrapper from './Styled';
import Menu from '../../containers/Menu';
import WeekWeatherArea from '../../containers/WeekWeatherArea';
import SelectedDay from '../../containers/SelectedDay';

const App = () => {
  return (
    <Wrapper container >
     <Menu />
     <WeekWeatherArea />
     <SelectedDay />
    </Wrapper>
  );
}

export default App;

