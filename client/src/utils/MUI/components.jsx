import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  components: {
    MuiTableHead: {
      styleOverrides: {
        root: {
          backgroundColor: "#f6f9fb",
        },
      },
    },
    MuiTableBody: {
      styleOverrides: {
        root: {
          backgroundColor: "white",
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          textAlign: "start",
        },
      },
    },
  },
});
