import React from "react";
import useTheme from "./theme";

const Button = () => {
  const { darkTheme, lightTheme, themeMode } = useTheme();
  const onChangeBtn = (e) => {
    const darkModeStatus = e.currentTarget.checked;
    if(darkModeStatus){
        darkTheme()
    }
    else{
        lightTheme()
    }
  };
  return (
    <div className="flex items-center gap-2 justify-center mb-6">
      darkmode
      <input
        type="checkbox"
        className="h-5 w-5"
        onChange={onChangeBtn}
        checked={themeMode === "dark"}
      />
    </div>
  );
};

export default Button;
