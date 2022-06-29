import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { days, sessions } from '../../utils/static.json';
import { changeDetailsStatus } from '../../store/bookablesSlice/bookables_slice';
import { BookableListDetailsWrapper } from './style';

const BookableListDetails = () => {
  const dispatch = useAppDispatch();
  const { bookable, hasDetails } = useAppSelector((state) => state.bookables);
  if (Object.keys(bookable).length === 0) {
    return null;
  }
  return (
    <BookableListDetailsWrapper>
      <div className='details__item'>
        <div className='details__item--header'>
          <h2 className='details__item--title'>{bookable.title}</h2>
          <span className='details__item--controls'>
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

        <p className='details__item--notes'>{bookable.notes}</p>

        {hasDetails && (
          <div className='details__item--specialities'>
            <h3>Availability</h3>
            <div className='details__item--availability'>
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
    </BookableListDetailsWrapper>
  );
};

export default BookableListDetails;
