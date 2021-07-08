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

export interface locationDataset {
  placeId: number;
  lat: string;
  lon: string;
  display_name: string;
}

interface WeatherState {
  loading: boolean;
  weatherData: WeatherDataset | null;
  woeid: number;
  error: string | null;
  isCelsius: boolean;
  autocomplete: locationDataset[] | [];
  coords: {
    lat: string | number;
    lon: string | number;
  } | null;
}

const initialState = {
  loading: false,
  weatherData: null,
  woeid: 1398823,
  error: null,
  isCelsius: true,
  coords: null,
  autocomplete: [],
};

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
    case ActionTypes.GET_LOCATION_FROM_MAP:
      return {
        ...state,
        error: null,
        autocomplete: action.payload,
      };
    case ActionTypes.GET_LOCATION_COORDINATES:
    case ActionTypes.GET_CURRENT_LOCATION_POSITION:
      return {
        ...state,
        coords: action.payload,
        error: null,
      };
    case ActionTypes.GET_LOCATION_POSITION:
      return {
        ...state,
        woeid: action.payload,
        error: null,
      };

    case ActionTypes.GET_CURRENT_LOCATION_POSITION_DENIED:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default weatherReducer;
