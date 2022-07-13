import styled from 'styled-components';

export const LoaderWrapper = styled.div`
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

    &.small {
      font-size: 1.5rem;
    }
    &.medium {
      font-size: 2.5rem;
    }
    &.large {
      font-size: 3.5rem;
    }
  }
`;
