import React, { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { bookables } from '../../utils/static.json';
import { BookablesListWrapper } from './style';

const BookablesList = () => {
  const [group, setGroup] = useState('Kit');
  const bookablesInGroup = bookables.filter((b) => b.group === group);
  const [bookableIndex, setBookableIndex] = useState(0);

  const groups = [...new Set(bookables.map((b) => b.group))];

  const nextBookable = () => {
    setBookableIndex((prevIndex) => (prevIndex + 1) % bookablesInGroup.length);
  };

  const handleGroup = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setGroup(e.target.value);
  };

  return (
    <BookablesListWrapper>
      <select value={group} onChange={handleGroup} className='bookables__group'>
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
              onClick={() => setBookableIndex(i)}
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
          onClick={nextBookable}
        >
          <FaArrowRight />
          <span>next</span>
        </button>
      </p>
    </BookablesListWrapper>
  );
};

export default BookablesList;
