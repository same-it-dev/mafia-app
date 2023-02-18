import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store";
import { AbilityTypes, GamerInterface } from "common/interfaces";
import { gamers } from "dataApp/gamers";
import { healingStrategy, killingStrategy } from "./strategies";

// Define the initial state using that type
const initialState: GamerInterface[] = gamers;

export interface PushIncomingAbilityInterface {
  pushedGamer: GamerInterface;
  abilityId: AbilityTypes;
}

export const gamersSlice = createSlice({
  name: "gamers",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setGamers: (state, action: PayloadAction<GamerInterface[]>) =>
      action.payload,

    pushIncomingAbility: (
      state,
      action: PayloadAction<PushIncomingAbilityInterface>
    ) => {
      const { abilityId, pushedGamer } = action.payload;

      if (abilityId === "killing") {
        return killingStrategy(pushedGamer, state);
      }

      if (abilityId === "healing") {
        return healingStrategy(pushedGamer, state);
      }
    },
  },
});

export const { setGamers, pushIncomingAbility } = gamersSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectGames = (state: RootState) => state.games;

export const gamersReducer = gamersSlice.reducer;
