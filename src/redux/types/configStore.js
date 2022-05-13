import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import CarouselReducer from "../reducers/CarouselReducer/CarouselReducer";
import QuanLyRapReducer from "../reducers/QuanLyRapReducer/QuanLyRapReducer";

const rootReducer = combineReducers({
  CarouselReducer,
  QuanLyRapReducer: QuanLyRapReducer,
});
const store = createStore(rootReducer, applyMiddleware(thunk));

export { store };
