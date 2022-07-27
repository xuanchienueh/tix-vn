import React, { Suspense } from "react";
import { Select } from "antd";
import { NavLink, useNavigate, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import DropdownUser from "./DropdownUser";
import { useSelector } from "react-redux";

const { Option } = Select;

function Header() {
  const navigate = useNavigate();
  const { userLogin } = useSelector((state) => state.QuanLyNguoiDungReducer);

  const handleChange = (value) => i18n.changeLanguage(value);
  let { t, i18n } = useTranslation();
  const renderUserName = () => {
    return Object.keys(userLogin).length > 0 ? (
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
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark pt-0 relative z-10">
      <NavLink to="/home" className="navbar-brand">
        <img src="./img/logo.png" width={70} alt="tixvn" />
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

          {userLogin && userLogin.maLoaiNguoiDung === "QuanTri" && (
            <li className="flex">
              <NavLink to="/admin/films" className="nav-link d-none d-lg-block">
                Admin
              </NavLink>
            </li>
          )}

          {Object.keys(userLogin).length > 0 ? (
            <li
              className="nav-item dropdown d-block d-lg-none"
              onClick={() => localStorage.clear()}
            >
              <a href="/" className="nav-link">
                {t("Logout")}
              </a>
            </li>
          ) : (
            <li className="nav-item dropdown d-block d-lg-none">
              <Link to="/login" className="nav-link">
                {t("Login")}
              </Link>
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
