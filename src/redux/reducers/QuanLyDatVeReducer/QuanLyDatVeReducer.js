import _ from "lodash";
import Swal from "sweetalert2";
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
        dsGheDangChon.length < 5
          ? dsGheDangChon.push(payload)
          : Swal.fire({
              icon: "info",
              confirmButtonColor: "blue",
              timer: 3000,
              timerProgressBar: true,
              title: "Không được phép!",
              text: "Bạn chỉ được đặt tối đa 5 ghế cùng lúc!",
              footer:
                'Nếu có thắc mắc liên hệ &nbsp <a class="text-red-600" href="tel:+19001234">19001234</a>',
            });
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
