import styled from 'styled-components';
export const UsersListWrapper = styled.div`
  width: 100%;
  max-width: 20rem;

  display: grid;
  place-items: center;

  .users__list {
    margin: 1rem auto;
    margin: auto;
    width: 100%;
  }

  .users__list-item {
    margin-bottom: 1rem;
  }
  .users__list-item--btn {
    display: inline-block;
    width: 100%;
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

  .users__list-item.selected .users__list-item--btn {
    color: var(--clr-orange);
  }
`;

export const SpinnerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }

  .spinner {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .spinner__icon {
    animation: spin 1.5s linear infinite;
    color: var(--clr-green);
    font-size: 2.5rem;
  }
`;
