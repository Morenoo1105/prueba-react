import { createSlice } from "@reduxjs/toolkit";
import moviesService from "../services/movies";

const moviesSlice = createSlice({
  name: "movies",
  initialState: [],
  reducers: {
    setMovies(state, action) {
      return action.payload;
    },
  },
});

export const { setMovies } = moviesSlice.actions;

export const initializeMovies = () => {
  return async (dispatch) => {
    const movies = await moviesService.getMovies();
    dispatch(setMovies(movies));
  };
};

export default moviesSlice.reducer;
