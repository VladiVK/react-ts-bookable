import React from 'react';
import { BookablesList } from '../../components';
import BookableListDetails from '../../components/bookableListDetails/BookableListDetails';
import { BookablesPageWrapper } from './style';
const BookablePage = () => {
  return (
    <BookablesPageWrapper className='container-center page-100-vh'>
      <div className='page-content'>
        <BookablesList />
        <BookableListDetails />
      </div>
    </BookablesPageWrapper>
  );
};

export default BookablePage;
