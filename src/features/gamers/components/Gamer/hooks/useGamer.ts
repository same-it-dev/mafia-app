import { RoleIdTypes, RoleInterface } from "common/interfaces";
import { GamerPropsInterface } from "features/gamers";

import {
  Beauty,
  Doctor,
  Godfather,
  Sheriff,
  Admirer,
  Detective,
  Maniac,
} from "features/gamers/components";

const gamers: Record<RoleIdTypes, (props: GamerPropsInterface) => JSX.Element> =
  {
    beauty: Beauty,
    sheriff: Sheriff,
    doctor: Doctor,
    admirer: Admirer,
    detective: Detective,
    godfather: Godfather,
    mafiosi: Godfather,
    maniac: Maniac,
    peaceful: Godfather,
    scrounger: Godfather,
  };

export const useGamer = (role: RoleInterface) => gamers[role.id];
