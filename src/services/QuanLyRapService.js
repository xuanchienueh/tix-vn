import { MA_NHOM } from "../util/settings/config";
import { BaseServices } from "./baseServices";

export class QuanLyRapService extends BaseServices {
  constructor() {
    super();
  }
  LayThongTinHeThongRap = () => {
    return this.get(`/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=${MA_NHOM}`);
  };
  getInfoShowtimeService = (id) => {
    return this.get(`/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${id}`);
  };

  LayThongTinCumRapTheoHeThong = (maHeThongRap) => {
    return this.get(`api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${maHeThongRap}`);
  };
}

export const qlRapService = new QuanLyRapService();
