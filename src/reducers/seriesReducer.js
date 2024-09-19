import { createSlice } from "@reduxjs/toolkit";
import seriesService from "../services/series";

const seriesSlice = createSlice({
  name: "series",
  initialState: [],
  reducers: {
    setSeries(state, action) {
      return action.payload;
    },
  },
});

export const { setSeries } = seriesSlice.actions;

export const initializeSeries = () => {
  return async (dispatch) => {
    const series = await seriesService.getSeries();
    dispatch(setSeries(series));
  };
};

export default seriesSlice.reducer;
