import { createAction } from "redux-actions";
import * as constants from "../constants/general";

export const setLoading = createAction(constants.SET_LOADING);
