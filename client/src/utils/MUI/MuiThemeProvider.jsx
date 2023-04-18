import { theme } from "./components";
import { ThemeProvider } from "@mui/material/styles";

export default function MuiTheme({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
