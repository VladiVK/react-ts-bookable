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

    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .nav__logo {
    transition: var(--transition);
    width: 45px;
  }
  .nav__logo:hover {
    transform: scale(0.9);
  }
  .nav__toggle {
    background: transparent;
    border: none;
    cursor: pointer;
    color: var(--clr-green-light-2);

    svg {
      font-size: 1.5rem;
    }
  }

  .nav__users {
    display: none;
  }

  @media (min-width: 992px) {
    .nav__toggle {
      display: none;
    }
    .nav__users {
      display: block;
    }
  }
`;
