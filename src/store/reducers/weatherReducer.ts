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
        ...state,
        loading: true,
        error: null,
      };
    case ActionTypes.GET_WEATHER_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        weatherData: ["Hi", "Hello"],
        error: null,
      };
    case ActionTypes.GET_WEATHER_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: "404 Error",
        weatherData: [],
      };
    default:
      return state;
  }
};

export default weatherReducer;
