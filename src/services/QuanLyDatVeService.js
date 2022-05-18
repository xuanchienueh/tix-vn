import { BaseServices } from "./baseServices";

class QuanLyDatVeService extends BaseServices {
  constructor() {
    super();
  }
  LayDanhSachPhongVe = (maLichChieu) => {
    return this.get(
      `api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`
    );
  };
}

export const QLDatVeService = new QuanLyDatVeService();
