import React from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { USER_LOGIN } from "../../../util/settings/config";

export default function DropdownUser() {
  const { t } = useTranslation();
  const userLogin = JSON.parse(localStorage.getItem(USER_LOGIN));

  return (
    <>
      <div className="dropdown">
        <div
          className="btn text-gray-400 hover:text-gray-600 cursor-pointer "
          data-toggle="dropdown"
        >
          {t("Welcome")}, {userLogin?.taiKhoan}
        </div>
        <div className="dropdown-menu">
          <a className="dropdown-item " href="#">
            Đổi mật khẩu
          </a>
          <NavLink className="dropdown-item " to="/profile">
            Profile
          </NavLink>
          <a
            className="dropdown-item-text "
            href="/home"
            onClick={() => localStorage.clear()}
          >
            Đăng xuất
          </a>
          <span className="dropdown-item-text ">Just Text</span>
        </div>
      </div>
    </>
  );
}
