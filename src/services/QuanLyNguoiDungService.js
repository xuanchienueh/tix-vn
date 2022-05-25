import { BaseServices } from "./baseServices";

export class QuanLyNguoiDungService extends BaseServices {
  constructor() {
    super();
  }
  nguoiDungDangNhap = (thongTinDangNhap) => {
    /* tkhoan va mk */

    return this.post("api/QuanLyNguoiDung/DangNhap", thongTinDangNhap);
  };
  nguoiDungDangKy = (thongTinDangKy) => {
    return this.post("api/QuanLyNguoiDung/DangKy", thongTinDangKy);
  };
  lichSuDatVe = () => {
    return this.post(`api/QuanLyNguoiDung/ThongTinTaiKhoan`);
  };
}
export const QLNguoiDungService = new QuanLyNguoiDungService();
