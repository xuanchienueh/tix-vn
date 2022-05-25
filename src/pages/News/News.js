import React, { Suspense } from "react";
import { useTranslation } from "react-i18next";

function News() {
  const { t } = useTranslation();
  return (
    <div className="p-20">
      <h1>{t("Welcome to React")}</h1>
    </div>
  );
}

export default News;
