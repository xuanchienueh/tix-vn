import Swal from "sweetalert2";
import { connection } from "../../..";
import { QLDatVeService } from "../../../services/QuanLyDatVeService";
import { DISPLAY_LOADING, HIDDEN_LOADING } from "../../reducers/LoadingReducer";
import {
  CHON_GHE,
  DAT_VE_DONE,
  LAY_DANH_SACH_PHONG_VE,
  TAB_ACTIVE,
} from "./constName";

export const layDanhSachPhongVe = (maLichChieu) => {
  return async (dispatch) => {
    try {
      let result = await QLDatVeService.LayDanhSachPhongVe(maLichChieu);
      result.status === 200 &&
        dispatch({
          type: LAY_DANH_SACH_PHONG_VE,
          payload: result.data.content,
        });
    } catch (err) {
      console.log(err);
    }
  };
};

export const datVeAction = (thongTinDatVe) => {
  return async (dispatch) => {
    try {
      dispatch({ type: DISPLAY_LOADING });
      let result = await QLDatVeService.datVe(thongTinDatVe);
      result.status === 200 &&
        (await dispatch(layDanhSachPhongVe(thongTinDatVe.maLichChieu)));
      await dispatch({ type: DAT_VE_DONE });

      await dispatch({ type: HIDDEN_LOADING });
      Swal.fire({
        icon: "success",
        title: "Đặt vé thành công!",
        didClose: () => {
          dispatch({ type: TAB_ACTIVE, payload: "2" });
        },
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
