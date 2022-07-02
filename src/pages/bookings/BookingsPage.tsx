import React from 'react';
import { BookablesList, WeekPeaker } from '../../components';
import { BookingsWrapper } from './style';

const BookingsPage = () => {
  return (
    <BookingsWrapper className='container-center page-100-vh'>
      <div className='page-content'>
        <BookablesList />
        <div className='calendar'>
          <WeekPeaker />
        </div>
      </div>
    </BookingsWrapper>
  );
};

export default BookingsPage;
