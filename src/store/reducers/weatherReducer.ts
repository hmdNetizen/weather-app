import { ActionTypes } from "../action-types";
import { Action } from "../actions";

export interface WeatherDataset {
  consolidated_weather: {
    id: number;
    weather_state_name: string;
    weather_state_abbr: string;
    applicable_date: string;
    min_temp: number;
    max_temp: number;
    the_temp: number;
    wind_speed: number;
    air_pressure: number;
    humidity: number;
    visibility: number;
  }[];
  title: string;
  woeid: number;
  latt_long: string;
}

const initialState = {
  loading: false,
  weatherData: null,
  error: null,
};

interface WeatherState {
  loading: boolean;
  weatherData: WeatherDataset | null;
  error: string | null;
}

const weatherReducer = (
  state: WeatherState = initialState,
  action: Action
): WeatherState => {
  switch (action.type) {
    case ActionTypes.GET_WEATHER_DATA:
      return {
        loading: true,
        weatherData: null,
        error: null,
      };
    case ActionTypes.GET_WEATHER_DATA_SUCCESS:
      return {
        loading: false,
        weatherData: action.payload,
        error: null,
      };
    case ActionTypes.GET_WEATHER_DATA_FAILURE:
      return {
        loading: false,
        error: action.payload,
        weatherData: null,
      };
    default:
      return state;
  }
};

export default weatherReducer;
