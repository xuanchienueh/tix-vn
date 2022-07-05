import { MA_NHOM } from "../util/settings/config";
import { BaseServices } from "./baseServices";

class QuanLyNguoiDungService extends BaseServices {
  constructor() {
    super();
  }
  userLogin = (thongTinDangNhap) => {
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

  LayDanhSachLoaiNguoiDung = () => {
    return this.get("api/QuanLyNguoiDung/LayDanhSachLoaiNguoiDung");
  };

  themNguoiDung = (infoUser) => {
    return this.post("api/QuanLyNguoiDung/ThemNguoiDung", infoUser);
  };

  timKiemNguoiDung = (taiKhoan) => {
    return this.get(`api/QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=${MA_NHOM}&tuKhoa=${taiKhoan}`);
  };

  capNhatThongTinNguoiDung = (dataUser) => {
    return this.post(`api/QuanLyNguoiDung/CapNhatThongTinNguoiDung`, dataUser);
  };

  thongTinUser = () => {
    return this.post(`api/QuanLyNguoiDung/ThongTinTaiKhoan`);
  };

  customerUpdateInfo = (infoCustomer) => {
    return this.put("api/QuanLyNguoiDung/CapNhatThongTinNguoiDung", infoCustomer);
  };
}
export const QLNguoiDungService = new QuanLyNguoiDungService();
