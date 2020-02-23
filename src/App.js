import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { loadWeather } from './store/actions';

const App = ({ loadWeather }) => {
  return (
    <button onClick={() => {
      loadWeather('São Paulo')
    }}>
      Teste
    </button>
  );
}

const mapDispatchToProps = dispatch => 
    bindActionCreators({ loadWeather }, dispatch)

export default connect(
  null,
  mapDispatchToProps
)(App);

