import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserListProps } from '../components/UsersList';

type Widget = {
  isOpen: boolean;
  users: UserListProps[];
  user: UserListProps | null;
}

const initialState: Widget = {
  isOpen: false,
  users: [],
  user: null
}

const widgetSlice = createSlice({
  name: 'widget',
  initialState,
  reducers: {
    updateWindow(state, action: PayloadAction<boolean>) {
      state.isOpen = action.payload;
    },
    upadteUsers(state, action: PayloadAction<UserListProps[]>) {
      state.users = action.payload;
    },
    upadteUser(state, action: PayloadAction<UserListProps>) {
      state.user = action.payload;
    }
  },
});

export const { updateWindow, upadteUsers, upadteUser } = widgetSlice.actions;

export default widgetSlice.reducer;