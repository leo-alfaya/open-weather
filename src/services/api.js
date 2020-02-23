const API_URL = 'http://api.openweathermap.org/data/2.5/forecast';
const API_KEY = 'fff1d6d13cb336f331c5f5359f226428';

export const getByCityNAme = async cityName => {
  let response = await fetch(`${API_URL}?q=${cityName}&appid=${API_KEY}`);
  let json = await response.json();
  return json;
}