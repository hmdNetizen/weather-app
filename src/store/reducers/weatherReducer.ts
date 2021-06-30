import { ActionTypes } from "../action-types";
import { Action } from "../actions";

const initialState = {
  loading: false,
  weatherData: [],
  error: null,
};

interface WeatherState {
  loading: boolean;
  weatherData: string[];
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
        weatherData: [],
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
        weatherData: [],
      };
    default:
      return state;
  }
};

export default weatherReducer;
