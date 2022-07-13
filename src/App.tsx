import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import { useAppDispatch } from './hooks/hooks';
import { fetchBookables } from './store/bookablesSlice/bookables_slice';

// Pages
import {
  BookingsPage,
  UsersPage,
  BookablePage,
  ErrorPage,
  SharedLayout,
} from './pages';
import { fetchUsers } from './store/usersSlice/users_slice';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
    dispatch(fetchBookables());
  }, []);

  return (
    <div>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<BookingsPage />} />
          <Route path='bookable' element={<BookablePage />} />
          <Route path='users' element={<UsersPage />} />
          <Route path='*' element={<ErrorPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
