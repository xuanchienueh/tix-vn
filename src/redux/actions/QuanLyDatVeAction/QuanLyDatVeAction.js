import Swal from "sweetalert2";
import { QLDatVeService } from "../../../services/QuanLyDatVeService";
import { DISPLAY_LOADING, HIDDEN_LOADING } from "../../reducers/LoadingReducer";
import { lichSuDatVe } from "../QuanLyNguoiDungAction/ActionName";
import {
  CHECK_STATUS_SEAT,
  CHON_GHE,
  DAT_VE_DONE,
  LAY_DANH_SACH_PHONG_VE,
  TAB_ACTIVE,
} from "./constName";

export const layDanhSachPhongVe = (maLichChieu, loading = true) => {
  return async (dispatch) => {
    try {
      loading && (await dispatch({ type: DISPLAY_LOADING }));
      let result = await QLDatVeService.LayDanhSachPhongVe(maLichChieu);
      result.status === 200 &&
        (await dispatch({
          type: LAY_DANH_SACH_PHONG_VE,
          payload: result.data.content,
        }));
      await dispatch({ type: HIDDEN_LOADING });
    } catch (err) {
      await dispatch({ type: HIDDEN_LOADING });

      console.log(err);
    }
  };
};

export const datVeAction = (thongTinDatVe) => {
  return async (dispatch) => {
    try {
      dispatch({ type: DISPLAY_LOADING });
      let result = await QLDatVeService.datVe(thongTinDatVe);
      await dispatch(layDanhSachPhongVe(thongTinDatVe.maLichChieu));
      await dispatch({ type: DAT_VE_DONE });

      await dispatch({ type: HIDDEN_LOADING });
      result.status === 200 &&
        Swal.fire({
          icon: "success",
          title: "Đặt vé thành công!",
          timer: 1000,
          didOpen: () => dispatch(lichSuDatVe()),
          didClose: () => dispatch({ type: TAB_ACTIVE, payload: "2" }),
        });
    } catch (err) {
      dispatch({ type: HIDDEN_LOADING });
      console.log(err);
    }
  };
};

export const chonGheAction = (ghe) => {
  return async (dispatch, getState) => {
    try {
      /* đưa thông tin ghế đang chọn lên reducer */
      await dispatch({ type: CHON_GHE, payload: ghe });

      // call api về backend

      // let dsGhe = JSON.stringify(dsGheDangChon);
      // console.log("dsGheDangChon", dsGhe);
      // console.log("taiKhoan", taiKhoan);
      // console.log("maLichChieu", maLichChieu);

      // connection.invoke("datGhe", taiKhoan, dsGhe, maLichChieu);
    } catch (error) {
      console.log(error);
    }
  };
};

export const createMovieScheduleAction = async (dataLichChieu) => {
  try {
    let result = await QLDatVeService.taoLichChieu(dataLichChieu);
    Swal.fire({ title: "Tạo lịch chiếu thành công!", timer: 1000 });
  } catch (err) {
    console.log("tạo lịch chiếu fail", err.response?.data);
  }
};

export const checkStatusSeatAction = (danhSachGheDangChon) => {
  return {
    type: CHECK_STATUS_SEAT,
    payload: danhSachGheDangChon,
  };
};
