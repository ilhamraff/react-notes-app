import React from "react";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [locale, setLocale] = React.useState(
    localStorage.getItem("locale") || "id"
  );
  const [theme, setTheme] = React.useState(
    localStorage.getItem("theme") || "light"
  );

  const toggleLocale = () => {
    setLocale((prevLocale) => {
      const newLocale = prevLocale === "id" ? "en" : "id";
      localStorage.setItem("locale", newLocale);
      return newLocale;
    });
  };

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "light" ? "dark" : "light";
      localStorage.setItem("theme", newTheme);
      return newTheme;
    });
  };

  React.useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <AppContext.Provider value={{ locale, toggleLocale, theme, toggleTheme }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
