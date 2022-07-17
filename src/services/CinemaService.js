import { GROUP_ID } from "../util/settings/config";
import { BaseServices } from "./baseServices";

export class cinemaService extends BaseServices {
  constructor() {
    super();
  }
  getInfoCinemaSystems = () => {
    return this.get(`/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=${GROUP_ID}`);
  };
  getInfoShowtimeService = (id) => {
    return this.get(`/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${id}`);
  };

  LayThongTinCumRapTheoHeThong = (maHeThongRap) => {
    return this.get(`api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${maHeThongRap}`);
  };
}

export const manageCinemaService = new cinemaService();
