import { configureStore } from '@reduxjs/toolkit';
import bookablesReducer from './bookablesSlice/bookables_slice';
import navigationReducer from './navigationSlice/navigation_slice';
export const store = configureStore({
  reducer: {
    bookables: bookablesReducer,
    navigation: navigationReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
