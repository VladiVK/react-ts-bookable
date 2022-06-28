import React from 'react';
import { BookablesList } from '../../components';
import { BookablesPageWrapper } from './style';
const BookablePage = () => {
  return (
    <BookablesPageWrapper className='container-center page-100-vh'>
      <BookablesList />
    </BookablesPageWrapper>
  );
};

export default BookablePage;
