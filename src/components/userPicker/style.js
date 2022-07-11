import styled from 'styled-components';

export const UserPickerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  .picker {
    padding: 3px 10px;
    border-radius: var(--radius);
    border: var(--clr-orange);
    background: var(--clr-orange-light);
    color: var(--clr-white);
    outline: none;
    cursor: pointer;
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
    font-size: 24px;
  }
`;
