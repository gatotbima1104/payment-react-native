import { combineReducers, configureStore } from "@reduxjs/toolkit";

import User from "./reducers/user";

const rootReducer = combineReducers({
  user: User,
});

const store = configureStore({
  reducer: rootReducer,
});

export type IRootState = ReturnType<typeof store.getState>
export default store;
