import axios from 'axios'

export class WeatherService {

  API_KEY = '9e398bfd68e8d923932dcc6bdc33126d'
  BASE_URL = 'https://api.openweathermap.org/data/2.5/find'


  async getWeather(city, units) {
    const response = await axios.get(this.BASE_URL, {
      params: {
        q: city,
        units: units,
        appid: this.API_KEY,
      },
    });
    
    return response?.data?.list[0];
  }
}
