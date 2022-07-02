import styled from 'styled-components';
export const WeekPeakerWrapper = styled.div`
  .date-peaker {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto auto;
    grid-row-gap: 1rem;
    align-items: center;
    grid-template-areas:
      'prev today next'
      'go go go';

    @media (min-width: 600px) {
      grid-template-columns: 1fr 1fr 2fr 1fr;
      grid-template-rows: none;
      grid-template-areas: 'prev today go next';
    }
  }

  .date-peaker__btn-container {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .date-peaker__btn {
    font-size: 0.6rem;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (min-width: 992px) {
      font-size: 0.8rem;
    }

    svg {
      margin-right: 5px;
    }

    &:hover {
      background: transparent;
      color: var(--clr-green);
      border: 1px solid var(--clr-green);
    }
  }

  .prev {
    grid-area: prev;
    display: flex;
    align-items: center;
    justify-content: start;

    @media (min-width: 992px) {
      justify-content: start;
    }
  }
  .next {
    grid-area: next;
    display: flex;
    align-items: center;
    justify-content: end;

    svg {
      margin-left: 5px;
    }

    @media (min-width: 992px) {
      justify-content: end;
    }
  }
  .today {
    grid-area: today;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .go {
    grid-area: go;

    justify-content: space-between;

    .go-input {
      border: transparent;
      border-radius: var(--radius);
      padding: 0.375rem 0.75rem;
      letter-spacing: var(--spacing);
      outline: none;
    }
    .go-input::placeholder {
      color: var(--clr-grey);
    }
  }
`;
