export interface ICurrentWeather {
  name: string;
  main: {
    temp: string;
    temp_max: string;
    temp_min: string;
  };
  sys: {
    id: number;
  };
  weather: {
    main: string;
    description: string;
  }[];
}
