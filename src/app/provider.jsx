"use client";

import { Provider as ReduxProvider } from "react-redux";
import { ThemeProvider } from "@mui/material";
import store from "@/redux/store";
import theme from "@/lib/mui/theme";

export const Provider = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <ReduxProvider store={store}>{children}</ReduxProvider>
    </ThemeProvider>
  );
};
