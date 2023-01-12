import { useRef, useState } from "react";
import { DataDialogInterface, IconDialogTypes } from "../interfaces";

interface RunDialogInterface {
  icon?: IconDialogTypes;
  title: string;
  description?: string;
  onConfirm?: () => void;
  onNext?: () => void;
}

const initialDialogData: DataDialogInterface = {
  title: "",
  description: "",
  isOpen: false,
  isConfirm: false,
  type: "confirm",
};

export const useDialog = () => {
  const [data, setData] = useState<DataDialogInterface>(initialDialogData);
  const handleConfirm = useRef(() => {});
  const handleNext = useRef(() => {});

  return {
    ...data,
    onRunDialog: ({
      icon,
      title,
      description,
      onConfirm,
      onNext,
    }: RunDialogInterface) => {
      if (onConfirm) {
        handleConfirm.current = onConfirm;
      }
      if (onNext) {
        handleNext.current = onNext;
      }

      setData({
        ...data,
        isOpen: true,
        title,
        description: description || "",
        icon,
      });
    },
    onConfirm: () => {
      handleConfirm.current();
      setData(initialDialogData);
    },
    onReject: () => {
      setData(initialDialogData);
    },
    onNext: () => {
      handleNext.current();
      setData(initialDialogData);
    },
  };
};
