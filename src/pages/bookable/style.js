import styled from 'styled-components';

export const BookablesPageWrapper = styled.main`
  .page-content {
    display: grid;

    @media (min-width: 992px) {
      grid-template-columns: 1fr 3fr;
      grid-column-gap: 2.5rem;
    }
  }
`;
