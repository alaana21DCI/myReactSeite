import { createContext } from "react";
import React, { useState, useEffect } from "react";

export const AppContext = createContext({
  isLoggedIn: false,
  onLogin: (uEmail, uPasswort) => {},
  onLogout: () => {},
  theme: "light",
  toggleTheme: () => {},
});

export const AppContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const storedUserLoggedInInfo = localStorage.getItem("isLoggedIn");

    if (storedUserLoggedInInfo === "logged-in") {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (uEmail, uPassword) => {
    // im Localstorage speichern:
    localStorage.setItem("isLoggedIn", "logged-in");

    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  const toggleThemeHandler = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <AppContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogin: loginHandler,
        onLogout: logoutHandler,
        theme: theme,
        toggleTheme: toggleThemeHandler,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
