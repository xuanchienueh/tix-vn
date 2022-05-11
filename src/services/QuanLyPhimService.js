import { BaseServices } from "./baseServices";
export class QuanLyPhimService extends BaseServices {
  constructor() {
    super();
  }
  LayDanhSachBanner = () => {
    return this.get("/api/QuanLyPhim/LayDanhSachBanner");
  };

  LayDanhSachPhim = () => {
    return this.get("/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP04");
  };
}
export const qlPhimService = new QuanLyPhimService();
