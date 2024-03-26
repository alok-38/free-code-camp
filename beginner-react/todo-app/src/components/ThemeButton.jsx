import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import Moon from "../images/icon-moon.svg";
import Sun from "../images/icon-sun.svg";

const ThemeButton = () => {
    const { theme, setTheme  } = useContext(ThemeContext);

    return (
        <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            <img src={theme === "light" ? Moon : Sun} alt="toggle-mode" />
        </button>
    );
}

export default ThemeButton;
