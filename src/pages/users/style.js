import styled from 'styled-components';

export const UsersPageWrapper = styled.main`
  .page-content {
    display: grid;
    row-gap: 2.5rem;

    @media (min-width: 992px) {
      grid-template-columns: 1fr 3fr;
      column-gap: 2.5rem;
    }
  }
`;
