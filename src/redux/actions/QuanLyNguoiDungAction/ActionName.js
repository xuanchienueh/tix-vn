import { QLNguoiDungService } from "../../../services/QuanLyNguoiDungService";
import { USER_LOGIN } from "../../../util/settings/config";
import { USER_REGISTER } from "../QuanLyNguoiDungAction/constName";
import { history } from "../../../App";

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