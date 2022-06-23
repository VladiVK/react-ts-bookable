import styled from 'styled-components';

export const SidebarWrapper = styled.div`
  background: var(--main-bg);

  .sidebar {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    transition: var(--transition);
    background: var(--main-bg);
    transform: translateX(-100%);
    z-index: -1;
  }

  .sidebar-show {
    transform: translateX(0);
    z-index: 999;
  }
`;
