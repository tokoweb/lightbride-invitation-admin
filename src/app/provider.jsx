"use client";

import React from "react";

import { ThemeProvider } from "@mui/material";
import Alert from "@mui/material/Alert";
import { StyledEngineProvider } from "@mui/material/styles";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import { SnackbarProvider } from "notistack";
import { Provider as ReduxProvider } from "react-redux";

import theme from "@lib/mui/theme";
import { cn } from "@/lib/utils";
import store from "@/redux/store";

const customSnackbar = React.forwardRef(function Snackbar(
  { message, iconVariant, variant, hideIconVariant, style, className },
  ref,
) {
  return (
    <Alert
      iconMapping={iconVariant}
      color={variant}
      icon={hideIconVariant}
      ref={ref}
      style={style}
      className={cn("text-white", className)}
    >
      {message}
    </Alert>
  );
});

export const Provider = ({ children }) => {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <LocalizationProvider
          // adapterLocale="id"
          dateFormats={{}}
          dateAdapter={AdapterDayjs}
        >
          <SnackbarProvider
            maxSnack={5}
            autoHideDuration={3500}
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
            Components={{
              MuiSnackbar: customSnackbar,
            }}
          >
            <ReduxProvider store={store}>{children}</ReduxProvider>
          </SnackbarProvider>
        </LocalizationProvider>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};
