import { RoleIdTypes } from "./types";

export interface PresetInterface {
  id: number;
  name: string;
  roles: RoleIdTypes[];
}

export interface PresetTypesInterface {
  id: number;
  type: number;
  presets: PresetInterface[];
}
