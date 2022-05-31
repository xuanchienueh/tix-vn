import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import CarouselReducer from "../reducers/CarouselReducer/CarouselReducer";
import LoadingReducer from "../reducers/LoadingReducer";
import QuanLyDatVeReducer from "../reducers/QuanLyDatVeReducer/QuanLyDatVeReducer";
import QuanLyNguoiDungReducer from "../reducers/QuanLyNguoiDungReducer/QuanLyNguoiDungReducer";
import QuanLyPhimReducer from "../reducers/QuanLyPhimReducer/QuanLyPhimReducer";
import QuanLyRapReducer from "../reducers/QuanLyRapReducer/QuanLyRapReducer";

const rootReducer = combineReducers({
  CarouselReducer,
  QuanLyRapReducer: QuanLyRapReducer,
  QuanLyNguoiDungReducer: QuanLyNguoiDungReducer,
  QuanLyDatVeReducer: QuanLyDatVeReducer,
  LoadingReducer: LoadingReducer,
  QuanLyPhimReducer: QuanLyPhimReducer,
});
const store = createStore(rootReducer, applyMiddleware(thunk));

export { store };
