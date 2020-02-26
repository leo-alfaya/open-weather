import _ from 'lodash';

const average = (list, path, precision) => {
  const sum = list.reduce((acc, forecast) => {
    return acc + _.get(forecast, path)
  }, 0);

  return (sum/list.length).toFixed(precision);
}

export default average;