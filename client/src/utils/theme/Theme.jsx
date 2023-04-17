import { ThemeProvider } from "styled-components";
import { colors, typography, spacing, border } from "./themes";

export default function Theme({ children }) {
  return (
    <ThemeProvider theme={{ colors, typography, spacing, border }}>
      {children}
    </ThemeProvider>
  );
}
