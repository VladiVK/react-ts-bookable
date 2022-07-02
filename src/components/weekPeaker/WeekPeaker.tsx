import React from 'react';
import {
  FaChevronLeft,
  FaCalendarDay,
  FaChevronRight,
  FaCalendarCheck,
} from 'react-icons/fa';
import { WeekPeakerWrapper } from './style';

const WeekPeaker = () => {
  return (
    <WeekPeakerWrapper>
      <div className='date-peaker'>
        <div className='date-peaker__btn-container prev'>
          <button type='button' className='btn date-peaker__btn'>
            <FaChevronLeft />
            <span>prev</span>
          </button>
        </div>

        <div className='date-peaker__btn-container today'>
          <button type='button' className='btn date-peaker__btn'>
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
        <div className='date-peaker__btn-container next'>
          <button type='button' className='btn date-peaker__btn'>
            <span>next</span>
            <FaChevronRight />
          </button>
        </div>
      </div>
    </WeekPeakerWrapper>
  );
};

export default WeekPeaker;
