import { combineReducers, configureStore } from "@reduxjs/toolkit";
import navigation from "./slices/navigation";

export const rootReducer = combineReducers({
  navigation,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
