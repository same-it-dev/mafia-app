import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { GamerInterface } from "common/interfaces";

// Define the initial state using that type
const initialState: GamerInterface[] = [];

export const gamersSlice = createSlice({
  name: "gamers",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setGamers: (state, action: PayloadAction<GamerInterface[]>) =>
      action.payload,
  },
});

export const { setGamers } = gamersSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectGames = (state: RootState) => state.games;

export const gamersReducer = gamersSlice.reducer;
