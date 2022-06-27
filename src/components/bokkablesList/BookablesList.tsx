import React, { useState, useEffect } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { BookablesListWrapper } from './style';
import { days, sessions } from '../../utils/static.json';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import {
  changeGroup,
  setNextBookableIndex,
  updateBookablesInGroup,
  setBookableIndex,
  resetBookableIndex,
  setBookable,
  changeDetailsStatus,
} from '../../store/bookablesSlice/bookables_slice';

const BookablesList = () => {
  const dispatch = useAppDispatch();
  const {
    selectedGroup,
    bookablesInGroup,
    groups,
    bookableIndex,
    bookable,
    hasDetails,
  } = useAppSelector((state) => state.bookables);

  useEffect(() => {
    dispatch(resetBookableIndex());
    dispatch(updateBookablesInGroup());
  }, [selectedGroup]);

  useEffect(() => {
    dispatch(setBookable());
  }, [bookableIndex]);

  return (
    <BookablesListWrapper>
      {/* Groups */}

      <div className='bookables__group-container'>
        <select
          value={selectedGroup}
          className='bookables__group'
          onChange={(e) => dispatch(changeGroup(e.target.value))}
        >
          {groups.map((g) => (
            <option key={g} value={g}>
              {g}
            </option>
          ))}
        </select>
        <ul className='bookables__list'>
          {bookablesInGroup.map((b, i) => (
            <li
              key={b.id}
              className={
                i === bookableIndex
                  ? 'bookables__item selected'
                  : 'bookables__item'
              }
            >
              <button
                type='button'
                className='btn bookables__btn'
                onClick={() => dispatch(setBookableIndex(i))}
              >
                {b.title}
              </button>
            </li>
          ))}
        </ul>
        <p className='bookables__next-container'>
          <button
            type='button'
            className='btn bokkables__btn--next'
            onClick={() => dispatch(setNextBookableIndex())}
          >
            <FaArrowRight />
            <span>next</span>
          </button>
        </p>
      </div>
      {/* Details */}
      {bookable && (
        <div className='bookable-details'>
          <div className='bookable-details__item'>
            <div className='bookable-details__item--header'>
              <h2 className='bookable-details__item--title'>
                {bookable.title}
              </h2>
              <span className='bookable-details__item--controls'>
                <label htmlFor='details'>
                  <input
                    type='checkbox'
                    name='details'
                    id='details'
                    checked={hasDetails}
                    onChange={() => dispatch(changeDetailsStatus())}
                  />
                  show details
                </label>
              </span>
            </div>

            <p>{bookable.notes}</p>

            {hasDetails && (
              <div className='bookable-details__item--specialities'>
                <h3>Availability</h3>
                <div className='bookable-details__item--availability'>
                  <ul>
                    {bookable.days.map((d) => (
                      <li key={d}>{days[d]}</li>
                    ))}
                  </ul>
                  <ul>
                    {bookable.sessions.map((s) => (
                      <li key={s}>{sessions[s]}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </BookablesListWrapper>
  );
};

export default BookablesList;
