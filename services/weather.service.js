import axios from 'axios'

export class WeatherService {

  API_KEY = '3e7377ce4c621172835e49c70dba30b6'
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
