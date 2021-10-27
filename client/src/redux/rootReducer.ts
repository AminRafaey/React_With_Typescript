import { combineReducers } from "redux";
import playersReducer from "./players/reducer";

// ** Reducers Imports

const rootReducer = combineReducers({
  players: playersReducer,
});

export default rootReducer;
