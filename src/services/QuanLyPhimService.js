import { MA_NHOM } from "../util/settings/config";
import { BaseServices } from "./baseServices";
export class QuanLyPhimService extends BaseServices {
  constructor() {
    super();
  }
  LayDanhSachBanner = () => {
    return this.get("/api/QuanLyPhim/LayDanhSachBanner");
  };

  LayDanhSachPhim = (tenPhim = "") => {
    if (tenPhim !== "") {
      return this.get(`api/QuanLyPhim/LayDanhSachPhim?maNhom=${MA_NHOM}&tenPhim=${tenPhim}`);
    }
    return this.get(`api/QuanLyPhim/LayDanhSachPhim?maNhom=${MA_NHOM}`);
  };
  ThemPhimUploadHinh = (formData) => {
    return this.post("api/QuanLyPhim/ThemPhimUploadHinh", formData);
  };
  //

  layThongTinPhim = (maPhim) => {
    return this.get(`api/QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}`);
  };
  //

  CapNhatPhimUpload = (formData) => {
    return this.post("api/QuanLyPhim/CapNhatPhimUpload", formData);
  };

  deletePhim = (maPhim) => {
    return this.delete(`api/QuanLyPhim/XoaPhim?MaPhim=${maPhim}`);
  };
}
export const qlPhimService = new QuanLyPhimService();
