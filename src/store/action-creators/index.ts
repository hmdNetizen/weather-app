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

//   This fetches data corresponding to the input text from openstreetmap api
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

//   This clears off the data from openstreetmap api
export const clearLocationFromMap = () => (dispatch: Dispatch) => {
  dispatch({
    type: ActionTypes.CLEAR_LOCATION_FROM_MAP,
  });
};

export const getLocationCoords =
  (coords: { lat: string; lon: string }) => (dispatch: Dispatch) => {
    dispatch({
      type: ActionTypes.GET_LOCATION_COORDINATES,
      payload: {
        lat: coords.lat,
        long: coords.lon,
      },
    });
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
