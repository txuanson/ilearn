import { combineReducers } from "redux";

import userReducer from "./reducer/user";
import generalReducer from "./reducer/general";

//////////////////////////////////////////////////////////////////

const rootReducer = combineReducers({
  general: generalReducer,
  user: userReducer,
});

export default rootReducer;
