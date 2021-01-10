export interface IForecast {
  name: string;
  days: {
    date: number;
    max: string,
    min: string;
    conditions: string;
  }[];
}
