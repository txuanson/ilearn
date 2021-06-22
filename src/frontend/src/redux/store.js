import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

import reducer from "./reducers";

// create the saga middleware
// const sagaMiddleware = createSagaMiddleware();
// mount it on the Store
const middlewares = [thunk, logger];
// const middlewares = [thunk];
const store = createStore(reducer, applyMiddleware(...middlewares));

// then run the saga
// sagaMiddleware.run(mySaga);

export default store;
