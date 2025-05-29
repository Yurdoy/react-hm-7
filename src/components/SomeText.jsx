import React from "react";
import { useContext } from "react";
import { CurrentLanguageContext } from "../context/CurrentLanguage";

const SomeText = () => {
  const { language } = useContext(CurrentLanguageContext);
  const text = {
    en: "Hello world!",
    de: "Hallo welt!",
  };
  return (
    <div>
      <p>{text[language]}</p>
    </div>
  );
};

export default SomeText;
