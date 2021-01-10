import { IWeatherData } from "./weather-data.interface";

export interface IForecastData {
  city: {
    name: string;
  };
  // the upcoming days array
  list: {
    dt: number; // date in seconds
    temp: {
      max: string;
      min: string;
    };
    weather: IWeatherData[];
  }[];
}
