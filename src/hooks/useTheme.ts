import { useContext } from "react";
import { ThemeContext } from "../contexts/CustomThemeContext";

export const useTheme = () => useContext(ThemeContext);