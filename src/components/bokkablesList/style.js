import styled from 'styled-components';

export const BookablesListWrapper = styled.div`
  width: 100%;
  max-width: 20rem;

  .bookables__group {
    padding: 3px 10px;
    border-radius: var(--radius);
    border: var(--clr-orange);
    background: var(--clr-orange-light);
    color: var(--clr-white);
    outline: none;
    cursor: pointer;
  }
  .bookables__list {
    margin: 1rem auto;
    width: 100%;
  }
  .bookables__item {
    margin-bottom: 1rem;
  }

  .bookables__btn {
    display: inline-block;
    width: 100%;
    /* margin: 0 auto; */
    background: var(--clr-green-light-1);
    color: var(--clr-green);
    padding: 1rem 0;
    text-transform: capitalize;
    border-radius: 0;
    box-shadow: none;

    &:hover {
      transform: translateX(8px);
    }
  }
  .bookables__item.selected .bookables__btn {
    color: var(--clr-orange);
  }

  .bookables__next-container {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .bokkables__btn--next {
    display: flex;
    align-items: center;
    background: var(--clr-orange-light-2);
    color: var(--clr-orange);

    &:hover {
      color: var(--clr-green);
    }

    svg {
      margin-right: 0.4rem;
    }
  }
`;
