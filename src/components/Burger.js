import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { toggleSidebarModal } from '../slice/addCartSlice';

const Burger = () => {
  const isModal = useSelector((state) => state.cart.isSidebarOpen)
  const dispatch = useDispatch()
  return ( 
    <Wrapper onClick={() => dispatch(toggleSidebarModal())}>
      <div className={`${isModal ? 'burger open' : 'burger'}`}></div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 16px;
  height: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: var(--burger-transition);
  .burger {
    position: relative;
    width: 16px;
    height: 3px;
    background-color: var(--clr-white);
    transition: var(--burger-transition);
    &::after,
    ::before {
      content: '';
      position: absolute;
      width: 16px;
      height: 3px;
      background-color: var(--clr-white);
      transition: var(--burger-transition);
    }
    &::after {
      transform: translateY(-6px);
    }
    &::before {
      transform: translateY(6px);
    }
    &.open {
      transform: translateX(-21px);
      background: transparent;
    }
    &.open::before {
      transform: rotate(45deg) translate(15px, -15px);
    }
    &.open::after {
      transform: rotate(-45deg) translate(15px, 15px);
    }
  }
  @media screen and (min-width: 992px) {
    display: none;
  }
`;

export default Burger;
