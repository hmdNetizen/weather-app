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

export type Action =
  | GetWeatherDataAction
  | GetWeatherDataSuccessAction
  | GetWeatherDataFailureAction;
