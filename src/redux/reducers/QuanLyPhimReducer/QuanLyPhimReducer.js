import { LAY_THONG_TIN_PHIM } from "../../actions/QuanLyPhimAction/constAction";

const initialState = {
  layThongTinPhim: {},
};

const QuanLyPhimReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LAY_THONG_TIN_PHIM:
      // console.log(payload);
      return { ...state, layThongTinPhim: payload };

    default:
      return state;
  }
};
export default QuanLyPhimReducer;
