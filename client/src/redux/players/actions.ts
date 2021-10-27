import { toast } from "react-toastify";

export const actionTypes = {
  ADD_PLAYER: "ADD_PLAYER",
  REMOVE_PLAYER: "REMOVE_PLAYER",
};

export function addPlayer(payload: any) {
  return {
    type: actionTypes.ADD_PLAYER,
    payload,
  };
}

export function removePlayer(payload: any) {
  return {
    type: actionTypes.REMOVE_PLAYER,
    payload,
  };
}

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function handleAddPlayer(payload: any, actions: any, history: any) {
  return async (dispatch: any) => {
    try {
      await sleep(2000);
      dispatch(addPlayer(payload));
      toast.success("Player added successfully");
      actions.resetForm();
      actions.setSubmitting(false);
      history.push("/");
    } catch (err) {
      actions.setSubmitting(false);
      toast.error("Player saved unsuccessful");
    }
  };
}
