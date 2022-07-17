import {
  GET_LIST_CINEMA,
  GET_INFO_PICTURE_THEATER,
  GET_INFO_SHOWTIME,
} from "../../actions/QuanLyRapAction/ConstName";

const initialState = {
  heThongRap: [],
  danhSachRapCuaMoiHeThong: [],
  infoShowtime: {},
  dsRapCuaTaoLichChieu: [],
};

const cinemaManagerReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_LIST_CINEMA:
      state.heThongRap = payload;
      return { ...state };

    case GET_INFO_PICTURE_THEATER:
      state.danhSachRapCuaMoiHeThong = payload;
      return { ...state };

    case GET_INFO_SHOWTIME:
      state.infoShowtime = payload;
      return { ...state };

    default:
      return state;
  }
};
export default cinemaManagerReducer;
