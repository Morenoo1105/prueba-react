import { createSlice } from "@reduxjs/toolkit";
import moviesService from "../services/movies";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    movies: [],
    years: [],
  },
  reducers: {
    setMovies(state, action) {
      return { movies: action.payload, years: state.years };
    },
    setYears(state, action) {
      return { movies: state.movies, years: action.payload };
    },
  },
});

export const { setMovies, setYears } = moviesSlice.actions;

export const initializeMovies = (year) => {
  return async (dispatch) => {
    const movies = await moviesService.getMovies(year);
    dispatch(setMovies(movies));
  };
};

export const initializeYears = () => {
  return async (dispatch) => {
    const years = await moviesService.getYears();

    dispatch(setYears(years));
  };
};

export default moviesSlice.reducer;
