import { ActionTypes } from "../constants/action-types";

export const setTerminals = (terminals) => {
  return {
    type: ActionTypes.SET_TERMINALS,
    payload: terminals,
  };
};

export const selectedTerminal = (terminal) => {
  return {
    type: ActionTypes.SELECTED_TERMINAL,
    payload: terminal,
  };
};
// export const removeSelectedProduct = () => {
//   return {
//     type: ActionTypes.REMOVE_SELECTED_PRODUCT,
//   };
// };