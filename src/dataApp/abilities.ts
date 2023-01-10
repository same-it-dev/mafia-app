import { AbilityTypes } from "common/interfaces";

export const abilities: Record<
  AbilityTypes,
  { id: AbilityTypes; name: string }
> = {
  block: {
    id: "block",
    name: "Блокування",
  },
  immortal: {
    id: "immortal",
    name: "Бесмертя",
  },
  immortalBlock: {
    id: "immortalBlock",
    name: "Бесмертя та блокування",
  },
  healing: {
    id: "healing",
    name: "Лікування",
  },
  checkRole: {
    id: "checkRole",
    name: "Перевірка на роль",
  },
  checkPersonTeam: {
    id: "checkPersonTeam",
    name: "Перевірка на команду",
  },
  killing: {
    id: "killing",
    name: "Вбивство",
  },
  comparePersonsTeam: {
    id: "comparePersonsTeam",
    name: "Перевірка двох персон на команду",
  },
  checkSheriffRole: {
    id: "checkSheriffRole",
    name: "Перевірка на шерифа",
  },
};
