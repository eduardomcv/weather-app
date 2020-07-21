import { useEffect, useState } from 'react';
import { TemperatureUnit, Location } from '../sharedTypes';
import {
  OPEN_WEATHER_API_KEY,
  LOCATION_MAP,
  TEMPERATURE_UNIT_MAP,
  OPEN_WEATHER_API_ENDPOINT,
} from '../config';

interface QueryStringArgs {
  location: Location;
  temperatureUnit: TemperatureUnit;
}

interface UseOpenWeatherResult {
  loading: boolean;
  error?: Error;
  data?: WeatherAPIData;
}

interface Main {
  temp: number;
}

interface System {
  sunrise: number;
  sunset: number;
}

interface WeatherCondition {
  id: string;
  main: string;
  description: string;
  icon: string;
}

interface WeatherAPIData {
  main: Main;
  sys: System;
  /**
   * first weather condition in the array is the "primary"
   */
  weather: WeatherCondition[];
}

function buildQueryString({ location, temperatureUnit }: QueryStringArgs): string {
  if (!OPEN_WEATHER_API_KEY) {
    throw new Error('Could not get API key');
  }

  const queryString = `?appid=${OPEN_WEATHER_API_KEY}&q=${LOCATION_MAP[location]}&units=${TEMPERATURE_UNIT_MAP[temperatureUnit]}`;

  return queryString;
}

async function fetchOpenWeatherData(fetchArgs: QueryStringArgs): Promise<WeatherAPIData> {
  const queryString = buildQueryString(fetchArgs);

  const url = `${OPEN_WEATHER_API_ENDPOINT}${queryString}`;

  const res = await fetch(url);
  const resData = await res.json();

  if (!res.ok) {
    // the data has a message field if an error occurs
    throw new Error(resData.message);
  }

  return resData;
}

export default function useOpenWeather({
  temperatureUnit,
  location,
}: QueryStringArgs): UseOpenWeatherResult {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error>();
  const [data, setData] = useState<WeatherAPIData>();

  useEffect(() => {
    setLoading(true);

    fetchOpenWeatherData({
      temperatureUnit,
      location,
    })
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [location, temperatureUnit]);

  return {
    data,
    error,
    loading,
  };
}
