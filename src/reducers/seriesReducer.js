import { createSlice } from "@reduxjs/toolkit";
import seriesService from "../services/series";

const seriesSlice = createSlice({
  name: "series",
  initialState: {
    series: [],
    years: [],
  },
  reducers: {
    setSeries(state, action) {
      return { series: action.payload, years: state.years };
    },
    setYears(state, action) {
      return { series: state.series, years: action.payload };
    },
  },
});

export const { setSeries, setYears } = seriesSlice.actions;

export const initializeSeries = (year) => {
  return async (dispatch) => {
    const series = await seriesService.getSeries(year);
    dispatch(setSeries(series));
  };
};

export const initializeYears = () => {
  return async (dispatch) => {
    const years = await seriesService.getYears();

    dispatch(setYears(years));
  };
};

export default seriesSlice.reducer;
