import { createStore, combineReducers } from "redux";

const reducers = {};

export type AppState = {
  [T in keyof typeof reducers]: ReturnType<typeof reducers[T]>;
};

export default createStore(combineReducers<AppState>(reducers));
