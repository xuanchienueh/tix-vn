import { QLDatVeService } from "../../../services/QuanLyDatVeService";
import { LAY_DANH_SACH_PHONG_VE } from "./constName";

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
      let result = await QLDatVeService.datVe(thongTinDatVe);
      console.log(result);
    } catch (err) {
      console.log(err);
    }
  };
};
