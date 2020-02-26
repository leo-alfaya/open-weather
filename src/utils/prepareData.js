import _ from 'lodash';
import moment from 'moment';

const prepareWeather = ( list ) => {
  const groupedByDay = Object.values(groupByDAy(list));

  return orderByDay(groupedByDay);
}

const groupByDAy = ( list ) => {
  return _.groupBy(list, ( forecast ) => {
    return moment(forecast.dt_txt).day()
  })
}

const orderByDay = ( list ) => {
  return _.sortBy(list, ( weatherDayForecast ) => {
    return moment(weatherDayForecast[0].dt_txt)
  })
}

export default prepareWeather;