import { BaseServices } from "./baseServices";

export class QuanLyNguoiDungService extends BaseServices {
  constructor() {
    super();
  }
  nguoiDungDangNhap = (thongTinDangNhap) => {
    // tai khoan va mat khau
    return this.post("api/QuanLyNguoiDung/DangNhap", thongTinDangNhap);
  };
  nguoiDungDangKy = (thongTinDangKy) => {
    return this.post("api/QuanLyNguoiDung/DangKy", thongTinDangKy);
  };
}
export const QLNguoiDungService = new QuanLyNguoiDungService();
