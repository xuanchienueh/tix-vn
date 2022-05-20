import { MA_NHOM } from "../util/settings/config";
import { BaseServices } from "./baseServices";
export class QuanLyPhimService extends BaseServices {
  constructor() {
    super();
  }
  LayDanhSachBanner = () => {
    return this.get("/api/QuanLyPhim/LayDanhSachBanner");
  };

  LayDanhSachPhim = () => {
    return this.get(`api/QuanLyPhim/LayDanhSachPhim?maNhom=${MA_NHOM}`);
  };
}
export const qlPhimService = new QuanLyPhimService();
