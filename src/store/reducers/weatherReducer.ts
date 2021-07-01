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
  isCelsius: true,
};

interface WeatherState {
  loading: boolean;
  weatherData: WeatherDataset | null;
  error: string | null;
  isCelsius: boolean;
}

const weatherReducer = (
  state: WeatherState = initialState,
  action: Action
): WeatherState => {
  switch (action.type) {
    case ActionTypes.GET_WEATHER_DATA:
      return {
        ...state,
        loading: true,
        weatherData: null,
        error: null,
      };
    case ActionTypes.GET_WEATHER_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        weatherData: action.payload,
        error: null,
      };
    case ActionTypes.GET_WEATHER_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        weatherData: null,
      };
    case ActionTypes.WEATHER_DEGREE_IS_CELSIUS:
      return {
        ...state,
        isCelsius: true,
      };
    case ActionTypes.WEATHER_DEGREE_IS_FAHRENHEIT:
      return {
        ...state,
        isCelsius: false,
      };
    default:
      return state;
  }
};

export default weatherReducer;
