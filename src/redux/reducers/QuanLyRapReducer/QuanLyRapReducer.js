import {
  LAY_DS_RAP,
  LAY_THONG_TIN_CUM_RAP,
} from "../../actions/QuanLyRapAction/ConstName";

const initialState = {
  heThongRap: [],
  danhSachRapCuaMoiHeThong: [],
};

const QuanLyRapReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LAY_DS_RAP:
      state.heThongRap = payload;
      return { ...state };
    case LAY_THONG_TIN_CUM_RAP:
      state.danhSachRapCuaMoiHeThong = payload;
      return { ...state };

    default:
      return state;
  }
};
export default QuanLyRapReducer;
