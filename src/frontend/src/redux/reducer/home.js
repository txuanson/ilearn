import { handleActions } from "redux-actions";
import * as constants from "../constants/home";

const defaultState = {
  user: {},
  save: [],
  error: "",
};

const reducer = handleActions({}, defaultState);

export default reducer;
