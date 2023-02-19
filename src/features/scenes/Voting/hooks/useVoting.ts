import { useDialog } from "common/components";
import { useScene } from "common/hooks";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { disableGamers } from "redux-store";

export const useVoting = () => {
  const dispatch = useDispatch();
  const [gamerIdsValue, setGamerIdsValue] = useState<number[]>([]);
  const { runScene } = useScene();

  const startNightDataDialog = useDialog();
  const deleteDataGamerDialog = useDialog();
  const alertDataDialog = useDialog();

  const onSelectGamers = (ids: number[]) => {
    setGamerIdsValue(ids);
  };

  const onStartNight = () => {
    startNightDataDialog.onRunDialog({
      title: "Почати ніч ?",
      onConfirm: () => {
        runScene("nightActions");
      },
    });
  };

  const onDeleteGamer = () => {
    if (!gamerIdsValue.length)
      return alertDataDialog.onRunDialog({ title: "Оберіть гравця" });

    dispatch(disableGamers({ gamerIds: gamerIdsValue }));

    setGamerIdsValue([]);

    startNightDataDialog.onRunDialog({
      title: "Гравців видаленно, почати ніч ?",
      onConfirm: () => {
        runScene("nightActions");
      },
    });
  };

  return {
    gamerIdsValue,
    onSelectGamers,
    onDeleteGamer,
    onStartNight,
    deleteDataGamerDialog,
    alertDataDialog,
    startNightDataDialog,
  };
};
