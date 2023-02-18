import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store";
import { AbilityTypes, GamerInterface, RoleIdTypes } from "common/interfaces";
import { gamers } from "dataApp/gamers";
import { killingStrategy } from "./strategies";

// Define the initial state using that type
const initialState: GamerInterface[] = gamers;

interface PushIncomingAbilityInterface {
  gamerId: number | number[];
  gamerRoleId: RoleIdTypes;
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
      const { abilityId, gamerId, gamerRoleId } = action.payload;

      if (abilityId === "killing" && typeof gamerId === "number") {
        return killingStrategy(gamerRoleId, gamerId, state);
      }
    },
  },
});

export const { setGamers } = gamersSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectGames = (state: RootState) => state.games;

export const gamersReducer = gamersSlice.reducer;
