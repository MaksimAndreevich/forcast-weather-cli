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
			return 'âī¸';
		case '02':
			return 'đ¤ī¸';
		case '03':
			return 'âī¸';
		case '04':
			return 'âī¸';
		case '09':
			return 'đ§ī¸';
		case '10':
			return 'đĻī¸';
		case '11':
			return 'đŠī¸';
		case '13':
			return 'âī¸';
		case '50':
			return 'đĢī¸';
	}
};

export { getWeather, getIcon };
