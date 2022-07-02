import { configureStore } from '@reduxjs/toolkit';
import bookablesReducer from './bookablesSlice/bookables_slice';
import navigationReducer from './navigationSlice/navigation_slice';
import usersReducer from './usersSlice/users_slice';
import bookinsReducer from './bookingsSlice/bookings_slice';

export const store = configureStore({
  reducer: {
    bookables: bookablesReducer,
    navigation: navigationReducer,
    users: usersReducer,
    bookings: bookinsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
