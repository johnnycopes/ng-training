import { IWeatherData } from "./weather-data.interface";

export interface IForecastData {
  city: {
    name: string;
  };
  list: {
    temp: {
      max: string;
      min: string;
    };
    weather: IWeatherData[];
  }[];
}
