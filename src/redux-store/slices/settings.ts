import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { PresetInterface } from "common/interfaces";
import { presetTypes } from "dataApp/presetTypes";

// Define a type for the slice state
interface SettingState {
  isStartGame: boolean;
  countGamers: number;
  gameCycle: number;
  preset: PresetInterface;
}

// Define the initial state using that type
const initialState: SettingState = {
  isStartGame: false,
  countGamers: presetTypes[4].type,
  gameCycle: 1,
  preset: presetTypes[4].presets[2],
};

export const settingSlice = createSlice({
  name: "settings",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setSetting: (
      state,
      action: PayloadAction<{ preset: PresetInterface; countGamers: number }>
    ) => {
      state.preset = action.payload.preset;
      state.countGamers = action.payload.countGamers;
    },
    setStartGame: (state, action: PayloadAction<boolean>) => {
      state.isStartGame = action.payload;
    },
    setGameCycle: (state, action: PayloadAction<number>) => {
      state.gameCycle = action.payload;
    },
  },
});

export const { setSetting, setStartGame, setGameCycle } = settingSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectSetting = (state: RootState) => state.settings;

export const selectGameCycle = (state: RootState) => state.settings.gameCycle;

export const selectSettingsCountGamers = (state: RootState) =>
  state.settings.countGamers;

export const selectSettigsPreset = (state: RootState) => state.settings.preset;

export const selectIsStartGame = (state: RootState) =>
  state.settings.isStartGame;

export const settingReducer = settingSlice.reducer;
