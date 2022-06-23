import styled from 'styled-components';

export const NavbarLinksWrapper = styled.ul`
  display: none;

  li {
    margin: 0 1rem 0 0;
    padding: 0;
    display: flex;
    align-items: center;
  }

  li a {
    margin-right: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-transform: capitalize;
    color: var(--clr-black);
    transition: var(--transition);

    position: relative;

    &:hover {
      transform: translateY(-5px);
    }
  }

  li a.active::after {
    content: '';
    display: block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: var(--clr-orange);
    position: absolute;
    right: -15px;
    transform: translateY(25%);
  }

  li svg {
    margin-right: 0.4rem;
    color: var(--clr-green-light-2);
  }

  @media (min-width: 992px) {
    display: flex;
    align-items: center;
  }
`;
