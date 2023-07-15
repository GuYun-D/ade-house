import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getHomeGoodPriceData,
  getHomeHighScoreData,
  getHomeDiscountData,
} from "@/service";

export const fetchHomeDateAtion = createAsyncThunk(
  "fetchdata",
  (palload, { dispatch }) => {
    getHomeHighScoreData().then((res) => {
      dispatch(changeHighScoreInfoAction(res));
    });

    getHomeGoodPriceData().then((res) => {
      dispatch(changeGoodsPriceInfoAction(res));
    });

    getHomeDiscountData().then((res) => {
      dispatch(changeDiscountInfoAction(res));
    });
  }
);

const homeSlice = createSlice({
  name: "home",
  initialState: {
    goodPriceInfo: {},
    highScoreInfo: {},
    disCountInfo: {},
  },

  reducers: {
    changeGoodsPriceInfoAction(state, { payload }) {
      state.goodPriceInfo = payload;
    },

    changeHighScoreInfoAction(state, { payload }) {
      state.highScoreInfo = payload;
    },

    changeDiscountInfoAction(state, { payload }) {
      state.disCountInfo = payload;
    },
  },
});

export const {
  changeGoodsPriceInfoAction,
  changeHighScoreInfoAction,
  changeDiscountInfoAction,
} = homeSlice.actions;
export default homeSlice.reducer;
