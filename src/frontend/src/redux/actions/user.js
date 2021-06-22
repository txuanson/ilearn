import { createAction } from "redux-actions";
import * as constants from "../constants/user";
import * as api from "../../api/user";
import { setLoading } from "../actions/general";
import handleErrorApi from "../../utils/handleErrorApi";

export const getProfileSuccess = createAction(constants.GET_INFO);

export const getUser = () => {
  return async (dispatch) => {
    try {
      dispatch(setLoading(true));
      const res = await api.getProfile();
      dispatch(getProfileSuccess(res.content));
      dispatch(setLoading(false));
    } catch (err) {
      dispatch(setLoading(false));
      // if (err && err.response.status == 401) return logout();
      handleErrorApi(err);
    }
  };
};
