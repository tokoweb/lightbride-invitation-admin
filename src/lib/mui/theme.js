import { createTheme } from "@mui/material";

import * as twColors from "tailwindcss/colors";

const colors = {
  primary: {
    main: "#c69c6d",
    light: "#cca67c",
    dark: "#b28c62",
  },
  secondary: {
    main: twColors.gray[700],
    light: twColors.gray[500],
    dark: twColors.gray[900],
    contrastText: "#fff",
  },
  warning: {
    main: twColors.yellow[500],
    light: twColors.yellow[400],
    dark: twColors.yellow[600],
    contrastText: "#fff",
  },
  success: {
    main: twColors.green[500],
    light: twColors.green[400],
    dark: twColors.green[600],
    contrastText: "#fff",
  },
  error: {
    main: twColors.red[500],
    light: twColors.red[400],
    dark: twColors.red[600],
    contrastText: "#fff",
  },
};

const theme = createTheme({
  typography: { fontFamily: "var(--font-rubik)" },
  palette: colors,
  components: {
    MuiButtonBase: {
      styleOverrides: {
        root: {
          fontWeight: "400 !important",
        },
        disabled: {
          // opacity: "0 !important",
          // color: "white !important",
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "capitalize",
          fontSize: "1rem",
          fontFamily: "inherit",
        },
        containedPrimary: {
          backgroundColor: `#cca67c`,
          color: "#fff",
          ":hover": {
            backgroundColor: `#b28c62`,
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
          backgroundColor: "rgba(0,0,0,0) !important",
        },
        root: {
          backdropFilter: "blur(4px)",
          backgroundColor: "rgba(0,0,0,0.2)",
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

    MuiPaper: {
      defaultProps: {
        elevation: 0,
      },

      styleOverrides: {
        root: {
          borderRadius: "0.5rem",
        },
      },
    },

    MuiSwitch: {
      styleOverrides: {
        root: {
          width: "46px",
          height: "27px",
          padding: 0,
          margin: "4px",

          "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
            opacity: 1,
          },
          "& .MuiSwitch-switchBase.Mui-disabled + .MuiSwitch-track": {
            opacity: 0.3,
          },
        },
        switchBase: {
          padding: "4px",
        },
        thumb: {
          width: 18,
          height: 18,
          boxShadow: "none",
          backgroundColor: "white",
        },
        track: {
          borderRadius: 9999,
          backgroundColor: "#bdbdbd",
          opacity: "1",
          transition:
            "background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
        },
      },
    },

    MuiAccordion: {
      styleOverrides: {
        root: {
          border: `1px solid ${twColors.gray[200]}`,
          borderRadius: "0.5rem",
          ":before": {
            height: "0rem",
          },
          margin: "0px !important",
        },
      },
    },

    MuiStepConnector: {
      styleOverrides: {
        horizontal: {
          position: "absolute",
          top: "12px",
          left: "calc(-50% + 20px)",
          right: "calc(50% + 20px)",
        },
      },
    },
  },
});

export default theme;
