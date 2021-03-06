import axios from 'axios';

const API_KEY = 'eaae38ce2362868257695336e44c2ef9';
const URL = `http://api.openweathermap.org/data/2.5/forecast?&appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export default function fetchWether(city) {
  const url = `${URL}&q=${city},us`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
