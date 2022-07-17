import { GROUP_ID } from "../util/settings/config";
import { BaseServices } from "./baseServices";

class QuanLyNguoiDungService extends BaseServices {
  constructor() {
    super();
  }
  userLogin = (infoLogin) => {
    /* tkhoan va mk */

    return this.post("api/QuanLyNguoiDung/DangNhap", infoLogin);
  };

  nguoiDungDangKy = (infoSignup) => {
    return this.post("api/QuanLyNguoiDung/DangKy", infoSignup);
  };

  lichSuDatVe = () => {
    return this.post(`api/QuanLyNguoiDung/ThongTinTaiKhoan`);
  };

  LayDanhSachNguoiDung = (keyword = "") => {
    if (keyword !== "") {
      return this.get(`api/QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=${GROUP_ID}&tuKhoa=${keyword}`);
    }
    return this.get(`api/QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=${GROUP_ID}`);
  };

  DeleteUser = (taiKhoan) => {
    return this.delete(`api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`);
  };

  LayDanhSachLoaiNguoiDung = () => {
    return this.get("api/QuanLyNguoiDung/LayDanhSachLoaiNguoiDung");
  };

  themNguoiDung = (infoUser) => {
    return this.post("api/QuanLyNguoiDung/ThemNguoiDung", infoUser);
  };

  timKiemNguoiDung = (taiKhoan) => {
    return this.get(`api/QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=${GROUP_ID}&tuKhoa=${taiKhoan}`);
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
