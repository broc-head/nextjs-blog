import { useState, useEffect } from "react"

function DarkMode() {
  const [theme, setTheme]= useState(
    typeof window !== "undefined" ? localStorage.theme : "light"
  );
  const colorTheme = theme === "dark" ? "light" : "dark";

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(theme);
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  return [colorTheme, setTheme] as const;
}

export default DarkMode