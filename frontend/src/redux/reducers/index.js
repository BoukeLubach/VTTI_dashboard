import { combineReducers } from "redux";
import { terminalsReducer, selectedTerminalReducer, selectedTerminalEnergyReducer } from "./terminalsReducer";
const reducers = combineReducers({
  allTerminals: terminalsReducer,
  terminal: selectedTerminalReducer,
  terminalenergy: selectedTerminalEnergyReducer
});
export default reducers;