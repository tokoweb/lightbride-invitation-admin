import { createTheme } from "@mui/material";
import * as twColors from "tailwindcss/colors";

const colors = {
  primary: {
    main: twColors.indigo[500],
    light: twColors.indigo[400],
    dark: twColors.indigo[600],
  },
  secondary: {
    main: twColors.gray[700],
    light: twColors.gray[500],
    dark: twColors.gray[900],
  },
  warning: {
    main: twColors.yellow[500],
    light: twColors.yellow[400],
    dark: twColors.yellow[600],
  },
  success: {
    main: twColors.green[500],
    light: twColors.green[400],
    dark: twColors.green[600],
  },
  error: {
    main: twColors.red[400],
    light: twColors.red[300],
    dark: twColors.red[500],
  },
};

const theme = createTheme({
  typography: { fontFamily: "var(--font-rubik)" },
  palette: colors,
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "capitalize",
        },
        containedPrimary: {
          backgroundColor: `${twColors.indigo[500]} !important`,
          color: "#fff",
          ":hover": {
            backgroundColor: `${twColors.indigo[600]} !important`,
          },
        },
        containedSecondary: {
          backgroundColor: `${twColors.gray[500]} !important`,
          color: "#fff",
          ":hover": {
            backgroundColor: `${twColors.gray[600]} !important`,
          },
        },
        containedSuccess: {
          backgroundColor: `${twColors.green[500]} !important`,
          color: "#fff",
          ":hover": {
            backgroundColor: `${twColors.green[600]} !important`,
          },
        },
        containedError: {
          backgroundColor: `${twColors.red[400]} !important`,
          color: "#fff",
          ":hover": {
            backgroundColor: `${twColors.red[500]} !important`,
          },
        },
        containedWarning: {
          backgroundColor: `${twColors.yellow[500]} !important`,
          color: "#fff",
          ":hover": {
            backgroundColor: `${twColors.yellow[600]} !important`,
          },
        },
      },
    },
    MuiTable: {
      styleOverrides: {
        root: {
          borderRadius: "5px",
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          height: "3.5rem",
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          backgroundColor: colors.primary.main,
          color: twColors.white,
        },
      },
    },
    MuiTableSortLabel: {
      styleOverrides: {
        root: {
          color: twColors.white,
          "&.Mui-active": {
            color: twColors.white,
          },
          "&:hover": {
            color: twColors.white,
          },
        },
        icon: {
          "&.Mui-active": { color: twColors.gray[200] },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
        },
        filled: {
          color: "white",
        },
      },
    },
    MuiBackdrop: {
      styleOverrides: {
        invisible: {
          opacity: "0 !important",
          backgroundColor: "rgba(255,255,255,0) !important",
        },
        root: {
          backdropFilter: "blur(4px)",
          backgroundColor: "rgba(255,255,255,0.2)",
        },
      },
    },
    MuiPopover: {
      styleOverrides: {
        paper: {
          borderRadius: "8px",
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          borderRadius: "8px",
        },
      },
    },
    MuiTooltip: {
      defaultProps: {
        placement: "top",
        enterDelay: 500,
        arrow: true,
      },
    },
  },
});

export default theme;
