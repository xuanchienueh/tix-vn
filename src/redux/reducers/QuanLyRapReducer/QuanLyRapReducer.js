import {
  LAY_DS_RAP,
  LAY_THONG_TIN_CUM_RAP,
  LAY_THONG_TIN_LICH_CHIEU_PHIM,
} from "../../actions/QuanLyRapAction/ConstName";

const initialState = {
  heThongRap: [],
  danhSachRapCuaMoiHeThong: [],
  infoShowtime: {},
  dsRapCuaTaoLichChieu: [],
};

const QuanLyRapReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LAY_DS_RAP:
      state.heThongRap = payload;
      return { ...state };

    case LAY_THONG_TIN_CUM_RAP:
      state.danhSachRapCuaMoiHeThong = payload;
      return { ...state };

    case LAY_THONG_TIN_LICH_CHIEU_PHIM:
      state.infoShowtime = payload;
      return { ...state };

    default:
      return state;
  }
};
export default QuanLyRapReducer;
