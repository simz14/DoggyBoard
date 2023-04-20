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
    MuiTableRow: {
      styleOverrides: {
        root: {
          cursor: "pointer",
          ":hover": {
            backgroundColor: "#f1f5f9",
          },
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
