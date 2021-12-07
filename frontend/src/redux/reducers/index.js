import { combineReducers } from "redux";
import { terminalsReducer, selectedTerminalReducer } from "./terminalsReducer";
const reducers = combineReducers({
  allTerminals: terminalsReducer,
  terminal: selectedTerminalReducer,
});
export default reducers;