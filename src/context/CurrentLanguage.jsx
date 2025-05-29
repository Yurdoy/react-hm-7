import React from "react";
import { createContext, useState } from "react";

export const CurrentLanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === "en" ? "de" : "en"));
  };

  return (
    <CurrentLanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </CurrentLanguageContext.Provider>
  );
};
