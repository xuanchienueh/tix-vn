import React, { Suspense } from "react";
import { Select } from "antd";
import { NavLink, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { USER_LOGIN } from "../../../util/settings/config";
import DropdownUser from "./DropdownUser";

const { Option } = Select;
const infoUser = JSON.parse(localStorage.getItem(USER_LOGIN));

function Header() {
  const navigate = useNavigate();
  const handleChange = (value) => i18n.changeLanguage(value);
  let { t, i18n } = useTranslation();
  const renderUserName = () => {
    const userLogin = JSON.parse(localStorage.getItem(USER_LOGIN));
    return userLogin ? (
      <DropdownUser />
    ) : (
      <>
        <button
          onClick={() => navigate("/login")}
          className="self-center font-semibold text-white py-3 rounded"
        >
          {t("Login")}
        </button>
        <span className="text-white px-1"> / </span>
        <NavLink to="/register" className="self-center py-3 rounded font-semibold text-white mr-4">
          {t("Signup")}
        </NavLink>
      </>
    );
  };

  return (
    <nav className="navbar navbar-fixed-top navbar-expand-lg navbar-dark bg-dark pt-0">
      <NavLink to="/home" className="navbar-brand">
        <img
          src="http://tixvn.click/static/media/logo.af00d8dd04677a4ee789.png"
          width={70}
          alt="tixvn"
        />
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <NavLink to="/home" className="nav-link">
              {t("Home")}
            </NavLink>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              {t("News")}
            </a>
          </li>
          <li className="nav-item dropdown">
            <a href="#" className="nav-link">
              {t("Contact")}
            </a>
          </li>
          {infoUser && infoUser.maLoaiNguoiDung === "QuanTri" && (
            <li className="flex">
              <NavLink to="/admin/films" className="nav-link">
                Admin
              </NavLink>
            </li>
          )}
        </ul>
        <div className="items-center flex-shrink-0 hidden lg:flex">
          {renderUserName()}
          <Select
            placeholder={
              <img
                width={50}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/125px-Flag_of_Vietnam.svg.png"
              />
            }
            style={{
              width: 88,
            }}
            onChange={handleChange}
            bordered={false}
          >
            <Option value="vie">
              <img
                width={50}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/125px-Flag_of_Vietnam.svg.png"
              />
            </Option>
            <Option value="eng">
              <img
                width={50}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Flag_of_the_United_Kingdom.svg/125px-Flag_of_the_United_Kingdom.svg.png"
              />
            </Option>
          </Select>
        </div>
      </div>
    </nav>
  );
}
export default Header;
