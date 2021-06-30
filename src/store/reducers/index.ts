import { combineReducers } from "redux";
import weatherReducer from "./weatherReducer";

const reducers = combineReducers({
  weather: weatherReducer,
});

export type RootState = ReturnType<typeof reducers>;

export default reducers;
