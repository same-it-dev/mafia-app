import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { StepInterface, SceneTypes } from "../../common/interfaces";

// Define the initial state using that type
const initialState: StepInterface = {
  scene: "setting",
};

export const stepSlice = createSlice({
  name: "step",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setStep: (state, action: PayloadAction<StepInterface>) => {
      return { ...state, ...action.payload };
    },
    setScene: (state, action: PayloadAction<SceneTypes>) => {
      return { ...state, scene: action.payload };
    },
  },
});

export const { setStep, setScene } = stepSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectStep = (state: RootState) => state.step;

export const stepReducer = stepSlice.reducer;
