import React, { useEffect } from 'react';
import {
  FaChevronLeft,
  FaCalendarDay,
  FaChevronRight,
  FaCalendarCheck,
} from 'react-icons/fa';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import {
  prevWeek,
  nextWeek,
  setDate,
  today,
} from '../../store/bookingsSlice/bookings_slice';
import { WeekPeakerWrapper } from './style';

const WeekPeaker = () => {
  const dispatch = useAppDispatch();
  const { week } = useAppSelector((state) => state.bookings);

  return (
    <WeekPeakerWrapper>
      <div className='date-peaker'>
        <div className='date-peaker__btn-container prev'>
          <button
            type='button'
            className='btn date-peaker__btn'
            onClick={() => dispatch(prevWeek())}
          >
            <FaChevronLeft />
            <span>prev</span>
          </button>
        </div>

        <div className='date-peaker__btn-container today'>
          <button
            type='button'
            className='btn date-peaker__btn'
            onClick={() => dispatch(today())}
          >
            <FaCalendarDay />
            <span>today</span>
          </button>
        </div>
        <div className='date-peaker__btn-container go'>
          <input
            type='text'
            className='go-input'
            placeholder='e.g 2000-09-02'
          />
          <button type='button' className='btn date-peaker__btn'>
            <FaCalendarCheck />
            <span>go</span>
          </button>
        </div>
        <div
          className='date-peaker__btn-container next'
          onClick={() => dispatch(nextWeek())}
        >
          <button type='button' className='btn date-peaker__btn'>
            <span>next</span>
            <FaChevronRight />
          </button>
        </div>
      </div>
      {/* temp week display */}
      <br />
      <br />
      <br />

      <h4>
        Temp Week: {new Date(week.start).toDateString()} -{' '}
        {new Date(week.end).toDateString()}
      </h4>
    </WeekPeakerWrapper>
  );
};

export default WeekPeaker;
