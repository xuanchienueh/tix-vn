import React, { Suspense } from "react";
import { Select } from "antd";
import { NavLink } from "react-router-dom";
import { history } from "../../../App";
import { useTranslation } from "react-i18next";
import { USER_LOGIN } from "../../../util/settings/config";
import DropdownUser from "./DropdownUser";

const { Option } = Select;

function Header(props) {
  const handleChange = (value) => i18n.changeLanguage(value);
  let { t, i18n } = useTranslation();
  const renderUserName = () => {
    const userLogin = JSON.parse(localStorage.getItem(USER_LOGIN));
    return userLogin ? (
      <DropdownUser />
    ) : (
      <>
        <button
          onClick={() => history.push("/login")}
          className="self-center px-8 py-3 rounded"
        >
          {t("Login")}
        </button>
        <NavLink
          to="/register"
          className="self-center px-8 py-3 font-semibold rounded bg-violet-600 text-coolGray-50 mr-4"
        >
          {t("Signup")}
        </NavLink>
      </>
    );
  };

  return (
    <header className="w-full bg-gray-900 fixed text-white z-[1] h-20">
      <div className="container flex justify-between h-16 mx-auto">
        <NavLink
          rel="noopener noreferrer"
          to="/home"
          aria-label="Back to homepage"
          className="flex items-center p-2"
        >
          <img
            src="https://cyberlearn.vn/wp-content/uploads/2020/03/cyberlearn-min-new-opt2.png"
            alt="cybersoft"
          />
        </NavLink>
        <ul className="items-stretch hidden space-x-3 lg:flex">
          <li className="flex">
            <NavLink
              rel="noopener noreferrer"
              to="/home"
              className="flex items-center px-4 -mb-1 border-b-2 border-transparent"
              activeClassName="text-violet-600 border-violet-600"
            >
              {t("Home")}
            </NavLink>
          </li>
          <li className="flex">
            <NavLink
              rel="noopener noreferrer"
              to="/news"
              className="flex items-center px-4 -mb-1 border-b-2 border-transparent"
              activeClassName="text-violet-600 border-violet-600"
            >
              {t("News")}
            </NavLink>
          </li>
          <li className="flex">
            <NavLink
              rel="noopener noreferrer"
              to="/contact"
              className="flex items-center px-4 -mb-1 border-b-2 border-transparent"
              activeClassName="text-violet-600 border-violet-600"
            >
              {t("Contact")}
            </NavLink>
          </li>

          <li className="flex">
            <NavLink
              // rel="noopener noreferrer"
              to="/admin"
              className="flex items-center px-4 -mb-1 border-b-2 border-transparent"
            >
              Link
            </NavLink>
          </li>
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
        <button className="p-4 lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 text-coolGray-800"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}
export default Header;
// export default function () {
//   return (
//     <Suspense fallback="loading">
//       <Header />
//     </Suspense>
//   );
// }
