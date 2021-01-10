export interface IForecast {
  name: string;
  days: {
    max: string,
    min: string;
    conditions: string;
  }[];
}
