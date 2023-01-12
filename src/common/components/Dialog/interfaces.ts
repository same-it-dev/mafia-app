export interface DataDialogInterface {
  icon?: IconDialogTypes;
  title: string;
  description: string;
  isOpen: boolean;
  isConfirm: boolean;
  type: "confirm" | "warning" | "info";
}

export type IconDialogTypes = "yes" | "no";
