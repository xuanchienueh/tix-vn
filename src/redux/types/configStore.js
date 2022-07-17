import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import CarouselReducer from "../reducers/CarouselReducer/CarouselReducer";
import LoadingReducer from "../reducers/LoadingReducer";
import QuanLyDatVeReducer from "../reducers/QuanLyDatVeReducer/QuanLyDatVeReducer";
import QuanLyNguoiDungReducer from "../reducers/QuanLyNguoiDungReducer/QuanLyNguoiDungReducer";
import manageFilmRuducer from "../reducers/manageFilmReducer/manageFilmReducer";
import cinemaManagerReducer from "../reducers/cinemaManagerReducer/cinemaManagerReducer";

const rootReducer = combineReducers({
  CarouselReducer,
  cinemaManagerReducer: cinemaManagerReducer,
  QuanLyNguoiDungReducer: QuanLyNguoiDungReducer,
  QuanLyDatVeReducer: QuanLyDatVeReducer,
  LoadingReducer: LoadingReducer,
  manageFilmRuducer,
});
const store = createStore(rootReducer, applyMiddleware(thunk));

export { store };
