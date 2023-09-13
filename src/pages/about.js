import React from "react";
import Menu from "../component/menu";
import Languageoption from "../component/language-dropdown";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

const Aboutus = () => {
  const { t } = useTranslation();
  const handleClick = (e) => {
    i18next.changeLanguage(e.target.value);
  };
  return (
    <div style={{ marginTop: "50px" }}>
      <Menu />
      <div className="flex flex-col w-64">
        <Languageoption onChange={(e) => handleClick(e)} />
      </div>
      <h1>
        {t("welcome")} {t("about")}
      </h1>
    </div>
  );
};
export default Aboutus;
