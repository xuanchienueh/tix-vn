import { qlRapService } from "../../../services/QuanLyRapService";
import { LAY_DS_RAP, LAY_THONG_TIN_CUM_RAP, LAY_THONG_TIN_LICH_CHIEU_PHIM } from "./ConstName";

export const layDSRap = () => {
  return async (dispatch) => {
    try {
      let result = await qlRapService.LayThongTinHeThongRap();
      result.status === 200 && dispatch({ type: LAY_DS_RAP, payload: result.data.content });
    } catch (err) {
      console.log(err);
    }
  };
};

export const layThongTinCumRap = (maHeThongRap) => {
  return async (dispatch) => {
    try {
      let result = await qlRapService.LayThongTinCumRapTheoHeThong(maHeThongRap);
      dispatch({ type: LAY_THONG_TIN_CUM_RAP, payload: result.data.content });
    } catch (err) {
      console.log(err);
    }
  };
};

export const LayThongTinLichChieuPhim = (id) => {
  return async (dispatch) => {
    try {
      let { data } = await qlRapService.LayThongTinLichChieuPhim(id);
      data.statusCode === 200 &&
        dispatch({
          type: LAY_THONG_TIN_LICH_CHIEU_PHIM,
          payload: data.content,
        });
    } catch (err) {
      console.log(err);
    }
  };
};

export const LayThongTinCumRapTheoHeThongAction = async (maHeThongRap) => {
  let ketqua = undefined;
  let infoRap;
  try {
    let result = await qlRapService.LayThongTinCumRapTheoHeThong(maHeThongRap);
    ketqua = result.data.content;
  } catch (err) {
    console.log("lay thong tin cum rap fail", err);
  }
  infoRap = await ketqua.map((i) => {
    return {
      value: i.maCumRap,
      label: i.tenCumRap,
      children: i.danhSachRap.map((item) => ({ value: item.maRap, label: item.tenRap })),
    };
  });
  return infoRap;
};
