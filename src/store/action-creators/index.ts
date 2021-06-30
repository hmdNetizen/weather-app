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
    } catch (error) {
      dispatch({
        type: ActionTypes.GET_WEATHER_DATA_FAILURE,
        payload: error.message,
      });
    }
  };
