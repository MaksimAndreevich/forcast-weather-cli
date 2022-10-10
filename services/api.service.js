import { getKeyValue } from "./storage.service.js";
import axios from "axios";

const urlOpenWeather = "https://api.openweathermap.org/data/2.5/weather";

const getWeather = async (city) => {
  const token = await getKeyValue("token");
  if (!token) {
    throw new Error("Not found API key, set API key -t [API_KEY]");
  }
  const { lat, lon } = await getCoordinates(city, token);

  const { data } = await axios.get(urlOpenWeather, {
    params: {
      lat: lat,
      lon: lon,
      appid: token,
      lang: "ru",
      units: "metric",
    },
  });

  return data;
};

const getCoordinates = async (city, token) => {
  const { data } = await axios.get(urlOpenWeather, {
    params: {
      q: city,
      appid: token,
    },
  });
  return data.coord;
};

export { getWeather };
