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
      lang: "en",
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

const getIcon = (icon) => {
	switch (icon.slice(0, -1)) {
		case '01':
			return '☀️';
		case '02':
			return '🌤️';
		case '03':
			return '☁️';
		case '04':
			return '☁️';
		case '09':
			return '🌧️';
		case '10':
			return '🌦️';
		case '11':
			return '🌩️';
		case '13':
			return '❄️';
		case '50':
			return '🌫️';
	}
};

export { getWeather, getIcon };
