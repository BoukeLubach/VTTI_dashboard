import { ActionTypes } from "../constants/action-types";
const intialState = {
  terminals: [],
};

export const terminalsReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_TERMINALS:
      return { ...state, terminals: payload };
    default:
      return state;
  }
};

export const selectedTerminalReducer = (state = {}, { type, payload }) => {
  console.log(type);
  switch (type) {
    case ActionTypes.SELECTED_TERMINAL:
      return { ...state, ...payload };
    // case ActionTypes.REMOVE_SELECTED_PRODUCT:
    //   return {};
    default:
      return state;
  }
};



export const selectedTerminalEnergyReducer = (state = {}, { type, payload }) => {
  console.log(type);
  switch (type) {
    case ActionTypes.SELECTED_TERMINAL_ENERGY:
      return { ...state, ...payload };
    default:
      return state;
  }
};