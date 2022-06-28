import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { days, sessions } from '../../utils/static.json';
import { changeDetailsStatus } from '../../store/bookablesSlice/bookables_slice';

const BookableListDetails = () => {
  const dispatch = useAppDispatch();
  const { bookable, hasDetails } = useAppSelector((state) => state.bookables);
  return (
    <div className='bookable-details'>
      <div className='bookable-details__item'>
        <div className='bookable-details__item--header'>
          <h2 className='bookable-details__item--title'>{bookable.title}</h2>
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
  );
};

export default BookableListDetails;
