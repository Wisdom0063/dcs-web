import { applyMiddleware, compose, createStore } from "redux";
import { rootReducer } from "./combine-reducers";
const middleware = [] // [thunk];


export const makeStore = initialState => {
  let store = createStore(
    rootReducer,
    initialState,

    compose(applyMiddleware(...middleware))
  );
  return store;
};