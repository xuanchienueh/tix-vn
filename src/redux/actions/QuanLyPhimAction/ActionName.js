import { qlPhimService } from "../../../services/QuanLyPhimService";
import { LAY_THONG_TIN_PHIM } from "./constAction";
import { history } from "../../../App";
import { layDanhSachPhim } from "../CarouselAction/carousel";
import Swal from "sweetalert2";

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

export const CapNhatPhimUploadAction = (formData) => {
  return async (dispatch) => {
    try {
      let result = await qlPhimService.CapNhatPhimUpload(formData);
      alert("edit phim thanh cong");
      history.push("/admin/films");
    } catch (err) {
      console.log("edit phim fail", err.response);
    }
  };
};

export const deletePhimAction = (maPhim) => {
  return async (dispatch) => {
    try {
      let result = await qlPhimService.deletePhim(maPhim);
      dispatch(layDanhSachPhim());
      Swal.fire({ title: "Xóa phim thành công!", icon: "success", timer: 1500 });
    } catch (err) {
      console.log("xoa phim fail", err);
    }
  };
};
