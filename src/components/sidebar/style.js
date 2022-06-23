import styled from 'styled-components';

export const SidebarWrapper = styled.div`
  background: var(--clr-main-bg);

  .sidebar {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    transition: var(--transition);
    background: var(--clr-main-bg);
    transform: translateX(-100%);
    z-index: -1;

    @media (min-width: 992px) {
      display: none;
    }
  }

  .sidebar-show {
    transform: translateX(0);
    z-index: 999;
  }

  .sidebar__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 2.5rem 1rem 1.5rem;
    margin-bottom: 2rem;
  }

  .sidebar__logo {
    width: 40px;
  }
  .sidebar__btn-close {
    display: flex;
    align-items: center;

    background: transparent;
    border: none;
    outline: none;
    color: var(--clr-orange);
    transition: var(--transition);
    cursor: pointer;
    font-size: 1.5rem;

    &:hover {
      transform: scale(0.9);
    }
  }

  .sidebar__links {
    padding: 1rem 2.5rem 1rem 1.5rem;
  }

  .sidebar__link {
    margin-bottom: 1rem;
    padding: 0;
    display: flex;
    align-items: center;

    a {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.5rem;
      text-transform: capitalize;
      color: var(--clr-black);
      transition: var(--transition);

      position: relative;

      &:hover {
        transform: translateX(8px);
      }
    }

    a.active::after {
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

    svg {
      margin-right: 0.4rem;
      color: var(--clr-green-light-2);
    }
  }

  .sidebar__users {
    display: inline-block;
    padding: 1rem 2.5rem 1rem 1.5rem;
  }
`;
