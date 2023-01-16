import { useDialog } from "common/components";
import { useGamers, useScene } from "common/hooks";
import { useState } from "react";

export const useVoting = () => {
  const [gamerIdValue, setGamerIdValue] = useState("");
  const { runScene } = useScene();
  const { gamers, setGamers } = useGamers();

  const startNightDataDialog = useDialog();
  const deleteDataGamerDialog = useDialog();
  const alertDataDialog = useDialog();

  const onSelectGamer = (id: string) => {
    setGamerIdValue(id);
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
    if (!gamerIdValue)
      return alertDataDialog.onRunDialog({ title: "Оберіть гравця" });

    deleteDataGamerDialog.onRunDialog({
      title: `Ви дійсно бажаєте видалити гравця ?`,
      onConfirm: () => {
        setGamers(
          gamers.map((gamer) =>
            gamer.id === Number(gamerIdValue)
              ? { ...gamer, isActive: false }
              : gamer
          )
        );
      },
    });
  };

  return {
    gamerIdValue,
    onSelectGamer,
    onDeleteGamer,
    onStartNight,
    deleteDataGamerDialog,
    alertDataDialog,
    startNightDataDialog,
  };
};
