import { ThemeProvider } from "styled-components";
import { colors } from "./themes";

export default function Theme({ children }) {
  return <ThemeProvider theme={{ colors }}>{children}</ThemeProvider>;
}
