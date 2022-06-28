import styled from 'styled-components';

export const BookableListDetailsWrapper = styled.div`
  .details__item--header {
    margin-bottom: 1rem;
    @media (min-width: 992px) {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
  .details__item--title {
    color: var(--clr-orange);
    font-weight: 600;
  }
  .details__item--controls {
    display: block;
    margin-bottom: 0.7rem;
    text-transform: capitalize;

    input {
      margin-right: 0.5rem;
    }

    @media (min-width: 992px) {
      margin-bottom: 0;
    }
  }
  .details__item--notes {
  }
  .details__item--specialities {
    h3 {
      font-weight: 600;
      padding-bottom: 1rem;
      border-bottom: 1px solid var(--clr-grey);
    }
  }
  .details__item--availability {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 2rem;
    justify-content: start;

    ul li {
      margin-bottom: 0.3rem;
      margin-left: 1rem;
      position: relative;
    }
    ul li::before {
      content: '';
      display: block;
      position: absolute;
      top: 50%;
      left: -15px;
      transform: translateY(-50%);
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: var(--clr-orange);
    }
  }
`;
