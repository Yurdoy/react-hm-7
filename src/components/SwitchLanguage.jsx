import React from "react";
import { CurrentLanguageContext } from "../context/CurrentLanguage";
import { useContext } from "react";

const SwitchLanguage = () => {
  const { language, toggleLanguage } = useContext(CurrentLanguageContext);

  return (
    <div>
      <h2>
        {language === "en"
          ? "English language was chosen"
          : "German language was chosen"}
      </h2>
      <button onClick={toggleLanguage}>Switch language</button>
    </div>
  );
};

export default SwitchLanguage;
