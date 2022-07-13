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
  .details__item--content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.7rem;

    @media (min-width: 992px) {
      margin-bottom: none;
    }
  }
  .details__item--controls {
    display: block;
    text-transform: capitalize;

    margin-right: 1.5rem;

    label {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    input {
      margin-right: 0.5rem;
    }

    @media (min-width: 992px) {
      margin-bottom: 0;
    }
  }
  .details__item--stop-btn {
    display: flex;
    align-items: center;
    font-size: 0.7rem;

    span {
      margin-right: 5px;
    }

    svg {
      font-size: 1rem;
    }
    &:hover {
      color: var(--clr-green);
      border: 1px solid var(--clr-green);
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
