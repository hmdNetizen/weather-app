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

interface getLocationPositionAction {
  type: ActionTypes.GET_LOCATION_POSITION;
  payload: number;
}

interface getLocationFromMapAction {
  type: ActionTypes.GET_LOCATION_FROM_MAP;
  payload: locationDataset[];
}

interface getLocationCoordsAction {
  type: ActionTypes.GET_LOCATION_COORDINATES;
  payload: {
    lat: string | number;
    lon: string | number;
  };
}

interface getCurrentLocationAction {
  type: ActionTypes.GET_CURRENT_LOCATION_POSITION;
  payload: {
    lat: string | number;
    lon: string | number;
  };
}

interface getCurrentLocationDeniedAction {
  type: ActionTypes.GET_CURRENT_LOCATION_POSITION_DENIED;
  payload: string;
}

export type Action =
  | GetWeatherDataAction
  | GetWeatherDataSuccessAction
  | GetWeatherDataFailureAction
  | WeatherDegreeIsCelsiusAction
  | weatherDegreeIsFahrenheitAction
  | getLocationPositionAction
  | getLocationFromMapAction
  | getLocationCoordsAction
  | getCurrentLocationAction
  | getCurrentLocationDeniedAction;
