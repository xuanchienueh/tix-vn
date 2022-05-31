import { qlPhimService } from "../../../services/QuanLyPhimService";
import { LAY_THONG_TIN_PHIM } from "./constAction";

export const themPhim = (formData) => {
  return async (dispatch) => {
    try {
      let result = await qlPhimService.ThemPhimUploadHinh(formData);
      alert("them phim success");
      console.log("result", result);
    } catch (err) {
      console.log("them phim that bai", err.response?.data);
    }
  };
};

export const LayThongTinPhimAction = (maPhim) => {
  return async (dispatch) => {
    try {
      let result = await qlPhimService.layThongTinPhim(maPhim);
      dispatch({ type: LAY_THONG_TIN_PHIM, payload: result.data.content });
    } catch (err) {
      console.log("lay thong tin phim fail", err.response);
    }
  };
};
