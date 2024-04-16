import React, { useEffect, useState } from "react";
import { ThemeProvider } from "./components/theme";
import Card from "./components/Card";
import Button from "./components/Button";

const App = () => {
  const [themeMode, setThemeMode] = useState("light");
  const darkTheme = () => {
    setThemeMode("dark");
  };

  const lightTheme = () => {
    setThemeMode("light");
  };
  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);
  return (
    <ThemeProvider value={{ darkTheme, lightTheme, themeMode }}>
      <div>
        <h1>theme switcher</h1>
        <Button />
        <Card />
      </div>
    </ThemeProvider>
  );
};

export default App;
