import { ThemeProvider } from "styled-components";

export default function Theme({ children }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
