import { ActionTypes } from "../constants/action-types";

export const setTerminals = (terminals) => {
  return {
    type: ActionTypes.SET_TERMINALS,
    payload: products,
  };
};

export const selectedTerminal = (terminal) => {
  return {
    type: ActionTypes.SELECTED_TERMINAL,
    payload: product,
  };
};
// export const removeSelectedProduct = () => {
//   return {
//     type: ActionTypes.REMOVE_SELECTED_PRODUCT,
//   };
// };