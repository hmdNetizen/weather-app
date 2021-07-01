import { ActionTypes } from "../action-types";
import { WeatherDataset, locationDataset } from "../reducers/weatherReducer";

interface GetWeatherDataAction {
  type: ActionTypes.GET_WEATHER_DATA;
}

interface GetWeatherDataSuccessAction {
  type: ActionTypes.GET_WEATHER_DATA_SUCCESS;
  payload: WeatherDataset | null;
}

interface GetWeatherDataFailureAction {
  type: ActionTypes.GET_WEATHER_DATA_FAILURE;
  payload: string | null;
}

interface WeatherDegreeIsCelsiusAction {
  type: ActionTypes.WEATHER_DEGREE_IS_CELSIUS;
}

interface weatherDegreeIsFahrenheitAction {
  type: ActionTypes.WEATHER_DEGREE_IS_FAHRENHEIT;
}

interface SearchedWeatherDataSuccessAction {
  type: ActionTypes.SEARCHED_WEATHER_DATA_SUCCESS;
  payload: WeatherDataset | null;
}

interface getLocationFromMapAction {
  type: ActionTypes.GET_LOCATION_FROM_MAP;
  payload: locationDataset[];
}

export type Action =
  | GetWeatherDataAction
  | GetWeatherDataSuccessAction
  | GetWeatherDataFailureAction
  | WeatherDegreeIsCelsiusAction
  | weatherDegreeIsFahrenheitAction
  | SearchedWeatherDataSuccessAction
  | getLocationFromMapAction;
