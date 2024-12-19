import { useState, useEffect } from "react";
import "./index.css";

export const ThemeSwitcher = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        document.body.className = isDarkMode ? "darkTheme" : "lightTheme";
    }, [isDarkMode]);

    return (
        <button onClick={() => setIsDarkMode((prev) => !prev)}>
            Переключить на {isDarkMode ? "светлую" : "тёмную"} тему
        </button>
    );
};
