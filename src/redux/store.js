import { combineReducers, configureStore } from "@reduxjs/toolkit";

import baseApi from "./base-api";
import navigation from "./slices/navigation";

export const rootReducer = combineReducers({
  [baseApi.reducerPath]: baseApi.reducer,
  navigation,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

export default store;
