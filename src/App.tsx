import React from 'react';
import { Route, Routes } from 'react-router-dom';

// Pages
import {
  BookingsPage,
  UsersPage,
  BookablePage,
  ErrorPage,
  SharedLayout,
} from './pages';

function App() {
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
