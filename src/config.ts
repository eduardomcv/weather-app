import { Location, TemperatureUnit } from './sharedTypes';

export const OPEN_WEATHER_API_KEY = process.env.REACT_APP_API_KEY;

export const OPEN_WEATHER_API_ENDPOINT = 'https://api.openweathermap.org/data/2.5/weather';

export const LOCATION_VALUE_TO_LOCATION_QUERY_PARAM_MAP: Record<Location, string> = {
  lisbon: 'lisbon,pt',
  newyork: 'new+york,us',
  london: 'london,uk',
};

export const TEMPERATURE_UNIT_VALUE_TO_UNITS_QUERY_PARAM_MAP: Record<TemperatureUnit, string> = {
  celsius: 'metric',
  farenheit: 'imperial',
};
