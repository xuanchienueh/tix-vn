import { QLNguoiDungService } from "../../../services/QuanLyNguoiDungService";
import { USER_LOGIN } from "../../../util/settings/config";
import {
  LICH_SU_DAT_VE,
  USER_REGISTER,
} from "../QuanLyNguoiDungAction/constName";
import { history } from "../../../App";
import { DISPLAY_LOADING, HIDDEN_LOADING } from "../../reducers/LoadingReducer";

export const userLoginAction = (thongTinDangNhap) => {
  return async (dispatch) => {
    try {
      let result = await QLNguoiDungService.nguoiDungDangNhap(thongTinDangNhap);
      if (result.status === 200) {
        dispatch({ type: USER_LOGIN, payload: result.data.content });
        history.goBack();
      }
    } catch (err) {
      console.log(err);
    }
  };
};

export const userRegisterAction = (thongTinDangKy) => {
  return async (dispatch) => {
    try {
      let result = await QLNguoiDungService.nguoiDungDangKy(thongTinDangKy);
      result.status === 200 &&
        dispatch({ type: USER_REGISTER, payload: result.data.content });
    } catch (err) {
      console.log(err);
    }
  };
};

export const lichSuDatVe = () => {
  return async (dispatch) => {
    try {
      await dispatch({ type: DISPLAY_LOADING });
      const result = await QLNguoiDungService.lichSuDatVe();
      // result.status === 200 &&
      await dispatch({ type: LICH_SU_DAT_VE, payload: result.data.content });
      await dispatch({ type: HIDDEN_LOADING });
    } catch (err) {
      await dispatch({ type: HIDDEN_LOADING });
      console.log(err);
    }
  };
};
