import { combineReducers } from "redux";
import counter from "./counter";
import notes from "./notes";

export default combineReducers({ counter, notes });
