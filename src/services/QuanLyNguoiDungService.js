import { MA_NHOM } from "../util/settings/config";
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

  LayDanhSachNguoiDung = (keyword = "") => {
    if (keyword !== "") {
      return this.get(`api/QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=${MA_NHOM}&tuKhoa=${keyword}`);
    }
    return this.get(`api/QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=${MA_NHOM}`);
  };

  XoaNguoiDung = (taiKhoan) => {
    return this.delete(`api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`);
  };
}
export const QLNguoiDungService = new QuanLyNguoiDungService();
