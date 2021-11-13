import React from 'react';
import SidebarLinks from './SidebarLinks';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const Sidebar = () => {
  const isModal = useSelector((state) => state.cart.isSidebarOpen)
  return (
    <Wrapper className={`${isModal ? 'show-sidebar shadow' : ''}`}>
      <SidebarLinks />
    </Wrapper>
  );
};

const Wrapper = styled.aside`
  transition: var(--burger-transition);
  transform: translateX(-100vw);
  position: absolute;
  top: 5.625rem;
  left: 0;
  right: 0;
  z-index: 999;
  overflow: auto;
  @media screen and (min-width: 992px) {
    display: none;
  }
  &.show-sidebar {
    transform: translateX(0);
  }
`;

export default Sidebar;
