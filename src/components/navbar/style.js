import styled from 'styled-components';

export const NavbarWrapper = styled.nav`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  .nav__center {
    width: 90vw;
    margin: 0 auto;
    max-width: var(--max-width);
  }

  @media (min-width: 992px) {
    .nav__center {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
`;
