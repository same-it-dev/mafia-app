import { RoleIdTypes, RoleInterface } from "common/interfaces";
import { GamerPropsInterface } from "features/gamers";

import {
  Beauty,
  Doctor,
  Mafia,
  Sheriff,
  Admirer,
  Detective,
  Maniac,
  Scrounger,
} from "features/gamers/components";

const gamers: Record<
  RoleIdTypes | string,
  (props: GamerPropsInterface) => JSX.Element
> = {
  beauty: Beauty,
  sheriff: Sheriff,
  doctor: Doctor,
  admirer: Admirer,
  detective: Detective,
  mafia: Mafia,
  maniac: Maniac,
  scrounger: Scrounger,
};

export const useGamer = (role: RoleInterface) => gamers[role.id];
