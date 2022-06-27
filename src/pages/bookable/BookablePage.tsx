import React from 'react';
import { BookablesList } from '../../components';
import { BookablesPageWrapper } from './style';
const BookablePage = () => {
  return (
    <BookablesPageWrapper className='container-center'>
      <div className='bookables-page__content'>
        <BookablesList />
      </div>
    </BookablesPageWrapper>
  );
};

export default BookablePage;
