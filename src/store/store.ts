import { configureStore } from '@reduxjs/toolkit';
import bookablesReducer from './bookablesSlice/bookables_slice';
export const store = configureStore({
  reducer: {
    bookables: bookablesReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
