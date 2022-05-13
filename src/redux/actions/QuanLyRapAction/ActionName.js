import { qlRapService } from "../../../services/QuanLyRapService";
import { LAY_DS_RAP, LAY_THONG_TIN_CUM_RAP } from "./ConstName";

export const layDSRap = () => {
  return async (dispatch) => {
    try {
      let result = await qlRapService.LayThongTinHeThongRap();
      result.status === 200 &&
        dispatch({ type: LAY_DS_RAP, payload: result.data.content });
    } catch (err) {
      console.log(err);
    }
  };
};

export const layThongTinCumRap = (maHeThongRap) => {
  return async (dispatch) => {
    try {
      let result = await qlRapService.LayThongTinCumRapTheoHeThong(
        maHeThongRap
      );
      dispatch({ type: LAY_THONG_TIN_CUM_RAP, payload: result.data.content });
    } catch (err) {
      console.log(err);
    }
  };
};
