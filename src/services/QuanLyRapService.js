import { BaseServices } from "./baseServices";

export class QuanLyRapService extends BaseServices {
  constructor() {
    super();
  }
  LayThongTinHeThongRap = () => {
    return this.get(
      "/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP03"
    );
  };
  LayThongTinCumRapTheoHeThong = () => {
    return this.get(
      `/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP01`
    );
  };
}

export const qlRapService = new QuanLyRapService();
