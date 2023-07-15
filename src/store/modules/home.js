import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getHomeGoodPriceData } from "@/service";

export const fetchHomeDateAtion = createAsyncThunk("fetchdata", async () => {
  const res = await getHomeGoodPriceData();
  return res;
});

const homeSlice = createSlice({
  name: "home",
  initialState: {
    goodPriceInfo: {},
  },

  reducers: {
    changeGoodsPriceInfoAction(state, { payload }) {
      state.goodPriceInfo = payload;
    },
  },

  extraReducers: {
    [fetchHomeDateAtion.fulfilled](state, { payload }) {
      state.goodPriceInfo = payload;
    },
  },
});

export const { changeGoodsPriceInfoAction } = homeSlice.reducer;
export default homeSlice.reducer;
