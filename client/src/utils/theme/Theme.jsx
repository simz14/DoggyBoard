import { ThemeProvider } from "styled-components";
import { colors, typography, spacing, border } from "./themes";
import MuiTheme from "../MUI/MuiThemeProvider";

export default function Theme({ children }) {
  return (
    <ThemeProvider theme={{ colors, typography, spacing, border }}>
      <MuiTheme> {children}</MuiTheme>
    </ThemeProvider>
  );
}
