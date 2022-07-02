import React, { useEffect } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { BookablesListWrapper } from './style';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import {
  changeGroup,
  setNextBookableIndex,
  updateBookablesInGroup,
  setBookableIndex,
  resetBookableIndex,
  setBookable,
} from '../../store/bookablesSlice/bookables_slice';

const BookablesList = () => {
  const dispatch = useAppDispatch();
  const {
    selectedGroup,
    bookablesInGroup,
    groups,
    bookableIndex,
  } = useAppSelector((state) => state.bookables);

  // useEffect(() => {
  //   dispatch(resetBookableIndex());
  //   dispatch(updateBookablesInGroup());
  //   dispatch(setBookable());
  // }, [selectedGroup]);

  // useEffect(() => {
  //   dispatch(setBookable());
  // }, [bookableIndex]);

  return (
    <BookablesListWrapper>
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
    </BookablesListWrapper>
  );
};

export default BookablesList;
