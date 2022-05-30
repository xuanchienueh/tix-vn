import { qlPhimService } from "../../../services/QuanLyPhimService";

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
