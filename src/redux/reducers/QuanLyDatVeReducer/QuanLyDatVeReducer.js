import _ from "lodash";
import Swal from "sweetalert2";
import {
  CHON_GHE,
  DAT_VE_DONE,
  LAY_DANH_SACH_PHONG_VE,
  LAY_DS_GHE_USER_KHAC_DANG_CHON,
  TAB_ACTIVE,
} from "../../actions/QuanLyDatVeAction/constName";

const initialState = {
  chiTietPhongVe: {},
  danhSachGheDangChon: [],
  DS_GheNguoiKhacDangChon: [],
  tabActive: "1",
};

const QuanLyDatVeReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LAY_DANH_SACH_PHONG_VE:
      return { ...state, chiTietPhongVe: payload };
    case CHON_GHE: {
      // console.log(payload);
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
    }

    case DAT_VE_DONE:
      state.danhSachGheDangChon = [];
      return { ...state };

    case TAB_ACTIVE:
      return { ...state, tabActive: payload };

    case LAY_DS_GHE_USER_KHAC_DANG_CHON: {
      // console.log(payload);
      return { ...state };
    }
    default:
      return state;
  }
};
export default QuanLyDatVeReducer;
