import { createSlice } from '@reduxjs/toolkit';

interface SidebarState {
  isSideBarOpen: boolean;
}

const initialState: SidebarState = {
  isSideBarOpen: true,
};

const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isSideBarOpen = !state.isSideBarOpen;
    },
  },
});

export const { toggleSidebar } = sidebarSlice.actions;

export default sidebarSlice.reducer;
