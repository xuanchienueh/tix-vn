import { MA_NHOM } from "../util/settings/config";
import { BaseServices } from "./baseServices";

export class QuanLyRapService extends BaseServices {
  constructor() {
    super();
  }
  LayThongTinHeThongRap = () => {
    return this.get(
      `/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=${MA_NHOM}`
    );
  };
  LayThongTinLichChieuPhim = (id) => {
    return this.get(`/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${id}`);
  };
}

export const qlRapService = new QuanLyRapService();
