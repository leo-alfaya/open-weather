import React from 'react';
import ContentWrapper from './ContentWrapper'
import Menu from '../../containers/Menu';
import WeekWeatherArea from '../../containers/WeekWeatherArea';
import SelectedDay from '../../containers/SelectedDay';

const App = () => {
  return (
    <ContentWrapper container >
     <Menu />
     <WeekWeatherArea />
     <SelectedDay />
    </ContentWrapper>
  );
}

export default App;

