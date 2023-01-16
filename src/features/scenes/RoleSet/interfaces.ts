export interface GamerFormValuesInterface {
  roleId: string;
  gamerId: string;
}
export interface GamerFormRoleInterface {
  id: number;
  roleTypeId: string;
  name: string;
}

export interface GamerFormHandlersInterface {
  resetForm: () => void;
}

export type GamerSubmitFormInterface = (data: GamerFormValuesInterface) => void;
