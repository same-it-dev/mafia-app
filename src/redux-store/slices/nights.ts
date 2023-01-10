import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { NightsInterface, NightActionInterface } from "../../common/interfaces";

// Define the initial state using that type
const initialState: NightsInterface = [];

export const nightsSlice = createSlice({
  name: "nights",
  initialState,
  reducers: {
    setNightAction: (state, action: PayloadAction<NightActionInterface>) => {
      const isLastNight = state[state.length - 1];
      if (!isLastNight) state.push([]);

      state[state.length - 1].push(action.payload);
    },
    setNight: (state) => {
      state.push([]);
    },
  },
});

export const { setNightAction } = nightsSlice.actions;

export const selectNights = (state: RootState) => state.nights;

export const selectNight = (state: RootState) => state.nights;

export const nightsReducer = nightsSlice.reducer;
