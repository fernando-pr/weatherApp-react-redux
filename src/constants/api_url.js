const location = "Sanlucar de Barrameda, ES";
const api_key = process.env.REACT_APP_API_TOKEN_WEATHER_MAP;
const url_base_weather = process.env.REACT_APP_API_URL_OPEN_WEATHER_MAP;

export const api_weather = `${url_base_weather}?q=${location}&appid=${api_key}`;
