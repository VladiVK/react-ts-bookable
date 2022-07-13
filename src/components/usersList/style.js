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
