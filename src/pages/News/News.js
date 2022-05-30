import React, { Suspense } from "react";
import { useTranslation } from "react-i18next";

function News() {
  const { t } = useTranslation();
  return (
    <div className="">
      <h1>{t("Welcome to React")}</h1>
      <div className="dropdown">
        <div className="btn  text-red-700 " data-toggle="dropdown">
          Dropdown {t("Welcome to React")}
        </div>
        <div className="dropdown-menu">
          <a className="dropdown-item" href="#">
            Link 1
          </a>
          <a className="dropdown-item" href="#">
            Link 2
          </a>
          <a className="dropdown-item-text" href="#">
            Text Link
          </a>
          <span className="dropdown-item-text">Just Text</span>
        </div>
      </div>
    </div>
  );
}

export default News;
