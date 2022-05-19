import _ from "lodash";
import {
  CHON_GHE,
  LAY_DANH_SACH_PHONG_VE,
} from "../../actions/QuanLyDatVeAction/constName";

const initialState = {
  chiTietPhongVe: {},
  danhSachGheDangChon: [],
};

const QuanLyDatVeReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LAY_DANH_SACH_PHONG_VE:
      return { ...state, chiTietPhongVe: payload };
    case CHON_GHE:
      let dsGheDangChon = [...state.danhSachGheDangChon];
      let index = dsGheDangChon.findIndex(
        (gheDangChon) => gheDangChon.maGhe === payload.maGhe
      );
      if (index === -1) {
        dsGheDangChon.length < 7
          ? dsGheDangChon.push(payload)
          : alert("Bạn chỉ được đặt tối đa 7 ghế trong 1 lần đặt!");
      } else {
        dsGheDangChon.splice(index, 1);
      }
      dsGheDangChon = _.sortBy(dsGheDangChon, ["tenGhe"]);
      return { ...state, danhSachGheDangChon: dsGheDangChon };
    default:
      return state;
  }
};
export default QuanLyDatVeReducer;
