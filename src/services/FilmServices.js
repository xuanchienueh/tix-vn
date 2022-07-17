import { GROUP_ID } from "../util/settings/config";
import { BaseServices } from "./baseServices";
export class FimlServices extends BaseServices {
  constructor() {
    super();
  }
  getListBannerService = () => {
    return this.get("/api/QuanLyPhim/LayDanhSachBanner");
  };

  getListFilmService = (movieName = "") => {
    if (movieName !== "") {
      return this.get(`api/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUP_ID}&movieName=${movieName}`);
    }
    return this.get(`api/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUP_ID}`);
  };
  addMovieService = (formData) => {
    return this.post("api/QuanLyPhim/ThemPhimUploadHinh", formData);
  };
  //

  getInfoFilmService = (IdMovie) => {
    return this.get(`api/QuanLyPhim/LayThongTinPhim?MaPhim=${IdMovie}`);
  };
  //

  updateFilmService = (formData) => {
    return this.post("api/QuanLyPhim/CapNhatPhimUpload", formData);
  };

  deleteFilmService = (IdMovie) => {
    return this.delete(`api/QuanLyPhim/XoaPhim?MaPhim=${IdMovie}`);
  };
}
export const manageFilmService = new FimlServices();
