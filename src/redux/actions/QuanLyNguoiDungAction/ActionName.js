import { QLNguoiDungService } from "../../../services/QuanLyNguoiDungService";
import { USER_LOGIN } from "../../../util/settings/config";
import { LAY_DS_USER, LICH_SU_DAT_VE, USER_REGISTER } from "../QuanLyNguoiDungAction/constName";
import { store } from "../../types/configStore";
import { DISPLAY_LOADING, HIDDEN_LOADING } from "../../reducers/LoadingReducer";
import Swal from "sweetalert2";
import { LAY_INFO_USER } from "./constName";
const { LoadingReducer } = store.getState();
const navigate = LoadingReducer.navigate;

export const userLoginAction = (infoLogin) => {
  return async (dispatch) => {
    try {
      let { status, data } = await QLNguoiDungService.userLogin(infoLogin);
      if (status === 200) {
        dispatch({ type: USER_LOGIN, payload: data.content });
        navigate(-1);
      }
    } catch (err) {
      console.log(err);
    }
  };
};

export const userRegisterAction = (infoSignup) => {
  return async (dispatch) => {
    try {
      let { status, data } = await QLNguoiDungService.nguoiDungDangKy(infoSignup);
      if (status === 200) {
        dispatch({ type: USER_REGISTER, payload: data.content });
        navigate("/login");
      }
    } catch (err) {
      let messageError = err.response.data.content;
      Swal.fire({ title: messageError, timer: 2000 });
      console.log("đăng ký thất bại", messageError);
    }
  };
};

export const lichSuDatVe = () => {
  return async (dispatch) => {
    try {
      await dispatch({ type: DISPLAY_LOADING });
      const result = await QLNguoiDungService.lichSuDatVe();
      await dispatch({ type: LICH_SU_DAT_VE, payload: result.data.content });
      await dispatch({ type: HIDDEN_LOADING });
    } catch (err) {
      await dispatch({ type: HIDDEN_LOADING });
      console.log(err);
    }
  };
};

export const getListUserAction = (keyword) => {
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
      let result = await QLNguoiDungService.DeleteUser(taiKhoan);
      Swal.fire({ title: "Xóa thành công!", timer: 1500 });
      dispatch(getListUserAction());
    } catch (err) {
      console.log("xoa user fail", err.response);
    }
  };
};

export const listUserTypeAct = async () => {
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

export const updateInfoUserAct = async (dataUser) => {
  let submitSuccess = false;
  try {
    let result = await QLNguoiDungService.capNhatThongTinNguoiDung(dataUser);
    submitSuccess = true;
    navigate(-1);
    localStorage.removeItem("userEditing");
  } catch (err) {
    Swal.fire({
      title: err.response.data.content,
      text: "Vui lòng điền email khác!",
      icon: "error",
    });
    console.log("cap nhat user fail", err);
  }
  return submitSuccess;
};

export const customerUpdateInfoAction = async (infoCustomer) => {
  let submitSuccess = false;
  try {
    let result = await QLNguoiDungService.customerUpdateInfo(infoCustomer);
    submitSuccess = true;
  } catch (err) {
    Swal.fire({ title: err.response.data.content, icon: "error", timer: 1500 });
    console.log("khach hang cap nhat thong tin fail", err);
  }
  return submitSuccess;
};

export const timKiemUserAction = async (taiKhoan) => {
  let resultAPI = null;
  try {
    let result = await QLNguoiDungService.timKiemNguoiDung(taiKhoan);
    resultAPI = result.data.content;
  } catch (err) {
    console.log("tìm kiếm user fail", err);
  }
  return resultAPI;
};

export const InfoUserAction = (keyword) => {
  return async (dispatch) => {
    try {
      let result = await QLNguoiDungService.thongTinUser();
      dispatch({ type: LAY_INFO_USER, payload: result.data.content });
    } catch (err) {
      console.log("lay thong tin user fail", err.response);
    }
  };
};
