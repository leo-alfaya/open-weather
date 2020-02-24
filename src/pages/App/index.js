import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { loadWeather } from '../../store/actions';
import ContentWrapper from './ContentWrapper'
import Menu from '../../containers/Menu';
import WeekWeatherArea from '../../containers/WeekWeatherArea';
import SelectedDay from '../../containers/SelectedDay';

const App = ({ loadWeather }) => {
  return (
    <ContentWrapper container>
     <Menu />
     <WeekWeatherArea />
     <SelectedDay />
    </ContentWrapper>
  );
}

const mapDispatchToProps = dispatch => 
    bindActionCreators({ loadWeather }, dispatch)

export default connect(
  null,
  mapDispatchToProps
)(App);

