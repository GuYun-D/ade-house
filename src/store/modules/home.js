import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getHomeGoodPriceData, getHomeHighScoreData } from "@/service";

export const fetchHomeDateAtion = createAsyncThunk(
  "fetchdata",
  (palload, { dispatch }) => {
    getHomeHighScoreData().then((res) => {
      dispatch(changeHighScoreInfoAction(res));
    });

    getHomeGoodPriceData().then((res) => {
      dispatch(changeGoodsPriceInfoAction(res));
    });
  }
);

const homeSlice = createSlice({
  name: "home",
  initialState: {
    goodPriceInfo: {},
    highScoreInfo: {},
  },

  reducers: {
    changeGoodsPriceInfoAction(state, { payload }) {
      state.goodPriceInfo = payload;
    },

    changeHighScoreInfoAction(state, { payload }) {
      state.highScoreInfo = payload;
    },
  },
});

export const { changeGoodsPriceInfoAction, changeHighScoreInfoAction } =
  homeSlice.actions;
export default homeSlice.reducer;
