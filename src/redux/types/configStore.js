import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import CarouselReducer from "../reducers/CarouselReducer/CarouselReducer";
import QuanLyDatVeReducer from "../reducers/QuanLyDatVeReducer/QuanLyDatVeReducer";
import QuanLyNguoiDungReducer from "../reducers/QuanLyNguoiDungReducer/QuanLyNguoiDungReducer";
import QuanLyRapReducer from "../reducers/QuanLyRapReducer/QuanLyRapReducer";

const rootReducer = combineReducers({
  CarouselReducer,
  QuanLyRapReducer: QuanLyRapReducer,
  QuanLyNguoiDungReducer: QuanLyNguoiDungReducer,
  QuanLyDatVeReducer: QuanLyDatVeReducer,
});
const store = createStore(rootReducer, applyMiddleware(thunk));

export { store };
