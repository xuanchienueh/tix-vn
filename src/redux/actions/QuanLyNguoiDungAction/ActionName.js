import { QLNguoiDungService } from "../../../services/QuanLyNguoiDungService";
import { USER_LOGIN } from "../../../util/settings/config";
import { LAY_DS_USER, LICH_SU_DAT_VE, USER_REGISTER } from "../QuanLyNguoiDungAction/constName";
import { history } from "../../../App";
import { DISPLAY_LOADING, HIDDEN_LOADING } from "../../reducers/LoadingReducer";
import Swal from "sweetalert2";

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
      result.status === 200 && dispatch({ type: USER_REGISTER, payload: result.data.content });
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

export const layDSNguoiDungAction = (keyword) => {
  return async (dispatch) => {
    try {
      let result = await QLNguoiDungService.LayDanhSachNguoiDung(keyword);
      dispatch({ type: LAY_DS_USER, payload: result.data.content });
    } catch (err) {
      console.log("lay ds user fail", err.response);
    }
  };
};

export const DeleteUser = (taiKhoan) => {
  return async (dispatch) => {
    try {
      let result = await QLNguoiDungService.XoaNguoiDung(taiKhoan);
      Swal.fire({ title: "Xóa thành công!", timer: 1500 });
      dispatch(layDSNguoiDungAction());
    } catch (err) {
      console.log("xoa user fail", err.response);
    }
  };
};

export const listUserTypeAction = async () => {
  let typeUser = [];
  try {
    let result = await QLNguoiDungService.LayDanhSachLoaiNguoiDung();

    typeUser = result.data.content;
  } catch (err) {
    console.log("lấy loại user fail", err.response);
  }
  return typeUser;
};

export const themNguoiDungAction = async (infoUser) => {
  let ketqua = false;
  try {
    let result = await QLNguoiDungService.themNguoiDung(infoUser);
    Swal.fire({ title: "Thêm thành công!", timer: 1500 });
    ketqua = true;
  } catch (err) {
    console.log("thêm ng dùng fail", err.response.data.content);
    Swal.fire(`${err.response.data.content}`);
  }
  return ketqua;
};

export const capNhatThongTinNguoiDungAction = async (dataUser) => {
  let submitSuccess = false;
  try {
    let result = await QLNguoiDungService.capNhatThongTinNguoiDung(dataUser);
    submitSuccess = true;
    history.goBack();
    localStorage.removeItem("userEditing");
  } catch (err) {
    Swal.fire({
      title: err.response.data.content,
      text: "Vui lòng điền email khác!",
      icon: "error",
    });
    console.log("cap nhat user fail", err.response.data);
  }
  return submitSuccess;
};
