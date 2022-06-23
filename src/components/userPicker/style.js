import styled from 'styled-components';

export const UserPickerWrapper = styled.div`
  display: none;

  @media (min-width: 992px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }

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
