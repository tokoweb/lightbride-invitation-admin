import { createSlice } from "@reduxjs/toolkit";

const navigationSlice = createSlice({
  name: "navigation",
  initialState: { current: "", expanded: "", open: false },
  reducers: {
    setNavigation: (state, acion) => ({
      ...state,
      current: acion.payload,
    }),
    setExpanded: (state, acion) => ({
      ...state,
      expanded: acion.payload,
    }),
    setNavigationOpen: (state, action) => ({
      ...state,
      open: action.payload,
    }),
  },
});

export const getCurrentNavigation = (state) => state.navigation.current;
export const getExpanded = (state) => state.navigation.expanded;
export const getNavigationOpen = (state) => state.navigation.open;

export const { setNavigation, setExpanded, setNavigationOpen } =
  navigationSlice.actions;
export default navigationSlice.reducer;
