const LOAD_WEATHER_SAGA = 'LOAD_WEATHER_SAGA';
const SET_WEATHER = 'SET_WEATHER';

const loadWeather = cityName => ({
  type: LOAD_WEATHER_SAGA,
  payload: cityName
})

export {
  LOAD_WEATHER_SAGA,
  SET_WEATHER,
  loadWeather,
}