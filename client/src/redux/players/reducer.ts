import _ from "lodash";
import { actionTypes } from "./actions";

interface Player {
  id: string;
  name: string;
  age: number;
  imageUrl: string;
  description: string;
}

const initialState: Player[] = [];

const playersReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.ADD_PLAYER: {
      return [...state, { id: new Date().toString(), ...action.payload }];
    }
    case actionTypes.REMOVE_PLAYER: {
      _.remove(state, (s) => s.id === action.payload);
      return [...state];
    }
    default:
      return state;
  }
};

export default playersReducer;
