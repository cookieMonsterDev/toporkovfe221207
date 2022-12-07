import { configureStore } from '@reduxjs/toolkit';
import widgetSlice from './Reducer';

const store = configureStore({
  reducer: {
    widget: widgetSlice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

