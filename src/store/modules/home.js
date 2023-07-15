import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getHomeGoodPriceData,
  getHomeHighScoreData,
  getHomeDiscountData,
  getHomeRecommendData,
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

    getHomeRecommendData().then((res) => {
      dispatch(changeHotrecommenddestInfoAction(res));
    });
  }
);

const homeSlice = createSlice({
  name: "home",
  initialState: {
    goodPriceInfo: {},
    highScoreInfo: {},
    disCountInfo: {},
    hotrecommenddestInfo: {},
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

    changeHotrecommenddestInfoAction(state, { payload }) {
      state.hotrecommenddestInfo = payload;
    },
  },
});

export const {
  changeGoodsPriceInfoAction,
  changeHighScoreInfoAction,
  changeDiscountInfoAction,
  changeHotrecommenddestInfoAction,
} = homeSlice.actions;
export default homeSlice.reducer;
