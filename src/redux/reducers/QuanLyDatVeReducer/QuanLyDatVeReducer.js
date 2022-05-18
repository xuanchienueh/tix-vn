import { LAY_DANH_SACH_PHONG_VE } from "../../actions/QuanLyDatVeAction/constName";

const initialState = {
  chiTietPhongVe: {},
};

const QuanLyDatVeReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LAY_DANH_SACH_PHONG_VE:
      // console.log(payload);
      return { ...state, chiTietPhongVe: payload };

    default:
      return state;
  }
};
export default QuanLyDatVeReducer;
