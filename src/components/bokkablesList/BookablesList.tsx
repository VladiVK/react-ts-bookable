import React, { MutableRefObject, useEffect, useRef } from 'react';
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
  fetchBookables,
} from '../../store/bookablesSlice/bookables_slice';
import Loader from '../loader';

const BookablesList = () => {
  // initially we fetch bookables in Navbar because that was static when routing
  const dispatch = useAppDispatch();
  const {
    selectedGroup,
    bookablesInGroup,
    groups,
    bookableIndex,
    isLoading,
    error,
    isPresentation,
  } = useAppSelector((state) => state.bookables);

  //  Start presentation
  useEffect(() => {
    let timerID: NodeJS.Timer;
    if (isPresentation) {
      timerID = setInterval(() => {
        dispatch(setNextBookableIndex());
      }, 3000);
    }
    return () => clearInterval(timerID);
  }, [isPresentation]);

  // Button ref focus();

  const nextButtonRef = useRef<HTMLButtonElement | null>(null);

  // Spinner
  if (isLoading) {
    return <Loader size='medium' />;
  }

  // List
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
                onClick={() => {
                  dispatch(setBookableIndex(i));
                  if (nextButtonRef.current) nextButtonRef.current.focus();
                }}
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
            ref={nextButtonRef}
            autoFocus
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
