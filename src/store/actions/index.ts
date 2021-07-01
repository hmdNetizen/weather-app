import { ActionTypes } from "../action-types";
import { WeatherDataset } from "../reducers/weatherReducer";

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

interface WeatherDegreeIsCelsius {
  type: ActionTypes.WEATHER_DEGREE_IS_CELSIUS;
}

interface weatherDegreeIsFahrenheit {
  type: ActionTypes.WEATHER_DEGREE_IS_FAHRENHEIT;
}

export type Action =
  | GetWeatherDataAction
  | GetWeatherDataSuccessAction
  | GetWeatherDataFailureAction
  | WeatherDegreeIsCelsius
  | weatherDegreeIsFahrenheit;
