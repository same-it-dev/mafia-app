import { useDialog } from "common/components";
import { useGamers, useScene } from "common/hooks";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { disableGamers, disableKilledNigthGamers } from "redux-store";

export const useNigthResults = () => {
  const dispatch = useDispatch();
  const [disableGamersIds, onChangeDisableGamers] = useState<number[]>([]);
  const deleteGamersDataDialog = useDialog();
  const nextSceneDataDialog = useDialog();

  const { gamers: killedNigthGamers } = useGamers({
    iskilledNigthGamers: true,
  });
  const { gamers: activeGamers } = useGamers({ isExcludeKilled: true });

  const { runScene } = useScene();

  const onSubmitNextScene = (): void => {
    nextSceneDataDialog.onRunDialog({
      title: "Перейти до балагану ?",
      onConfirm: () => {
        dispatch(disableKilledNigthGamers());
        runScene("meeting");
      },
    });
  };

  const onSubmitDisableGamers = (): void => {
    if (!disableGamersIds.length)
      return deleteGamersDataDialog.onRunDialog({
        title: "Оберіть гравців !!!",
      });

    dispatch(disableGamers({ gamerIds: disableGamersIds }));

    onChangeDisableGamers([]);

    nextSceneDataDialog.onRunDialog({
      title: "гравців видалено, перейти до балагану ?",
      onConfirm: () => {
        dispatch(disableKilledNigthGamers());
        runScene("meeting");
      },
    });
  };

  return {
    killedNigthGamers,
    activeGamers,
    onSubmitNextScene,
    onSubmitDisableGamers,
    onChangeDisableGamers,
    nextSceneDataDialog,
    deleteGamersDataDialog,
    disableGamersIds,
  };
};
