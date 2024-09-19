import { configureStore } from "@reduxjs/toolkit";

import seriesReducer from "./reducers/seriesReducer";
import moviesReducer from "./reducers/moviesReducer";

const store = configureStore({
  reducer: {
    series: seriesReducer,
    movies: moviesReducer,
  },
});

export default store;
