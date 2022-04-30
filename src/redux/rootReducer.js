import { combineReducers } from "redux";
import themeReducer from "./reducer/themeReducer";

const rootReducer = combineReducers({
  themeReducer: themeReducer,
});

export default rootReducer;
