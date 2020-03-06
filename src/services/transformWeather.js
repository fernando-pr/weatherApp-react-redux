import convert from 'convert-units';
import {
    CLOUD,
    SUN,
    RAIN,
    SNOW,
    DRIZZLE,
    THUNDER,
} from './../constants/weathers';


const getTemp = kelvin => {
    return  Number(convert(kelvin).from("K").to("C").toFixed(0));
}

const getWeatherState = weather => {
   const { id } = weather;

    if (id < 300){
        return THUNDER;
    }else if (id < 400){
        return DRIZZLE;
    }else if (id < 600){
        return RAIN;
    }else if (id < 700){
        return SNOW;
    }else if (id === 800){
      return SUN;
    } else {
        return CLOUD;
    }
}
const transformWeather = weather_data => {
    const { humidity, temp } = weather_data.main;
    const { speed } = weather_data.wind;
    const weatherState = getWeatherState(weather_data.weather[0]);
    const city = weather_data.name;
    const temperature = getTemp(temp);
    
    const data = {
        humidity,
        temperature,
        weatherState,
        wind: `${speed} m/s`,
    }

    const state = {
        city,
        data,
    }
    return state;
}

export default transformWeather;