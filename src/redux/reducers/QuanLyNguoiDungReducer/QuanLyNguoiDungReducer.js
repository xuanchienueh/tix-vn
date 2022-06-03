import { TOKEN, USER_LOGIN } from "../../../util/settings/config";
import {
  LAY_DS_USER,
  LICH_SU_DAT_VE,
  USER_REGISTER,
} from "../../actions/QuanLyNguoiDungAction/constName";
let userInfo = {};
if (localStorage.getItem(USER_LOGIN)) {
  userInfo = JSON.parse(localStorage.getItem(USER_LOGIN));
}
const initialState = {
  userLogin: userInfo,
  userRegister: {},
  thongTinNguoiDung: {},
  dsAllUser: [],
};

const QuanLyNguoiDungReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case USER_LOGIN:
      localStorage.setItem(USER_LOGIN, JSON.stringify({ ...payload, soDT: "0987788654" }));
      localStorage.setItem(TOKEN, payload.accessToken);
      return { ...state, userLogin: payload };

    case USER_REGISTER:
      return { ...state, userRegister: payload };

    case LICH_SU_DAT_VE:
      return { ...state, thongTinNguoiDung: payload };

    case LAY_DS_USER:
      state.dsAllUser = payload;
      return { ...state };
    default:
      return state;
  }
};
export default QuanLyNguoiDungReducer;
