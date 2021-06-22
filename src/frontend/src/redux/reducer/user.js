import { handleActions } from "redux-actions";
import * as constants from "../constants/user";

const defaultState = {
  user: "",
};

const reducer = handleActions(
  {
    [constants.GET_INFO]: (state, action) => {
      return { ...state, user: action.payload };
    },
  },
  defaultState
);

export default reducer;
