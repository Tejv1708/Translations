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
    <div>
      <Menu />
      <div className="flex  items-center justify-center ">
        <Languageoption onChange={(e) => handleClick(e)} />
      </div>
      <h1 className="space-y-2 m-10 flex items-center justify-center">
        {t("welcome")} {t("about")}
      </h1>
    </div>
  );
};
export default Aboutus;
