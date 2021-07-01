import { Dispatch } from "redux";
import { ActionTypes } from "../action-types";
import { Action } from "../actions";
import axios from "axios";

const BASE_URL =
  "https://rhubarb-crumble-16507.herokuapp.com/https://www.metaweather.com/api/location/";

export const fetchWeatherData =
  (woeid: number) => async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionTypes.GET_WEATHER_DATA,
    });

    try {
      const { data } = await axios.get(`${BASE_URL}/${woeid}`);

      dispatch({
        type: ActionTypes.GET_WEATHER_DATA_SUCCESS,
        payload: data,
      });

      dispatch({
        type: ActionTypes.WEATHER_DEGREE_IS_CELSIUS,
      });
    } catch (error) {
      dispatch({
        type: ActionTypes.GET_WEATHER_DATA_FAILURE,
        payload: error.message,
      });
    }
  };

export const getLocationFromMap =
  (position: string) => async (dispatch: Dispatch) => {
    const location = position.split(" ").join("+");
    try {
      const { data } = await axios.get(
        `https://nominatim.openstreetmap.org/search/?city=${location}&format=json`
      );

      dispatch({
        type: ActionTypes.GET_LOCATION_FROM_MAP,
        payload: data,
      });
    } catch (error) {
      console.error(error.message);
    }
  };

export const getDegreeCelsius = () => (dispatch: Dispatch) =>
  dispatch({
    type: ActionTypes.WEATHER_DEGREE_IS_CELSIUS,
  });

export const getDegreeFahrenheit = () => (dispatch: Dispatch) => {
  dispatch({
    type: ActionTypes.WEATHER_DEGREE_IS_FAHRENHEIT,
  });
};
