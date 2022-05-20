import { TOKEN, USER_LOGIN } from "../../../util/settings/config";
import { USER_REGISTER } from "../../actions/QuanLyNguoiDungAction/constName";
let userInfo = {};
if (localStorage.getItem(USER_LOGIN)) {
  userInfo = JSON.parse(localStorage.getItem(USER_LOGIN));
}
const initialState = {
  userLogin: userInfo,
  userRegister: {},
};

const QuanLyNguoiDungReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case USER_LOGIN:
      localStorage.setItem(
        USER_LOGIN,
        JSON.stringify({ ...payload, soDT: "0987788654" })
      );
      localStorage.setItem(TOKEN, payload.accessToken);

      return { ...state, userLogin: payload };
    case USER_REGISTER:
      return { ...state, userRegister: payload };
    default:
      return state;
  }
};
export default QuanLyNguoiDungReducer;
