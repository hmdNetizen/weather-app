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

//   This fetches data corresponding to the input text from openstreetmap API
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

//   fetches the location coordinates
export const getLocationsCoords =
  (coords: { lat: string; lon: string }) => (dispatch: Dispatch) => {
    dispatch({
      type: ActionTypes.GET_LOCATION_COORDINATES,
      payload: {
        lat: coords.lat,
        lon: coords.lon,
      },
    });
  };

// Fetches the position of the location by passing in the coordinates
export const getLocationPosition =
  (location: { lat: string; lon: string }) => async (dispatch: Dispatch) => {
    dispatch({
      type: ActionTypes.GET_WEATHER_DATA,
    });
    try {
      const { lat, lon } = location;
      const { data } = await axios.get(
        `${BASE_URL}/search/?lattlong=${lat},${lon}`
      );

      dispatch({
        type: ActionTypes.GET_LOCATION_POSITION,
        payload: data[0].woeid,
      });
    } catch (error) {
      dispatch({
        type: ActionTypes.GET_WEATHER_DATA_FAILURE,
        payload: error.message,
      });
    }
  };

export const getCurrentLocation = () => (dispatch: Dispatch) => {
  const geolocation = navigator.geolocation;
  geolocation.getCurrentPosition(
    (position) => {
      console.log(position);
      dispatch({
        type: ActionTypes.GET_CURRENT_LOCATION_COORDINATES,
        payload: position.coords,
      });
    },
    (error) => {
      dispatch({
        type: ActionTypes.GET_CURRENT_LOCATION_COORDINATES_DENIED,
        payload: error.message,
      });
    }
  );
};

//   Converts the degree of temperature to celsius
export const getDegreeCelsius = () => (dispatch: Dispatch) =>
  dispatch({
    type: ActionTypes.WEATHER_DEGREE_IS_CELSIUS,
  });

//   converts the degree of temperature to fahrenheit
export const getDegreeFahrenheit = () => (dispatch: Dispatch) => {
  dispatch({
    type: ActionTypes.WEATHER_DEGREE_IS_FAHRENHEIT,
  });
};
