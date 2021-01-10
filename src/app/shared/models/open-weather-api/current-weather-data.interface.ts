import { IWeatherData } from "./weather-data.interface";

export interface ICurrentWeatherData {
  name: string;
  main: {
    temp: string;
    temp_max: string;
    temp_min: string;
  };
  sys: {
    id: number;
  };
  weather: IWeatherData[];
}
