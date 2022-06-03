import { BaseServices } from "./baseServices";

class QuanLyDatVeService extends BaseServices {
  constructor() {
    super();
  }
  LayDanhSachPhongVe = (maLichChieu) => {
    return this.get(`api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`);
  };
  datVe = (thongTinDatVe) => {
    return this.post("api/QuanLyDatVe/DatVe", thongTinDatVe);
  };

  taoLichChieu = (dataLichChieu) => {
    return this.post(`api/QuanLyDatVe/TaoLichChieu`, dataLichChieu);
  };
}

export const QLDatVeService = new QuanLyDatVeService();
